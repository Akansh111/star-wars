import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";
import axios from 'axios';
import './Login.css'

const BASE_URL = "https://swapi.co/api/";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showMessage: false,
      showLoader: false
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.type]: e.target.value }, () => {

    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.email !== '' && this.state.password !== '') {
      this.setState({ showLoader: true })
      axios.get(`${BASE_URL}people/?search=${this.state.email}`)
        .then(res => {
          if (res.data.results.length && res.data.results[0].birth_year === this.state.password) {
            console.log("success login");
            localStorage.setItem("username",res.data.results[0].name);
            this.setState({ showLoader: false })
            this.props.history.push("/search");
          } else
            this.setState({ showMessage: true })
            var that = this;
            setTimeout(function() {
              that.setState({showMessage: false})
            }, 4000)
            this.setState({ showLoader: false })
          console.log("failure login")
        })
    } else {
      alert("Username/Password cannot be blank")
    }
  }

  componentDidMount() {
    var that = this;
   
  }

  render() {
    return (
      <MDBContainer>

        <div className="row-login">
          {this.state.showMessage ?
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              Username/Password did not match
              {/* <span className="close-toast " onClick={this.hideToast}>&#x2716;</span> */}
            </div>
            : ''}
          <MDBCol>
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                  <h5 className="my-3">
                    <MDBIcon icon="lock" /> Welcome to STAR WARS:
                        </h5>
                </MDBCardHeader>
                <form>
                  <div className="grey-text">
                    <MDBInput
                      label="Type your User Name"
                      icon="user"
                      type="email"
                      group
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      type="password" required
                      validate onChange={this.handleChange}
                    />
                  </div>

                  <div className="text-center mt-4">
                    <MDBBtn
                      color="light-blue"
                      className="mb-3"
                      type="submit" onClick={this.handleSubmit}
                    >
                      Login
                     
                    </MDBBtn>
                    {
                        this.state.showLoader ?
                          <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                          : ''}
                  </div>
                </form>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
        <div class="copyright" >Copyright &#169; Akansh Goel. All rights reserved.</div>     
      </MDBContainer>
    );
  }

};

export default Login;