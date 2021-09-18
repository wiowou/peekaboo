# Peekaboo

Create a React component or hook to show and hide content on a fixed interval.  When hidden, content should not reflow, but instead show empty space in the space where it would normally be rendered.  Ideally, you will include a sample application demonstrating its use, but this isn’t strictly necessary.

Use any frameworks/libraries you wish, although avoid any “someone already did this” libraries -- the intent is to assess your current technical abilities, not how well you can `yarn add package`.

Bonus Points:
- Configurable interval that updates in realtime.
- Tests
- Wrapper component implementation around the hook to facilitate both use cases.

Please send a GitHub link to your source code. Provide a README with your source code to explain how to run your code.

## usage
To run the project and see the flashing subtitle text:
```
yarn start
```

To run the simple unit tests:
```
yarn test
```

To show and hide content at a fixed interval, wrap a component in the `WithPeekaboo` function as demonstrated in `src/components/the-subtitle`. Pass an interval in milliseconds.

## how it works
with-peekaboo is the component. It and its corresponding styles can be found in `src/components/with-peekaboo`.