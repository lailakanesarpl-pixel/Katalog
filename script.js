```javascript
// =====================================
// DARK MODE
// =====================================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀";
    } else {
        themeButton.textContent = "☾";
    }

});


// =====================================
// PENCARIAN PRODUK
// =====================================

const searchInput = document.getElementById("searchInput");

const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", function () {

    const keyword = searchInput.value.toLowerCase();

    productCards.forEach(function (card) {

        const productName =
            card.textContent.toLowerCase();

        if (productName.includes(keyword)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


// =====================================
// TOMBOL BELI
// =====================================

const buyButtons =
    document.querySelectorAll(".buy-button");

buyButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card =
            button.closest(".product-card");

        const productName =
            card.querySelector("h3").textContent;

        const price =
            card.querySelector(".price").textContent;

        alert(
            "Produk dipilih:\n\n" +
            productName +
            "\n" +
            price
        );

    });

});
```