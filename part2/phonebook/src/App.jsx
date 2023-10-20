import { useState } from 'react'

const Filter = ({data}) => {
  function filter(event){
    let filter = document.querySelector("#FILTER").value
    let newArr = data.map(val => val.name +" " +val.number).filter(val => val.includes(filter))
    console.log(newArr)
    document.querySelector("#manipulate").innerHTML = ""
    newArr.forEach(val => {document.querySelector("#manipulate").insertAdjacentHTML('beforeend',`<p>${val}</p>`)
  })}



  return(<>filter shown with <input id="FILTER" onChange={filter} ></input></>)
}

const Form = ({data,move}) => {
  function submit(event){
    let name = document.querySelector("#NAME").value
    let number = document.querySelector("#NUMBER").value
    event.preventDefault()
  
    
    if(!data.map(person => person.name).includes(name)) {
      let newPerson = [...data, {name: name, number: number}]
      move(newPerson)
      
      }
    else {
      alert(name + " is already added to phonebook")
    }
    }

  return(
    <><form onSubmit={submit}>
    <div>
      name: <input id="NAME"/> <br></br>
      number: <input id="NUMBER"/>
    </div>
    <div>
      <button type="submit" >add</button>
    </div>
  </form></>
  )
}

const Person = ({data}) => {
  return(<><div id="manipulate">{data.map(val => <p>{val.name} {val.number}</p>)}</div></>)
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "011111" }
  ]) 
  
  
  
  

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter data={persons}/>
      
      <h2>Add new</h2>
      <Form data={persons} move={setPersons}/>
      
      <h2>Numbers</h2>
      <Person data={persons} />
      
    </div>
  )
}

export default App