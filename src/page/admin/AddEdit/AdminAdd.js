import "./adminadd.css";
import AdminMenu from "../AdminMenu";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { createProduct } from "../../../API/api";
import { useHistory } from "react-router";
import { uploadFile } from "../../../API/api";
export default function AdminAdd() {
  const history = useHistory();

  // STATE GIÁ TRỊ CÁC INPUT TRONG FORM
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productCategory, setProductCategory] = useState("");
  const [discount, setDiscount] = useState(0);
  const [description, setDescription] = useState("");
  // PLATFORM
  const [windows, setWindows] = useState("");
  const [apple, setApple] = useState("");
  const [android, setAndroid] = useState("");
  const [playstation, setPlaystation] = useState("");
  // PLATFORM CHECK
  const [isWindows, setIsWindows] = useState(false);
  const [isApple, setIsApple] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isPlayStation, setIsPlayStation] = useState(false);

  // IMAGE
  const [imageInfo, setImageInfo] = useState("");
  // STATE ĐA ĐƯỢC CHUYỂN THÀNH ĐƯỜNG DÂN LOCAL
  const [imagePreview, setImagePreview] = useState("");

  // Lấy ra tên ảnh để lưu vào database
  let imageName = imageInfo.name;

  let data = {
    image: "/" + imageName,
    name: productName,
    price: productPrice,
    category: productCategory,
    windows: { value: isWindows, icon: windows },
    apple: { value: isApple, icon: apple },
    android: { value: isAndroid, icon: android },
    playstation: { value: isPlayStation, icon: playstation },
    discount: Number(discount),
    description: description,
  };

  function addProduct() {
    createProduct(data);
    history.push("/admin");
  }

  //
  function previewImage(event) {
    setImageInfo(event.target.files[0]);
    if (event.target.files[0]) {
      setImagePreview(event.target.files[0]);
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImagePreview(reader.result);
    });

    reader.readAsDataURL(event.target.files[0]);
  }

  function uploadImage() {
    let imgFile = new FormData();
    imgFile.append("file", imageInfo);
    uploadFile(imgFile);
  }

  function checkWindows(event) {
    if (event.target.checked === true) {
      setWindows(event.target.value);
      setIsWindows(true);
    } else {
      setWindows("");
      setIsWindows(false);
    }
  }

  function checkApple(event) {
    if (event.target.checked === true) {
      setApple(event.target.value);
      setIsApple(true);
    } else {
      setApple("");
      setIsApple(false);
    }
  }

  function checkAndroid(event) {
    if (event.target.checked === true) {
      setAndroid(event.target.value);
      setIsAndroid(true);
    } else {
      setAndroid("");
      setIsAndroid(false);
    }
  }

  function checkPlayStation(event) {
    if (event.target.checked === true) {
      setPlaystation(event.target.value);
      setIsPlayStation(true);
    } else {
      setPlaystation("");
      setIsPlayStation(false);
    }
  }

  return (
    <div>
      <AdminMenu />
      <h1 className="mt-4 text-center">Thêm sản phẩm</h1>
      <div className="show-content">
        <Form className="mt-2">
          <div className="row">
            <div className="col-md-6">
              <Form.Group controlId="Tên sản phẩm">
                <Form.Label>Tên sản phẩm</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue=""
                  onChange={(event) => setProductName(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="Giá sản phẩm">
                <Form.Label>Giá sản phẩm</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue=""
                  onChange={(event) => setProductPrice(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="Thể loại">
                <Form.Label>Thể loại</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue=""
                  onChange={(event) => setProductCategory(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="d-flex platfrom-label">
                <Form.Label className="mr-2">Nền Tảng : </Form.Label>
                {["checkbox"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3 d-flex">
                    <Form.Check
                      inline
                      label="Windows"
                      name="group1"
                      type={type}
                      value="fab fa-windows"
                      defaultChecked={false}
                      id={`inline-${type}-1`}
                      onChange={(event) => checkWindows(event)}
                    />
                    <Form.Check
                      inline
                      label="Apple"
                      name="group1"
                      type={type}
                      value="fab fa-apple"
                      defaultChecked={false}
                      id={`inline-${type}-2`}
                      onChange={(event) => checkApple(event)}
                    />
                    <Form.Check
                      inline
                      label="Android"
                      name="group1"
                      type={type}
                      value="fab fa-google-play"
                      defaultChecked={false}
                      id={`inline-${type}-3`}
                      onChange={(event) => checkAndroid(event)}
                    />
                    <Form.Check
                      inline
                      label="PlayStation"
                      name="group1"
                      type={type}
                      value="fab fa-playstation"
                      defaultChecked={false}
                      id={`inline-${type}-4`}
                      onChange={(event) => checkPlayStation(event)}
                    />
                  </div>
                ))}
              </Form.Group>
              <Form.Group controlId="Giá giảm">
                <Form.Label>Giá giảm ( % )</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={0}
                  min={0}
                  onChange={(event) => setDiscount(event.target.value)}
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="upload">
                <Form.Label>Chọn ảnh sản phẩm :</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(event) => previewImage(event)}
                />
              </Form.Group>
              {imageInfo === "" ? (
                ""
              ) : (
                <div className="preview-image">
                  <img src={imagePreview} alt={imageName}></img>{" "}
                </div>
              )}
              {imageInfo === "" ? (
                <Button
                  className="button-upload-disable mt-3"
                  type="button"
                  disabled
                >
                  UPLOAD
                </Button>
              ) : (
                <Button
                  className="button-upload mt-3"
                  type="button"
                  onClick={uploadImage}
                >
                  UPLOAD
                </Button>
              )}
            </div>
          </div>
          <Form.Group controlId="Mô tả sản phẩm">
            <Form.Label className="mt-3">Mô tả sản phẩm</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Form.Group>

          <Button className="button-add" type="button" onClick={addProduct}>
            THÊM SẢN PHẨM
          </Button>
        </Form>
      </div>
    </div>
  );
}
