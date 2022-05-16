
import User from "../../components/User";
import { render } from 'enzyme';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import APIService from "../../utils/APIService";

configure({ adapter: new Adapter() });


describe('User component', ()=> {
  it('APIService.fetchUsers & useEffect() is called properly', () => {
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
    jest.spyOn(APIService, 'fetchUsers');
    
    render(<User/>);

    expect(React.useEffect).toHaveBeenCalledTimes(1);
    expect(APIService.fetchUsers).toHaveBeenCalledTimes(1);
  });
});