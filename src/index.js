import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// react-router
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// app
import App from './App';

//pages-router
import { IndexRouters } from './router/index-routers'
import { ErrorRouter } from './router/error-router';

//store
import { Provider } from 'react-redux';
//reducer
import { store } from './store'
import FloatingSellButton from './views/FloatingSellButton';

const router = createBrowserRouter([
  ...IndexRouters,
  ...ErrorRouter
], { basename: process.env.PUBLIC_URL })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <RouterProvider router={router}></RouterProvider>
        <FloatingSellButton />
      </App>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
