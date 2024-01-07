import data from "../data.json"
import { StatisticsInfo } from "./StatisticsInfo";
import s from "./Statistics.module.css"

export function Statistics(){
 return(
        <section className={s.statistics}>
            <h2 className={s.title}>Upload stats</h2>
            <ul className={s.statList}>
           { data.map(({id, label, percentage})=>{
               return <StatisticsInfo
               key={id}
               label={label}
               percentage={percentage}
               />
            })}
            
            </ul>
        </section>
       ) 
          
       
    
} 




