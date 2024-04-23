import React from 'react';
import './index.css';

const LungFunctionTest = () => {
    return (
        <div className="form-div">
            <br />
            <table className="lung-table">
                <tbody>
                    <tr className="lung-header">
                        <th width="20%">
                        </th>
                        <th className="text-center" width="20%">
                            Actual
                        </th>
                        <th className="text-center" width="20%">
                            Predicted
                        </th>
                        <th className="text-center" width="20%">
                            % Predicted
                        </th>
                    </tr>
                    <tr>
                        <th className="lung-row-header">
                            FVC
                        </th>
                        <th>
                            <input className="lung-input" name="fvc" type="text" />
                        </th>
                        <th>
                            <input className="lung-input" name="fvc_predicted" type="text" />
                        </th>
                        <th>
                            <input className="lung-input" name="fvc_per_predicted" type="text" />
                        </th>
                    </tr>
                    <tr>
                        <th className="lung-row-header">
                            FEV-1
                        </th>
                        <th>
                            <input className="lung-input" name="fev1" type="text" />
                        </th>
                        <th>
                            <input className="lung-input" name="fev1_predicted" type="text" />
                        </th>
                        <th>
                            <input className="lung-input" name="fev1_per_predicted" type="text" />
                        </th>
                    </tr>
                    <tr>
                        <th className="lung-row-header">
                            FEV-1/FVC
                        </th>
                        <th>
                            <input className="lung-input" name="fev1_fvc" type="text" />
                        </th>
                        <th>
                            <input className="lung-input" name="fev1_fvc_predicted" type="text" />
                        </th>
                        <th>
                            <input className="lung-input" name="fev1_fvc_per_predicted" type="text" />
                        </th>
                    </tr>
                    <tr>
                        <th className="lung-row-header">
                            PEFR
                        </th>
                        <th>
                            <input className="lung-input" name="peak_exp_flow" type="text" />
                        </th>
                        <th>
                            <input className="lung-input" name="pefr_predicted" type="text" />
                        </th>
                        <th>
                            <input className="lung-input" name="pefr_per_predicted" type="text" />
                        </th>
                    </tr>
                    <tr>
                        <th className="lung-row-header">
                            FEF50%
                        </th>
                        <th>
                            <input className="lung-input" name="fef50" type="text" />
                        </th>
                        <th>
                            <input className="lung-input" name="fef50_predicted" type="text" />
                        </th>
                        <th>
                            <input className="lung-input" name="fef50_per_predicted" type="text" />
                        </th>
                    </tr>
                </tbody>
            </table>
            <div className="lung-spirometry">
                Spirometry
                <input className="lung-input" name="spirometry" value="NA" type="text" />
            </div>
        </div>
    );
};

export default LungFunctionTest;
