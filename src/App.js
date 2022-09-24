import logo from './logo.svg';
import './App.css';
const idIs=3001;
const singer={name: 'dr mafuj', job:'singer'};
const hero={name: 'hero alom', job:'seta vagga hero'};
const singerStyle={
  background: 'black',
  color: 'white',
  padding:'20px',
  borderRadius:'20px',

}
const nayaks=['rubel','manna','almgir','bapparaj','jolonto jolil','mr mokha','tashan'];
const heroins=['sabana', 'sabnur', 'moushumi', 'bobita']



function App() {
  return (
    <div className='App'>
      {
        nayaks.map(nayok=>
          <li>Name: {nayok}</li>
          )
      }
      {
        nayaks.map(nayok=><Person name={nayok}></Person>)
      }
      {/* <Person name={nayaks[0]} heroin={heroins[1]}></Person>
      <Person name="rajjak" ></Person> */}
      <Friend name="rahman" wife="rini"></Friend>
      <Friend wife="ratna"></Friend>
      
    </div>
  );
}

function Person(props){
  console.log(props)
  return(
    <div className='person'>
    <h1>{props.name}</h1>
      <p>{props.heroin}</p>
    </div>
  )
}
function Friend(props){
  console.log(props)
  return(
    <div className='friend'>
    <h1>{props.name}</h1>
      <p>{props.wife}</p>
    </div>
  )
}


export default App;
