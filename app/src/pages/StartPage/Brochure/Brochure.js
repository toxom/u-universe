import React from 'react';
import './Brochure.scss';
import BrComm from '../../../assets/icons/br-comm.svg';
import BrEdTech from '../../../assets/icons/br-edtech.svg';
import BrInno from '../../../assets/icons/br-inno.svg';
import BrSales from '../../../assets/icons/br-sales.svg';
import BrValue from '../../../assets/icons/br-value.svg';
import BrWomen from '../../../assets/icons/br-women.svg';


const Brochure = () => {
  return (
    <div className="brochure">
      <h1>U-interviews are empathic in-depth interviews with entrepreneurs  </h1>
      <div className="row">
        <div className="section">
          <div className="icon">
            <img src={BrInno} alt="Innovation" />
          </div>
          <div className="text-container">
            <p>IP & VC for innovators</p>
            {/* <p>Where resources?</p> */}
          </div>
        </div>
        <div className="section">
          <div className="icon">
            <img src={BrValue} alt="Value" />
          </div>          
          <div className="text-container">
            <p>Value creation for new venture and spin offs</p>
            {/* <p>What and how?</p> */}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="section">
          <div className="icon">
            <img src={BrComm} alt="Communication" />
          </div>             
          <div className="text-container">
            <p>Constructive communications and conscious leadership</p>
            {/* <p>Who and why?</p> */}
          </div>
        </div>
        <div className="section">
          <div className="icon">
            <img src={BrSales} alt="Sales" />
          </div>             
          <div className="text-container">
            <p>Managing sales growth in digital world</p>
            {/* <p>Where resoureces?</p> */}
          </div>
        </div>
    </div>      

    <div className="row">
      <div className="section">
          <div className="icon">
            <img src={BrWomen} alt="Women" />
          </div>           
          <div className="text-container">
          <p>Softlanding to digital entrepreneurship for women</p>
          {/* <p>Bonus 1</p> */}
        </div>
      </div>
      <div className="section">
          <div className="icon">
            <img src={BrEdTech} alt="Edtech" />
          </div>           
          <div className="text-container">
          <p>eEE: comprehensive business models in EdTech for academics</p>
          {/* <p>Bonus 2</p> */}
        </div>
      </div>     
    </div>     
  </div>
  );
};

export default Brochure;
