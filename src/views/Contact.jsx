import { useState } from 'react';

const Contact = () => {
  const [userInput, setUserInput] = useState({
    name: '',
    message: '',
    email: '',
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    console.log(`Namn: ${userInput.name}, Meddelande: ${userInput.message}`); //Send to supportsystem when availble
  };

  return (
    <>
      <div className="p-6 text-[#ed6b35] text-lg md:min-h-150 ">
        <h2 className="text-5xl font-semibold text-shadow-md">
          Kontakta Allt & Lite Till
        </h2>
        <ul className="list-disc list-outside text-left text-[#32033a]">
          <li>
            <p>
              Via telefon på nummer: 1234 5678. Vi svarar alla dagar mellan kl
              9-18
            </p>
          </li>
          <li>
            <p>
              Via mejl:{' '}
              <a
                href="mailto:info@alltochlitetill.se"
                className="underline decoration-1"
              >
                info@alltochlitetill.se
              </a>
            </p>
          </li>
          <li>Via kontaktformulär</li>
        </ul>

        {isSubmit ? (
          <p className="text-xl bg-white w-1/2 mx-auto mt-6 p-2">
            Tack för ditt meddelande {userInput.name}! <br />
            Vi hör av oss så snart vi kan
          </p>
        ) : (
          <>
            <h2 className="text-[#ed6b35] text-lg">Kontaktformulär</h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col place-items-center bg-[#ed6b35]"
            >
              <label className="text-[#32033a] font-bold text-base px-4 w-full">
                Namn:
                <input
                  type="text"
                  value={userInput.name}
                  name="name"
                  onChange={handleChange}
                  className="w-3/4 bg-white text-[#ed6b35] text-sm"
                  autoFocus={true}
                  required={true}
                />
              </label>
              <label className="text-[#32033a] font-bold text-base px-4 w-full">
                E-post:
                <input
                  type="email"
                  value={userInput.email}
                  name="email"
                  onChange={handleChange}
                  className="w-3/4 bg-white text-[#ed6b35] text-sm"
                />
              </label>
              <label className="text-[#32033a] font-bold text-base px-4 w-full">
                Ditt meddelande till oss:
                <textarea
                  placeholder="Skriv här"
                  value={userInput.message}
                  name="message"
                  onChange={handleChange}
                  rows={5}
                  className="bg-white text-[#ed6b35] m-4 text-sm p-2 w-5/6 caret-[#32033a]"
                  required={true}
                ></textarea>
              </label>
              <input
                type="submit"
                className="text-[#32033a] bg-[#f18d64] hover:bg-[#db4e14] hover:cursor-pointer"
              />
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default Contact;
