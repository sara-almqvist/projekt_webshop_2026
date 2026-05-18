import { useState } from 'react';

const ContactForm = ({ handleSubmit }) => {
  const [userInput, setUserInput] = useState({
    name: '',
    message: '',
    email: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  return (
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
          className="bg-white text-[#ed6b35] m-4 text-sm p-2 w-5/6"
        ></textarea>
      </label>
      <input
        type="submit"
        className="text-[#32033a] bg-[#f18d64] hover:bg-[#db4e14] hover:cursor-pointer"
      />
    </form>
  );
};

export default ContactForm;
