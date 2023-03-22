import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import { DragDropContext } from 'react-beautiful-dnd';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <DragDropContext>
        <App />
    </DragDropContext>
);

