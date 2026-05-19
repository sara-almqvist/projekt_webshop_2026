import { Link } from 'react-router-dom';

const WrongPath = () => {
  return (
    <div className="md:min-h-150">
      <h1 className="text-4xl font-semibold text-shadow-md text-[#ed6b35]">
        Sidan du söker finns inte
      </h1>
      <Link
        to={'/'}
        className="text-[#ed6b35] text-xl hover:text-2xl font-semibold"
      >
        Till startsidan
      </Link>
    </div>
  );
};

export default WrongPath;
