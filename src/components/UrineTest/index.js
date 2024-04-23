import {useState,useEffect,useCallback} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Cookies from "js-cookie"

import "./index.css"

const UrineTest = () => {
    const [values,setValues] = useState({acetone: "",
    albumin: "",
    amorphousDeposit: "",
    bacteria: "",
    bilePigments: "",
    bileSalts: "",
    casts: "",
    colour: "",
    crystais: "",
    crystals: "",
    deposit: "",
    epiCells: "",
    epithelialCells: "",
    id: "",
    material: "",
    phReaction: "",
    pusCells: "",
    rbc: "",
    redBloodCells: "",
    spGravity: "",
    sugar: "",
    transparency: "",
    trichomonas: "",
    urineEmployee: "",
    urineReport: "",
    urobilinogen: "",
    volume: "",
    yeastCells: ""
})
    const {id} = useParams() 

    const getUrineTestData = useCallback(async () => {
        const jwt = Cookies.get('jwt_token')
         
          const url = "https://cloudconnectcampaign.com/smhri/api/urine_examination/"
         
         const options = {
             method: "GET",
             headers: {
                 Authorization: `Bearer ${jwt}`
             }
         };
         const response = await fetch(url, options);
         if(response.ok){
             const data = await response.json()
             
             const filterObj = data.find((each) => parseInt(each.urine_employee) === parseInt(id))
            setValues({
                acetone: filterObj.acetone,
                albumin: filterObj.albumin,
                amorphousDeposit: filterObj.amorphous_deposit,
                bacteria: filterObj.bacteria,
                bilePigments: filterObj.bile_pigments,
                bileSalts: filterObj.bile_salts,
                casts: filterObj.casts,
                colour: filterObj.colour,
                crystais: filterObj.crystais,
                crystals: filterObj.crystals,
                deposit: filterObj.deposit,
                epiCells: filterObj.epi_cells,
                epithelialCells: filterObj.epithelial_cells,
                id: filterObj.id,
                material: filterObj.material,
                phReaction: filterObj.ph_reaction,
                pusCells: filterObj.pus_cells,
                rbc: filterObj.rbc,
                redBloodCells: filterObj.red_blood_cells,
                spGravity: filterObj.sp_gravity,
                sugar: filterObj.sugar,
                transparency: filterObj.transparency,
                trichomonas: filterObj.trichomonas,
                urineEmployee: filterObj.urine_employee,
                urineReport: filterObj.urine_report,
                urobilinogen: filterObj.urobilinogen,
                volume: filterObj.volume,
                yeastCells: filterObj.yeast_cells})
             console.log(filterObj)
         }
     },[id]
 )

 useEffect(() => {
    getUrineTestData()
},[getUrineTestData])

const onSubmitData = async (e) => {
    e.preventDefault()
    const {id} = values
    const jwt = Cookies.get('jwt_token')
    
    const url = `https://cloudconnectcampaign.com/smhri/api/urine_examination/${id}/`
    const userData = {
            acetone: values.acetone,
            albumin: values.albumin,
            amorphous_deposit: values.amorphousDeposit,
            bacteria: values.bacteria,
            bile_pigments: values.bilePigments,
            bile_salts: values.bileSalts,
            casts: values.casts,
            colour: values.colour,
            crystais: values.crystais,
            crystals: values.crystals,
            deposit: values.deposit,
            epi_cells: values.epiCells,
            epithelial_cells: values.epithelialCells,
            material: values.material,
            ph_reaction: values.phReaction,
            pus_cells: values.pusCells,
            rbc: values.rbc,
            red_blood_cells: values.redBloodCells,
            sp_gravity: values.spGravity,
            sugar: values.sugar,
            transparency: values.transparency,
            trichomonas: values.trichomonas,
            urine_employee: values.urineEmployee,
            urine_report: values.urineReport,
            urobilinogen: values.urobilinogen,
            volume: values.volume,
            yeast_cells: values.yeastCells
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
 getUrineTestData()
    
}


    return(
   <form onSubmit={onSubmitData}>
  <h1>Edit Urine R/M Test</h1>
  <label htmlFor="rbc">Red blood cells :</label>
  <input id="rbc" type="text" value={values.rbc || ""} onChange={e => setValues({...values,rbc: e.target.value})}/>

  <label htmlFor="epiCells">Epithelial cells :</label>
  <input id="epiCells" type="text" value={values.epiCells || ""} onChange={e => setValues({...values,epiCells: e.target.value})}/>

  <label htmlFor="urineReport">Urine report :</label>
  <input id="urineReport" type="text" value={values.urineReport || ""} onChange={e => setValues({...values,urineReport: e.target.value})}/>

  <label htmlFor="crystals">Crystals :</label>
  <input id="crystals" type="text" value={values.crystals || ""} onChange={e => setValues({...values,crystals: e.target.value})}/>

  <label htmlFor="material">Material :</label>
  <input id="material" type="text" value={values.material || ""} onChange={e => setValues({...values,material: e.target.value})}/>

  <label htmlFor="volume">Volume :</label>
  <input id="volume" type="text" value={values.volume || ""} onChange={e => setValues({...values,volume: e.target.value})}/>

  <label htmlFor="transparency">Transparency :</label>
  <input id="transparency" type="text" value={values.transparency || ""} onChange={e => setValues({...values,transparency: e.target.value})}/>

  <label htmlFor="deposit">Deposit :</label>
  <input id="deposit" type="text" value={values.deposit || ""} onChange={e => setValues({...values,deposit: e.target.value})}/>

  <label htmlFor="colour">Colour :</label>
  <input id="colour" type="text" value={values.colour || ""} onChange={e => setValues({...values,colour: e.target.value})}/>

  <label htmlFor="spGravity">Sp gravity :</label>
  <input id="spGravity" type="text" value={values.spGravity || ""} onChange={e => setValues({...values,spGravity: e.target.value})}/>

  <label htmlFor="phReaction">Ph reaction :</label>
  <input id="phReaction" type="text" value={values.phReaction || ""} onChange={e => setValues({...values,phReaction: e.target.value})}/>

  <label htmlFor="pusCells">Pus cells :</label>
  <input id="pusCells" type="text" value={values.pusCells || ""} onChange={e => setValues({...values,pusCells: e.target.value})}/>

  <label htmlFor="casts">Casts :</label>
  <input id="casts" type="text" value={values.casts || ""} onChange={e => setValues({...values,casts: e.target.value})}/>

  <label htmlFor="crystals">Crystals :</label>
  <input id="crystals" type="text" value={values.crystals || ""} onChange={e => setValues({...values,crystals: e.target.value})}/>

  <label htmlFor="bacteria">Bacteria :</label>
  <input id="bacteria" type="text" value={values.bacteria || ""} onChange={e => setValues({...values,bacteria: e.target.value})}/>

  <label htmlFor="yeastCells">Yeast cells :</label>
  <input id="yeastCells" type="text" value={values.yeastCells || ""} onChange={e => setValues({...values,yeastCells: e.target.value})}/>

  <label htmlFor="trichomonas">Trichomonas :</label>
  <input id="trichomonas" type="text" value={values.trichomonas || ""} onChange={e => setValues({...values,trichomonas: e.target.value})}/>

  <label htmlFor="amorphousDeposit">Amorphous deposit :</label>
  <input id="amorphousDeposit" type="text" value={values.amorphousDeposit || ""} onChange={e => setValues({...values,amorphousDeposit: e.target.value})}/>

  <label htmlFor="albumin">Albumin :</label>
  <input id="albumin" type="text" value={values.albumin || ""} onChange={e => setValues({...values,albumin: e.target.value})}/>

  <label htmlFor="sugar">Sugar :</label>
  <input id="sugar" type="text" value={values.sugar || ""} onChange={e => setValues({...values,sugar: e.target.value})}/>

  <label htmlFor="acetone">Acetone :</label>
  <input id="acetone" type="text" value={values.acetone || ""} onChange={e => setValues({...values,acetone: e.target.value})}/>

  <label htmlFor="bilePigments">Bile pigments :</label>
  <input id="bilePigments" type="text" value={values.bilePigments || ""} onChange={e => setValues({...values,bilePigments: e.target.value})}/>

  <label htmlFor="bileSalts">Bile salts :</label>
  <input id="bileSalts" type="text" value={values.bileSalts || ""} onChange={e => setValues({...values,bileSalts: e.target.value})}/>

  <label htmlFor="urobilinogen">Urobilinogen :</label>
  <input id="urobilinogen" type="text" value={values.urobilinogen || ""} onChange={e => setValues({...values,urobilinogen: e.target.value})}/>

  <button type="submit">Update</button>
</form>
)
}
export default UrineTest 