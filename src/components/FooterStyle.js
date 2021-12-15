import styled from "styled-components";

export const Box = styled.div`
padding: 40px 20px;
background: black;
position: bottom;
bottom: 0;
width: 100%;
@media (max-width: 1000px) {
	padding: 40px 10px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;
@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 10px;
font-size: 14px;
text-decoration: none;
&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 18px;
color: #fff;
margin-bottom: 10px;
font-weight: bold;
`;