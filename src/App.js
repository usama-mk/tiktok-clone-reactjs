import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
      <Video likes="12" shares="3" messages="1" channel="Usama MK" song="lut gaye hum tou pehli" description="desc of MK" url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"/>
      <Video likes="12" shares="3" messages="1" channel="Elon Musk" song="lut gaye hum tou pehli" description="desc of Elon Musk" url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"/>
      </div>
    </div>
  );
}

export default App;
