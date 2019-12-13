import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Dashboard from "./Dashboard";

const EnhanceDashboard = props => {
  const [gridSize, setGridSize] = useState("");
  const [actionNumber, setActionNumber] = useState("");
  return (
    <Dashboard
      {...props}
      gridSize={gridSize}
      setGridSize={setGridSize}
      actionNumber={actionNumber}
      setActionNumber={setActionNumber}
    />
  );
};

export default EnhanceDashboard;
