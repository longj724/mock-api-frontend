// External Dependencies
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// Relative Dependencies
import './index.css';
import 'tailwindcss/tailwind.css';
import App from './App';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </StrictMode>
  );
}
