import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

const About = Loadable({
  loader: () => import('./About'),
  loading: Loading,
});

export default About;
