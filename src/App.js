import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          유해사이트 접속 시도가 확인되어 차단되었습니다.
        </p>
        <p className="comment">
          서울영상고등학교<br />3D 모델링실 관리자
        </p>
      </header>
    </div>
  );
}

export default App;
