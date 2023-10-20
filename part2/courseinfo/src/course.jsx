const Course = ({course}) => {
  
    return(
    <div id={course.id}>
      
      <Header course ={course.name} />
      <Content course ={course} />
    </div>
    
    )
  }
  
  const Header = ({course}) => {
    return <h1>{course}</h1>
  }
  
  const Content = ({course}) => {
    let allArr = course.parts.map(val => val.exercises)
    let total = allArr.reduce((sum,now) => sum += now,0)
    return (<ul>
    {course.parts.map(val => <li><Part course={val}/></li>)}
    <p>Total of {total} exercises</p>
    </ul>)
  }
  
  const Part = ({course}) => {
    console.log(course)
    return (
      <li key={course.id}>
        {course.name} {course.exercises}
      </li>
    )
  }

export default Course