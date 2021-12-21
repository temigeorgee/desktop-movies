export const handleChange = (e, form, setForm) => {
  const name = e.target.name;
  const value = e.target.value;
  const newEntry = { [name]: value };
  setForm({ ...form, ...newEntry });
};
