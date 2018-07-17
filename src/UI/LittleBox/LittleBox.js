import React from 'react';
import './LittleBox.css';

const littleBox = (props) => {
	let attachedClass = "LittleBox";
	if(props.sDrawer)
		attachedClass = "LittleBox Box2";
	return	(
		<div className = {attachedClass} onClick = {props.clicked}>
			{props.label}
		</div>
		);	
}

export default littleBox;