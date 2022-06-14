
Hello everyone! 
This is my first project within npm, I hope it will be of great use to the community.
The need within several projects in which I have worked has been the kick of this project.
Basic operations that we use daily in web development.
On the examples everything is done with ID, but it works with queryselector and queryselectorall

## How does it work?
```sh
npm install @andresclua/jsutil
```

## include the library in file
```sh
import JSUTIL from '@andresclua/jsutil/src/js_helper';
```
and voila, it is ready to use!
# Example

#### Add Class
```sh
var js_ui = new JSUTIL()
js_ui.addClass(document.getElementById('bar'),'foo')
```

#### Remove Class
```sh
var js_ui = new JSUTIL()
js_ui.removeClass(document.getElementById('bar'),'foo')
```

#### Toggle Class
```sh
var js_ui = new JSUTIL()
js_ui.toggleClass(document.getElementById('bar'),'foo')
```

####  Add Style
```sh
var js_ui = new JSUTIL()
js_ui.addStyle(document.getElementById('add-style-trigger'),'background-color','orange');
js_ui.addStyle(document.getElementById('add-style-trigger'),'padding','10px');
```

####  Hide Element
```sh
var js_ui = new JSUTIL()
document.getElementById('hide-trigger').addEventListener('click', (e)=>{
    e.preventDefault()
    js_ui.hide(document.getElementById('hide-trigger'));
});
```

####  Show Element
```sh
var js_ui = new JSUTIL()
document.getElementById('show-trigger').addEventListener('click', (e)=>{
    e.preventDefault()
    js_ui.show(document.getElementById('content-to-show'));
});
```

####  Get Browser
Available options:
 - chrome
 - safari
 - firefox
 - ie
 - edge

Returns Boolean

Example: 
```sh
var js_ui = new JSUTIL()
js_ui.getBrowser('chrome')
```


####  Get Device Type

Available options:
 - touch
 - android
 - ios

Returns Boolean

Example: 
```sh
var js_ui = new JSUTIL()
js_ui.getTypeDevice('touch')
```
![awesome](https://media.giphy.com/media/LeikbswJKXOMM/giphy.gif)

[Github Profile](https://github.com/andresclua/)