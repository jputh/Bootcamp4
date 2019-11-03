import React, {Component} from 'react';


class ViewBuilding extends Component {

	deleteItem(){
		console.log("delete somet");
	}

	render(){

		if(this.props.selectedBuilding == 0){
			return (
				<div className= "card mb-5">
					<div className= "card-header text-center">
						<h5 className= "card-title">Building Info</h5>
					</div>
					<div className= "card-body">
						
						<p>
							{' '}
							<i>Click on a building to view more information</i>
						</p>
					</div>
				</div>
			);
		}
		else{
			const index = this.props.data.map(building => {
				return building.id;
			})
			.indexOf(this.props.selectedBuilding);

			const myBuilding = this.props.data[index];


			console.log(myBuilding);

			return (
				
				<div className= "card mb-5">
					<div className= "card-header text-center">
						<h5 className= "card-title">Building Info</h5>
					</div>
					<div className= "card-body">
						<div style= {{marginTop: 20}}>
							<ul><strong>Name: </strong>{myBuilding.name}</ul>
							<ul><strong>Code: </strong>{myBuilding.code}</ul>

							{/* print address only if it is available */}
							{myBuilding.address != null ? (
								<ul><strong>Address: </strong>{myBuilding.address}</ul>
								) : (null)
							}
							

							{/* print coordinates only if they are defined */}
							{myBuilding.coordinates != null ? (
								<ul><strong>Coordinates:</strong>
									<ul><em>latitude:</em> {myBuilding.coordinates.latitude}</ul>
									<ul><em>longitude:</em> {myBuilding.coordinates.longitude}</ul>
								</ul>
							) : (console.log("not found"))
							}

							
						</div>
						
						<btn className= "btn btn-danger" 
								onClick={() => this.props.onDelete(index)}>Delete</btn>
					</div>
					
						
				</div>
			);
		}
	}
}
export default ViewBuilding;


