import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Le contenu de la route actuelle sera rendu ici */}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
