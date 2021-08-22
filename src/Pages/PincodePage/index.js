import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchPostOffice } from "../../redux/PincodeReducer";

export default () => {
  //for form only:
  const [pincode, setPincode] = useState(500001);

  const postOffice = useSelector((state) => state.postoffice.value);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPincode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPostOffice(e.target.pincode.value));
  };

  return (
    <div>
      <div className="font-sans space-y-10 flex flex-col items-center rounded-md bg-indigo-400 w-96 mx-auto p-5 m-5">
        <form
          className="flex flex-col min-w-full"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            className="rounded-t-md outline-none p-2"
            name="pincode"
            type="text"
            value={pincode}
            pattern="[0-9]{6}"
            onChange={(e) => handleChange(e)}
          />
          <button
            className="p-2 bg-indigo-600 text-white rounded-b-md"
            type="submit"
          >
            Search!
          </button>
        </form>
        <div className="text-white">{postOffice}</div>
        <Link to="/" className="w-full">
          <div className="p-2 w-full  rounded-md bg-indigo-600 hover:bg-indigo-700 text-center text-white">
            Back
          </div>
        </Link>
      </div>
    </div>
  );
};
