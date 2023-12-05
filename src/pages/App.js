import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import routes from "../router";
import LoginForm from "./LoginForm";
import AuthProvider from "./AuthContext";
import PageWrapper from "./index";


function App() {
  return (
      <AuthProvider>
          <Router>
              <PageWrapper>
                    <Routes>
                      <Route path={routes.login.path} element={<LoginForm />} />
                    </Routes>
              </PageWrapper>
          </Router>
      </AuthProvider>
  );
}

export default App;
