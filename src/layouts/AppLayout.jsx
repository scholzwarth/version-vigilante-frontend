
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const AppLayout = () => {
  return (
    <div className="position-relative">
      <NavBar />
      <main className="mainContainer">
        <Outlet />
      </main>
      <Footer />
    </div >
  );
}

export default AppLayout;