import { 
  catimg1, catimg2, catimg3, catimg4, catimg5, catimg6, 
  prodimg1, prodimg2, prodimg3, prodimg4, prodimg5, prodimg6, prodimg7, prodimg8, 
  prod1, prod2, prod3, prod4, prod5 
} from "../assets/images";

export const categoryImages = [
  { id: 1, image: catimg1, name: "Computers" },
  { id: 2, image: catimg2, name: "Phones" },
  { id: 3, image: catimg3, name: "SmartWatch" },
  { id: 4, image: catimg4, name: "HeadPhones" },
  { id: 5, image: catimg5, name: "Gaming" },
  { id: 6, image: catimg6, name: "Camera" },
];

export const todayProducts = [
  {
    id: 7, image: prodimg5, prodName: "HAVIT HV-G92 Gamepad", price: 160,
    reviewsNo: 88, starsNo: 5, newProd: true, discountRate: 30,
    prodStatus: 'new', availColors: [
      { id: 1, name: "Red", code: "#FF0000" },
      { id: 2, name: "Blue", code: "#0000FF" },
    ],
  },
  {
    id: 8, image: prodimg7, prodName: "AK-900 Wired Keyboard", price: 1160,
    discountPrice: 960, reviewsNo: 75, starsNo: 4, discountRate: 35,
    newProd: false, availColors: [],
  },
  {
    id: 9, image: prodimg2, prodName: "IPS LCD Gaming Monitor", price: 400,
    discountPrice: 370, reviewsNo: 99, starsNo: 5, discountRate: 30,
    newProd: false, availColors: [],
  },
  {
    id: 10, image: prodimg8, prodName: "S-Series Comfort Chair", price: 400,
    discountPrice: 375, reviewsNo: 99, starsNo: 5, discountRate: 25,
    newProd: false, availColors: [
      { id: 1, name: "Yellow", code: "#FFFF00" },
      { id: 2, name: "Green", code: "#00FF00" },
    ], availSizes: [
      { id: 1, name: "XS" }, { id: 2, name: "S" },
      { id: 3, name: "M" }, { id: 4, name: "L" },
      { id: 5, name: "XL" },
    ],
  },
  {
    id: 11, image: prodimg1, prodName: "New Product 1", price: 500,
    discountPrice: 450, reviewsNo: 50, starsNo: 4, discountRate: 20,
    newProd: false, availColors: [],
  },
  {
    id: 12, image: prodimg3, prodName: "New Product 2", price: 600,
    discountPrice: 550, reviewsNo: 60, starsNo: 4, discountRate: 10,
    newProd: true, availColors: [
      { id: 1, name: "Yellow", code: "#FFFF00" },
      { id: 2, name: "Green", code: "#00FF00" },
    ],
  },
  {
    id: 13, image: prodimg4, prodName: "New Product 3", price: 700,
    discountPrice: 650, reviewsNo: 70, starsNo: 5, discountRate: 15,
    newProd: false, availColors: [],
  },
  {
    id: 14, image: prodimg6, prodName: "New Product 4", price: 800,
    discountPrice: 750, reviewsNo: 80, starsNo: 4, discountRate: 25,
    newProd: true, availColors: [],
  },
];

export const Prod1 = [
  {
    id: 15, image: prod5, otherImages: [prod1, prod2, prod3, prod4],
    prodName: "HAVIT HV-G92 Gamepad", price: 160, discountPrice: 120,
    reviewsNo: 88, starsNo: 4, discountRate: 40,
    availColors: [
      { id: 1, name: "Gray", code: "#A0BCE0" },
      { id: 2, name: "Pink", code: "#E07575" },
    ],
    availSizes: [
      { id: 1, name: "XS" }, { id: 2, name: "S" },
      { id: 3, name: "M" }, { id: 4, name: "L" },
      { id: 5, name: "XL" },
    ],
    shortDescription: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    instock: true,
  },
];

