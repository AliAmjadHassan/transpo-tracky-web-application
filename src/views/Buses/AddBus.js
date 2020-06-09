import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addNewBus } from "../../actions/index";

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

class AddBus extends Component {
  textInputHandler(field) {
    const className = `form-input ${
      field.meta.touched && field.meta.error ? "has-error" : ""
    }`;

    return (
      <FormGroup row className={className}>
        <Col md="3">
          <Label>{field.myLabel}</Label>
        </Col>
        <Col xs="12" md="3">
          <Input required type="text" {...field.input} />
          <FormText color="muted">{field.helpingText}</FormText>
        </Col>
        <div style={{ color: "red" }} className="error danger">
          {field.meta.touched ? field.meta.error : ""}
        </div>
      </FormGroup>
    );
  }

  numberInputHandler(field) {
    const className = `form-input ${
      field.meta.touched && field.meta.error ? "has-error" : ""
    }`;

    return (
      <FormGroup row className={className}>
        <Col md="3">
          <Label>{field.myLabel}</Label>
        </Col>
        <Col xs="12" md="3">
          <Input required type="number" {...field.input} />
          <FormText color="muted">{field.helpingText}</FormText>
        </Col>
        <div style={{ color: "red" }} className="error">
          {field.meta.touched ? field.meta.error : ""}
        </div>
      </FormGroup>
    );
  }

  onSubmit(Values) {
    this.props.addNewBus(Values);
  }

  render() {
    
    console.log("Data",this.props.data)
    return (
      <div className="AddBus animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Add New Bus</strong>
              </CardHeader>
              <CardBody>
                <form
                  onSubmit={this.props.handleSubmit((event) =>
                    this.onSubmit(event)
                  )}
                  className="form-horizontal"
                >
                  <Field
                    myLabel="Bus Plate Number"
                    helpingText="E.g LEZ 1234"
                    name="plate"
                    component={this.textInputHandler}
                  ></Field>

                  <Field
                    myLabel="Bus Manufacturer Name"
                    helpingText="E.g Honda, Civic"
                    name="manufacturerName"
                    component={this.textInputHandler}
                  ></Field>

                  <Field
                    myLabel="Bus Model"
                    helpingText="E.g 2014"
                    name="model"
                    component={this.textInputHandler}
                  ></Field>

                  <Field
                    myLabel="Bus Type"
                    helpingText="E.g coaster, Bus, Car etc."
                    name="type"
                    component={this.textInputHandler}
                  ></Field>

                  <Field
                    myLabel="Bus Capaciy"
                    helpingText="E.g 20, 70 etc."
                    name="capacity"
                    component={this.numberInputHandler}
                  ></Field>

                  {/* <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Manufacture Name</Label>
                    </Col>
                    <Col xs="12" md="3">
                      <Input
                        type="text"
                        id="bManufactureName"
                        name="text-input"
                        placeholder="Name"
                      />
                      <FormText color="muted">
                        Enter Bus Manufacture Name Here
                      </FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Bus Model</Label>
                    </Col>
                    <Col xs="12" md="3">
                      <Input
                        type="text"
                        id="bModel"
                        name="text-input"
                        placeholder="Model"
                      />
                      <FormText color="muted">Enter Bus Model Here</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Bus Type</Label>
                    </Col>
                    <Col xs="12" md="3">
                      <Input
                        type="text"
                        id="bTyepe"
                        name="text-input"
                        placeholder="Bus-Tyepe"
                      />
                      <FormText color="muted">Enter Bus Type Here</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Bus Capacity</Label>
                    </Col>
                    <Col xs="12" md="3">
                      <Input
                        type="number"
                        id="bCapacity"
                        placeholder="Number"
                      />
                      <FormText color="muted">
                        Enter Maximum Number of passengers possible
                      </FormText>
                    </Col>
                  </FormGroup> */}
                </form>
              </CardBody>
              <CardFooter>
                <Button onClick={this.props.handleSubmit((event) =>
                    this.onSubmit(event)
                  )} type='submit' size="sm" color="primary">
                 Submit
                </Button>
                {/* <Button type="reset" size="sm" color="danger">
                  <i className="fa fa-ban"></i> Reset
                </Button> */}
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

function validate(Values) {
  const errors = {};

  if (!Values.plate) {
    errors.plate = "Plate Number is Required";
  }

  if (!Values.manufacturerName) {
    errors.manufacturerName = "Enter you Bus Manufacture Name";
  }

  if (!Values.model) {
    errors.model = "Enter Bus Model";
  }

  if (!Values.type) {
    errors.type = "Enter Bus Type";
  }
  if (!Values.capacity || Values.capacity < 0) {
    errors.capacity = "Enter a valid Number";
  }

  console.log(Values)

  return errors;
}

export default reduxForm({
  validate,
  form: "add-bus-form",
})(connect(null, { addNewBus })(AddBus));
