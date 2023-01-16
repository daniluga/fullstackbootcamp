import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistic = ({ text, value }) => {
  if (text === "positive") {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    );
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value} </td>
    </tr>
  );
};

const Statistics = ({ clicks }) => {
  const all = clicks.good + clicks.neutral + clicks.bad;
  const avg = (clicks.good + clicks.bad * -1) / all;
  const positive = clicks.good * (100 / all);

  if (all === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <div>
      <table>
        <Statistic text="good" value={clicks.good} />
        <Statistic text="neutral" value={clicks.neutral} />
        <Statistic text="bad" value={clicks.bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={avg} />
        <Statistic text="positive" value={positive} />
      </table>
    </div>
  );
};

const App = (props) => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGoodClick = () => {
    setClicks({
      ...clicks,
      good: clicks.good + 1,
    });
  };
  const handleNeutralClick = () => {
    setClicks({
      ...clicks,
      neutral: clicks.neutral + 1,
    });
  };
  const handleBadClick = () => {
    setClicks({
      ...clicks,
      bad: clicks.bad + 1,
    });
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h3>Statistics</h3>
      <Statistics clicks={clicks} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
