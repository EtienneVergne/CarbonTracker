import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

class CarbonCalculator extends Component {
    state = {
        vDepart: '',
        vArrivee: '',
        distance: '',
        vehicule: '',
        bilan: '',
        bilanDone: false
    };


    changeVehicule(event) {
        this.setState({ vehicule: event.target.value })

    }


    




    async carbonBilan(event) {

        event.preventDefault();

        const distance = await fetch(`https://distanceto.p.rapidapi.com/get?car=false&foot=false&route=[{"t":"${this.state.vDepart}"},{"t":"${this.state.vArrivee}"}]`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "distanceto.p.rapidapi.com",
                "x-rapidapi-key": "df1e8cd691msh347e6f40838b7a4p12844ejsnbdd339eb9228"
            }
        })
        .then(response => response.json())
            
            .catch(err => {
                console.log(err);
            });
        console.log(distance)
        let dist = distance["steps"][0]["distance"]["haversine"];
        console.log(dist);
        
        

        this.setState({distance:dist});


        let bilan = await fetch(`https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=${this.state.distance}&vehicle=${this.state.vehicule}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
                "x-rapidapi-key": "df1e8cd691msh347e6f40838b7a4p12844ejsnbdd339eb9228"
            }
        })
            .then(response => response.json())
            
            .catch(err => {
                console.log(err);
            });
        console.log(bilan)

        let bilanCarb = bilan["carbonEquivalent"];

        this.setState({ bilan: bilanCarb });



    }



    render() {





        return (

            <div className="calculator">
                <div className="titrecalcul">
                <img src="./img/logoapp.jpg" width="70" height="70"/>
                <h1>Calculez le bilan carbone de votre itinéraire</h1>
                </div>
                <div className="container">
                    <div className="row">

                        <div className="col-md form_trip">
                            <form onSubmit={(e) => this.carbonBilan(e)} >
                            <label id="depart"><FontAwesomeIcon className="icon" icon="traffic-light" />   Quelle est la ville de départ ?</label>
                                <input value={this.state.vDepart} for="depart" type="text" onChange={(event) => this.setState({ vDepart: event.target.value })} />
                                <label id="arrivee"><FontAwesomeIcon className="icon" icon="flag-checkered" />           Quelle est la ville d'arrivée ?</label>
                                <input value={this.state.vArrivee} for="arrivee" type="text" onChange={(event) => this.setState({ vArrivee: event.target.value })} />
                                <label id="vehicules"><FontAwesomeIcon className="icon" icon="bus-alt" />   Quel est votre moyen de transport ?</label>
                                <select id="vehicules" value={this.state.vehicule} onChange={(e) => this.changeVehicule(e)} name="" multiple size="4">
                                    <optgroup label="Transports publics">
                                        <option value="Taxi">Taxi</option>
                                        <option value="ClassicBus">Bus</option>
                                        <option value="NationalTrain">Train</option>
                                        <option value="EcoBus">Ecobus</option>
                                    </optgroup>
                                    <optgroup label="Véhicules à moteurs">
                                        <option value="MediumMotorBike">Moto</option>
                                        <option value="SmallDieselCar">Citadine Diesel</option>
                                        <option value="LargeDieselCar">Berline Diesel</option>
                                        <option value="SmallPetrolCar">Citadine à essence</option>
                                        <option value="LargePetrolCar">Berline à essence</option>
                                        <option value="MediumLPGCar">Citadine GPL</option>
                                        <option value="LargeLPGCar">Berline GPL</option>
                                        <option value="MediumCNGCar">Citadine Gaz Naturel</option>
                                        <option value="LargeCNGCar">Berline Gaz Naturel</option>
                                        <option value="MediumHybridCar">Voiture hybride</option>
                                        <option value="LargeHybridCar">Berline Hybride</option>
                                        <option value="SmallPetrolVan">Camionette à essence </option>
                                        <option value="SmallDieselVan">Camionette disel</option>
                                        <option value="SmallLPGVan">Camionette GPL</option>
                                    </optgroup>

                                </select>
                                <input type="submit" value="Calculer le bilan" />
                            </form>

                        </div>



                        <div className="col-md resultat">
                            <h1><FontAwesomeIcon className="icon" icon="smog" /> Bilan carbone de ton voyage:</h1>
                            <div className="result">
                                <h2>{this.state.bilan}kg/CO2 émis au cours de ton trajet</h2>
                            </div>

                            <Link to="/mobilitedouce">Découvre vite comment décarboner ta life !</Link>
                        </div>

                        <div className="retour">
                            <Link to="/">Retour à l'accueil</Link>
                        </div>


                    </div>

                </div>

            </div>

        );
    }
}

export default CarbonCalculator;