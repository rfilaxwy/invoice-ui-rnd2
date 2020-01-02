import React, { MouseEvent, ReactNode } from 'react';

import classes from './Button.module.css';

type Props = {
    onClick(e: MouseEvent<HTMLElement>): void
    children?: ReactNode
}

const Button = ({ onClick: handleClick, children }: Props) => (
    <button className={classes.genButton} onClick={handleClick}>{children}</button>
)
export default Button;