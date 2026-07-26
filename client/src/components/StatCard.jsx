const StatCard = ({
  title,
  value,
  description,
  icon: Icon,
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            {value}
          </h2>

          <p className="text-sm text-slate-500 mt-2">
            {description}
          </p>

        </div>

        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

          <Icon
            size={24}
            className="text-blue-600"
          />

        </div>

      </div>

    </div>
  );
};

export default StatCard;