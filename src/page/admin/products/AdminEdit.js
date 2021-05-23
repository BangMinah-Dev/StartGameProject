import "./adminadd.css";
import LayoutAdmin from "../../../layouts/LayoutAdmin";
import { Form, Button, Spinner } from "react-bootstrap";
import ConfirmModalEdit from "../../../components/modal/ConfirmModalEdit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectID,
  selectProductImage,
  selectName,
  selectPrice,
  selectCategory,
  selectDiscount,
  selectDescription,
  selectWindows,
  selectApple,
  selectAndroid,
  selectPlayStation,
  selectWindowsIcon,
  selectAppleIcon,
  selectAndroidIcon,
  selectPlayStationIcon,
  updateProductImage,
  updateName,
  updatePrice,
  updateCategory,
  updateDiscount,
  updateDescription,
  updateWindows,
  updateApple,
  updateAndroid,
  updatePlayStation,
  updateWindowsIcon,
  updateAppleIcon,
  updateAndroidIcon,
  updatePlayStationIcon,
} from "../../../redux/sliceProductDetails";

import { useHistory } from "react-router";
import { uploadFile, editProduct, UPLOAD_PATH } from "../../../API/api";
import { CheckTokenExpired } from "../../../js/CheckTokenExpired"

export default function AdminEdit() {
  const dispatch = useDispatch();
  const history = useHistory();

  // KIỂM TRA TOKEN HẾT HẠN
  CheckTokenExpired()
  // KIỂM TRA TOKEN TỒN TẠI KHÔNG
  if (localStorage.getItem("token") === null) {
    history.push("/login");
  }

  const [show, setShow] = useState(false)
  // TỰ ĐỘNG CHUYỂN VỀ TRANG DANH SÁCH SẢN PHẨM
  if(show === true){
    setTimeout(function(){history.push("./admin-products")}, 2500)
  } 

  const productID = useSelector(selectID);
  const productImage = useSelector(selectProductImage);
  const productNameRedux = useSelector(selectName);
  const productPriceRedux = useSelector(selectPrice);
  const productCategoryRedux = useSelector(selectCategory);
  const productDiscountRedux = useSelector(selectDiscount);
  const productDescriptionRedux = useSelector(selectDescription);
  // PLATFORM
  const windowsRedux = useSelector(selectWindowsIcon);
  const appleRedux = useSelector(selectAppleIcon);
  const androidRedux = useSelector(selectAndroidIcon);
  const playstationRedux = useSelector(selectPlayStationIcon);
  // PLATFORM CHECK
  const isWindowsRedux = useSelector(selectWindows);
  const isAppleRedux = useSelector(selectApple);
  const isAndroidRedux = useSelector(selectAndroid);
  const isPlaystationRedux = useSelector(selectPlayStation);

  // IMAGE
  const [imageInfo, setImageInfo] = useState(undefined);
  // STATE ĐA ĐƯỢC CHUYỂN THÀNH ĐƯỜNG DÂN LOCAL
  const [imagePreview, setImagePreview] = useState(undefined);
  const [messImage, setMessImage] = useState("");
  const [upLoading, setUpLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  let data = {
    image: productImage,
    name: productNameRedux,
    price: productPriceRedux,
    category: productCategoryRedux,
    windows: { value: isWindowsRedux, icon: windowsRedux },
    apple: { value: isAppleRedux, icon: appleRedux },
    android: { value: isAndroidRedux, icon: androidRedux },
    playstation: { value: isPlaystationRedux, icon: playstationRedux },
    discount: Number(productDiscountRedux),
    description: productDescriptionRedux,
  };

  // EDIT PRODUCT
  async function updateProduct() {
    setIsEditing(true)
    const res = await editProduct(productID, data);
    if (res.status === 200) {
      setIsEditing(false)
      setShow(true)
      // history.push("/admin-products");
    }
  }

  //
  function previewImage(event) {
    setImageInfo(event.target.files[0]);
    if(event.target.files[0] !== undefined){
      dispatch(updateProductImage(event.target.files[0].name));
      setImagePreview(event.target.files[0]);
    }else{
      dispatch(updateProductImage(""));
      setImagePreview(undefined);
    }

    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setImagePreview(reader.result);
    });

    if(event.target.files[0] !== undefined){
      reader.readAsDataURL(event.target.files[0]);
    }
    // reader.readAsDataURL(event.target.files[0]);
  }

  async function uploadImage() {
    setUpLoading(true)
    let imgFile = new FormData();
    imgFile.append("file", imageInfo);
    const res = await uploadFile(imgFile);
    if (res.status === 200) {
      setUpLoading(false)
      setMessImage("Upload thành công !");
    }else{
      setUpLoading(false)
      setMessImage("Upload lỗi !")
    }
  }

  function checkWindows(event) {
    if (event.target.checked === true) {
      dispatch(updateWindowsIcon(event.target.value));
      dispatch(updateWindows(true));
    } else {
      dispatch(updateWindowsIcon(""));
      dispatch(updateWindows(false));
    }
  }

  function checkApple(event) {
    if (event.target.checked === true) {
      dispatch(updateAppleIcon(event.target.value));
      dispatch(updateApple(true));
    } else {
      dispatch(updateAppleIcon(""));
      dispatch(updateApple(false));
    }
  }

  function checkAndroid(event) {
    if (event.target.checked === true) {
      dispatch(updateAndroidIcon(event.target.value));
      dispatch(updateAndroid(true));
    } else {
      dispatch(updateAndroidIcon(""));
      dispatch(updateAndroid(false));
    }
  }

  function checkPlayStation(event) {
    if (event.target.checked === true) {
      dispatch(updatePlayStationIcon(event.target.value));
      dispatch(updatePlayStation(true));
    } else {
      dispatch(updatePlayStationIcon(""));
      dispatch(updatePlayStation(false));
    }
  }

  console.log("imgInfo : ", imageInfo)
  return (
    <div className="form">
      <LayoutAdmin />
      <h1 className="mt-4 text-center">Sửa sản phẩm</h1>
      <div className="show-content">
        <Form className="mt-2">
          <div className="row">
            <div className="left-content col-md-6">
              <Form.Group controlId="Tên sản phẩm">
                <Form.Label>Tên sản phẩm :</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={productNameRedux}
                  onChange={(event) => dispatch(updateName(event.target.value))}
                />
              </Form.Group>
              <Form.Group controlId="Giá sản phẩm">
                <Form.Label>Giá sản phẩm :</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={productPriceRedux}
                  onChange={(event) =>
                    dispatch(updatePrice(event.target.value))
                  }
                />
              </Form.Group>
              <Form.Group controlId="Thể loại">
                <Form.Label>Thể loại :</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={productCategoryRedux}
                  onChange={(event) =>
                    dispatch(updateCategory(event.target.value))
                  }
                />
              </Form.Group>
              <Form.Group className="d-flex platfrom-label">
                <Form.Label className="mr-2">Nền Tảng :</Form.Label>
                {["checkbox"].map((type) => (
                  <div key={`inline-${type}`} className="d-flex flex-wrap">
                    <Form.Check
                      inline
                      label="Windows"
                      name="group1"
                      type={type}
                      value="fab fa-windows"
                      defaultChecked={isWindowsRedux}
                      id={`inline-${type}-1`}
                      onChange={(event) => checkWindows(event)}
                    />
                    <Form.Check
                      inline
                      label="Apple"
                      name="group1"
                      type={type}
                      value="fab fa-apple"
                      defaultChecked={isAppleRedux}
                      id={`inline-${type}-2`}
                      onChange={(event) => checkApple(event)}
                    />
                    <Form.Check
                      inline
                      label="Android"
                      name="group1"
                      type={type}
                      value="fab fa-google-play"
                      defaultChecked={isAndroidRedux}
                      id={`inline-${type}-3`}
                      onChange={(event) => checkAndroid(event)}
                    />
                    <Form.Check
                      inline
                      label="PlayStation"
                      name="group1"
                      type={type}
                      value="fab fa-playstation"
                      defaultChecked={isPlaystationRedux}
                      id={`inline-${type}-4`}
                      onChange={(event) => checkPlayStation(event)}
                    />
                  </div>
                ))}
              </Form.Group>
              <Form.Group controlId="Giá giảm">
                <Form.Label>Giá giảm ( % ) :</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={productDiscountRedux}
                  min={0}
                  onChange={(event) =>
                    dispatch(updateDiscount(event.target.value))
                  }
                />
              </Form.Group>
            </div>
            <div className="right-content col-md-6">
              <Form.Group controlId="Ảnh sản phẩm">
                <Form.Label>Chọn ảnh sản phẩm :</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(event) => previewImage(event)}
                />
              </Form.Group>
              {imagePreview === undefined ? (
                <div className="preview-image">
                  <img
                    src={UPLOAD_PATH + productImage}
                    alt={productImage}
                  ></img>
                </div>
              ) : (
                <div className="preview-image">
                  <img src={imagePreview} alt={productImage}></img>
                </div>
              )}
              <div className="d-flex">
                {imageInfo === undefined ? (
                  <Button className="button-upload-disable mt-3" disabled>
                    UPLOAD
                  </Button>
                ) : (
                  <Button className="button-upload mt-3" onClick={uploadImage}>
                    UPLOAD
                    {upLoading === true ? (
                      <Spinner
                        className="upload-icon"
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : (
                      ""
                    )}
                  </Button>
                )}
                <div className="upload-done mt-4 ml-3">{messImage}</div>
              </div>
            </div>
          </div>
          <Form.Group controlId="Mô tả sản phẩm">
            <Form.Label className="mt-3">Mô tả sản phẩm :</Form.Label>
            <Form.Control
              as="textarea"
              defaultValue={productDescriptionRedux}
              rows={3}
              onChange={(event) =>
                dispatch(updateDescription(event.target.value))
              }
            />
          </Form.Group>
          {isEditing === false ? (
            <Button className="button-add" type="button" onClick={updateProduct}>
              Chỉnh sửa
            </Button>
          ) : (
            <Button className="button-add" type="button" disabled>
              Chỉnh sửa
              <Spinner
                className="upload-icon"
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            </Button>
          )}
        </Form>
        <ConfirmModalEdit show={show}></ConfirmModalEdit>
      </div>
    </div>
  );
}
