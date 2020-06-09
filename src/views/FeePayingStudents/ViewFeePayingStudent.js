import React, { Component } from "react";
import {
  Label,
  Input,
  FormGroup,
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
  Button
} from "reactstrap";
class ViewFeePayingStudents extends Component {
  state = {};
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Students Who has paid fee</strong>
                <CardBody>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="disabled-input">Session</Label>
                    </Col>
                    <Col xs="12" md="3">
                      <Input
                        type="text"
                        id="disabled-input"
                        name="disabled-input"
                        placeholder="Fall 2020"
                        disabled
                      />
                    </Col>
                  </FormGroup>

                  <Table hover bordered striped responsive size="sm">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Ali Amjad</td>
                        <td>FA16-BCS-334</td>
                        <td>
                        <Row>
                          <Col col="3" md="12">
                            <Button block color="ghost-danger">
                              Ban
                            </Button>
                          </Col>
                        </Row>
                      </td>
                      </tr>
                      <tr>
                        <td>Shahzaib Minhas</td>
                        <td>FA16-BCS-340</td>
                        <td>
                        <Row>
                          <Col col="3" md="12">
                            <Button block color="ghost-danger">
                              Ban
                            </Button>
                          </Col>
                        </Row>
                      </td>
                      </tr>
                      <tr>
                        <td>Mam Asmara</td>
                        <td>asmarasafdar@cuilahore.edu.pk</td>
                        <td>
                        <Row>
                          <Col col="3" md="12">
                            <Button block color="ghost-danger">
                              Ban
                            </Button>
                          </Col>
                        </Row>
                      </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </CardHeader>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ViewFeePayingStudents;
