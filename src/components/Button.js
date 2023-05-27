const Button = (props) => {
    return (
        <div>
            <button onClick={() => props.clicked()}>Click me </button>
        </div>
    )
}

export default Button;