import React from "react";

function Stock({ stock, onStockClick }) {
  function handleClick() {
    onStockClick(stock);
  }

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer', margin: '10px' }}>
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{stock.name} ({stock.ticker})</h5>
        <p className="card-text">Price: ${stock.price}</p>
        <p className="card-text">Type: {stock.type}</p>
      </div>
    </div>
  </div>
);
}
  
    
export default Stock;
