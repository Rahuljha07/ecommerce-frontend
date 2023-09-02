// // A mock function to mimic making an async request for data
// export function fetchAllProducts() {
//   return new Promise(async (resolve) => {
//     const response = await fetch('http://localhost:8080/products')
//     const data = await response.json()
//     resolve({ data })
//     //   console.log(data)

//   });
// }

//fetch product by id
export function fetchProductById(id) {

  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products/' + id)
    const data = await response.json()

    resolve({ data })
    //   console.log(data)

  });
}

//fetch product by id
export function createProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
    const data = await response.json()

    resolve({ data })
    //  console.log("api productt ",data)

  });
}

//update product

export function updateProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products/' + product.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
    const data = await response.json()
    resolve({ data })
  })
}


export function fetchProductsByFilters(filter, sort, pagination,admin) {
  //filter = {"category":["smartphones","laptops"]}
  //sort = {_sort:"price",_order="desc"}
  //pagination = {_page=1,_limit=10}  // _page=1&_limit=10
  //for in  loop - key of object
  // {_page: 4, _limit: 10}
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  if(admin){
    queryString+="admin=true";
  }
  // queryString = queryString.slice(0,-1);
  return new Promise(async (resolve) => {
    const url = "http://localhost:8080/products?" + queryString;
    const response = await fetch(url);
    const data = await response.json()
    const totalItems = await response.headers.get('X-Total-Count');
    resolve({ data: { products: data, totalItems: +totalItems } })
  });
}


export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/brands')
    const data = await response.json()
    resolve({ data })
    //   console.log(data)

  });
}


export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/categories')
    const data = await response.json()
    resolve({ data })
    //   console.log(data)

  });
}