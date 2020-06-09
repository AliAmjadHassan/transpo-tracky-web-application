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
  Row
} from "reactstrap";
class FeePayingStudents extends Component {
  state = {};
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Allowed Passenger</strong>
              </CardHeader>
              <CardBody>
                <Form
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                    <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Session</Label>
                    </Col>
                    <Col xs="12" md="3">
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
                      <Label htmlFor="file-input">File input</Label>
                    </Col>
                    <Col xs="12" md="6">
                      <input accept=".xlsx" type="file" id="file-input" name="file-input" />
                    </Col>
                    <Col xs="12" md="3">
                     <Button className='btn-success'>Upload</Button>
                    </Col>
                  </FormGroup>
                  <strong>Or Add Manually</strong>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Name</Label>
                    </Col>
                    <Col xs="12" md="3">
                      <Input
                        type="cvs"
                        id="rSessionID"
                        name="text-input"
                        placeholder="Name"
                       
                      />
                      <FormText color="muted">
                        Enter Name of Passenger
                      </FormText>
                    </Col>
                    <Col md="1">
                      <Label htmlFor="text-input">Passenger ID</Label>
                    </Col>
                    <Col xs="12" md="3">
                      <Input
                        type="text"
                        id="rSessionID"
                        name="text-input"
                        placeholder="Passenger ID"
                      />
                      <FormText color="muted">
                        Enter Passenger ID
                      </FormText>
                    </Col>
                    <Col xs="12" md="2">
                     <Button className='btn-success'>Add</Button>
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

export default FeePayingStudents;
