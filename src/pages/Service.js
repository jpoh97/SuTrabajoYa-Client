import React from "react";
import axios from 'axios';
import { Link } from "react-router";

import MyFooter from "../components/layout/MyFooter";
import Nav from "../components/layout/Nav";
import { Row, Col, Card, CardTitle  } from 'react-materialize';

const url = 'https://qfoi6sqsdi.execute-api.us-east-1.amazonaws.com/Prod/service'

export default class Service extends React.Component {

   constructor(props){
    super(props); //propiedades
    this.state={
      services: []
    };
    this.getServices = this.getServices.bind(this); 
    this.addServices = this.addServices.bind(this); 
  }

  getServices(event){
    var self = this;
    console.log("oeeeee");
    axios.get(url).then(function (response) {
      self.addServices(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  addServices(response) {
      this.setState({services: response.data});
      console.log(this.state.services);    
      document.getElementById("showServices").innerHTML = "";
      for(var i in this.state.services) {

        var htmlServices = "<div class=\"blue-grey darken-4 card\"><div "
        +"class=\"card-content white-text\"><span class=\"card-title white-text text-darken-4\">"
        +"<!-- react-text: 43 -->"+this.state.services[i].serviceName+"<!-- /react-text -->"
        +"</span><br/><span><p><strong>Descripción:</strong> " + this.state.services[i].description + "</p>"
        +"<div><strong>Costo: </strong>"+this.state.services[i].cost+"</div></div>"
        +"<div class=\"card-reveal\"><span class=\"card-title grey-text text-darken-4\">"
        +"<!-- react-text: 47 -->Card title<!-- /react-text --><i class=\"material-icons right\">close"
        +"</i></span></div><div class=\"card-action\"><a href=\"#\">Ver detalle</a></div></div>";


                    
        document.getElementById("showServices").innerHTML += htmlServices;

      }
    }

  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    this.getServices();
    return (
      <div class="container">

        <Nav location={location} />        
        <br/>
        <Row>
          <Col s={12} m={10} l={8} className='grid-example offset-m1 offset-l2'> 
            <div id="showServices"></div>
          </Col>
        </Row>
        <MyFooter />
      </div>

    );
  }
}