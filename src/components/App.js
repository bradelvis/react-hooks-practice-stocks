import React, { useState } from 'react';
import Header from "./Header";
import MainContainer from "./MainContainer";
import StockContainer from "./StockContainer"; // Import StockContainer
import PortfolioContainer from "./PortfolioContainer"; // Import PortfolioContainer


function App() {
  const [stocks, setStocks] = useState([
    { id: 1, ticker: "AAPL", name: "Apple", price: 150, type: "tech" },
    { id: 2, ticker: "GOOGL", name: "Google", price: 2800, type: "tech" },
    { id: 3, ticker: "AMZN", name: "Amazon", price: 3500, type: "tech" },
    { id: 4, ticker: "TSLA", name: "Tesla", price: 700, type: "automotive" },
    { id: 5, ticker: "MSFT", name: "Microsoft", price: 300, type: "tech" },
    { id: 6, ticker: "NFLX", name: "Netflix", price: 600, type: "entertainment" }
  ]);

  const [portfolio, setPortfolio] = useState([]);
  const [filterType, setFilterType] = useState(""); // For filtering by stock type
  const [sortedStocks, setSortedStocks] = useState(stocks); // For sorted stocks list

  const addStockToPortfolio = (stock) => {
    setPortfolio([...portfolio, stock]);
  };

  const removeStockFromPortfolio = (stock) => {
    setPortfolio(portfolio.filter((s) => s.id !== stock.id));
  };

  // Sorting function
  const sortStocks = (criterion) => {
    const sorted = [...stocks];
    if (criterion === "ticker") {
      sorted.sort((a, b) => a.ticker.localeCompare(b.ticker));
    } else if (criterion === "price") {
      sorted.sort((a, b) => a.price - b.price);
    }
    setSortedStocks(sorted);
  };

  // Filtering function
  const filterStocks = (type) => {
    setFilterType(type);
  };

  // Filter stocks when filterType or stocks change
  React.useEffect(() => {
    let filteredStocks = stocks;
    if (filterType) {
      filteredStocks = stocks.filter((stock) => stock.type === filterType);
    }
    setSortedStocks(filteredStocks);
  }, [filterType, stocks]);

  return (
    <div>
      <h1>Stock Market App</h1>

      <StockContainer
        stocks={sortedStocks}
        onAddStock={addStockToPortfolio}
        sortStocks={sortStocks}
        filterStocks={filterStocks}
      />

      <PortfolioContainer
        stocks={portfolio}
        onRemoveStock={removeStockFromPortfolio}
      />
    </div>
  );
}

export default App;
