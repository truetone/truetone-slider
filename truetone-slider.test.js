const slider = require('./index');

test(".slider returns the HTML element of the slider input", () => {
  document.body.innerHTML =
    '<label for="freqency-slider">Frequency (Hz)</label>' +
    '<input id="freqency-slider"' +
    '        class="input-range frequency"' +
    '        type="range"' +
    '        step="1"' +
    '        value="440"' +
    '        min="16"' +
    '        max="880"' +
    '        data-value-elem="freqency-slider-value">';
  const sliderElem =  document.querySelector(".input-range.frequency");

  const subject = new slider(sliderElem);
  expect(subject.slider).toEqual(sliderElem);
});
