import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import CreateProduct from "./pages/CreateProduct";
import Main from "./pages/Main";

const Router = () => {
  const routerData = [
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/product",
      element: <CreateProduct />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routerData.map((data) => (
          <Route key={data.path} path='/' element={<Layout />}>
            {<Route path={data.path} element={data.element} />}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
