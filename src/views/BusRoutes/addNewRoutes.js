import React, { Component } from "react";
import { Field, reduxForm, FieldArray } from "redux-form";
import { connect } from "react-redux";
import { getactivesession } from "../../actions/sessionActions";
import LoadingScreen from "react-loading-screen";
import logo from "../../assets/img/brand/logop.svg";
import MyMapComponent from "./MapComponent";
import { addNewRoute } from "../../actions/routesActions";
import {
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
  Label,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
let latarray = [];
let lngarray = [];

class AddRoute extends Component {
  componentDidMount() {
    console.log("Add Route Props", this.props);
    this.props.getactivesession();
  }

  renderField = ({
    input,
    label,
    placeholder,
    type,
    className,
    helpingText,
    meta: { touched, error },
  }) => (
    <FormGroup row className={className}>
      <Col md="3">
        <Label>{label}</Label>
      </Col>
      <Col xs="12" md="3">
        <Input {...input} type={type} placeholder={placeholder} />
        <FormText color="muted">{helpingText}</FormText>
        {touched && error && (
          <span
            style={{
              color: "red",
            }}
          >
            {error}
          </span>
        )}
      </Col>
    </FormGroup>
  );

  renderStopField = ({
    input,
    label,
    placeholder,
    type,
    className,
    helpingText,

    meta: { touched, error },
  }) => (
    <FormGroup row className={className}>
      <Col sm="6">
        <Label>{label}</Label>

        <Input {...input} type={type} placeholder={placeholder} />
        <FormText color="muted">{helpingText}</FormText>
      </Col>
      {touched && error && (
        <span
          style={{
            color: "red",
          }}
        >
          {error}
        </span>
      )}
    </FormGroup>
  );

  renderStopLatLngField = ({
    input,
    label,
    placeholder,
    type,
    className,
    helpingText,

    meta: { touched, error },
  }) => (
    <FormGroup row className={className}>
      <Col sm="6">
        <Label>{label}</Label>

        <Input {...input} disabled type={type} placeholder={placeholder} />
        <FormText color="muted">{helpingText}</FormText>
      </Col>
      {touched && error && (
        <span
          style={{
            color: "red",
          }}
        >
          {error}
        </span>
      )}
    </FormGroup>
  );

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

  latlnghandler(lat, lng, index) {
    this.props.latarray[index] = lat;
    this.props.lngarray[index] = lng;
    console.log("LatArray", latarray);
  }

  renderStops = ({
    required,

    mapLat,
    mapLng,
    fields,
    meta: { error, submitFailed },
  }) => (
    <ListGroup>
      <ListGroupItem>
        <Button
          size="sm"
          color="success"
          type="button"
          style={{
            display: "inline-block",
            float: "right",
          }}
          onClick={() => fields.push({})}
        >
          Add Stops
        </Button>
        {submitFailed && error && <span>{error}</span>}
      </ListGroupItem>

      {fields.map((stop, index) => (
        <ListGroupItem key={index}>
          <h4
            style={{
              marginBottom: "20px",
              color: "red",
            }}
          >
            Stop No.{index + 1}
          </h4>
          <Row>
            <Col sx="6" md="6" sm="12">
              <Field
                name={`${stop}.name`}
                type="text"
                component={this.renderStopField}
                label="Name"
                // validate={required}
              />
            </Col>
            <Col sx="6" md="6" sm="12">
              <Field
                name={`${stop}.timeToReach`}
                type="time"
                component={this.renderStopField}
                label="Time To Reach"
                // validate={required}
              />
            </Col>
            <Col sx="6" md="6" sm="12">
              <Field
                name={`${stop}.latitude`}
                type="text"
                component={this.renderStopLatLngField}
                label="Lattitude"
                // validate={required}
                value={this.props.change(
                  `${stop}.latitude`,
                  this.props.latarray[index]
                )}
              />
            </Col>
            <Col sx="6" md="6" sm="12">
              <Field
                name={`${stop}.longitude`}
                type="text"
                component={this.renderStopLatLngField}
                label="Longitude"
                // validate={required}
                value={this.props.change(
                  `${stop}.longitude`,
                  this.props.lngarray[index]
                )}
              />
            </Col>
            <Col sm="12">
              <MyMapComponent />
            </Col>
          </Row>

          <Button
            type="button"
            title="Remove Stop"
            size="sm"
            color="danger"
            style={{
              float: "right",
              marginTop: "50px",
              marginLeft: "20px",
            }}
            onClick={() => fields.remove(index)}
          >
            Delete
          </Button>
          <Button
            title="Finalize Stop"
            size="sm"
            color="success"
            style={{
              float: "right",
              marginTop: "50px",
            }}
            onClick={() => this.latlnghandler(mapLat, mapLng, index)}
          >
            Done
          </Button>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
  onSubmit(Values) {
    this.props.addNewRoute(Values,() => {
      this.props.history.push("/view-routes");
    });
  }

  render() {
    console.log("Props from add route", this.props);
    // const { pristine, reset, submitting } = this.props;
    if (this.props.activeSession === undefined) {
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
      const sessionvalue = {
        session: {
          id: this.props.activeSession.id,
        },
      };

      let lat = 0;
      let lng = 0;

      if (this.props.mapLocation === undefined) {
        lat = 0;
        lng = 0;
      } else {
        lat = this.props.mapLocation.lat;
        lng = this.props.mapLocation.lng;
      }
      // const required = (value) =>
      //   value ? undefined : `This field is Required`;
      console.log(sessionvalue);
      return (
        <div className="animated fadeIn">
          <Row>
            <Col xs="12" md="12">
              <Card>
                <CardHeader>
                  <strong>Add New Routes</strong>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={this.handleSubmit}>
                    <Field
                      name="name"
                      type="text"
                      component={this.renderField}
                      label="Route Name"
                      placeholder="Enter Route Name"
                      helpingText="e.g. Route # 10"
                    />
                    <Field
                      name="pickUpTime"
                      type="time"
                      component={this.renderField}
                      label="Pick Up Time"
                      helpingText="Select Pick Up Time"
                    />
                    <Field
                      name="dropOffTime"
                      type="time"
                      component={this.renderField}
                      label="Drop Off Time"
                      helpingText="Select Drop Off Time"
                    />
                    <Field
                      name="liveStatus"
                      label="Live Status"
                      status1="Not Live"
                      value1="0"
                      status2="Live"
                      value2="1"
                      status3="Please Select"
                      component={this.dropDownHandler}
                      type="select"
                    />
                    <Field
                      name="session"
                      label="Session"
                      status1="Current Session"
                      value1={JSON.stringify(sessionvalue.session)}
                      status2="Next Session"
                      status3="Please Select"
                      component={this.dropDownHandler}
                      type="select"
                    ></Field>
                    <FieldArray
                      mapLat={lat}
                      mapLng={lng}
                      latarray={latarray}
                      lngarray={lngarray}
                      name="stopList"
                      // required={required}
                      component={this.renderStops}
                    />
                    <CardFooter>
                      <Button
                        onClick={this.props.handleSubmit((event) =>
                          this.onSubmit(event)
                        )}
                        type="submit"
                        size="md"
                        color="primary"
                      >
                        Submit
                      </Button>
                      <Button
                        type="button"
                        size="md"
                        color="danger"
                        style={{
                          marginLeft: "20px",
                        }}
                        // disabled={pristine || submitting}
                        // onClick={reset}
                      >
                        Clear Values
                      </Button>
                    </CardFooter>
                  </Form>
                </CardBody>
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

  if (!Values.name) {
    errors.name = "Route Name is Required";
  }

  if (Values.liveStatus === "notselected" || !Values.liveStatus) {
    errors.liveStatus = "Please Select";
  }
  if (!Values.pickUpTime) {
    errors.pickUpTime = "Please Select";
  }
  if (!Values.dropOffTime) {
    errors.dropOffTime = "Please Select";
  }
  console.log(Values);

  return errors;
}

function mapStateToProps(state) {
  // console.log("state of add route", state);
  if (state.Sessions.activeSession === undefined) return {};
  else {
    return {
      activeSession: state.Sessions.activeSession.data,
      mapLocation: state.Routes.mapLocation,
      latarray: latarray,
      lngarray: lngarray,
    };
  }
}
export default reduxForm({
  validate,
  form: "add-new-route",
})(connect(mapStateToProps, { getactivesession, addNewRoute })(AddRoute));
