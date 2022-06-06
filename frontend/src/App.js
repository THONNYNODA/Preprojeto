import React from "react";
import { Provider } from "react-redux";
import store from './store'
import MainRoutes from "./routes";


function App() {
  return (
    <Provider store={store}>
      <MainRoutes />      
    </Provider>
  );
}

export default App;
