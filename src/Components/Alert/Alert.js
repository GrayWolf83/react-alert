import classes from './Alert.module.css'

const Alert = (props) => {
    const cls = [
        classes.Alert,
        classes[props.type]
    ]

    return (
        <div className={cls.join(' ')}>
            <p>{props.text}</p>
        </div>
    )
}

export default Alert