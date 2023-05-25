import { Grid } from "semantic-ui-react";
import "../../styles/slideImage.css";
import AtividadeCard from "./AtividadeCard";
import { useStore } from "../../../app/stores/store";

  

function AtividadeList() {
  const { activityStore } = useStore();

  const generateColumns = (): JSX.Element[] => {
  
    const columns: JSX.Element[] = [];
    for (let i = 0; i < activityStore.activitiesByTitle.length; i += 3) {

      const rowActivities = activityStore.activitiesByTitle.slice(i, i + 3);

      const rowColumns = rowActivities.map((activity) => (
        <Grid.Column key={activity.id}>
          <AtividadeCard activity={activity} />
        </Grid.Column>
      ));
      const row = <Grid.Row key={i} verticalAlign='bottom'>{rowColumns}</Grid.Row>;
      columns.push(row);
    }
    return columns;
  };

  return (
    <Grid columns={3} divided>
      {generateColumns()}
    </Grid>
  );
}

export default AtividadeList;
