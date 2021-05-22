import "./adminProfile.css";
import { useEffect, useState } from "react";
import LayoutAdmin from "../../../layouts/LayoutAdmin";
import { getAdminProfile, UPLOAD_PATH } from "../../../API/api";
import { Button } from "react-bootstrap";
export default function AdminProfile() {

  const [adminProfile, setAdminProfile] = useState([{}]);

  const adminID = Number(localStorage.getItem("adminID"));

  const [arr, setArr] = useState("");

  useEffect(() => {
    (async function fetchData() {
      const res = await getAdminProfile();
      const data = await res.json();
      if (res.status === 200) {
        setAdminProfile(data);
      }
    })();
  }, []);

  useEffect(() => {
    const getInfoAdmin = adminProfile.filter((admin) => admin.id === adminID);
    setArr(getInfoAdmin);
  }, [adminProfile, adminID]);

  console.log("arr : ", arr);

  return (
    <div>
      <LayoutAdmin></LayoutAdmin>
      <div className="container admin-profile">
        <h2 className="text-center">Thông tin cá nhân</h2>
        <div className="row d-flex justify-content-center">
          <div className="col-md-2">
            <div className="admin-label">
              <p>Ảnh đại diện</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="admin-avatar d-flex flex-column">
              {arr !== "" && <img src={ UPLOAD_PATH + arr[0]?.avatar} alt="Avatar"></img>}
              <Button className="btn mt-2 change-avatar">Thay Ảnh</Button>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-md-2">
            <div className="admin-label">Email : </div>
          </div>
          <div className="col-md-3">
            <div>{arr[0]?.email}</div>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-md-2">
            <div className="admin-label">Mật khẩu : </div>
          </div>
          <div className="col-md-3">{arr[0]?.password}</div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-md-2">
            <div className="admin-label">Số điện thoại : </div>
          </div>
          <div className="col-md-3">
            <div>{arr[0]?.phone}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
