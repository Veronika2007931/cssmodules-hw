import React from 'react';
import PropTypes from 'prop-types';

export function Statistics({id, lable, percentage}){
   
       return(
    
              <li class="item">
                <span class="label">{lable}</span>
                <span class="percentage">{percentage}</span>
              </li>
            ) 
        } 

        
Statistics.propTypes = {
    id: PropTypes.string,
    lable: PropTypes.string,
    percentage: PropTypes.number
   
}

