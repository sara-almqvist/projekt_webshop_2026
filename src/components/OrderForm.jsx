import { useState } from 'react';
import useUser from '../hooks/useUser';

const OrderForm = ({ modal }) => {
  const { user, setUser } = useUser();
  const [form, setForm] = useState(user);

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Du loggar in som ${form.firstName} ${form.lastName}!`);
    setUser(form);
    localStorage.setItem('user', JSON.stringify(form));
    if (modal) {
      modal();
    }
  };

  return (
    <>
      <form
        className="flex flex-col flex-wrap bg-[#ed6b35]/50 text-[#32033a]"
        onSubmit={handleSubmit}
      >
        <input
          className="bg-[#e6e6e6] focus:bg-[#db4e14] focus:text-white placeholder:text-[#32033a]/80"
          placeholder="Förnamn"
          value={form.firstName}
          name="firstName"
          type="text"
          onChange={handleChange}
        />
        <input
          className="bg-[#e6e6e6] focus:bg-[#db4e14] focus:text-white placeholder:text-[#32033a]/80"
          placeholder="Efternamn"
          value={form.lastName}
          name="lastName"
          type="text"
          onChange={handleChange}
        />
        <input
          className="bg-[#e6e6e6] focus:bg-[#db4e14] focus:text-white placeholder:text-[#32033a]/80"
          placeholder="Telefonnummer"
          value={form.phone}
          name="phone"
          type="phone"
          onChange={handleChange}
        />
        <input
          className="bg-[#e6e6e6] focus:bg-[#db4e14] focus:text-white placeholder:text-[#32033a]/80"
          placeholder="E-post"
          value={form.email}
          name="email"
          type="email"
          onChange={handleChange}
        />
        <input
          className="bg-[#e6e6e6] focus:bg-[#db4e14] focus:text-white placeholder:text-[#32033a]/80"
          placeholder="Adress"
          value={form.address}
          name="address"
          type="text"
          onChange={handleChange}
        />
        <input
          className="bg-[#e6e6e6] focus:bg-[#db4e14] focus:text-white placeholder:text-[#32033a]/80"
          placeholder="Postnummer"
          value={form.postCode}
          name="postCode"
          type="number"
          onChange={handleChange}
        />
        <input
          className="bg-[#e6e6e6] focus:bg-[#db4e14] focus:text-white placeholder:text-[#32033a]/80"
          placeholder="Ort"
          value={form.city}
          name="city"
          type="text"
          onChange={handleChange}
        />
        <input
          type="submit"
          className="bg-[#32033a] text-white focus:bg-[##db4e14] p-2 rounded-full font-bold hover:bg-[#db4e14] shadow-xl shadow-grey-500/50 my-2 cursor-pointer w-1/3 self-center"
        />
      </form>
    </>
  );
};

export default OrderForm;
