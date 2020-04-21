import { userStepCompleted, privacyStepCompleted } from '../../redux/selectors';

import ConnectedUserDetails from './components/UserDetails';
import ConnectedPrivacyDetails from './components/PrivacyDetails';
import ConnectedCompletedSignUp from './components/CompletedSignUp';

/**
 * routes array - contains objects used for defining the routing configuration for each page.
 */
const routes = [
  {
    path: '/user',
    exact: true,
    component: ConnectedUserDetails,
    reachable: () => true
  },
  {
    path: '/privacy',
    exact: true,
    component: ConnectedPrivacyDetails,
    reachable: userStepCompleted,
    fallbackPath: '/user'
  },
  {
    path: '/done',
    exact: true,
    component: ConnectedCompletedSignUp,
    reachable: privacyStepCompleted,
    fallbackPath: '/privacy'
  }
];

export default routes;
