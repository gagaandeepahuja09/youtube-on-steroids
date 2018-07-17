import React, {Component} from 'react';

import './HeaderNew.css';

class HeaderNew extends Component {

	state = {
		term: '',
	}

	changeHandler = (event) => {
		this.setState({ term : event.target.value });
	}

	formSubmitHandler = (event) => {
		event.preventDefault();
		this.props.fetchVideos(this.state.term);
		this.setState({ term : '' });	
	}

	render() {
		let attachedClasses = "HeaderNew closed";
		if(this.props.open)
			attachedClasses = "HeaderNew open rotate";
		return (
			<div className = {attachedClasses}>
				<form onSubmit = {(event) => this.formSubmitHandler(event)} className = "header">
					<input type = "text" placeholder = "Search" onChange = {(event) => this.changeHandler(event)} />
					<button type = "submit" className = "btn">Submit</button>
				</form>
			</div>
		);
	}
}

export default HeaderNew;