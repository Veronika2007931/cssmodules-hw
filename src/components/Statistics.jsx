import data from "../data.json"
import { StatisticsInfo } from "./StatisticsInfo";


export function Statistics(){
 return(
        <section class="statistics">
            <h2 class="title">Upload stats</h2>
            <ul class="stat-list">
           { data.map(({id, lable, percentage})=>{
               return <StatisticsInfo
               key={id}
               lable={lable}
               percentage={percentage}
               />
            })}
            
            </ul>
        </section>
       ) 
          
       
    
} 




