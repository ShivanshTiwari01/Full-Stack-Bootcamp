import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Heading from './components/Heading.tsx';
import List from './components/List.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Heading />
    <List />
  </StrictMode>
);
