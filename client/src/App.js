
import './App.css';
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { BrowserRouter, Redirect, Route, Switch,Routes } from "react-router-dom";
import Home from './pages/home/Home';
import { useSelector } from "react-redux";
import NavbarAnalyse from './pages/analyse/navbarAnalyse/NavbarAnalyse';
import CreateProject from './components/UI/Forms/create-project/CreateProject';
import CreeProjet from './pages/creeProjet/CreeProjet';
import SideBar from "./components/sideBar/SideBar"
import ListProject from "./pages/list/ListProject";
import CreeTask from './pages/creeTask/CreeTask';
import ListTasks from './pages/list/ListTasks';


function App() {

  const { currentUser } = useSelector((state) => state.user);
console.log(currentUser);
  return (
    <div className="App">
     <BrowserRouter>
     {!currentUser  ? (
      <Navbar />
     ):(
      <NavbarAnalyse/>

    
     )}
    
      <Routes>
      <Route
         path="/"
        element={<Home />}
          />
          <Route
           path="signin"
            element={ <Login />}
          />
           <Route
         path="signup"
          element={<SignUp />}
          /> 
            {/* <Route
            path="analyse"
            element={<NavbarAnalyse />}
             /> */}
             <Route
             path="create-project"
             element={<CreeProjet/>}
             />
             <Route
             path="list"
             element={<ListProject/>}
             />
             <Route
             path="create-task"
             element={<CreeTask/>}
             />
             <Route
             path="list-task"
             element={<ListTasks/>}
             />
             {/* <Route
            //  path="analyse"
              element={<SideBar/>}
             /> */}
             
          
      </Routes>
     </BrowserRouter>
    </div>
    
  );
}

export default App;
