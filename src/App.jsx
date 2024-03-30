import "./App.css";

function App() {
  const handleAddUser = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const user = { email, name };

    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          name="name"
          id=""
          style={{ padding: "10px", margin: "10px", width: "300px" }}
        />
        <br />
        <input
          type="email"
          name="email"
          id=""
          style={{ padding: "10px", margin: "10px", width: "300px" }}
        />
        <br />
        <input
          type="submit"
          value="Add User"
          style={{ padding: "10px", margin: "10px" }}
        />
      </form>
    </>
  );
}

export default App;
