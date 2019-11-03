import React, {Component} from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
//import "bootstrap/dist/css/bootstrap.min.css";

//has data in this.props.data
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
    //console.log(this.state.selectedBuilding)
  }

  updateList(myData){

    console.log(myData);
    this.setState({
      data: myData
    })
  }

  handleDelete(id){
    
    const obj = this.state.data;
    obj.splice(id, 1);
    this.setState({
      data: obj,
      selectedBuilding: 0
    })
    console.log("Item deleted!")
  }


  render() {
    
    return (
      <div>
      <div className="header text-center">
        
        <h1>UF Directory App</h1>
        

        <Search
          filterText= {this.state.filterText}
          filterUpdate= {this.filterUpdate.bind(this)}
        />
      </div>
      
      <main>
        <div className="containter">
            <div className="row">
              <div className="column2">
                <div className= "mb-3">
                    <tr>
                      <td>
                        <h5>Building List</h5>
                      </td>
                    </tr>
                </div>
                <div className="tableWrapper">
                  <table className="table table-striped table-hover">
                    
                    <BuildingList
                      data={this.props.data}
                      filterText= {this.state.filterText}
                      selectedUpdate = {this.selectedUpdate.bind(this)}
                    />
                  </table>
                </div>
              </div>
              <div className="col">
                <div >
                  <ViewBuilding 
                    selectedBuilding= {this.state.selectedBuilding}
                    data= {this.props.data}
                    onDelete = {this.handleDelete.bind(this)}
                  />
                  
                </div>
                <div>
                    <AddBuilding 
                    data = {this.state.data}
                    updateList = {this.updateList.bind(this)}

                    />
                </div>
                
              </div>
              
            </div>
          </div>
          <Credit />
          
        </main>
        

        
      </div>
    
    );
  }
}

export default App;
