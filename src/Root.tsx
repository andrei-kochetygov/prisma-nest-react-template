import { BrowserRouter } from 'react-router-dom';
import { Routes } from './navigation/Routes';

export const Root = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
