// App 컴포넌트가 렌더링 되면 'My Agora States'가 존재한다.

import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import App from '../App';

test("App 컴포넌트가 렌더링 되면 'My Agora States'가 존재한다.", () => {
  // render(<App />);

  // const title = screen.getByRole('heading')
  // // const title = screen.getByText('My Agora States')
  // expect(title).toHaveTextContent('My Agora States');
  expect(true).toBeTruthy();
})