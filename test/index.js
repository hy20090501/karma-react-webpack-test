import 'should';
import Welcome from '../src/index';
import ReactDOM from 'react-dom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
describe('test', function() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
  it('Hello Tmall', function() {
    let cp = ReactDOM.render(<Welcome/>, container);
    let welcome = TestUtils.findRenderedComponentWithType(cp, Welcome);
    ReactDOM.findDOMnode(welcome).textContent.should.be.eql('Hello Tmall');
  });
});