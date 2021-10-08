const InputSearch = ({onChangeInput,ValueInput}) => {
    return (
            <input className="input-search" type="text"
            value = {ValueInput}
            onChange={onChangeInput}
            placeholder="Silakan Cari Film Kesukaan Kamu" />
    )
}
export default InputSearch