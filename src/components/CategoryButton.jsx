const CategoryButton = ({ value, handleClick, label }) => {
  return (
    <button
      value={value}
      onClick={handleClick}
      className="bg-[#f18d64] p-2 rounded-xl text-[#32033a] font-bold hover:bg-[#db4e14] shadow-xl shadow-grey-500/50 min-w-35"
    >
      {label}
    </button>
  );
};

export default CategoryButton;
