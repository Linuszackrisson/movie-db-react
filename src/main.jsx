import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import App from './App';
import './index.css';

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(<App />);
