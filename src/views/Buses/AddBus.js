import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addNewBus } from "../../actions/busActions";

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
    this.props.addNewBus(Values, () => {
      this.props.history.push("/view-bus");
    });
  }

  render() {
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
                </form>
              </CardBody>
              <CardFooter>
                <Button
                  onClick={this.props.handleSubmit((event) =>
                    this.onSubmit(event)
                  )}
                  type="submit"
                  size="sm"
                  color="primary"
                >
                  Submit
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

  console.log(Values);

  return errors;
}

function mapStateToProps(state) {
  return {
    success: state.data,
  };
}

export default reduxForm({
  validate,
  form: "add-bus-form",
})(connect(mapStateToProps, { addNewBus })(AddBus));
