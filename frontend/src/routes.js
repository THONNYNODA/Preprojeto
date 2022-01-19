import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cadastro from "./layout/Cadastro";
import Dashbord from "./layout/Dashbord";
import Login from "./layout/Login";
import Vagas from "./layout/Vagas";
import Candidatos from "./layout/Candidatos";

//   const PrivateRouter = ({ component: Component, ...rest }) => (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated() ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to={{ pathname: "/", state: { form: props.location } }} />
//         )
//       }
//     />
//   );

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/vagas" element={<Vagas />} />
        <Route path="/candidatos" element={<Candidatos/>} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
