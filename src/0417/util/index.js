import React, { Component } from 'react';
//Code Splitting
const asyncComponent = (importComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      }
    }
    componentDidMount() {
      //console.log(importComponent)
      importComponent()
        .then(cmp => {
          //console.log(cmp.default)
          this.setState({ component: cmp.default });
        });
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }
};

export default asyncComponent;

// function getComponent() {
//
//  return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
//    const element = document.createElement('div');
//
//    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//
//    return element;
//
//  }).catch(error => 'An error occurred while loading the component');
// }
//
// getComponent().then(component => {
//  document.body.appendChild(component);
// })


// async function getComponent() {
//    const element = document.createElement('div');
//    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
//
//    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//
//    return element;
// }
//
// getComponent().then(component => {
//   document.body.appendChild(component);
// });
