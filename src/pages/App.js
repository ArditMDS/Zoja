import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import routes from "../router";
import LoginForm from "./LoginForm";
import AuthProvider from "./AuthContext";
import PageWrapper from "./index";
import RegisterForm from "./RegisterForm";
import Homepage from "./Homepage";
import AllArticles from "./AllArticles";


function App() {
  return (
      <AuthProvider>
          <Router>
              <PageWrapper>
                    <Routes>
                        <Route path={routes.login.path} element={<LoginForm />} />
                        <Route path={routes.register.path} element={<RegisterForm/>}/>
                        <Route path={routes.homepage.path} element={<Homepage/>}/>
                        <Route path={routes.articles.path} element={<AllArticles/>}/>
                    </Routes>
              </PageWrapper>
          </Router>
      </AuthProvider>
  );
}

export default App;
