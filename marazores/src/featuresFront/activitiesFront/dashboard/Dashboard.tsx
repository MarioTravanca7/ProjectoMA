import { Grid, GridColumn } from "semantic-ui-react";
import AtividadeList from "../components/AtividadeList";
import SlideImage from "../components/SlideImage";
import NavBar from "../../../app/layout/NavBar";

function Dashboard() {

  return (
    <>
    <NavBar />   
      <SlideImage />
      <Grid centered style={{ marginTop: '20px' }}>
        <GridColumn width="10">
          <AtividadeList/>
        </GridColumn>
      </Grid>
    </>
  );
}

export default Dashboard;
