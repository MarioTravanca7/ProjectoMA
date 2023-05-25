import { Button, Card, Icon, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity;
}



// function AtividadeCard({ activity }: Props) {
function AtividadeCard({ activity }: Props) {
  return (
    <Card color='grey'>
    <Image src='/assets/marAzores.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{activity.title}</Card.Header>
      <Card.Description>
        Consiste em ...asdasdadsad asdads asa asda dasd asdadsadasd asda dsad as
        <p>adsads</p>
        <p>adsads</p>
        <p>adsads</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='euro' />
        60
        <Button floated='right'>Info</Button>
      </a>
    </Card.Content>
  </Card>
  );
}

export default AtividadeCard;
{/* <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} /> */}
// import React from 'react';

// import 'react-slideshow-image/dist/styles.css';


// function AtividadeCard (){
//     return(
//         <div className='hero-banner-container'>
//             <div className='hero-banner-conteudo'>
//             <img 
//                 src='../../../assets/categoryImages/food.jpg'
//                 alt="fotos" className="hero-banner-image" />
//             </div>
//         </div>
//     );
// }

// export default AtividadeCard;

// src={`../../../assets/categoryImages/${activities[0].category}.jpg`}


      {/* <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>  */}