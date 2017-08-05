import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import FullWidthGrid from './components/FullWidthGrid.jsx';
import ButtonAppBar from './components/appBar';
import HeadPic from './components/HeadPic';
import resetCss from '../styles/reset.css';



function App() {
	let address= "https://api.github.com/search/users?q=coco";
	
	return (
		<div>
	  	<ButtonAppBar />
	  	<HeadPic />
	  	<FullWidthGrid url={address}/>
		</div>

	);
}

const app=document.createElement("div");
document.body.appendChild(app);
ReactDOM.render(<App />, app);