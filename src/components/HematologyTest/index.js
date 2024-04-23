import {useState,useEffect,useCallback} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Cookies from "js-cookie"
import "./index.css"

const HematologyTest = () =>{ 
    const [values,setValues] = useState({basophils: "",
    bloodGroup: "",
    eosinophils: "",
    esr: "",
    hct: "",
    hemoglobin: "",
    hlogyEmployee: "",
    id: "",
    leucocytesCount: "",
    lymphocytes: "",
    mch: "",
    mchc: "",
    mcv: "",
    monocytes: "",
    mpv: "",
    pct: "",
    pdw: "",
    peripheralSmear: "",
    plateletCount: "",
    polymorphs: "",
    rdwCv: "",
    totalWbcCount: ""})
    const {id} = useParams()

    
      const getHematologyData = useCallback(async () => {
       const jwt = Cookies.get('jwt_token')
        
         const url = "https://cloudconnectcampaign.com/smhri/api/hematology/"
        
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        };
        const response = await fetch(url, options);
        if(response.ok){
            const data = await response.json()
            
            const filterObj = data.find((each) => parseInt(each.hlogy_employee) === parseInt(id))
           setValues({basophils: filterObj.basophils || "",
           bloodGroup: filterObj.blood_group || "",
           eosinophils: filterObj.eosinophils || "",
           esr: filterObj.esr || "",
           hct: filterObj.hct || "",
           hemoglobin: filterObj.hemoglobin || "",
           hlogyEmployee: filterObj.hlogy_employee,
           id: filterObj.id,
           leucocytesCount: filterObj.leucocytes_count || "",
           lymphocytes: filterObj.lymphocytes || "",
           mch: filterObj.mch || "",
           mchc: filterObj.mchc || "",
           mcv: filterObj.mcv || "",
           monocytes: filterObj.monocytes || "",
           mpv: filterObj.mpv || "",
           pct: filterObj.pct || "",
           pdw: filterObj.pdw || "",
           peripheralSmear: filterObj.peripheral_smear || "",
           plateletCount: filterObj.platelet_count || "",
           polymorphs: filterObj.polymorphs || "",
           rdwCv: filterObj.rdw_cv || "",
           totalWbcCount: filterObj.total_wbc_count || ""})
        }
    },[id]
)
    

    useEffect(() => {
        getHematologyData()
    },[getHematologyData])
   
    const onSubmitFormData = async (e) => {
        e.preventDefault()

        const {id} = values
        const jwt = Cookies.get('jwt_token')
        
        const url = `https://cloudconnectcampaign.com/smhri/api/hematology/${id}/`

        const userData = {
            basophils: values.basophils,
            blood_group: values.bloodGroup,
            eosinophils: values.eosinophils,
            esr: values.esr,
            hct: values.hct,
            hemoglobin: values.hemoglobin,
            leucocytes_count: values.leucocytesCount,
            lymphocytes: values.lymphocytes,
            mch: values.mch,
            mchc: values.mchc,
            mcv: values.mcv,
            monocytes: values.monocytes,
            mpv: values.mpv,
            pct: values.pct,
            pdw: values.pdw,
            peripheral_smear: values.peripheralSmear,
            platelet_count: values.plateletCount,
            polymorphs: values.polymorphs,
            rdw_cv: values.rdwCv,
            total_wbc_count: values.totalWbcCount
        };

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
    getHematologyData()
    }

    console.log(values.hlogyEmployee)
    return(
    <form onSubmit={onSubmitFormData}>
        <h1>Edit Hematology Test</h1>
        <label htmlFor="bloodGroup">Blood Group (Slide/Tube Agglutination) :</label>
            <input id="bloodGroup" type="text" value={values.bloodGroup} onChange={e => setValues({...values,bloodGroup: e.target.value})}/>

            <label htmlFor="hemoglobin">Haemoglobin (Non Cyanide Analsis) :</label>
            <input id="hemoglobin" type="text" value={values.hemoglobin} onChange={e => setValues({...values,hemoglobin: e.target.value})}/>

            <label htmlFor="totalWbcCount">Total Wbc Count (Electrical Impedance + Laser) :</label>
            <input id="totalWbcCount" type="text" value={values.totalWbcCount} onChange={e => setValues({...values,totalWbcCount: e.target.value})}/>

            <label htmlFor="polymorphs">Polymorphs (Electrical Impedance + Laser + Microscopy) :</label>
            <input id="polymorphs" type="text" value={values.polymorphs} onChange={e => setValues({...values,polymorphs: e.target.value})}/>

            <label htmlFor="lymphocytes">Lymphocytes (Electrical Impedance + Laser + Microscopy) :</label>
            <input id="lymphocytes" type="text" value={values.lymphocytes} onChange={e => setValues({...values,lymphocytes: e.target.value})}/>

            <label htmlFor="eosinophils">Eosinophils (Electrical Impedance + Laser + Microscopy) :</label>
            <input id="eosinophils" type="text" value={values.eosinophils} onChange={e => setValues({...values,eosinophils: e.target.value})}/>

            <label htmlFor="monocytes">Monocytes (Electrical Impedance + Laser + Microscopy) :</label>
            <input id="monocytes" type="text" value={values.monocytes} onChange={e => setValues({...values,monocytes: e.target.value})}/>

            <label htmlFor="basophils">Basophils (Electrical Impedance + Laser + Microscopy) :</label>
            <input id="basophils" type="text" value={values.basophils} onChange={e => setValues({...values,basophils: e.target.value})}/>

            <label htmlFor="plateletCount">Platelet Count (Electrical Impedance + Laser) :</label>
            <input id="plateletCount" type="text" value={values.plateletCount} onChange={e => setValues({...values,plateletCount: e.target.value})}/>

            <label htmlFor="esr">ESR :</label>
            <input id="esr" type="text" value={values.esr} onChange={e => setValues({...values,esr: e.target.value})}/>

            <label htmlFor="hct">HCT :</label>
            <input id="hct" type="text" value={values.hct} onChange={e => setValues({...values,hct: e.target.value})}/>

            <label htmlFor="rdwCv">RDW CV :</label>
            <input id="rdwCv" type="text" value={values.rdwCv} onChange={e => setValues({...values,rdwCv: e.target.value})}/>

            <label htmlFor="pdw">PDW :</label>
            <input id="pdw" type="text" value={values.pdw} onChange={e => setValues({...values,pdw: e.target.value})}/>

            <label htmlFor="mpv">MPV :</label>
            <input id="mpv" type="text" value={values.mpv} onChange={e => setValues({...values,mpv: e.target.value})}/>

            <label htmlFor="mch">MCH :</label>
            <input id="mch" type="text" value={values.mch} onChange={e => setValues({...values,mch: e.target.value})}/>

            <label htmlFor="mchc">MCHC :</label>
            <input id="mchc" type="text" value={values.mchc} onChange={e => setValues({...values,mchc: e.target.value})}/>

            <label htmlFor="pct">PCT :</label>
            <input id="pct" type="text" value={values.pct} onChange={e => setValues({...values,pct: e.target.value})}/>

            <label htmlFor="mcv">MCV :</label>
            <input id="mcv" type="text" value={values.mcv} onChange={e => setValues({...values,mcv: e.target.value})}/>

            <label htmlFor="peripheralSmear">Peripheral smear :</label>
            <input id="peripheralSmear" type="text" value={values.peripheralSmear} onChange={e => setValues({...values,peripheralSmear: e.target.value})}/>

            <button type="submit">Update</button>
        </form>
)}

export default HematologyTest 