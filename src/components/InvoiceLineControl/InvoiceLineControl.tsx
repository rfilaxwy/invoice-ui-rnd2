import React, { MouseEvent, ReactNode } from 'react';

import classes from './Button.module.css';

type Props = {
    handleEdit(e: MouseEvent<HTMLElement>): void
    handleDelete(e: MouseEvent<HTMLElement>): void

}

const invoiceLineControl = ({ handleEdit: handleEdit, handleDelete: handleDelete }: Props) => (
    <div>
        <button className={classes.genButton} onClick={handleEdit}>Edit</button>
        <button className={classes.genButton} onClick={handleDelete}>Delete</button>
    </div>

)
export default invoiceLineControl;