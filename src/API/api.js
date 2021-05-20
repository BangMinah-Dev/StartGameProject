// export const DOMAIN = "http://localhost:3000";
export const DOMAIN = "https://startgamedata.herokuapp.com";
const PRODUCTS_API = DOMAIN + "/products/";
const COVER_API = DOMAIN + "/COVER";
const COMINGSOON_API = DOMAIN + "/COMINGSOON/";
export const UPLOAD_PATH = DOMAIN + "/upload/";

// UPLOAD IMAGE
export async function uploadFile(inputFile) {
  const res = fetch(UPLOAD_PATH, {
    method: "POST",
    body: inputFile,
  }).then((res) => {
    if (res.status === 200) {
      return res;
    }
  });
  return res;
}

// API COVER
export async function getCover() {
  const cover = await fetch(COVER_API, {
    method: "GET",
  });
  const data = cover.json();
  return data;
}

// API PRODUCT
// GET PRODUCTS LIST
export async function getProducts(page, pageLimit, sort, order) {
  let pageParam = page ? `?_page=${page}` : "?";
  let pageLimitParam = pageLimit ? `&_limit=${pageLimit}` : "?";
  let sortParam = sort ? `&_sort=${sort}` : "";
  let orderParam = sort ? `&_order=${order}` : "";
  const products = await fetch(
    `${PRODUCTS_API}${pageParam}${pageLimitParam}${sortParam}${orderParam}`,
    {
      method: "GET",
    }
  );
  return products;
}

// ADD PRODUCT
export async function createProduct(inputData) {
  const res = fetch(PRODUCTS_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputData),
  });
  return res;
}

// EDIT PRODUCT
export async function editProduct(inputID, inputData) {
  const res = fetch(PRODUCTS_API + inputID, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputData),
  });
  return res;
}

// DELETE PRODUCT
export async function deleteProduct(inputID) {
  fetch(PRODUCTS_API + inputID, {
    method: "DELETE",
  });
}

// ---------------------------------------------------- //

// API COMINGSOON
// GET COMINGSOON
export async function getComingSoon() {
  const comingsoon = await fetch(COMINGSOON_API, {
    method: "GET",
  });
  const data = comingsoon.json();
  return data;
}

// ADD COMINGSOON
export async function createComingsoon(inputData) {
  const res = fetch(COMINGSOON_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputData),
  });
  return res;
}

// EDIT COMINGSOON
export async function editComingsoon(inputID, inputData) {
  const res = fetch(COMINGSOON_API + inputID, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputData),
  });
  return res;
}

// DELETE COMINGSOON
export async function deleteComingsoon(inputID) {
  fetch(COMINGSOON_API + inputID, {
    method: "DELETE",
  });
}
