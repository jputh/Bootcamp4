import React, {Component} from 'react';
import { is } from '@babel/types';
import data from '../data/data';
import "bootstrap/dist/css/bootstrap.min.css";

class AddBuilding extends Component{

    constructor(props){
        super(props);



        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeLat = this.onChangeLat.bind(this);
        this.onChangeLong = this.onChangeLong.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            name: '',
            code: '',
            address: '',
            coordinates: {
                latitude: null,
                longitude: null
            }
        }
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }
    onChangeCode(e){
        this.setState({
            code: e.target.value
        });
    }
    onChangeAddress(e){
        this.setState({
            address: e.target.value
        });
    }
    onChangeLat(e){
        this.setState({
            latitude: e.target.value
        });
    }
    onChangeLong(e){
        this.setState({
            longitude: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const newBuilding = {
            name: this.state.name,
            code: this.state.code,
            address: this.state.address,
            coordinates: {
                latitude: this.state.latitude,
                longitude: this.state.longitude
            }
        }

        const obj = data;
        obj.push(newBuilding);

    
        this.props.updateList(obj);

        this.setState = {
            name: '',
            code: '',
            address: '',
            coordinates: {
                latitude: 0,
                longitude: 0
            }
        }


        
    }



    render() {
        return(

            <div className= "card mb-5" style= {{marginTop: 20}}>
                <div className= "card-header text-center">
					<h5 className= "card-title">Add a Building</h5>
				</div>

                <form onSubmit={this.onSubmit} style= {{marginTop: 10}}>
                    <div className= "input-group input-group-sm">
                        <div class= "input-group-prepend">
                            <span className="input-group-text">Name</span>
                        </div>
                        <input type= "text"
                                className= "form-control"
                                value= {this.state.name}
                                onChange= {this.onChangeName}
                        />

                    </div>
                    <div className= "input-group input-group-sm">
                        <div class= "input-group-prepend">
                            <span className="input-group-text">Code</span>
                        </div>
                        <input type= "text"
                                className= "form-control"
                                value= {this.state.code}
                                onChange= {this.onChangeCode}
                        />

                    </div>
                    <div className= "input-group input-group-sm">
                        <div class= "input-group-prepend">
                            <span className="input-group-text">Address</span>
                        </div>
                        <input type= "text"
                                className= "form-control"
                                value= {this.state.address}
                                onChange= {this.onChangeAddress}
                        />

                    </div>
                    <div className= "form-group">
                        <label>Coordinates</label>
                        <div className = "row">
                            <div className= "col">
                                <div className= "input-group input-group-sm">
                                    <div class= "input-group-prepend">
                                        <span className="input-group-text">Latitude</span>
                                    </div>
                                    <input type= "text"
                                            className= "form-control"
                                            value= {this.state.latitude}
                                            onChange= {this.onChangeLat}
                                    />

                                </div>
                            </div>
                            <div className= "col">
                                <div className= "input-group input-group-sm">
                                        <div class= "input-group-prepend">
                                            <span className="input-group-text">Longitude</span>
                                        </div>
                                        <input type= "text"
                                                className= "form-control"
                                                value= {this.state.longitude}
                                                onChange= {this.onChangeLong}
                                        />

                                </div>
                            </div>
                        </div>


                    </div>
                    <div className= "form-group text-center">
                            <input type= "submit" value= "Add Building" className="btn btn-primary" />
                    </div>
                    
                </form>
            </div>

        )
    }
}
export default AddBuilding;