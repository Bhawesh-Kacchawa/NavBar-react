import NavBar from "./NavBar"
const App = () => {
  return (
    <main>
      <NavBar/>
    </main>
    )
};
export default App;









// import { useState, useRef } from "react"
// import { links, social } from "./data"
// import logo from "./logo.svg"
// import { HiMiniBars3 } from "react-icons/hi2";


// const App = () => {
//   const [isVisible, setISVisible] = useState(false)
//   const element = useRef(null);
//   const btn = useRef(null);

//   const handleClick = () => {
//     const elementStyle = element.current
//     const btnAnimation = btn.current;

//     setISVisible(!isVisible)

//     if (!isVisible) {
//       elementStyle.style.visibility = "hidden"
//       // btnAnimation.style.transform = "rotate(90deg)"
//     }
//     else {
//       elementStyle.style.visibility = "visible"
//       // btnAnimation.style.transform = "rotate(0deg)"
//     }
//   }

//   return (
//     <nav className="nav-bar">
//       <img src={logo} alt="" />

//       <ul className="nav-items" ref={element}>
//         {links.map((item) => {
//           return <li key={item.id}>{item.text}</li>
//         })}
//       </ul>

//       <ul className="icons">
//         {social.map((logo) => {
//           return <li key={logo.id}>{logo.icon}</li>
//         })}
//       </ul>

//       <button type="button" ref={btn} onClick={handleClick}><HiMiniBars3 className="list" /></button>

//     </nav>
//   )
// };
// export default App;







































