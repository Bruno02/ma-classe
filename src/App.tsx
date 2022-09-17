import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from 'src/router';
import store from 'src/store';

const App: React.FC = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

export default App;
