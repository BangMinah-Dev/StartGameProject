import AdminMenu from "../components/navbar/AdminMenu";
export default function LayoutAdmin({ children }) {
  return (
    <>
      <AdminMenu />
      <div className="show-content">{children}</div>
    </>
  );
}
