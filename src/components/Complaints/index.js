import {useState,useEffect,useCallback} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Cookies from "js-cookie"
import "./index.css"

const Complaints = () =>{ 
    const {id} = useParams()
    const [values,setValues] = useState({presentComplaints: '',
    occupationalComplaints: '',
    familyHealthHistory: '',
    pastHistory: '',
    allergicTo: '',
    idMarkScar: '',
    idMarkMole: ''})

    const getComplaintsData = useCallback(async () => {
       const jwt = Cookies.get('jwt_token')
        
         const url = "https://cloudconnectcampaign.com/smhri/api/complaints/"
        
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        };
        const response = await fetch(url, options);
        if(response.ok){
            const data = await response.json()
            const filterObj = data.find((each) => parseInt(each.complaints_employee) === parseInt(id))
           
           setValues({
                allergicTo: filterObj.allergic_to || "NAD",
                familyHealthHistory: filterObj.family_health_history,
                id: filterObj.id,
                idMarkMole: filterObj.id_mark_mole || "NAD",
                idMarkScar: filterObj.id_mark_scar || "NAD",
                occupationalComplaints: filterObj.occupational_complaints || "NAD",
                pastHistory: filterObj.past_history || "NAD",
                personalHealthHistory: filterObj.personal_health_history || "NAD",
                presentComplaints: filterObj.present_complaints || "--"
            })
            console.log(filterObj)
        }
    },[id]
)
    useEffect(() => {
        getComplaintsData()
    },[getComplaintsData])

    console.log(values)

    const onSubmitData = async (e) => {
        e.preventDefault()
        const {id} = values
        const jwt = Cookies.get('jwt_token')
        
        const url = `https://cloudconnectcampaign.com/smhri/api/complaints/${id}/`
        const userData = {
                allergic_to: values.allergicTo,
                family_health_history: values.familyHealthHistory,
                id: values.id,
                id_mark_mole: values.idMarkMole,
                id_mark_scar: values.idMarkScar,
                occupational_complaints: values.occupationalComplaints,
                past_history: values.pastHistory,
                personal_health_history: values.personalHealthHistory,
                present_complaints: values.presentComplaints
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
     getComplaintsData()
        
    }

    return(
    <form onSubmit={onSubmitData}>
        <h1>Edit Complaints Test</h1>
            <label htmlFor="prComplaints">Present Complaints :</label>
            <input id="prComplaints" type="text" value={values.presentComplaints} onChange={e => setValues({...values, presentComplaints: e.target.value})}/>

            <label htmlFor="opComplaints">Occuptional Complaints :</label>
            <input id="opComplaints" type="text" value={values.occupationalComplaints} onChange={e => setValues({...values, occupationalComplaints: e.target.value})}/>

            <label htmlFor="familyHistory">Family health history :</label>
            <input id="familyHistory" type="text" value={values.familyHealthHistory} onChange={e => setValues({...values, familyHealthHistory: e.target.value})}/>

            <label htmlFor="history">Past history :</label>
            <input id="history" type="text" value={values.pastHistory} onChange={e => setValues({...values, pastHistory: e.target.value})}/>

            <label htmlFor="allergic">Allergic to :</label>
            <input id="allergic" type="text" value={values.allergicTo} onChange={e => setValues({...values, allergicTo: e.target.value})}/>

            <label htmlFor="scar">Id mark scar :</label>
            <input id="scar" type="text" value={values.idMarkScar} onChange={e => setValues({...values, idMarkScar: e.target.value})}/>

            <label htmlFor="mole">Id mark mole :</label>
            <input id="mole" type="text" value={values.idMarkMole} onChange={e => setValues({...values, idMarkMole: e.target.value})}/>

            <button type="submit">Update</button>
        </form>
)}

export default Complaints