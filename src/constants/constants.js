import { catimg1,catimg2, catimg3,catimg4, catimg5, catimg6,prodimg1,prodimg2,prodimg3,prodimg4,prodimg5,prodimg6,prodimg7,prodimg8,prod1,prod2,prod3,prod4,prod5 } from "../assets/images";


export const categoryImages= [
    {
      id: 1,
      image: catimg1,
      name: "Computers",
    },
    {
      id: 2,
      image: catimg2,
      name: "Phones",
    },
    {
      id: 3,
      image: catimg3,
      name: "SmartWatch",
    },
    {
      id: 4,
      image: catimg4,
      name: "HeadPhones",
    },
    {
      id: 5,
      image: catimg5,
      name: "Gaming",
    },
    {
        id: 6,
        image: catimg6,
        name: "Camera",
      },

  ];

  export const todayProducts =[
    {
        id: 1,
        image: prodimg5,
        prodName: "HAVIT HV-G92 Gamepad",
        price:160,
        reviewsNo:88,
        starsNo:5,
        newProd:true,
        discountRate:30,
        prodStatus: 'new',
        availColors: [
          { id: 1, name: "Red", code: "#FF0000" },
          { id: 2, name: "Blue", code: "#0000FF" },
          
        ],
      },
      {
        id: 2,
        image: prodimg7,
        prodName: "AK-900 Wired Keyboard",
        price:1160,
        discountPrice:960,
        reviewsNo:75,
        starsNo:4,
        discountRate:35,
        newProd:false,
        availColors: [
          ],
      },
      {
        id: 3,
        image: prodimg2,
        prodName: "IPS LCD Gaming Monitor",
        price:400,
        discountPrice:370,
        reviewsNo:99,
        starsNo:5,
        discountRate:30,
        newProd:false,
        availColors: [
          ],
      },
      {
        id: 4,
        image: prodimg8,
        prodName: "S-Series Comfort Chair",
        price:400,
        discountPrice:375,
        reviewsNo:99,
        starsNo:5,
        discountRate:25,
        newProd:false,
        availColors: [
          ],
      },
      {
        id: 5,
        image: prodimg8,
        prodName: "S-Series Comfort Chair",
        price:400,
        discountPrice:375,
        reviewsNo:99,
        starsNo:5,
        discountRate:25,
        newProd:false,
        availColors: [
          ],
      },
      {
        id: 6,
        image: prodimg5,
        prodName: "HAVIT HV-G92 Gamepad",
        price:160,
        discountPrice:120,
        reviewsNo:88,
        starsNo:5,
        discountRate:40,
        newProd:true,
        availColors: [
          { id: 1, name: "yellow", code: "yellow" },
          { id: 2, name: "Blue", code: "#0000FF" },
          { id: 3, name: "Green", code: "#00FF00" },
        ],
      },
      {
        id: 7,
        image: prodimg7,
        prodName: "AK-900 Wired Keyboard",
        price:1160,
        discountPrice:960,
        reviewsNo:75,
        starsNo:4,
        discountRate:35,
        newProd:false,
        availColors: [
          ],
      },
      {
        id: 8,
        image: prodimg2,
        prodName: "IPS LCD Gaming Monitor",
        price:400,
        discountPrice:370,
        reviewsNo:99,
        starsNo:5,
        discountRate:30,
        newProd:false,
        availColors: [
          ],
      },
      {
        id: 9,
        image: prodimg8,
        prodName: "S-Series Comfort Chair",
        price:400,
        discountPrice:375,
        reviewsNo:99,
        starsNo:5,
        discountRate:25,
        newProd:false,
        availColors: [
          ],
      },
      {
        id: 10,
        image: prodimg8,
        prodName: "S-Series Comfort Chair",
        price:400,
        discountPrice:375,
        reviewsNo:99,
        starsNo:5,
        discountRate:25,
        newProd:false,
        availColors: [
          ],
      },
  ]

  export const Prod1 =[
    {
        id: 1,
        image: prod5,
        otherImages:[
          prod1,
          prod2,
          prod3,
          prod4
        ],
        prodName: "HAVIT HV-G92 Gamepad",
        price:160,
        discountPrice:120,
        reviewsNo:88,
        starsNo:4,
        discountRate:40,
        availColors: [
          { id: 1, name: "Gray", code: "#A0BCE0" },
          { id: 2, name: "Pink", code: "#E07575" },

        ],
        availSizes: [
          { id: 1, name: "XS"},
          { id: 2, name: "S"},
          { id: 3, name: "M"},
          { id: 4, name: "L"},
          { id: 5, name: "XL"},
        ],
        shortDescription:"PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
        instock:true
        
      },
      
  ]

  export const products = [
    {
      id:1,
      image: "../images/Explore-1.jpg",
      prodName: "Breed Dry Dog Food",
      price: "$100",
      discountPrice: "$120",
      starsNo: 3,
      reviewsNo: 35,
    },
    {
      id:2,
      image: "../images/Explore-2.png",
      prodName: "CANON EOS DSLR Camera",
      price: "$360",
      discountPrice: "$400",
      starsNo: 4,
      reviewsNo: 95,
    },
    {
      id:3,
      image: "../images/Explore-3.png",
      prodName: "ASUS FHD Gaming Laptop",
      price: "$700",
      discountPrice: "$800",
      starsNo: 5,
      reviewsNo: 325,
    },
    {
      id:4,
      image: "../images/Explore-1.jpg",
      prodName: "Curology Product Set",
      price: "$500",
      discountPrice: "$600",
      starsNo: 4,
      reviewsNo: 145,
    },
  ];

  export const newArrival = [
    {
      id: 1,
      image: "../images/Explore-2.png",
      prodName: "CANON EOS DSLR Camera",
      price: "$100",
      // originalPrice: "$120",
      starsNo: 4,
      reviewsNo: 95,
    },
    {
      id: 2,
      image: "../images/NewArrival-1.png",
      prodName: "RPG Liquid CPU Cooler",
      price: "$160",
      // originalPrice: "$400",
      starsNo: 2,
      reviewsNo: 65,
    },
    {
      id: 3,
      image: "../images/TheNorthCoat.png",
      prodName: "The North Coat",
      price: "$260",
      originalPrice: "$360",
      starsNo: 5,
      reviewsNo: 65,
    },
    {
      id: 4,
      image: "../images/Explore-1.jpg",
      prodName: "Breed Dry Dog Food",
      price: "$500",
      // originalPrice: "$600",
      starsNo: 4,
      reviewsNo: 35,
    },
    {
      id: 5,
      image: "../images/Explore-8.png",
      prodName: "Quilted satin Jacket",
      price: "$660",
      // originalPrice: "",
      starsNo: 3,
      reviewsNo: 55,
    },
    {
      id: 6,
      image: "../images/Explore-7.png",
      prodName: "GP11 Shooter USP Gamepad",
      price: "$660",
      // originalPrice: "",
      starsNo: 6,
      reviewsNo: 55,
    },
    {
      id: 7,
      image: "../images/Explore-5.png",
      prodName: "Kid's Electric Car",
      price: "$980",
      // originalPrice: "",
      starsNo: 3,
      reviewsNo: 29,
    },
    {
      id: 8,
      image: "../images/Explore-8.png",
      prodName: "Quilted satin Jacket",
      price: "$660",
      // originalPrice: "",
      starsNo: 3,
      reviewsNo: 55,
    },
    {
      id: 9,
      image: "../images/Explore-3.png",
      prodName: "ASUS FHD Gaming Laptop",
      price: "$700",
      // originalPrice: "",
      starsNo: 10,
      reviewsNo: 325,
    },
    {
      id: 10,
      image: "../images/Explore-6.png",
      prodName: "Jr.Zoom Soccer Cleats",
      price: "$1160",
      // originalPrice: "",
      starsNo: 11,
      reviewsNo: 35,
    },
    {
      id: 11,
      image: "../images/GucciDuffleBag.png",
      prodName: "Gucci Duffle Bag",
      price: "$960",
      // originalPrice: "",
      starsNo: 4,
      reviewsNo: 39,
    },
    {
      id: 12,
      image: "../images/Explore-7.png",
      prodName: "GP11 Shooter USP Gamepad",
      price: "$660",
      // originalPrice: "",
      starsNo: 3,
      reviewsNo: 55,
    },
    {
      id: 13,
      image: "../images/SmallBookShelf.png",
      prodName: "Small BookSelf",
      price: "$230",
      // originalPrice: "",
      starsNo: 1,
      reviewsNo: 65,
    },
    {
      id: 14,
      image: "../images/Explore-3.png",
      prodName: "ASUS FHD Gaming Laptop",
      price: "$700",
      // originalPrice: "",
      starsNo: 3,
      reviewsNo: 325,
    },
    {
      id: 15,
      image: "../images/IPS LCS GamingMonitor.png",
      prodName: "IPS LCD Gaming Monitor",
      price: "$960",
      // originalPrice: "",
      starsNo: 4,
      reviewsNo: 65,
    },
    {
      id: 16,
      image: "../images/Explore-5.png",
      prodName: "Kid's Electric Car",
      price: "$980",
      // originalPrice: "",
      starsNo: 5,
      reviewsNo: 65,
    },
    {
      id: 17,
      image: "../images/TheNorthCoat.png",
      prodName: "The North Coat",
      price: "$260",
      originalPrice: "$360",
      starsNo: 2,
      reviewsNo: 65,
    },
    {
      id: 18,
      image: "../images/GucciDuffleBag.p",
      prodName: "Gucci Duffle Bag",
      price: "$960",
      originalPrice: "$1160",
      starsNo: 4,
      reviewsNo: 45,
    },
    {
      id: 19,
      image: "../images/NewArrival-1.png",
      prodName: "RPG Liquid CPU Cooler",
      price: "$160",
      originalPrice: "$170",
      starsNo: 5,
      reviewsNo: 22,
    },
    {
      id: 20,
      image: "../images/SmallBookShelf.png",
      prodName: "Small BookSelf",
      price: "$230",
      originalPrice: "$330",
      starsNo: 2,
      reviewsNo: 86,
    },
    {
      id: 21,
      image: "../images/Explore-6.png",
      prodName: "Jr.Zoom Soccer Cleats",
      price: "$1160",
      // originalPrice: "",
      starsNo: 5,
      reviewsNo: 43,
    },
    {
      id: 22,
      image: "../images/GucciDuffleBag.png",
      prodName: "Gucci Duffle Bag",
      price: "$960",
      // originalPrice: "",
      starsNo: 3,
      reviewsNo: 99,
    },
    {
      id: 23,
      image: "../images/Explore-7.png",
      prodName: "GP11 Shooter USP Gamepad",
      price: "$660",
      // originalPrice: "",
      starsNo: 1,
      reviewsNo: 55,
    },
    {
      id: 24,
      image: "../images/SmallBookShelf.png",
      prodName: "Small BookSelf",
      price: "$230",
      originalPrice: "$330",
      starsNo: 2,
      reviewsNo: 86,
    },
  ];

  export const exploreProducts = [
    {
      id:1,
      image: "../images/Explore-1.jpg",
      prodName: "Breed Dry Dog Food",
      price: "$100",
      // originalPrice: "$120",
      starsNo: 3,
      reviewsNo: 35,
    },
    {
      id:2,
      image: "../images/Explore-2.png",
      prodName: "CANON EOS DSLR Camera",
      price: "$360",
      // originalPrice: "",
      starsNo: 3,
      reviewsNo: 95,
    },
    {
      id:3,
      image: "../images/Explore-3.png",
      prodName: "ASUS FHD Gaming Laptop",
      price: "$700",
      // originalPrice: "",
      starsNo: 4,
      reviewsNo: 325,
    },
    {
      id:4,
      image: "../images/Explore-1.jpg",
      prodName: "Curology Product Set",
      price: "$500",
      // originalPrice: "",
      starsNo: 3,
      reviewsNo: 145,
    },
    {
      id:5,
      image: "../images/Explore-5.png",
      prodName: "Kid's Electric Car",
      price: "$980",
      // originalPrice: "",
      starsNo: 3,
      reviewsNo: 65,
    },
    {
      id:6,
      image: "../images/Explore-6.png",
      prodName: "Jr.Zoom Soccer Cleats",
      price: "$1160",
      // originalPrice: "",
      starsNo: 5,
      reviewsNo: 35,
    },
    {
      id:7,
      image: "../images/Explore-7.png",
      prodName: "GP11 Shooter USP Gamepad",
      price: "$660",
      // originalPrice: "",
      starsNo: 1,
      reviewsNo: 55,
    },
    {
      id:8,
      image: "../images/Explore-8.png",
      prodName: "Quilted satin Jacket",
      price: "$660",
      // originalPrice: "",
      starsNo: 4,
      reviewsNo: 55,
    },
  ];
  