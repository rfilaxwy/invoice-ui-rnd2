import React, { FunctionComponent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import classes from './InputLine.module.scss';

type Line = {
    id: string,
    service: string,
    cost: number,
    quantity: number,
    units: string,
    description: string
}
interface InputLineProps {
    id?: number,
    service?: string,
    quantity?: number,
    cost?: number,
    units?: string,
    description?: string,
}



const InputLine = (props: InputLineProps) => {
    // const [line, setLine] = React.useState<InputLineProps | null>(props);

    // setLine(...InputLineProps.editLineValues);

    return (
        <div>
            <form className={classes.form}>
                <input type="text" name="Service" placeholder="Type of service" required /><br />
                <input type="number" name="Cost" placeholder="Cost" required /><br />
                <input type="number" name="Quantity" placeholder="Quantity" required /><br />
                <input type="text" name="Units" placeholder="Units" required /><br />
                <textarea placeholder="Description" />
            </form>
        </div>
    );
}


export default InputLine;