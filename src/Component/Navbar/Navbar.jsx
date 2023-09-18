
import { Link, NavLink, useNavigate  } from 'react-router-dom'
import logo1 from '../../assets/Orders-removebg-preview.png'
import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { OrderContext } from '../ShareData/ShareData'

export default function Navbar({   orderLength , valetLength , checkLength , waiterLength , servLength , historyLength  }) {
  const {LogOut , userData , permissions} = useContext(OrderContext);
  const [isOpen, setIsOpen] = useState(false);
let navigate = useNavigate();
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const handelLogout =()=>{
    setIsOpen(!isOpen);
    LogOut()
    navigate("/");
  }
 let {t} = useTranslation()
  return <>
  
  <nav className="navbar fixed-top  p-2 fs-5 navbar-expand-lg "  >
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold"  to={"/all"}>
      <img src={logo1} className='   m-0 ' style={{width:"150px"}} alt=""  />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse"  id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 d-flex flex-wrap  mb-lg-0">
        {/* {permissions?.length === 4 ? <> */}
        <>
                <li className="nav-item ">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link" } to={"/all"} aria-current="page" >
                <div className='d-flex flex-column justify-content-center align-items-center all'>
                <p class="fa-solid fa-earth-americas mb-0"></p>
                <i class="fa-solid "></i>
                  <p className='my-0'> {t("Calls")} </p>
                   <div className={`alert ${orderLength >= 8 && orderLength <  15 ? "alert-warning" :orderLength >= 15 ? 'alert-danger' : "alert-success  " }  w-100 text-center fw-bold mt-0 py-0`}>
                    {orderLength}
                   </div>
                  </div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive}) => isActive?  "nav-link active " : "nav-link "} to={"/services"} >
                  <div className='d-flex flex-column justify-content-center align-items-center Services'>
                    
                <p class="fa-solid fa-bell mb-0"></p>
                  <p className='my-0'> {t("Services")}</p>
                  <div className={`alert ${servLength >= 4 && servLength <6 ? "alert-warning" :servLength >= 6 ? 'alert-danger' : "alert-success  " }  w-100 text-center fw-bold mt-0 py-0`}>
      
                    {servLength}
                   </div>
                  </div>
                  </NavLink>
              </li>
              <li className="nav-item"> 
                <NavLink className={({isActive}) => isActive? "nav-link active" : "nav-link "} to={"/valet"} >
                <div className='d-flex flex-column justify-content-center align-items-center Valet'>
                <p class="fa-solid fa-car mb-0"></p>
            
                  <p className='my-0'> {t("Valet")} </p>
                  <div className={`alert ${valetLength >= 4  && valetLength <6? "alert-warning" :valetLength >= 6 ? 'alert-danger' : "alert-success  " }  w-100 text-center fw-bold mt-0 py-0`}>
                    {valetLength}
                   </div>
                  </div>
      
                 </NavLink>
              </li>
              <li className="nav-item">   
                <NavLink  className={({isActive}) => isActive? "nav-link active" : "nav-link "} to={"/waiter"} >
                     <div className='d-flex flex-column justify-content-center align-items-center Waiter'>
                <p class="fa-solid  fa-user-tie mb-0"></p>
               
                  <p className='my-0'> {t("Waiter")} </p>
                  <div className={`alert ${waiterLength >= 4 &&waiterLength < 6 ? "alert-warning" :waiterLength >= 6 ? 'alert-danger' : "alert-success  " }  w-100 text-center fw-bold mt-0 py-0`}>
      
                    {waiterLength}
                   </div>
                  </div>
                  
                  </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive}) => isActive? "nav-link active" : "nav-link "} to={"/check"} >
                <div className='d-flex flex-column justify-content-center align-items-center Cheque'>
                <p class="fa-solid fa-money-bill mb-0"></p>
             
                  <p className='my-0'> {t("Cheque")} </p>
                  <div className={`alert ${checkLength >= 4 && checkLength < 6 ? "alert-warning" :checkLength >= 6 ? 'alert-danger' : "alert-success  " }  w-100 text-center fw-bold mt-0 py-0`}>
      
                    {checkLength}
                   </div>
                  </div>
                </NavLink>
              </li>
              <li className="nav-item">        
                <NavLink  className={({isActive}) => isActive? "nav-link active" : "nav-link "} to={"/history"} >
                <div className='d-flex flex-column justify-content-center align-items-center History '>
                <p class="fa-solid fa-server mb-0"></p>
                  <p className='my-0'> {t("History")} </p>
                   <div className="alert alert-danger w-100 text-center fw-bold mt-0 py-0">
                    {historyLength}
                   </div>
                  </div>
                </NavLink>
              </li>
           </>
              {/* : 
              permissions?.length === 1  && permissions[0].featureName === "WaiterPermission"? 
              <>
               <li className="nav-item">   
                <NavLink  className={({isActive}) => isActive? "nav-link active" : "nav-link "} to={"/waiter"} >
                     <div className='d-flex flex-column justify-content-center align-items-center Waiter'>
                <p class="fa-solid  fa-user-tie mb-0"></p>
               
                  <p className='my-0'> {t("Waiter")} </p>
                  <div className={`alert ${waiterLength >= 4 &&waiterLength < 6 ? "alert-warning" :waiterLength >= 6 ? 'alert-danger' : "alert-success  " }  w-100 text-center fw-bold mt-0 py-0`}>
      
                    {waiterLength}
                   </div>
                  </div>
                  
                  </NavLink>
              </li>
              
              </>
              : 
              permissions?.length === 1  && permissions[0].featureName === "ServicePermission"? 
              <>
                  <li className="nav-item">
                <NavLink className={({isActive}) => isActive?  "nav-link active " : "nav-link "} to={"/services"} >
                  <div className='d-flex flex-column justify-content-center align-items-center Services'>
                    
                <p class="fa-solid fa-bell mb-0"></p>
                  <p className='my-0'> {t("Services")}</p>
                  <div className={`alert ${servLength >= 4 && servLength <6 ? "alert-warning" :servLength >= 6 ? 'alert-danger' : "alert-success  " }  w-100 text-center fw-bold mt-0 py-0`}>
      
                    {servLength}
                   </div>
                  </div>
                  </NavLink>
              </li>
              </>
              :  permissions?.length === 1  && permissions[0].featureName === "ValetPermission" ?
              <>
               <li className="nav-item"> 
                <NavLink className={({isActive}) => isActive? "nav-link active" : "nav-link "} to={"/valet"} >
                <div className='d-flex flex-column justify-content-center align-items-center Valet'>
                <p class="fa-solid fa-car mb-0"></p>
            
                  <p className='my-0'> {t("Valet")} </p>
                  <div className={`alert ${valetLength >= 4  && valetLength <6? "alert-warning" :valetLength >= 6 ? 'alert-danger' : "alert-success  " }  w-100 text-center fw-bold mt-0 py-0`}>
                    {valetLength}
                   </div>
                  </div>
      
                 </NavLink>
              </li>
              </>
              :   permissions?.length === 1  && permissions[0].featureName === "ChequePermissions" ? 
              <>
               <li className="nav-item">
                <NavLink className={({isActive}) => isActive? "nav-link active" : "nav-link "} to={"/check"} >
                <div className='d-flex flex-column justify-content-center align-items-center Cheque'>
                <p class="fa-solid fa-money-bill mb-0"></p>
             
                  <p className='my-0'> {t("Cheque")} </p>
                  <div className={`alert ${checkLength >= 4 && checkLength < 6 ? "alert-warning" :checkLength >= 6 ? 'alert-danger' : "alert-success  " }  w-100 text-center fw-bold mt-0 py-0`}>
      
                    {checkLength}
                   </div>
                  </div>
                </NavLink>
              </li>
              </>
              :
              ""
      } */}
      {permissions? 
      <>
       <li className='nav-item d-flex justify-content-center align-items-start'>
        <button  className={ "nav-link "} style={{padding:"12px 0px 0px"  , border:"none" , margin:"0px" ,  textAlign: "inherit" , backgroundColor:"transparent"}} onClick={toggleModal}>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <p class="fa-solid fa-sign-out mb-0"></p>
            <p className='my-0'> {t("Logout")} </p>
             
            </div>
          </button>
        </li>
      </>
    :
      <>
    <li className='nav-item d-flex justify-content-center align-items-start'>
        <Link  className={ "nav-link"} to={"/"} >
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <p class="fa-solid fa-sign-in mb-0"></p>
            <p className='my-0'>{t("Login")}</p>
            </div>
          </Link>
        </li>
      </>
      
    }
        
        
       
      </ul>
      
     
    </div>
  </div>
