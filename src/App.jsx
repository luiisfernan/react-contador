import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const aumentar = () => {
    setNum(num + 1);
  };

  const disminuir = () => {
    setNum(num - 1);
  };
  return (
    <div>
      <h1 className="mb-5 text-center">Contador de Numeros</h1>

      <div className="row">
        <div className="col">
        
        </div>
        <div className="col">
        <button className=" ml-3  btn btn-primary btn-block " onClick={aumentar}>
            Aumentar
          </button>
          <button className=" ml-3 btn btn-info btn-block " onClick={disminuir}>Disminuir</button>

          <h3 className="mt-4 text-center">Cantidad: {num}</h3>
        </div>
        
        <div className="col">
        
        </div>
      </div>
    </div>
  );
}

export default App;
