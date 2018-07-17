import React, {Component} from 'react';
import './VideoActual.css';

class VideoActual extends Component {
	render() {
		if(!this.props.selectedVideo)
			return (
				<div> Loading... </div>
			);
		const url = 'https://www.youtube.com/embed/' + this.props.selectedVideo.id.videoId;
		return (
			<div className = "embed-responsive embed-responsive-16by9 VideoActual">
				<iframe className = "embed-responsive-item" src= {url}> </iframe>
			</div>
		);
	}	
}

export default (VideoActual);