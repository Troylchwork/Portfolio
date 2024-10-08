import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import ROUTES from "./constants/routes";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<Layout />}>
          {ROUTES.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense>
                  <Component />
                </Suspense>
              }
            />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
}
