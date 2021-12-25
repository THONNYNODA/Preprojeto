import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
  
import Cadastro from './layout/Cadastro';
import Login from './layout/Login'

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
          return(
            <Router>
              <Routes>           
                    <Route path="/" element={ <Login/>} />                             
                    <Route path="/cadastro" element={ <Cadastro/>} />                             
              </Routes>
            </Router>
          )
      }

export default MainRoutes;