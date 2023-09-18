// import React, { useState, useEffect, useContext } from "react";
// import $ from 'jquery'
// import ShareData, { OrderContext } from "../ShareData/ShareData";
// import { useTranslation } from "react-i18next";

// export default function StopWatch({service ,tableNo , createDate , closeDate , id}) {
//   let {closeService} = useContext(OrderContext);
//   const specificTime = new Date(createDate);
//   const [currentTime, setCurrentTime] = useState(new Date());
//   // const [isButtonDisabled, setIsButtonDisabled] = useState(false);
//   let {t} = useTranslation();
 
//   useEffect(() => {
//     console.log("remainingHours", remainingHours)
// console.log("remainingMinutes" ,remainingMinutes)
// console.log("absoluteRemainingTime" , absoluteRemainingTime)
// console.log("remainingSeconds" ,remainingSeconds)
//     if(closeDate){
//       setCurrentTime(new Date(closeDate));
//     }else{

//       const timer = setInterval(() => {
//         setCurrentTime(new Date());
//       }, 1000);
         
//       return () => {
//         clearInterval(timer);
//       };
//     }


//   }, [ currentTime]);


  
//   const remainingTimeInSeconds = Math.floor((currentTime.getTime() - specificTime.getTime()) / 1000);
//   const absoluteRemainingTime = Math.abs(remainingTimeInSeconds);

//   const remainingMinutes = Math.floor(absoluteRemainingTime / 60) % 60;
//   const remainingSeconds = (absoluteRemainingTime % 60);
//   const remainingHours = Math.floor(absoluteRemainingTime / 3600) % 24;
//   // const remainingHours = Math.floor(absoluteRemainingTime / 3600) % 24;
 


// const handelClick = (e1 , e2)=>{

//    closeService(e1 , e2);

//   //  setIsButtonDisabled(true);
   
// }


//   return (
//     <> <td className="">

// <div className={ (absoluteRemainingTime  <= (3 *60 ) && remainingHours===0 )  ? `bg-success text-white d-none d-lg-block` : (absoluteRemainingTime  <= (7*60) && remainingHours===0 )? `bg-warning text-dark d-none d-lg-block` :  (absoluteRemainingTime  > (7*60)  || remainingHours > 0)? `bg-danger text-white d-none d-lg-block` : "bg-primary d-none d-lg-block"} style={{borderRadius:"10px"}}>
//         <p className="stopwatch-time fs-2 mt-4">
//         {closeDate? remainingHours.toString().padStart(2, "0") : (remainingHours).toString().padStart(2 ,"0")}:{remainingMinutes.toString().padStart(2, "0")}:
//         {remainingSeconds.toString().padStart(2, "0")}
       
//        </p>
//       </div>
//     </td>
     
//       <td>
//         <div  className="d-flex justify-content-center align-items-center p-0 pt-lg-4">
//         <button className="btn btn-success   px-4 py-2 d-none d-lg-block" onClick={()=>{handelClick(tableNo , service)}} >
//           {/* {isButtonDisabled ? <i className="fa fa-spinner fa-spin mx-4"></i> : "Done"}   */}
//           {t("Done")}
//           </button>
//         </div>
//       </td>
//       <div className=" col-8 d-block  d-lg-none  py-0">
        
//       <div className={ (remainingMinutes <= 3 && remainingHours===0 ) ? `bg-success text-white ` : (remainingMinutes <= 7   && remainingHours===0)? `bg-warning text-dark ` :  (remainingMinutes >  7 || remainingHours > 0)? `bg-danger text-white ` : "bg-primary "  } style={{borderRadius:"6px" }}>
//         <p className="stopwatch-time fs-2 mt-4  ">
//         {closeDate? remainingHours.toString().padStart(2, "0") : (remainingHours).toString().padStart(2 ,"0")}:{remainingMinutes.toString().padStart(2, "0")}:
//         {remainingSeconds.toString().padStart(2, "0")}
//        </p>
//       </div>
//       </div>
//       <div className="col-4 d-block  d-lg-none">
//       <button className="btn btn-success my-4 px-4 pb-1 pt-2"  onClick={()=>{handelClick(tableNo , service)}} >
//       {/* {isButtonDisabled ? <i className="fa fa-spinner fa-spin mx-3"></i> : "Done"}   */}
//       {t("Done")}
//           </button>
//       </div>
//     </>
//   );
// };

























import React, { useState, useEffect, useContext } from "react";
import $ from 'jquery'
import ShareData, { OrderContext } from "../ShareData/ShareData";
import { useTranslation } from "react-i18next";
import moment from "moment";

