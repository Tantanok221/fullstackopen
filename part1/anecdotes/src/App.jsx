import { useEffect } from 'react'
import { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0,0,0,0,0,0,0,0])
  useEffect( () => {setSelected(Math.floor(Math.random() * 8))}, [])
  // console.log(selected)
  let mostVote = 0
  let position = 0
  for(let i = 0; i < 8; i++){
    if(vote[i] >= mostVote) {
      position = i;
      mostVote = vote[i]
    }
  }


  return (
    <div>
      <h1>Anecdotes of the day</h1>
      {anecdotes[selected]}
      <p>has {vote[selected]} votes</p>
      <button onClick={(event) => {
        const newVote = [... vote]
        newVote[selected] += 1
        setVote(newVote)
        } }>vote</button>
        <button onClick={(event) => {
        console.log(selected)
        if(selected == 7) setSelected(0)
        else setSelected(selected + 1)
        } }>next anecdotes</button>
      <h1>Anecdotes with most votes</h1>
      <p>{anecdotes[position]}</p>
      <p>has {vote[position]} votes</p>
    </div>
  )
}

export default App