import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'js-cookie';
import { toHaveFormValues } from "@testing-library/jest-dom/matchers";


const PsaReport = () => {
    
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
              <input
                type="button"
                value="Print Report"
                className="btn btn-primary"
                onClick={() => window.print()}
                id="create_print"
              />
            </div>
            <div>
              <br />
              <div className="div_res">
                <table cellspacing="0px" cellpadding="0px" width="100%" style={{ fontSize: "14px" }}>
                  <tbody>
                    <tr>
                      <th width="20%">Emp No</th>
                      <th width="50%">:&nbsp;*{values.employeeNo}</th>
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
                      <th width="40%">:&nbsp;{values.age}</th>
                    </tr>
                    <tr>
                      <th width="1%">Ticket Number</th>
                      <th width="30%">:&nbsp;{values.ticketNo}</th>
                      <th width="20%">Sex</th>
                      <th width="40%">:&nbsp;{values.sex}</th>
                    </tr>
                  </tbody>
                </table>
                <br />
                <hr />
                <div align="center">
                  <h3>
                    <b>
                      <u>PROSTATIC SPECIFIC ANTIGEN</u>
                    </b>
                  </h3>
                </div>
                <table cellspacing="0px" cellpadding="0px" width="100%" style={{ marginTop: "30px" }}>
                  <tbody>
                    <tr>
                      <th width="40%">
                        <u>TEST</u>
                      </th>
                      <th width="14%" style={{ textAlign: "left" }}>
                        <u>RESULT</u>
                      </th>
                      <th width="30%">
                        <u>REFERENCE RANGE</u>
                      </th>
                      <th width="15%">
                        <u>UNIT</u>
                      </th>
                    </tr>
                  </tbody>
                </table>
                <table cellspacing="0px" cellpadding="0px" width="100%" style={{ marginTop: "30px" }}>
                  <tbody>
                    <tr style={{ fontSize: "14px" }}></tr>
                    <tr style={{ lineHeight: "70px", fontSize: "14px" }}>
                      <td colspan="3">
                        <b>Test Method(s):</b> Fluorescence Immunoassay
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br /><br />
                <div style={{ fontFamily: "Times New Roman", padding: "0px", margin: "0px" }}>
                  <i className="icon-book"></i>
                  <p style={{ fontFamily: "Arial", fontSize: "12px", padding: "0px", margin: "0px" }}>
                    <b>NOTE :</b>
                    <br />
                  </p>
                  <p style={{ fontFamily: "Imprint MT Shadow", fontSize: "14px", padding: "0px", margin: "0px" }}>
                    *&nbsp; PSA is a useful marker available for screening, prediction of risk, diagnosis, management and
                    recurrence of prostate cancer.
                  </p>
                  <p style={{ fontFamily: "Imprint MT Shadow", fontSize: "14px", padding: "0px", margin: "0px" }}>
                    *&nbsp; Because of tissue specificity, the PSA assay is particularly useful for monitoring the success
                    of surgical prostatectomy.Complete removal of the prostate should result in an undetectable PSA level,
                    while incomplete resection of the gland might result in measurable level of PSA.
                  </p>
                  <p style={{ fontFamily: "Imprint MT Shadow", fontSize: "14px", padding: "0px", margin: "0px" }}>
                    *&nbsp;Any increase in measurable PSA after a successful radical prostatectomy would indicate prostate
                    cancer recurrence or metastasis.
                  </p>
                  <p style={{ fontFamily: "Imprint MT Shadow", fontSize: "14px", padding: "0px", margin: "0px" }}>
                    *&nbsp;Transient and modest increase of PSA may occur during radiation therapy, which should not be
                    misinterpreted as disease progression.
                  </p>
                  <p style={{ fontFamily: "Imprint MT Shadow", fontSize: "14px", padding: "0px", margin: "0px" }}>
                    *&nbsp;In Prostate cancer, there is generally an increase in the serum concentration of bound PSA and
                    corresponding decrease in unbound or free PSA. So, measurement of free PSA (fPSA) and the calculation
                    of percentage of fPSA [%fPSA=(fPSA/total PSA) x 100], which has an inverse relationship with prostate
                    cancer risk, have been used to help to differentiate BPH from prostate cancer.
                  </p>
                  <p style={{ fontFamily: "Imprint MT Shadow", fontSize: "14px", padding: "0px", margin: "0px" }}>
                    *&nbsp;Prostate cancer is typically a disease of men over age of 50 years. However, recommendations are
                    for screening for prostate cancer to begin at age 40 years and again at age 45 years, to detect
                    uncommon cases of prostate cancer before they become incurable.
                  </p>
                </div>
                <div>
                  <hr />
                </div>
                <table width="100%">
                  <tbody>
                    <tr>
                      <td align="center">
                        <font style={{ fontSize: "13px" }}><b></b></font>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ textAlign: "center" }}>
                  <b><i><u>End of The Report</u></i></b>
                </div>
                <div>
                  <i>Note: This report is not for legal implication and purpose, confidential report only for company
                    use.</i>
                </div>
                <table cellspacing="0px" cellpadding="0px" width="100%" style={{ marginTop: "30px", fontSize: "20px" }}>
                  <tbody>
                    <tr>
                      <th style={{ paddingLeft: "72%" }}>
                        {/* <img src="https://quantum-techs.com/smhri/assets/uploads/images/signatures/mrk.png" width="170px;" /> */}
                      </th>
                    </tr>
                    <tr>
                      <th style={{ paddingLeft: "70%" }}>
                        {/* Dr. Mahesh R Kakadiya --><br /><!-- M.D (PATHOLOGY), --><br /><!-- Reg.No:- G - 23663 */}
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

export default PsaReport