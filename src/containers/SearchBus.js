import React, { Component } from "react";
import {connect} from 'react-redux';
import {searchBus} from '../actions';
import {bindActionCreators} from 'redux';
import { func } from "prop-types";
class SearchBus extends Component {
  
    constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      keyword: event.target.value,
    });
  };

  componentDidMount() {
    console.log(this.state);
  }

  searchBus =(event)=>{
      event.preventDefault();
      this.props.searchBus(this.state.keyword)

  }
  render() {
    return (
      <div className="searchBus">
        <form onSubmit={this.searchBus}>
          <input
            type="text"
            value={this.state.keyword}
            onChange={this.handleChange}
          ></input>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({searchBus},dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBus);
