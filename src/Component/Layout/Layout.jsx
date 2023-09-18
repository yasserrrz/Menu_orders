import React, { useContext, useEffect, useState } from 'react';
import '../../i18n.js';
import {useTranslation} from 'react-i18next';
import { Outlet , useOutletContext } from 'react-router-dom';
import i18next from 'i18next'
import $ from 'jquery'
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import ShareData, { OrderContext } from '../ShareData/ShareData.jsx';



export default function Layout() {
  let {orderLength , checkLength , waiterLength ,valetLength , servLength , historyLength ,  } = useContext(OrderContext);

    const {t, i18n} = useTranslation();
  
    const [currentLanguage,setLanguage] =useState('en');

  


    const [isEn, setIsEn] = useState(false);
    let savedOption = localStorage.getItem('i18nextLang2');
    useEffect(()=>{

      if(savedOption === "en" ){
        i18next.changeLanguage("en");
        setIsEn(false)
        $("#Lang").css("direction" , 'ltr')
      }else{
        i18next.changeLanguage("ar");
        $("#Lang").css("direction" , 'rtl')
          setIsEn(true)
    }

  
  },[ savedOption ,])
  
  const handleLanguageChange =(e)=>{
    setIsEn(!isEn)
    const value = e.target.value;
    if (value === 'E') {
      i18next.changeLanguage("en");
      $("#Lang").css("direction" , "ltr");
      localStorage.setItem("i18nextLang2" , "en")
    } else  {
      i18next.changeLanguage("ar");
      $("#Lang").css("direction" , "rtl");
      localStorage.setItem("i18nextLang2" , "ar")
    }

  }

  
  return (
    <>
  
    <div className="mb-0 mb-lg-5">
    <Navbar  historyLength={historyLength}  servLength={servLength}  orderLength = {orderLength}  waiterLength={waiterLength}  valetLength={valetLength} checkLength={checkLength}></Navbar>
    </div>
    <div className=" pt-0 pt-lg-5" id='Lang'>
    <Outlet></Outlet>
    </div>
    <div className="fixed-buttom">
    <Footer  handleLanguageChange = {handleLanguageChange} isEn={isEn} setIsEn={setIsEn}></Footer>
    </div>

    </>
  )
}
