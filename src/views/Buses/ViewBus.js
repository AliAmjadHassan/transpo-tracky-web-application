import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Link } from "react-router-dom";
import {
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


class ViewBus extends Component {
  componentWillMount() {
    this.props.busList();
  }


  render() {
    console.log("Props from ViewBus Component:", this.props);
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <i className=""></i> <strong>Buses</strong>
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
                                to={`/update-bus/${bus.id}`}
                                style={{ textDecoration: "none" }}
                              >
                                <Col col="3" md="12">
                                  <Button
                                    block
                                    color="ghost-success"
                                    
                                  >
                                    Edit
                                  </Button>
                                </Col>
                              </Link>
                            </td>
                          </tr>
                        ))
                      : null}
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
  console.log("State of View Component",state)
  return {
    Buses: state.Buses,
  };
}

export default connect(mapStateToProps, actions)(ViewBus);
