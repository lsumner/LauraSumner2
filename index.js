import { Header, Nav, Main, Footer } from './components'
const state={
  home:{
    heading: "Home Page"
  },
  about:{
    heading: "About Page"
  }

};
console.log(typeof Header);
console.log(typeof Nav);

/**
 * Currently, #root div is empty.
 * We want to grab that #root div.
 * We want to assign the markup that is contained in the components as the innerHTML of root.
 */
document.querySelector("#root").innerHTML = `
  ${Header(state.home.heading)}
  ${Nav()}
  ${Main()}
  ${Footer()}
  `;
