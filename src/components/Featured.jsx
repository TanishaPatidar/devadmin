import React from 'react'
import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



export const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertIcon className="icon" font-size="small" />
            </div>

            <div className="bottom">
                <div className="featuredchart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$420</p>
                <p className="desc">
                    Previous transactions processing.Last payment may not be included.
                </p>
                <div className="summary">
                    
                    <div className="item">
                        <div className="itemtitle">Target
                            <div className="itemresult negative">
                                <KeyboardArrowDownIcon font-size="small" />
                                <div className="resultAmount">$12.4K</div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="itemtitle">Last Week
                            <div className="itemresult positive">
                                <KeyboardArrowUpIcon font-size="small" />
                                <div className="resultAmount">$12.4K</div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="itemtitle">Last Month
                            <div className="itemresult negative">
                                <KeyboardArrowDownIcon font-size="small" />
                                <div className="resultAmount">$12.4K</div>
                            </div>
                        </div>
                    </div>

                        

                
                 </div>


            </div>
        </div>
         )
}

