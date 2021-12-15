import { Link } from "react-router-dom";
import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyle";

const Footer = () => {
return (
    <footer class="footer">
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Pension Scheme</FooterLink>
			<FooterLink href="#">Gudie</FooterLink>
			<FooterLink href="#">Experts</FooterLink>
			<FooterLink href="#">Loan</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Maharashtra</FooterLink>
			<FooterLink href="#">Delhi</FooterLink>
			<FooterLink href="#">Karnataka</FooterLink>
			<FooterLink href="#">Other</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
    </footer>
);
};
export default Footer;





// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from 'react';

// const Footer = () => {

//     let [loginStatus, setLoginStatus] = useState(false);

//     useEffect(() => {
//         setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
//     }, []);
//     return(
//         <footer class ="footer">
//             <div class="conatiner">
//                 <p>Please feel free to contact.</p>
//                 <p> Mobile No: 982345876</p>
//                 <p> Email: statepension@gmail</p>
//             </div>
//         </footer>
//     )
// }
// export default Footer;