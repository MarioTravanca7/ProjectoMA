import { useEffect, useState } from "react";
import axios from "axios";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Dashboard from "../../features/activities/dashboard/Dashboard";
import Footer from "../../features/activities/components/Footer";
import NavBarBE from "./NavBarBE";
import { Container } from "semantic-ui-react";
import ActivityDashboard from "../../featuresBackEnd/activities/dashboardBackEnd/ActivityDashboard";
import { v4 as uuid } from 'uuid';


function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  
  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handleCancelSelect() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancelSelect();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleDeleteActivity(id: string) {
    setActivities([...activities.filter(x => x.id !== id)])
  }

  function handleCreateOrEditActivity(activity: Activity) {
    activity.id
      ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
      : setActivities([...activities, { ...activity, id: uuid() }]);
    setEditMode(false);
    setSelectedActivity(activity);
  }

  return (
    <>
      {/* <NavBarBE/> */}
      {/* <NavBar />    */}
      
      {/* <Dashboard activities={activities} /> */}
      {/* <ImagesCarousel activities={activities} /> */}

      <NavBarBE openForm={handleFormOpen}/>
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard 
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelect}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
          />
      </Container>

      <Footer/>
    </>
  );
}

export default App;

// return (
//  <HeroBanner activities={activities} />
//   <div>
//     <List>
//       {activities.map((activity: any) =>(
//         <List.Item key={activity.id}>
//           <strong>{activity.title}</strong>
//         </List.Item>
//       ))}
//     </List>
//   </div>
// );
