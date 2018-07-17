import React from 'react';
import './VideoItem.css';

const videoItem = (props) => {
	const imgUrl = props.video.snippet.thumbnails.default.url;
	return (
			<div className = "VideoItem">
				<li onClick = {() => props.selVideoHandler(props.video)}>
					<div className = "row">
						<div className = "col-1-of-2">
							<img src = {imgUrl} />
						</div>
						<div className = "col-1-of-2">
							<div>{props.video.snippet.title}</div>
						</div>	
					</div>
				</li>
			</div>
	);
}


export default videoItem;