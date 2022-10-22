import styled from "styled-components";

export const Container = styled.section`
	height: 20em;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-evenly;
`;
export const InfoBlock = styled.section`
	width: 100%;
	height: 34em;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

export const Social = styled.div`
	width: 6em;
	height: 25em;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
`;
export const Img = styled.img`
	width: 4em;
	cursor: pointer;

	margin: 20px;
	transition: 1s all;
	&:hover {
		transform: scale(1.1);
	}
`;
export const Text = styled.div`
	width: 50%;
`;

export const Title = styled.h1`
	font-size: 4rem;
	width: 40%;
	letter-spacing: 15px;
`;

export const ImgMarcus = styled.figure`
	width: 25vw;
	height: 55vh;
	border-radius: 8%;
	background: black;
`;
export const Picture = styled.img`
	border: black 10px solid;
	border-radius: 8%;
	width: 25vw;
	height: 55vh;
	object-fit: cover;
`;
