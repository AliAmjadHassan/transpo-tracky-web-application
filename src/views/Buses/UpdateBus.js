import React, { Component } from "react";
import { Field, reduxForm, getFormInitialValues } from "redux-form";
import { connect } from "react-redux";
import { clickedBusFunction, clearClickedBus } from "../../actions/busActions";
import logo from "../../assets/img/brand/logop.svg";
import { bindActionCreators } from "redux";
import LoadingScreen from "react-loading-screen";
import { updateBus } from "../../actions/busActions";
import { deleteBus } from "../../actions/busActions";

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

  disabledTextInputHandler(field) {
    const className = `form-input ${
      field.meta.touched && field.meta.error ? "has-error" : ""
    }`;

    return (
      <FormGroup row className={className}>
        <Col md="3">
          <Label>{field.myLabel}</Label>
        </Col>
        <Col xs="12" md="3">
          <Input disabled required type="text" {...field.input} />
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
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentDidMount() {
    this.props.clickedBusFunction(this.props.match.params.id);
  }
  componentDidUnMount() {
    this.props.clearClickedBus();
  }

  onSubmit(Values) {
    // console.log("Updated Values:", Values, "ID:", this.props.match.params.id);
    this.props.updateBus(Values, this.props.match.params.id, () => {
      this.props.history.push("/view-bus");
    });
  }
  onDelete() {
    console.log(this.props);
    this.props.deleteBus(this.props.match.id, () => {
      this.props.history.push("/view-bus");
    });
  }
  render() {
    const clickedBusVariable = this.props.Buses.clickedBus;
    if (clickedBusVariable == undefined) {
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
      console.log(this.props);
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
                      component={this.disabledTextInputHandler}
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
                    size="sm"
                    color="primary"
                  >
                    Update
                  </Button>

                  <Button
                    onClick={() =>
                      this.props.deleteBus(this.props.match.params.id, () => {
                        this.props.history.push("/view-bus");
                      })
                    }
                    // type="delete"
                    size="sm"
                    color="danger"
                  >
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
  console.log("Values from Update", Values);
  return errors;
}

function mapStateToProps(state) {
  if (state.Buses.clickedBus == undefined) {
    return { Buses: state.Buses };
  } else {
    return {
      Buses: state.Buses,
      initialValues: {
        plate: state.Buses.clickedBus.data.plate,
        manufacturerName: state.Buses.clickedBus.data.manufacturerName,
        model: state.Buses.clickedBus.data.model,
        type: state.Buses.clickedBus.data.type,
        capacity: state.Buses.clickedBus.data.capacity,
      },
      updateBus,
      deleteBus,
    };
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clickedBusFunction, clearClickedBus }, dispatch);
}
export default reduxForm({
  validate,
  form: "update-bus-form",
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(reduxForm({ asyncBlurFields: [] })(UpdateBus))
);
