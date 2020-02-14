import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import JournalTile from './JournalTile'

Enzyme.configure({ adapter: new Adapter() })

describe("JournalTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
        <JournalTile
          title={"This is the title"}
          body={"This is the body"}
        />
    )
  })

  it("should render the title of the journal", () => {
    expect(wrapper.find("h2").text()).toBe("This is the title")
  })

  it("should render the body of the journal", () => {
    expect(wrapper.find("p").text()).toBe("This is the body")
  })
})
