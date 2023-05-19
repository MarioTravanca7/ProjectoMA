import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
// import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";
import ActivityForm from "../form/ActivityForm";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
  closeForm: () => void;
  editMode: boolean;
  createOrEdit: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
}

export default function ActivityDashboard({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
  openForm,
  closeForm,
  editMode,
  createOrEdit,
  deleteActivity,
}: Props) {
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
        <ActivityList
          activities={activities}
          selectActivity={selectActivity}
          deleteActivity={deleteActivity}
        />
      </Grid.Column>

      <Grid.Column width="5">
        {selectedActivity && !editMode && (
          <ActivityDetails
            activity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
            openForm={openForm}
          />
        )}
        {editMode && (
          <ActivityForm
            closeForm={closeForm}
            activity={selectedActivity}
            createOrEdit={createOrEdit}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
