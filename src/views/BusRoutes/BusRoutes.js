import React, { Component, lazy } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
class BusRoutes extends Component {
  state = {};
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Add New Routes</strong>
              </CardHeader>
              <CardBody>
                <Form
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  {/* <FormGroup row>
                    <Col md="3">
                      <Label>Static</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">Username</p>
                    </Col>
                  </FormGroup> */}

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Route Number</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="rid"
                        name="text-input"
                        placeholder="Number"
                        min="0"
                      />
                      <FormText color="muted">Enter Route Number Here</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Route Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="rname"
                        name="text-input"
                        placeholder="Route Name"
                      />
                      <FormText color="muted">Enter Route Name Here</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Session</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="rSessionID"
                        name="text-input"
                        placeholder="Session Name"
                      />
                      <FormText color="muted">
                        Enter Session Here (e.g Fall 2020)
                      </FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="Arrival time input">Arrival Time</Label>
                    </Col>
                    <Col xs="12" md="3">
                      <Input
                        type="number"
                        minLength="2"
                        id="rPickUp_modeTime"
                        name="text-input"
                      />
                      <FormText color="muted">24-Hours</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="Drop off time input">Droping Time</Label>
                    </Col>
                    <Col xs="12" md="3">
                      <Input
                        type="number"
                        id="rDropoff_modeTime"
                        name="text-input"
                      />
                      <FormText color="muted">24-Hours</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="stop list">Stops</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <div className="controls">
                        <InputGroup className="input-prepend">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>[</InputGroupText>
                          </InputGroupAddon>
                          <Input id="stopList" type="text" />
                          <InputGroupAddon addonType="append">
                            <InputGroupText>]</InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      </div>
                      <FormText color="muted">
                        Enter Stops Seprated by Comma
                      </FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="rModifiedDate">Modified Date</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="date"
                        id="rModifiedDate"
                        name="date-input"
                        placeholder="Modified date"
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="rCount">Number of Stops</Label>
                    </Col>
                    <Col xs="12" md="3">
                      <Input
                        type="number"
                        minLength="2"
                        id="rCount"
                        name="text-input"
                      />
                      <FormText color="muted">
                        Number of Stops in this route
                      </FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Live Status</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="rLiveStatus">
                        <option value="0">Please select</option>
                        <option value="2">Live</option>
                        <option value="3">Not Live</option>
                      </Input>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Active Status</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="rActiveStatus">
                        <option value="0">Please select</option>
                        <option value="2">Active</option>
                        <option value="3">Not Active</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary">
                  <i className="fa fa-dot-circle-o"></i> Submit
                </Button>
                <Button type="reset" size="sm" color="danger">
                  <i className="fa fa-ban"></i> Reset
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BusRoutes;
