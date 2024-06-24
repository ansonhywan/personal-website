import "./textarea.css"

const TextArea = ({title, header}) => {
    return (
        <section id='TextArea'>
            <span className="TextAreaTitle">{title}</span>
            <span className="TextAreaDesc">{header}</span>
        </section>
    );
}

export default TextArea;

