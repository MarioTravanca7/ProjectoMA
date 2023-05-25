import { Grid } from "semantic-ui-react";
import ActivityDetails from "../details/ActivityDetails";
import ActivityList from "./ActivityList";
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ActivityDashboard() {

  const {activityStore} = useStore();
  const {selectedActivity, editMode} = activityStore;

  return (
    <Grid>
      <Grid.Column width="2">
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
      </Grid.Column> 

      <Grid.Column width="9">
        <ActivityList />
      </Grid.Column>

      <Grid.Column width="5">
        {selectedActivity && !editMode && 
          <ActivityDetails/>
        }
        {editMode && 
          <ActivityForm />
        }
      </Grid.Column>
    </Grid>
  );
}
)