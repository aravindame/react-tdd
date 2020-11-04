import React from "react";
import { shallow } from "enzyme";
import PersonList from "./PersonList";

describe("PersonList", () => {
  it("render a ul element", () => {
    const perosnListWraper = shallow(<PersonList />);
    const peopleListUls = perosnListWraper.find("ul");
    expect(peopleListUls).toHaveLength(1);
  });
  it("renders no li elements when no people exit", () => {
    const perosnListWraper = shallow(<PersonList people={[]} />);
    const peopleListItems = perosnListWraper.find("li");
    expect(peopleListItems).toHaveLength(0);
  });

  it("Render one li elememt when one person exists", () => {
    const people = [{ firstName: "Alan", lastName: "Turing" }];
    const perosnListWraper = shallow(<PersonList people={people} />);
    const peopleListItems = perosnListWraper.find("li");
    expect(peopleListItems).toHaveLength(1);
  });

  it("", () => {
    const people = [
      { firstName: "Alan", lastName: "Turing" },
      { firstName: "Chevy", lastName: "Chease" },
    ];
    const perosnListWraper = shallow(<PersonList people={people} />);
    const peopleListItems = perosnListWraper.find("li");
    expect(peopleListItems).toHaveLength(2);
  });
});
