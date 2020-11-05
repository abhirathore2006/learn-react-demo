
const CustomButton = (props) => {
    return (
        <button
         className={props.className || 'custom-button white-button'}
         onClick={props.onClick || (() => {})}
        >
            {props.text || 'Custom Button text'}
        </button>
    );
}


export default CustomButton;