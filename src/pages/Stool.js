import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'js-cookie';

import 'bootstrap/dist/css/bootstrap.min.css';

const Stool = () => {
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
            <div className="div_res">
              <table cellSpacing="0px" cellPadding="0px" width="100%" style={{ fontSize: '12px' }}>
                <tbody>
                  <tr>
                    <th width="20%">Emp No</th>
                    <th width="50%">:&nbsp;*</th>
                    <th width="1%">Date</th>
                    <th width="30%">:&nbsp;19/04/2023</th>
                  </tr>
                  <tr>
                    <th width="20%">Patient's Name</th>
                    <th width="50%">:&nbsp;RABINARAYAN MAHARANA</th>
                    <th width="1%">BirthDate</th>
                    <th width="30%">:&nbsp;05/02/1997</th>
                  </tr>
                  <tr>
                    <th width="20%">Company Name</th>
                    <th width="40%">:&nbsp;SAINT GOBAIN INDIA PVT.LTD.C/O GYPROC BUSINESS</th>
                    <th width="20%">Age</th>
                    <th width="40%">:&nbsp;27 Year</th>
                  </tr>
                  <tr>
                    <th width="1%">Ticket Number</th>
                    <th width="30%">:&nbsp;SM-88</th>
                    <th width="20%">Sex</th>
                    <th width="40%">:&nbsp;Male</th>
                  </tr>
                </tbody>
              </table>
              <hr style={{ borderWidth: 'thin', borderColor: '#333' }} />
              <div align="center">
                <h3><u>STOOL REPORT</u></h3>
              </div>
              <div align="center">
                <h4>
                  <b><u>PHYSICAL EXAMINATION</u></b>
                </h4>
              </div>
              <center>
                <table cellSpacing="0px" cellPadding="0px" width="100%">
                  <tbody>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Color</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Blood</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Mucus</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Adults Warm</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Parasites</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Pus</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1</td>
                    </tr>
                  </tbody>
                </table>
              </center>
              {/* Chemical Examination */}
              <div align="center">
                <h4>
                  <b><u>CHEMICAL EXAMINATION</u></b>
                </h4>
              </div>
              <center>
                <table cellSpacing="0px" cellPadding="0px" width="100%">
                  <tbody>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Ph</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Occult Blood</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Reducing Substances</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1</td>
                    </tr>
                  </tbody>
                </table>
              </center>
              {/* Microscopic Examination */}
              <div align="center">
                <h4>
                  <b><u>MICROSCOPIC EXAMINATION</u></b>
                </h4>
              </div>
              <center>
                <table cellSpacing="0px" cellPadding="0px" width="100%">
                  <tbody>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">R.B.C.s</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1/hpf</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Pus cells</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1/hpf</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Fat Globules</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1/hpf</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Macrophages</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1/hpf</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Epithelial cell</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1/hpf</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Muscle fibers</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Vegetable cell</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Bacteria</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Cyst</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Ova</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Trophozoites</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Larva</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Yeast Cells</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1</td>
                    </tr>
                    <tr style={{ fontSize: '14px' }}>
                      <td width="20%">Starch Granules</td>
                      <td style={{ textAlign: 'left' }} width="80%">:&nbsp;1</td>
                    </tr>
                  </tbody>
                </table>
              </center>
              <hr style={{ borderWidth: 'thin', borderColor: '#333' }} />
              <table width="100%">
                <tbody>
                  <tr>
                    <td align="center">
                      <font style={{ fontSize: '13px' }}><b></b></font>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div style={{ textAlign: 'center' }}>
                <b><i><u>End of The Report</u></i></b>
              </div>
              <br />
              <div>
                <i>Note: This report is not for legal implication and purpose, confidential report only for company use.</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}
export default Stool