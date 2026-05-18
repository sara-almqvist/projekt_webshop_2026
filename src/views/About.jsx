import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <h1 className="text-[#ed6b35] text-3xl font-medium">
        Om <span className="italic font-semibold">Allt & Lite Till</span>
      </h1>
      <div className="flex flex-col place-items-center gap-4">
        <p className="text-[#32033a] text-base mx-10 text-justify">
          <span className="italic font-semibold">Allt & Lite Till</span>{' '}
          startades i ett trångt källarförråd av två vänner som tröttnat på att
          behöva besöka tio olika hemsidor bara för att göra sina vardagsinköp.
          Deras vision var enkel: att skapa ett digitalt varuhus där kunden kan
          klicka hem både hundmat, snygga skor och unika inredningsdetaljer på
          en och samma gång. Genom att fokusera på snabba leveranser och ett
          ständigt överraskande sortiment växte det lilla källarprojektet snabbt
          till en älskad mötesplats på nätet. Namnet blev snabbt synonymt med
          den där speciella känslan av att alltid hitta exakt det man söker,
          plus något oväntat extra som förgyller vardagen. Idag är företaget
          stolta över att leverera smarta lösningar, hög kvalitet och den där
          magiska upplevelsen av att få allt – och lite till.
        </p>
        <Link to={'/'} className="w-1/2">
          <img
            src="https://res.cloudinary.com/dfplwytwx/image/upload/v1778768249/Ska%CC%88rmavbild_2026-05-14_kl._16.16.03_nrcjds.png"
            alt="Företagets logga"
          />
        </Link>
      </div>
    </>
  );
};

export default About;
