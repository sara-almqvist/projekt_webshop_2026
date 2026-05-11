import { useState } from 'react';

const OrderForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    postCode: '',
    city: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Tack för din order ${form.firstName} ${form.lastName}!`);
  };

  return (
    <>
      <form className="border-solid border-red-100" onSubmit={handleSubmit}>
        <input
          className="border-solid border-black text-blue-500"
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
