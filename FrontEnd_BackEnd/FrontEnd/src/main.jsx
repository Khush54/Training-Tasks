// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import UserProvider from './Context_Api/UserProvider.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <UserProvider>
//       <App />
//     </UserProvider>
//   </StrictMode>,
// )

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import CRUD from './HTTP TASK/CRUD.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <CRUD>
//       <App />
//     </CRUD>
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import store from './Redux/store.js'
import store from './Sync Redux Task/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)