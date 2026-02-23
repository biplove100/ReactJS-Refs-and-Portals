import Player from './components/Player.jsx';
import TimeChallenge from './components/TimeChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="Easy Level" 
        description="This is easy level Challenge"
        time={3}/>
      </div>
    </>
  );
}

export default App;
