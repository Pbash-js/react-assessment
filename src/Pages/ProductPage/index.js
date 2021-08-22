import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch,
} from "react-router-dom";

const Product = ({ pid }) => {
  return (
    <div className="w-full p-2 rounded-mx-auto text-white bg-indigo-500 mt-10 h-80 flex justify-center items-center rounded-md text-lg font-semibold">
      Product {pid}
    </div>
  );
};

const ProductPage = () => {
  const { path, url } = useRouteMatch();

  return (
    <div className="font-sans  text-white">
      <div className="container w-96 mx-auto flex flex-col gap-3 mt-5">
        <Link to={`${path}/1`}>
          <div className="w-full p-2 rounded-mx-auto bg-indigo-600 hover:bg-indigo-700">
            Product 1
          </div>
        </Link>
        <Link to={`${path}/2`}>
          <div className="w-full p-2 rounded-mx-auto bg-indigo-600 hover:bg-indigo-700">
            Product 2
          </div>
        </Link>
        <Link to={`${path}/3`}>
          <div className="w-full p-2 rounded-mx-auto bg-indigo-600 hover:bg-indigo-700">
            Product 3
          </div>
        </Link>

        <Link to="/">
          <div className="p-2 bg-indigo-600 hover:bg-indigo-700">back</div>
        </Link>
        <>
          <Switch>
            <Route path={`${path}/1`}>
              <Product pid={1} />
            </Route>
            <Route path={`${path}/2`}>
              <Product pid={2} />
            </Route>
            <Route path={`${path}/3`}>
              <Product pid={3} />
            </Route>
          </Switch>
        </>
      </div>
    </div>
  );
};

export default ProductPage;
