import React from "react";
import routes from './route/index'
import { HashRouter } from "react-router-dom";
import { useRoutes } from "react-router";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { GlobalStyle } from "./style";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from './store/index'

function RenderRoutes() {
  const element = useRoutes(routes);
  return element;
}
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <GlobalStyle></GlobalStyle>
          <RenderRoutes />
        </HashRouter>
      </PersistGate>
    </Provider>
  )
}
export default App;