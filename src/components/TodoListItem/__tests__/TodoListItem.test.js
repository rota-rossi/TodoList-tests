import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

import TodoListItem from '../TodoListItem';

describe('TodoListItem', () => {
  test('should render properly', () => {
    // first, we created the mocked element to be passed as prop to the component

    const mockItem = {
      id: 35,
      title: 'mock item',
      description: 'mock description',
    };

    // then, the mock function that will be passed to the component.
    const mockClick = () => {};

    // finally, we render the component with the required props
    const element = renderer
      .create(<TodoListItem item={mockItem} selected={false} handleClick={mockClick} />)
      .toJSON();

    // and we generate/validate the snapshot
    expect(element).toMatchSnapshot();
  });

  test('onclick is triggered when the user clicks the item', () => {
    // one more time: we create the mock item.
    const mockItem = {
      id: 35,
      title: 'mock item',
      description: 'mock description',
    };

    // now, the mock  click function - this time using jest.fn so we can check if the function was called.
    const mockClick = jest.fn(() => {});

    // rendering the component
    const component = render(
      <TodoListItem item={mockItem} selected={false} handleClick={mockClick} />
    );

    // "clicking" the element
    fireEvent.click(component.getByText('mock item'));

    // checking if the mocked click function was called.
    expect(mockClick).toHaveBeenCalled();
  });

  test('should show the description when selected === true', () => {
    // almost done! second to last. create item
    const mockItem = {
      id: 35,
      title: 'mock item',
      description: 'mock description',
    };

    // we don't care about the function, so back to the 'do nothing'
    const mockClick = () => {};

    // rendering - notice that we passed selected === true (so the description would be visible)
    const component = render(
      <TodoListItem item={mockItem} selected={true} handleClick={mockClick} />
    );

    // search for the description in the rendered component.
    const description = component.getByText('mock description');

    // and finally, verify if the description is defined - we hope it's there!
    expect(description).toBeDefined();
  });

  test('should not show the description when selected === false', () => {
    // Last one! at least, here!
    const mockItem = {
      id: 35,
      title: 'mock item',
      description: 'mock description',
    };

    const mockClick = () => {};

    // now we render it with selected === false - we want the description to not show up.
    const component = render(
      <TodoListItem item={mockItem} selected={false} handleClick={mockClick} />
    );

    // in this case, the description is supposed to not be defined
    // (because we only add it to the DOM if selected is true).
    // the way the testing-library works means that the getByText function will throw an Error.
    // Because of that, instead of calling it straighforward, we wrap it inside a function and
    // pass it to expect. ¯\_(ツ)_/¯

    const getDescription = () => component.getByText('mock description');

    // and now, because the above function will throw, we can safely test it this way:
    expect(getDescription).toThrow();

    // And that's the end. :D
  });
});
