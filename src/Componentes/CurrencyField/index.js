import "./CurrencyField.css"

const CurrencyField = ({ label, placeholder, onChangeValue, required, value }) => {

    const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

    const formatterCurrency = (value) => {
        let formatterValue = value.replace(/\D/g, '');
        formatterValue = formatter.format(formatterValue / 100);
        onChangeValue(formatterValue)
    };

    return (
        <div className="currencyfield">
            <label>{label}</label>
            <input value={value} required={required} placeholder={placeholder} onChange={(e) => formatterCurrency((e.target.value))} />
        </div>
    )
}

export default CurrencyField;