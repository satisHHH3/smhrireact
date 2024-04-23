import React from 'react';
import "./index.css";

const AudioMetryTest = () => (
  <div className='audio-metry-container'>
    <form>
    <table>
      <tbody>
        <tr style={{ background: '#EFEFEF' }}>
          <th style={{ width: '150px' }}>Frequency</th>
          <th colSpan="2" style={{ textAlign: 'center',  }}>500</th>
          <th colSpan="2" style={{ textAlign: 'center' }}>1000</th>
          <th colSpan="2" style={{ textAlign: 'center' }}>2000</th>
          <th colSpan="2" style={{ textAlign: 'center' }}>4000</th>
          <th colSpan="2" style={{ textAlign: 'center' }}>6000</th>
        </tr>
        <tr>
          <th></th>
          <th style={{ textAlign: 'center', }}>AC</th>
          <th style={{ textAlign: 'center' }}>BC</th>
          <th style={{ textAlign: 'center' }}>AC</th>
          <th style={{ textAlign: 'center' }}>BC</th>
          <th style={{ textAlign: 'center' }}>AC</th>
          <th style={{ textAlign: 'center' }}>BC</th>
          <th style={{ textAlign: 'center' }}>AC</th>
          <th style={{ textAlign: 'center' }}>BC</th>
          <th style={{ textAlign: 'center' }}>AC</th>
          <th style={{ textAlign: 'center' }}>BC</th>
        </tr>
       
        {/* Repeat rows for other ears */}
        <tr>
          <th style={{ background: '#EFEFEF' }}>
            &nbsp;Right
          </th>
          <th>
            <input type="text" style={{ width: "100%", height: "35px", margin: "0px ! important"}} />
          </th>
          <th>
            <input type="text" style={{ width: "100%",height: "35px", }}/>
          </th>
          <th>
            <input type="text" style={{ width: "100%",height: "35px", }}/>
          </th>
          <th>
            <input type="text" style={{ width: "100%",height: "35px", }}/>
          </th>
          <th>
            <input type="text" style={{ width: "100%",height: "35px", }}/>
          </th>
          <th>
            <input type="text" style={{ width: "100%",height: "35px", }}/>
          </th>
          <th>
            <input type="text" style={{ width: "100%",height: "35px", }}/>
          </th>
          <th>
            <input type="text" style={{ width: "100%",height: "35px", }}/>
          </th>
          <th>
            <input type="text" style={{ width: "100%",height: "35px", }}/>
          </th>
          <th>
            <input type="text" style={{ width: "100%",height: "35px", }}/>
          </th>
          {/* Repeat the pattern for other frequencies */}
        </tr>
        <tr>
          <th style={{ background: '#EFEFEF' }}>
            &nbsp;Left
          </th>
          <th>
            <input type="text" style={{ width: "100%", height: "35px", margin: "0px ! important"}} />
          </th>
          <th>
            <input type="text" style={{ width: "100%",height: "35px", }}/>
          </th>
          <th>
            <input type="text" style={{ width: "100%",height: "35px", }}/>
          </th>
          <th>
            <input type="text" style={{ width: "100%",height: "35px", }}/>
          </th>
          <th>
            <input type="text" style={{ width: "100%",height: "35px", }}/>
          </th>
          <th>
            <input type="text" style={{ width: "100%",height: "35px", }}/>
          </th>
          <th>
            <input type="text" style={{ width: "100%",height: "35px", }}/>
          </th>
          <th>
            <input type="text" style={{ width: "100%",height: "35px", }}/>
          </th>
          <th>
            <input type="text" style={{ width: "100%",height: "35px", }}/>
          </th>
          <th>
            <input type="text" style={{ width: "100%",height: "35px", }}/>
          </th>
          {/* Repeat the pattern for other frequencies */}
        </tr>
       
        <tr>
          <th colSpan="1"  style={{ background: '#EFEFEF', }}>For Right Ear</th>
       
          <th colSpan="5" style={{ background: '#EFEFEF' }}><input type="text" style={{ width: "100%",height: "35px", }}/></th>
        
          <th style={{ background: '#EFEFEF', padding: "4px 4px" }}>For Left Ear</th>
       
          <th colSpan="5"><input type="text" style={{ width: "100%",height: "35px", }}/></th>
        </tr>
      </tbody>
    </table>

    <label htmlFor="rbc">Audiometry :</label>
  <input id="rbc" type="text" />

  <label htmlFor="epiCells">Xray report :</label>
  <input id="epiCells" type="text" />

  <label htmlFor="urineReport">Ultra Sonographic :</label>
  <input id="urineReport" type="text" />
   <button type="submit">Update</button>
    </form>
  
  </div>
);

export default AudioMetryTest;
