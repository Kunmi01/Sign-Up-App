import { userStepCompleted, privacyStepCompleted } from '../../redux/selectors';

import UserDetails from './components/UserDetails';
import PrivacyDetails from './components/PrivacyDetails';
import CompletedSignUp from './components/CompletedSignUp';

/**
 * routes array - contains objects used for defining the routing configuration for each page.
 */
const routes = [
  {
    path: '/user',
    exact: true,
    component: UserDetails,
    reachable: () => true
  },
  {
    path: '/privacy',
    exact: true,
    component: PrivacyDetails,
    reachable: userStepCompleted,
    fallbackPath: '/user'
  },
  {
    path: '/done',
    exact: true,
    component: CompletedSignUp,
    reachable: privacyStepCompleted,
    fallbackPath: '/privacy'
  }
];

export default routes;
