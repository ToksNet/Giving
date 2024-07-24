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
        discountPrice:120,
        reviewsNo:88,
        starsNo:5,
        discountRate:40,
        newProd:true,
        availColors: [
          { id: 1, name: "Red", code: "#FF0000" },
          { id: 2, name: "Blue", code: "#0000FF" },
          { id: 3, name: "Green", code: "#00FF00" },
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
          { id: 1, name: "Red", code: "#FF0000" },
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