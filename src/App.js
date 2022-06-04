import { useEffect, useState } from "react";
import "./App.css";
import Header from "./backgrounds/bg-header-desktop.svg";
import Body from './components/Body'

function App() {
  const [job, setJob] = useState([]);
  const [busca, setBusca] = useState([]);

  useEffect(() => {
    fetch("./data.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setJob(res));
  }, []);
  
  let indice = busca.length - 1
  const filtro =job.filter((e) => {
     let languagesFilter = e.languages.find(item => item === busca[indice])
     let toolsFilter = e.tools.find(item => item === busca[indice])

  if (busca.length === 0) {
    return e;
  } else {
    if (
      e.role === busca[indice] ||
      languagesFilter ||
      toolsFilter ||
      e.level === busca[indice]
    ) {
      return e;
    }
  }
})
const clearAll = () => {
  setBusca([])
  fetch("./data.json", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => setJob(res));
}

const removeOne = (item) => {
 setBusca(busca.filter((e,index) => busca[index] !== busca[item])) 
 fetch("./data.json", {
  headers: {
    Accept: "application/json",
  },
})
  .then((res) => res.json())
  .then((res) => setJob(res));

  
}

  return (
    <div>
      <div className="header">
        <img src={Header} alt="HeaderDesktop" width="100%" />
        <div className="container-search-bar">
        <div className="search-bar">
          <div className="teste">
            {busca.length === 0 ? <div className="label-container"></div> : 
            busca.map((item, key) =>(
            <div key={key} className="label-container"><div className="div-searched"><label className="searched-items">{item}</label><div className="button-remove-container"><button className="button-remove"onClick={() => removeOne(key)} >X</button></div> </div></div>))}
          </div>
            <div><button className="clear-button" onClick={() => clearAll()}>clear</button></div>
        </div>  
        </div>
      </div>
      {
        filtro.map((result, index) => (
          <Body key={index} filtro={filtro} result={result} setJob={setJob} busca={busca} setBusca={setBusca} />
        ))}
    </div>
  );
}
export default App;
