import React from "react";
import Header from "../layout/Header/Header";
import "./Dashboard.css";

const subtitle = "Dashboard";

const Dashboard = ({
  gridSize,
  setGridSize,
  actionNumber,
  setActionNumber
}) => (
  <>
    <Header subtitle={subtitle} />

    <div className="dashboard">
      Dashboard
      <form className="playGame">
        <label for="gridSize">Grid Size</label>
        <input
          value={gridSize}
          onChange={e => setGridSize(e.target.value)}
          type="number"
          className="playGame__GridSize"
          placeholder="Grid Size"
        />
        <button className="playGame__generateButton">Generate</button>
        <button className="playGame__nextButton">></button>
        <label for="actionNumber">Number of Steps</label>
        <input
          value={actionNumber}
          onChange={e => setActionNumber(e.target.value)}
          type="number"
          className="playGame__actionNumber"
          placeholder="Number of Steps"
        />
        <button className="playGame__liveButton">Live</button>
      </form>
      <div id="grid"></div>
    </div>
  </>
);

export default Dashboard;
