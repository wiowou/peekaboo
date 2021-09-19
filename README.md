# Peekaboo

Create a React component or hook to show and hide content on a fixed interval.  When hidden, content should not reflow, but instead show empty space in the space where it would normally be rendered.  Ideally, you will include a sample application demonstrating its use, but this isn’t strictly necessary.

Use any frameworks/libraries you wish, although avoid any “someone already did this” libraries -- the intent is to assess your current technical abilities, not how well you can `yarn add package`.

Bonus Points:
- Configurable interval that updates in realtime.
- Tests
- Wrapper component implementation around the hook to facilitate both use cases.

Please send a GitHub link to your source code. Provide a README with your source code to explain how to run your code.

## usage
Install the necessary modules
```
yarn install
```
To run the project and see the flashing subtitle text:
```
yarn start
```

To run the simple unit tests:
```
yarn test
```

To show and hide content at a fixed interval, wrap a component in the `WithPeekaboo` function as demonstrated in `src/components/the-subtitle`.

## how it works
with-peekaboo is the component. It and its corresponding styles can be found in `src/components/with-peekaboo`. It uses the higher-order component (HOC) pattern

## why did I use an HOC pattern?
Because the functionality pertains to showing and hiding parts of the DOM...this is a DOM-centric feature. An HOC is intended to wrap a component and this functionality will always be applied to components. You have the flexibility of creating something like a `div`, `span` or whatever you like that is wrapped by `WithPeekaboo`. All of that DOM element's children will then flash hidden or visible. 

At the moment, I see Hooks as a good way to add data or other attributes to a component. But I don't see it as a good way to add features or functionality to a component. HOC's seem better suited for that purpose. By the same token, `useState` seems clearer and more idiomatic to me than `useEffect`. 

Finally, there was a choice of using hooks in this assignment so I chose not to. If there were no choice in the matter, I would have used a hook.

## considerations regarding application state
We want the `interval` prop to be dynamically updatable by the user. Because an HOC pattern is used for WithPeekaboo, we really want to be able to wrap any component in the DOM without having to think too much about how to pass down the `interval` prop to `WithPeekaboo`. I.e, we really want to avoid prop drilling and we also want code maintenance to be easy. Hence, a state library was chosen to lift `interval` to a global state variable and why Context API was rejected. Redux was chosen simply because it is the most common state management library for React.

## a note on the tests
I probably don't have enough tests. I just wanted to demonstrate how I would set them up and have some basic testing complete.

## final note on the interval input boxes
I did not try to style these at all! I skipped that aspect entirely because it is just a means to an end (setting the interval and showing that it is able to be dynamically set).