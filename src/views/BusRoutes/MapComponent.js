import React, { Component } from "react";
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";
import AutoComplete from "react-google-autocomplete";
import { Descriptions } from "antd";
import "antd/dist/antd.css";
// import { getMapPositioninProps } from "../../actions/routesActions";
import * as actions from "../../actions/routesActions";
import { connect } from "react-redux";

Geocode.setApiKey("AIzaSyB_1B1lEbZV1lZDE5gL734kqm0BKq5f-Uo");
let lat,lng=0
let zoom = 15
let height = 400
class MyMapComponent extends Component {
  state = {
    zoom: 15,
    height: 400,
    mapPosition: {
      lat: 0,
      lng: 0,
    },
    markerPosition: {
      lat: 0,
      lng: 0,
    },
  };

  getCity = (addressArray) => {
    let city = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        "administrative_area_level_2" === addressArray[i].types[0]
      ) {
        city = addressArray[i].long_name;
        return city;
      }
    }
  };

  getArea = (addressArray) => {
    let area = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j++) {
          if (
            "sublocality_level_1" === addressArray[i].types[j] ||
            "locality" === addressArray[i].types[j]
          ) {
            area = addressArray[i].long_name;
            return area;
          }
        }
      }
    }
  };

  getState = (addressArray) => {
    let state = "";
    for (let i = 0; i < addressArray.length; i++) {
      for (let i = 0; i < addressArray.length; i++) {
        if (
          addressArray[i].types[0] &&
          "administrative_area_level_1" === addressArray[i].types[0]
        ) {
          state = addressArray[i].long_name;
          return state;
        }
      }
    }
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onMarkerDragEnd = (event) => {
    let newLat = event.latLng.lat(),
      newLng = event.latLng.lng();

    Geocode.fromLatLng(newLat, newLng).then(
      (response) => {
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getCity(addressArray),
          area = this.getArea(addressArray),
          state = this.getState(addressArray);
        this.setState({
          markerPosition: {
            lat: newLat,
            lng: newLng,
          },
          mapPosition: {
            lat: newLat,
            lng: newLng,
          },
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  onPlaceSelected = (place) => {
    // console.log("plc", place);
    const address = place.formatted_address,
      addressArray = place.address_components,
      city = this.getCity(addressArray),
      area = this.getArea(addressArray),
      state = this.getState(addressArray),
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng();

    // console.log("latvalue", latValue);
    // console.log("lngValue", lngValue);

    // Set these values in the state.
    this.setState({
      address: address ? address : "",
      area: area ? area : "",
      city: city ? city : "",
      state: state ? state : "",
      markerPosition: {
        lat: latValue,
        lng: lngValue,
      },
      mapPosition: {
        lat: latValue,
        lng: lngValue,
      },
    });
  };
  componentDidUpdate() {
    
    let newArray =[this.state]
    console.log("Sending to Map Function", newArray);
    this.props.mapFunction(...newArray);
  }
  render() {
    const AsyncMap = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultZoom={this.state.zoom}
          defaultCenter={{
            lat: this.state.mapPosition.lat,
            lng: this.state.mapPosition.lng,
          }}
        >
          <AutoComplete
            style={{
              width: "50%",
              height: "40px",
              paddingLeft: "16px",
              marginTop: "2px",
              marginBottom: "2rem",
            }}
            onPlaceSelected={this.onPlaceSelected}
            types={["(regions)"]}
          />
          {/* InfoWindow on top of marker */}

          {/*Marker*/}
          <Marker
            google={this.props.google}
            name={"Dolores park"}
            draggable={true}
            onDragEnd={this.onMarkerDragEnd}
            position={{
              lat: this.state.markerPosition.lat,
              lng: this.state.markerPosition.lng,
            }}
          />
          <InfoWindow
            onClose={this.onInfoWindowClose}
            position={{
              lat: this.state.markerPosition.lat + 0.0018,
              lng: this.state.markerPosition.lng,
            }}
          >
            <div>
              <span style={{ padding: 0, margin: 0 }}>
                {this.state.address}
              </span>
            </div>
          </InfoWindow>
          <Marker />

          {/* <MarkerWithLabel
                        position={{ lat: -34.397, lng: 150.644 }}
                        labelAnchor={new google.maps.Point(0, 0)}
                        labelStyle={{ backgroundColor: "yellow", fontSize: "32px", padding: "16px" }}
                    >
                        <div>Hello There!</div>
                    </MarkerWithLabel> */}

          {/* For Auto complete Search Box */}
        </GoogleMap>
      ))
    );
    let City,Area,State,Address = ""
    if(this.props.mapLocation==undefined){
      City = ""
     Area = ""
       State = ""
      Address = ""
    }else{
       City = this.props.mapLocation.city
       Area = this.props.mapLocation.area
       State = this.props.mapLocation.state
       Address = this.props.mapLocation.address
    }
    return (
      <div style={{ padding: "1rem", margin: "0 auto", maxWidth: 1000 }}>
        <h4
          style={{
            marginBottom: "20px",
            color: "red",
          }}
        >
          Select Location from Map
        </h4>
        
        <Descriptions bordered={true}>
          <Descriptions.Item label="City:">{City}</Descriptions.Item>
          <Descriptions.Item label="Area:">{Area}</Descriptions.Item>
          <Descriptions.Item label="State:">
            {State}
          </Descriptions.Item>
          <Descriptions.Item label="Address">
            {Area}
          </Descriptions.Item>
        </Descriptions>
        <AsyncMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_1B1lEbZV1lZDE5gL734kqm0BKq5f-Uo&libraries=places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: this.state.height }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("State of Map Component", state);
  return state.Routes
}
export default connect(mapStateToProps, actions)(MyMapComponent);
