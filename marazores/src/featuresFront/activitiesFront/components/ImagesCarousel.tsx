import { Activity } from "../../../app/models/activity";
// import Carousel from "react-bootstrap/Carousel";

interface Props {
  activities: Activity[];
}

function ImagesCarousel({ activities }: Props) {
  return (
    // <Carousel >
    //   {activities.map((activity: any) => (
    //     <Carousel.Item >
    //       <img
    //         className="d-block w-100"
    //         //   src="holder.js/800x400?text=First slide&bg=373940"
    //         src={`/assets/categoryImages/${activity.category}.jpg`}
    //         alt="First slide"
    //       />
    //       <Carousel.Caption>
    //         <h3>First slide label</h3>
    //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //   ))}
    // </Carousel>
    <div>
      <div className="ui vertical labeled icon menu">
        <a className="item">
          <i className="gamepad icon"></i>
          Actividades
        </a>
        <a className="item">
          <i className="video camera icon"></i>
          Equipa
        </a>
        <a className="item">
          <i className="video play icon"></i>
          Slide
        </a>
        <a className="item">
          <i className="video play icon"></i>
          Empresa
        </a>
      </div>
    </div>
  );
}

export default ImagesCarousel;
