import {Component} from 'react'
import Header from "../Header"
import Sidebar from "../Sidebar"

import "./index.css"

const testObj = [
    {id: 1,
     test: "Audiometer Threshold Decimats"
},
{id: 2,
test: "Blood"
},
{id: 3,
test: "Complaints"
},
{id: 4,
test: "Hematology"
},
{id: 5,
test: "Lung Function"
},
{id: 6,
test: "Microscopic Examination"
},
{id: 7,
test: "OtherTests"
},
{id: 8,
test: "PhysiologicalTest"
},
{id: 9,
test: "Systematic Examination"
},
{id: 10,
test: "VisualTest"
},
{id: 11,
test: "Urine_Examination"
},

]


class Tests extends Component{
    render(){
        return(
            <>
                <Header/>
                <div className='test-bg-container'>
                    <Sidebar/> 
                    <div className='test-container'>
                        <h1>List Of Test</h1>
                        <hr/>
                        <table>
                            <thead>
                                <tr>
                                    <th>Test Id</th>
                                    <th>Test Name</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                    {testObj.map((user,index) => (
                                        <tr key={index}>
                                            <td>{user.id}</td>
                                            <td>{user.test}</td>
                                            <td>-</td>
                                        </tr>
                                    ))}
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default Tests