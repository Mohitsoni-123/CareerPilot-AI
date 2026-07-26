import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>

      <h1>
        CareerPilot AI
      </h1>

      <h2>
        Build Your Career with AI
      </h2>

      <p>
        Analyze your resume, discover better jobs,
        identify skill gaps, and prepare for interviews.
      </p>

      <Link to="/register">
        Get Started
      </Link>

      <br />

      <Link to="/login">
        Login
      </Link>

    </div>
  );
};

export default Home;