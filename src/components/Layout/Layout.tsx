import * as React from 'react';
import Aux from '../../hoc/Auxiliary';

export interface LayoutProps {
    children: React.ReactNode
}
const layout = (props: LayoutProps) => {
    return (
        <Aux>
            <div>Toolbar</div>
            <main>
                {props.children}
            </main>
        </Aux>
    )
}
export default layout;