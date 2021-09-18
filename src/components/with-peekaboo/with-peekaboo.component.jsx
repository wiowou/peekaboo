import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PeekabooContainer } from './with-peekaboo.styles';

const WithPeekaboo = (WrappedComponent) => {
    const Peekaboo = ({ ...otherProps }) => {
        const [isHidden, setIsHidden ] = useState(false);
        const interval = useSelector( state => state.interval.value );
        useEffect( () => {
            setTimeout( () => setIsHidden(!isHidden), interval);
        }, [isHidden, interval]);
        return (
            <PeekabooContainer className='peekaboo' isHidden={isHidden}>
                { WrappedComponent ? <WrappedComponent {...otherProps} /> : null} 
            </PeekabooContainer>
        );
    };
    return Peekaboo;
}

export default WithPeekaboo;