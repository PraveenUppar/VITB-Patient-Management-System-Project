import Layout from "./Layouts/Layout";
import { Routes, Route } from "react-router";
import { UserContextProvider } from "./UserContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/"></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
