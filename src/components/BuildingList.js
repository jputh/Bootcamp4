import React, {Component} from 'react';

//has data, filterText, and selectedUpdate function in props
export default ({data, filterText, selectedUpdate}) => {
	
		//console.log('This is my directory file', this.props.data);
		//const { data, filterText } = this.props;

		

		const buildingList = data.filter(building => {
			if(building.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 |
			building.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0){
				return true;
			}
			else{
				return false;
			}
		})
		.map(directory => {
			
			return (
				<tr 
					key={directory.id}
					onClick= {() => selectedUpdate(directory.id)}
				>
						<td>{directory.code} </td>
						<td> {directory.name} </td>
				</tr>
			)

			
		})

		
		return (
			<div>
				{buildingList}
			</div>
		);
	
}



