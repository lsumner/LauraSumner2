// Bring in the necessary functional components
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// Describes the current STATE of our SPA. We say that we pass 'pieces of state.'
const states = {
    'home': {
        'title': 'This is the home page!'
    },
    'about': {
        'title': 'About Page'
    },
    'contact': {
        'title': 'Contact'
    }
};

function render(state){
    // We use function invocation that actually runs the fxn. and then `returns` the markup so that it is properly rendered in the browser.
    document.querySelector('#root').innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Main(state)}
        ${Footer(state)}
    `;

    /**
     * Developer's Note: The 'Navigation' functional component renders 'new' links each and every time. Therefore, on each re-render, we must grab those links and re-attach the event listeners to respond to 'clicks.'
     */

    // The elements will not exist until page is rendered!
    const navItems = document.querySelectorAll('nav > ul > li:not(.dropdown)');

    navItems.forEach(function eventListenerAdder(navItem){
        navItem.addEventListener('click', function clickHandler(event){
            event.preventDefault();

            // Recursive fxn. call
            render(states[event.target.textContent.toLowerCase()]);
        });
    });
}

// To render a page, we pass in a piece of state.
render(states.home);
