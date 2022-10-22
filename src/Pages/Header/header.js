import React from "react";
import * as S from "./StyleHeader";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../Pages/Home/home";
import About from "../../Pages/About/about";
import Works from "../../Pages/Works/work";

export default function Header() {
	return (
		<Router>
			<S.ConteinerNav>
				<S.NavList>
					<S.DetailList>
						<S.ListMember to="/">HOME</S.ListMember>
					</S.DetailList>
					<S.DetailList>
						<S.ListMember to="/about">ABOUT</S.ListMember>
					</S.DetailList>
					<S.DetailList>
						<S.ListMember to="/works">WORKS</S.ListMember>
					</S.DetailList>
					<S.DetailList>
						<S.ListMember to="/contact">CONTACT</S.ListMember>
					</S.DetailList>
				</S.NavList>
			</S.ConteinerNav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/works" element={<Works />} />
			</Routes>
		</Router>
	);
}
