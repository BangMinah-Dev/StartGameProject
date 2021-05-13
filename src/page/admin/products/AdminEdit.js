import "./adminadd.css";
import LayoutAdmin from "../../../layouts/LayoutAdmin";
import { Form, Button } from "react-bootstrap";
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

export default function AdminEdit() {
  const dispatch = useDispatch();
  const history = useHistory();
  if(localStorage.getItem("token") === null){
    history.push("/login")
  }

  const productID = useSelector(selectID);
  const productImage = useSelector(selectProductImage)
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
  const [imageInfo, setImageInfo] = useState("");
  // STATE ĐA ĐƯỢC CHUYỂN THÀNH ĐƯỜNG DÂN LOCAL
  const [imagePreview, setImagePreview] = useState("");
  const [messImage, setMessImage] = useState("");


  let data = {
    image: "/" + productImage,
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
    const res = await editProduct(productID, data);
    if(res.status === 200){
      history.push("/admin-products");
    }
  }

  //
  function previewImage(event) {
    setImageInfo(event.target.files[0]);
    dispatch(updateProductImage(event.target.files[0].name))
    if (event.target.files[0]) {
      setImagePreview(event.target.files[0]);
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImagePreview(reader.result);
    });

    reader.readAsDataURL(event.target.files[0]);
  }

  async function uploadImage() {
    let imgFile = new FormData();
    imgFile.append("file", imageInfo);
    const res = await uploadFile(imgFile);
    if (res.status === 200) {
      setMessImage("Upload thành công");
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

  return (
    <div className="form">
      <LayoutAdmin />
      <h1 className="mt-4 text-center">Sửa sản phẩm</h1>
      <div className="container show-content">
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
                  <div key={`inline-${type}`} className="mb-3 d-flex flex-wrap">
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
              <Form.Group controlId="Thể loại">
                <Form.Label>Chọn ảnh sản phẩm :</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(event) => previewImage(event)}
                />
              </Form.Group>
              {imagePreview === "" ? (
                <div className="preview-image">
                  <img src={UPLOAD_PATH + "/" + productImage} alt={productImage}></img>
                </div>
              ) : (
                <div className="preview-image">
                  <img src={imagePreview} alt={productImage}></img>
                </div>
              )}
              {imageInfo === "" ? (
                <Button className="button-upload-disable mt-3" disabled>
                  UPLOAD
                </Button>
              ) : (
                <Button className="button-upload mt-3" onClick={uploadImage}>
                  UPLOAD
                </Button>
              )}
                <span className="ml-3">{messImage}</span>
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

          <Button className="button-edit" type="button" onClick={updateProduct}>
            Chỉnh sửa
          </Button>
        </Form>
      </div>
    </div>
  );
}