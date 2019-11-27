# Truetone Slider

A class to manage slider inputs and render their values.

## Usage

Create a slider:

```html
<label for="freqency-slider">Frequency (Hz)</label>
<input id="freqency-slider"
        class="input-range frequency"
        type="range"
        step="1"
        value="440"
        min="16"
        max="880"
        data-value-elem="freqency-slider-value">
```

Add an element with an id that matches the value for `data-value-elem` above:

```html
<p id="freqency-slider-value"></p>
```

Instantiate the slider in your class:

```javascript
const slider = require('truetone-slider');

class MyClass {
  constructor() {
    const sliderElem =  document.querySelector(".input-range.frequency");
    this.slider = new slider(sliderElem).init();  // call .init()
  }
}
```

The element you referened in `data-value-elem` will render the value of the slider as it changes.

It also provides an interface to read the value:

```javascript
this.slider.value; // will return the current value of the slider input
```

Or to get the element itself:

```javascript
this.slider.slider; // returns the HTML input element
```
