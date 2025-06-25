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
import { AuthRouter } from './router/auth-router';

//store
import { Provider } from 'react-redux';
//reducer
import { store } from './store'
import FloatingSellButton from './views/FloatingSellButton';

const router = createBrowserRouter([
  ...IndexRouters,
  ...ErrorRouter,
  ...AuthRouter
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
