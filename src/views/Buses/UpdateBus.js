import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { editbus } from "../../actions/index";
import * as actions from "../../actions";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";

class UpdateBus extends Component {
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

  render() {
    console.log("Props of Update Component", this.props);
    return (
      <div className="AddBus animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Add New Bus</strong>
              </CardHeader>
              <CardBody>
                <form className="form-horizontal">
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
                </form>
              </CardBody>
              <CardFooter>
                <Button
                  //   onClick={this.props.handleSubmit((event) =>
                  //     this.onSubmit(event)
                  //   )}

                  size="sm"
                  color="primary"
                >
                  Update
                </Button>
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
  return errors;
}
export function ClickedBusValueSetter(bus) {
  const {clickedbus} = bus
  return { BustoUpdate: clickedbus} 
}
export default reduxForm({
  validate,
  form: "update-bus-form",
})(connect(ClickedBusValueSetter, editbus)(UpdateBus));
