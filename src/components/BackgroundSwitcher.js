import React from 'react';

export function BackgroundSwitcher(props) {
  function handleClick(event) {
    props.handleClick(props.color);
  }

  return (
    <button className={props.color === props.active ? 'active' : ''} onClick={handleClick} style={{ color: props.color }}>
      {props.color}
    </button>
  );
}
