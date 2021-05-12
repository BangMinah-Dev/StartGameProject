import AdminMenu from "../components/navbar/AdminMenu";
export default function LayoutAdmin({ children }) {
  return (
    <>
      <AdminMenu />
      {children}
    </>
  );
}
