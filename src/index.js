import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter basename="/allflicks">
        <App />
    </BrowserRouter>    
)

reportWebVitals()
