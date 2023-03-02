import React from 'react'
import {Navbar} from '../../components/Navbar'
import { Sidebar } from '../../components/Sidebar'
import { Widgets } from '../../components/Widgets'
import { Featured } from '../../components/Featured'
import { Chart } from '../../components/Chart'

import "./home.scss"
import { List } from '../../components/Table'



export const Home = () => {
  return (
    <div className='home'>
        
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widgets type="users"/>
            <Widgets type="order"/>
            <Widgets type="earning"/>
            <Widgets type="balance"/>
          </div>

           <div className="charts">
           < Featured/>
           <Chart/>
           </div>

           <div className="listcontainer">
             <div className="listtitle">
               Latest Transation  </div>

            <List/>
           </div>
    </div>
        
    </div>
  )
}


