import { render } from "@testing-library/react";
import App from '../../components/App';


const MockProfilesView = jest.fn();
jest.mock("../../components/ProfilesView", () => () => {
  return <MockProfilesView />; 
});

test("If AppComponent rendering ProfilesViewComponent", () => {
  render(<App />);
  expect(MockProfilesView).toHaveBeenCalledTimes(1);
});











/*
jest.mock("../../components/User", () => () => {
  return <mock-user data-testid="user"/>;
});

test("If TopLevelComponent is passed the open prop Modal is rendered", () => {
  const { queryByTestId } = render(<App />);
  expect( queryByTestId("user") ).toBe(true);
});
*/

