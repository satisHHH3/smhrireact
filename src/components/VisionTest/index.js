import React, { useState } from 'react';
import "./index.css"
const VisionTest = () => {
    const [formValues, setFormValues] = useState({
        nearVisionWithoutGlassRight: '',
        nearVisionWithoutGlass: '',
        distanceVisionWithoutGlassRight: '',
        distanceVisionWithoutGlass: '',
        nearVisionWithGlassRight: '',
        nearVisionWithGlass: '',
        distanceVisionWithGlassRight: '',
        distanceVisionWithGlass: '',
        visionRemark: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formValues);
        // Add your form submission logic here
    };

    return (
        <div id="main-table-box">
            <form onSubmit={handleSubmit}>
                <div className="form-div">
                    <br />
                    <table border="1" width="100%">
                        <tbody>
                            <tr style={{ background: '#EFEFEF' }}>
                                <th style={{ padding: '7px' }} width="20%">&nbsp;Vision</th>
                                <th style={{ textAlign: 'center' }} width="20%">Right</th>
                                <th style={{ textAlign: 'center' }} width="20%">Left</th>
                                <th style={{ textAlign: 'center' }} width="40%"></th>
                            </tr>
                            <tr>
                                <th style={{ padding: '7px', background: '#EFEFEF' }}>&nbsp;Near</th>
                                <th>
                                    <div className="form-field-box">
                                        <input
                                            className="form-control"
                                            name="nearVisionWithoutGlassRight"
                                            type="text"
                                            value={formValues.nearVisionWithoutGlassRight}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </th>
                                <th>
                                    <div className="form-field-box">
                                        <input
                                            className="form-control"
                                            name="nearVisionWithoutGlass"
                                            type="text"
                                            value={formValues.nearVisionWithoutGlass}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </th>
                                <th style={{ paddingLeft: '20px', background: '#EFEFEF' }}>Without Glasses</th>
                            </tr>
                            <tr>
                                <th style={{ padding: '7px', background: '#EFEFEF' }}>&nbsp;Far</th>
                                <th>
                                    <div className="form-field-box">
                                        <input
                                            className="form-control"
                                            name="distanceVisionWithoutGlassRight"
                                            type="text"
                                            value={formValues.distanceVisionWithoutGlassRight}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </th>
                                <th>
                                    <div className="form-field-box">
                                        <input
                                            className="form-control"
                                            name="distanceVisionWithoutGlass"
                                            type="text"
                                            value={formValues.distanceVisionWithoutGlass}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </th>
                                <th style={{ paddingLeft: '20px', background: '#EFEFEF' }}>Without Glasses</th>
                            </tr>
                            <tr style={{ border: '1px solid', height: '4px',backgroundColor: '#ffffff' }}>
                                <td colSpan="4" style={{ border: '1px solid', padding: '5px'}}></td>
                            </tr>
                            <tr>
                                <th style={{ padding: '7px', background: '#EFEFEF' }}>&nbsp;Near</th>
                                <th>
                                    <div className="form-field-box">
                                        <input
                                            className="form-control"
                                            name="nearVisionWithGlassRight"
                                            type="text"
                                            value={formValues.nearVisionWithGlassRight}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </th>
                                <th>
                                    <div className="form-field-box">
                                        <input
                                            className="form-control"
                                            name="nearVisionWithGlass"
                                            type="text"
                                            value={formValues.nearVisionWithGlass}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </th>
                                <th style={{ paddingLeft: '20px', background: '#EFEFEF' }}>With Glasses</th>
                            </tr>
                            <tr>
                                <th style={{ padding: '7px', background: '#EFEFEF' }}>&nbsp;Far</th>
                                <th>
                                    <div className="form-field-box">
                                        <input
                                            className="form-control"
                                            name="distanceVisionWithGlassRight"
                                            type="text"
                                            value={formValues.distanceVisionWithGlassRight}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </th>
                                <th>
                                    <div className="form-field-box">
                                        <input
                                            className="form-control"
                                            name="distanceVisionWithGlass"
                                            type="text"
                                            value={formValues.distanceVisionWithGlass}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </th>
                                <th style={{ paddingLeft: '20px', background: '#EFEFEF' }}>With Glasses</th>
                            </tr>
                           
                        </tbody>
                    </table>
                    <div className="form-field-box even" id="vision_remark_field_box">
                        <div className="form-display-as-box" style={{ width: '125px' }} id="vision_remark_display_as_box">
                            Vision Remark
                        </div>
                        <div className="form-input-box e" id="vision_remark_input_box">
                            <input
                                className="form-control vision_remark"
                                name="visionRemark"
                                type="text"
                                maxLength="255"
                                value={formValues.visionRemark}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Update</button>
            </form>
        </div>
    );
};

export default VisionTest;
