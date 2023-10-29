// components/Layout.js
import Navbar from './NavBar';

//elemented present on all pages
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar ></Navbar>
      {children}
    </div>
  );
};

export default Layout;