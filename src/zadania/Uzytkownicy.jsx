import { useState } from "react";

export const Uzytkownicy = () => {
  const [users, setUsers] = useState([
    {
      id: 0,
      name: "John Doe",
      email: "johndoe@gmail.com",
    },
    {
      id: 1,
      name: "Mary Jane",
      email: "maryjane@gmail.com",
    },
    {
      id: 2,
      name: "Adam Małysz",
      email: "adammalysz@gmail.com",
    },
  ]);
  const [form, setForm] = useState({ id: null, name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      setUsers(users.map((user) => (user.id === form.id ? form : user)));
    } else {
      setUsers([...users, { ...form, id: Date.now() }]);
    }
    setForm({ id: null, name: "", email: "" });
  };

  const handleEdit = (user) => {
    setForm(user);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h2>uzytkownicy</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <button type="submit">{form.id ? "Update" : "Add"} User</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.email}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
