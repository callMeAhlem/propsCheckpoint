import Profile from './Profiles/Profile';
import './App.css';
import ahlemPhoto from './Profiles/ahlem.jpg'
import laylaPhoto from './Profiles/layla.jpg'
import waelPhoto from './Profiles/wael.jpg'

function App() {
  const handleName = name => alert(name);
  return (
    <div className="App">
    {/* Calling Profile component with different props */}
   <Profile fullName="Ahlem Touati" profession="Web Developer" bio="I am a good person" handleName={handleName} >
    <img src={ahlemPhoto} className="rounded" width="155" alt="" />
   </Profile>
   <Profile fullName="Wael Ben Hmida" profession="Software Engineer" bio="I am a good person" handleName={handleName} >
    <img src={waelPhoto} className="rounded" width="155" alt="" />
   </Profile>
   <Profile fullName="Layla Rajah" profession="JAVA Programmer" bio="I am a good person" handleName={handleName} >
    <img src={laylaPhoto} className="rounded" width="155" alt="" />
   </Profile>
   {/* callin profile component without passing any props : default props are excuted */}
   <Profile / >
    </div>
  );
}

export default App;
