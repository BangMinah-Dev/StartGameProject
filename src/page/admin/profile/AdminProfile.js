import "./adminProfile.css";
import { useEffect, useState } from "react";
import LayoutAdmin from "../../../layouts/LayoutAdmin";
import { getAdminProfile, UPLOAD_PATH, uploadFile, updateAdminProfile } from "../../../API/api";
import { Form, Spinner, Button } from "react-bootstrap";
import { CheckTokenExpired } from "../../../js/CheckTokenExpired";
import { useDispatch } from "react-redux";
import { updateTokenExpired } from "../../../redux/sliceAdminProfile";
import { useHistory } from "react-router";

export default function AdminProfile() {
  const history = useHistory();
  const dispatch = useDispatch();
  // KIỂM TRA TOKEN TỒN TẠI KHÔNG
  if (localStorage.getItem("token") === null) {
    history.push("/login");
  } else {
    // KIỂM TRA TOKEN HẾT HẠN
    const checkToken = CheckTokenExpired();
    dispatch(updateTokenExpired(checkToken));
  }

  const [adminProfile, setAdminProfile] = useState([{}]);

  const adminID = Number(localStorage.getItem("adminID"));
  const [adminInfo, setAdminInfo] = useState([]);

  // IMAGE
  const [adminAvatarName, setAdminAvatarName] = useState(undefined);
  const [imageInfo, setImageInfo] = useState(undefined);
  // STATE ĐA ĐƯỢC CHUYỂN THÀNH ĐƯỜNG DÂN LOCAL
  const [imagePreview, setImagePreview] = useState("");

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
    if (imageInfo === undefined) {
      // setAdminAvatarName(getInfoAdmin[0].avatar)
    }
    // console.log(getInfoAdmin[0].avatar)
  }, [adminProfile, adminID, imageInfo]);

  function previewImage(event) {
    setImageInfo(event.target.files[0]);
    if (event.target.files[0]) {
      setAdminAvatarName(event.target.files[0].name);
      setImagePreview(event.target.files[0]);
    } else {
      setAdminAvatarName(adminInfo[0].avatar);
      setImagePreview(adminInfo[0].avatar);
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImagePreview(reader.result);
    });

    if (event.target.files[0] !== undefined) {
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  
  async function changeAvatar() {
    let imgFile = new FormData();
    imgFile.append("file", imageInfo);
    const res = await uploadFile(imgFile)
    .then(() => {
      updateAdminProfile(adminID, adminAvatarName)
    }).then(()=>{
      history.push("/login")
    })
    if (res.status === 200) {
      // setMessImage("Upload thành công !");
      // setUpLoading(false);
    }
  }
  
  return (
    <div>
      <LayoutAdmin></LayoutAdmin>
      <div className="container admin-profile">
        <h2 className="text-center">Thông tin cá nhân</h2>
        {adminInfo.length === 0 ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" />
          </div>
        ) : (
          <>
            <div className="row d-flex justify-content-center">
              <div className="col-md-2">
                <div className="admin-label">Ảnh đại diện</div>
              </div>
              <div className="col-md-5">
                <div className="admin-avatar d-flex flex-column">
                  {imageInfo === undefined ? (
                    <img
                      src={UPLOAD_PATH + adminInfo[0]?.avatar}
                      alt="Avatar"
                    ></img>
                  ) : (
                    <img src={imagePreview} alt="Avatar"></img>
                  )}
                  <Form>
                    <Form.Group controlId="upload" className="m-0">
                      <Form.Label className="label-change-avatar">
                        Thay Ảnh
                      </Form.Label>
                      <Form.Control
                        type="file"
                        className="btn mt-2 change-avatar"
                        onChange={(event) => previewImage(event)}
                      />
                    </Form.Group>
                  </Form>
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

            <div className="container d-flex justify-content-center mt-4">
              <Button className="saveChange" onClick={changeAvatar}>Lưu thông tin</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
