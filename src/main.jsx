import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}  signUpFallbackRedirectUrl="/dashboard/user">
          <RecoilRoot>
            <App />
          </RecoilRoot>
      
      </ClerkProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
