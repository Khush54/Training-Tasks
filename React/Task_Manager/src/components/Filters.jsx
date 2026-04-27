import React from 'react'


function Filters({ activeFilter, setFilter }) {
  const buttons = ["All", "Completed", "Pending"];
  return (
    <div className="filter">
      {buttons.map(btn => (
        <button 
          key={btn}
          className={activeFilter === btn ? "active-btn" : ""}
          onClick={() => setFilter(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

export default Filters