import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// CreateRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(<App />);
