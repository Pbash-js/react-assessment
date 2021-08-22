import React from "react";
import "./AccountPage.css";

const AccountPage = () => {
  return (
    <div className="bg-gray-100 w-screen min-h-screen font-sans px-6">
      <header className="text-lg pt-10 font-black  text-center">
        Edit Profile
      </header>
      <div className="photo-container pt-5 flex justify-center items-center">
        <div className="photo  flex justify-center items-center bg-black h-32 w-32 rounded-full relative">
          <img src="" alt="" />
          {/* svg for image */}
          <div className="add-image absolute w-8 h-8 bg-black border-4 z-10 border-white rounded-full bottom-0 right-0 flex justify-center items-center text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 16 16"
            >
              <g fill="white">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z" />
                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71l-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <h3 className=" font-bold pt-10">User Information</h3>
      <form className="mt-4 grid grid-cols-2 grid-rows-3 gap-4">
        <div>
          <h6 className="text-xs font-bold">First Name</h6>

          <input
            type="text"
            name="firstname"
            className="bg-transparent outline-none border-b-1 border-gray-400 w-full"
            id=""
          />
        </div>
        <div>
          <h6 className="text-xs font-bold">Last Name</h6>
          <input
            type="text"
            name="lastname"
            className="bg-transparent outline-none border-b-1 border-gray-400 w-full"
            id=""
          />
        </div>
        <div className="col-span-2">
          <h6 className="text-xs font-bold">Email Address</h6>
          <input
            type="text"
            name="lastname"
            className="bg-transparent outline-none border-b-1 border-gray-400 w-full"
            id=""
          />
        </div>
        <div>
          <h6 className="text-xs font-bold">Gender</h6>

          <input
            type="text"
            name="gender"
            className="bg-transparent outline-none border-b-1 border-gray-400 w-full"
            id=""
          />
        </div>
        <div>
          <h6 className="text-xs font-bold">Phone</h6>
          <input
            type="tel"
            name="phone"
            className="bg-transparent outline-none border-b-1 border-gray-400 w-full"
            id=""
          />
        </div>
      </form>
      <div className="flex justify-between mt-5 items-end">
        <h3 className=" font-bold ">Address</h3>
        <button className="text-xxs font-bold text-gray-500">
          NEW ADDRESS
        </button>
      </div>

      <div className="flex flex-col mt-2">
        <AddressItem id={1} />
        <AddressItem id={2} />
      </div>
      <footer className="w-full fixed left-0 bottom-0 px-4 pb-7">
        <button className="w-full bg-black font-bold py-3 text-white rounded-lg">
          Save
        </button>
      </footer>
    </div>
  );
};

export const AddressItem = ({ id }) => {
  return (
    <>
      <label
        htmlFor={`address-${id}`}
        className="flex justify-between items-center border-b-1 border-gray-400 py-2"
      >
        <div className="address">
          <h3 className="text-sm font-bold">Charles A.</h3>
          <p className="text-xxs mt-2 font-black text-gray-500">
            31028, Brauddaus Avenue Saint Joseph <br /> California
          </p>
        </div>
        <div className="button-container relative">
          <div className="w-4 h-4 rounded-full bg-white border-2 border-black"></div>
          <input
            type="radio"
            name="address-1"
            id={`address-${id}`}
            className="hidden radio-button"
          />
          <div className="w-2 h-2 rounded-full  absolute top-1/4 left-1/4 radio-checked"></div>
        </div>
      </label>
    </>
  );
};

export default AccountPage;
