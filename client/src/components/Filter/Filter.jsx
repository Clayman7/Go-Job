import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getService } from "../../redux/actions/actions";

function Filter () {
    const jobs = useSelector((state) => state.job)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getService())
    }, [dispatch])

    function handleClick(e){
        e.preventDefault(e);
        dispatch(getService())
    }
    return(
        <div>
            <select>
            <option disabled selected value='job'>Areas de trabajos</option>
                {
                jobs.map((j) => {
                    <option key={j.id}>{j.name}</option>
                })}
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getJobs,
  filterByJobs,
  orderByName,
  getUsers,
} from "../../redux/actions/actions";

function Filter() {
  const jobs = useSelector((state) => state.jobs);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    check: "default",
  });
  const [state_2, setState_2] = useState({
    check_2: "default_2",
  });
  let { check } = state;
  let { check_2 } = state_2;

  useEffect(() => {
    dispatch(getJobs());
    dispatch(orderByName(state.check));
    dispatch(filterByJobs(state_2.check_2));
  }, [state, state_2]);

  const handleOrder = (e) => {
    let { name, value } = e.target;
    setState({ [name]: value });
  };

  const handleFilter = async (e) => {
    let { name, value } = e.target;
    console.log(value);
    setState_2({ [name]: value });
  };

  return (
    <div className="grid grid-cols-4">
      <div className=" w-40 h-20 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div className="col-span-1">
          <label>Filtros:</label>
          <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
            <input
              id="test4"
              type="radio"
              name="check_2"
              value="default_2"
              checked={check_2 === "default_2"}
              onChange={handleFilter}
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="test4">Default</label>
          </div>
          </div>
          </div>

      <div className=" w-40 h-20 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div className="col-span-1">
          <span>By Job</span>
          {jobs?.map((j) => {
            return (
              <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input
                  id={j.id}
                  type="radio"
                  name="check_2"
                  value={j.name}
                  checked={check_2 === j.name}
                  onChange={handleFilter}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="test"
                >
                  {j.name}
                </label>
              </div>
            );
          })}
           </div>
        </div>

      
        <div className=" w-40 h-20 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div className="col-span-1">
        <label>Order:</label>
      
            <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
              <input
                id="test0"
                type="radio"
                name="check"
                value="default"
                checked={check === "default"}
                onChange={handleOrder}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="test0"
               
              >
                Default
              </label>
            </div>
            </div>
            </div>
           
      
        <div className=" w-40 h-20py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div className="col-span-1">
            <span>By Name</span>
            <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
              <input
                id="test"
                type="radio"
                name="check"
                value="A-Z"
                checked={check === "A-Z"}
                onChange={handleOrder}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="test"
              >
                A - Z
              </label>
            </div>
            
            <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
              <input
                id="test1"
                type="radio"
                name="check"
                value="Z-A"
                checked={check === "Z-A"}
                onChange={handleOrder}
              />
              <label
                htmlFor="test1"
              >
                Z - A
              </label>
              </div>
            </div>
          </div>
        </div>

  );
}

export default Filter;
