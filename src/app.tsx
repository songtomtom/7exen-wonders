import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './shared/routes';

import './shared/vendor';
import './styles/app.scss';

function App() {
  const basename =
    process.env.NODE_ENV === 'development'
      ? '/'
      : process.env.PUBLIC_URL || '/';

  return (
    <BrowserRouter basename={basename}>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
