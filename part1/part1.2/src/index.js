import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Total from './components/Total'
import Content from './components/Content'




const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />

      <Content/>

      <Total total={exercises1 + exercises2 + exercises3} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
