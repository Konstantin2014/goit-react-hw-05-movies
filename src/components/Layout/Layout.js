import { AppBar } from '../Appbar/AppBar';
import { Container } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Outlet />
    </Container>
  );
};
