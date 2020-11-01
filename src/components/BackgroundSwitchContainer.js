import React , {useEffect} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { BackgroundSwitcher } from './BackgroundSwitcher';

const initialState = {active: ''}

export const BackgroundSwitcherReducer = function(state={...initialState}, action) {
  console.log("BackgroundSwitcherReducer", action) ;
  switch(action.type) {
    case 'setColor': {
        return {...state, active: action.color}
    }
    case 'unsetColor': {
        return {...state, active: ''}
    }
    default: {
      return state;
    }
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


export function BackgroundSwitchContainer() {
    let  dispatch = useDispatch()
    let  active  = useSelector(state=>state.bg.active)
    useEffect(()=>{
        document.body.style.backgroundColor = active;
    }, [active])

    function setActive(color) {
        if(color !==active) {
            dispatch({type: 'setColor', color: color})
        } else {
            dispatch({type: 'unsetColor'})
        }
    }

    return (
        <div>
            <BackgroundSwitcher color="red" active={active} setActive={setActive} />
            <BackgroundSwitcher color="green" active={active} setActive={setActive}/>
            <BackgroundSwitcher color="blue" active={active} setActive={setActive} />
       </div>
    )
}


///////////////////////////////////////////////////////////////////////////////////////////

function setColorAsync(type, color) {
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch({type: type, color: color})
        }, 3000)
    }
}

export class BackgroundSwitchContainerClass extends React.Component {

    componentDidUpdate() {
        document.body.style.backgroundColor = this.props.color;
    }
    setActive = (color) =>{
        if(color !== this.props.color) {
            this.props.dispatch(setColorAsync('setColor', color))
        } else {
            this.props.dispatch(setColorAsync('unsetColor'))
        }
    }
    render() {
        return (
        <div>
            <BackgroundSwitcher color="red" active={this.props.color} setActive={this.setActive} />
            <BackgroundSwitcher color="green" active={this.props.color} setActive={this.setActive}/>
            <BackgroundSwitcher color="blue" active={this.props.color} setActive={this.setActive} />
       </div>
        )
    }
}

function mapStateToProps(state){
    return {
        color: state.bg.active
    }
}

export const BackgroundSwitchContainerRedux = connect(mapStateToProps)(BackgroundSwitchContainerClass)
