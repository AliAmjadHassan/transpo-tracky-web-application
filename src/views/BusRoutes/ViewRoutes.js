import React, { Component } from "react";
import { connect } from "react-redux";
import { viewRoutes } from "../../actions/routesActions";
import { Link } from "react-router-dom";
import logo from "../../assets/img/brand/logop.svg";
import LoadingScreen from "react-loading-screen";

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Collapse,
  Button
} from "reactstrap";

class ViewRoutes extends Component {
  componentWillMount() {
    this.props.viewRoutes();
  }

  state = {
    isOpen: false,
  };

  collapseHandler() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    console.log("Props from View", this.props);
    console.log("is open", this.state.isOpen);
    if (this.props.Routes.data == undefined) {
      return (
        <LoadingScreen
          loading={true}
          bgColor="#659759"
          spinnerColor="#344a32"
          textColor="##e9d9a8"
          logoSrc={logo}
          text="A conveyance with convenience"
        >
          <div>Loading...</div>
        </LoadingScreen>
      );
    } else {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col xs="12" md="12">
              <Card>
                <CardHeader>
                  <i className=""></i> <strong>Routes</strong>
                </CardHeader>
                <CardBody>
                  <Table bordered striped responsive size="lg">
                    <thead>
                      <tr>
                        <th>Route Name</th>
                        <th>
                         
                          <button
                            onClick={() => {
                              this.collapseHandler();
                            }}
                            style={{marginBottom:"10px", float: "right", width: "100%" }}
                            className="btn btn-outline-success"
                          >
                            View
                          </button>
                          Number of Stops
                        </th>
                        <th>Pick Up Time</th>
                        <th>Drop of Time</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.Routes.data
                        ? this.props.Routes.data.map((route) => (
                            <tr key={route.id}>
                              <td>{route.name}</td>
                              <td>
                                {route.stopList.length}
                                <div>
                                  <Collapse isOpen={this.state.isOpen}>
                                
                                 <Table className='table-update' hover bordered striped responsive size="sm">
                                   <tr>
                                     <th>Name</th>
                                     {/* <th>Latitude</th>
                                     <th>Longitude</th> */}
                                     <th>Time To Reach</th>
                                   </tr>
                                   <tbody>
                                     {route.stopList.map((stop)=>(
                                       <tr key={stop.id}>
                                         <td>{stop.name}</td>
                                         {/* <td>{stop.latitude}</td>
                                         <td>{stop.longitude}</td> */}
                                         <td>{stop.timeToReach}</td>
                                       </tr>
                                     ))}
                                   </tbody>
                                 </Table>
                                  </Collapse>
                                </div>
                              </td>
                              <td>{route.pickUpTime}</td>
                              <td>{route.dropOffTime}</td>
                              <td>
                              <Link
                                  to={`/update-routes/${route.id}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <Col col="3" md="12">
                                    <button style={{
                                      width:"100%"
                                    }} className="btn btn-outline-success">
                                      Edit
                                    </button>
                                  </Col>
                                </Link>
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  console.log("State of View Routes Component", state);
  return {
    Routes: state.Routes,
  };
}

export default connect(mapStateToProps, { viewRoutes })(ViewRoutes);
