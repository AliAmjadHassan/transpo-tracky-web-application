import React, { Component } from "react";
import { AppSwitch } from "@coreui/react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import {Link } from "react-router-dom";

import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
  Button,
} from "reactstrap";
import AddBus from "./AddBus";

class ViewBus extends Component {
  componentWillMount() {
    this.props.BusList();
  }

  // renderList = (Buses) => {
  //   if (Buses){
  //     return Buses.map((Bus) => {
  //       return <div>{Bus.plate}</div>;
  //     });
  //   }
  // };
  // abc(){console.log(state)}
  handleEdit = (bus, id) => {
    console.log("Edit id", id, "data", bus);
    // <AppBus busValue={bus}/>
  // return <Link name="ideas" path="/add-bus" handler={bus} />
  };
  render() {
    console.log("Buses", this.props.Buses.data);
    return (
      <div className="animated fadeIn">
        {/* {this.renObjData(this.props.Buses)} */}
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <i className=""></i> <strong>Routes</strong>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                    <tr>
                      <th>Bus Number</th>
                      <th>Manufacture Name</th>
                      <th>Bus Capacity</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.Buses.data
                      ? this.props.Buses.data.map((bus) => (
                          <tr key={bus.id}>
                            <td>{bus.plate}</td>
                            <td>{bus.manufacturerName}</td>
                            <td>{bus.capacity}</td>

                            <td>
                              <Link
                                to={"/add-bus"}
                                style={{ textDecoration: "none" }}
                              > 
                                <Col col="3" md="12">
                                  <Button
                                    block
                                    color="ghost-success"
                                    onClick={() => this.handleEdit(bus, bus.id)}
                                  >
                                    Edit
                                  </Button>
                                </Col>
                              </Link>
                            </td>
                          </tr>
                        ))
                      : ""}

                    <tr>
                      <td>LEP-1592</td>
                      <td>Milllat</td>
                      <td>60</td>
                      <td>
                        <Col col="3" md="12">
                          <Button block color="ghost-success">
                            Edit
                          </Button>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td>ALI-1234</td>
                      <td>Audi</td>
                      <td>35</td>
                      <td>
                        <Col col="3" md="12">
                          <Button block color="ghost-success">
                            Edit
                          </Button>
                        </Col>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem>
                      <PaginationLink previous tag="button">
                        Prev
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next tag="button">
                        Next
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state.Buses);
  return {
    Buses: state.Buses,
  };
}



export default connect(mapStateToProps, actions)(ViewBus);
