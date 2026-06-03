import { useState } from 'react';

const ContactForm = ({ updateParent }) => {
  const [form, setForm] = useState({
    name: '',
    message: '',
    email: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  }); //Keep track of visited inputfields

  //Validationrules (return true or false)
  const isNameValid = form.name.includes(' ') && form.name.trim().length >= 2;
  const isEmailValid = form.email.includes('@') && form.email.includes('.');
  const isMessageValid =
    form.message.includes(' ') && form.message.length >= 10;

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
      updateParent(form.name);
      console.log('Formuläret skickades framgångsrikt');
    } else {
      setTouched({ name: true, email: true, message: true });
    }
  };

  //Dynamiska Tailwind-klasser
  const getInputClass = (isValid, isTouched) => {
    const baseClass =
      'w-full border-2 p-2 rounded-lg outline-none transition-colors duration-200 ';

    if (!isTouched) {
      return baseClass + 'border-[#32033a]/40 focus:border-[#32033a]';
    }

    return isValid
      ? baseClass + 'border-green-500 bg-green-50 focus:border-green-600'
      : baseClass + 'border-red-500 bg-red-50 focus:border-red-600';
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4 text-[#32033a]"
    >
      <h2 className="text-2xl font-bold text-[#ed6b35]">Kontakta oss</h2>

      {/*Name-field*/}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-[#ed6b35]">Namn</label>
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
          {/* Green check mark if correct */}
          {touched.name && isNameValid && (
            <span className="absolute right-3 top-3 text-green-600 font-bold">
              ✓
            </span>
          )}
        </div>
        {touched.name && !isNameValid && (
          <p className="text-xs text-red-600">Ange både för- och efternamn</p>
        )}
      </div>

      {/*Email-field*/}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-[#ed6b35]">E-post</label>
        <div className="relative">
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClass(isEmailValid, touched.email)}
            placeholder="Din e-postadress"
          />
          {/* Green check mark if correct */}
          {touched.email && isEmailValid && (
            <span className="absolute right-3 top-3 text-green-600 font-bold">
              ✓
            </span>
          )}
        </div>
        {touched.email && !isEmailValid && (
          <p className="text-xs text-red-600">Ange en giltig e-postadress</p>
        )}
      </div>

      {/*Message-field*/}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-[#ed6b35]">
          Ditt meddelande
        </label>
        <div className="relative">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClass(isMessageValid, touched.message)}
            placeholder="Skriv här..."
            rows={5}
          ></textarea>
          {/* Green check mark if correct */}
          {touched.message && isMessageValid && (
            <span className="absolute right-3 top-3 text-green-600 font-bold">
              ✓
            </span>
          )}
        </div>
        {touched.message && !isMessageValid && (
          <p className="text-xs text-red-600">
            Meddelandet måste bestå av minst 2 ord och 10 tecken
          </p>
        )}
      </div>

      {/*Submit-button*/}
      <button
        type="submit"
        disabled={!(isNameValid && isEmailValid && isMessageValid)}
        className={`w-full py-2 px-4 rounded-lg font-semibold text-white shadow transition-all duration-150 active:scale-[0.98] ${
          isNameValid && isEmailValid && isMessageValid
            ? 'bg-green-600 hover:bg-green-700 active:bg-green-800 cursor-pointer'
            : 'bg-gray-400 cursor-not-allowed opacity-60'
        }`}
      >
        {isNameValid && isEmailValid && isMessageValid
          ? 'Skicka meddelande'
          : 'Fyll i alla fält'}
      </button>
    </form>
  );
};

export default ContactForm;
