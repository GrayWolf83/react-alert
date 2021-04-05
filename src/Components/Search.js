export const Search = () => {
    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Ваш запрос..."
            />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Найти</button>
                </div>
        </div>
    )
}
