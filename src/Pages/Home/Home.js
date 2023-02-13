import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Product from "../Product/Product";

const Home = () => {
  const usenavigate = useNavigate();

  const [displayusername, displayusernameupdate] = useState("");
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      usenavigate("/login");
    } else {
      displayusernameupdate(username);
    }

    //     let jwttoken = sessionStorage.getItem('jwttoken');
    //   let result = fetch("https://localhost:8000/products", {
    //         // headers: {
    //         //     'Authorization': 'bearer ' + jwttoken
    //         // }
    //     }).then((res) => {
    //         return res.json();
    //     }).then((resp) => {
    //         listupdate(resp);
    //     }).catch((err) => {
    //         console.log(err.messsage)
    //     });
    //     console.log(result)
  }, []);

  return (
    <div>
      <div className="header">
        <Link to={"/"}>Home</Link>
        <span style={{ marginLeft: "80%" }}>
          Welcome <b>{displayusername}</b>
        </span>
        <Link style={{ float: "right" }} to={"/login"}>
          Logout
        </Link>
      </div>
      <h1 className="text-center">inventory management</h1>
      <Product />
    </div>
  );
};

export default Home;