export const products = [
  {
    id: 16, image: "../images/Explore-1.jpg", prodName: "Breed Dry Dog Food",
    price: "100", discountPrice: "120", starsNo: 3, reviewsNo: 35,
  },
  {
    id: 17, image: "../images/Explore-2.png", prodName: "CANON EOS DSLR Camera",
    price: "360", discountPrice: "400", starsNo: 4, reviewsNo: 95,
  },
  {
    id: 18, image: "../images/Explore-3.png", prodName: "ASUS FHD Gaming Laptop",
    price: "700", discountPrice: "800", starsNo: 5, reviewsNo: 325,
  },
  {
    id: 19, image: "../images/Explore-4.jpg", prodName: "Curology Product Set",
    price: "500", discountPrice: "600", starsNo: 4, reviewsNo: 145,
  },
];

export const newArrival = [
  {
    id: 20, image: "../images/Explore-2.png", prodName: "CANON EOS DSLR Camera",
    price: "100", starsNo: 4, reviewsNo: 95,
  },
  {
    id: 21, image: "../images/NewArrival-1.png", prodName: "RPG Liquid CPU Cooler",
    price: "160", starsNo: 2, reviewsNo: 65,
  },
  {
    id: 22, image: "../images/TheNorthCoat.png", prodName: "The North Coat",
    price: "260", originalPrice: "360", starsNo: 5, reviewsNo: 65,
  },
  {
    id: 23, image: "../images/Explore-1.jpg", prodName: "Breed Dry Dog Food",
    price: "500", starsNo: 4, reviewsNo: 35,
  },
  {
    id: 24, image: "../images/Explore-8.png", prodName: "Quilted satin Jacket",
    price: "660", starsNo: 3, reviewsNo: 55,
  },
  {
    id: 25, image: "../images/Explore-7.png", prodName: "GP11 Shooter USP Gamepad",
    price: "660", starsNo: 6, reviewsNo: 55,
  },
  {
    id: 26, image: "../images/Explore-5.png", prodName: "Kid's Electric Car",
    price: "980", starsNo: 3, reviewsNo: 29,
  },
  {
    id: 27, image: "../images/Explore-4.png", prodName: "Curology Product Set",
    price: "500", starsNo: 4, reviewsNo: 145,
  },
  {
    id: 28, image: "../images/Explore-3.png", prodName: "ASUS FHD Gaming Laptop",
    price: "700", starsNo: 10, reviewsNo: 325,
  },
  {
    id: 29, image: "../images/Explore-6.png", prodName: "Jr.Zoom Soccer Cleats",
    price: "1160", starsNo: 11, reviewsNo: 35,
  },
  {
    id: 30, image: "../images/GucciDuffleBag.png", prodName: "Gucci Duffle Bag",
    price: "960", starsNo: 4, reviewsNo: 39,
  },
  {
    id: 31, image: "../images/SmallBookShelf.png", prodName: "Small BookSelf",
    price: "230", starsNo: 1, reviewsNo: 65,
  },
];

export const exploreProducts = [
  {
    id: 32, image: "../images/Explore-1.jpg", prodName: "Breed Dry Dog Food",
    price: "100", starsNo: 3, reviewsNo: 35,
  },
  {
    id: 33, image: "../images/Explore-2.png", prodName: "CANON EOS DSLR Camera",
    price: "360", starsNo: 3, reviewsNo: 95,
  },
  {
    id: 34, image: "../images/Explore-3.png", prodName: "ASUS FHD Gaming Laptop",
    price: "700", starsNo: 5, reviewsNo: 325,
  },
  {
    id: 35, image: "../images/Explore-4.png", prodName: "Curology Product Set",
    price: "500", starsNo: 4, reviewsNo: 145,
  },
  {
    id: 36, image: "../images/Explore-5.png", prodName: "Kid's Electric Car",
    price: "980", starsNo: 3, reviewsNo: 29,
  },
  {
    id: 37, image: "../images/Explore-6.png", prodName: "Jr.Zoom Soccer Cleats",
    price: "1160", starsNo: 4, reviewsNo: 35,
  },
  {
    id: 38, image: "../images/Explore-7.png", prodName: "GP11 Shooter USP Gamepad",
    price: "660", starsNo: 5, reviewsNo: 55,
  },
  {
    id: 39, image: "../images/Explore-8.png", prodName: "Quilted satin Jacket",
    price: "660", starsNo: 6, reviewsNo: 55,
  },
];
