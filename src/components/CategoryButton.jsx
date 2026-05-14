const CategoryButton = ({ value, handleClick, label }) => {
  return (
    <button
      value={value}
      onClick={handleClick}
      className="bg-green-700 p-2 rounded-xl text-white font-bold hover:bg-gray-600 shadow-xl shadow-grey-500/50 min-w-35"
    >
      {label}
    </button>
  );
};

export default CategoryButton;
