import './App.css';
import UserProfile from './components/Title';
import UserImage from './components/UserImage';
import UserRepositories from './components/UserRepositories';

function App() {
  const username = 'nikholau'

  return (
    <>
      <UserImage username={username} />
      <UserProfile username={username} />
      <UserRepositories username={username} />
    </>
  );
}

export default App;
