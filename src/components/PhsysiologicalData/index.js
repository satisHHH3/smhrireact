import { useState,useEffect } from "react"
import {useParams} from "react-router-dom"
import Cookies from 'js-cookie'
import "./index.css"

const PhysiologicalData = () => { 
    const [values,setValues] = useState({
        bloodPressure: "",
        chestOnExpiration: "",
        chestOnInspiration: "",
        heartSound: "",
        height: "",
        hips: "",
        phyEmployee: "",
        remarksAndAdvice: "",
        pulse: "",
        waist: "",
        waistHipRatio: "",
        weight: ""
    })
    const {id} = useParams()

   const getPhysiologicalData = async () => {
    try {
        const jwt = Cookies.get("jwt_token");
        const url = `https://cloudconnectcampaign.com/smhri/api/physiological_test/`;
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        };
        const response = await fetch(url, options);
        if (response.ok) {
            const data = await response.json();
           
            const filteredData = data.find((each) => parseInt(each.phy_employee) === parseInt(id));
            if (filteredData) {
                setValues({
                    bloodPressure: filteredData.blood_pressure || "NA",
                    chestOnExpiration: filteredData.chest_on_expiration || "NA",
                    chestOnInspiration: filteredData.chest_on_inspiration || "NA",
                    heartSound: filteredData.heart_sound || "NA",
                    height: filteredData.height || "NA",
                    hips: filteredData.hips || "NA",
                    id: filteredData.id ,
                    phyEmployee: filteredData.phy_employee || "",
                    remarksAndAdvice: filteredData.remarks_and_advice || "NA",
                    pulse: filteredData.pulse || "NA",
                    waist: filteredData.waist || "NA",
                    waistHipRatio: filteredData.waist_hip_ratio || "NA",
                    weight: filteredData.weight || "NA"
                });
            }
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    }

    useEffect(() => {
        getPhysiologicalData()
        
    },[])

    console.log(values)

    const onSubmitData = async (e) => {
         e.preventDefault()
         const jwt = Cookies.get("jwt_token");
         const {id} = values
         console.log(id)
         const url = `https://cloudconnectcampaign.com/smhri/api/physiological_test/${id}/`;

         const userData = {
            blood_pressure: values.bloodPressure,
            chest_on_expiration: values.chestOnExpiration,
            chest_on_inspiration: values.chestOnInspiration,
            heart_sound: values.heartSound,
            height: values.height,
            hips: values.hips,
            phy_employee: values.phyEmployee,
            remarks_and_advice: values.remarksAndAdvice,
            pulse: values.pulse,
            waist: values.waist,
            waist_hip_ratio: values.waistHipRatio,
            weight: values.weight
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
    }

    return(
    <form onSubmit={onSubmitData}>
    <h1>Edit Physiological Test</h1>
        <label htmlFor="height">Height :</label>
        <input id="height" type="text" value={values.height} onChange={e => setValues({...values,height: e.target.value})}/>
        
        <label htmlFor="weight">Weight :</label>
        <input id="weight" type="text" value={values.weight} onChange={e => setValues({...values,weight: e.target.value})}/>

        <label htmlFor="pulse">Pulse :</label>
        <input id="pulse" type="text" value={values.pulse} onChange={e => setValues({...values,pulse: e.target.value})}/>

        <label htmlFor="bp">Blood pressure :</label>
        <input id="bp" type="text" value={values.bloodPressure} onChange={e => setValues({...values,bloodPressure: e.target.value})}/>

        <label htmlFor="coe">Chest on expiration :</label>
        <input id="coe" type="text" value={values.chestOnExpiration} onChange={e => setValues({...values,chestOnExpiration: e.target.value})}/>

        <label htmlFor="waist">Waist :</label>
        <input id="waist" type="text" value={values.waist} onChange={e => setValues({...values,waist: e.target.value})}/>

        <label htmlFor="hips">Hips :</label>
        <input id="hips" type="text" value={values.hips} onChange={e => setValues({...values,hips: e.target.value})}/>

        <label htmlFor="whr">Waist hip ratio :</label>
        <input id="whr" type="text" value={values.waistHipRatio} onChange={e => setValues({...values,waistHipRatio: e.target.value})}/>

        <label htmlFor="raa">Remarks and Advice :</label>
        <input id="raa" type="text" value={values.remarksAndAdvice} onChange={e => setValues({...values,remarksAndAdvice: e.target.value})}/>
        <button type="submit">Update</button>
    </form>
)
}
export default PhysiologicalData