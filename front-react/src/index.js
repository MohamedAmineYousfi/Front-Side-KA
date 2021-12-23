import "../src/style/css/normalize.css"
import "../src/style/css/all.min.css"
import "../src/style/css/index.css"
import "../src/style/css/slider.css"
import "../src/style/css/Category.css"
import "../src/style/css/sideBar.css"
import "../src/style/css/discount.css"
import "../src/style/css/featuredItems.css"
import "../src/style/css/footer.css"
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
