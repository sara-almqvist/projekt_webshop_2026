const Button = ({ text, action }) => {
  return (
    <button
      className="bg-gray-500 p-2 rounded-full text-white font-bold hover:bg-gray-600 shadow-xl shadow-grey-500/50"
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
