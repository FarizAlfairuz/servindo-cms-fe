/* eslint-disable no-nested-ternary */
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useContext } from 'react';
import {
  routes,
  financeRoutes,
  marketingRoutes,
  purchasingRoutes,
  supportRoutes,
  userRoutes,
  changelogRoutes,
  itemRoutes,
} from './routes';
import { NotFoundPage } from '../app/Common/pages';
import DashboardLayout from '../app/Common/components/Layout/DashboardLayout';
import API from '../api/API';
import { logout } from '../redux';
import { AlertContext } from '../contexts/AlertContext';

const useRouter = () => {
  const dispatch = useDispatch();
  const snackbarRef = useContext(AlertContext);
  const user = useSelector((state) => state.authReducer.currentUser);

  const role = user && user.data ? user.data.role : '';

  API.interceptors.response.use(
    (response) => response,
    (error) => {
      if (
        error.response &&
        error.response.status === 401 &&
        error.response.data.message === 'Not authenticated.'
      ) {
        dispatch(logout());
        snackbarRef.current.show();

        return Promise.reject();
      }

      return Promise.reject(error);
    }
  );

  return (
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
            exact
            key={route.name}
            path={route.path()}
            component={route.component}
            role={role}
          />
        ))}
        {marketingRoutes.map((route) => (
          <MarketingRoutes
            exact
            key={route.name}
            path={route.path()}
            component={route.component}
            role={role}
          />
        ))}
        {purchasingRoutes.map((route) => (
          <PurchasingRoutes
            exact
            key={route.name}
            path={route.path()}
            component={route.component}
            role={role}
          />
        ))}
        {supportRoutes.map((route) => (
          <SupportRoutes
            exact
            key={route.name}
            path={route.path()}
            component={route.component}
            role={role}
          />
        ))}
        {userRoutes.map((route) => (
          <UserRoutes
            exact
            key={route.name}
            path={route.path()}
            component={route.component}
            role={role}
          />
        ))}
        {changelogRoutes.map((route) => (
          <CommonRoutes
            exact
            key={route.name}
            path={route.path()}
            component={route.component}
            role={role}
          />
        ))}
        {itemRoutes.map((route) => (
          <ItemRoutes
            exact
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
            <Redirect to="/dashboard/users" />
          ) : role === 'finance' ? (
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

        <Route path="/not-found" component={NotFoundPage} />
        <Route path="*">
          <Redirect to="/not-found" />
        </Route>
      </Switch>
    </Router>
  );
};

const AuthRoutes = ({ role, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() => (!role ? <Component /> : <Redirect to="/dashboard" />)}
  />
);

const CommonRoutes = ({ role, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() =>
      role ? (
        <DashboardLayout role={role}>
          <Component />
        </DashboardLayout>
      ) : (
        <Redirect to="/dashboard" />
      )
    }
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
      role === 'superadmin' || role === 'finance' ? (
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

const ItemRoutes = ({ role, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() =>
      role === 'superadmin' || role === 'marketing' || role === 'purchasing' ? (
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
