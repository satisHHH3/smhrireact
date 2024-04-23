import {useState,useEffect,useCallback} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Cookies from "js-cookie"

import "./index.css"

const BloodTest = () =>{ 
    const [values,setValues] = useState({})
    const {id} = useParams()

    const getBloodTestData = useCallback(async () => {
        const jwt = Cookies.get('jwt_token')
         
          const url = "https://cloudconnectcampaign.com/smhri/api/other_tests/"
         
         const options = {
             method: "GET",
             headers: {
                 Authorization: `Bearer ${jwt}`
             }
         };
         const response = await fetch(url, options);
         if(response.ok){
             const data = await response.json()
             
             const filterObj = data.find((each) => parseInt(each.othertest_employee) === parseInt(id))
            
            setValues({
               acidFastBacilli: filterObj.acid_fast_bacilli,
               agRatio: filterObj.ag_ratio,
               avgBloodGlucoseLevel: filterObj.avg_blood_glucose_level,
               gppd: filterObj.gppd,
               hba1c: filterObj.hba1c,
               hbsag: filterObj.hbsag,
               hivMethod: filterObj.hiv_method,
               hivRemark: filterObj.hiv_remark,
               hivResult: filterObj.hiv_result,
               hsCrp: filterObj.hs_crp,
               id: filterObj.id,
               othertestEmployee: filterObj.othertest_employee,
               sAlbuminBcg: filterObj.s_albumin_bcg,
               sGlobulin: filterObj.s_globulin,
               sProteinTotal: filterObj.s_protein_total,
               serumCholinesterase: filterObj.serum_cholinesterase,
               stoolAdultsWarm: filterObj.stool_adults_warm,
               stoolBacteria: filterObj.stool_bacteria,
               stoolBlood: filterObj.stool_blood,
               stoolColor: filterObj.stool_color,
               stoolCyst: filterObj.stool_cyst,
               stoolEpithelialCell: filterObj.stool_epithelial_cell,
               stoolFatGlobules: filterObj.stool_fat_globules,
               stoolLarva: filterObj.stool_larva,
               stoolMacrophages: filterObj.stool_macrophages,
               stoolMucus: filterObj.stool_mucus,
               stoolMuscleFibers: filterObj.stool_muscle_fibers,
               stoolOccultBlood: filterObj.stool_occult_blood,
               stoolOva: filterObj.stool_ova,
               stoolParasites: filterObj.stool_parasites,
               stoolPh: filterObj.stool_ph,
               stoolPus: filterObj.stool_pus,
               stoolPuscells: filterObj.stool_puscells,
               stoolRbcs: filterObj.stool_rbcs,
               stoolReducingSubstances: filterObj.stool_reducing_substances,
               stoolStarchGranules: filterObj.stool_starch_granules,
               stoolTrophozoites: filterObj.stool_trophozoites,
               stoolVegetableCell: filterObj.stool_vegetable_cell,
               stoolYeastCells: filterObj.stool_yeast_cells,
               thyroidT3: filterObj.thyroid_t3,
               thyroidT4: filterObj.thyroid_t4,
               thyroidTsh: filterObj.thyroid_tsh,
               uricAcid: filterObj.uric_acid,
               vdrl: filterObj.vdrl

             })
             console.log(data)
         }
     },[id]
 )

    useEffect(() => {
          getBloodTestData()
    },[getBloodTestData])

    const onSubmitData = async (e) => {
        e.preventDefault()
        const {id} = values
        const jwt = Cookies.get('jwt_token')
        
        const url = `https://cloudconnectcampaign.com/smhri/api/other_tests/${id}/`
        const userData = {
            "acid_fast_bacilli": values.acidFastBacilli,
            "ag_ratio": values.agRatio,
            "avg_blood_glucose_level": values.avgBloodGlucoseLevel,
            "gppd": values.gppd,
            "hba1c": values.hba1c,
            "hbsag": values.hbsag,
            "hiv_method": values.hivMethod,
            "hiv_remark": values.hivRemark,
            "hiv_result": values.hivResult,
            "hs_crp": values.hsCrp,
            "id": values.id,
            "othertest_employee": values.othertestEmployee,
            "s_albumin_bcg": values.sAlbuminBcg,
            "s_globulin": values.sGlobulin,
            "s_protein_total": values.sProteinTotal,
            "serum_cholinesterase": values.serumCholinesterase,
            "stool_adults_warm": values.stoolAdultsWarm,
            "stool_bacteria": values.stoolBacteria,
            "stool_blood": values.stoolBlood,
            "stool_color": values.stoolColor,
            "stool_cyst": values.stoolCyst,
            "stool_epithelial_cell": values.stoolEpithelialCell,
            "stool_fat_globules": values.stoolFatGlobules,
            "stool_larva": values.stoolLarva,
            "stool_macrophages": values.stoolMacrophages,
            "stool_mucus": values.stoolMucus,
            "stool_muscle_fibers": values.stoolMuscleFibers,
            "stool_occult_blood": values.stoolOccultBlood,
            "stool_ova": values.stoolOva,
            "stool_parasites": values.stoolParasites,
            "stool_ph": values.stoolPh,
            "stool_pus": values.stoolPus,
            "stool_puscells": values.stoolPuscells,
            "stool_rbcs": values.stoolRbcs,
            "stool_reducing_substances": values.stoolReducingSubstances,
            "stool_starch_granules": values.stoolStarchGranules,
            "stool_trophozoites": values.stoolTrophozoites,
            "stool_vegetable_cell": values.stoolVegetableCell,
            "stool_yeast_cells": values.stoolYeastCells,
            "thyroid_t3": values.thyroidT3,
            "thyroid_t4": values.thyroidT4,
            "thyroid_tsh": values.thyroidTsh,
            "uric_acid": values.uricAcid,
            "vdrl": values.vdrl
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
    getBloodTestData()    
    }



     /*  
const getBloodTestData = useCallback(async () => {
       const jwt = Cookies.get('jwt_token')
        
         const url = "https://cloudconnectcampaign.com/smhri/api/blood_test/"
        
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
   
    console.log(values)

    const onSubmitData = async (e) => {
        e.preventDefault()
        const {id} = values
        const jwt = Cookies.get('jwt_token')
        
        const url = `https://cloudconnectcampaign.com/smhri/api/other_tests/${id}/`
        const userData = {
                acetone: filter_obj.acetone,
                albumin: filter_obj.albumin,
                amorphous_deposit: filter_obj.amorphousDeposit,
                bacteria: filter_obj.bacteria,
                bile_pigments: filter_obj.bilePigments,
                bile_salts: filter_obj.bileSalts,
                casts: filter_obj.casts,
                colour: filter_obj.colour,
                crystais: filter_obj.crystais,
                crystals: filter_obj.crystals,
                deposit: filter_obj.deposit,
                epi_cells: filter_obj.epiCells,
                epithelial_cells: filter_obj.epithelialCells,
                material: filter_obj.material,
                ph_reaction: filter_obj.phReaction,
                pus_cells: filter_obj.pusCells,
                rbc: filter_obj.rbc,
                red_blood_cells: filter_obj.redBloodCells,
                sp_gravity: filter_obj.spGravity,
                sugar: filter_obj.sugar,
                transparency: filter_obj.transparency,
                trichomonas: filter_obj.trichomonas,
                urine_employee: filter_obj.urineEmployee,
                urine_report: values.urineReport,
                urobilinogen: filter_obj.urobilinogen,
                volume: filter_obj.volume,
                yeast_cells: filter_obj.yeastCells
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


    */

    return(
        <form onSubmit={onSubmitData}>
        <h1>Edit Other Test</h1>
        <label htmlFor="Uric_acid">Uric acid :</label>
        <input id="Uric_acid" type="text" value={values.uricAcid || ""} onChange={e => setValues({...values, uricAcid: e.target.value})}/>
    
        <label htmlFor="Serum_cholinesterase">Serum cholinesterase :</label>
        <input id="Serum_cholinesterase" type="text" value={values.serumCholinesterase || ""} onChange={e => setValues({...values, serumCholinesterase: e.target.value})}/>
    
        <label htmlFor="Hs_crp">Hs crp :</label>
        <input id="Hs_crp" type="text" value={values.hsCrp || ""} onChange={e => setValues({...values, hsCrp: e.target.value})}/>
    
        <label htmlFor="Gppd">Gppd :</label>
        <input id="Gppd" type="text" value={values.gppd || ""} onChange={e => setValues({...values, gppd: e.target.value})}/>
    
        <label htmlFor="Material">Material :</label>
        <input id="Material" type="text" value={values.material || ""} onChange={e => setValues({...values, material: e.target.value})}/>
    
        <label htmlFor="Hba1c">Hba1c :</label>
        <input id="Hba1c" type="text" value={values.hba1c || ""} onChange={e => setValues({...values, hba1c: e.target.value})}/>
    
        <label htmlFor="Avg_blood_glucose_level">Avg blood glucose level :</label>
        <input id="Avg_blood_glucose_level" type="text" value={values.avgBloodGlucoseLevel || ""} onChange={e => setValues({...values, avgBloodGlucoseLevel: e.target.value})}/>
    
        <label htmlFor="Hbsag">Hbsag :</label>
        <input id="Hbsag" type="text" value={values.hbsag || ""} onChange={e => setValues({...values, hbsag: e.target.value})}/>
    
        <label htmlFor="Hiv_result">Hiv result :</label>
        <input id="Hiv_result" type="text" value={values.hivResult || ""} onChange={e => setValues({...values, hivResult: e.target.value})}/>
    
        <label htmlFor="Hiv_method">Hiv method :</label>
        <input id="Hiv_method" type="text" value={values.hivMethod || ""} onChange={e => setValues({...values, hivMethod: e.target.value})}/>
    
        <label htmlFor="Hiv_remark">Hiv remark :</label>
        <input id="Hiv_remark" type="text" value={values.hivRemark || ""} onChange={e => setValues({...values, hivRemark: e.target.value})}/>
    
        <label htmlFor="S_protein_total">S protein total :</label>
        <input id="S_protein_total" type="text" value={values.sProteinTotal || ""} onChange={e => setValues({...values, sProteinTotal: e.target.value})}/>
    
        <label htmlFor="S_albumin_bcg">S albumin bcg :</label>
        <input id="S_albumin_bcg" type="text" value={values.sAlbuminBcg || ""} onChange={e => setValues({...values, sAlbuminBcg: e.target.value})}/>
    
        <label htmlFor="S_globulin">S globulin :</label>
        <input id="S_globulin" type="text" value={values.sGlobulin || ""} onChange={e => setValues({...values, sGlobulin: e.target.value})}/>
    
        <label htmlFor="Acid_fast_bacilli">Acid fast bacilli :</label>
        <input id="Acid_fast_bacilli" type="text" value={values.acidFastBacilli || ""} onChange={e => setValues({...values, acidFastBacilli: e.target.value})}/>
    
        <label htmlFor="Stool_color">Stool color :</label>
        <input id="Stool_color" type="text" value={values.stoolColor || ""} onChange={e => setValues({...values, stoolColor: e.target.value})}/>
    
        <label htmlFor="Stool_blood">Stool blood :</label>
        <input id="Stool_blood" type="text" value={values.stoolBlood || ""} onChange={e => setValues({...values, stoolBlood: e.target.value})}/>
    
        <label htmlFor="Stool_mucus">Stool mucus :</label>
        <input id="Stool_mucus" type="text" value={values.stoolMucus || ""} onChange={e => setValues({...values, stoolMucus: e.target.value})}/>
    
        <label htmlFor="Stool_adults_warm">Stool adults warm :</label>
        <input id="Stool_adults_warm" type="text" value={values.stoolAdultsWarm || ""} onChange={e => setValues({...values, stoolAdultsWarm: e.target.value})}/>
    
        <label htmlFor="Stool_parasites">Stool parasites :</label>
        <input id="Stool_parasites" type="text" value={values.stoolParasites || ""} onChange={e => setValues({...values, stoolParasites: e.target.value})}/>
    
        <label htmlFor="Stool_pus">Stool pus :</label>
        <input id="Stool_pus" type="text" value={values.stoolPus || ""} onChange={e => setValues({...values, stoolPus: e.target.value})}/>
    
        <label htmlFor="Stool_ph">Stool ph :</label>
        <input id="Stool_ph" type="text" value={values.stoolPh || ""} onChange={e => setValues({...values, stoolPh: e.target.value})}/>
    
        <label htmlFor="Stool_occult_blood">Stool occult blood :</label>
        <input id="Stool_occult_blood" type="text" value={values.stoolOccultBlood || ""} onChange={e => setValues({...values, stoolOccultBlood: e.target.value})}/>
    
        <label htmlFor="Stool_reducing_substances">Stool reducing substances :</label>
        <input id="Stool_reducing_substances" type="text" value={values.stoolReducingSubstances || ""} onChange={e => setValues({...values, stoolReducingSubstances: e.target.value})}/>
    
        <label htmlFor="Stool_rbcs">Stool rbcs :</label>
        <input id="Stool_rbcs" type="text" value={values.stoolRbcs || ""} onChange={e => setValues({...values, stoolRbcs: e.target.value})}/>
    
        <label htmlFor="Stool_puscells">Stool puscells :</label>
        <input id="Stool_puscells" type="text" value={values.stoolPuscells || ""} onChange={e => setValues({...values, stoolPuscells: e.target.value})}/>
    
        <label htmlFor="Stool_fat_globules">Stool fat globules :</label>
        <input id="Stool_fat_globules" type="text" value={values.stoolFatGlobules || ""} onChange={e => setValues({...values, stoolFatGlobules: e.target.value})}/>
    
        <label htmlFor="Stool_macrophages">Stool macrophages :</label>
        <input id="Stool_macrophages" type="text" value={values.stoolMacrophages || ""} onChange={e => setValues({...values, stoolMacrophages: e.target.value})}/>
    
        <label htmlFor="Stool_epithelial_cell">Stool epithelial cell :</label>
        <input id="Stool_epithelial_cell" type="text" value={values.stoolEpithelialCell || ""} onChange={e => setValues({...values, stoolEpithelialCell: e.target.value})}/>
    
        <label htmlFor="Stool_muscle_fibers">Stool muscle fibers :</label>
        <input id="Stool_muscle_fibers" type="text" value={values.stoolMuscleFibers || ""} onChange={e => setValues({...values, stoolMuscleFibers: e.target.value})}/>
    
        <label htmlFor="Stool_vegetable_cell">Stool vegetable cell :</label>
        <h1>Edit Other Test</h1>
    <label htmlFor="Uric_acid">Uric acid :</label>
    <input id="Uric_acid" type="text" value={values.uricAcid || ""} onChange={e => setValues({...values, uricAcid: e.target.value})}/>

    <label htmlFor="Serum_cholinesterase">Serum cholinesterase :</label>
    <input id="Serum_cholinesterase" type="text" value={values.serumCholinesterase || ""} onChange={e => setValues({...values, serumCholinesterase: e.target.value})}/>

    <label htmlFor="Hs_crp">Hs crp :</label>
    <input id="Hs_crp" type="text" value={values.hsCrp || ""} onChange={e => setValues({...values, hsCrp: e.target.value})}/>

    <label htmlFor="Gppd">Gppd :</label>
    <input id="Gppd" type="text" value={values.gppd || ""} onChange={e => setValues({...values, gppd: e.target.value})}/>

    <label htmlFor="Material">Material :</label>
    <input id="Material" type="text" value={values.material || ""} onChange={e => setValues({...values, material: e.target.value})}/>

    <label htmlFor="Hba1c">Hba1c :</label>
    <input id="Hba1c" type="text" value={values.hba1c || ""} onChange={e => setValues({...values, hba1c: e.target.value})}/>

    <label htmlFor="Avg_blood_glucose_level">Avg blood glucose level :</label>
    <input id="Avg_blood_glucose_level" type="text" value={values.avgBloodGlucoseLevel || ""} onChange={e => setValues({...values, avgBloodGlucoseLevel: e.target.value})}/>

    <label htmlFor="Hbsag">Hbsag :</label>
    <input id="Hbsag" type="text" value={values.hbsag || ""} onChange={e => setValues({...values, hbsag: e.target.value})}/>

    <label htmlFor="Hiv_result">Hiv result :</label>
    <input id="Hiv_result" type="text" value={values.hivResult || ""} onChange={e => setValues({...values, hivResult: e.target.value})}/>

    <label htmlFor="Hiv_method">Hiv method :</label>
    <input id="Hiv_method" type="text" value={values.hivMethod || ""} onChange={e => setValues({...values, hivMethod: e.target.value})}/>

    <label htmlFor="Hiv_remark">Hiv remark :</label>
    <input id="Hiv_remark" type="text" value={values.hivRemark || ""} onChange={e => setValues({...values, hivRemark: e.target.value})}/>

    <label htmlFor="S_protein_total">S protein total :</label>
    <input id="S_protein_total" type="text" value={values.sProteinTotal || ""} onChange={e => setValues({...values, sProteinTotal: e.target.value})}/>

    <label htmlFor="S_albumin_bcg">S albumin bcg :</label>
    <input id="S_albumin_bcg" type="text" value={values.sAlbuminBcg || ""} onChange={e => setValues({...values, sAlbuminBcg: e.target.value})}/>

    <label htmlFor="S_globulin">S globulin :</label>
    <input id="S_globulin" type="text" value={values.sGlobulin || ""} onChange={e => setValues({...values, sGlobulin: e.target.value})}/>

    <label htmlFor="Acid_fast_bacilli">Acid fast bacilli :</label>
    <input id="Acid_fast_bacilli" type="text" value={values.acidFastBacilli || ""} onChange={e => setValues({...values, acidFastBacilli: e.target.value})}/>

    <label htmlFor="Stool_color">Stool color :</label>
    <input id="Stool_color" type="text" value={values.stoolColor || ""} onChange={e => setValues({...values, stoolColor: e.target.value})}/>

    <label htmlFor="Stool_blood">Stool blood :</label>
    <input id="Stool_blood" type="text" value={values.stoolBlood || ""} onChange={e => setValues({...values, stoolBlood: e.target.value})}/>

    <label htmlFor="Stool_mucus">Stool mucus :</label>
    <input id="Stool_mucus" type="text" value={values.stoolMucus || ""} onChange={e => setValues({...values, stoolMucus: e.target.value})}/>

    <label htmlFor="Stool_adults_warm">Stool adults warm :</label>
    <input id="Stool_adults_warm" type="text" value={values.stoolAdultsWarm || ""} onChange={e => setValues({...values, stoolAdultsWarm: e.target.value})}/>

    <label htmlFor="Stool_parasites">Stool parasites :</label>
    <input id="Stool_parasites" type="text" value={values.stoolParasites || ""} onChange={e => setValues({...values, stoolParasites: e.target.value})}/>

    <label htmlFor="Stool_pus">Stool pus :</label>
    <input id="Stool_pus" type="text" value={values.stoolPus || ""} onChange={e => setValues({...values, stoolPus: e.target.value})}/>

    <label htmlFor="Stool_ph">Stool ph :</label>
    <input id="Stool_ph" type="text" value={values.stoolPh || ""} onChange={e => setValues({...values, stoolPh: e.target.value})}/>

    <label htmlFor="Stool_occult_blood">Stool occult blood :</label>
    <input id="Stool_occult_blood" type="text" value={values.stoolOccultBlood || ""} onChange={e => setValues({...values, stoolOccultBlood: e.target.value})}/>

    <label htmlFor="Stool_reducing_substances">Stool reducing substances :</label>
    <input id="Stool_reducing_substances" type="text" value={values.stoolReducingSubstances || ""} onChange={e => setValues({...values, stoolReducingSubstances: e.target.value})}/>

    <label htmlFor="Stool_rbcs">Stool rbcs :</label>
    <input id="Stool_rbcs" type="text" value={values.stoolRbcs || ""} onChange={e => setValues({...values, stoolRbcs: e.target.value})}/>

    <label htmlFor="Stool_puscells">Stool puscells :</label>
    <input id="Stool_puscells" type="text" value={values.stoolPuscells || ""} onChange={e => setValues({...values, stoolPuscells: e.target.value})}/>

    <label htmlFor="Stool_fat_globules">Stool fat globules :</label>
    <input id="Stool_fat_globules" type="text" value={values.stoolFatGlobules || ""} onChange={e => setValues({...values, stoolFatGlobules: e.target.value})}/>

    <label htmlFor="Stool_macrophages">Stool macrophages :</label>
    <input id="Stool_macrophages" type="text" value={values.stoolMacrophages || ""} onChange={e => setValues({...values, stoolMacrophages: e.target.value})}/>

    <label htmlFor="Stool_epithelial_cell">Stool epithelial cell :</label>
    <input id="Stool_epithelial_cell" type="text" value={values.stoolEpithelialCell || ""} onChange={e => setValues({...values, stoolEpithelialCell: e.target.value})}/>

    <label htmlFor="Stool_muscle_fibers">Stool muscle fibers :</label>
    <input id="Stool_muscle_fibers" type="text" value={values.stoolMuscleFibers || ""} onChange={e => setValues({...values, stoolMuscleFibers: e.target.value})}/>

    <label htmlFor="Stool_vegetable_cell">Stool vegetable cell :</label>
    <input id="Stool_vegetable_cell" type="text" value={values.stoolVegetableCell || ""} onChange={e => setValues({...values, stoolVegetableCell: e.target.value})}/>

    <label htmlFor="Stool_bacteria">Stool bacteria :</label>
    <input id="Stool_bacteria" type="text" value={values.stoolBacteria || ""} onChange={e => setValues({...values, stoolBacteria: e.target.value})}/>

    <label htmlFor="Stool_cyst">Stool cyst :</label>
    <input id="Stool_cyst" type="text" value={values.stoolCyst || ""} onChange={e => setValues({...values, stoolCyst: e.target.value})}/>

    <label htmlFor="Stool_trophozoites">Stool trophozoites :</label>
    <input id="Stool_trophozoites" type="text" value={values.stoolTrophozoites || ""} onChange={e => setValues({...values, stoolTrophozoites: e.target.value})}/>

    <label htmlFor="Stool_larva">Stool larva :</label>
    <input id="Stool_larva" type="text" value={values.stoolLarva || ""} onChange={e => setValues({...values, stoolLarva: e.target.value})}/>

    <label htmlFor="Stool_yeast_cells">Stool yeast cells :</label>
    <input id="Stool_yeast_cells" type="text" value={values.stoolYeastCells || ""} onChange={e => setValues({...values, stoolYeastCells: e.target.value})}/>

    <label htmlFor="Stool_starch_granules">Stool starch granules:</label>
    <input id="Stool_starch_granules" type="text" value={values.stoolStarchGranules || ""} onChange={e => setValues({...values, stoolStarchGranules: e.target.value})}/>

    <label htmlFor="Thyroid_tsh">Thyroid tsh :</label>
    <input id="Thyroid_tsh" type="text" value={values.thyroidTsh || ""} onChange={e => setValues({...values, thyroidTsh: e.target.value})}/>

    <label htmlFor="Thyroid_t3">Thyroid t3 :</label>
    <input id="Thyroid_t3" type="text" value={values.thyroidT3 || ""} onChange={e => setValues({...values, thyroidT3: e.target.value})}/>

    <label htmlFor="Thyroid_t4">Thyroid t4 :</label>
    <input id="Thyroid_t4" type="text" value={values.thyroidT4 || ""} onChange={e => setValues({...values, thyroidT4: e.target.value})}/>

    <label htmlFor="Vdrl">Vdrl :</label>
    <input id="Vdrl" type="text" value={values.vdrl || ""} onChange={e => setValues({...values, vdrl: e.target.value})}/>
       
        <button type="submit">Update</button>
    </form>
    
    
)
}
export default BloodTest