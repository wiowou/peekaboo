import { render, screen } from '@testing-library/react';
import WithPeekaboo from './with-peekaboo.component';

test('renders an empty span', () => {
    const PeekabooDiv = WithPeekaboo();
    const { container } = render(<PeekabooDiv/>);
    const peakabooElement = container.querySelector('.peekaboo');
    expect(peakabooElement).toBeInTheDocument();
    const peakabooChildElements = container.querySelector('.peekaboo *');
    expect(peakabooChildElements).toBeNull();
});

test('wrapped component is displayed with all props', () => {
    const emptyDiv = () => {
        return <div prop1='val1' prop2='val2'/>;
    }
    const PeekabooDiv = WithPeekaboo(emptyDiv);
    const { container } = render(<PeekabooDiv/>);
    const wrappedByProp1 = container.querySelector('[prop1="val1"]');
    expect(wrappedByProp1).toBeInTheDocument();
    const wrappedByProp2 = container.querySelector('[prop2="val2"]');
    expect(wrappedByProp2).toBeInTheDocument();
});