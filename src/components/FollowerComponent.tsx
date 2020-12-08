import React from 'react';
import { FollowerBar } from '../pages/Dashboard/style';

interface FollowerProps {
  amount: number;
  title: string;
  className: string;
}

function FollowerComponent(props: FollowerProps) {
  return (
    <div className={props.className}>
      <h1>{props.amount}</h1>
      <h3>{props.title}</h3>
    </div>
  );
}

export default FollowerComponent;