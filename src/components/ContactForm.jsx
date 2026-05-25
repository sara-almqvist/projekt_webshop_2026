import { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    message: '',
    email: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  }); //Kepp track of if user visit inputfields

  //Validationrules (return true och false)
  const isNameValid = form.name.trim().length >= 2;
  const isEmailValid = form.email.includes('@') && form.email.includes('.');
  const isMessageValid = form.message.length >= 2;

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNameValid && isEmailValid && isMessageValid) {
      alert('Formuläret skickades framgångsrikt');
    } else {
      setTouched({ name: true, email: true, message: true });
    }
  };

  //Dynamiska Tailwind-klasser
  const getInputClass = (isValid, isTouched) => {
    const baseClass =
      'w-full border-2 p-2 rounded-lg outline-none transition-colors duration-200 ';

    if (!isTouched) {
      return baseClass + 'border-gray-300 focus:border-blue-500';
    }

    return isValid
      ? baseClass + 'border-green-500 bg-green-50 focus:border-green-600'
      : baseClass + 'border-red-500 bg-red-50 focus:border-red-600';
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-xl font-bold text-[#ed6b35]">Kontakta oss</h2>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Namn</label>
        <div className="relative">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClass(isNameValid, touched.name)}
            placeholder="Ditt för- och efternamn"
          />
          {/* Grön bock om det är rätt */}
          {touched.name && isNameValid && (
            <span className="absolute right-3 top-3 text-green-600 font-bold">
              ✓
            </span>
          )}
        </div>
        {touched.name && !isNameValid && (
          <p className="text-xs text-red-600">
            Namnet måste vara minst 2 bokstäver.
          </p>
        )}
      </div>
      <label className="text-[#32033a] font-bold text-base px-4 w-full">
        Namn:
        <input
          type="text"
          value={form.name}
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
          value={form.email}
          name="email"
          onChange={handleChange}
          className="w-3/4 bg-white text-[#ed6b35] text-sm"
        />
      </label>
      <label className="text-[#32033a] font-bold text-base px-4 w-full">
        Ditt meddelande till oss:
        <textarea
          placeholder="Skriv här"
          value={form.message}
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