export default function StopWatch({ service, tableNo, createDate, closeDate, timeCount }) {
  let { closeService } = useContext(OrderContext);
  const timestamp = Date.parse(createDate);
  const specificTime = new Date(timestamp);
  const [currentTime, setCurrentTime] = useState(new Date());
  let { t } = useTranslation();
  const [days, setDays] = useState(0);
  const [remainingHours, setremainingHours] = useState(0);
  const [remainingMinutes, setremainingMinutes] = useState(0);
  const [remainingSeconds, setremainingSeconds] = useState(0);
  const [absoluteRemainingTime, setabsoluteRemainingTime] = useState(0);
  let [loading , setloading] = useState(true);
  

  // const getMyTTime  = () => {
    // const time = Math.floor((Date.parse(createDate) - new Date()) / 1000);
    // setabsoluteRemainingTime(Math.abs(time))
    // setDays(Math.floor(absoluteRemainingTime / ( 60 * 60 * 24)));
    // setremainingHours((Math.floor(absoluteRemainingTime /3600)));
    // setremainingMinutes(Math.floor(absoluteRemainingTime / 60) % 60);
    // setremainingSeconds(absoluteRemainingTime % 60);?
  
  // };
// const getMyTTime = () => {
//   const time = Math.floor((new Date() - Date.parse(createDate)) / 1000);
//   console.log(" Date.parse(createDate)", Date.parse(createDate))
//   setabsoluteRemainingTime(Math.abs(time))
//   setDays(Math.floor(absoluteRemainingTime / ( 60 * 60 * 24)));
//   setremainingHours((Math.floor(absoluteRemainingTime /3600)));
//   setremainingMinutes(Math.floor(absoluteRemainingTime / 60) % 60);
//   setremainingSeconds(absoluteRemainingTime % 60);
// };

// useEffect(() => {
//   setTimeout(() => {
//     setloading(false);
//   }, 2000);
//   const handleWindowLoad = () => {
//     getMyTTime();
//   };

//   window.addEventListener('load', handleWindowLoad);

//   return () => {
//     window.removeEventListener('load', handleWindowLoad);
//   };
// }, []);

// useEffect(() => {
//   console.log(createDate);
//   console.log(specificTime, "specificTime");
//   console.log(currentTime, "currentTime");
//   console.log("remainingHours", remainingHours);
//   console.log("remainingMinutes", remainingMinutes);
//   console.log("absoluteRemainingTime", absoluteRemainingTime);
//   console.log("remainingSeconds", remainingSeconds);
//   if (closeDate) {
//     setCurrentTime(new Date(closeDate));
//   } else {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//       getMyTTime();
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }

// }, [currentTime]);
useEffect(()=>{
  setremainingHours(Number(timeCount.split(":")[0]))
  setremainingMinutes(Number(timeCount.split(":")[1]))
  console.log("remainingHours",remainingHours)
  console.log("remainingMinutes",remainingMinutes)
  
},[timeCount])

  const handelClick = (e1, e2) => {
    closeService(e1, e2);
  }

  return (
    <>
      <td className="">
        <div className="d-none d-lg-block">

      
         
        
        <div  className={(remainingMinutes <= (3)  && remainingHours === 0) ? `bg-success text-white d-none d-lg-block` :
        (remainingMinutes <= (7 )  && remainingHours === 0) ? `bg-warning text-dark d-none d-lg-block` :
        (remainingMinutes > (7 ) || remainingHours > 0) ? `bg-danger text-white d-none d-lg-block` : "bg-primary d-none d-lg-block"} style={{ borderRadius: "10px" }}>
           
             <p className="stopwatch-time fs-2 mt-4" id="stopwatch" style={{direction:"ltr"}}>
                {timeCount}
            {/* {closeDate ? remainingHours.toString().padStart(2, "0") : remainingHours.toString().padStart(2, "0")}:{remainingMinutes.toString().padStart(2, "0")}:
            {remainingSeconds.toString().padStart(2, "0")} */}
          </p>
        </div>
          
        </div>
      </td>

      <td>
        <div className="d-flex justify-content-center align-items-center p-0 pt-lg-4">
          <button className="btn btn-success px-4 py-2 d-none d-lg-block" onClick={() => { handelClick(tableNo, service) }}>
            {t("Done")}
          </button>
        </div>
      </td>

      <div className="col-8 d-block d-lg-none py-0">
        
              
             <div className={(remainingMinutes <= 3 && remainingHours === 0) ? `bg-success text-white` :
              (remainingMinutes <= 7 && remainingHours === 0) ? `bg-warning text-dark` :
              (remainingMinutes > 7 || remainingHours > 0) ? `bg-danger text-white` : "bg-primary"} style={{ borderRadius: "6px" }}>
              <p className="stopwatch-time fs-2 mt-4" id="stopwatchSm" style={{direction:"ltr"}}>
                {timeCount}
              {/* {closeDate ? remainingHours.toString().padStart(2, "0") : remainingHours.toString().padStart(2, "0")}:{remainingMinutes.toString().padStart(2, "0")}:
              {remainingSeconds.toString().padStart(2, "0")} */}
             </p>
            </div>
              
         
      </div>
      <div className="col-4 d-block d-lg-none">
        <button className="btn btn-success my-4 px-4 pb-1 pt-2" onClick={() => { handelClick(tableNo, service) }}>
          {t("Done")}
        </button>
      </div>
    </>
  );
};
