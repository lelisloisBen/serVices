import React, { Suspense, lazy, useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { UserContext } from './UserContext';

import Footer from './js/components/Footer/Footer';
import NotFound from './js/components/NotFound/NotFound';

const Home = lazy(() => import('./js/views/Home/Home'));
const Login = lazy(() => import('./js/views/Login/Login'));

function App() {

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

  const providerValue = useMemo(() => ({ windowHeight }), [ windowHeight ]);

  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <Suspense fallback={<div>Loading...</div>}>
          <JobTrialNavbar/>
          <section style={{minHeight: windowHeight}}>
            <Switch>
              {!tokenAuth ? <Route exact path="/" component={Home} /> : <Route exact path="/" component={LoggedHome}/> }
              <Route path="/login" component={Login} />
              <Route render={() => <NotFound/>} />
            </Switch>
            </section>
          <Footer/>
        </Suspense>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
