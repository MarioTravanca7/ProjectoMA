import React from 'react';
import { Activity } from '../../../../app/models/activity';
import '../../styles/heroBanner.css'
// import '../../styles/global.css';
// import '../../styles/Home.modules.css';
import 'react-slideshow-image/dist/styles.css';

interface Props {
    activities: Activity[];
  }

function HeroBanner ({ activities }: Props){
    return(
        <div className='hero-banner-container'>
            <div className='hero-banner-conteudo'>
            <img 
                src='../../../assets/categoryImages/food.jpg'
                alt="fotos" className="hero-banner-image" />
            </div>
        </div>
    );
}

export default HeroBanner;

// src={`../../../assets/categoryImages/${activities[0].category}.jpg`}