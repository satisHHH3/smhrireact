import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'js-cookie';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';


const Form31 = () => {
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
        <div className="row">
            <div className="col">
                <div className="report_header_form">
                    <input type="button" value="Print Report" className="btn btn-primary" onClick={() => window.print()} id="create_print" />
                </div>
                <div className="div_res">
                    <div className="text-center">
                        <h3>Form No. 31</h3>
                        <p>[Prescribed under clause (10) of Schedule XI annexed to Rule 100]</p>
                        <h4>Certificate of Fitness</h4>
                    </div>
                    <br />
                    <div className="report_content flexHalf">
                        <div>
                            <ol>
                                <li>Serial No: {values.employeeNo}</li>
                                <li>Date: {values.testDate}</li>
                                <li>Name: {values.name} </li>
                                <li>Father's name: </li>
                                <li>Sex: {values.sex}</li>
                                <li>Residence: </li>
                                <br />
                                <li>Date of birth, if available and/or certified age: {values.age} years</li>
                                <br />
                                <li>Descriptive marks: MOLE ON CHEEK</li>
                                <br />
                                <li>
                                    Reason for:
                                    <ol type="I">
                                        <li>Refusal certificate.</li>
                                        <li>Certificate being revoked.</li>
                                    </ol>
                                </li>
                            </ol>
                            <br />
                            <p className="mt90">Thumb impression</p>
                            <p className="mt60">Initials of certifying<br />Surgeon</p>
                        </div>
                        <div>
                            <ul className="noListDisc">
                                <li>Serial No: SM-88</li>
                                <li>Date: 19/04/2023</li>
                                <li>I Certify that I have personally<br />examined (name): {values.name} <br />Son/daughter of …........................<br /></li>
                                <li>...............................................................</li>
                                <br />
                                <li>Residing<br />at : <br />who is desirous of being employed in<br />a factory engaged in the manufacturing<br />of ceramics or pottery</li>
                                <br />
                                <li>On the basis of these examinations I<br />hereby certify that he/she is fit to be<br />employed /continue working in the<br />above factory. His/Her descriptive<br />marks are: MOLE ON CHEEK<br /></li>
                            </ul>
                            <p className="mt90">Thumb impression</p>
                            <p className="mt60">Certifying Surgeon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
export default Form31