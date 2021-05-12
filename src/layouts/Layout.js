import NavbarCustom from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
export default function Layout({ children }) {
  return (
    <div className="container-fluid">
      <NavbarCustom />
      {children}
      <Footer />
    </div>
  );
}
