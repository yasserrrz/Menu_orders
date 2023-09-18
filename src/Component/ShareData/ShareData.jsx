import axios from 'axios';

import React, { createContext, useEffect, useState} from 'react'
import Navbar from '../Navbar/Navbar';
import { Navigate, useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export let OrderContext = createContext(null);
export default function ShareData(props) {


    const [servList , setServList] = useState([])
    const [valetList , setvaletList] = useState([])
    const [waiterList , setwaiterList] = useState([])
    const [historyList , sethistoryList] = useState([])
    const [checkList , setcheckList] = useState([]);
    const [serviceList , setservicsList] = useState([]);

    const [orderLength , setorderLength] = useState(0)
    const [checkLength , setcheckLength] = useState(0);
    const [servLength , setservLength] = useState(0)
    const [valetLength , setvaletLength] = useState(0)
    const [waiterLength , setwaiterLength] = useState(0)
    const [historyLength , sethistoryLength] = useState(0)
    const [timeCount, settimeCount] = useState([]);
    
    let [userData , setUserData] = useState(null);
    let [permissions , setpermissions] = useState(null);

   
    useEffect(()=>{     
        getOrderes()
        getHistory()

    } , [serviceList])
    function getOrderes() {
        axios
          .get(`https://tijarymagazineapis.azurewebsites.net/GetServices/83126f9b8fbb4a3f8912a86a1caa01a4/3?Open=true`)
          .then((respo) => {
            if (respo && respo.data) {
            
              const { data } = respo;
              setservicsList(data.data);
              setorderLength(data.data.length);
              setwaiterList(data.data.filter((x) => x.service === 3));
              console.log(waiterList);
              setwaiterLength(data.data.filter((x) => x.service === 3).length);
      
              setcheckList(data.data.filter((x) => x.service === 2));
              setcheckLength(data.data.filter((x) => x.service === 2).length);
      
              setvaletList(data.data.filter((x) => x.service === 1));
              setvaletLength(data.data.filter((x) => x.service === 1).length);
      
              setServList(data.data.filter((x) => x.service === 0));
              setservLength(data.data.filter((x) => x.service === 0).length);
              settimeCount(data.data.filter((x)=> x.timeCount))
              console.log("serviceList",  serviceList);
            } else {
              console.error('Invalid response format');
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
      
      useEffect(() => {
        if (localStorage.getItem("token") || localStorage.getItem("permissions") ) {
          let decode = jwtDecode(localStorage.getItem("token"));
          console.log(decode);
          saveUserData(decode);
         let perm = JSON.parse(localStorage.getItem("permissions")) ; 
         saveUserpermissions(perm)
        } else  {
          // Handle the case when there is no token
        }
      }, []);
    
      function saveUserData(data) {
        setUserData(data);
        console.log(data);
      }
      function saveUserpermissions(data) {
        setpermissions(data);
        console.log(data);
      }
    
      function LogOut() {
        localStorage.removeItem("token");
        localStorage.removeItem("permissions");
        setUserData(null);
        setpermissions(null)
       
        return <Navigate to={"/"}/>
      }
    // async function getOrderes() {
    //     const respo = await axios.get(`https://tijarymagazineapis.azurewebsites.net/GetServices/0993682ED4B2B7686FA83EACDD1B9BF7/3?Open=true`).catch((error)=>{console.log(error.message)})
    //     if(respo&& respo.data){
    //             const {data} = respo ;
    //            setservicsList(data.data);
    //             setorderLength(data.data.length);
          
    //             setwaiterList(data.data.filter((x) => x.service === 3));
    //             console.log(waiterList);
    //             setwaiterLength(data.data.filter((x) => x.service === 3).length);
          
    //             setcheckList(data.data.filter((x) => x.service === 2));
    //             setcheckLength(data.data.filter((x) => x.service === 2).length);
          
    //             setvaletList(data.data.filter((x) => x.service === 1));
    //             setvaletLength(data.data.filter((x) => x.service === 1).length);
          
    //             setServList(data.data.filter((x) => x.service === 0));
    //             setservLength(data.data.filter((x) => x.service === 0).length);
          
    //             console.log(serviceList);
    //           } else {
    //             console.error('Invalid response format');
    //           }
       
    //   }
      
   
    // async function getOrderes() {
    //     try {
    //       const response = await axios.get(`https://tijarymagazineapis.azurewebsites.net/GetServices/0993682ED4B2B7686FA83EACDD1B9BF7/3?Open=true`);
    //       const { data } = response;
      
    //       setservicsList(data);
    //       setorderLength(data.length);
      
    //       setwaiterList(data.filter((x) => x.service === 3));
    //       console.log(waiterList);
    //       setwaiterLength(data.filter((x) => x.service === 3).length);
      
    //       setcheckList(data.filter((x) => x.service === 2));
    //       setcheckLength(data.filter((x) => x.service === 2).length);
      
    //       setvaletList(data.filter((x) => x.service === 1));
    //       setvaletLength(data.filter((x) => x.service === 1).length);
      
    //       setServList(data.filter((x) => x.service === 0));
    //       setservLength(data.filter((x) => x.service === 0).length);
      
    //       console.log(serviceList);
    //     } catch (error) {
    //       console.error('Error:', error.message);
    //     }
    //   }
      
    
    // async function getHistory(){
    //     try{
    //        let response = await axios.get(`https://tijarymagazineapis.azurewebsites.net/GetServices/0993682ED4B2B7686FA83EACDD1B9BF7/3?Open=false`);
    //        if (response.data && response.data.data) {
    //              const {data} = response;
    //              sethistoryList(data.data)
    //              sethistoryLength(data.data? data.data.length : 0)

    //        }else{
    //         console.error('Invalid response format');
    //        }
    //    }catch (error) {
    //     console.error('Error:', error.message);
    //   }

    // }
    function getHistory() {
        axios.get(`https://tijarymagazineapis.azurewebsites.net/GetServices/83126f9b8fbb4a3f8912a86a1caa01a4/3?Open=false`)
            .then((response) => {
                if (response.data && response.data.data) {
                  console.log(response);
                    const { data } = response;
                    sethistoryList(data.data);
                    sethistoryLength(data.data ? data.data.length : 0);
                } else {
                    console.error('Invalid response format');
                }
            })
            .catch((error) => {
                console.error('Error:', error.message);
            });
    }
 
    // async function closeService( TableNo, ServiceType  ){
    //     let {data} = await axios.get(`https://tijarymagazineapis.azurewebsites.net/CloseService/0993682ED4B2B7686FA83EACDD1B9BF7/3?TableNo=${TableNo}&ServiceType=${ServiceType}`).catch((err)=>{window.alert(err)})
    //     console.log(data)
       
     
    // }

   
    function closeService(TableNo, ServiceType) {
        axios.get(`https://tijarymagazineapis.azurewebsites.net/CloseService/83126f9b8fbb4a3f8912a86a1caa01a4/3?TableNo=${TableNo}&ServiceType=${ServiceType}`)
            .then((response) => {
                let data = response.data;
                console.log(data);
                // Continue with your logic here
            })
            .catch((error) => {
                console.log(error);
            });
    }
    

  return <>
        <OrderContext.Provider value={{   saveUserpermissions, permissions , LogOut ,userData ,   getOrderes , serviceList , closeService , orderLength  ,  getHistory,  checkLength , checkList, waiterLength , waiterList, valetList , valetLength , servList , servLength , historyList , historyLength}} >
        {props.children}
        {/* <Navbar></Navbar> */}
        </OrderContext.Provider>
    </>
  
}
