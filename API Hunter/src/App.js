import { AuthContextProvider } from "./Context/AuthContext";
import AllRoutes from "./Routes/AllRoutes";
import Dashboard from "./Routes/Dashboard";
import Home from "./Routes/Home";
import "./styles.css";

export default function App() {
  return (
    <div className="App">

     

      {/* <Dashboard /> */}
      <AllRoutes />

      
    </div>
  );
}

// authentication: reqres.in
//
