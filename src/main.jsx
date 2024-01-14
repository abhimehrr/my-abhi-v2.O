import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('main-container')).render(
  <React.StrictMode>
        <App />
    {/* <div className='min-h-screen bg-gradient-to-r from-slate-900 to-slate-700'>
      <div className="p-2 lg:w-4/5 md:w-11/12 sm:w-full xl:w-9/12 m-auto">
      </div>
    </div> */}
  </React.StrictMode>,
)