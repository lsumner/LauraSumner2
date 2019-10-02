//import { Header, Nav, Main, Footer } from './components'
//const state={
  //home:{
   // heading: "Home Page"
 // },
  //about:{
   // heading: "About Page"
 // }

//};
//console.log(typeof Header);
//console.log(typeof Nav);

/**
 * Currently, #root div is empty.
 * We want to grab that #root div.
 * We want to assign the markup that is contained in the components as the innerHTML of root.
 */
//st represents a piece of state
function render(st=state.home){

  document.querySelector("#root").innerHTML = `
  ${Header(st.heading)}
  ${Nav()}
  ${Main()}
  ${Footer()}
  `;
}
render(state.home);

const aboutLink=document.querySelector('#about');

aboutLink.addEventListener('click', function(event){
  event.preventDefault();
//in this case we are accessing state.About
  render(state[event.target.textContent]);

  console.log(state,);

  console.log('you clicked me!')
})
