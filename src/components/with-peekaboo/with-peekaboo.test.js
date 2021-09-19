import { render, screen } from '@testing-library/react';
import WithPeekaboo from './with-peekaboo.component';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import intervalReducer from '../../redux/intervalSlice';

const store = createStore(combineReducers({
    interval: intervalReducer,
}))

jest.useFakeTimers();

describe('peekaboo', () => {

    test('renders an empty span', () => {
        const PeekabooDiv = WithPeekaboo();
        const { container } = render(<Provider store={store}><PeekabooDiv/></Provider>);
        const peakabooElement = container.querySelector('.peekaboo');
        expect(peakabooElement).toBeInTheDocument();
        const peakabooChildElements = container.querySelector('.peekaboo *');
        expect(peakabooChildElements).toBeNull();
    });
    
    test('wraps a component which is displayed with all props', () => {
        const sampleDiv = () => {
            return <div prop1='val1' prop2='val2'/>;
        }
        const PeekabooDiv = WithPeekaboo(sampleDiv);
        const { container } = render(<Provider store={store}><PeekabooDiv/></Provider>);
        const wrappedByProp1 = container.querySelector('[prop1="val1"]');
        expect(wrappedByProp1).toBeInTheDocument();
        const wrappedByProp2 = container.querySelector('[prop2="val2"]');
        expect(wrappedByProp2).toBeInTheDocument();
    });

    test('shows and hides with the correct time period', () => {
        const sampleDiv = () => {
            return <div prop1='val1' prop2='val2'/>;
        }
        const PeekabooDiv = WithPeekaboo(sampleDiv);
        const { container } = render(<Provider store={store}><PeekabooDiv/></Provider>);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    });
});
