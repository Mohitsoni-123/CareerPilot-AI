import { useEffect, useState } from "react";
import { User, Bell, Lock, Palette, LogOut, Save } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import api from "../services/api";
import { logout } from "../redux/slices/authSlice";

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  // Account
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Notifications
  const [notifications, setNotifications] = useState(true);

  const [emailNotifications, setEmailNotifications] = useState(true);

  // Password
  const [currentPassword, setCurrentPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");

  // Appearance
  const [darkMode, setDarkMode] = useState(false);

  // Loading states
  const [savingAccount, setSavingAccount] = useState(false);

  const [savingNotifications, setSavingNotifications] = useState(false);

  const [changingPassword, setChangingPassword] = useState(false);

  // ==========================================
  // LOAD USER DATA
  // ==========================================

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/users/profile");

        const currentUser = response.data.user;

        setName(currentUser?.name || "");
        setEmail(currentUser?.email || "");

        setNotifications(
          currentUser?.notificationSettings?.pushNotifications ?? true,
        );

        setEmailNotifications(
          currentUser?.notificationSettings?.emailNotifications ?? true,
        );
      } catch (error) {
        console.error("Settings Profile Error:", error);
      }
    };

    fetchProfile();
  }, []);

  // ==========================================
  // UPDATE ACCOUNT
  // ==========================================

  const handleSaveAccount = async () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    setSavingAccount(true);

    try {
      const response = await api.put("/users/settings/account", {
        name,
        email,
      });

      setName(response.data.user.name);
      setEmail(response.data.user.email);

      alert("Account settings updated successfully!");
    } catch (error) {
      console.error("Update Account Error:", error);

      alert(
        error.response?.data?.message || "Failed to update account settings",
      );
    } finally {
      setSavingAccount(false);
    }
  };

  // ==========================================
  // UPDATE NOTIFICATIONS
  // ==========================================

  const handleNotificationChange = async (type) => {
    const newPushValue = type === "push" ? !notifications : notifications;

    const newEmailValue =
      type === "email" ? !emailNotifications : emailNotifications;

    // Update UI immediately
    setNotifications(newPushValue);
    setEmailNotifications(newEmailValue);

    setSavingNotifications(true);

    try {
      await api.put("/users/settings/notifications", {
        pushNotifications: newPushValue,

        emailNotifications: newEmailValue,
      });
    } catch (error) {
      console.error("Notification Settings Error:", error);

      // Revert if API fails
      setNotifications(notifications);
      setEmailNotifications(emailNotifications);

      alert(
        error.response?.data?.message ||
          "Failed to update notification settings",
      );
    } finally {
      setSavingNotifications(false);
    }
  };

  // ==========================================
  // CHANGE PASSWORD
  // ==========================================

  const handleChangePassword = async () => {
    if (!currentPassword) {
      alert("Please enter your current password");
      return;
    }

    if (!newPassword) {
      alert("Please enter your new password");
      return;
    }

    if (newPassword.length < 6) {
      alert("New password must be at least 6 characters");
      return;
    }

    setChangingPassword(true);

    try {
      await api.put("/users/settings/password", {
        currentPassword,
        newPassword,
      });

      setCurrentPassword("");
      setNewPassword("");

      alert("Password changed successfully!");
    } catch (error) {
      console.error("Change Password Error:", error);

      alert(error.response?.data?.message || "Failed to change password");
    } finally {
      setChangingPassword(false);
    }
  };

  // ==========================================
  // LOGOUT
  // ==========================================

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Settings</h1>

          <p className="text-slate-500 mt-2">
            Manage your CareerPilot AI account preferences and settings.
          </p>
        </div>

        <div className="space-y-6">
          {/* ================================= */}
          {/* ACCOUNT SETTINGS */}
          {/* ================================= */}

          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                <User size={20} />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Account Settings
                </h2>

                <p className="text-sm text-slate-500">
                  Manage your account information.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name */}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button
              onClick={handleSaveAccount}
              disabled={savingAccount}
              className="mt-6 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              <Save size={18} />

              {savingAccount ? "Saving..." : "Save Account"}
            </button>
          </div>

          {/* ================================= */}
          {/* NOTIFICATIONS */}
          {/* ================================= */}

          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                <Bell size={20} />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Notifications
                </h2>

                <p className="text-sm text-slate-500">
                  Control how you receive notifications.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {/* Push Notifications */}

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-slate-900">
                    Push Notifications
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    Receive notifications about your career activity.
                  </p>
                </div>

                <button
                  onClick={() => handleNotificationChange("push")}
                  disabled={savingNotifications}
                  className={`relative w-12 h-6 rounded-full transition ${
                    notifications ? "bg-blue-600" : "bg-slate-300"
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition ${
                      notifications ? "right-1" : "left-1"
                    }`}
                  />
                </button>
              </div>

              {/* Email Notifications */}

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-slate-900">
                    Email Notifications
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    Receive career updates through email.
                  </p>
                </div>

                <button
                  onClick={() => handleNotificationChange("email")}
                  disabled={savingNotifications}
                  className={`relative w-12 h-6 rounded-full transition ${
                    emailNotifications ? "bg-blue-600" : "bg-slate-300"
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition ${
                      emailNotifications ? "right-1" : "left-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* ================================= */}
          {/* SECURITY */}
          {/* ================================= */}

          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                <Lock size={20} />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Security
                </h2>

                <p className="text-sm text-slate-500">
                  Manage your account security.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Current Password */}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Current Password
                </label>

                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Current password"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* New Password */}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  New Password
                </label>

                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New password"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button
              onClick={handleChangePassword}
              disabled={changingPassword}
              className="mt-5 border border-slate-300 hover:bg-slate-50 disabled:bg-slate-100 px-5 py-2.5 rounded-lg font-medium text-slate-700"
            >
              {changingPassword ? "Changing..." : "Change Password"}
            </button>
          </div>

          {/* ================================= */}
          {/* APPEARANCE */}
          {/* ================================= */}

          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center">
                <Palette size={20} />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Appearance
                </h2>

                <p className="text-sm text-slate-500">
                  Customize your application appearance.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-slate-900">Dark Mode</h3>

                <p className="text-sm text-slate-500 mt-1">
                  Enable dark mode for the application.
                </p>
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative w-12 h-6 rounded-full transition ${
                  darkMode ? "bg-blue-600" : "bg-slate-300"
                }`}
              >
                <span
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition ${
                    darkMode ? "right-1" : "left-1"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* ================================= */}
          {/* LOGOUT */}
          {/* ================================= */}

          <div className="bg-white border border-red-200 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Logout</h2>

                <p className="text-slate-500 mt-1">
                  Sign out from your CareerPilot AI account.
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 px-5 py-3 rounded-lg font-medium"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
