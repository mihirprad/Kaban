import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import { AuthProvider } from "./Store/auth-context";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
        <AuthProvider >
                <App />
        </AuthProvider>
);

