import React from 'react';
type totalProps = {
    subTaxable: number,
    subNonTaxable: number,
    gst: number, total: number
}

const TotalBox = (props: totalProps) => {
    return (
        <div>
            <p>Nontaxable Subtotal:{props.subNonTaxable}</p>
            <p>Taxable Subtotal:{props.subTaxable}</p>
            <p>Taxes: {props.gst} </p>
            <p>Total:{props.total}</p>
        </div>
    )
}

export default TotalBox;