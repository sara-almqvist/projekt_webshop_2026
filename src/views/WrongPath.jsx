import { Link } from 'react-router-dom';

const WrongPath = () => {
  return (
    <div className="flex flex-col justify-evenly">
      <h1 className="text-4xl font-semibold text-shadow-md text-[#ed6b35]">
        Sidan du söker finns inte
      </h1>
      <Link
        to={'/'}
        className="text-[#ed6b35] text-2xl hover:text-3xl font-semibold"
      >
        Till startsidan
      </Link>
    </div>
  );
};

export default WrongPath;
