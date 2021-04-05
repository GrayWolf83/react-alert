import {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";

export const Search = () => {
    const[value, setValue] = useState('')
    const alert = useContext(AlertContext)

        const onSubmit = () => {
        if (value.trim()) {
            alert.show(`Вы ввели: ${value.trim()}`, 'success')
        } else {
            alert.show('Введите данные!', 'danger')
        }
    }

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Ваш запрос..."
                value={value}
                onChange={event => setValue(event.target.value)}
            />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-dark"
                        type="button"
                        onClick={onSubmit}
                    >
                        Найти
                    </button>
                </div>
        </div>
    )
}

// export const Search = () => {
//     const[value, setValue] = useState('')
//     const alert = useContext(AlertContext)
//     const github = useContext(GithubContext)
//
//
//     const onSubmit = (event) => {
//         if (event.key !== 'Enter') {
//             return
//         }
//
//         github.clearUsers()
//
//         if (value.trim()) {
//             alert.hide()
//             github.search(value.trim())
//         } else {
//             alert.show('Введите данные пользователя!')
//         }
//     }
//
//     return (
//         <div className="form-group">
//             <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Введите ник пользователя..."
//                 value={value}
//                 onChange={event => setValue(event.target.value)}
//                 onKeyPress={onSubmit}
//             />
//         </div>
//     )
// }
