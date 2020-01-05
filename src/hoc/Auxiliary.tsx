import React from 'react';

export interface AuxProps {
    children: React.ReactNode
}

const aux: React.FC<AuxProps> = props =>
    <>{props.children}</>;

export default aux;