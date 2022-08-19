import './App.css';
import Adress from './Components/Adress';
import FullName from './Components/FullName';
import Profile from './Components/Profile';
import ProfilePhoto from './Components/ProfilePhoto'

function App() {
  return (
    <div className="App">
      <Profile   pays="France" />
      <ProfilePhoto image=" https://static.vecteezy.com/ti/vecteur-libre/p3/2275847-male-avatar-profil-icone-de-souriant-caucasien-homme-vectoriel.jpg" />
      <FullName fullname="Malek Jihed Ferjani" />
      <Adress adress="Benzart,Tunisie"/>
    </div>
  );
}

export default App;
