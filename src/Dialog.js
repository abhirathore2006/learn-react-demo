import { Fragment, useContext } from 'react';
import ThemeContext from './ThemeContext';
import CustomButton from './CustomButton';

const Dialog = (props) => {
    const theme = useContext(ThemeContext);
    const themeClass = `custom-button  ${theme ? 'white-button' : 'black-button'}`;
    return (
        <Fragment>
            <div className='dialog'>
                This is a nested component
            </div>
            <CustomButton className={themeClass} onClick={props.onClick} />
        </Fragment>
    );
}

export default Dialog;