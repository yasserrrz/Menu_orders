import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './History.css';
import HistoryTime from '../HistoryTime/HistoryTime';
import { OrderContext } from '../ShareData/ShareData';
import tableIcn from '../../assets/dining-table.png'
import $ from 'jquery'


export default function History() {
  const { historyList, getHistory } = useContext(OrderContext);
  const { t } = useTranslation();
  const [currentList, setCurrentList] = useState([...historyList]);
  const [red, setRed] = useState([]);
  const [green, setGreen] = useState([]);
  const [yellow, setYellow] = useState([]);
  const [activeButton, setActiveButton] = useState('All');



  const updateLists = () => {
  
    const redList = historyList.filter((ele) => {
      const specificTime = new Date(ele.createDate);
      const currentTime = new Date(ele.closeDate);
      const remainingTimeInSeconds = Math.floor((currentTime.getTime() - specificTime.getTime()) / 1000);
      const absremainingTimeInSeconds = Math.abs(remainingTimeInSeconds);
      return absremainingTimeInSeconds > (8 * 60);
    });
    console.log("rrrrrrrrrrrr", redList)

    const greenList = historyList.filter((ele) => {
      const specificTime = new Date(ele.createDate);
      const currentTime = new Date(ele.closeDate);
      const remainingTimeInSeconds = Math.floor((currentTime.getTime() - specificTime.getTime()) / 1000);
      const absremainingTimeInSeconds = Math.abs(remainingTimeInSeconds);
      // console.log("absremainingTimeInSeconds",absremainingTimeInSeconds)

      return absremainingTimeInSeconds <= (4*60);
    });
    console.log( "gggggggg", greenList)
    const yellowList = historyList.filter((ele) => {
      const specificTime = new Date(ele.createDate);
      const currentTime = new Date(ele.closeDate);
      const remainingTimeInSeconds = Math.floor((currentTime.getTime() - specificTime.getTime()) / 1000);
      const absremainingTimeInSeconds = Math.abs(remainingTimeInSeconds);
      console.log("absremainingTimeInSeconds",absremainingTimeInSeconds)
      return (
        absremainingTimeInSeconds >( 4 * 60) && absremainingTimeInSeconds <=(8 * 60)
      );
    });
    console.log("yyyyyyyy" ,yellowList)
    console.log(historyList)

    setRed([...redList]);
    setGreen([...greenList]);
    setYellow([...yellowList]);
  };

  useEffect(() => {
    updateLists();
    handleActiveButton();
  }, [historyList]);



  const handleActiveButton = () => {
    if (activeButton === 'All') {
      setCurrentList([...historyList]);
    } else if (activeButton === 'Yellow') {
      setCurrentList(yellow);
    } else if (activeButton === 'Red') {
      setCurrentList(red);
    } else if (activeButton === 'Green') {
      setCurrentList(green);
    }
    
  };
  
  


  const handleButtonClick = (list, buttonName) => {
    setCurrentList(list);
    setActiveButton(buttonName);
  };

  return (
    <>
      <div className="container-fluid pt-0 pt-lg-">
       <div className="parent-header-btns d-flex justify-content-between position-sticky">
        <div className="header-h">
        <h1 className="d-none d-lg-block "> {t("Table_Calls")} </h1>
      <div className="d-block d-lg-none pt-3">
      {/* <img
          src={tableIcn}
          className=""
          style={{ width: '75px' }}
          alt=""
        /> */}

      </div>
        </div>
        <div className="button-group mt-5 pt-0 pt-lg-3 ">
        <button onClick={() => handleButtonClick(green, 'Green')} className={activeButton === 'Green' ? 'active btn btn-success mx-2 px-2' : 'btn btn-success mx-2 px-2'}><h2>{t("Calling")} ({green.length})</h2> </button>
          <button onClick={() => handleButtonClick(yellow, 'Yellow')} className={activeButton === 'Yellow' ? 'active   btn btn-warning mx-2 px-2' : 'btn btn-warning mx-2 px-2'}> <h2>{t("Waiting")} ({yellow.length}) </h2> </button>
          <button onClick={() => handleButtonClick(red, 'Red')} className={activeButton === 'Red' ? 'active btn btn-danger mx-2 px-2' : 'btn btn-danger mx-2 px-2'}> <h2>{t("Bored")} ({red.length})</h2> </button>
          <button onClick={() => handleButtonClick(historyList, 'All')} className={activeButton === 'All' ? 'active btn bg-all mx-2 px-2' : 'btn btn-dark mx-2 px-2'}> <h2>{t("All")} ({historyList.length})</h2></button>
        </div>
       </div>
          <div className="row d-none d-lg-block">
            <div className="col-md-12">
              <div className="table-container">
                <table className="table table-hover table-striped text-center">
                  <thead>
                  <tr className="position-relative">
                  <th scope="col" className={activeButton === 'Red' ? 'bg-danger fs-4' : activeButton === "Green" ? 'bg-success fs-4' : activeButton === 'Yellow' ? "bg-warning fs-4" :""}>#</th>
                      <th className={activeButton === 'Red' ? 'bg-danger fs-4' : activeButton === "Green" ? 'bg-success fs-4' : activeButton === 'Yellow' ? "bg-warning fs-4" :""}>{t("Table_Number")}</th>
                      <th className={activeButton === 'Red' ? 'bg-danger fs-4' : activeButton === "Green" ? 'bg-success fs-4' : activeButton === 'Yellow' ? "bg-warning fs-4" :""}>{t("Service_Type")}</th>
                      <th className={activeButton === 'Red' ? 'bg-danger fs-4' : activeButton === "Green" ? 'bg-success fs-4' : activeButton === 'Yellow' ? "bg-warning fs-4" :""}>{t("Number_Of_Calling")}</th>
                      <th className={activeButton === 'Red' ? 'bg-danger fs-4' : activeButton === "Green" ? 'bg-success fs-4' : activeButton === 'Yellow' ? "bg-warning fs-4" :""}> {t("Date")} </th>
                      <th className={activeButton === 'Red' ? 'bg-danger fs-4' : activeButton === "Green" ? 'bg-success fs-4' : activeButton === 'Yellow' ? "bg-warning fs-4" :""}>{t("Time_Since_Ordering")}</th>
                    {/* <th className='fs-4'>{t("Status")}</th> */}
                  </tr>
                  </thead>
                  <tbody>
                    {currentList?.map((ele, index) => (
                      <tr key={index} className="">
                        <th scope="row">
                          <h3 className="py-4">#{index + 1}</h3>
                        </th>
                        <th>
                        <p className='fs-2 pt-3'>
                            {ele.tableNo}
                            </p>
                        </th>
                        <th className="fs-4">
                        {ele?.service === 3 ? (
                          <div>
                            <p className="fa-solid fa-user-tie Waiter "></p>
                            <p className='Waiter'>{t("Waiter")}</p>
                          </div>
                        ) : ele?.service === 2 ? (
                          <div>
                            <p className="fa-regular fa-money-bill-1 Cheque"></p>
                            <p className='Cheque'> {t("Cheque")} </p>
                          </div>
                        ) : ele?.service === 1 ? (
                          <div>
                            <p className="fa-solid fa-car Valet "></p>
                            <p className='Valet'>{t("Valet")}</p>
                          </div>
                        ) : (
                          <div>
                            <p className="fa-solid fa-bell Services"></p>
                            <p className='Services'>{t("Services")}</p>
                          </div>
                        )}
                        </th>
                        <th>
                        <h3 className="p-4">{ele.countNo}</h3>

                        </th>
                        <td>
                          <div className="p-2">
                            <h4 className='text-success '>{ele.createDate.split("T")[1].split(".")[0]}</h4>
                            <h4>{ele.createDate.split("T")[0]}</h4>
                          </div>
                        </td>
                        <HistoryTime
                          tableNo={ele.tableNo}
                          service={ele.service}
                          createDate={ele.createDate}
                          closeDate={ele.closeDate}
                        ></HistoryTime>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
         <div className=' d-block d-lg-none'>
         {currentList?.map((ele, index)=>{
         return<>  <div className="card my-3 text-center p-2 shadow" key={index}>
           <div className="row">
             <div className="col-8 d-flex justify-content-between">
                  <div className="  d-flex justify-content-center    " style={{color:"#0A4DA6" }}>
                    <div className=" p-1 border border-secondary px-3 border-1 rounded-1">
                    <div className=" fs-1 fw-bold  px-2   rounded-1"  style={{width:"3.8rem"}}>{ele.tableNo}</div> 
                <p className='fs-2 pt-2 fw-bold d-flex justify-content-between'  >
               <img src={tableIcn} className='' style={{width:"30px"}} alt="" /> 
               <p className="  fs-5 rounded rounded-1 px-2 countNo  text-white " style={{width:"1.5rem"}}> {ele.countNo}</p>
                 </p>
                    </div>
                </div>
                <div className=" pt-2">
                     
                {ele?.service === 3 ? (
                          <div className='d-flex icn-f'>
                            <p className="fa-solid fa-utensils Waiter "></p>
                            <p className='Waiter'>{t("Waiter")}</p>
                          </div>
                        ) : ele?.service === 2 ? (
                          <div className='d-flex icn-f'>
                            <p className="fa-regular fa-money-bill-1 Cheque"></p>
                            <p className='Cheque'> {t("Cheque")} </p>
                          </div>
                        ) : ele?.service === 1 ? (
                          <div className='d-flex icn-f'>
                            <p className="fa-solid fa-car Valet "></p>
                            <p className='Valet'>{t("Valet")}</p>
                          </div>
                        ) : (
                          <div className='d-flex icn-f'>
                            <p className="fa-solid fa-bell Services"></p>
                            <p className='Services'>{t("Services")}</p>
                          </div>
                        )}
                  </div>
                  </div>
                  <div className="col-4 pt-2">
                            <p className='text-success fs-3 '>{ele.createDate.split("T")[1].split(".")[0]} 
                            </p>
                            <p>{ele.createDate.split("T")[0]}</p>
                  </div>
                  
                  <HistoryTime
                      tableNo={ele.tableNo}
                      service={ele.service}
                      createDate={ele.createDate}
                      closeDate={ele.closeDate}
                    ></HistoryTime>
                 
           </div>
        </div>
        </>
        })}
         </div>
        </div>
      </>
    );
    
}
