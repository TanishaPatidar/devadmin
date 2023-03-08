import "./single.scss";

import React from 'react'
import { Sidebar } from "../../components/Sidebar";
import  Navbar  from "../../components/Navbar";
import { Chart } from "../../components/Chart";
import { List } from "../../components/Table";

const Single = () => {
  return (
   <div className="single">
       <Sidebar/>
       <div className="singleContainer">
           <Navbar/>
          <div className="top">
               <div className="left">
                 <div className="editButton">Edit</div>   
                 <h1 className="title">Information</h1>
             
                 <div className="item">
                 <img src ="/images/tani.jpg" alt="img" className="itemimg"/>

                  <div className="details">
                   <h1 className="itemTitle">Tanisha Patidar</h1>
                   <div className="detailItem">
                     <span className="itemKey">Email:</span> 
                     <span className="itemValue">patidartanisha11@gmail.com</span> 
                  </div>

                   <div className="detailItem">
                     <span className="itemKey">Phone:</span> 
                     <span className="itemValue">3456788900</span> 
                   </div>

                   <div className="detailItem">
                     <span className="itemKey">Address:</span> 
                     <span className="itemValue">Girls hostel-3 JEC,Jabalpur</span> 
                   </div>

                   <div className="detailItem">
                     <span className="itemKey">Country:</span> 
                     <span className="itemValue">India</span> 
                   </div>
               </div>
           </div>

        </div>
              <div className="right">
             <Chart aspect={ 3 / 1} title="User Spending(Last 6 months)"/>
              </div>
          </div>

          <div className="bottom">
          <h1 className="title">Last Transcation</h1>
            <List/>
          </div>
       </div>
   </div>
  )
}

export default Single