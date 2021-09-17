import React from 'react';

import { PeekabooContainer } from './with-peekaboo.styles';

const WithPeekaboo = WrappedComponent => {
    const Peekaboo = ({ interval, isHidden, ...otherProps }) => {
        return (
            <PeekabooContainer>
                <WrappedComponent {...otherProps} />
            </PeekabooContainer>
        );
    };
    return Peekaboo;
}

export default WithPeekaboo;