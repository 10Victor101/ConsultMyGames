import "./Card.css"

const Card = ({ name, status, price, statusHEX }) => {
    return (
        <div className="card">
            <div style={{ backgroundColor: statusHEX }} className="status">{status}</div>
            <h4>{name}</h4>
            <img src="./imagens/noimage.jpg" alt="sem imagem"></img>
            <h5>{price}</h5>
        </div>
    )
}

export default Card