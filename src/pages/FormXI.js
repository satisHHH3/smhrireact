import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'js-cookie';

import 'bootstrap/dist/css/bootstrap.min.css';

const FormXI = () => {
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
        <div className="container-fluid">
        <div className="row" style={{marginLeft: '30px', marginRight: '30px'}}>
          <div className="col">
            <div className="report_header_form">
              <input type="button" value="Print Report" className="btn btn-primary" onClick={() => window.print()} id="create_print" />
            </div>
            <div className="div_res">
              <div align="center">
                <h3>FORM - XI</h3>
                <h4>[SEE RULE 233 (C)]</h4>
                Certificate of Medical Examination
              </div>
              <div className="report_content">
                <ol type="1">
                  <li>
                    Certificate Serial No: {values.employeeNo}<br />
                    Date: &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;/202<br /><br />
                    Name: {values.name}  <br />
                    Identification Marks
                    <ol type="1" style={{marginLeft: '80px'}}>
                      <li>
                        ..............................................................................
                      </li>
                      <li>
                        ..............................................................................
                      </li>
                    </ol>
                  </li>
                  <li>Fathers Name:</li>
                  <li>Sex: Male</li>
                  <li>
                    Residence <b></b> Son/Daughter Of
                    ..................................................................................
                  </li>
                  <li>
                    Date of Birth, if available: 30/11/-0001<br />
                    And/or certificate Age: 27
                  </li>
                  <li>
                    Physicals Fitness
                    <div style={{marginLeft: '80px'}}>
                      I hereby certify that I have personally examined
                      <b>RABINARAYAN MAHARANA  </b> son/daughter/wife of
                      ................................................................................
                      Residing at <b></b> who is desirous of being employed in
                      building and construction work and that his/her age as
                      nearly as can be ascertained from my examination is
                      <b>27</b> years and that. He/She is fit for employment in
                      <b>SAINT GOBAIN INDIA PVT.LTD.C/O GYPROC BUSINESS</b> as an <b></b>.
                    </div>
                  </li>
                  <li>
                    Reason for-
                    <ol type="1">
                      <li>
                        Refusal of
                        certificate...................................................................
                      </li>
                      <li>
                        Certificate being
                        revoked.......................................................................
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
              <br /><br />
              <div style={{width: '100%'}}>
                <div style={{width: '50%', float: 'left'}}>
                  Signature / Left hand Thumb<br />
                  Impression of building workers<br /><br />
                </div>
                <div style={{width: '50%', float: 'right', textAlign: 'right'}}>
                  Signature with seal<br />
                  Medical Inspector / C.M.O.
                </div>
              </div>
              <br /><br /><br /><br /><br />
              <div>
                <b>Note.
                  <ol>
                    <li>
                      Exact details of cause of physical disability should be
                      clear stated
                    </li>
                    <li>
                      Functional/productive abilities should be Stated if
                      desability is stated
                    </li>
                  </ol>
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
)
}
export default FormXI