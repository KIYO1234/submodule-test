import React from "react";
import axios from "axios";

import "./App.css";
import Button from "./components/Button";

// axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const config = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjI4MTk4NjAsImlzcyI6ImFwaS5ub3Jkb3QuanAiLCJqdGkiOiI5NDEzMzg4MDY4MzE4NTc2NjQiLCJzdWIiOiI5NDA5MDU5ODkzMjA5NDk3NjAiLCJ0dHkiOiJjdV91bml0X2lkIn0.pwdZgeE1GkbKu-EvoMriazXLqJaVqvA3BNB4eR-MW2w",
  },
  params: {
    unit_id: "940905989320949760",
  },
};

const fetchDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random").then((response) => {
    console.log(response);
  });
};

const onClick = () => {
  console.log("process.env: ", process.env);

  console.log("OnClick");
  // axios.get(`${process.env.BASE_URL}/songs`).then((res) => console.log(res));
  // axios
  //   .get(`${process.env.REACT_APP_BASE_URL}/curations`)
  //   .then((res) => console.log(res));
  // axios
  //   // .get("https://api.nordot.jp/v1.0/contentsholder/units.info", config)
  //   .get("https://api.nordot.jp/v1.0/curator/curations.list", config)
  //   .then((res) => console.log("res: ", res))
  //   .catch((err) => console.log("err: ", err));
  fetchDog();

};
function App() {
  return (
    <>
      <h1 className="text-red-500 font-bold">demo</h1>
      <Button onClick={onClick} />
      <div>親リポジトリ</div>
      <div>testブランチ</div>
    </>
  );
}

export default App;
