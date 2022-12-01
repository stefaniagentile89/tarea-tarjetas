import { Card } from "./Card"

const CardList = (props) => {
  return (
    <div style={{display:"flex",
    flexWrap:"wrap",}}>
        {
        props.caps.map(element => <Card element={element}/>)
        }</div>
  )
}

export default CardList