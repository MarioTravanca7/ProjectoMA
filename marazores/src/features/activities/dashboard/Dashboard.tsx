import { Grid, GridColumn } from "semantic-ui-react";
import AtividadeList from "../components/AtividadeList";
import { Activity } from "../../../app/models/activity";
import SlideImage from "../components/SlideImage";
import NavBar from "../../../app/layout/NavBar";

interface Props {
  activities: Activity[];
}

function Dashboard({ activities }: Props) {
  return (
    <>
    <NavBar />   
      <SlideImage activities={activities} />
      <Grid centered style={{ marginTop: '20px' }}>
        <GridColumn width="10">
          <AtividadeList activities={activities} />
        </GridColumn>
      </Grid>
    </>
  );
}

export default Dashboard;
