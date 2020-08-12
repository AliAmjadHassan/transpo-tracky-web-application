import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/EmployeesAction";
import { getAdminTokenfromStorage } from "../../actions/authorizationAction";

import { Link } from "react-router-dom";
import logo from "../../assets/img/brand/logop.svg";
import LoadingScreen from "react-loading-screen";

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

class ViewEmployees extends Component {
  componentWillMount() {
    getAdminTokenfromStorage().then((response) => {
      this.props.getAllEmployees(response);
    });
  }

  render() {
    console.log("Props of View Employee", this.props);

    if (this.props.Employees == undefined) {
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
      // console.log("Props from ViewBus Component:", this.props.Buses.message);
      return (
        <div className="animated fadeIn">
          <Row>
            <Col xs="12" md="12">
              <Card>
                <CardHeader>
                  <i className=""></i> <strong>Employees</strong>
                </CardHeader>
                <CardBody>
                  <Table hover bordered striped responsive size="sm">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Registration ID</th>
                        <th>Type</th>
                        <th>Contact</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.Employees.data
                        ? this.props.Employees.data.map((employee) => (
                            <tr key={employee.id.employeeId}>
                              <td>
                                {employee.name.firstName +
                                  employee.name.lastName}
                              </td>
                              <td>{employee.id.registrationId}</td>
                              <td>{employee.designation.Type}</td>
                              <td>{employee.Personal_details.contact}</td>
                              <td>
                                <Link
                                  // to={`/update-bus/${bus.id}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <Col col="3" md="12">
                                    <Button block color="ghost-success">
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
  console.log("State of View Component", state);
  return {
    Employees: state.Employees.AllEmployees,
  };
}

export default connect(mapStateToProps, actions)(ViewEmployees);
