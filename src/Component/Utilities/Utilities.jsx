
import React, { useContext, useEffect, useState } from 'react'
import StopWatch from '../StopWatch/StopWatch'
import { OrderContext } from '../ShareData/ShareData';
import { useTranslation } from 'react-i18next'
import tableIcn from '../../assets/dining-table.png'
import $ from 'jquery'
import moment from 'moment';

export default function Utilities() {

  let {t} = useTranslation();
  let {servList} = useContext(OrderContext);

  const [currentList, setCurrentList] = useState(servList);
  const [red, setRed] = useState([]);
  const [green, setGreen] = useState([]);
  const [yellow, setYellow] = useState([]);
  const [activeButton, setActiveButton] = useState('All');

  // const updateLists = () => {
  //   const redList = servList.filter((ele) => {
  //     const specificTime = new Date(ele.createDate);
  //     const currentTime = new Date();
  //     const timePassedInSeconds = Math.floor(
  //       (currentTime.getTime() - specificTime.getTime()) / 1000
  //     );
  //     //   const remainingTimeInSeconds = Math.floor((currentTime.getTime() - specificTime.getTime()) / 1000);
  //     const absoluteRemainingTime = Math.abs(timePassedInSeconds);

  //     const remainingMinutes = Math.floor(absoluteRemainingTime / 60) % 60;
  //     //   const remainingSeconds = (absoluteRemainingTime % 60);
  //     const remainingHours = Math.floor(absoluteRemainingTime / 3600) ;
  //     const timeThresholdInSeconds = 7; // Set your desired time threshold in seconds
  //     console.log("red remainingHours", remainingHours);
  //     return remainingMinutes > timeThresholdInSeconds || remainingHours > 0;
  //   });
  //   console.log("red", redList);
  //   const greenList = servList.filter((ele) => {
  //     const specificTime = new Date(ele.createDate);
  //     const currentTime = new Date();
  //     const timePassedInSeconds = Math.floor(
  //       (currentTime.getTime() - specificTime.getTime()) / 1000
  //     );
  //     //   const remainingTimeInSeconds = Math.floor((currentTime.getTime() - specificTime.getTime()) / 1000);
  //     const absoluteRemainingTime = Math.abs(timePassedInSeconds);

  //     const remainingMinutes = Math.floor(absoluteRemainingTime / 60) % 60;
  //     //   const remainingSeconds = (absoluteRemainingTime % 60);
  //     const remainingHours = Math.floor(absoluteRemainingTime / 3600) ;
  //     const timeThresholdInSeconds = 3; // Set your desired time threshold in seconds
  //     console.log("red remainingHours", remainingHours);

  //     return remainingMinutes <= timeThresholdInSeconds && remainingHours === 0;
  //   });
  //   console.log("green", greenList);

  //   const yellowList = servList.filter((ele) => {
  //     const specificTime = new Date(ele.createDate);
  //     const currentTime = new Date();
  //     const timePassedInSeconds = Math.floor(
  //       (currentTime.getTime() - specificTime.getTime()) / 1000
  //     );
  //     //   const remainingTimeInSeconds = Math.floor((currentTime.getTime() - specificTime.getTime()) / 1000);
  //     const absoluteRemainingTime = Math.abs(timePassedInSeconds);

  //     const remainingMinutes = Math.floor(absoluteRemainingTime / 60) % 60;
  //     //   const remainingSeconds = (absoluteRemainingTime % 60);
  //     const remainingHours = Math.floor(absoluteRemainingTime / 3600) ;
  //     const timeThresholdInSeconds = 7; // Set your desired time threshold in seconds
  //     console.log("red remainingHours", remainingHours);
  //     return (
  //       remainingMinutes > 3 && remainingMinutes <= 7 && remainingHours === 0
  //     );
  //   });

  //   setRed(redList);
  //   setGreen(greenList);
  //   setYellow(yellowList);
  // };
  const updateLists = () => {
    const redList = servList.filter((ele, index, array) => {
      const timeCount = Number(ele.timeCount.split(":")[1]);
      const hours = Number(ele.timeCount.split(":")[0]);
      console.log("timeCount", timeCount)
      if (isNaN(timeCount)) {
        console.log("The timeCount variable is not a number.");
        return false;
      }
      const timeThresholdInMinutes = 7; // Set your desired time threshold in minutes
      return timeCount > timeThresholdInMinutes || hours > 0;
    });

    const greenList = servList.filter((ele, index, array) => {
      const timeCount = Number(ele.timeCount.split(":")[1]);
      const hours = Number(ele.timeCount.split(":")[0]);
      console.log("timeCount", timeCount)
      if (isNaN(timeCount)) {
        console.log("The timeCount variable is not a number.");
        return false;
      }
      const timeThresholdInMinutes = 3; // Set your desired time threshold in minutes
      return timeCount <= timeThresholdInMinutes && hours ===0 ;
    });

    const yellowList = servList.filter((ele, index, array) => {
      const timeCount = Number(ele.timeCount.split(":")[1]);
      const hours = Number(ele.timeCount.split(":")[0]);
      console.log("timeCount", timeCount)
      if (isNaN(timeCount)) {
        console.log("The timeCount variable is not a number.");
        return false;
      }
      const timeThresholdInMinutes = 7; // Set your desired time threshold in minutes
      return timeCount > 3 && timeCount <= 7 &&hours ===0 ;
    });

    setRed(redList);
    setGreen(greenList);
    setYellow(yellowList);
  };
  useEffect(() => {
    updateLists();
    handleActiveButton();
  }, [servList]);
  const handleActiveButton = () => {
    if (activeButton === "All") {
      setCurrentList([...servList]);
    } else if (activeButton === "Yellow") {
      setCurrentList(yellow);
    } else if (activeButton === "Red") {
      setCurrentList(red);
    } else if (activeButton === "Green") {
      setCurrentList(green);
    }
  };

  const handleButtonClick = (list, buttonName) => {
    setCurrentList(list);
    setActiveButton(buttonName);
  };
  return (
    <>
      <div className="container-fluid pt-0 pt-lg-4">
        <div className="parent-header-btns d-flex justify-content-between position-sticky">
          <div className="header-h">
            <h1 className="d-none d-lg-block "> {t("Table_Calls")} </h1>
            <div className="d-block d-lg-none pt-3"></div>
          </div>
          <div className="button-group mt-5 pt-0 pt-lg-3 ">
            <button
              onClick={() => handleButtonClick(green, "Green")}
              className={
                activeButton === "Green"
                  ? "active btn btn-success mx-2 px-2"
                  : "btn btn-success mx-2 px-2"
              }
            >
              <h2>
                {t("Calling")} ({green.length})
              </h2>{" "}
            </button>
            <button
              onClick={() => handleButtonClick(yellow, "Yellow")}
              className={
                activeButton === "Yellow"
                  ? "active   btn btn-warning mx-2 px-2"
                  : "btn btn-warning mx-2 px-2"
              }
            >
              {" "}
              <h2>
                {t("Waiting")} ({yellow.length}){" "}
              </h2>{" "}
            </button>
            <button
              onClick={() => handleButtonClick(red, "Red")}
              className={
                activeButton === "Red"
                  ? "active btn btn-danger mx-2 px-2"
                  : "btn btn-danger mx-2 px-2"
              }
            >
              {" "}
              <h2>
                {t("Bored")} ({red.length})
              </h2>{" "}
            </button>
            <button
              onClick={() => handleButtonClick(servList, "All")}
              className={
                activeButton === "All"
                  ? "active btn bg-all mx-2 px-2"
                  : "btn btn-dark mx-2 px-2"
              }
            >
              {" "}
              <h2>
                {t("All")} ({servList.length})
              </h2>
            </button>
          </div>
        </div>
        <div className="row d-none d-lg-block">
          <div className="col-md-12">
            <div className="table-container">
              <table className="table  table-striped text-center">
                <thead>
                  <tr className="position-relative">
                    <th scope="col" className={activeButton === 'Red' ? 'bg-danger fs-4' : activeButton === "Green" ? 'bg-success fs-4' : activeButton === 'Yellow' ? "bg-warning fs-4" :""}>#</th>
                    <th className={activeButton === 'Red' ? 'bg-danger fs-4' : activeButton === "Green" ? 'bg-success fs-4' : activeButton === 'Yellow' ? "bg-warning fs-4" :""}>{t("Table_Number")}</th>
                    <th className={activeButton === 'Red' ? 'bg-danger fs-4' : activeButton === "Green" ? 'bg-success fs-4' : activeButton === 'Yellow' ? "bg-warning fs-4" :""}>{t("Service_Type")}</th>
                    <th className={activeButton === 'Red' ? 'bg-danger fs-4' : activeButton === "Green" ? 'bg-success fs-4' : activeButton === 'Yellow' ? "bg-warning fs-4" :""}>{t("Number_Of_Calling")}</th>
                    <th className={activeButton === 'Red' ? 'bg-danger fs-4' : activeButton === "Green" ? 'bg-success fs-4' : activeButton === 'Yellow' ? "bg-warning fs-4" :""}> {t("Date")} </th>
                    <th className={activeButton === 'Red' ? 'bg-danger fs-4' : activeButton === "Green" ? 'bg-success fs-4' : activeButton === 'Yellow' ? "bg-warning fs-4" :""}>{t("Time_Since_Ordering")}</th>
                    <th className={activeButton === 'Red' ? 'bg-danger fs-4' : activeButton === "Green" ? 'bg-success fs-4' : activeButton === 'Yellow' ? "bg-warning fs-4" :""}>{t("Status")}</th>
                  </tr>
                </thead>
                <tbody>
                  {currentList?.map((ele, index) => (
                    <tr key={index} className="">
                      <th scope="row">
                        <h3 className="py-4">#{index + 1}</h3>
                      </th>
                      <th>
                        <p className="fs-2 pt-3">{ele.tableNo}</p>
                      </th>
                      <th className="fs-4">
                        {ele?.service === 3 ? (
                          <div>
                            <p className="fa-solid fa-user-tie Waiter "></p>
                            <p className="Waiter">{t("Waiter")}</p>
                          </div>
                        ) : ele?.service === 2 ? (
                          <div>
                            <p className="fa-regular fa-money-bill-1 Cheque"></p>
                            <p className="Cheque"> {t("Cheque")} </p>
                          </div>
                        ) : ele?.service === 1 ? (
                          <div>
                            <p className="fa-solid fa-car Valet "></p>
                            <p className="Valet">{t("Valet")}</p>
                          </div>
                        ) : (
                          <div>
                            <p className="fa-solid fa-bell Services"></p>
                            <p className="Services">{t("Services")}</p>
                          </div>
                        )}
                      </th>
                      <th>
                        <h3 className="p-4">{ele.countNo}</h3>
                      </th>
                      <td>
                        <div className="p-2">
                          <h4 className="text-success ">
                            {ele.createDate.split("T")[1].split(".")[0]}
                          </h4>
                          <h4>{ele.createDate.split("T")[0]}</h4>
                        </div>
                      </td>
                      <StopWatch
                      timeCount={ele.timeCount}
                      tableNo={ele.tableNo}
                      service={ele.service}
                      createDate={ele.createDate}
                      closeDate={ele.closeDate}
                    ></StopWatch>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className=" d-block d-lg-none">
          {currentList?.map((ele, index) => {
            return (
              <>
                {" "}
                <div className="card my-3 text-center p-2 shadow" key={index}>
                  <div className="row">
                    <div className="col-8 d-flex justify-content-between">
                      <div
                        className="  d-flex justify-content-center    "
                        style={{ color: "#0A4DA6" }}
                      >
                        <div className=" p-1 border border-secondary px-3 border-1 rounded-1">
                          <div
                            className=" fs-1 fw-bold  px-2   rounded-1"
                            style={{ width: "3.8rem" }}
                          >
                            {ele.tableNo}
                          </div>
                          <p className="fs-2 pt-2 fw-bold d-flex justify-content-between">
                            <img
                              src={tableIcn}
                              className=""
                              style={{ width: "30px" }}
                              alt=""
                            />
                            <p
                              className="  fs-5 rounded rounded-1 px-2 countNo  text-white "
                              style={{ width: "1.5rem" }}
                            >
                              {" "}
                              {ele.countNo}
                            </p>
                          </p>
                        </div>
                      </div>
                      <div className=" pt-2">
                        {ele?.service === 3 ? (
                          <div className="d-flex icn-f">
                            <p className="fa-solid  fa-user-tie Waiter "></p>
                            <p className="Waiter">{t("Waiter")}</p>
                          </div>
                        ) : ele?.service === 2 ? (
                          <div className="d-flex icn-f">
                            <p className="fa-regular fa-money-bill-1 Cheque"></p>
                            <p className="Cheque"> {t("Cheque")} </p>
                          </div>
                        ) : ele?.service === 1 ? (
                          <div className="d-flex icn-f">
                            <p className="fa-solid fa-car Valet "></p>
                            <p className="Valet">{t("Valet")}</p>
                          </div>
                        ) : (
                          <div className="d-flex icn-f">
                            <p className="fa-solid fa-bell Services"></p>
                            <p className="Services">{t("Services")}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-4 pt-2">
                      <p className="text-success fs-3 ">
                        {ele.createDate.split("T")[1].split(".")[0]}
                      </p>
                      <p>{ele.createDate.split("T")[0]}</p>
                    </div>

                    <StopWatch
                      timeCount={ele.timeCount}
                      tableNo={ele.tableNo}
                      service={ele.service}
                      createDate={ele.createDate}
                      closeDate={ele.closeDate}
                    ></StopWatch>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
