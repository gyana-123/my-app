import "./App.css";
import React, { useEffect, useMemo, useState, useRef } from "react";
function App() {
  const [users, setUser] = useState([]);
  const inputValue = useRef();
  //initialise search value
  const [searchValue, setSearchValue] = useState("");

  const clickHandler = () => {
    const value = inputValue.current.value;
    if (value === "") {
      alert(" already empty");
    } else {
      setSearchValue("");
    }

  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
      result.json().then((resp) => {
        console.warn("useafft",resp)
        setUser(resp);
      });
    });
  }, []);
  //whenever search value gets updated, we will update user list

  

  return (
    <div className="App">
      <h1> User List </h1>
      <input
        type="text"
        ref={inputValue}
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        placeholder="Search by name"
      />{" "}
      <span>
        <button onClick={clickHandler}>clear</button>
      </span>{" "}
      <br />
      <br />
      <table border="1">
        <tbody>
          <tr>
            <td>User Id</td>
            <td>Title</td>
            <td>Mobile</td>
          </tr>
          {users
            .filter((item) => {
              if (searchValue === "") {
                return item;
              } else if (
                item.title.toLowerCase().includes(searchValue.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
