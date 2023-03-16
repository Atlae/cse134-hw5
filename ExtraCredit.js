'use strict';

function ReactButtonCount() {
    const [count, setCount] = React.useState(0);
    // return (
    //     <button onClick={() => setCount(count + 1)}>
    //     Clicked {count} times
    //     </button>
    // );
    return React.createElement(
        'button',
        { onClick: () => setCount(count + 1) },
        `Times Clicked (React): ${count}`
    );
}

ReactDOM.createRoot(document.getElementById('react-button-count')).render(
    React.createElement(ReactButtonCount)
);

import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.41/vue.esm-browser.prod.js';

createApp({
    data() {
        return {
            count: 0
        }
    }
}).mount('#app');

