function add(selector, cls) {
  const element = document.querySelector(selector);
  if (element) {
    element.classList.add(cls);
    console.log(`Added class '${cls}' to element with selector '${selector}'.`);
  }
}

function remove(selector, cls) {
  const element = document.querySelector(selector);
  if (element) {
    element.classList.remove(cls);
    console.log(`Removed class '${cls}' from element with selector '${selector}'.`);
  }
}

function show(sliderIndex, pos) {
  const sliderSelector = `.slider#slider${sliderIndex}`;
  const dotSelector = `.dot#dots${sliderIndex}`;

  console.log(`Attempting to show slide ${pos} for slider ${sliderIndex}.`);
  
  remove(`${sliderSelector} .slide.showing`, 'showing');
  add(`${sliderSelector} .slide:nth-child(${pos})`, 'showing');
  remove(`${dotSelector} .dot.active`, 'active');
  add(`${dotSelector} .dot:nth-child(${pos})`, 'active');
}