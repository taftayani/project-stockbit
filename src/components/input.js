const InputSearch = ({onChangeInput,ValueInput}) => {
    return (
            <input className="input-search" type="text"
            value = {ValueInput}
            onChange={onChangeInput}
            placeholder="please input name of movies" />
    )
}
export default InputSearch