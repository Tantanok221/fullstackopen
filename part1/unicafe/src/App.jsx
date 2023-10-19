import { useState } from 'react'
const Button = prop => {
  
  return(
    <button onClick={prop.handleClick}> {prop.text} </button>
)
}
const StatisticLine = ({value,text}) => {
  return (<p>{text} {value} </p>)
}

const Statistic = ({good,neutral,bad}) => {
    if(good+neutral+bad == 0) return (<><h1>Statistic</h1><p>No feedback given</p></>)
    return(
      <>
        <h1>Statistics</h1>
        <StatisticLine value={good} text="good"/>
        <StatisticLine value={neutral} text="neutral"/>
        <StatisticLine value={bad} text="bad"/>
        <p>all {good + neutral + bad}</p>
        <p>average {(good + (neutral * 0) + (bad * -1)) / (good + neutral + bad) }</p>
        <p>positive {good / (good + neutral + bad) * 100} %</p>
      </>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad+ 1)} text="bad"/>
      <Statistic good ={good} neutral ={neutral} bad ={bad} />
    </div>
  )
}

export default App