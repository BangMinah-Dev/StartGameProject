import "./homepage.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../../layouts/Layout";
import Cover from "../../components/cover/Cover"
import ComingSoon from "../../components/comingSoon/ComingSoon"
import NewArrival from "../../components/newArrival/NewArrival"

export default function HomePage() {

  document.title = "Trang Chủ"
  return (
    <Layout>
      <Cover/>
      <ComingSoon/>
      <h3 className="container mb-4">Game Mới Đăng</h3>
      <NewArrival page={1} limitItem={12} sort={"id"} order={"desc"} />
    </Layout>
  );
}

