import Button from "../atoms/Button"

export const Card = (props) => {
  return (
    <div>
        <figure style={{
        border:"none",
        width:"250px",
        heigth:"350px",
        textAlign:"center",
        lineHeight:"0",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        }}>
        <figcaption>
        <img style={{
        width:"250px",
        height:"250px",
    }} src={props.element.img} />
    <Button />
        </figcaption>
        <p style={{color: "lightgrey",
                    lineHeight:"0",}}>Gorras</p>
        <h3 style={{
          fontSize:"14px"
        }}>{props.element.name}</h3>
        <p style={{color: "lightgrey",
                  lineHeight:"0",}}>${props.element.price}</p>
      </figure>
        </div>
  )
}
