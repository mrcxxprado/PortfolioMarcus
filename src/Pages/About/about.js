import React from "react";
import * as S from "./StyleAbout";
import Picture2 from "../../Assets/pic2.jpg";

export default function About() {
	return (
		<S.Container>
			<div>
				<S.Pic src={Picture2} />
				<S.Info>
					<S.Text>
						<p></p>
					</S.Text>
				</S.Info>
			</div>
		</S.Container>
	);
}
