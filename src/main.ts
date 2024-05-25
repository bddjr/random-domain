import { randomDomain } from "./rand";

function main() {
  function generate() {
    self.inputGenerate.value = randomDomain(
      +self.inputLength.value,
      self.checkbox_09.checked,
      self.checkbox_az.checked,
      self.checkbox__.checked
    ) + self.inputSuffix.value;
  }
  self.buttonGenerate.addEventListener('click', generate)
  self.inputGenerate.addEventListener('focus', () => self.inputGenerate.select())
  generate()
}

if (document.readyState == 'loading') {
  // body未加载
  document.addEventListener("DOMContentLoaded", main)
} else {
  // body已加载
  main();
}
