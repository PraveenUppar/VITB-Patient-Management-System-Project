import Layout from "./Layouts/Layout";
import { Routes, Route } from "react-router";
import { UserContextProvider } from "./UserContext";
import Facilities from "./Pages/Facilities/Facilities";
import Patients from "./Pages/Patients/Patients";
import Tests from "./Pages/Test/Test";
import Results from "./Pages/Results/Results";
import Community from "./Pages/Community/Community";
import NoticeBoard from "./Pages/NoticeBoard/Notice";
import Notification from "./Pages/Notification/Notification";
import Profile from "./Pages/Profile/Profile";
import FacilityDetails from "./Pages/Facilities/FacilitiesDetails";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/facilities" element={<Facilities></Facilities>}></Route>
          <Route path="/facility/:facilityName" element={<FacilityDetails />} />

          <Route path="/patients" element={<Patients></Patients>}></Route>
          <Route path="/tests" element={<Tests></Tests>}></Route>
          <Route path="/results" element={<Results></Results>}></Route>
          <Route path="/community" element={<Community></Community>}></Route>
          <Route
            path="/noticeboard"
            element={<NoticeBoard></NoticeBoard>}
          ></Route>
          <Route
            path="/notifications"
            element={<Notification></Notification>}
          ></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
