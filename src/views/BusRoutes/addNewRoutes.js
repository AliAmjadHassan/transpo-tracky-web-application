import React, { Component, useEffect } from "react";
import { Field, reduxForm, FieldArray, getFormValues } from "redux-form";
import { connect } from "react-redux";
import { getactivesession } from "../../actions/sessionActions";
import LoadingScreen from "react-loading-screen";
import logo from "../../assets/img/brand/logop.svg";

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

// class addNewRoutes extends Component {
//   textInputHandler(field) {
//     const className = `form-input ${
//       field.meta.touched && field.meta.error ? "has-error" : ""
//     }`;

//     return (
//       <FormGroup row className={className}>
//         <Col md="3">
//           <Label>{field.myLabel}</Label>
//         </Col>
//         <Col xs="12" md="3">
//           <Input required type="text" {...field.input} />
//           <FormText color="muted">{field.helpingText}</FormText>
//         </Col>
//         <div style={{ color: "red" }} className="error danger">
//           {field.meta.touched ? field.meta.error : ""}
//         </div>
//       </FormGroup>
//     );
//   }

//   timeInputHandler(field) {
//     const className = `form-input ${
//       field.meta.touched && field.meta.error ? "has-error" : ""
//     }`;

//     return (
//       <FormGroup row className={className}>
//         <Col md="3">
//           <Label>{field.myLabel}</Label>
//         </Col>
//         <Col xs="12" md="3">
//           <Input required type="time" {...field.input} />
//           <FormText color="muted">{field.helpingText}</FormText>
//         </Col>
//         <div style={{ color: "red" }} className="error">
//           {field.meta.touched ? field.meta.error : ""}
//         </div>
//       </FormGroup>
//     );
//   }
// dropDownHandler(field) {
//   const className = `form-input ${
//     field.meta.touched && field.meta.error ? "has-error" : ""
//   }`;

//   return (
//     <FormGroup row>
//       <Col md="3">
//         <Label htmlFor="select">{field.myLabel}</Label>
//       </Col>
//       <Col xs="12" md="3">
//         <Input type="select" {...field.input}>
//           <option value="notselected">{field.status3}</option>
//           <option value={field.value1}>{field.status1}</option>
//           <option value={field.value2}>{field.status2}</option>
//         </Input>
//       </Col>
//       <div style={{ color: "red" }} className="error">
//         {field.meta.touched ? field.meta.error : ""}
//       </div>
//     </FormGroup>
//   );
// }

//   onSubmit(Values) {
//     this.props.addNewBus(Values, () => {
//       this.props.history.push("/view-bus");
//     });
//   }

// componentDidMount() {
//   this.props.getactivesession();
// }

//   render() {
// if (this.props.activeSession == undefined) {
//   return <div></div>;
// } else {
//   const sessionvalue = {
//     session: {
//       id: this.props.activeSession.id,
//     },
//   };
//   console.log("Props of Add Route", this.props);
//   console.log("Session Value", sessionvalue);
//       return (
//         <div className="animated fadeIn">
//           <Row>
//             <Col xs="12" md="12">
//               <Card>
//                 <CardHeader>
//                   <strong>Add New Routes</strong>
//                 </CardHeader>
//                 <CardBody>
//                   <Form
//                     action=""
//                     method="post"
//                     encType="multipart/form-data"
//                     className="form-horizontal"
//                   >
//                     <Field
//                       myLabel="Route Name"
//                       helpingText="e.g route No. 1"
//                       name="name"
//                       component={this.textInputHandler}
//                     ></Field>
// <Field
//   name="liveStatus"
//   myLabel="Live Status"
//   status1="Not Live"
//   value1="0"
//   status2="Live"
//   value2="1"
//   status3="Please Select"
//   component={this.dropDownHandler}
// ></Field>
// <Field
//   name="session"
//   myLabel="Session"
//   status1="Current Session"
//   value1={JSON.stringify(sessionvalue)}
//   status2="Next Session"
//   status3="Please Select"
//   component={this.dropDownHandler}
// ></Field>
//                     <Field
//                       name="pickUpTime"
//                       myLabel="Pick Up Time"
//                       component={this.timeInputHandler}
//                     ></Field>
//                     <Field
//                       name="dropOffTime"
//                       myLabel="Drop Off Time"
//                       component={this.timeInputHandler}
//                     ></Field>
//                   </Form>
//                 </CardBody>
//                 <CardFooter>
//                   <Button type="submit" size="sm" color="primary">
//                     <i className="fa fa-dot-circle-o"></i> Submit
//                   </Button>
//                   <Button type="reset" size="sm" color="danger">
//                     <i className="fa fa-ban"></i> Reset
//                   </Button>
//                 </CardFooter>
//               </Card>
//             </Col>
//           </Row>
//         </div>
//       );
//     }
//   }
// }

