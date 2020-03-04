import React from 'react';
import classes from './InvLine.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faCopy, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Line } from '../Invoice/Invoice';

interface InvLineProps {
    line: Line,
    deleteLine: (id: number) => void,
    copyLine: (line: Line) => void,
    save: (line: Line) => void,
    getId: () => number
}

const InvLine = (props: InvLineProps): JSX.Element => {
    const [edit, setEdit] = React.useState<boolean>(false);
    const { id, service, quantity, cost, description, units } = props.line;
    const { deleteLine, save, copyLine } = props;
    const [editservice, setService] = React.useState<string>(service)
    const [editcost, setCost] = React.useState<number>(cost)
    const [editquantity, setQuantity] = React.useState<number>(quantity)
    const [editunits, setUnits] = React.useState<string>(units)
    const [editdescription, setDescription] = React.useState<string>(description)
    if (edit) {
        let newId = props.getId();
        return (
            <div className={classes.invLine}>
                <input type="text" name="Service" placeholder={service} required onChange={(e) => { setService(e.target.value) }} /><br />
                <input type="number" name="Cost" placeholder={cost.toString()} required onChange={(e) => { setCost(parseInt(e.target.value)) }} /><br />
                <input type="number" name="Quantity" placeholder={quantity.toString()} required onChange={(e) => { setQuantity(parseInt(e.target.value)) }} /><br />
                <input type="text" name="Units" placeholder={units} required onChange={(e) => { setUnits(e.target.value) }} /><br />
                <textarea placeholder={description} onChange={(e) => { setDescription(e.target.value) }} />
                <button onClick={() => { setEdit(false); save({ id: newId, service: editservice, cost: editcost, quantity: editquantity, units: editunits, description: editdescription }) }}>Save</button>
            </div>
        )
    }
    return (
        <ul key={id} className={classes.invLine}>
            <li>{service}</li>
            <li>{quantity}</li>
            <li>{cost} {units}</li>
            <li>{description}</li>
            <div>
                <FontAwesomeIcon icon={faEdit} title='Edit' onClick={() => { setEdit(true) }} />
                <FontAwesomeIcon icon={faCopy} title='Copy' onClick={() => { copyLine({ id: props.getId(), service, units, cost, quantity, description }) }} />
                <FontAwesomeIcon icon={faTimes} title='Delete' onClick={() => { deleteLine(id) }} />
            </div>
        </ul>
    )
}
export default InvLine;