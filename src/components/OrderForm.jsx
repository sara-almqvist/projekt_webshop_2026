import { useState } from 'react';
import useUser from '../hooks/useUser';

const OrderForm = ({ modalClose }) => {
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
    if (modalClose) {
      modalClose();
    }
  };

  return (
    <>
      <form className="flex flex-col flex-wrap" onSubmit={handleSubmit}>
        <input
          className="border-solid border-black text-blue-500 bg-green-500"
          placeholder="Förnamn"
          value={form.firstName}
          name="firstName"
          type="text"
          onChange={handleChange}
        />
        <input
          className="border-solid border-black"
          placeholder="Efternamn"
          value={form.lastName}
          name="lastName"
          type="text"
          onChange={handleChange}
        />
        <input
          className="border-solid border-black"
          placeholder="Telefonnummer"
          value={form.phone}
          name="phone"
          type="text"
          onChange={handleChange}
        />
        <input
          className="border-solid border-black"
          placeholder="E-post"
          value={form.email}
          name="email"
          type="text"
          onChange={handleChange}
        />
        <input
          className="border-solid border-black"
          placeholder="Adress"
          value={form.address}
          name="address"
          type="text"
          onChange={handleChange}
        />
        <input
          className="border-solid border-black"
          placeholder="Postnummer"
          value={form.postCode}
          name="postCode"
          type="text"
          onChange={handleChange}
        />
        <input
          className="border-solid border-black"
          placeholder="Ort"
          value={form.city}
          name="city"
          type="text"
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default OrderForm;
