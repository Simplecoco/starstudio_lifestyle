import React from 'react';
import {render} from 'react-dom';
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
render(<App />, app);