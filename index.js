if not window.enable_webcomponents_in_content_scripts
  window.enable_webcomponents_in_content_scripts = true
  document.registerElement = null;
  require('webcomponentsjs-custom-element-v1');
