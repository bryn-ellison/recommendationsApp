import { NavLink } from "react-router-dom";

export const LandingRoute = () => {
  return (
    <>
      <h1>Login or sign up</h1>
      <NavLink key="Dashboard" to="/app">
        Login
      </NavLink>
    </>
  );
};
