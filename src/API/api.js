export const DOMAIN = "http://localhost:3000";
// export const DOMAIN = "https://startgamedata.herokuapp.com";
const PRODUCTS_API = DOMAIN + "/products/";
const COVER_API = DOMAIN + "/COVER";
const COMINGSOON_API = DOMAIN + "/COMINGSOON";
export const UPLOAD_PATH = DOMAIN + "/upload";

// UPLOAD IMAGE
export async function uploadFile(inputFile) {
  const res = fetch(UPLOAD_PATH, {
    method: "POST",
    body: inputFile,
  }).then((res) => {
    if(res.status === 200){
      return res
    }
  })
  return res
}

// ADD NEW PRODUCT
export async function createProduct(inputData) {
  const res = fetch(PRODUCTS_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputData),
  });
  return res
}

// EDIT PRODUCT
export async function editProduct(inputID, inputData) {
  const res = fetch(PRODUCTS_API + inputID, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputData),
  });
  return res
}

// DELETE PRODUCT
export async function deleteProduct(inputID) {
  fetch(PRODUCTS_API + inputID, {
    method: "DELETE",
  });
}

export async function getCover() {
  const cover = await fetch(COVER_API, {
    method: "GET",
  });
  const data = cover.json();
  return data;
}

// GET COMINGSOON
export async function getComingSoon() {
  const comingsoon = await fetch(COMINGSOON_API, {
    method: "GET",
  });
  const data = comingsoon.json();
  return data;
}

// GET PRODUCTS LIST
export async function getProducts() {
  const products = await fetch(PRODUCTS_API + "?_sort=id&_order=desc", {
    method: "GET",
  });
  const data = products.json();
  return data;
}

