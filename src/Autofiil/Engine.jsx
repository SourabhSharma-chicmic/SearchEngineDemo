import React, { useState } from "react";

import { Data } from "./Data.jsx";

const Engine = () => {
  const [data, setData] = useState(Data);
  const [display, setDisplay] = useState([]);

  const DataHandler = (e) => {
    setDisplay(
      data.filter((item, i) => {
          if(e.target.value =='')
          {
              return  item.author;
          }else if(item.title.toLowerCase().includes(e.target.value.toLowerCase()))
          {
            return item;
          }
        
      })
    );
  };

  //

  return (
    <div className="container bg-dark">
      <div className="row">
        <div className="col-8 offset-3">
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={DataHandler}
               
              />
            </div>

            
            
            <div className="row bg-light">
              <div className="col-12 overflow-auto" style={{ height: "300px" }}>
                {display.map((item) => <h4>{item.title}</h4>)}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Engine;
