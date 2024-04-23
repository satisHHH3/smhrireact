import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'js-cookie';

import 'bootstrap/dist/css/bootstrap.min.css';

const VitaminD3 = () => {
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
          <div>
            <br />
            <div className="div_res">
            <table cellSpacing="0" cellPadding="0" width="100%" style={{ fontSize: '14px' }}>
                <tbody>
                  <tr>
                    <th width="20%">Emp No</th>
                    <th width="50%">:&nbsp;{values.employeeNo}</th>
                    <th width="1%">Date</th>
                    <th width="30%">:&nbsp;{values.testDate}</th>
                  </tr>
                  <tr>
                    <th width="20%">Patient's Name</th>
                    <th width="50%">:&nbsp;{values.name}</th>
                    <th width="1%">BirthDate</th>
                    <th width="30%">:&nbsp;{values.birthdate}</th>
                  </tr>
                  <tr>
                    <th width="20%">Company Name</th>
                    <th width="40%">:&nbsp;{values.listCompany}</th>
                    <th width="20%">Age</th>
                    <th width="40%">:&nbsp;{values.age} Year</th>
                  </tr>
                  <tr>
                    <th width="1%">Ticket Number</th>
                    <th width="30%">:&nbsp;{values.ticketNo}</th>
                    <th width="20%">Sex</th>
                    <th width="40%">:&nbsp;{values.sex}</th>
                  </tr>
                </tbody>
              </table>
              <hr style={{ borderWidth: 'thin', borderColor: '#333' }} />
              <div align="center">
                <h3>
                  <b><u>25-OH VITAMIN D TOTAL (VITAMIN D-3)</u></b>
                </h3>
              </div>
              <center>
                <table cellSpacing="0" cellPadding="0" width="100%" style={{ marginTop: '30px' }}>
                  <tbody>
                    <tr>
                      <th width="40%"><u>TEST</u></th>
                      <th width="14%" style={{ textAlign: 'left' }}><u>RESULT</u></th>
                      <th width="30%"><u>REFERENCE RANGE</u></th>
                      <th width="15%"><u>UNIT</u></th>
                    </tr>
                  </tbody>
                </table>
                <table cellSpacing="0" cellPadding="0" width="100%" style={{ marginTop: '30px' }}>
                  <tbody>
                      
                  </tbody>
                </table>
              </center>
              <br />
              <div style={{ fontFamily: 'Times New Roman', padding: '0px', margin: '0px' }}>
                <p style={{ fontFamily: 'Imprint MT Shadow', fontSize: '13px', padding: '0px', margin: '0px' }}>
                  Serum 25-OH Vitamin D Total :
                </p>
                <p style={{ fontFamily: 'Imprint MT Shadow', fontSize: '13px', padding: '0px', margin: '0px' }}>
                  Vegans (vegetarian people) are at risk of a Vitamin B12 (Cobalamine) deficiency.
                </p>
                <p style={{ fontFamily: 'Imprint MT Shadow', fontSize: '13px', padding: '0px', margin: '0px' }}>
                  Vitamin D is a fat soluble hormone involved in the intestinal absorption and deregulation of calcium. It is synthesized by skin when sunlight strikes bare skin.
                </p>
                <p style={{ fontFamily: 'Imprint MT Shadow', fontSize: '13px', padding: '0px', margin: '0px' }}>
                  It can also be ingested from animal sources. Vitamin D is bound to the binding protein (albumin and vitamin D binding protein) and carried to the liver.
                </p>
                <p style={{ fontFamily: 'Imprint MT Shadow', fontSize: '13px', padding: '0px', margin: '0px' }}>
                  In the liver it is transformed in to 25 hydroxy-vitamin D (calcidiol), which is the primary circulating and the most commonly measured form in serum.
                </p>
                <p style={{ fontFamily: 'Imprint MT Shadow', fontSize: '13px', padding: '0px', margin: '0px' }}>
                  Then in the kidney it is transformed in to 1,25 dihydroxy-vitamin D (calcitriol), which is the biologically active form.
                </p>
                <p style={{ fontFamily: 'Imprint MT Shadow', fontSize: '13px', padding: '0px', margin: '0px' }}>
                  Vitamin D plays a vital role in the formation and maintenance of strong and healthy bones. Vitamin D deficiency has long been associated with rickets in children and osteomalacia in adults. Long term insufficiency of calcium and vitamin D leads to osteoporosis. There have been multiple publications linking
                </p>
                <p style={{ fontFamily: 'Imprint MT Shadow', fontSize: '14px', padding: '0px', margin: '0px' }}>
                  vitamin D deficiency to several disease states, such as cancer, cardiovascular disease, diabetes, and autoimmune diseases.
                </p>
              </div>
              <div>
                <hr style={{ borderWidth: 'thin', borderColor: '#333' }} />
              </div>
              <table width="100%">
                <tbody>
                  <tr>
                    <td align="center">
                      <font style={{ fontSize: '13px' }}><b></b></font>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <div style={{ textAlign: 'center' }}>
                <b><i><u>End of The Report</u></i></b>
              </div>
              <div>
                <i>Note: This report is not for legal implication and purpose, confidential report only for company use.</i>
              </div>
              <br />
              <table cellSpacing="0px" cellPadding="0px" width="100%" style={{ marginTop: '30px', fontSize: '20px' }}>
                <tbody>
                  <tr>
                    <th style={{ paddingLeft: '72%' }}>
                      {/* <img src="https://quantum-techs.com/smhri/assets/uploads/images/signatures/mrk.png" width="170px;" /> */}
                    </th>
                  </tr>
                  <tr>
                    <th style={{ paddingLeft: '70%' }}>
                      {/* Dr. Mahesh R Kakadiya --><br><!-- M.D (PATHOLOGY), --><br><!-- Reg.No:- G - 23663 */}
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}
export default VitaminD3