import { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const [contactName, setContactName] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const parentFunction = (e) => {
    setContactName(e);
    setIsSubmit(true);
  };

  return (
    <div className="p-6 text-[#ed6b35] text-xl flex flex-col lg:flex-row gap-2">
      <div className="basis-1/2 mb-4 flex flex-col justify-evenly">
        <h2 className="text-4xl font-medium ">
          Så här kontaktar du{' '}
          <span className="font-serif italic font-semibold text-shadow-md text-5xl whitespace-nowrap">
            Allt & Lite Till
          </span>
        </h2>
        <div className="self-center border-2 border-dotted border-white py-2 px-6 rounded-xl text-lg">
          <ul className="list-disc list-outside text-left text-[#32033a]">
            <li className="p-4">
              <p>
                Via <span className="uppercase font-bold">telefon</span>: 1234
                5678.{' '}
              </p>
              <p className="italic">Vi svarar alla dagar mellan kl 9-18</p>
            </li>
            <li className="p-4">
              <p>
                Via <span className="uppercase font-bold">mejl</span>:{' '}
                <a
                  href="mailto:info@alltochlitetill.se"
                  className="underline decoration-1"
                >
                  info@alltochlitetill.se
                </a>
              </p>
            </li>
            <li className="p-4">
              Via <span className="uppercase font-bold">kontaktformulär</span>
            </li>
          </ul>
        </div>
      </div>

      {isSubmit ? (
        <Link to={'/categories'}>
          <p className="text-xl bg-white w-1/2 mx-auto mt-6 p-4">
            Tack för ditt meddelande {contactName}! <br />
            Vi hör av oss så snart vi kan
          </p>
        </Link>
      ) : (
        <>
          <ContactForm updateParent={parentFunction} />
        </>
      )}
    </div>
  );
};

export default Contact;
