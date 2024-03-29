import React from 'react'
import "./featuredInfo.css"

import {ArrowDownward, ArrowUpward} from '@mui/icons-material';
export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className='featuredItem'>
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">-11.4 <ArrowDownward className='featuredIcon negative'/> </span>
            </div>
            <span className="featuredSub">Compared To last Month</span>
        </div>

        <div className='featuredItem'>
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$3,500</span>
                <span className="featuredMoneyRate">-11.4 <ArrowUpward className='featuredIcon positive'/> </span>
            </div>
            <span className="featuredSub">Compared To last Month</span>
        </div>

        <div className='featuredItem'>
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,000</span>
                <span className="featuredMoneyRate">-16.4 <ArrowDownward className='featuredIcon negative'/> </span>
            </div>
            <span className="featuredSub">Compared To last Month</span>
        </div>
    
    </div>
    
  )
}
