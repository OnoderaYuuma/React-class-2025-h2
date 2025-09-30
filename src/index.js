import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import Mycomponent from "./Mycomponent";
import MyCalc from "./MyCalc";
import EventBasic from "./EventBasic";
import StateBasic from "./StateBasic";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Mycomponent myName="yuma" />
    <MyCalc num1={5} num2={10} />
    <EventBasic />
    <StateBasic init={0} />
    <StateBasic init={0} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
