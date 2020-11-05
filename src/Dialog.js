import { Fragment } from 'react';
import CustomButton from './CustomButton';

const Dialog = (props) => {
    const themeClass = `custom-button  ${props.theme ? 'white-button' : 'black-button'}`;
    return (
        <Fragment>
            <div className='dialog'>
                This is a nested component
            </div>
            <CustomButton className={themeClass} {...props} />
        </Fragment>
    );
}

export default Dialog;