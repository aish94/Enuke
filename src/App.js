import React, { useState, useEffect } from 'react';
import './App.css';

  const App = () => {
    const data = [
      { date: "2022-10-27", open: "134.5000", high: "134.5700", low: "134.5000", close:"134.5700",volume:"912" },
      { date: "2022-10-27", open: "134.0101", high: "134.0101", low: "134.0101", close:"134.0101",volume:"100" },
      { date: "2022-10-27", open: "134.5000", high: "134.5000", low: "134.5000", close:"134.5000",volume:"552" },
      {date: "2022-10-27", open: "134.5300", high: "134.5300", low: "134.5300", close:"134.5300",volume:"501"},
      {date: "2022-10-27", open: "134.5200", high: "134.5200", low: "134.5200", close:"134.5200",volume:"224"},
    ]
    const [posts, setPosts] = useState([]);
    useEffect(() =>  {
      fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=date").then((response) => response.json()).then((data) => {console.log(data); setPosts(data);}).catch((err) => { console.log(err.message);});

    }, []);
return (
	<div className="App">
	<table>
		<tr>
		<th>DateTime</th>
		<th>Open</th>
		<th>High</th>
    <th>Low</th>
    <th>Close</th>
    <th>Volume</th>
		</tr>
    {data.map((data, key) => {
        return (
		<tr key={key}>
      <td>{data.date}</td>
		<td>{data.open}</td>
		<td>{data.high}</td>
		<td>{data.low}</td>
    <td>{data.close}</td>
    <td>{data.volume}</td>
		</tr>
    );
    })}
	</table>
	</div>
);
};

export default App;
