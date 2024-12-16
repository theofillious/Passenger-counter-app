let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function saved() {
  let countSeperator = count + " - "
  saveEl.textContent += countSeperator
  countEl.textContent = 0
  count = 0
}

saved()