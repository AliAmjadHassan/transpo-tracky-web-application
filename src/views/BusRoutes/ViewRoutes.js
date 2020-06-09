import React, { Component, lazy } from "react";
import Switches from "../Base/Switches/Switches";
import { AppSwitch } from "@coreui/react";
import { Link } from "react-router-dom";
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
  NavLink,
} from "reactstrap";

class ViewRoutes extends Component {
  state = {};
  render() {
    return (
      <div className="animated fadeIn">
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
                      <th>Route Number</th>
                      <th>Route Name</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Muridke-Comsats</td>

                      <td>
                        <Col col="3" md="12">
                          <Link
                            to={"/edit-routes"}
                            style={{ textDecoration: "none" }}
                          >
                            <Button block color="ghost-success">
                              Edit
                            </Button>
                          </Link>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Shahdrah-Muridke</td>

                      <td>
                      <Row>
                          <Col col="3" md="12">
                            <Button block color="ghost-success">
                              Edit
                            </Button>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Gulshan Ravi-Comsats</td>

                      <td>
                        <Row>
                          <Col col="3" md="12">
                            <Button block color="ghost-success">
                              Edit
                            </Button>
                          </Col>
                        </Row>
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
                <Col md="3">
                  <Link to="/active-routes" style={{ textDecoration: "none" }}>
                    <Button
                      as={NavLink}
                      to={"/add-paid-students"}
                      block
                      color="ghost-success"
                    >
                      Trips
                    </Button>
                  </Link>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ViewRoutes;
