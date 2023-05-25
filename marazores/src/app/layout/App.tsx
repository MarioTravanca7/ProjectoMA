import { useEffect } from "react";
// import { Activity } from "../models/activity";
// import NavBar from "./NavBar";
import 'semantic-ui-css/semantic.min.css'
// import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
// import Dashboard from "../../features/activities/dashboard/Dashboard";
import NavBarBE from "./NavBarBE";
import { Container } from "semantic-ui-react";
import LoadingComponent from "./LoadingComponent";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import Footer from "../../featuresFront/activitiesFront/components/Footer";
import ActivityDashboard from "../../featuresBackEnd/activitiesBack/dashboardBackEnd/ActivityDashboard";



function App() {
  const {activityStore} = useStore();
  
  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app...' />

  return (
    <>
      <NavBarBE/>
      {/* <NavBar />    */}
      {/* <Dashboard /> */}
      {/* <ImagesCarousel activities={activities} /> */}
      {/* <NavBarBE /> */}
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard />
      </Container>

      <Footer/>
    </>
  );
}

export default observer(App);