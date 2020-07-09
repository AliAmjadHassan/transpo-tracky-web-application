import React, { Component, lazy } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";
import {
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
  Button,
  NavLink,
} from "reactstrap";

class TrackRoutes extends Component {
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    }
  }
  state = {};
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <i className=""></i> <strong>Live Location</strong>
              </CardHeader>
              <CardBody>
                <Col md="12" sm="3">
                  <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.413809808063!2d74.21044541447971!3d31.402723060085357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ffd0bc7c5f71%3A0x879e9b82857bcd94!2sCOMSATS%20University%2C%20Lahore%20Campus!5e0!3m2!1sen!2s!4v1586779611960!5m2!1sen!2s"
                    width="100%"
                    height="400px"
                    frameborder="0"
                    style="border:0;"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  ></Iframe>
                </Col>
                <Col md="12">
                  <Link
                    to="/active-routes"
                    style={{
                      paddingTop: "20px",
                      textDecoration: "none",
                      float: "right",
                    }}
                  >
                    <Button block color="ghost-success">
                      Back
                    </Button>
                  </Link>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TrackRoutes;
