//* things to fix
//* 1- portfolio>data.js techstack & demo & other links
//* 2- testimonials.css works on Chrom, but there is a problem with the height of the .swiper class in Firefox...Things to try: give a fixed height to the .swiper class of 30rem or so...
//* 4- console.log(mainRef.current.getBoundingClientRect()) in app.js doesnt work...I get an error in the chrome console
//! 2- while I was working on the portfolio section chrome console error came up "2 children with the same key, `2`..."
// EDIT COLORS/THEME

import './index.css'
import App from './App';
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
