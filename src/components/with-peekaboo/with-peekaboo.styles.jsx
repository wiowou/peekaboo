import styled from 'styled-components';

export const PeekabooContainer = styled.span`
    opacity: ${ ({ isHidden }) =>  isHidden ? '0.0' : '1.0'  };
`;