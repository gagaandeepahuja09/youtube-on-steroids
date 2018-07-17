import React, { Component } from 'react';
import axios from 'axios';
import './Video.css';
import VideoActual from '../../UI/VideoActual/VideoActual';
import HeaderNew from '../../UI/HeaderNew/HeaderNew';
import SideDrawer from '../../UI/SideDrawer/SideDrawer';

class Video extends Component {
	state = {
		term: '',
		showSideDrawer: false,
		showHeader: false,
		sDrawer: false,
		header: false,
		videos: [],
		selectedVideo: null,
	}

	headerOpenHandler = () => {
		let sh = this.state.showHeader;
		this.setState({ showHeader: !sh });
	}

	fetchVideos = (term) => {
		const API_KEY = 'AIzaSyDczNuW59WTXWxjZX3Y05_mKvTyYnGkEcs';
		axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&type=video&videoDefinition=high&q=${term}&maxResults=10&key=${API_KEY}`).then(video => {
			this.setState({ videos: video.data.items });
			this.setState({ selectedVideo: this.state.videos[0] });
			console.log(this.state.selectedVideo);
		});
	}

	sideDrawerOpenHandler = () => {
		let sh = this.state.showSideDrawer;
		this.setState({ showSideDrawer: !sh });
	}

	selectVidHandler = (idx) => {
		this.setState({ selIdx: idx });
		console.log(idx);
	}
 
	render() 
	{
		let upClass = "upArrow";
		if(this.state.showHeader)
			upClass = "upArrow rotateUp"

		let grtClass = "grtArrow";
		if(this.state.showSideDrawer)
			grtClass = "grtArrow rotateGrt"
		return (
			<div>
				<div onClick = {this.headerOpenHandler} className = {upClass}>^</div>
				<HeaderNew open = {this.state.showHeader} fetchVideos = {(term) => this.fetchVideos(term)}/>
				<VideoActual className = "VideoActual" selectedVideo = {this.state.selectedVideo} />
				<div onClick = {this.sideDrawerOpenHandler} className = {grtClass}>></div>
				<SideDrawer open = {this.state.showSideDrawer} 
				videos = { this.state.videos}
				selVideoHandler = { (video) => this.setState({ selectedVideo: video }) }
				 />
			</div>
		);
	}
}

export default Video;