// react-test-renderer
import React from "react";
import Header from "../../components/Header";

import { shallow } from "enzyme";

test("should render Header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

  //   expect(wrapper.find("h1").text()).toBe("Expensify App");
  //   const renderer = new ReactShallowRenderer();
  //   renderer.render(<Header />);
  //   expect(renderer.getRenderOutput()).toMatchSnapshot();
  //   console.log(renderer.getRenderOutput());
});
