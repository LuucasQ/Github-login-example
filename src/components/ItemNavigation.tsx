import React from 'react';


interface FollowerProps {
  icon: any;
  title: string;
  onClick?: any;
  className: string;
}

function ItemNavigation(props: FollowerProps) {
  return (
    <div className={props.className} onClick={props.onClick}>
      <div>{props.icon}</div>
      <h3>{props.title}</h3>
    </div>
  );
}

export default ItemNavigation;