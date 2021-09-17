import styled from 'styled-components';

export const PeekabooContainer = styled.div`
    opacity: ${ ({ isHidden }) =>  isHidden ? '0.0' : '1.0'  };
`;