</nav>
{
  isOpen?
<div className="modal-yasser  d-flex justify-content-center  align-items-center" >
        <div className="modal-dialog modal-dialog-centered " >
          <div className="modal-content logout " style={{backgroundColor: "#93939317"}}>
            <div className="modal-header">
              <div className="d-flex justify-content-center" style={{ width: "95%" }}>
                <h1 className="modal-title fs-2" style={{ marginTop: "10px", fontSize: "18px", color: "rgb(25, 135, 84)", fontWeight: "bold", textShadow: "rgb(191, 191, 191) 2px 4px 4px" }}>
                 {t("wanttologout?")}
                </h1>
              </div>
              <div className="">
                <button type="button" className="btn-close btn btn-danger" onClick={toggleModal}></button>
              </div>
            </div>
            <div className="modal-body d-flex justify-content-between">
               {/* <link className='list-unstyled' to={"/login"}> */}
               <button className='btn btn-primary' onClick={toggleModal}> 
               {t("Cancel")}
               </button>
              <button className='btn btn-danger' onClick={handelLogout}>
              {t("Logout")}
              </button>
               {/* </link> */}
            </div>
           <div className='model-footer d-flex justify-content-around'>
          
           </div>
              </div>
        </div>
      </div> 
      :""}
  </>
}
