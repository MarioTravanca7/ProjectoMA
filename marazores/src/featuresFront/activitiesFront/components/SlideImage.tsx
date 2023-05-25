import React from "react";
import { Activity } from "../../../app/models/activity";
import "../../styles/slideImage.css";
import { Slide } from "react-slideshow-image";
import { useStore } from "../../../app/stores/store";

const buttonStyle = {
  width: "30px",
  background: 'none',
  border: '0px',
};

const buttonStyle2 = {
  width: "0px",
  background: 'none',
  border: '0px',
  opacity: 0.5,
};

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  prevArrow: 
  <button style={{ ...buttonStyle2 }} className="button-view">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
      <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg>
  </button>,
  nextArrow: <button style={{ ...buttonStyle2 }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>

};


// style={{marginBottom: '100px'}}
function SlideImage() {
  const { activityStore } = useStore();

  return (
    <div className="slide-image" style={{marginBottom: '100px'}}>
    <Slide {...proprietes}>
      {activityStore.activitiesByTitle.map((activity: any) => (
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `url(/assets/categoryImages/${activity.category}.jpg)`,
            }}
          />
        </div>
      ))}
    </Slide>
    </div>
  );
}

export default SlideImage;


  /* 
`url(../../../assets/categoryImages/${activity.category}.jpg)`,

  <div
            style={{
              backgroundImage: `url(../../../assets/categoryImages/${activity.category}.jpg)`,
            }}
          ></div>
  
  <div className="hero-banner-container">
      <Slide {...proprietes}>
        {activities.map((activity: any) => (
          <div className="hero-banner-conteudo">
            <img
            //  src='../../../assets/categoryImages/culture.jpg'
              src={`../../../assets/categoryImages/${activity.category}.jpg`}
              alt={activity.title}
            />
          </div>
        ))}
      </Slide>
    </div> 
  
            <div className='hero-banner-conteudo'>
            <img 
                 src={`../../../assets/categoryImages/${activity.category}.jpg`}
                alt="fotos" className="hero-banner-image" />
            </div>
  
  */

