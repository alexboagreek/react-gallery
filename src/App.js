import {useDispatch} from 'react-redux';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {updateToken} from './store/token/tokenReducer';
import {getToken} from './api/token';

function App() {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
