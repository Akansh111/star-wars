import React from 'react';
import axios from 'axios';
import './Search.css';
import { MDBBtn } from "mdbreact";
const BASE_URL = "https://swapi.co/api/";

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      planetInfo: {}
    }
  }

  handleSearch = (e) => {
    if (e.target.value !== '') {
      axios.get(`${BASE_URL}planets/?search=${e.target.value}`)
        .then(res => {
          this.setState({ searchResults: res.data.results })
        })
    } else {
      this.setState({ searchResults: [], planetInfo: {} });
    }
  }
  componentDidMount() {

  }

  showInfo = (planet) => {
    this.setState({ planetInfo: planet })
  }

  handleLogout = () => {
    this.props.history.push("/");
  }
  render() {
    let username = localStorage.getItem('username')
    return (
      <div className="wrapper">
        <span className="username">Welcome {username}!!</span>
        <MDBBtn outline color="warning" className="logout" onClick={this.handleLogout}>Logout!</MDBBtn>
        <img src={'https://raw.githubusercontent.com/kuuurt13/star-wars-react-fun/master/src/assets/images/star-wars-logo.png'} className="star-wars-logo" />
        <input type="text" id="example1" onChange={this.handleSearch} className="form-control form-control-lg" placeholder="Search Planet... (e.g. 'Ald')" />
        <div className="search-wrapper">
          {
            this.state.searchResults.length ?
              this.state.searchResults.map((item) => {
                let x = Math.floor(Math.random() * 256);
                let y = Math.floor(Math.random() * 256);
                let z = Math.floor(Math.random() * 256);
                let bgColor = "rgb(" + x + "," + y + "," + z + ")";
                return <div className="planets" style={{ backgroundColor: bgColor, width: `${item.population * 0.00000001 + 60}px`}} onClick={() => this.showInfo(item)} >
                  <div className="planet-name">{item.name}</div>
                </div>
              })
              : ''
          }</div>
        {
          Object.keys(this.state.planetInfo).length > 0 ?
            <div className="planet-info">
              <div className="table-responsive">
                <table className="table">
                  <thead className="table-head">
                    <tr>
                      <th>Planet Name</th>
                      <th>Climate</th>
                      <th>Population</th>
                      <th>Diameter</th>
                      <th>Rotation Period</th>
                    </tr>
                  </thead>
                  <tbody className="table-body">
                    <tr>
                      <td>{this.state.planetInfo.name}</td>
                      <td>{this.state.planetInfo.climate}</td>
                      <td>{this.state.planetInfo.population}</td>
                      <td>{this.state.planetInfo.diameter}</td>
                      <td>{this.state.planetInfo.rotation_period}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> : ''
        }

      </div>

    )
  }
}
export default Search;