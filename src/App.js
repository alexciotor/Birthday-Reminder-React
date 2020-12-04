import {useState} from 'react'
import data from './data'
 import List from './list'


function App() {
  const [people, setPeople] = useState(data)
  console.log( people);
  return(
<>
<section>
<div className="container">
<h1>{people.length} Birthdays Today</h1>
<List key={people.id} props={people}/>
</div>
<div className="btn-content">
<button className='btn' onClick={()=>{
  setPeople([])
}} >
Click me </button>
<button className='btn' onClick={()=>{
  setPeople(data)
}} > second button</button>

</div>
</section>



</>


  )



}


export default App;
