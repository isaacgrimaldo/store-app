import { StrictMode } from 'react';
import './App.css';
import { AppRouter } from './routes/AppRouter';

function App() {
  return (
   <StrictMode>
      <AppRouter/>
   </StrictMode>
  );
}

export default App;
