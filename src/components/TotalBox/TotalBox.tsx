import React from 'react';
import classes from './totalbox.module.scss';
type totalProps = {
    subTaxable: number,
    subNonTaxable: number,
    gst: number, total: number
}

const TotalBox = (props: totalProps) => {
    return (
        <div className={classes.box}>
            <p>Nontaxable Subtotal: $ <span>{props.subNonTaxable}</span></p>
            <p>Taxable Subtotal: $ <span>{props.subTaxable}</span></p>
            <p>Taxes: $ <span>{props.gst}</span> </p>
            <p>Total: $ <span>{props.total}</span></p>
        </div>
    )
}

export default TotalBox;