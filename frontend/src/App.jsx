import Layout from "./Layouts/Layout";
import { Routes, Route } from "react-router";
import { UserContextProvider } from "./UserContext";
import Facilities from "./Pages/Facilities/Facilities";
import Patients from "./Pages/Patients/Patients";
import Tests from "./Pages/Test/Test";
import Community from "./Pages/Community/Community";
import Profile from "./Pages/Profile/Profile";
import Home from "./Pages/Home/Home";
import FacilityDetails from "./Pages/Facilities/FacilitiesDetails";
import PatientDetails from "./Pages/Patients/PatientsDetails";
import TestDetails from "./Pages/Test/TestDetails";
import CommunityDetails from "./Pages/Community/CommunityDetails";
import Login from "./Pages/Login/LoginPage";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
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

          <Route path="/profile" element={<Profile></Profile>}></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
