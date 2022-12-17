import { App } from 'components';
import { HomePage } from 'modules/home';
import { Routes as NavigationRoutes, Route } from 'react-router-dom';

export const Routes = () => {
  return (
    <NavigationRoutes>
      <Route path="/">
        <Route element={<App />}>
          <Route index element={<HomePage />} />
        </Route>
      </Route>
    </NavigationRoutes>
  );
};
