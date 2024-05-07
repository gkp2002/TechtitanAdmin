/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useReducer, useState } from "react";
import { Delete } from "./Delete";

function TotalData(props) {
  const [value, fetchUpdate] = useReducer((x) => x + 1, 0);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props);
    fetchUpdate();
  }, [props]);

  const delet = async (id) => {
    const data = await Delete(id);
    if (data) {
      // window.location.reload()
    }
  };

  return (
    <div>
      <div className="text-black py-1 relative">
        <div className="grid md:grid-cols-8 font-medium items-center pb-2 border-b-2 ">
          <div className=" px-2 py-1 flex md:justify-center md:items-center text-lg text-center  h-full relative overflow-ellipsis">
            <tr>
              <td>
                <span className="md:hidden text-xl font-bold mx-4">Sr : </span>
              </td>
              <td>{data.Sr}</td>
            </tr>
          </div>
          <div className=" px-2 py-1 flex md:justify-center md:items-center text-lg text-left   h-full relative overflow-ellipsis  text-orange-500 ">
            <tr>
              <td>
                
                <span className="md:hidden text-xl font-bold mx-4">Id: </span>
              </td>
              <td> {data.id}</td>
            </tr>
          </div>
          <div className=" px-2 py-1 flex md:justify-center md:items-center text-lg text-left  h-full relative overflow-ellipsis  ">
            <tr>
              <td>
                <span className="md:hidden text-xl font-bold mx-4">Name: </span>
              </td>
              <td>{data.Name}</td>
            </tr>
          </div>
          <div className=" px-2 py-1 flex md:justify-center md:items-center text-lg text-left   h-full relative overflow-ellipsis  ">
            <tr>
              <td>
                <span className="md:hidden text-xl font-bold mx-4">
                  Company:
                </span>
              </td>
              <td>{data.Company}</td>
            </tr>
          </div>
          <div className=" px-2 py-1 flex md:justify-center md:items-center text-lg text-left    h-full relative overflow-ellipsis  ">
            <tr>
              <td>
                <span className="md:hidden text-xl font-bold mx-4">
                  Email:
                </span>
              </td>
              <td>{data.Email}</td>
            </tr>
          </div>
          <div className=" px-2 py-1 flex md:justify-center md:items-center text-lg text-left  h-full relative overflow-ellipsis  ">
            <tr>
              <td>
                <span className="md:hidden text-xl font-bold mx-4">
                  Phone:
                </span>
              </td>
              <td>{data.Phone}</td>
            </tr>
          </div>
          <div className=" px-2 py-1 flex md:justify-center md:items-center text-lg text-left  h-full relative overflow-ellipsis  ">
            <tr>
              <td>
                <span className="md:hidden text-xl whitespace-nowrap font-bold mx-4">
                  Project Detail:
                </span>
              </td>
              <td>{data.Address}</td>
            </tr>
          </div>
          <div
            onClick={() => {
              let text = "Are You sure";
              if (confirm(text) == true) {
                delet(data.id);
              }
            }}
            className=" cursor-pointer  px-7 py-3 flex  bg-blue-800 text-xl text-white  justify-center rounded-3xl"
          >
            <button>Delete</button>
          </div>
        </div>
        <hr className="border-2 border-black " />
      </div>
    </div>
  );
}

export default TotalData;
