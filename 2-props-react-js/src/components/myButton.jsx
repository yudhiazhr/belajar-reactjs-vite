export default function myButton (props) {
    return (
        <div>
            <button onClick={() =>props.clicked()}>Click Me Bro!</button>
        </div>
    )
}