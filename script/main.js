const searchInput = document.getElementById("characterSearch")
const inputWrap = document.getElementById("characterInputWrap")
const btnSearch = document.getElementById("btnSearch")
const characterLabel = document.getElementById("characterLabel")
const buyButtons = document.querySelectorAll(".product-card .btn-buy")

const RESULT_PAGES = ["success.html", "pending.html", "cancel.html"]

function formatPrice(num) {
    return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0")
}

function getCharId() {
    const params = new URLSearchParams(window.location.search)
    return params.get("charID") || ""
}

function getCharacterName() {
    const id = getCharId()
    return id ? decodeURIComponent(id) : ""
}

function hasValidChar() {
    return getCharId().length > 0
}

function updateUI() {
    const name = getCharacterName()
    if (hasValidChar()) {
        characterLabel.innerHTML =
            "Покупка для персонажа: " + `<span class="character-name">${name}</span>`
        characterLabel.style.display = "block"
        inputWrap.style.display = "none"
        buyButtons.forEach((btn) => {
            btn.disabled = false
        })
    } else {
        characterLabel.style.display = "none"
        inputWrap.style.display = "flex"
        characterLabel.textContent = ""
        buyButtons.forEach((btn) => {
            btn.disabled = true
        })
    }
}

searchInput.addEventListener("input", function () {
    inputWrap.classList.toggle("has-input", this.value.trim().length >= 1)
    btnSearch.disabled = this.value.trim().length < 1
})

btnSearch.addEventListener("click", function () {
    if (this.disabled) return
    const query = searchInput.value.trim()
    if (!query) return
    window.location.search = "charID=" + encodeURIComponent(query)
})

buyButtons.forEach((btn, index) => {
    btn.addEventListener("click", function () {
        if (this.disabled) return
        window.location.href = RESULT_PAGES[index] || "success.html"
    })
})

buyButtons.forEach((btn) => {
    const num = btn.querySelector(".btn-buy__num")
    if (num) num.textContent = formatPrice(btn.getAttribute("data-price") || "0")
})

document.querySelectorAll(".price-dinar").forEach((el) => {
    const num = el.querySelector(".price-dinar__num")
    if (num) num.textContent = formatPrice(el.getAttribute("data-dinar") || "0")
})

updateUI()
