import UserDetails from './components/UserDetails';
import PrivacyDetails from './components/PrivacyDetails';
import CompletedSignUp from './components/CompletedSignUp';

const routes = [
  {
    path: '/user',
    exact: true,
    component: UserDetails
  },
  {
    path: '/privacy',
    exact: true,
    component: PrivacyDetails
  },
  {
    path: '/done',
    exact: true,
    component: CompletedSignUp
  }
];

export default routes;
