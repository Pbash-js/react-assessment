import React from "react";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <div>
      <div class="bg-white">
        <Link to="/">
          <div className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white">
            back
          </div>
        </Link>
        {/*  Create a page with Tailwind CSS */}
        {/*  Take reference of UI: https://s3.envato.com/files/317254303/FabriXus%20Preview%20Images/11_FURNITURES%20LISTS.jpg */}
      </div>
    </div>
  );
};

export default CategoryPage;
