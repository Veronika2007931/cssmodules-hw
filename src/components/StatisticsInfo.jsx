import React from 'react';
import PropTypes from 'prop-types';
import s from "./Statistics.module.css"

export function StatisticsInfo({id, label, percentage}){
   
       return(
    
              <li className={s.item}>
                <span className={s.label}>{label}</span>
                <span className={s.percentage}>{percentage}</span>
              </li>
            ) 
        } 

        
StatisticsInfo.propTypes = {
    id: PropTypes.string,
    lable: PropTypes.string,
    percentage: PropTypes.number
   
}

