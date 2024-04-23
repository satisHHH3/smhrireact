import {useState,useEffect,useCallback} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Cookies from "js-cookie"

import "./index.css"

const SystematicExamination = () => {
    const [values,setValues] = useState({
        abdomen: "",
        breathSound: "",
        cardiovascularSystem: "",
        cns: "",
        ecgReport: "",
        genitoUrinarySystem: "",
        id: "",
        otherFinding: "",
        respiratorySystem: "",
        skeletalSystem: "",
        skin: "",
        sysEmployee: ""
    })
    const {id} = useParams()

    const getSystematicData = useCallback(async () => {
        const jwt = Cookies.get('jwt_token')
        
        const url = "https://cloudconnectcampaign.com/smhri/api/systematic_examination/"
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        };
        const response = await fetch(url, options);
        if(response.ok){
            const data = await response.json()
            
            const filterObj = data.find((each) => parseInt(each.sys_employee) === parseInt(id))
            setValues({
                abdomen: filterObj.abdomen || "NAD",
            breathSound: filterObj.breath_sound || "NAD",
            cardiovascularSystem: filterObj.cardiovascular_system || "NAD",
            cns: filterObj.cns || "NAD",
            ecgReport: filterObj.ecg_report || "NAD",
            genitoUrinarySystem: filterObj.genito_urinary_system || "NAD",
            id: filterObj.id,
            otherFinding: filterObj.other_finding || "NAD",
            respiratorySystem: filterObj.respiratory_system || "NAD",
            skeletalSystem: filterObj.skeletal_system || "NAD",
            skin: filterObj.skin || "NAD",
            })
            console.log(filterObj)
        }
       
    },[id]
)

    useEffect(() => {
        getSystematicData()
    },[getSystematicData])

   const onSubmitUpdateData = async (e) => {
    e.preventDefault()
    const {id} = values
    const jwt = Cookies.get('jwt_token')
        
        const url = `https://cloudconnectcampaign.com/smhri/api/systematic_examination/${id}/`
        const userData = {
            abdomen: values.abdomen,
            breath_sound: values.breathSound,
            cardiovascular_systemx: values.cardiovascularSystem,
            cns: values.cns,
            ecg_report: values.ecgReport,
            genito_urinary_system: values.genitoUrinarySystem,
            other_finding: values.otherFinding,
            respiratory_system: values.respiratorySystem,
            skeletal_system: values.skeletalSystem,
            skin: values.skin,
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
     getSystematicData()
    console.log(request)
   }

    return(
    <form onSubmit={onSubmitUpdateData}>
    <h1>Edit Systematic Examination Test</h1>
    <label htmlFor="skin">Skin :</label>
    <input id="skin" type="text" value={values.skin} onChange={e => setValues({...values, skin: e.target.value})}/>

    <label htmlFor="ress">Respiratory System :</label>
    <input id="ress" type="text" value={values.respiratorySystem} onChange={e => setValues({...values, respiratorySystem: e.target.value})}/>

    <label htmlFor="cards">Cardiovascular system :</label>
    <input id="cards" type="text" value={values.cardiovascularSystem} onChange={e => setValues({...values, cardiovascularSystem: e.target.value})}/>

    <label htmlFor="gus">Genito urinary system :</label>
    <input id="gus" type="text" value={values.genitoUrinarySystem} onChange={e => setValues({...values, genitoUrinarySystem: e.target.value})}/>

    <label htmlFor="ss">Skeletal system :</label>
    <input id="ss" type="text" value={values.skeletalSystem} onChange={e => setValues({...values, skeletalSystem: e.target.value})}/>

    <label htmlFor="cns">Cns :</label>
    <input id="cns" type="text" value={values.cns} onChange={e => setValues({...values, cns: e.target.value})}/>

    <label htmlFor="bs">Breath sound :</label>
    <input id="bs" type="text" value={values.breathSound} onChange={e => setValues({...values, breathSound: e.target.value})}/>

    <label htmlFor="abd">Abdomen :</label>
    <input id="abd" type="text" value={values.abdomen} onChange={e => setValues({...values, abdomen: e.target.value})}/>

    <label htmlFor="of">Other Finding :</label>
    <input id="of" type="text" value={values.otherFinding} onChange={e => setValues({...values, otherFinding: e.target.value})}/>

    <label htmlFor="er">Ecg Report :</label>
    <input id="er" type="text" value={values.ecgReport} onChange={e => setValues({...values, ecgReport: e.target.value})}/>
    <button type="submit">Update</button>
</form>
)
}
export default SystematicExamination



