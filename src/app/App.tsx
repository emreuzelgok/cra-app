import { hot } from 'react-hot-loader/root';
import Pages from '../pages';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Pages />
    </div>
  );
};

export default hot(App);
