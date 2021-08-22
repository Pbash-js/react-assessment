import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-1 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to dive in?</span>
                  <span className="block">Let's get started</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-indigo-200">
                  1. Create routing for :
                </p>
                <div className="mt-4 text-lg leading-6 text-indigo-200">
                  <Link to="/">
                    <div className="p-2 bg-indigo-600 hover:bg-indigo-700">
                      /
                    </div>
                  </Link>
                  <Link to="/account">
                    <div className="p-2 bg-indigo-600 hover:bg-indigo-700">
                      /account
                    </div>
                  </Link>
                  <Link to="/pincode">
                    <div className="p-2 bg-indigo-600 hover:bg-indigo-700">
                      /pincode
                    </div>
                  </Link>
                  <Link to="/category">
                    <div className="p-2 bg-indigo-600 hover:bg-indigo-700">
                      /category
                    </div>
                  </Link>
                  <Link to="/product/:id">
                    <div className="p-2 bg-indigo-600 hover:bg-indigo-700">
                      /product/{"product_id"}
                    </div>
                  </Link>
                </div>
                <p className="mt-4 text-lg leading-6 text-indigo-200">
                  2. Complete the tasks for the respective pages
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
