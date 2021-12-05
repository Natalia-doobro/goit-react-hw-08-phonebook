import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors  from '../redux/auth/auth-selectors';

export default function PrivateRoute({ component: Component, redirectTo }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <>{isLoggedIn ? <Component /> : <Navigate to={redirectTo} />}</>;
}
