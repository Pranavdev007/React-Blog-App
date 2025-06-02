// index.js acts as the default entry point for a folder. It’s a convention that allows you to simplify imports. The bundler will look for these in order:
// ./components.js or ./components.jsx
// ./components/index.js or ./components/index.jsx
// So if there's an index.js inside the components folder, it will automatically be picked up.

import Header from "./Header";
import Footer from "./Footer";

export { Header, Footer };
