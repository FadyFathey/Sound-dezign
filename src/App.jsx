import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./context/AuthContext";
const Header = lazy(() => import("./components/header/Header"));
const Topics = lazy(() => import("./components/topics/Topics"));
const Info = lazy(() => import("./components/info/Info"));
const Blog = lazy(() => import("./components/blog/Blog"));
const Testimonials = lazy(() =>
  import("./components/testimonials/Testimonials")
);
const Footer = lazy(() => import("./components/footer/Footer"));
const AllBlogs = lazy(() => import("./components/blog/AllBlogs"));
const Login = lazy(() => import("./components/login/Login"));
const SignUp = lazy(() => import("./components/signUp/SignUp"));
const ForgotPassword = lazy(() =>
  import("./components/forgotPassword/ForgotPassword")
);
const UpdateProfile = lazy(() =>
  import("./components/updateProfile/UpdateProfile")
);
const DashBoard = lazy(() => import("./components/dashBoard/DashBoard"));
const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Home Route (Root Path '/') */}
            <Route
              path="/"
              element={
                <div>
                  <Header />
                  <Topics />
                  <Info />
                  <Blog />
                  <Testimonials />
                  <Footer />
                </div>
              }
            />

            {/* Route for '/allBlogs' */}
            <Route path="/allBlogs" element={<AllBlogs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/dash-board" element={<DashBoard />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
