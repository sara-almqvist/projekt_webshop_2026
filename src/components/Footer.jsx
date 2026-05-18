import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="flex justify-evenly p-8 bg-[#32033a] my-8">
        <Link to={'/contact'}>
          <div className="flex flex-col">
            <h4 className="text-[#ed6b35]">Behöver du hjälp?</h4>
            <p className="text-[#e6e6e6]">Kontakta vår kundservice</p>
          </div>
        </Link>
        <div className="flex flex-col">
          <Link to={'/about'}>
            <h4 className="text-[#ed6b35]">Om webbshoppen</h4>
            <p className="text-[#e6e6e6]">
              Vi är ett innovativt företag med visionen att erbjuda prisvärda
              varor till alla
            </p>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
