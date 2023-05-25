import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../../styles/slide.css";
import { Activity } from "../../../../app/models/activity";
import 'react-slideshow-image/dist/styles.css';


const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

interface Props {
  activities: Activity[];
}

function Slideshow({ activities }: Props) {
  return (
    <div className="containerSlide">
      <Slide {...proprietes}>
        {activities.map((activity: any) => (
          <div className="each-slide">
            <div>
              <img
                // src='../../../assets/categoryImages/culture.jpg'
                src={`../../../assets/categoryImages/${activity.category}.jpg`}
                alt={activity.title}
              />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Slideshow;
