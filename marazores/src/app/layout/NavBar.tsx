import { Button, Container, Menu } from "semantic-ui-react";
import imageLogo from "../../assets/marAzores.png";
import "./styles.css";

export default function NavBar() {
  
  return (
    <Menu
      secondary
      inverted
      fixed="top"
      style={{ marginTop: 0, marginBottom: 0, height: "60px" }}
    >
      <Container >
        <Menu.Item>
          <img
            src={"/assets/marAzores.png"}
            alt="logo"
            style={{
              // marginTop: "20px",
              width: "80px",
              height: "60px",
              // borderRadius: 10000/ 2
            }}
          />
        </Menu.Item>
        
        <Menu.Item style={{ color: "black"}} name="Sobre Nós"/>
        <Menu.Item style={{ color: "black" }} name="Actividades" />
        <Menu.Item style={{ color: "black" }} name="Equipa" />
        <Menu.Item style={{ color: "black" }} name="Contactos" />
      </Container>
    </Menu>
  )
}


{
  /* <Button onClick={openForm} positive content='Create Activity' /> 
  
  
  <Image 
  source={{
    uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
  }} 
  style={{width: 400, height: 400, borderRadius: 400/ 2}} 
/>
  
  
  */
}
