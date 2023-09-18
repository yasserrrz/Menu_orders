// import React from 'react'
// import bedab from '../../assets/Bedab-Logo-Blue.png'
// import tijarylog from '../../assets/tijarylog.jpeg'

// export default function Footer({isEn , handleLanguageChange}) {
  

//     return <>
     
//     <div className='w-100 my-4 footer d-flex justify-content-center mt-5'>
//         <div className=" footer-- text-center w-50 ">
              
//             <p className='fw-bold mb-1 ' style={{color:"rgb(183 216 60)" , fontSize:"1.5rem" ,cursor: "pointer"}}    data-bs-toggle="modal" data-bs-target="#exampleModal" >tijary</p>
//                 <p  className='mb-0' style={{fontSize:"0.8rem"}}>Developed by</p>
//                 <p >
//                 <a className='text-decoration-none' href="http://www.bedab.com/contact-arabic.html">  
//                 <img src={bedab} className='pb-2 p-2 mb-2  ' style={{ width : "110px"}} alt="" />
//                  </a>
//                 </p>
//                 <li className="nav-item d-flex justify-content-center align-items-start mt-0 mb-3">
          
//           < div className={ "nav-link "}  >
//           <div className='d-flex  justify-content-center align-items-center'>
           
//             {/* <p className='my-0 mx-2'>{isEn ? "English" : "عربي"}</p> */}
//             <input type="button" className=' language-toggle my-0  fw-bold btn btn-secondary  py-1 rounded rounded-2' id='selectOp' onClick={handleLanguageChange}  value={ isEn ? "E" : "ع" } />
  
//                </div>
//             </div>
            
//         </li>

//         </div>


//     </div>
          
// <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div className=" modal-dialog modal-dialog-centered">
//     <div className="modal-content">
//       <div className="modal-header  ">
//        <div className="  d-flex  justify-content-center" style={{width:"95%"}}>
//        <h1 className="modal-title fs-2 " id="exampleModalLabel" style={{marginTop:"10px",fontSize:"18px",color:"rgb(25, 135, 84)",fontWeight:"bold",textShadow:"rgb(191, 191, 191) 2px 4px 4px"}}>
//         tijary عن
//         </h1>
//        </div>
//         <div className="">
//         <button type="button" className="btn-close btn btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
//         </div>
//       </div>
//       <div className="modal-body">
//       <p className='text-center fontmaaray'>نظام متكامل للأداره الشاملة لمحلات البيع و متطلبات عملائهم من خلال مجموعه من التطبيقات وتكنولوجيا اداره المعلومات</p>
//       <p className='text-center fontmaaray'>يقوم النظام باداره محلات البيع بما يتطلب من زياده الأرباح والتوفير وتقليص الخسائر </p>
//       <p className='text-center fontmaaray'>يتركز علي ارسال التفوق الاداري و انجاح العمليه التجاريه سواء اونلاين او اوف لاين للانترنت المحل</p>
//       </div>
//       <div className="modal-footer d-flex justify-content-around border-0">

//           <a  className='text-decoration-none' href="mailto:Support@tijary.store" >
//             <button type="button" className="btn p-2 px-3 fs-5" style={{backgroundColor:"#F56902" , color:"#fff"}}>
//             <i class="fa-regular fa-envelope me-3"></i>
//             ارسل استفسارك
//             </button>
//           </a>
//         <a className='col-2 fs-1' href="https://wa.me/201118118343"  target="_blank">
//         <i className="fa-brands fa-whatsapp" style={{color: '#27b459'}}></i>
//         </a>
//       </div>
//     </div>
//   </div>
// </div>
    
//     </>

// //   return (<>
// //     <div className='w-100 mt-4 footer d-flex justify-content-center mt-5'>
// //         <div className=" footer-- text-center w-50 ">
              
// //             <p className='fw-bold mb-0 ' style={{color:"rgb(183 216 60)" , fontSize:"1.5rem" ,cursor: "pointer"}}    data-bs-toggle="modal" data-bs-target="#exampleModal" >tijary</p>
// //                 <p className='mb-0'>
// //                 <span style={{fontSize:"0.7rem"}}>Developed by</span><a className='text-decoration-none' href="http://www.bedab.com/contact-arabic.html">  
// //                 <img src={bedab} className='pb-2 p-2  '  alt="" />
// //                  </a>
// //                 </p>
// //         <li className="nav-item d-flex justify-content-center align-items-start mt-0 mb-3">
          
// //           < div className={ "nav-link "}  >
// //           <div className='d-flex  justify-content-center align-items-center'>
// //             <p class="fa-solid fa-language  my-0" ></p>
// //             <p className='my-0 mx-2'>{isEn ? "English" : "عربي"}</p>
// //             <input type="button" className=' language-toggle my-0  fw-bold btn btn-secondary  py-1 rounded rounded-2' id='selectOp' onClick={handleLanguageChange}  value={ isEn ? "E" : "ع" } />
  
// //               </div>
// //             </div>
            
// //           </li>
// //         </div>


// //     </div>
          
