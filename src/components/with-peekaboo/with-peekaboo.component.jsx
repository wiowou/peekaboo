import React, { useState, useEffect } from 'react';

import { PeekabooContainer } from './with-peekaboo.styles';

const WithPeekaboo = (WrappedComponent, interval) => {
    const Peekaboo = ({ ...otherProps }) => {
        const [isHidden, setIsHidden ] = useState(false);
        useEffect( () => {
            setTimeout( () => setIsHidden(!isHidden), interval);
        }, [isHidden]);
        return (
            <PeekabooContainer className='peekaboo' isHidden={isHidden}>
                { WrappedComponent ? <WrappedComponent {...otherProps} /> : null} 
            </PeekabooContainer>
        );
    };
    return Peekaboo;
}

export default WithPeekaboo;