import "../css/styleContentHeaderSobreNos.css";

function ContentHeaderSobreNos(props) {
  return (
    <div className="containerIconSobreNos">
      <img
        src={props.iconImage}
        alt={props.legenda}
        className="iconSobreNos"
        width={128}
        height={128}
      />
      <div className="sectionTexts">
        <h2 className="subtitleSobreNos">{props.title}</h2>
        <p className="textSobreNos">{props.text}</p>
      </div>
    </div>
  );
}

export default ContentHeaderSobreNos;
