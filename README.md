# enable-webcomponents-in-content-scripts

Enables use of Web Components Custom Elements in Chrome content scripts.

It inserts a polyfill for the v1 version of Custom Elements from webcomponentsjs.

It is necessary to use [SkateJS](https://github.com/skatejs/skatejs) within a content script.

## Usage

You can use it via a require statement in webpack.

Install via npm:

```
npm install enable-webcomponents-in-content-scripts
```

Within a content script, make sure you require it before skatejs

```
require('enable-webcomponents-in-content-scripts')
skate = require('skatejs')
```

## Example

This library is used by [HabitLab](https://github.com/habitlab/habitlab-chrome/)

See the `src/interventions` and `src/components_skate` directories

## Limitations

Note that it will not work with Polymer as HTML imports are not supported in content scripts.

## Source

All this module does is

```
document.registerElement = null
require('webcomponentsjs-custom-element-v1')
```

See [webcomponentsjs-custom-element-v1](https://github.com/gkovacs/webcomponentsjs-custom-element-v1) for details.

## License

MIT

## Credits

By [Geza Kovacs](https://github.com/gkovacs)
