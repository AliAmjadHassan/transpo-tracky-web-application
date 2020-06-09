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
                      <th>Employee ID</th>
                      <th>Employee Name</th>
                      <th>Employee Designation</th>
                      <th>Contact</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>raheem@cuilahore.edu.pk</td>
                      <td>Raheem Bakhsh</td>
                      <td>Driver</td>
                      <td>03014574506</td>

                      <td>
                      <Col col="3" md="12">
                            <Button block color="ghost-success">
                              Edit
                            </Button>
                          </Col>
                      </td>
                    </tr>
                    <tr>
                      <td>ali@cuilahore.edu.pk</td>
                      <td>Ali Amjad</td>
                      <td>Conductor</td>
                      <td>03224578956</td>

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
                      <td>amjadhassan@cuilahore.edu.pk</td>
                      <td>Amjad Hassan</td>
                      <td>Driver</td>
                      <td>03224373978</td>

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
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ViewRoutes;
