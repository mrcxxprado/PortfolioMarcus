import React from "react";
import * as S from "./StyleWork";
// IMPORTAR AS IMAGENS DOS DESAFIOS

export default function Works() {
	const project = [
		{
			title: "ODS PIEDADE",
			url: "#",
			// img: ODS,
			description: ""
		},

		{
			title: "Timer",
			url: "#",
			// img: Timer,
			description: "...."
		},
		{
			title: "Calculadora",
			url: "#",
			// img: Calculadora,
			description: "...."
		},

		{
			title: "Crespos",
			// url: "#",
			// img: Crespos,
			description: "..."
		}
	];
	return (
		<S.Container>
			{project.map((item) => (
				<a href={item.url}>
					<S.Box>
						<S.Photo>
							<S.Img src={item.img} />
						</S.Photo>
						<S.Text>
							<S.Title>{item.title}</S.Title>
							<S.Description>{item.description}</S.Description>
						</S.Text>
					</S.Box>
				</a>
			))}
		</S.Container>
	);
}
