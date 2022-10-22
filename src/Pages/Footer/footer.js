import React from "react";
import * as S from "./StyleFooter";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LinkdeIn from "../../Assets/linkedin.png";
import GitHub from "../../Assets/github.png";
import Facebook from "../../Assets/facebook.png";
import Instagram from "../../Assets/instagram.png";

export default function Footer() {
	return (
		<S.Social>
			<a href="https://www.linkedin.com/in/marcusprados/" target="_blank">
				<S.Img src={LinkdeIn} alt="LinkedIn" />
			</a>
			<a href="#" target="_blank">
				<S.Img src={GitHub} alt="GitHub" />
			</a>
			<a href="#" target="_blank">
				<S.Img src={Facebook} alt="Facebook" />
			</a>
			<a href="#" target="_blank">
				<S.Img src={Instagram} alt="Instagram" />
			</a>
		</S.Social>
	);
}
