import React, { useState, useEffect, useContext } from "react";
import $ from 'jquery'
import ShareData, { OrderContext } from "../ShareData/ShareData";

export default function HistoryTime({ service, tableNo, createDate, closeDate }) {
  let { closeService } = useContext(OrderContext);
  const specificTime = new Date(createDate);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    if (closeDate) {
      setCurrentTime(new Date(closeDate));
    } else {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
       console.log("closeDate", closeDate)
       console.log("createDate ", createDate)
      return () => {
        clearInterval(timer);
      };
    }
  }, [closeDate]);

  const remainingTimeInSeconds = Math.floor((currentTime.getTime() - specificTime.getTime()) / 1000);
  const absoluteRemainingTime = Math.abs(remainingTimeInSeconds);

  const remainingMinutes = Math.floor(absoluteRemainingTime / 60) % 60;
  const remainingSeconds = absoluteRemainingTime % 60;
  const remainingHours = Math.floor(absoluteRemainingTime / 3600);

  const handelClick = (e1, e2) => {
    closeService(e1, e2);
  }



  return (
    <>
      <td className="">
<div className={ (remainingMinutes  <= (3 ) && remainingHours===0) ? `bg-success text-white d-none d-lg-block` : (remainingMinutes  <= (7)  && remainingHours===0)? `bg-warning text-dark d-none d-lg-block` :  (remainingMinutes  > (7)  || remainingHours > 0)? `bg-danger text-white d-none d-lg-block` : "bg-primary d-none d-lg-block"} style={{borderRadius:"10px"}}>
  <p className="stopwatch-time fs-2 mt-4">
  {closeDate? remainingHours.toString().padStart(2, "0") : (remainingHours).toString().padStart(2 ,"0")}:{remainingMinutes.toString().padStart(2, "0")}:
  {remainingSeconds.toString().padStart(2, "0")}
 
 </p>
</div>
</td>
     
      {/* <td>
        <button className="btn btn-danger my-4 px-3 py-2" onClick={()=>{handelClick(tableNo , service)}}>
              Done
          </button>
      </td>
   */}
  <div className="  d-block  d-lg-none  py-0">
        
        <div className={ (remainingMinutes <= (3 )) ? `bg-success text-white ` : (remainingMinutes <= (7)   && remainingHours===0)? `bg-warning text-dark ` :  (remainingMinutes >  (7) || remainingHours > 0)? `bg-danger text-white ` : "bg-primary "  } style={{borderRadius:"10px" }}>
          <p className="stopwatch-time fs-2 mt-4  ">
          {closeDate? remainingHours.toString().padStart(2, "0") : (remainingHours).toString().padStart(2 ,"0")}:{remainingMinutes.toString().padStart(2, "0")}:
          {remainingSeconds.toString().padStart(2, "0")}
         </p>
        </div>
        </div>
    </>
  );
};
