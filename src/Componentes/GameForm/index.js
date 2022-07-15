import { useState } from "react";
import CurrencyField from "../CurrencyField";
import SaveButton from "../SaveButton"
import Select from "../Select"
import TextField from "../TextField"
import "./Form.css"

const Gameform = ({ sendGame, statusArray }) => {
    const [name, setName] = useState('');
    const [currentStatus, setCurrentStatus] = useState('');
    const [price, setPrice] = useState('R$ 0,00');

    const saveForm = (e) => {
        e.preventDefault()

        let game = {
            name,
            status: currentStatus,
            hex: statusArray.filter(status => status.name === currentStatus)[0].hex,
            price,
        }

        setName("")
        setCurrentStatus("")
        setPrice('R$ 0,00')

        sendGame(game)
    }

    return (
        <section className="gameform" onSubmit={saveForm}>
            <form>
                <h2>Preencha os dados para adicionar o jogo</h2>
                <TextField label="Nome" placeholder="Digite o nome do jogo" value={name} onChangeValue={(name) => setName(name)} required={true} />
                <Select label="Status" arrayValues={statusArray} required={true} value={currentStatus} onChangeValue={(currentStatus) => setCurrentStatus(currentStatus)} />
                <CurrencyField label="Valor pago" required={false} value={price} onChangeValue={(price) => setPrice(price)} />
                <SaveButton label="Salvar" />
            </form>
        </section>
    )
}

export default Gameform