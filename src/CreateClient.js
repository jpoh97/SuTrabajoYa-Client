import React, {Component} from 'react'
import { Button } from 'react-materialize' //{ Button, Card, Row, Col, Modal }


class CreateClient extends Component {
  constructor(props){
    super(props); //propiedades
    this.state={
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
        e.preventDefault();
        var id = e.target.identification.value;
        var name = e.target.name.value;
        var lastname = e.target.lastname.value;
        var email = e.target.email.value;
        var password = e.target.password.value;
        var cellphone = e.target.cellphone.value;
        var city = e.target.city.value;
        var address = e.target.address.value;
        var phone = e.target.phone.value;
        var resume = e.target.resume.value;
        fetch("https://qfoi6sqsdi.execute-api.us-east-1.amazonaws.com/Prod/client", {
            method: 'POST',
            body: JSON.stringify({
              identification: id,
              name: name,
              lastname: lastname,
              email: email,
              password: password,
              cellphone: cellphone,
              city: city,
              address: address,
              phone: phone,
              resume: resume
            })
        });
        e.target.identification.value = '';
        e.target.name.value = '';
        e.target.lastname.value = '';
        e.target.email.value = '';
        e.target.password.value = '';
        e.target.cellphone.value = '';
        e.target.city.value = '';
        e.target.address.value = '';
        e.target.phone.value = '';
        e.target.resume.value = '';
        document.getElementById("msg").innerHTML = "<p>Cliente registrado exitosamente</p>";
    }


 	render(){ //aqui va todo lo referente a la vista
     return (
       <div class="container">
          <form
                    id="main"
                    method="post"
                    onSubmit={this.onSubmit}>
                    <h2>
                      Nuevo Cliente
                    </h2>
                    <div id="msg"></div>
                    <br/>
                    <label>
                        <span class="text">Correo electrónico:</span>
                        <input type="email" name="email" required/><br/>
                    </label>
                    <br/>
                    <label>
                        <span class="text">Nombre:</span>
                        <input type="text" name="name" required/><br/>
                    </label>
                    <br/>                    
                    <label>
                        <span class="text">Apellido:</span>
                        <input type="text" name="lastname" required/><br/>
                    </label>
                    <br/>
                    <label>
                        <span class="text">Identificación:</span>
                        <input type="number" name="identification" required/><br/>
                    </label>
                    <br/>
                    <label>
                        <span class="text">Contraseña:</span>
                        <input type="password" name="password" required/><br/>
                    </label>
                    <br/>
                    <label>
                        <span class="text">Celular:</span>
                        <input type="number" name="cellphone" required/><br/>
                    </label>
                    <br/>
                    <label>
                        <span class="text">Ciudad:</span>
                        <input type="text" name="city" required/><br/>
                    </label>
                    <br/>
                    <label>
                        <span class="text">Dirección:</span>
                        <input type="text" name="address" required/><br/>
                    </label>
                    <br/>
                    <label>
                        <span class="text">Telefono:</span>
                        <input type="number" name="phone" required/><br/>
                    </label>
                    <br/>
                    <label>
                        <span class="text">Resumen:</span>
                        <textarea name="resume" required></textarea>
                    </label>
                    <br/>
                    <br/>
                    <Button class="btn" type="submit">ENVIAR</Button>
            </form>
       </div>
     )
   }

 }

 export default CreateClient;
