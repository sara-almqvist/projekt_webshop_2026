const Button = ({ text, action, isDisabled = false }) => {
  return (
    <button
      className="bg-[#32033a] p-2 rounded-full text-white font-bold hover:bg-[#db4e14] shadow-xl shadow-grey-500/50 my-2"
      onClick={action}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
