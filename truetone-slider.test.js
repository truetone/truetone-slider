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

test(".value returns the slider input's value", () => {
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
  expect(subject.value).toEqual("440");
});

test("The value of the slider is rendered to the correct element", () => {
  document.body.innerHTML =
    '<label for="freqency-slider">Frequency (Hz)</label>' +
    '<input id="freqency-slider"' +
    '        class="input-range frequency"' +
    '        type="range"' +
    '        step="1"' +
    '        value="440"' +
    '        min="16"' +
    '        max="880"' +
    '        data-value-elem="frequency-slider-value">' +
    '<p id="frequency-slider-value"></p>';
  debugger;
  const sliderElem =  document.querySelector(".input-range.frequency");
  new slider(sliderElem).init();
  const sliderValueElem =  document.getElementById("frequency-slider-value");
  expect(sliderValueElem.innerHTML).toEqual("440");
});
