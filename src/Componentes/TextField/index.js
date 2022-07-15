import "./TextField.css"

const TextField = ({ label, placeholder, onChangeValue, required, value }) => {
    return (
        <div className="textfield">
            <label>{label}</label>
            <input value={value} onChange={(e) => { onChangeValue(e.target.value) }} placeholder={placeholder} required={required} />
        </div>
    )
}

export default TextField;