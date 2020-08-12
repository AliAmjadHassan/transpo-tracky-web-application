import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addNewEmployees } from "../../actions/EmployeesAction";
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

class AddEmployee extends Component {
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
  dropDownHandler = ({
    label,
    value1,
    value2,
    status1,
    status2,
    status3,
    input,
    type,
    meta: { touched, error },
  }) => (
    <FormGroup row>
      <Col md="3">
        <Label>{label}</Label>
      </Col>
      <Col xs="12" md="3">
        <Input type={type} {...input}>
          <option value="notselected">{status3}</option>
          <option value={value1}>{status1}</option>
          <option value={value2}>{status2}</option>
        </Input>
      </Col>
    </FormGroup>
  );
  EmployeesHandler = ({
    label,
    value1,
    value2,
    status1,
    status2,
    status3,
    value3,
    input,
    status4,
    value4,
    type,
    meta: { touched, error },
  }) => (
    <FormGroup row>
      <Col md="3">
        <Label>{label}</Label>
      </Col>
      <Col xs="12" md="3">
        <Input type={type} {...input}>
          <option value={value3}>{status3}</option>
          <option value={value1}>{status1}</option>
          <option value={value2}>{status2}</option>
          <option value={value4}>{status4}</option>
        </Input>
      </Col>
    </FormGroup>
  );

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
    this.props.addNewEmployees(Values, () => {
      this.props.history.push("/view-driver");
    });
  }

  render() {
    console.log("Props from Add Employees", this.props);
    return (
      <div className="AddEmployee animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Add an Employee</strong>
              </CardHeader>
              <CardBody>
                <form
                  onSubmit={this.props.handleSubmit((event) =>
                    this.onSubmit(event)
                  )}
                  className="form-horizontal"
                >
                  <Field
                    myLabel="Registration ID"
                    helpingText="E.g EMP-1234"
                    name="registrationId"
                    component={this.textInputHandler}
                  ></Field>

                  <Field
                    myLabel="First Name"
                    // helpingText="E.g Honda, Civic"
                    name="firstName"
                    component={this.textInputHandler}
                  ></Field>

                  <Field
                    myLabel="Last Name"
                    // helpingText="E.g 2014"
                    name="lastName"
                    component={this.textInputHandler}
                  ></Field>

                  <Field
                    myLabel="Password"
                    // helpingText="E.g coaster, Bus, Car etc."
                    name="password"
                    component={this.textInputHandler}
                  ></Field>
                  <Field
                    myLabel="Contact Number"
                    helpingText="E.g 03001234567"
                    name="contact"
                    component={this.textInputHandler}
                  ></Field>
                  <Field
                    myLabel="CNIC Number"
                    helpingText="E.g 12345-1234567-9"
                    name="cnic"
                    component={this.textInputHandler}
                  ></Field>
                  <Field
                    myLabel="Address"
                    // helpingText="E.g coaster, Bus, Car etc."
                    name="address"
                    component={this.textInputHandler}
                  ></Field>
                  <Field
                    name="gender"
                    label="Gender"
                    status1="Male"
                    value1="male"
                    status2="Female"
                    value2="female"
                    status3="Please Select"
                    component={this.dropDownHandler}
                    type="select"
                  />
                  <Field
                    name="designationID"
                    label="Designation"
                    status1="Admin"
                    value1="2"
                    status3="Please Select"
                    value3="notselected"
                    status2="Conductor"
                    value2="3"
                    status4="Driver"
                    value4="1"
                    component={this.EmployeesHandler}
                    type="select"
                  />
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

  if (!Values.registrationId) {
    errors.registrationId = "Oops!! Man Enter Registration ID";
  }

  if (!Values.firstName) {
    errors.firstName = "First Name is required";
  }

  if (!Values.lastName) {
    errors.lastName = "Last Name is missing";
  }

  if (!Values.password) {
    errors.password = "How can someone be safe without a password??";
  }
  if (!Values.cnic) {
    errors.cnic = "CNIC is required for Additional Security";
  }
  if (!Values.contact) {
    errors.contact =
      "How will call an Employee without providing a Phone Number??";
  }
  if (!Values.address) {
    errors.address = "How will you find someone without an Address??? ";
  }
  if (!Values.gender || Values.gender == "notselected") {
    errors.gender = "Gender can not be Undefined :p";
  }

  console.log(Values);

  return errors;
}

function mapStateToProps(state) {
  console.log("State of Add Employee", state);
  // return {
  //   success: state.data,
  // };
}

export default reduxForm({
  validate,
  form: "add-employee-form",
})(connect(mapStateToProps, { addNewEmployees })(AddEmployee));
