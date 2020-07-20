import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
// import Header from './components/Header';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Appointments from './pages/Appointments/Appointments';
import Doctors from './pages/Doctors/Doctors';
import Medications from './pages/Medications/Medications';
import './App.css';
//import Search from './pages/Search/Search';
import AddMed from './pages/AddMed/AddMed';
import AddDoc from './pages/AddDoc/AddDoc';
import AddAppt from './pages/AddAppt/AddAppt';
import API from "./utils/API";

function App() {
	const [loggedin, setloggedin] = useState(false);
	
	useEffect(() => {
		API.getLogin()
			.then(_ => setloggedin(true))
			.catch(_ => setloggedin(false));
	}, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={["/", "/login"]} component={Login} />
					{/* {loggedin ? <div> */}
          <Route exact path="/home" component={Home} />
          <Route exact path="/appointments" component={Appointments} />
          <Route exact path="/doctors" component={Doctors} />
          <Route exact path="/medications" component={Medications} />
          <Route exact path="/signup" component={SignUp} />
          {/* <Route exact path="/searchmed" component={Search} /> */}
          <Route exact path="/addmed" component={AddMed} />
          <Route exact path="/adddoc" component={AddDoc} />
          <Route exact path="/addappt" component={AddAppt} />
					{/* </div> : <Redirect to="/login" />} */}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