// function validate(Values) {
//   const errors = {};

//   if (!Values.name) {
//     errors.name = "Route Name is Required";
//   }

//   if (Values.liveStatus == "notselected" || !Values.liveStatus) {
//     errors.liveStatus = "Please Select";
//   }
//   if (!Values.pickUpTime) {
//     errors.pickUpTime = "Please Select";
//   }
//   if (!Values.dropOffTime) {
//     errors.dropOffTime = "Please Select";
//   }

//   // if (!Values.model) {
//   //   errors.model = "Enter Bus Model";
//   // }

//   // if (!Values.type) {
//   //   errors.type = "Enter Bus Type";
//   // }
//   // if (!Values.capacity || Values.capacity < 0) {
//   //   errors.capacity = "Enter a valid Number";
//   // }

//   console.log(Values);

//   return errors;
// }

// function mapStateToProps(state) {
//   // console.log("State", state);
//   if (state.Sessions.activeSession == undefined) return {};
//   else {
//     return {
//       activeSession: state.Sessions.activeSession.data,
//     };
//   }
// }
// export default reduxForm({
//   validate,
//   form: "add-new-route",
// })(connect(mapStateToProps, { getactivesession })(addNewRoutes));

const renderField = ({
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

const dropDownHandler = ({
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

const renderStops = ({ fields, meta: { error, submitFailed } }) => (
  <ListGroup>
    <ListGroupItem>
      <Button
        size="sm"
        color="success"
        type="button"
        style={{
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
        <FormText>Stop No.{index + 1}</FormText>
        <Field
          name={`${stop}.name`}
          type="text"
          component={renderField}
          label="Name"
        />
        <Field
          name={`${stop}.timeToReach`}
          type="time"
          component={renderField}
          label="Time To Reach"
        />
        <Field
          name={`${stop}.latitude`}
          type="text"
          component={renderField}
          label="Lattitude"
        />
        <Field
          name={`${stop}.longitude`}
          type="text"
          component={renderField}
          label="Longitude"
        />
        <Button
          type="button"
          title="Remove Stop"
          size="sm"
          color="danger"
          style={{
            float: "right",
          }}
          onClick={() => fields.remove(index)}
        >
          Delete
        </Button>
      </ListGroupItem>
    ))}
  </ListGroup>
);

const AddNewRoutes = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  console.log(props);
  useEffect(() => {
    props.getactivesession();
  }, []);
  if (props.activeSession == undefined) {
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
        id: props.activeSession.id,
      },
    };
    console.log("Props of Add Route", props);
    console.log("Session Value", sessionvalue.session);
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Add New Routes</strong>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Field
                    name="name"
                    type="text"
                    component={renderField}
                    label="Route Name"
                    placeholder="Enter Route Name"
                    helpingText="e.g. Route # 10"
                  />
                  <Field
                    name="pickUpTime"
                    type="time"
                    component={renderField}
                    label="Pick Up Time"
                    helpingText="Select Pick Up Time"
                  />
                  <Field
                    name="dropOffTime"
                    type="time"
                    component={renderField}
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
                    component={dropDownHandler}
                    type="select"
                  />
                  <Field
                    name="session"
                    label="Session"
                    status1="Current Session"
                    value1={JSON.stringify(sessionvalue)}
                    status2="Next Session"
                    status3="Please Select"
                    component={dropDownHandler}
                    type="select"
                  ></Field>
                  <FieldArray name="stopList" component={renderStops} />
                  <CardFooter>
                    <Button
                      type="submit"
                      size="md"
                      color="primary"
                      disabled={submitting}
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
                      disabled={pristine || submitting}
                      onClick={reset}
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
};
function validate(Values) {
  const errors = {};

  if (!Values.name) {
    errors.name = "Route Name is Required";
  }

  if (Values.liveStatus == "notselected" || !Values.liveStatus) {
    errors.liveStatus = "Please Select";
  }
  if (!Values.pickUpTime) {
    errors.pickUpTime = "Please Select";
  }
  if (!Values.dropOffTime) {
    errors.dropOffTime = "Please Select";
  }

  // if (!Values.model) {
  //   errors.model = "Enter Bus Model";
  // }

  // if (!Values.type) {
  //   errors.type = "Enter Bus Type";
  // }
  // if (!Values.capacity || Values.capacity < 0) {
  //   errors.capacity = "Enter a valid Number";
  // }

  console.log(Values);

  return errors;
}
function mapStateToProps(state) {
  console.log("State", state);
  if (state.Sessions.activeSession == undefined) return {};
  else {
    return {
      activeSession: state.Sessions.activeSession.data,
    };
  }
}
export default reduxForm({
  validate,
  form: "add-new-route",
})(connect(mapStateToProps, { getactivesession })(AddNewRoutes));
