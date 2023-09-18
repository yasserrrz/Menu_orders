import axios from "axios";
import { useFormik } from "formik";
import { error } from "jquery";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import loginImg from '../../assets/Orders-removebg-preview.png'
import { OrderContext } from "../ShareData/ShareData";

export default function Login() {
  let {saveUserpermissions} = useContext(OrderContext)
const [showPassword, setShowPassword] = useState(false);
  let {t} = useTranslation();
  
 let [ errorMsg , seterrorMsg] = useState(null)
  let [loading , setLoading] = useState(true);
   const baseUrl = `https://tijarymagazineapis.azurewebsites.net/CentralUserLogin` ;
   const navigate = useNavigate()
   function signin(values){
    setLoading(false);
    axios.post(`${baseUrl}` , values).then((response) => {
        setLoading(true)
        let data = response.data;
        console.log(data);
        // Continue with your logic here
        console.log(data)
       
        if(data.success === true && data.permissions.length > 0){
          localStorage.setItem("token" , data.authToken)
          localStorage.setItem("permissions" , JSON.stringify(data.permissions))
          saveUserpermissions(data.permissions)
          if( data.permissions.length === 4){
            navigate("/all")
          }else if( data.permissions[0].featureName === "WaiterPermission"){
            navigate("/waiter")
          }else if( data.permissions[0].featureName === "ServicePermission"){
            navigate("/services")
          }else if( data.permissions[0].featureName === "ValetPermission"){
            navigate("/valet")
          }else if( data.permissions[0].featureName === "ChequePermissions"){
            navigate("/check")
          }
        
        }else{
          seterrorMsg(data.msg)
          setMassage(data.msg)
          setLoading(true)
        }
        setLoading(true);
    }).catch((error)=>{
        console.log(error)
        navigate("/")
        setLoading(true)
    })
    
  }
  let [massage , setMassage] = useState(null)
  let validation = Yup.object({
    username: Yup.string().required(t("Required"))
    // .email(t("Invalid_username_address"))
    ,
    password: Yup.string()
      .required(t("Password_Is_Required"))
      .matches(
        /^[a-z0-9!@#$^&*%)]{3,15}$/,
        t("Paas")
      ),
   
  });
  let formik = useFormik({
    initialValues: {
      username:"",
      password:"",
      menuMerchantID: "03E8",
    },
    onSubmit: (values) => {
      console.log(values);
      signin(values);
    },
    validationSchema: validation,
  });
  return (
    <>


<div className=" container d-flex justify-content-center login-container">
  <div className=" login my-5  ">
   <div className="text-center">
   <img src={loginImg} className="" alt="" style={{width:"110px"}} />
    <h3 className="" style={{color: "rgb(41, 170, 227)",}}>{t("Login")}</h3> 
   </div>
    <div className="pt-4 login-form ">
      <form onSubmit={formik.handleSubmit}>
        <div className=" d-flex mb-4 pb-2 row  px-4 ">

      
         <div className=" col-lg-8 d-flex inp  ">
         <label htmlFor="email" className="">
        <FontAwesomeIcon icon={faUser} className="mx-3 pt-2 " style={{color: "rgb(41, 170, 227)",}}/>
          </label>
         <input
            type="email"
            name="username"
            id="username"
            onChange={formik.handleChange}
            className=""
            placeholder={`${t('Enter_Your_Email')}`}
          />
         </div>
          <div className=" ">
          {formik.touched.username && formik.errors.username ? (
            <p>*{formik.errors.username}</p>
          ) : null}
          </div>
         
        </div>
      
      
        <div className=" row d-flex mb-3  px-4 ">

 <div className="col-lg-8 d-flex inp ">
 <label htmlFor="password">
  <FontAwesomeIcon icon={faLock} className="mx-3 pt-2" style={{color: "rgb(41, 170, 227)",}} />
  </label>
 <input
    type={showPassword ? 'text' : 'password'}
    name="password"
    id="password"
    onChange={formik.handleChange}
    className=" "
    placeholder={`${t('Password')}`}
  />
  <button
    type="button"
    className="btn "
    onClick={() => setShowPassword(!showPassword)}
  >
    <FontAwesomeIcon style={{color: "rgb(41, 170, 227)",}} icon={ showPassword? faEye : faEyeSlash } />
  </button>
 
 </div>
 {formik.touched.password && formik.errors.password ? (
    <p>*{formik.errors.password}</p>
  ) : null}

</div>


   <div className="text-center my-3 ">
   {!loading ? (
          <button  className="btn  px-5 rounded rounded-5"
          style={{backgroundColor: "rgb(41, 170, 227)", color:"#fff"}} type="submit">
            <i className="fa fa-spinner fa-spin"></i>
          </button>
        ) : (
          <button
            className="btn  px-5 rounded rounded-5"
            style={{backgroundColor: "rgb(41, 170, 227)", color:"#fff"}}
            type="submit"
            onClick={formik.handleSubmit}
          >
           {t("Login")}
          </button>
        )}
   </div>
      </form>
      {massage ? (
        <div className="my-3 px-3 text-center alert alert-danger">{massage}</div>
      ) : null}
      {/* {errorMsg? <p>{errorMsg}</p> : ""} */}
    </div>
  </div>
</div>

    {/* <div className="w-100  ">
    <div className="container login my-5 ">
      <h3 className="ps-lg-5   h1">Login</h3>
      <div className=" col-lg-6 pt-4 login-form m-auto">
        <form onSubmit={formik.handleSubmit} >
         <div className="">
         <label htmlFor="email">{t("Enter_Your_Email")}</label>
          <input type="email" name="email" id="email" onChange={formik.handleChange} className="form-control" />
          {formik.touched.email && formik.errors.email ? <p>*{formik.errors.email}</p>: null}
         </div>
         <div className="my-4">
         <label htmlFor="password">{t("Password")}</label>
          <input type="password" name="password" id="password" onChange={formik.handleChange} className="form-control" />
          {formik.touched.password && formik.errors.password ? <p>*{formik.errors.password}</p>: null}
         </div>
         {!loading ? <button className="btn btn-danger px-4" type="submit"><i className="fa fa-spinner fa-spin"></i></button>
         :
         <button className="btn btn-danger px-3" type="submit" onClick={formik.handleSubmit}>Login</button>
         }
         
         
        </form>
        {massage?<div className="my-3 alert alert-danger">{massage} </div>: null}
        </div>
        </div>
    </div> */}
    </>
  )
}
