import React from 'react';
import './SideDrawer.css';
import VideoItem from '../VideoItem/VideoItem';

const SideDrawer = (props) => {
	let attachedClass = "SideDrawer Closed";
		if(props.open)
				attachedClass = "SideDrawer Open rotate";		
	const videoMaps = props.videos.map(video => {
		return (
				<VideoItem selVideoHandler = {(video) => props.selVideoHandler(video)} video = {video} key = {video.etag} />
			);
	});

	return(
		<div className = {attachedClass}>
			<ul >
				{videoMaps}
			</ul>
		</div>
	);
}

export default SideDrawer;