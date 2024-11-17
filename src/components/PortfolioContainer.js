import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, onRemoveStock }) {
  const stockList = stocks.length > 0 ? stocks.map((stock, index) => (
    <Stock key={`${stock.id}-${index}`} stock={stock} onStockClick={onRemoveStock} />
  )) : <p>No stocks in portfolio.</p>;
  
  return (
    <div>
      <h2>My Portfolio</h2>
      
        //render your portfolio stocks here
        {stockList}
    </div>
  );
}

export default PortfolioContainer;
