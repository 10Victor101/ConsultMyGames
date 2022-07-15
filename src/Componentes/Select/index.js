import "./Select.css"

const Select = ({ label, required, value, onChangeValue, arrayValues }) => {

    return (
        <div className="select">
            <label>{label}</label>
            <select value={value} required={required} onChange={(e) => { onChangeValue(e.target.value) }}>
                <option value="">-</option>
                {arrayValues.map(value => <option key={value.name}>{value.name}</option>)}
            </select>
        </div>
    )
}

export default Select