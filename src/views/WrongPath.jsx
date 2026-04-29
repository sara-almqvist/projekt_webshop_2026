import { Link } from 'react-router-dom';

const WrongPath = () => {
  return (
    <>
      <h1>Sidan du söker finns inte</h1>
      <Link to={'/'}>Till webshoppen</Link>
    </>
  );
};

export default WrongPath;
