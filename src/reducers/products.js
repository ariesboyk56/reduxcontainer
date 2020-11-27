var initialState = [
  {
    id: 1,
    name: 'IP 6 Plus',
    image: '%PUBLIC_URL%/img/600_iphone_11_pro_max_xanh_reu_xtmobile.jpg',
    description: 'Do Apple sản xuất',
    price: 500,
    inventory: 10,
    rating: 3
  },
  {
    id: 2,
    name: 'IP 6 Plus',
    image: '%PUBLIC_URL%/img/600_iphone_11_pro_max_xanh_reu_xtmobile.jpg',
    description: 'Do Apple sản xuất',
    price: 500,
    inventory: 10,
    rating: 2
  },
  {
    id: 3,
    name: 'IP 6 Plus',
    image: '%PUBLIC_URL%/img/600_iphone_11_pro_max_xanh_reu_xtmobile.jpg',
    description: 'Do Apple sản xuất',
    price: 500,
    inventory: 10,
    rating: 1
  }
];
const products = (state = initialState, action) => {
  switch(action.type){
    
    default: return [...state];
  }
}

export default products;