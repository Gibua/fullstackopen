
const Header = (props) => (
  <h1>{props.course.name}</h1>
)

const Part = (props) => (
  <>
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  </>
)

const Content = (props) => (
  <div>
    <Part part={props.course.parts[1-1]} />
    <Part part={props.course.parts[2-1]} />
    <Part part={props.course.parts[3-1]} />
  </div>
)

const Total = (props) => (
  <p>Number of exercises {props.course.parts[1-1].exercises + props.course.parts[2-1].exercises + props.course.parts[3-1].exercises}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const courseObj = {
    name: course,
    parts: [
      {name: part1, exercises: exercises1},
      {name: part2, exercises: exercises2},
      {name: part3, exercises: exercises3}
    ]
  }

  return (
    <div>
      <Header  course={courseObj} />
      <Content course={courseObj} />
      <Total   course={courseObj} />
    </div>
  )
}

export default App