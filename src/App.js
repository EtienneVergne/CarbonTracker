import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './styles/styles.css';
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrafficLight, faFlagCheckered, faBusAlt, faSmog } from '@fortawesome/free-solid-svg-icons';

library.add(faTrafficLight, faFlagCheckered, faBusAlt, faSmog)





function App() {
  return (
    <div className="App">

      <div id="navigation">
        <nav className="navbar navbar-expand-lg navbar-light ">

          <a className="navbar-brand logo" href="#">
            <img src="./img/logoapp.jpg" width="50" height="50" className="d-inline-block align-top" alt="" loading="lazy" /><h1>Carbon Tracker</h1>

          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse menu" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to={'/'}><a class=" text-link" href="#" id="item">Accueil<span class="sr-only">(current)</span></a></Link>
              </li>
              <li class="nav-item">
                <Link to={'/calculator'}><a class="text-link"  id="item2" href="#">Calcul CO2/trajet</a></Link>

              </li>
              <li class="nav-item">
                <Link to={'/mobilitedouce'}><a class="text-link" href="#" id="item3">Décarboner ses déplacements</a></Link>
              </li>

            </ul>
          </div>

        </nav>
      </div>


      <div className="presentation">
        <div className="container">
          <div className="row">
            <div className=" col-lg image_presentation">
            <img src="./img/Save-Earth-PNG-Picture.png" alt="" />
            </div>
            <div class="col-lg texte-presentation">
              <h1>Connaissez-vous le bilan carbone de votre voyage?</h1>
              <p>L'été pointe le bout de son nez...Après trois mois de confinement, vous êtes fermement décidé.e à vous offrir des vacances inoubliables. Avez-vous une idée combien tous ces beaux projets vont coûter en terme de CO2 rejeté dans l'atmosphère ? Avion, voitures, train ou vélo, on vous aide à évaluer l'impact écologique de vos futures déplacements.</p>
              <Link to={'/calculator'}><button>Je teste</button></Link>
            </div>
          </div>
        </div>

      </div>



    </div>
  );
}

export default App;
