import axios from 'axios';
import { Home } from './containers/home';
import { Provider } from 'react-redux';
import { store } from './store/store';

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

function App() {
  return (
    <>
      <Provider store={ store }>
        <Home />
      </Provider>
    </>
  );
}

export default App;
