import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import routes from "../router";
import LoginForm from "./LoginForm";


function App() {
  return (
      <Router>
        <Routes>
          <Route path={routes.login.path} element={<LoginForm />} />
        </Routes>
      </Router>
  );
}

export default App;
