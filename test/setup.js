import React from 'react';
import { expect } from 'chai';

import jsdom from 'jsdom';  
const {JSDOM} = jsdom; 

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const {document} = (new JSDOM('<!doctype html><html><body></body></html>', { url: 'https://localhost' })).window;  
global.document = document;  
global.window = document.defaultView;
 
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
 
global.React = React;
global.expect = expect;