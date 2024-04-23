import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'js-cookie';

import 'bootstrap/dist/css/bootstrap.min.css';

const MedicalCert = () => {
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
      <div className="container">
            <div className="row">
                <div className="col">
                    <div className="report_header_form">
                        <input type="button" value="Print Report" className="btn btn-primary" onClick={() => window.print()} id="create_print" />
                    </div>

                    <div className="div_res" style={{ marginTop: '130px' }}>
                        <div className="report_content">
                            <div align="center"><b><u><h3>MEDICAL FITNESS CERTIFICATE</h3></u></b><b><h4>This Certificate is issued to:</h4></b></div>
                            <table style={{ width: '100%', tableLayout: 'fixed', fontSize: '1em' }}>
                                <colgroup>
                                    <col width="30%" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td width="50%">NAME</td>
                                        <td>: {values.name}</td>
                                    </tr>
                                    <tr>
                                        <td>AGE</td>
                                        <td>: {values.name}</td>
                                    </tr>
                                    <tr>
                                        <td>DATE OF BIRTH</td>
                                        <td>: {values.birthdate}</td>
                                    </tr>
                                    <tr>
                                        <td>JOBNATURE/OCCUPATION</td>
                                        <td>:JR.ENGINEER PRODUCTION</td>
                                    </tr>
                                    <tr>
                                        <td>ADDRESS</td>
                                        <td>:&nbsp;&nbsp;&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>COMPANY</td>
                                        <td>: {values.listCompany}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <br />
                        <div style={{ textAlign: 'justify', fontSize: '1.2em' }}>
                            <p>
                                This is to certify that I have personally examined the candidate as mentioned above. Based on the type / nature of his job requirements, medical checkup is carried out. I certify that the above-mentioned person, whose identification marks are <b>MOLE ON CHEEK</b> and who is desirous of being employed as mentioned above; is medically <b>EMPLOYEE IS MEDICALLY FIT</b>
                                <br /><br />
                                <b>PLACE: BHARUCH</b>
                            </p>
                            <p>&nbsp;</p>
                            <p>
                                <img src="https://quantum-techs.com/smhri/assets/uploads/images/signatures/rpl5.jpeg" width="170px" />
                            </p>
                            <p>
                                <b><br />
                                    DR. R.I.PARMAR <br />
                                    (M.D.C.I.H.) <br />
                                    Reg. No:- G-8096
                                </b>
                            </p>
                        </div>
                        <br /><br />
                    </div>
                </div>
            </div>
        </div>
)
}
export default MedicalCert