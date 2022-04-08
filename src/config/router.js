/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  routes,
  financeRoutes,
  marketingRoutes,
  purchasingRoutes,
  supportRoutes,
  userRoutes,
} from './routes';
import DashboardLayout from '../app/Common/components/DashboardLayout';

const useRouter = ({ role }) => (
  <Router>
    <Switch>
      {routes.map((route) => (
        <AuthRoutes
          exact
          key={route.name}
          path={route.path()}
          component={route.component}
          role={role}
        />
      ))}
      {financeRoutes.map((route) => (
        <FinanceRoutes
          key={route.name}
          path={route.path()}
          component={route.component}
          role={role}
        />
      ))}
      {marketingRoutes.map((route) => (
        <MarketingRoutes
          key={route.name}
          path={route.path()}
          component={route.component}
          role={role}
        />
      ))}
      {purchasingRoutes.map((route) => (
        <PurchasingRoutes
          key={route.name}
          path={route.path()}
          component={route.component}
          role={role}
        />
      ))}
      {supportRoutes.map((route) => (
        <SupportRoutes
          key={route.name}
          path={route.path()}
          component={route.component}
          role={role}
        />
      ))}
      {userRoutes.map((route) => (
        <UserRoutes
          key={route.name}
          path={route.path()}
          component={route.component}
          role={role}
        />
      ))}
      <Route exact path="/">
        {role ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/dashboard">
        {role === 'superadmin' ? (
          <Redirect to="/dashboard/user" />
        ) : role === 'keuangan' ? (
          <Redirect to="/dashboard/pemasukan" />
        ) : role === 'marketing' ? (
          <Redirect to="/dashboard/penjualan" />
        ) : role === 'purchasing' ? (
          <Redirect to="/dashboard/pembelian" />
        ) : role === 'support' ? (
          <Redirect to="/dashboard/riwayat-service" />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  </Router>
);

const AuthRoutes = ({ role, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() => (!role ? <Component /> : <Redirect to="/dashboard" />)}
  />
);

const UserRoutes = ({ role, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() =>
      role === 'superadmin' ? (
        <DashboardLayout role={role}>
          <Component />
        </DashboardLayout>
      ) : (
        <Redirect to="/dashboard" />
      )
    }
  />
);

const FinanceRoutes = ({ role, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() =>
      role === 'superadmin' || role === 'keuangan' ? (
        <DashboardLayout role={role}>
          <Component />
        </DashboardLayout>
      ) : (
        <Redirect to="/dashboard" />
      )
    }
  />
);

const MarketingRoutes = ({ role, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() =>
      role === 'superadmin' || role === 'marketing' ? (
        <DashboardLayout role={role}>
          <Component />
        </DashboardLayout>
      ) : (
        <Redirect to="/dashboard" />
      )
    }
  />
);

const PurchasingRoutes = ({ role, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() =>
      role === 'superadmin' || role === 'purchasing' ? (
        <DashboardLayout role={role}>
          <Component />
        </DashboardLayout>
      ) : (
        <Redirect to="/dashboard" />
      )
    }
  />
);

const SupportRoutes = ({ role, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() =>
      role === 'superadmin' || role === 'support' ? (
        <DashboardLayout role={role}>
          <Component />
        </DashboardLayout>
      ) : (
        <Redirect to="/dashboard" />
      )
    }
  />
);

export default useRouter;
