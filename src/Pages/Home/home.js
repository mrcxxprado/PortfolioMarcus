import React from "react";
import * as S from "./StyleHome";
import Me from "../../Assets/Me.jpg";

export default function Home() {
	return (
		<S.Container>
			<S.InfoBlock>
				<S.Text>
					<S.Title>Olá, eu sou o Marcus!</S.Title>
				</S.Text>
				<S.ImgMarcus>
					<S.Picture src={Me} alt="Marcus" />
				</S.ImgMarcus>
			</S.InfoBlock>
		</S.Container>
	);
}
