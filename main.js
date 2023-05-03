const inputToEncode = document.querySelector("#input-to-encode")
const buttonCopy = document.querySelector(".button-copy")
const nonEmpty = document.querySelectorAll(".nonempty-message")
const empty = document.querySelectorAll(".empty-message")
const textMessage = document.querySelector(".message")

const encode = (string) => {
  const encodedString = string
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  return encodedString;
};

const decode = (string) => {
  const decodedString = string
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  return decodedString;
};

const displayChange = (firstArray, secondArray) =>{
  firstArray.forEach(element=> {
    element.style.display = "none"
  })
  secondArray.forEach(element=> {
    element.style.display = "block"
  })
}

const useFn = (fn) => {
  const message = fn(inputToEncode.value)
  textMessage.textContent = message
  inputToEncode.value = ""
  displayChange(nonEmpty, empty)
}

const copy = () => {
  const textToCopy = textMessage.textContent
  navigator.clipboard.writeText(textToCopy)
  displayChange(empty, nonEmpty)
}
