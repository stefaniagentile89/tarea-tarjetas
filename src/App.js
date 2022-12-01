import Section from "./organisms/Section";

const caps=[
  {
    id: "1", 
    img: "../imagenes/1.jpg", 
    text: "Gorras", 
    name: "GAB BLACK TOTAL", 
    price: "5200"
  },
  {
    id: "2", 
    img: "../imagenes/2.jpg", 
    text: "Gorras", 
    name: "GOTHIC BLACK", 
    price: "4700"
  },
  {
    id: "3", 
    img: "../imagenes/3.jpg", 
    text: "Gorras", 
    name: "GAB BRICK OLIVE BURGUNDY", 
    price: "5200"
  },
  {
    id: "4", 
    img: "../imagenes/4.jpg", 
    text: "Gorras", 
    name: "GAB BLACK FELINE", 
    price: "5200"
  },
  {
    id: "5", 
    img: "../imagenes/5.jpg", 
    text: "Gorras", 
    name: "GAB BRICK GREEN", 
    price: "5200"
  },
  {
    id: "6", 
    img: "../imagenes/6.jpg", 
    text: "Gorras", 
    name: "FACTORY BLACK", 
    price: "5200"
  },
  {
    id: "7", 
    img: "../imagenes/7.jpg", 
    text: "Gorras", 
    name: "JUST BLACK", 
    price: "5200"
  },
  {
    id: "8", 
    img: "../imagenes/8.jpg", 
    text: "Gorras", 
    name: "COIN BROWN OLIVE", 
    price: "4700"
  },
  {
    id: "9", 
  img: "../imagenes/9.jpg", 
  text: "Gorras", 
  name: "ORIGINAL PINK FRANCE", 
  price: "4700"
  },
  {
    id: "10", 
    img: "../imagenes/10.jpg", 
    text: "Gorras",
    name: "GAB BRICK JEAN BROWN", 
    price: "5200"
  },
  {
    id: "11", 
    img: "../imagenes/11.jpg", 
    text: "Gorras", 
    name: "VELVET BORDER BUNGURDY", 
    price: "5200"
  },
  {
    id: "12", 
    img: "../imagenes/12.jpg", 
    text: "Gorras", 
    name: "BORDER VELVET RED", 
    price: "5200"
  }
]

function App() {
  return (
    <div>
    <p>Seccion de tarjetas de : https://bondistore.com.ar</p>
          <header style={{
            backgroundColor:"black",
            color:"white"
          }}>
            <p style={{
              fontSize:"50px"
            }}>BONDI</p>
          </header>
          <Section caps={caps}/>
    </div>
  );
}

export default App;
