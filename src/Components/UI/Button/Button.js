import classes from './Button.module.scss'

const Button = (props) => {
    const cls = [
        classes.button,
        classes[props.type]
    ]

    return (
        <button
            className={cls.join(' ')}
            onClick={props.onClick}
            disabled={props.status}
        >
            {props.text.toUpperCase()}
        </button>
    )
}

export default Button