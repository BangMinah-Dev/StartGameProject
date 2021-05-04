import axios from "axios";

// export const DOMAIN = "http://localhost:3000";
export const DOMAIN = "https://startgamedata.herokuapp.com"
const PRODUCTS_API = DOMAIN + "/products";
const COVER_API = DOMAIN + "/COVER";
const COMINGSOON_API = DOMAIN + "/COMINGSOON";
export const UPLOAD_PATH = DOMAIN + "/upload";

export async function uploadFile(inputFile) {
  fetch(UPLOAD_PATH, {
    method: "POST",
    body: inputFile,
  }).then((res) => {
    console.log(res)
  })
}

export async function createProduct(inputData) {
  const res = await fetch(PRODUCTS_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputData),
  });
  return res;
}

export async function deleteProduct(inputData) {
  const res = await fetch(PRODUCTS_API, {
    method: "DELETE"
  });
  return res;
}

const apis = axios.create({
  baseURL: "http://localhost:3000",
  headers: { Authorization: "token" },
});

// GET COVER
export async function getCover() {
  return apis.get(COVER_API).then((res) => {
    let cover = res.data;
    return cover;
  });
}

// GET COMINGSOON
export async function getComingSoon() {
  return apis.get(COMINGSOON_API).then((res) => {
    let comingSoon = res.data;
    return comingSoon;
  });
}

// GET PRODUCTS LIST
export async function getProducts() {
  return apis.get(PRODUCTS_API + "?_sort=id&_order=desc").then((res) => {
    let products = res.data;
    return products;
  });
}

// CHECK LOGIN
export async function checkLogin(adminEmail, adminPassword) {
  return apis
    .post(`/login`, { email: adminEmail, password: adminPassword })
    .then(function (res) {
      const token = res.data.token;
      localStorage.setItem("token", token);
      return res;
    });
}

// ADD NEW PRODUCTS
// export async function createProduct(inputData) {
//   await axios({
//     method: "POST",
//     url: PRODUCTS_API,
//     data: inputData,
//   });
// }
