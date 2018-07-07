if (document.registerElement && /\{\s*\[native code\]\s*\}/.test(document.registerElement)) {
  document.registerElement = null; // disable native implementation of v0
}
if (document.registerElement == null) {
  require('webcomponentsjs-shadow-dom-v0');
  require('webcomponentsjs-custom-element-v0');
}
