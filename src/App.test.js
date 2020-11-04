import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import PersonList from "./PersonList";

describe("App", () => {
  let appWrapper;

  beforeAll(() => {
    appWrapper = shallow(<App />);
  });

  it("render the App component", () => {
    shallow(<App />);
  });

  it("renders a person list", () => {
    const personList = appWrapper.find(PersonList);
    expect(personList).toHaveLength(1);
  });

  it("has a state", () => {
    const appState = appWrapper.state();
    expect(appState).not.toBeNull();
  });

  it("has a peopleproperty on state", () => {
    const appState = appWrapper.state();
    expect(appState.people).toBeDefined();
  });

  it("passes people property of state to perosnList as prop", () => {
    const personList = appWrapper.find(PersonList);
    expect(personList.props().people).toEqual(appWrapper.state().people);
  });
});
