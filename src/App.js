import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./Pages/Header/header";
import Footer from "./Pages/Footer/footer";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    color:black;
    font-family: font-family: 'Lexend Deca', sans-serif;
    text-decoration:none;
  }
  body{
    width:100%;
    background:white;
  }
`;
export default function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Footer />
		</>
	);
}
