import "./card.css"

export default function Card({img_src, img_alt, title}) {
    return (
        <div className="Card">
            <img src={img_src} alt={img_alt} className="CardImg" />
            <h2>{title}</h2>
        </div>
    );
}