import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading,
});

export default Home;
