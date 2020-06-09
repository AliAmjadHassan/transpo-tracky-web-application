import React, { Component } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
class AddDriver extends Component {
  state = {};
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Add a New Employee</strong>
              </CardHeader>
              <CardBody>
                <Form
                  action=""
                  methord="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Designation</Label>
                    </Col>
                    <Col xs="12" md="3">
                      <Input type="select" name="select" id="edesignation">
                        <option value="0">Driver</option>
                        <option value="1">Conductor</option>
                      </Input>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Employe First Name</Label>
                    </Col>
                    <Col xs="12" md="3">
                      <Input
                        type="text"
                        id="efname"
                        name="text-input"
                        placeholder="Emoloyee First Name"
                      />
                      <FormText color="muted">
                        Enter Employee First Name Here
                      </FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Employee Last Name</Label>
                    </Col>
                    <Col xs="12" md="3">
                      <Input
                        type="text"
                        id="elname"
                        name="text-input"
                        placeholder="Emoloyee Last Name"
                      />
                      <FormText color="muted">
                        Enter Employee Last Name Here
                      </FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Employee CNIC</Label>
                    </Col>
                    <Col xs="12" md="3">
                      <Input
                        pattern="([0-9]{5})-([0-9]{7})-([0-9]{1})"
                        type="text"
                        id="ecnic"
                        name="cnic-input"
                        placeholder="CNIC With Dashes"
                        min="0"
                      />
                      <FormText color="muted">
                        Enter Employee CNIC With Dashes
                      </FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Employee ID</Label>
                    </Col>
                    <Col xs="12" md="3">
                      <Input
                       
                        type="text"
                        id="eid"
                        name="eid-input"
                        placeholder="Employee ID"
                        min="0"
                      />
                      <FormText color="muted">
                        Enter Employee Employee ID Here
                      </FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="password-input">Employee Initial Passcode</Label>
                    </Col>
                    <Col xs="12" md="3">
                      <Input
                       
                        type="password"
                        id="epw"
                        name="eid-input"
                        placeholder="Employee Passcode"
                        min="0"
                      />
                      <FormText color="muted">
                        Enter Employee Employee Initial Password Here
                      </FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Contact Number</Label>
                    </Col>
                    <Col xs="12" md="3">
                      <Input
                        
                        type="text"
                        id="ecnic"
                        name="cnic-input"
                        placeholder="Contact"
                        min="0"
                      />
                      <FormText color="muted">
                        Enter Employee Contact
                      </FormText>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddDriver;
