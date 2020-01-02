import * as React from 'react';
import Aux from '../../hoc/Aux';

export interface LayoutProps {
    children: React.ReactNode
}
const layout = (props: LayoutProps) => {
    return (
        <Aux>
            <div>Toolbar, backdrop</div>
            <main>
                {props.children}
            </main>
        </Aux>
    )
}
export default layout;