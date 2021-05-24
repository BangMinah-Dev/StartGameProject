import "./adminProfile.css";
import { useEffect, useState } from "react";
import LayoutAdmin from "../../../layouts/LayoutAdmin";
import { getAdminProfile, UPLOAD_PATH } from "../../../API/api";
import { Button } from "react-bootstrap";
import { CheckTokenExpired } from "../../../js/CheckTokenExpired";
import { useDispatch } from "react-redux";
import { updateTokenExpired } from "../../../redux/sliceAdminProfile";
import { useHistory } from "react-router";

export default function AdminProfile() {
  const history = useHistory();
  const dispatch = useDispatch();

  // KIỂM TRA TOKEN HẾT HẠN
  const checkToken = CheckTokenExpired();
  dispatch(updateTokenExpired(checkToken));
  // KIỂM TRA TOKEN TỒN TẠI KHÔNG
  if (localStorage.getItem("token") === null) {
    history.push("/login");
  }

  const [adminProfile, setAdminProfile] = useState([{}]);

  const adminID = Number(localStorage.getItem("adminID"));

  const [adminInfo, setAdminInfo] = useState([]);

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
    setAdminInfo(getInfoAdmin);
  }, [adminProfile, adminID]);

  return (
    <div>
      <LayoutAdmin></LayoutAdmin>
      <div className="container admin-profile">
        <h2 className="text-center">Thông tin cá nhân</h2>
        <div className="row d-flex justify-content-center">
          <div className="col-md-2">
            <div className="admin-label">Ảnh đại diện</div>
          </div>
          <div className="col-md-5">
            <div className="admin-avatar d-flex flex-column">
              {adminInfo[0] === undefined ? (
                ""
              ) : (
                <img src={UPLOAD_PATH + adminInfo[0]?.avatar} alt="Avatar"></img>
              )}
              <Button className="btn mt-2 change-avatar">Thay Ảnh</Button>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-md-2">
            <div className="admin-label">Email : </div>
          </div>
          <div className="col-md-5">
            <div className="admin-content">{adminInfo[0]?.email}</div>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-md-2">
            <div className="admin-label">Mật khẩu : </div>
          </div>
          <div className="col-md-5">
            <div className="admin-content">{adminInfo[0]?.password}</div>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-md-2">
            <div className="admin-label">Số điện thoại : </div>
          </div>
          <div className="col-md-5">
            <div className="admin-content">{adminInfo[0]?.phone}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
