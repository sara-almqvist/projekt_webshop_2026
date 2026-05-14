const Footer = () => {
  return (
    <>
      <footer className="flex justify-evenly p-8 bg-green-200 my-8">
        <div className="flex flex-col">
          <h4 className="text-purple-500">Behöver du hjälp?</h4>
          <p>Kontakta vår kundservice</p>
        </div>
        <div className="flex flex-col">
          <h4>Om webbshoppen</h4>
          <p>
            Vi är ett nystartat företag med visionen att erbjuda prisvärda varor
            till alla
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
