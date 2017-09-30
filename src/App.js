import React, {Component} from 'react'
import axios from 'axios'

const url = 'https://api.mercadolibre.com/sites/MCO/search?q='


class App extends Component {
  constructor(props){
    super(props); //propiedades
    this.state={
      inputText: '',
      products: []
    };
    this.textChanged = this.textChanged.bind(this); 
    this.getProducts = this.getProducts.bind(this); 
    this.saveProducts = this.saveProducts.bind(this); 
  }

   textChanged(event){ //actualiza los campos cada que se llame el evento
     var product = event.target.value;
     this.setState({inputText: product});
   }

  getProducts(event){
    var self = this;
    axios.get(url + this.state.inputText).then(function (response) {
      self.saveProducts(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  saveProducts(response) {
    this.setState({products: response.data.results});
    console.log(this.state.products);    
    document.getElementById("showProducts").innerHTML = "";
    for(var i in this.state.products) {

      var htmlProducts = " <br/> <br/> <div><img src="+this.state.products[i].thumbnail+"> <br/><b>Nombre producto: </b>" 
                 + this.state.products[i].title + "<br/> Precio: <b>" +this.state.products[i].price
                 + "</b><br/> <b>Cantidad de vendidos: </b>" +this.state.products[i].sold_quantity +"</div>";
                  
                 document.getElementById("showProducts").innerHTML += htmlProducts;

    }
  }

 	render(){ //aqui va todo lo referente a la vista
     return (
       <div>
         <label>Buscar producto</label>
         <br/>
         <input type="text" onChange={this.textChanged}></input>
         <br/>
         <br/>
         <input type="submit" value="Buscar" onClick={this.getProducts} />
         <br/>
         <br/>
         <div id="showProducts"><h3>Lista de productos</h3></div>
       </div>
     )
   }

 }

 export default App;
