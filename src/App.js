import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar";
import Loader from "./components/Loader";
import PrivateRoute from './views/PrivateRoute';
import PublicRoute from './views/PublicRoute'
import authOperations from "./redux/auth/auth-operations";
import authSelectors from "./redux/auth/auth-selectors";

const HomePage = lazy(() =>
  import("./views/HomePage" /*webpackChunkName: "HomePage-page" */)
);
const Contacts = lazy(() =>
  import("./views/Contacts" /*webpackChunkName: "Contacts-page" */)
);
const FormRegister = lazy(() =>
  import("./views/FormRegister" /*webpackChunkName: "Form-Register-page" */)
);
const FormLogin = lazy(() =>
  import("./views/FormLogin" /*webpackChunkName: "Form-Login-page" */)
);


function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsCurrentUser);

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return ( !isFetchingCurrentUser && (
    <div>
      <AppBar />
      
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<PublicRoute component={HomePage} redirectTo="/contacts" />}/>
          <Route path="/contacts" element={ <PrivateRoute component={Contacts} redirectTo="/login" />}/>
          <Route path="/register" element={ <PublicRoute component={FormRegister} redirectTo="/" restricted/>}/>
          <Route path="/login" element={<PublicRoute component={FormLogin} redirectTo="/contacts" restricted/>}/>
          
        </Routes>
      </Suspense>
    </div>
  ));
}

export default App;
