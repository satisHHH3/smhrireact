import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'js-cookie';

import 'bootstrap/dist/css/bootstrap.min.css';

const XrayReport = () => {
    const { id } = useParams();
    const [values, setValues] = useState({
        name: '',
        employeeNo: '',
        ticketNo: '',
        testDate: '',
        sex: '',
        listCompany: '',
        birthdate: '',  
        age: '*'
    });


    useEffect(() => {
        const employeeData = async () => {
            const jwt = Cookies.get('jwt_token');
            const url = `https://cloudconnectcampaign.com/smhri/api/employee_master/${id}/`;
    
            const options = {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            };
    
            const request = await fetch(url, options);
    
            if (request.ok) {
                const data = await request.json();
                
        const today = new Date();
        const birthDate = new Date(data.birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        console.log(age)
                
                setValues({
                    name: data.first_name,
                    employeeNo: data.employee_no,
                    ticketNo: data.ticket_no,
                    testDate: data.test_date,
                    sex: data.sex,
                    listCompany: data.list_company,
                    birthdate: data.birthdate,
                    age: age
                });
            }
        };
    
        employeeData();
    }, []);
    

    return(
      <div className="container-fluid mt90">
      <div className="row">
        <div className="col">
          <div className="report_header_form">
            <input type="button" value="Print Report" className="btn btn-primary" onClick={() => window.print()} id="create_print" />
          </div>
          <div className="div_res" style={{ padding: '10px', marginLeft: '50px', marginRight: '50px' }}>
            <p style={{ textAlign: 'right' }}>
              DATE : {values.testDate}
            </p>
            <div className="grid2by2">
              <p>Ticket No:</p>
              <p>{values.ticketNo}</p>

              <p>Company Name:</p>
              <p>{values.listCompany}</p>

              <p>EMP NAME:</p>
              <p>{values.employeeNo}</p>

              <p>AGE/SEX:</p>
              <p>{values.age} / {values.sex}</p>
            </div>
            <hr />
            <br />
            <div className="text-center">
              <h3 style={{ textDecoration: 'underline' }}>PLAIN SKIAGRAM OF CHEST PA VIEW</h3>
            </div>
            <br />
            <div className="report_content ">
              <p>Both lung fields appear normal</p>
              <p>Mediastinal shadow and hila appear normal.</p>
              <p>No evidence of pleural effusion is seen.</p>
              <p>Hearts and aorta appear normal.</p>
              <p>Domes of diaphragm appear normal.</p>
              <p>Bones under view appear normal.</p>
            </div>
            <h5 className="">COMMENTS : NO ABNORMALITY DETECTED</h5>
            <div className="footerSign mt90" style={{ textAlign: 'right' }}>
              {/* <img src="https://smhri.com/media/drSumit.png"> */}
              {/* <p class="m0">Dr.Sumit Gajera</p> */}
              {/* <p class="m0">MBBS,DMRD</p> */}
              <p className="m0">Consultant Radiologist</p>
              {/* <p class="m0">G-27675</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
)
}
export default XrayReport