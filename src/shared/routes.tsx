import React, { Suspense, lazy } from 'react';
import {
  withRouter,
  Switch,
  Route,
  Redirect,
  RouteProps
} from 'react-router-dom';

import PageLoader from '../components/page-loader/page-loader';
import Wrapper from '../components/wrapper/wrapper';

const waitFor = (Tag: React.LazyExoticComponent<any>) => (props: any) => (
  <Tag {...props} />
);

const Main = lazy(() => import('../pages/main'));

function Routes({ location }: RouteProps) {
  return (
    <Wrapper>
      <Suspense fallback={<PageLoader />}>
        <Switch location={location}>
          <Route path="/" component={waitFor(Main)} />

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Wrapper>
  );
}

export default withRouter(Routes);
