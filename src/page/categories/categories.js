import Layout from '../../layouts/Layout';
import NewArrival from "../../components/newArrival/NewArrival"
export default function Categories(){

  return(
    <Layout>
      <h2 className="container">Thể loại</h2>
      <NewArrival page={""} limitItem={""} sort={"id"} order={"desc"}/>
    </Layout>
  )
}