import React from 'react';
// import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App', () => {
  test('Should render properly', () => {
    const element = renderer.create(<App />).toJSON();
    // using the lines instead of the one above generates a shallow snapshot.
    // const renderer = new ShallowRenderer();
    // const element = renderer.render(<App />).getRenderOutput();

    expect(element).toMatchSnapshot();
  });
});
