import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'js-cookie';

import './index.css';

const BioChemistryTest = () => {
    const { id } = useParams();
    const [values, setValues] = useState({
                alkalinePhosphatase: '',
                bloodCholestrol: '',
                bloodGroup: '',
                bloodUrea: '',
                btestEmployee: '',
                bun: '',
                chRatio: '',
                creatinine: '',
                directBilirubin: '',
                directHdl: '0',
                fastingBloodGlucose: '',
                ggt: '',
                hcv: '',
                id: '',
                indirectBilirubin: '',
                ldl: '',
                lhRatio: '',
                plcc: '',
                plcr: '',
                postPrandialBloodGlucose: '',
                psa: '',
                randomBloodGlucose: '',
                rdwSd: '',
                sgot: '',
                sgpt: '',
                totalBilirubin: '',
                totalCholesterol: '0',
                triglycerides: '0',
                vitaminb12: '',
                vitamind3: '',
                vldl: ''
    });

    const getBioChemistryTestData = async () => {
        const jwt = Cookies.get('jwt_token');

        const url = 'https://cloudconnectcampaign.com/smhri/api/blood_test/';

        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        };
        const response = await fetch(url, options);

        if (response.ok) {
            const data = await response.json();
            
            const filterData = data.find((each) => parseInt(each.btest_employee) === parseInt(id));
            setValues({ alkalinePhosphatase: filterData.alkaline_phosphatase,
                bloodCholestrol: filterData.blood_cholestrol,
                bloodGroup: filterData.blood_group,
                bloodUrea: filterData.blood_urea,
                btestEmployee: filterData.btest_employee,
                bun: filterData.bun,
                chRatio: filterData.ch_ratio,
                creatinine: filterData.creatinine,
                directBilirubin: filterData.direct_bilirubin,
                directHdl: filterData.direct_hdl,
                fastingBloodGlucose: filterData.fasting_blood_glucose,
                ggt: filterData.ggt,
                hcv: filterData.hcv,
                id: filterData.id,
                indirectBilirubin: filterData.indirect_bilirubin,
                ldl: filterData.ldl,
                lhRatio: filterData.lh_ratio,
                plcc: filterData.plcc,
                plcr: filterData.plcr,
                postPrandialBloodGlucose: filterData.post_prandial_blood_glucose,
                psa: filterData.psa,
                randomBloodGlucose: filterData.random_blood_glucose,
                rdwSd: filterData.rdw_sd,
                sgot: filterData.sgot,
                sgpt: filterData.sgpt,
                totalBilirubin: filterData.total_bilirubin,
                totalCholesterol: filterData.total_cholesterol,
                triglycerides: filterData.triglycerides,
                vitaminb12: filterData.vitaminb12,
                vitamind3: filterData.vitamind3,
                vldl: filterData.vldl});
            console.log(filterData);
        }
    };

    useEffect(() => {
        getBioChemistryTestData();
    }, []);

    console.log(values.bloodGroup);

    const onSubmitUpdateData = async (e) => {
        e.preventDefault()

        const {id} = values
        const jwt = Cookies.get('jwt_token')
        
        const url = `https://cloudconnectcampaign.com/smhri/api/blood_test/${id}/`
        const userData = {
                alkaline_phosphatase: values.alkalinePhosphatase,
                blood_cholestrol: values.bloodCholestrol,
                blood_group: values.bloodGroup,
                blood_urea: values.bloodUrea,
                btest_employee: values.btestEmployee,
                bun: values.bun,
                ch_ratio: values.chRatio,
                creatinine: values.creatinine,
                direct_bilirubin: values.directBilirubin,
                direct_hdl: values.directHdl,
                fasting_blood_glucose: values.fastingBloodGlucose,
                ggt: values.ggt,
                hcv: values.hcv,
                indirect_bilirubin: values.indirectBilirubin,
                ldl: values.ldl,
                lh_ratio: values.lhRatio,
                plcc: values.plcc,
                plcr: values.plcr,
                post_prandial_blood_glucose: values.postPrandialBloodGlucose,
                psa: values.psa,
                random_blood_glucose: values.randomBloodGlucose,
                rdw_sd: values.rdwSd,
                sgot: values.sgot,
                sgpt: values.sgpt,
                total_bilirubin: values.totalBilirubin,
                total_cholesterol: values.totalCholesterol,
                triglycerides: values.triglycerides,
                vitaminb12: values.vitaminb12,
                vitamind3: values.vitamind3,
                vldl: values.vldl
    }

        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${jwt}`
            },
            body: JSON.stringify(userData)
        };

     const request = await fetch(url,options)
     console.log(request)
     getBioChemistryTestData()
    }

    const onClickCalculateVldl = () => {
        const {triglycerides} = values 
        console.log(triglycerides)
        if(triglycerides === null){
            alert("Please enter Triglycerides value")
        }
        else{
            const vldlValue = parseFloat(triglycerides) / 5
            setValues({...values,vldl: vldlValue.toFixed(2)})
        }
    }

    const onClickCalculateLdl = () => {
        const {triglycerides,directHdl,totalCholesterol} = values 
        if(triglycerides && directHdl && totalCholesterol){
            const ldlValue = parseFloat(totalCholesterol) - parseFloat(directHdl) - (parseFloat(triglycerides) / 5);

            setValues({...values,ldl: ldlValue.toFixed(2)})
        }else{
            alert("Please enter Total Cholesterol, Direct HDL, VLDL value")
            const ldlValue = parseFloat(totalCholesterol) - parseFloat(directHdl) - (parseFloat(triglycerides) / 5);
            console.log(directHdl)
            setValues({...values,ldl: ldlValue.toFixed(2)})
        }
       
    }

    const onClickChRatio = () => {
        const {directHdl,totalCholesterol} = values 
        if (totalCholesterol && directHdl) {
            const chRatioValue = parseFloat(totalCholesterol) / parseFloat(directHdl);
            setValues({...values,chRatio: chRatioValue.toFixed(2)}) 
        }
        else{
            alert("Please enter Total Cholesterol, Direct HDL value")
        }
    }

    const onClickLhRatio = () => {
        const {ldl,directHdl} = values 
        if (ldl && directHdl) {
            const ratio = parseFloat(ldl) / parseFloat(directHdl);
            setValues({...values,lhRatio: ratio.toFixed(2)}) 
             
        }
        else{
            alert("Please enter LDL, Direct HDL value")
        }
    }

    const onClickBun = () => {
        const {bloodUrea} = values 
        if (bloodUrea !== null) {
            const ratio = parseFloat(bloodUrea) / 2.14;
            setValues({...values,bun: ratio.toFixed(2)}) 
             
        }
        else{
            alert("Please enter Blood Urea value")
        }
    }

     return (
        <form onSubmit={onSubmitUpdateData}>
            <h1>Blood Test</h1>
            <label htmlFor="bloodGroup">Blood Group :</label>
            <input id="bloodGroup" type="text" value={values.bloodGroup || ''} onChange={(e) => setValues({...values, bloodGroup: e.target.value})} />

            <label htmlFor="creatinine">Creatinine (Jaffe Without Compensation) :</label>
            <input id="creatinine" type="text" value={values.creatinine || ''} onChange={(e) => setValues({...values, creatinine: e.target.value})} />

            <label htmlFor="bloodUrea">Blood Urea (Urease UV) :</label>
            <input id="bloodUrea" type="text" value={values.bloodUrea || ''} onChange={(e) => setValues({...values, bloodUrea: e.target.value})} />

            <label htmlFor="fastingBloodGlucose">Fasting Blood Glucose (GOD PAP) :</label>
            <input id="fastingBloodGlucose" type="text" value={values.fastingBloodGlucose || ''} onChange={(e) => setValues({...values, fastingBloodGlucose: e.target.value})} />

            <label htmlFor="randomBloodGlucose">Random blood glucose :</label>
            <input id="randomBloodGlucose" type="text" value={values.randomBloodGlucose || ''} onChange={(e) => setValues({...values, randomBloodGlucose: e.target.value})} />

            <label htmlFor="postPrandialBloodGlucose">Post prandial blood glucose :</label>
            <input id="postPrandialBloodGlucose" type="text" value={values.postPrandialBloodGlucose || ''} onChange={(e) => setValues({...values, postPrandialBloodGlucose: e.target.value})} />

            <label htmlFor="totalBilirubin">Total Bilirubin (DCA) :</label>
            <input id="totalBilirubin" type="text" value={values.totalBilirubin || ''} onChange={(e) => setValues({...values, totalBilirubin: e.target.value})} />

            <label htmlFor="directBilirubin">direct Bilirubin (Calculated) :</label>
            <input id="directBilirubin" type="text" value={values.directBilirubin || ''} onChange={(e) => setValues({...values, directBilirubin: e.target.value})} />

            <label htmlFor="indirectBilirubin">Indirect Bilirubin (Calculated) :</label>
            <input id="indirectBilirubin" type="text" value={values.indirectBilirubin || ''} onChange={(e) => setValues({...values, indirectBilirubin: e.target.value})} />

            <label htmlFor="sgpt">SGPT (IFCC Without PSP) :</label>
            <input id="sgpt" type="text" value={values.sgpt || ''} onChange={(e) => setValues({...values, sgpt: e.target.value})} />

            <label htmlFor="sgot">SGOT (IFCC Without PSP) :</label>
            <input id="sgot" type="text" value={values.sgot || ''} onChange={(e) => setValues({...values, sgot: e.target.value})} />

            <label htmlFor="alkalinePhosphatase">Alkaline phosphatase :</label>
            <input id="alkalinePhosphatase" type="text" value={values.alkalinePhosphatase || ''} onChange={(e) => setValues({...values, alkalinePhosphatase: e.target.value})} />

            <label htmlFor="ggt">GGT :</label>
            <input id="ggt" type="text" value={values.ggt || ''} onChange={(e) => setValues({...values, ggt: e.target.value})} />

            <label htmlFor="totalCholesterol">Total Cholesterol (CHOD PAP) :</label>
            <input id="totalCholesterol" type="text" value={values.totalCholesterol || ''} onChange={(e) => setValues({...values, totalCholesterol: e.target.value})} />

            <label htmlFor="triglycerides">Triglycerides(GPO PAP) :</label>
            <input id="triglycerides" type="text" value={values.triglycerides || ''} onChange={(e) => setValues({...values, triglycerides: e.target.value})} />

            <label htmlFor="directHdl">Direct HDL (Enzymatic) :</label>
            <input id="directHdl" type="text" value={values.directHdl || ''} onChange={(e) => setValues({...values, directHdl: e.target.value})} />

            <label htmlFor="vldl">VLDL (Calculated) :</label>
            <input id="vldl" type="text" value={values.vldl || '0.00'}  onChange={(e) => setValues({...values, vldl: e.target.value})}/>

            <button type="button" className="bio-chemistry-test-button" onClick={onClickCalculateVldl}>
                Calculate VLDL
            </button>

            <label htmlFor="ldl">LDL (Calculated) :</label>
            <input id="ldl" type="text" value={values.ldl || '0.00'} onChange={(e) => setValues({...values, ldl: e.target.value})} />

            <button type="button" className="bio-chemistry-test-button" onClick={onClickCalculateLdl}>
                Calculate LDL
            </button>

            <label htmlFor="chRatio">C/H Ratio (Calculated) :</label>
            <input id="chRatio" type="text" value={values.chRatio || '0.00'} onChange={(e) => setValues({...values, chRatio: e.target.value})} />

            <button type="button" className="bio-chemistry-test-button" onClick={onClickChRatio}>
                Calculate C/H Ratio
            </button>

            <label htmlFor="lhRatio">L/H Ratio (Calculated) :</label>
            <input id="lhRatio" type="text" value={values.lhRatio || '0.00'} onChange={(e) => setValues({...values, lhRatio: e.target.value})} />

            <button type="button" className="bio-chemistry-test-button" onClick={onClickLhRatio}>
                Calculate L/H Ratio
            </button>

            <label htmlFor="rdwSd">RDW SD :</label>
            <input id="rdwSd" type="text" value={values.rdwSd || ''} onChange={(e) => setValues({...values, rdwSd: e.target.value})} />

            <label htmlFor="plcc">PLCC :</label>
            <input id="plcc" type="text" value={values.plcc || ''} onChange={(e) => setValues({...values, plcc: e.target.value})} />

            <label htmlFor="vitaminb12">VITAMIN B-12 (Cobalamine) :</label>
            <input id="vitaminb12" type="text" value={values.vitaminb12 || ''} onChange={(e) => setValues({...values, vitaminb12: e.target.value})} />

            <label htmlFor="vitamind3">25-OH Vitamin D Total :</label>
            <input id="vitamind3" type="text" value={values.vitamind3 || ''} onChange={(e) => setValues({...values, vitamind3: e.target.value})} />

            <label htmlFor="hcv">HCV Antibody :</label>
            <input id="hcv" type="text" value={values.hcv || ''} onChange={(e) => setValues({...values, hcv: e.target.value})} />

            <label htmlFor="psa">PSA (Prostate Specific Antigen) :</label>
            <input id="psa" type="text" value={values.psa || ''} onChange={(e) => setValues({...values, psa: e.target.value})} />

            <label htmlFor="bun">BUN :</label>
            <input id="bun" type="text" value={values.bun || '0.00'} onChange={(e) => setValues({...values, bun: e.target.value})} />

            <button type="button" className="bio-chemistry-test-button" onClick={onClickBun}>
                Calculate BUN
            </button>

            <button type="submit">Update</button>
        </form>
    );
};

export default BioChemistryTest;
