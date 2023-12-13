import React, { useState, useEffect } from 'react';
import HeaderPanel from '../HeaderPanel/HeaderPanel';
import './Panel.css';
import { getFunctionPets } from '../Services/GetFunctionPets';
import MiniModal from '../MiniModals/MiniModal';

export default function Panel() {
  const [dataAPI, setDataAPI] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getFunctionPets();
        setDataAPI(data);
      } catch (err) {
        //erroo
      }
    }
    loadData();
  }, []);
  console.log(dataAPI);
  return (
    <div className="panel">
      <div className="position-header-panel">
        <HeaderPanel />
      </div>
      <div className="position-body-panel">
        <MiniModal data={dataAPI}/>
      </div>
    </div>
  );
}