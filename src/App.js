import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FullName from './profile/FullName';
import Bio from './profile/Bio';
import Profession from './profile/Profession';
import Profile from './profile/Profile';

function App() {
  const handleName=(x, y)=>{
alert(`hello ${x} ${y}`);
  }
  return (
    <div className='container'>
    <Profile  >
    <Card style={{ width: '90%' }}>
    <h1 className='title'>Self-Profil </h1>
    <FullName firstName="Fatma" lastName="Daly">
      <Card.Img variant="top" src="./fatma_daly.jpg" alt="profile-img" style={{width:"20%" , margin:"2px auto", position:"relative", borderRadius:"50%"}}/>
      </FullName>
      <Card.Body>
        <Card.Text>
        <br/>
      <div >
      <Bio fullName="Fatma Daly" title="Presentation" Age="26" Gender="Female" Interests="Taking care of animals and Watching TV."  />
      </div>
      <br/>
      <div>
      <Profession/>
        </div>
        </Card.Text>
        <Button variant="danger" size="lg" onClick={()=>handleName("Fatma","Daly")}>User Button</Button>
      </Card.Body>
    </Card>
    </Profile>
    </div>
  );
}


export default App;