// // <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
// //   <div className=" modal-dialog modal-dialog-centered">
// //     <div className="modal-content">
// //       <div className="modal-header  ">
// //        <div className=" ">
// //        <h1 className="modal-title fs-2 " id="exampleModalLabel" style={{marginTop:"10px",fontSize:"18px",color:"rgb(25, 135, 84)",fontWeight:"bold",textShadow:"rgb(191, 191, 191) 2px 4px 4px"}}>
// //         tijary عن
// //         </h1>
// //        </div>
// //         <button type="button" className="btn-close btn btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
// //       </div>
// //       <div className="modal-body">
// //       <p className='text-center fontmaaray'>نظام متكامل للأداره الشاملة لمحلات البيع و متطلبات عملائهم من خلال مجموعه من التطبيقات وتكنولوجيا اداره المعلومات</p>
// //       <p className='text-center fontmaaray'>يقوم النظام باداره محلات البيع بما يتطلب من زياده الأرباح والتوفير وتقليص الخسائر </p>
// //       <p className='text-center fontmaaray'>يتركز علي ارسال التفوق الاداري و انجاح العمليه التجاريه سواء اونلاين او اوف لاين للانترنت المحل</p>
// //       </div>
// //       <div className="modal-footer d-flex justify-content-around border-0">

// //           <a  className='text-decoration-none' href="mailto:Support@tijary.store" >
// //             <button type="button" className="btn  fs-5" style={{backgroundColor:"#F56902" , color:"#fff"}}>
// //             <i class="fa-regular fa-envelope mx-1"></i>
// //             ارسل استفسارك
// //             </button>
// //           </a>
// //         <a className='col-2 fs-1' href="https://wa.me/201118118343"  target="_blank">
// //         <i className="fa-brands fa-whatsapp" style={{color: '#27b459'}}></i>
// //         </a>
// //       </div>
// //     </div>
// //   </div>
// // </div>

// //   </>
// //   )
// }




import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import $ from 'jquery';

export default function Footer({isEn , handleLanguageChange}) {
  const { t } = useTranslation();

  const openModal = () => {
    $('.modal-yasser').removeClass("d-none");
    $('.modal-yasser').addClass("d-block");
    $('body').addClass("disable-scroll");
    $('.table-container').addClass("disable-scroll");
  };
  
  const closeModal = () => {
    $('.modal-yasser').removeClass("d-block");
    $('.modal-yasser').addClass("d-none");
    $('body').removeClass("disable-scroll");
    $('.table-container').removeClass("disable-scroll");
  };
  
  return (
    <>
      <div className="  footer  mt-5">
        <div className="footer-- text-center  d-flex justify-content-around   align-items-center ">
          <div className="">
          <p
            className="fw-bold mb-1"
            style={{
              color: "#29AAE3",
              fontSize: "1.5rem",
              cursor: "pointer"
            }}
            onClick={openModal}
          >
            Yasser's..
          </p>
          
          </div>
          
            
          <div>
          <input type="button" className=' language-toggle my-0 mx-1  fw-bold btn btn-secondary  py-1 rounded rounded-2' id='selectOp' onClick={handleLanguageChange}  value={ isEn ? "E" : "ع" } />
      
         </div>
                  
                      
                  
        </div>
      </div>

      <div className="modal-yasser d-none d-flex justify-content-center  align-items-center" >
        <div className="modal-dialog modal-dialog-centered " >
          <div className="modal-content  ">
            <div className="modal-header">
              <div className="d-flex justify-content-center" style={{ width: "95%" }}>
                <h1 className="modal-title fs-2" style={{ marginTop: "10px", fontSize: "18px", color: "rgb(25, 135, 84)", fontWeight: "bold", textShadow: "rgb(191, 191, 191) 2px 4px 4px" }}>
                  {/* {t("about")} */}
                  About Me
                </h1>
              </div>
              <div className="">
                <button type="button" className="btn-close btn btn-danger" onClick={closeModal}></button>
              </div>
            </div>
            <div className="modal-body">
              <p className='fontmaaray text-center'>
                I'm Yasser Mohamed, a dedicated Frontend Web Developer with over 2 years of hands-on experience in crafting exceptional user interfaces using React.js. My journey in web development has been driven by a passion for creating seamless and visually appealing web experiences.
              </p>
            </div>
            <div className="modal-footer">
              <div className="w-100">

           <div className="row">
           <div className=" d-flex justify-content-around border-0">

<div className='col-8'>
<a className="text-decoration-none" href="yasserrmohammed44@gmail.com">
   <button type="button" className="btn p-2 px-3 " style={{ backgroundColor: "#F56902", color: "#fff"  ,fontSize:"0.7rem"}}>
     <i className="fa-regular fa-envelope me-3"></i>
     {t("send")}
   </button>
 </a>
</div>
 <div>
 <a className="col-2 fs-1" href="https://wa.me/201094991544" target="_blank">
   <i className="fa-brands fa-whatsapp" style={{ color: '#27b459' }}></i>
 </a>
 </div>
</div>
           </div>
            <div className="row">
            <div className="d-flex justify-content-center">
<div className=" d-flex flex-column align-items-center ">
          <p className="mb-0  mx-2 text-muted " style={{ fontSize: "0.8rem" }}>
            Developed by
          </p>
            <p>

            <a className="text-decoration-none " href="http://www.bedab.com/contact-arabic.html">
                Yasser Mohamed
            </a>
            </p>
          </div>  
              </div>
            </div>
            </div>
          </div>
              </div>
        </div>
      </div>
    </>
  );
}
