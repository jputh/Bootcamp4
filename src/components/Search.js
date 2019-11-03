import React from 'react';

//has props filterText and filterUpdate
class Search extends React.Component {
	filterUpdate() {
		//Here you will need to update the value of the filter with the value from the textbox
		const val = this.myValue.value;
		this.props.filterUpdate(val);
		//console.log(val)
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		
		return (
			<form>
				<input 
					type="text" 
					id= "searchbar"
					placeholder="Type to Filter" 
					ref= {(value) => this.myValue = value}
					onChange= {this.filterUpdate.bind(this)}
				/>
			</form>
		);
	}
}
export default Search;
