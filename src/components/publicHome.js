import React from 'react';
import '../App.css';

import { R } from '../auth/routeNames'
import { useLocation, useHistory } from 'react-router-dom'
//import { Redirect } from "react-router";

import { authContext } from '../auth/contexts/AuthContext'

import { ConfirmationCodeDialog } from '../auth/containers/modalPortal/modalPortal'


const PublicHome = props => {

  const {
    renewSession,
    auth
  } = React.useContext(authContext);


  const { authFailRoute=R.SIGNIN_ROUTE } = props
  const location = useLocation();
  const history = useHistory()
  const currentLocation = location.pathname


  console.log('publicHome props:', props)
  return (
    <div className="App">

      {/*}<ConfirmationCodeDialog isOpen={false} />*/}

      <header className="App-header">
        <p>
          Public Home..{ JSON.stringify(props) }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={ async()=> {
            const newAuthObj = await renewSession(true) // true = forceUpdate of the session, even if the current session has not expired yet
            if (newAuthObj === null) {
              console.log('ERROR, privateHome calling renewSession failed.')
              // the forwarding to signIn only happens for components that are
              // encapsulated by HOC withAuth(), here I d have to forward the user manually to signIn
              history.push(authFailRoute, { from: currentLocation })
              return
            }
            console.log('SUCCESS, privateHome calling renewSession succeeded:', newAuthObj)
        }}
          disabled={!auth.authenticated}>
          Renew Session Now
        </button>



        <button onClick={ async()=> {
            //const newAuthObj = await renewSession(true) // true = forceUpdate of the session, even if the current session has not expired yet

              // the forwarding to signIn only happens for components that are
              // encapsulated by HOC withAuth(), here I d have to forward the user manually to signIn
              history.push(authFailRoute, { from: currentLocation })
        }}
        >
          Sign In
        </button>

      </header>



    </div>
  );
}

export default PublicHome
