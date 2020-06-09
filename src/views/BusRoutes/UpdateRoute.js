import React, { Component, lazy } from "react";
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
  Row
} from "reactstrap";
class UpdateRoute extends Component {
  state = {};
  
  render(
      
  ) {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Route 1</strong>
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
                      <Input disabled
                        type="number"
                        id="rid"
                        name="text-input"
                        placeholder="Number"
                        min="0"
                        defaultValue="1"
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
                        defaultValue= "Muridke-Comsats"
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
                        defaultValue="Fall 2020"
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
                        defaultValue="1200"
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
                        defaultValue="1400"
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
                          <Input id="stopList" type="text" defaultValue="Muridke, Shahdrah, Bhatti Chowk, Sagian Pull, Moterway, Thokar Comsats" />
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
                      <Label htmlFor="select">Live Status</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="rLiveStatus">
                        <option value="0">Please select</option>
                        <option value="2" selected>Live</option>
                        <option value="3">Not Live</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary">
                  <i className="fa fa-dot-circle-o"></i> Update
                </Button>
                <Button type="reset" size="sm" color="danger">
                  <i className="fa fa-ban"></i> Delete
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UpdateRoute;
