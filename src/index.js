import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/styleVariables.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GamePage from "./containers/GamePage/GamePage";
import NewGamePage from "./containers/NewGamePage/NewGamePage";
import ResultsPage from "./containers/ResultsPage/ResultsPage";
import { Provider } from "react-redux";
import store from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewGamePage />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
  {
    path: "/results",
    element: <ResultsPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
