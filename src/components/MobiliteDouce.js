import React from 'react';
import { Link } from "react-router-dom";


const MobiliteDouce  = () => {
    return (
    
    <div className="articles container">
        <div className="titre_articles">
        <img src="./img/logoapp.jpg" width="70" height="70"/>
        <h1>Nos conseils pour un quotidien plus green et plus fun !</h1>
        
        </div> 
        <div className="row textes">
    
    <div className=" col-md train">
        <h1>Dix raisons de préférer le train à la voiture</h1>
        <img src="./img/tgv.jpg" alt=""/>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
    </div>
    <div className=" col-md covoiturage">
        <h1>Manuel de survie du covoitureur débutant</h1>
        <img src="./img/girls.jpg" alt=""/>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        
    </div>
    <div className=" col-md flygskam">
        <h1>'Flygskam' : la honte de prendre l'avion </h1>
        <img src="./img/airport.jpg" alt=""/>
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    </div>
    </div>

    <Link to="/">Retour à l'accueil</Link>
    </div>



    
     );
}

export default MobiliteDouce;
 
