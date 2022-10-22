import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	height: 34em;
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
