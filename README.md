<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  gatsby-plugin-marka
</h1>

A gatsby plugin for integrating [marka-js](https://github.com/hikerpig/marka-js) into your site.

Marka is a JavaScript lib that runs in the browser, it will mark anchor elements and add icons according to the `href`.

Goto the author's blog to see [a demo](https://www.hikerpig.cn/2020-10-14-zsh-zimfw-setup/).

## 🚀 Install

```bash
npm install --save gatsby-plugin-marka
```

## 🧐 How to use

### Include the plugin in a Gatsby site

Inside of the `gatsby-config.js` file of your site (in this case, `my-gatsby-site`), include the plugin in the `plugins` array:

```javascript
module.exports = {
  plugins: [
    // other gatsby plugins
    // ...
    resolve: 'gatsby-plugin-marka',
    options: {
      container: '.js-marka-container',
    } // see possible options below
  ],
}
```

### Options

You can pass check possible options in [marka-js documentation](https://marka-js.vercel.app/#markaoptions).

### Customize style

Override css variables in some of your css files.

```css
body {
  --marka-link-color: purple;
}
```