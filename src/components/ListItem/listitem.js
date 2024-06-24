import "./listitem.css"

export default function ListItem({img_src, img_alt, title, body}) {
  return (
    <div className="ListItem">
      <img src={img_src} alt={img_alt} className="ListItemImg" />
      <div className="ListItemText">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
}
