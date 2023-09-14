import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import AddEmployeeComponent from "./components/AddEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            {/* When we hit a specified url defined in a path, a particular component will be rendered */}
            <Route path="/" Component={ListEmployeeComponent}></Route>
            <Route path="/employees" Component={ListEmployeeComponent}></Route>
            <Route
              path="/add-employee"
              Component={AddEmployeeComponent}
            ></Route>
            <Route
              path="/edit-employees/:id"
              Component={AddEmployeeComponent}
            ></Route>
          </Routes>
        </div>

        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
