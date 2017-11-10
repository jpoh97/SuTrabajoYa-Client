import React, {Component} from 'react'
import axios from 'axios'
import { Button, Card, Row, Col, Modal } from 'react-materialize'


class Login extends Component {
  constructor(props){
    super(props); //propiedades
    this.state={
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
        e.preventDefault();
        var email = e.target.email.value;
        var password = e.target.password.value;
        fetch("https://qfoi6sqsdi.execute-api.us-east-1.amazonaws.com/Prod/client", {
            method: 'POST',
            body: JSON.stringify({
              email: email,
              password: password
            })
        });
        e.target.email.value = '';
        e.target.password.value = '';
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
                      Iniciar sesión
                    </h2>
                    <div id="msg"></div>
                    <br/>
                    <label>
                        <span class="text">Correo electrónico:</span>
                        <input type="email" name="email" required/><br/>
                    </label>
                    <br/>
                    <label>
                        <span class="text">Contraseña:</span>
                        <input type="password" name="password" required/><br/>
                    </label>
                    <br/>                    
                    <br/>
                    <Button class="btn" type="submit">ENTRAR</Button>
            </form>
       </div>
     )
   }

 }

 export default Login;
