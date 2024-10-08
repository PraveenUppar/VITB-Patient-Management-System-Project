import Layout from "./Layouts/Layout";
import { Routes, Route } from "react-router";
import { UserContextProvider } from "./UserContext";
import Facilities from "./Pages/Facilities/Facilities";
import Patients from "./Pages/Patients/Patients";
import Tests from "./Pages/Test/Test";
import Community from "./Pages/Community/Community";
import Emergency from "./Pages/Emergency/Emergency";
import Profile from "./Pages/Profile/Profile";
import FacilityDetails from "./Pages/Facilities/FacilitiesDetails";
import PatientDetails from "./Pages/Patients/PatientsDetails";
import TestDetails from "./Pages/Test/TestDetails";
import CommunityDetails from "./Pages/Community/CommunityDetails";
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/facilities" element={<Facilities></Facilities>}></Route>
          <Route path="/facility/:facilityName" element={<FacilityDetails />} />
          <Route path="/patients" element={<Patients></Patients>}></Route>
          <Route
            path="/patient/:patientName"
            element={<PatientDetails></PatientDetails>}
          />
          <Route path="/tests" element={<Tests></Tests>}></Route>
          <Route path="/test/:testName" element={<TestDetails></TestDetails>} />
          <Route path="/community" element={<Community></Community>}></Route>
          <Route
            path="/community/:communityName"
            element={<CommunityDetails></CommunityDetails>}
          />
          <Route path="/emergency" element={<Emergency></Emergency>}></Route>

          <Route path="/profile" element={<Profile></Profile>}></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
