import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  routes,
  financeRoutes,
  marketingRoutes,
  purchasingRoutes,
  supportRoutes,
  userRoutes,
} from './routes';

const useRouter = () => (
  <Router>
    <Switch>
      {routes.map((route) => (
        <Route key={route.name} path={route.path} component={route.component} />
      ))}
      {financeRoutes.map((route) => (
        <Route key={route.name} path={route.path} component={route.component} />
      ))}
      {marketingRoutes.map((route) => (
        <Route key={route.name} path={route.path} component={route.component} />
      ))}
      {purchasingRoutes.map((route) => (
        <Route key={route.name} path={route.path} component={route.component} />
      ))}
      {supportRoutes.map((route) => (
        <Route key={route.name} path={route.path} component={route.component} />
      ))}
      {userRoutes.map((route) => (
        <Route key={route.name} path={route.path} component={route.component} />
      ))}
    </Switch>
  </Router>
);

export default useRouter;
