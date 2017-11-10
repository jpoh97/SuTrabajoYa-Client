import React from "react";
import { Footer } from 'react-materialize';

export default class MyFooter extends React.Component {
  render() {
    return (
      <div>
        <Footer copyrights="© 2017 Copyright Text"
          moreLinks={
            <a className="grey-text text-lighten-4 right" href="#!">Más enlaces</a>
          }
          links={
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Acerca de</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Preguntas frecuentes</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Como empezar</a></li>
            </ul>
          }
          className='example blue-grey darken-4'
        >
            <h5 className="white-text">SuTrabajoYa INC</h5>
            <p className="grey-text text-lighten-4">La página ideal para buscar empleados informales</p>
        </Footer>
      </div>
    );
  }
}