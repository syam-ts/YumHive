import React from "react"
import ReactDOM from "react-dom/client"

const Title = () => {
  return (
    <img
      className="logo"
      alt="logo"
      src="https://logo-suggestion.renderforest.com/suggestions-images/2457/b202/2457b202debe50fd95a8a4d26d596dc1.png"
    />
  )
}

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li> Home </li>
          <li> About </li>
          <li> Contact </li>
          <li> Cart </li>
        </ul>
      </div>
    </div>
  )
}

const restrauntList = [
  {
    name: "Burger King",
    cuisine: ["Burger", "American"],
    rating: "4.3 Stars",
    image:
      "https://image.cnbcfm.com/api/v1/image/107271392-1689277783823-Barbie_Burger.jpg?v=1689279528&w=929&h=523&vtcrop=y",
  },
  {
    name: "McDonald's",
    cuisine: ["Burger, Fast Food"],
    rating: "4.1 Stars",
    image:
      "https://thetatva.in/wp-content/uploads/2024/02/intro-1690816372.jpeg",
  },
  {
    name: "KFC",
    cuisine: ["Fried Chicken, Fast Food"],
    rating: "4.2 Stars",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95szCEGJaLsknUe0tEzyCS29eypLSizK62xHljcETkN_3OXDQ1WCUFXezOgA6GQYUHbA&usqp=CAU",
  },
  {
    name: "Subway",
    cuisine: ["Sandwich, Salad"],
    rating: "4.4 Stars",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/230630103357-subway-beast-sandwich.jpg?c=16x9&q=h_833,w_1480,c_fill",
  },
  {
    name: "Domino's Pizza",
    cuisine: ["Pizza, Italian"],
    rating: "4.5 Stars",
    image:
      "https://www.dominos.com.my/ManagedAssets/MY/product/PXEX/MY_PXEX_en_menu_12818.jpg?v1486015645",
  },
  {
    name: "Pizza Hut",
    cuisine: ["Pizza, Italian"],
    rating: "4.2 Stars",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLy9hcDP_mkGZmtMrF6JR4ZXXHR7Qg17LmXQ&s",
  },
  {
    name: "Starbucks",
    cuisine: ["Coffee, Cafe"],
    rating: "4.4 Stars",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGbpKbdtJUYUFxd0gr2s0B4oLlfa_LIfRG0Q&s",
  },
  {
    name: "Taco Bell",
    cuisine: ["Mexican, Fast Food"],
    rating: "4.1 Stars",
    image:
      "https://www.tacobell.com/images/23155_build_your_own_cravings_box_750x340-clp.jpg",
  },
  {
    name: "Wendy's",
    cuisine: ["Burger, Fast Food"],
    rating: "4.3 Stars",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTri_wtTtj-bj_oJuVjOs5EmyYUylrQM3NF9g&s",
  },
  {
    name: "Carl's Jr.",
    cuisine: ["Burger, Fast Food"],
    rating: "4.2 Stars",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZlbpS2FgFdkNahFVEVqZ5DQo9kYGQ5VOeQ&s",
  },
]

const ResturarntCard = ({ name, image, cuisine, rating }) => {
  console.log(rating);
  return (
    <div className="card">
      <img src={image} />
      <h2> {name} </h2>
      <h3> {cuisine?.join(", ")} </h3>
      <h4> {rating} ⭐ </h4>
    </div>
  )
}

let Body = () => {
  return (
    <div className="res">
      {
        restrauntList.map(restraunt => {
         return <ResturarntCard { ...restraunt } />
        })
      } 
    </div>
  )
}

let Footer = () => <h4>Footer</h4>;

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)
