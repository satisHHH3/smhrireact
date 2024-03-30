import {Component} from 'react'

import './index.css'

class FinalReport extends Component{
    render(){
        return(
            <div className='final-report-container'>
           <div className='final-report-input-container'>
              <label htmlFor='from'>From</label>
              <input type="date" id='from'/>
              <label htmlFor='to'>to</label>
              <input type="date" id='to'/>
              <button type="button">SEARCH</button>
              <button type="button">Export to excel</button>
           </div>
           <h1>PERIODICAL MEIDCAL EXAMINATON SUMMARY REPORT Here</h1>
           </div>
        )
    }
}

export default FinalReport