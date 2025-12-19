// Function to format the current date
function getCurrentDate() {
    var today = new Date();
    var weekday = today.toLocaleDateString('vi-VN', { weekday: 'long' });
    var day = today.getDate();
    var month = today.toLocaleDateString('vi-VN', { month: 'long' });
    var year = today.getFullYear();
    return weekday + ', ' + day + ' ' + month + ' ' + year;
}

// Update date on page load
window.onload = function () {
    var currentDate = getCurrentDate();
    document.getElementById("dateNow").textContent = currentDate;
};

// Countdown timer
document.addEventListener('DOMContentLoaded', function () {
    var countdownElement = document.getElementById('countdown');
    var progressBar = document.querySelector('.progress-bar');

    var currentTime = new Date();
    var targetTime = new Date(currentTime);
    targetTime.setHours(currentTime.getHours() + 1, 0, 0, 0);

    function updateCountdown() {
        var now = new Date();
        var timeRemaining = targetTime - now;

        if (timeRemaining <= 0) {
            progressBar.style.width = "100%";
        } else {
            var hours = Math.floor(timeRemaining / (1000 * 60 * 60));
            var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            countdownElement.innerHTML = `<i class="fas fa-bolt"></i> Thời gian: ${hours} giờ ${minutes} phút ${seconds} giây `;
            var progress = (timeRemaining / (60 * 60 * 1000)) * 100;
            progressBar.style.width = `${100 - progress}%`;
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});

// Product list
var itemsPerPage = 9;
var productList = [
    {
        name: "Áo thun nam basic trắng - Mẫu 2",
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTS8BYjxMxRcQaps4uRZRTsZDzx2I62B5KRvzMTra16POL2uXnCkkPlB7yMH5xapH0TaoNLDsMiPzIxplvT8JfqxWgd-OUy2CE2JqvNkl7DwapIwdZkILZ1TtrDIn5qvUQiAMQxsf0&usqp=CAc',
        category: "aonam",
        description: "Áo thun nam basic trắng thoải mái, dễ phối đồ, phù hợp mọi dịp hàng ngày.",
        price: 1000000,
        discountPercent: 15,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Kích thước :",
        ]
    },
    
    {
        name: "Áo sơ mi nam denim xanh - Mẫu 6",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQYl2TlReMYI_1S2Z-7-I5_G9w02GmR1BlSusagsrHoeKvkikw_wLdX1SRbO7oRHzkzM23Jy8nhuhCvsyyaZ6aR8946_oD3cbEQSm2CdSA&usqp=CAc",
        category: "aonam",
        description: "Áo sơ mi nam denim xanh bụi bặm, chất liệu bền đẹp, phong cách mạnh mẽ.",
        price: 600000,
        discountPercent: 6,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Kích thước : ",
        ]
    },
    {
        name: "Áo polo nam thể thao xám - Mẫu 7",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR5Ia9VKbSovk-U_VD6RQdDzumUTlFBzc1B2qNOaq8I2jvovf0ATIq58uwD-aqXykixKCd6V_PiKimfQSPO4jQuyiVZ29Eba9JjvlxqrnX0egXijwxxNakGrQ&usqp=CAc",
        category: "aonam",
        description: "Áo polo nam thể thao xám thoáng khí, co giãn tốt, lý tưởng cho hoạt động ngoài trời.",
        price: 600000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Kích thước : ",
        ]
    },
    
    {
        name: "Áo khoác nam hoodie đen - Mẫu 9",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSBCU56IgvpoWhbonRzljVzJ_Hg2_S5fmhAhYcwwm-kRkWnBJXtd3MYQS7CiEvRdTQB5nurQzo0Mgtzliv5G5dF7lXSPGZszTdagrK98iHLmgQ97TlbnYVaElwp9ms-k1HP8suqeZI&usqp=CAc",
        category: "aonam",
        description: "Áo khoác nam hoodie đen ấm áp, năng động, phong cách streetwear hiện đại.",
        price: 600000,
        discountPercent: 5,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Kích thước : ",
        ]
    },
    {
        name: "Áo phông nam in họa tiết camo - Mẫu 10",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw9vQq7htxww8SvcgU04OdOAQmMQb5jxeg9w&s",
        category: "aonam",
        description: "Áo phông nam in họa tiết camo cá tính, chất cotton mềm mại, trẻ trung năng động.",
        price: 600000,
        discountPercent: 10,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Kích thước : ",
        ]
    },

    {
        name: "Quần jeans nam slimfit đen - Mẫu 5",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSb0RvygX7YSiGgewjT0tRDwZ4TeNrWbxVtDnJAzeSBkfA8p59R0WnVV2GJk_mOPhxfyLKWTQvpGne5ncbmt9lD_Thxc_1eNryjZGrkuyFsXygjKwqrBdrZ78_XbTUC1L26ja4TEGed&usqp=CAc",
        category: "donam",
        description: "Quần jeans nam slimfit đen tôn dáng, chất denim cao cấp, bền màu theo thời gian.",
        price: 80000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Kích thước :",
        ]
    },
    {
        name: "Quần short nam kaki be - Mẫu 6",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTuTiHXMtPjpRrYObu5ZoNm6PLg3CBGyBYBZoVgFZIK1m7wauw1id53szQLhauWJL1kwUWM_Lxc5YtkEU-NfGWqsXBE_67ulezdQpi9Z_KntXufmJRhHCQZcLszhexrBCGafJGR6C8&usqp=CAc",
        category: "donam",
        description: "Quần short nam kaki be thoải mái, thoáng mát, phù hợp mùa hè năng động.",
        price: 60000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Kích thước : ",
        ]
    },
    {
        name: "Quần jogger nam thể thao xám - Mẫu 7",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR92vU-NMaEFws_OpeGKxwr8r65KngxwnLvRVl0qlt1sGU4mrfE0Vv5bBr5TzjWyArsavNdrlMdgddc2nSWv2KIJ5O_Oeqa4HW-miVJBfwLtKh1hkgNVaGwBdoVwYVm7oj1y0Eo2tmoxw&usqp=CAc",
        category: "donam",
        description: "Quần jogger nam thể thao xám co giãn tốt, thoải mái vận động, phong cách trẻ trung.",
        price: 60000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Kích thước : ",
        ]
    },
    {
        name: "Quần tây nam công sở xanh navy - Mẫu 8",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTzz0xK-H_09D5qk2ZM9sDu1upUckKmDOyQCi5GYj0ifLgYQLmyV3OL-xBzv1uPPVrgjgEGYlDLHBH90w7oawaTO7125WwkrXZ-oNpNS9bfOp9jgrU0o_qs&usqp=CAc",
        category: "donam",
        description: "Quần tây nam công sở xanh navy lịch lãm, form dáng chuẩn, chất liệu cao cấp.",
        price: 80000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Kích thước : ",
        ]
    },
    {
        name: "Quần lửng nam cargo nâu - Mẫu 9",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSWYoz0X3hYpn_qPbPtIx9j5ALZhFUnnxUMRoG34hg86Jp0w7o5k8Y-C4aErxnjTvfaBXL4U6RFw0WM5SZGqeKfzszpKMckuVO4tfr_2dWR9L4W-JjqzGh2lpqgNVD0SzIluJGUQHzw&usqp=CAc",
        category: "donam",
        description: "Quần lửng nam cargo nâu tiện lợi, nhiều túi, phong cách bụi bặm cá tính.",
        price: 60000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Kích thước : ",
        ]
    },
    {
        name: "Áo khoác bomber nam xanh quân đội - Mẫu 10",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS9UJiFufyifKYd6TV3QT7tdFYI_OLbaFUopJlEiuTL5nqMJ0XSX7QGmOJ8nQW8l-oi84KCLXMP6lMwe1kshgmk-kSmnFRu4pti-hVkaGiQ-j2Rl5x2B_SYjpuKf2HqsjNUF54LqA&usqp=CAc",
        category: "aonam",
        description: "Áo khoác bomber nam xanh quân đội ấm áp, phong cách mạnh mẽ, dễ phối đồ.",
        price: 10000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Kích thước : ",
        ]
    },
   
   
    {
        name: "Dây lưng nam da thật nâu - Mẫu 2",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSuUbOoWZ1GyQm4xGiqSEbDlm5T-MaTKkbWMhJFiL0G05iZChn1BuzvPlkFQNwu3S3zfe66_WwGXh2U8lVjSAwUYRYyMCNPQCHZXBC1eT95xZD_8XO_P_BbC5NE2fsuaBK8aeH1&usqp=CAc",
        category: "phukiennam",
        description: "Dây lưng nam da thật nâu sang trọng, bền đẹp, nâng tầm phong cách quý ông.",
        price: 100000,
        discountPercent: 5,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Kích thước : ",
        ]
    },
    {
        name: "Ví da nam dài đen - Mẫu 3",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJgt6mvXD2-XULgl063EcuP_2mPIQMkNF4Ikuj6uGk16tNpCe_O00nZF-8HUNuREADu5zr67v6f6PZ4vnTlkREdr7uXyyR_xxLaZ5B4mic8cssh0CX-AOnmGRaKZgQ2WzVEDDQ0wPjuZU&usqp=CAc",
        category: "phukiennam",
        description: "Ví da nam dài đen tinh tế, nhiều ngăn, chất liệu cao cấp, lịch lãm nam tính.",
        price: 205000,
        discountPercent: 15,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Kích thước : ",
        ]
    },
    
    {
        name: "Mũ lưỡi trai nam đen basic - Mẫu 5",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQCC5-uFs9oWEMpQ2XEVsFVYFxmnJ8ejPUYlGIxgHTArcKgV5Pnf8c9TnH3FHuajAUhBVAgj9XYBIG2Ca46UApQ8qsGesQZJCUOYyh6YlRpsJyjqa3RZyi3hQj1MnVcfAtgxoPsJ2w&usqp=CAc",
        category: "phukiennam",
        description: "Mũ lưỡi trai nam đen basic thời trang, dễ phối, phong cách streetwear cool ngầu.",
        price: 105000,
        discountPercent: 5,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Kích thước : ",
        ]
    },
    
    {
        name: "Giày sneaker nam trắng - Mẫu 7",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ6T9-mb9CN9R_ms-8A3CQYfdSBGQaClgNF_wpmJVcZCsnsfoZ7yV6DJM2150Ylt6bW5cjttS90eMyIN8xqUaOLtNsDWl_9hDnu2sxHb064ztriHcB_hLJpogb-zjo2jribphAFdXA&usqp=CAc",
        category: "giaynam",
        description: "Giày sneaker nam trắng năng động, đế êm, dễ phối đồ, phong cách trẻ trung.",
        price: 95000,
        discountPercent: 10,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Kích thước : ",
        ]
    },
  
    {
        name: "Đồng hồ nam dây kim loại bạc - Mẫu 9",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRNbwJ5H5RyRGfwUBl7p_9LocgpjKljeY8PA1Al8uYHL3ZSsUKOy6prQ0gFAf4uPEFbvBz6hglDNqiXCyMeEPQBrB4VzhSlg-WgtAtX8VRIUqIMbmFCAM1J28ZYiNXCxDbKiQCdMTW00A&usqp=CAc",
        category: "phukiennam",
        description: "Đồng hồ nam dây kim loại bạc sang trọng, mặt kính chống xước, đẳng cấp quý ông.",
        price: 305000,
        discountPercent: 15,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Kích thước : ",
        ]
    },
    {
        name: "Kính râm nam phi công - Mẫu 10",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fLimfLcVFhlBdBzL23uPwiXR-AwC7_16OQ&s",
        category: "phukiennam",
        description: "Kính râm nam phi công cổ điển, bảo vệ mắt tốt, phong cách manly mạnh mẽ.",
        price: 300000,
        discountPercent: 5,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Kích thước : ",
        ]
    },
];

// Display products
function displayProducts(productList, categoryName) {
    var itemsPerPage = 12;
    var currentPage = 1;

    var filteredProducts = categoryName === 'all' ? productList : productList.filter(function (product) {
        return product.category === categoryName;
    });

    function renderProducts(page) {
        $('#productList').empty();
        var startIndex = (page - 1) * itemsPerPage;
        var endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);
        var productListHtml = '';

        for (var i = startIndex; i < endIndex; i++) {
            var product = filteredProducts[i];
            var hasDiscount = product.discountPercent > 0;

            var productHtml = `
                    <div class="col-md-4 col-lg-3 col-6 my-1 px-1">
                        <div class="product-card" data-product='${JSON.stringify(product)}'>
                            <img src="${product.image}" alt="${product.name}" class="product-image img-fluid">
                            <div class="product-content d-flex flex-column">
                                <div class="product-title">${product.name}</div>
                                <div class="product-description">${product.description}</div>
                                <div class="product-price-container">
                                    ${hasDiscount ? `<div class="product-discount">${product.price.toLocaleString()}₫</div>` : ''}
                                    <div class="product-price">${product.discountPrice.toLocaleString()}₫</div>
                                </div>
                            </div>
                            <div class="btn-discount ${hasDiscount ? '' : 'd-none'}">${hasDiscount ? `-${product.discountPercent.toLocaleString()}%` : ''}</div>
                        </div>
                    </div>
                `;
            productListHtml += productHtml;
        }

        $('#productList').html(productListHtml);

        var totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        $('#pagination').empty();
        for (var i = 1; i <= totalPages; i++) {
            var activeClass = i === currentPage ? 'active' : '';
            $('#pagination').append(`
                    <li class="page-item ${activeClass}"><a class="page-link" href="#" data-page="${i}">${i}</a></li>
                `);
        }
    }

    renderProducts(currentPage);

    $(document).on('click', '#pagination .page-link', function (e) {
        e.preventDefault();
        currentPage = $(this).data('page');
        renderProducts(currentPage);
        $('html, body').animate({ scrollTop: $('#top').offset().top }, 'slow');
    });
}

// Product modal
$(document).ready(function () {
    $(document).on('click', '.product-card', function () {
        var product = $(this).data('product');
        showModal(product);
    });

    function showModal(product) {
        $('#productModalLabel').text(product.name);

        var modalContent = `
            <div class="row">
                <div class="col-md-6 col-lg-4 col-12">
                    <div class="zoomImg p-4">
                        <img src="${product.image}" alt="${product.name}" class="img-fluid">
                    </div>
                </div>
                <div class="col-md-6 col-lg-8 col-12">
                    <p><strong>Loại sản phẩm:</strong> ${product.category}</p>
                    <p><strong>Mô tả:</strong> ${product.description}</p>
        `;

        if (product.details && product.details.length > 0) {
            modalContent += `<p><strong>Chi tiết sản phẩm:</strong></p>`;
            modalContent += `<ul style="list-style:none">`;
            product.details.forEach(detail => {
                modalContent += `<li>${detail}</li>`;
            });
            modalContent += `</ul>`;
        }

        if (product.discountPercent > 0) {
            modalContent += `
            <div class="product-price-container">
                <div class="product-discount"><strong>Giá gốc:</strong>  ${product.price.toLocaleString()}₫</div>
                <div class="product-price"><strong>Giá khuyến mãi:</strong> ${product.discountPrice.toLocaleString()}₫</div>
                <div class="btn-discount"><strong>Giảm giá:</strong> ${product.discountPercent}%</div>
           </div>
            `;
        } else {
            if (!isNaN(product.discountPercent)) {
                modalContent += `
                        <div class="product-price-container">
                            <div class="product-price "><strong>Giá bán: </strong> ${product.discountPrice.toLocaleString()} ₫</div>
                        </div>
                `;
            }
        }

        modalContent += `
            <div class="input-group mt-3">
                <span class="input-group-btn">
                    <button type="button" class="btn btn-outline-secondary btn-minus">-</button>
                </span>
                <input type="number" class="form-control text-center product-quantity" value="1">
                <span class="input-group-btn">
                    <button type="button" class="btn btn-outline-secondary btn-plus">+</button>
                </span>
            </div>
            <div class="d-flex flex-column flex-md-row  justify-content-between">
            <button class="btn btn-info  btn-add-to-cart m-2 w-100" data-name="${product.name}" data-price="${product.discountPrice}"> <i class="fa-solid fa-cart-plus text-light"></i> Thêm vào giỏ hàng</button>
            <button class="btn btn-warning  btn-buy-now m-2 w-100" data-name="${product.name}" data-price="${product.discountPrice}">Mua ngay</button>
            </div>
        </div>
        </div>`;

        $('#productModalBody').html(modalContent);
        $('#productModal').modal('show');

        $(document).on('click', '.btn-plus', function () {
            var input = $(this).closest('.input-group').find('input.product-quantity');
            var value = parseInt(input.val());
            input.val(value + 1);
        });

        $(document).on('click', '.btn-minus', function () {
            var input = $(this).closest('.input-group').find('input.product-quantity');
            var value = parseInt(input.val());
            if (value > 1) {
                input.val(value - 1);
            }
        });

        function displayAddToCartAlert(name, discountPrice, quantity) {
            var alertHtml = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>${quantity} x ${name}</strong> đã được thêm vào giỏ hàng với đơn giá ${discountPrice.toLocaleString()} VND.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `;
            $('#alertContainer').html(alertHtml);
        }

        $(document).on('click', '#productModal .btn-add-to-cart', function () {
            var name = product.name;
            var price = product.price;
            var discountPrice = product.discountPrice;
            var discountPercent = product.discountPercent;
            var image = product.image;
            var quantity = parseInt($('#productModal .product-quantity').val());

            addToCart(name, price, discountPrice, discountPercent, image, quantity);
            displayAddToCartAlert(name, discountPrice, quantity);
            updateCartDropdown();
        });

        function addToCart(name, price, discountPrice, discountPercent, image, quantity) {
            var product = {
                name: name,
                price: price,
                discountPrice: discountPrice,
                discountPercent: discountPercent,
                image: image,
                quantity: quantity
            };

            var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            var existingProductIndex = cartItems.findIndex(item => item.name === name);
            if (existingProductIndex !== -1) {
                cartItems[existingProductIndex].quantity += quantity;
            } else {
                cartItems.push(product);
            }

            localStorage.setItem('cart', JSON.stringify(cartItems));
            updateCartIcon(cartItems.length);
            console.log('Đã thêm sản phẩm vào giỏ hàng:', product);
        }

        $(document).on('click', '.btn-buy-now', function () {
            var name = product.name;
            var price = product.price;
            var discountPrice = product.discountPrice;
            var discountPercent = product.discountPercent;
            var image = product.image;
            var quantity = parseInt($('#productModal .product-quantity').val());

            addToCart(name, price, discountPrice, discountPercent, image, quantity);
            displayCheckoutRedirectAlert(name, discountPrice, quantity);
            updateCartIcon(cartItems.length);
            console.log('Đã thêm sản phẩm vào giỏ hàng:', product);
            console.log('Đang mua sản phẩm và chuyển hướng sang thanh toán');
        });

        function displayCheckoutRedirectAlert(name, discountPrice, quantity) {
            var total = discountPrice * quantity;
            var alertHtml = `
                <div class="alert alert-primary alert-dismissible fade show" role="alert">
                    <strong>${quantity} x ${name}</strong> đã được mua với giá ${discountPrice.toLocaleString()} VND.
                    <br>
                    <strong>Total: ${total.toLocaleString()} VND</strong>
                    <div class="spinner-border"></div>
                    <p> Đang chuyển hướng sang trang thanh toán sau 1 giây ...</p>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            `;
            $('#alertContainer').html(alertHtml);

            setTimeout(function () {
                $('.alert').alert('close');
                window.location.href = '../html/gio-hang.html';
            }, 1000);
        }
    }
});

// Image slider
$(document).ready(function () {
    var images = $('.image-container img');
    var currentIndex = 0;

    function showImage(index) {
        images.removeClass('active');
        images.eq(index).addClass('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 5000);
});

// User registration and login
$(document).ready(function () {
    var users = JSON.parse(localStorage.getItem('users')) || [];

    function displayMembers() {
        var memberTable = $('#memberList');
        memberTable.empty();
        users.forEach(function (user) {
            var row = $('<tr>');
            row.append('<td>' + user.fullName + '</td>');
            row.append('<td>' + user.username + '</td>');
            row.append('<td>' + user.email + '</td>');
            row.append('<td>' + user.phone + '</td>');
            row.append('<td>' + user.dob + '</td>');
            row.append('<td>' + user.address + '</td>');
            row.append('<td>' + user.password + '</td>');
            memberTable.append(row);
        });
    }

    displayMembers();

    document.getElementById('registerForm').addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        // Validate full name
        const fullName = document.getElementById('fullName').value.trim();
        const hoTenError = document.getElementById('hoTenError');
        if (!/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/.test(fullName)) {
            hoTenError.style.display = 'block';
            isValid = false;
        } else {
            hoTenError.style.display = 'none';
        }

        // Validate username
        const username = document.getElementById('username').value.trim();
        const tenDangNhapError = document.getElementById('tenDangNhapError');
        if (!/^[a-zA-Z][a-zA-Z0-9]*$/.test(username)) {
            tenDangNhapError.style.display = 'block';
            isValid = false;
        } else {
            tenDangNhapError.style.display = 'none';
        }

        // Validate password
        const password = document.getElementById('password').value;
        const matKhauError = document.getElementById('matKhauError');
        if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
            matKhauError.style.display = 'block';
            isValid = false;
        } else {
            matKhauError.style.display = 'none';
        }

        // Validate confirm password
        const confirmPassword = document.getElementById('confirmPassword').value;
        const xacNhanMatKhauError = document.getElementById('xacNhanMatKhauError');
        if (password !== confirmPassword) {
            xacNhanMatKhauError.style.display = 'block';
            isValid = false;
        } else {
            xacNhanMatKhauError.style.display = 'none';
        }

        // Validate date of birth
        const dob = new Date(document.getElementById('dob').value);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        const errdob = document.getElementById('errdob');
        if (isNaN(dob) || age < 18 || (age === 18 && today < new Date(dob.setFullYear(dob.getFullYear() + 18)))) {
            errdob.style.display = 'block';
            isValid = false;
        } else {
            errdob.style.display = 'none';
        }

        // Validate phone
        const phone = document.getElementById('phone').value.trim();
        const dienThoaiError = document.getElementById('dienThoaiError');
        if (!/^(09|03|07|06|05|04)\d{8}$/.test(phone)) {
            dienThoaiError.style.display = 'block';
            isValid = false;
        } else {
            dienThoaiError.style.display = 'none';
        }

        // Validate email
        const email = document.getElementById('email').value.trim();
        const emailError = document.getElementById('emailError');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        // Validate address
        const address = document.getElementById('address').value.trim();
        const diaChiError = document.getElementById('diaChiError');
        if (address === '') {
            diaChiError.style.display = 'block';
            isValid = false;
        } else {
            diaChiError.style.display = 'none';
        }

        if (isValid) {
            alert('Đăng ký thành công!');
            // Perform form submission or further processing here
        }
    });
});

// Cart dropdown
function updateCartDropdown() {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    var cartItemsContainer = $('.cart-items-container');

    if (cartItems.length === 0) {
        cartItemsContainer.hide();
        $('.empty-cart-message').show();
    } else {
        $('.empty-cart-message').hide();
        cartItemsContainer.empty();

        cartItems.forEach(function (item) {
            var productHtml = `
        <div class="dropdown-item">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <img src="${item.image}" alt="${item.name}" class="mr-3" style="width: 50px;">
                    <div>
                        <div class="font-weight-bold">${item.name}</div>
                        <div>${item.quantity} x ${item.discountPrice.toLocaleString()} VND</div>
                    </div>
                </div>
                <button class="btn btn-danger btn-sm remove-from-cart" data-name="${item.name}">Xóa</button>
            </div>
        </div>
    `;
            cartItemsContainer.append(productHtml);
        });
        cartItemsContainer.show();
    }
    updateCartIcon(cartItems.length);
}

$(document).ready(function () {
    updateCartDropdown();
});

$(document).on('click', '.remove-from-cart', function () {
    var productName = $(this).data('name');
    removeFromCart(productName);
});

function removeFromCart(productName) {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    var updatedCartItems = cartItems.filter(function (item) {
        return item.name !== productName;
    });
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    updateCartDropdown();

    // Reset cart page and bill table content after 0.5 seconds
    setTimeout(function () {
        resetCartPage();
        resetBillTable();
    }, 500);
}

$(document).on('click', '.pay-btn', function () {
    window.location.href = '../html/gio-hang.html';
});

function updateCartIcon(numItems) {
    $('.num-item-in-cart').text(numItems);
}

function resetCartPage() {
    var cartItemsContainer = $('#cart-items-container');
    cartItemsContainer.html('<p>Giỏ hàng của bạn đang trống.</p>');
}

function resetBillTable() {
    var billTable = $('#bill-table');
    billTable.html('<p>Không có sản phẩm nào trong giỏ hàng.</p>');
}

// Cart page
$(document).ready(function () {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    var cartItemsContainer = $('#cart-items-container');

    if (cartItems.length === 0) {
        cartItemsContainer.html('<p>Giỏ hàng của bạn đang trống.</p>');
    } else {
        cartItemsContainer.empty();
        cartItems.forEach(function (item) {
            var total = item.discountPrice * item.quantity;
            var discountPercent = ((item.price - item.discountPrice) / item.price) * 100;

            var productHtml = `
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${item.image}" alt="${item.name}" class="img-fluid rounded-start">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="product-discount">Giá gốc: ${item.price.toLocaleString()} VND</p>
                                <p class="product-price">Giá giảm: ${item.discountPrice.toLocaleString()} VND</p>
                                <p class="btn btn-danger text-center">-${discountPercent}%</p>   <span class="card-text">Số lượng: ${item.quantity}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            cartItemsContainer.append(productHtml);
        });
    }
});

// Bill table
$(document).ready(function () {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    var billTable = $('#bill-table');

    if (cartItems.length === 0) {
        billTable.html('<p>Không có sản phẩm nào trong giỏ hàng.</p>');
    } else {
        var tableHtml = `
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Giá gốc (VND)</th>
                        <th scope="col">Giá giảm (VND)</th>
                        <th scope="col">Phần trăm khuyến mãi (%)</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Tổng cộng (VND)</th>
                    </tr>
                </thead>
                <tbody id="bill-body">
                </tbody>
            </table>
        `;
        billTable.html(tableHtml);

        var billBody = $('#bill-body');
        cartItems.forEach(function (item, index) {
            var total = item.discountPrice * item.quantity;
            var discountPercent = ((item.price - item.discountPrice) / item.price) * 100;

            var rowHtml = `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${item.name}</td>
                    <td>${item.price.toLocaleString()}</td>
                    <td>${item.discountPrice.toLocaleString()}</td>
                    <td>${discountPercent.toFixed(2)}</td>
                    <td>${item.quantity}</td>
                    <td>${total.toLocaleString()}</td>
                </tr>
            `;
            billBody.append(rowHtml);
        });
    }
});

let currentCategoryName = 'all'; // Biến toàn cục để lưu tên danh mục hiện tại
// btnLoc
$(document).ready(function () {
    $("#btnLoc").click(function (e) {
        e.preventDefault();

        // Lấy giá trị lọc giá
        const giaMin = parseFloat($("#giaMin").val()) || 0;
        const giaMax = parseFloat($("#giaMax").val()) || Infinity;

        // Kiểm tra lọc giảm giá
        const locGiamGia = $("input[name='discount']:checked").attr("id"); // "discountYes" hoặc "discountNo"

        // Lọc danh sách sản phẩm
        const filtered = productList.filter(product => {
            const giaSanPham = product.discountPercent > 0 ? product.discountPrice : product.price;

            // Kiểm tra giá nằm trong khoảng
            const hopLeGia = giaSanPham >= giaMin && giaSanPham <= giaMax;

            // Kiểm tra giảm giá
            let hopLeGiamGia = true;
            if (locGiamGia === "discountYes") {
                hopLeGiamGia = product.discountPercent > 0;
            } else if (locGiamGia === "discountNo") {
                hopLeGiamGia = product.discountPercent === 0;
            }

            // Kiểm tra danh mục hiện tại
            const hopLeCategory = product.category === currentCategoryName || currentCategoryName === 'all';

            return hopLeGia && hopLeGiamGia && hopLeCategory;
        });

        // Hiển thị sản phẩm đã lọc
        displayProducts(filtered, currentCategoryName);
    });
});
$(document).ready(function() {
    $("#locbanhkem").click(function(e) {
        e.preventDefault();
        
        // Lấy giá trị lọc giá
        const giaMin = parseFloat($(".loc-san-pham input:first").val()) || 0;
        const giaMax = parseFloat($(".loc-san-pham input:last").val()) || Infinity;
        
        // Kiểm tra lọc giảm giá
        const locGiamGia = $("input[name='discount']:checked").attr("id"); // "discountYes" hoặc "discountNo"
        
        // Lọc danh sách sản phẩm chỉ trong danh mục bánh kem
        const filtered = productList.filter(product => {
            // Chỉ lọc sản phẩm trong danh mục bánh kem
            if (product.category !== "quannam") return false;
            
            const giaSanPham = product.discountPercent > 0 ? product.discountPrice : product.price;
            
            // Kiểm tra giá nằm trong khoảng
            const hopLeGia = giaSanPham >= giaMin && giaSanPham <= giaMax;
            
            // Kiểm tra giảm giá
            let hopLeGiamGia = true;
            if (locGiamGia === "discountYes") {
                hopLeGiamGia = product.discountPercent > 0;
            } else if (locGiamGia === "discountNo") {
                hopLeGiamGia = product.discountPercent === 0;
            }
            
            return hopLeGia && hopLeGiamGia;
        });
        
        // Hiển thị sản phẩm đã lọc
        displayProducts(filtered, "quannam");
        
        // Cuộn lên đầu trang sau khi lọc
        $('html, body').animate({ scrollTop: $('#top').offset().top }, 'slow');
    });
});
$(document).ready(function() {
    $("#locbanhngot").click(function(e) {
        e.preventDefault();
        
        // Lấy giá trị lọc giá
        const giaMin = parseFloat($(".loc-san-pham input:first").val()) || 0;
        const giaMax = parseFloat($(".loc-san-pham input:last").val()) || Infinity;
        
        // Kiểm tra lọc giảm giá
        const locGiamGia = $("input[name='discount']:checked").attr("id"); // "discountYes" hoặc "discountNo"
        
        // Lọc danh sách sản phẩm chỉ trong danh mục bánh kem
        const filtered = productList.filter(product => {
            // Chỉ lọc sản phẩm trong danh mục bánh kem
            if (product.category !== "aonam") return false;
            
            const giaSanPham = product.discountPercent > 0 ? product.discountPrice : product.price;
            
            // Kiểm tra giá nằm trong khoảng
            const hopLeGia = giaSanPham >= giaMin && giaSanPham <= giaMax;
            
            // Kiểm tra giảm giá
            let hopLeGiamGia = true;
            if (locGiamGia === "discountYes") {
                hopLeGiamGia = product.discountPercent > 0;
            } else if (locGiamGia === "discountNo") {
                hopLeGiamGia = product.discountPercent === 0;
            }
            
            return hopLeGia && hopLeGiamGia;
        });
        
        // Hiển thị sản phẩm đã lọc
        displayProducts(filtered, "banhngot");
        
        // Cuộn lên đầu trang sau khi lọc
        $('html, body').animate({ scrollTop: $('#top').offset().top }, 'slow');
    });
});
$(document).ready(function() {
    $("#lockeo").click(function(e) {
        e.preventDefault();
        
        // Lấy giá trị lọc giá
        const giaMin = parseFloat($(".loc-san-pham input:first").val()) || 0;
        const giaMax = parseFloat($(".loc-san-pham input:last").val()) || Infinity;
        
        // Kiểm tra lọc giảm giá
        const locGiamGia = $("input[name='discount']:checked").attr("id"); // "discountYes" hoặc "discountNo"
        
        // Lọc danh sách sản phẩm chỉ trong danh mục bánh kem
        const filtered = productList.filter(product => {
            // Chỉ lọc sản phẩm trong danh mục bánh kem
            if (product.category !== "keo") return false;
            
            const giaSanPham = product.discountPercent > 0 ? product.discountPrice : product.price;
            
            // Kiểm tra giá nằm trong khoảng
            const hopLeGia = giaSanPham >= giaMin && giaSanPham <= giaMax;
            
            // Kiểm tra giảm giá
            let hopLeGiamGia = true;
            if (locGiamGia === "discountYes") {
                hopLeGiamGia = product.discountPercent > 0;
            } else if (locGiamGia === "discountNo") {
                hopLeGiamGia = product.discountPercent === 0;
            }
            
            return hopLeGia && hopLeGiamGia;
        });
        
        // Hiển thị sản phẩm đã lọc
        displayProducts(filtered, "keo");
        
        // Cuộn lên đầu trang sau khi lọc
        $('html, body').animate({ scrollTop: $('#top').offset().top }, 'slow');
    });
});
$(document).ready(function() {
    $("#locbanhquy").click(function(e) {
        e.preventDefault();
        
        // Lấy giá trị lọc giá
        const giaMin = parseFloat($(".loc-san-pham input:first").val()) || 0;
        const giaMax = parseFloat($(".loc-san-pham input:last").val()) || Infinity;
        
        // Kiểm tra lọc giảm giá
        const locGiamGia = $("input[name='discount']:checked").attr("id"); // "discountYes" hoặc "discountNo"
        
        // Lọc danh sách sản phẩm chỉ trong danh mục bánh kem
        const filtered = productList.filter(product => {
            // Chỉ lọc sản phẩm trong danh mục bánh kem
            if (product.category !== "banhquy") return false;
            
            const giaSanPham = product.discountPercent > 0 ? product.discountPrice : product.price;
            
            // Kiểm tra giá nằm trong khoảng
            const hopLeGia = giaSanPham >= giaMin && giaSanPham <= giaMax;
            
            // Kiểm tra giảm giá
            let hopLeGiamGia = true;
            if (locGiamGia === "discountYes") {
                hopLeGiamGia = product.discountPercent > 0;
            } else if (locGiamGia === "discountNo") {
                hopLeGiamGia = product.discountPercent === 0;
            }
            
            return hopLeGia && hopLeGiamGia;
        });
        
        // Hiển thị sản phẩm đã lọc
        displayProducts(filtered, "do bo");
        
        // Cuộn lên đầu trang sau khi lọc
        $('html, body').animate({ scrollTop: $('#top').offset().top }, 'slow');
    });
});
$(document).ready(function() {
    $("#locsocola").click(function(e) {
        e.preventDefault();
        
        // Lấy giá trị lọc giá
        const giaMin = parseFloat($(".loc-san-pham input:first").val()) || 0;
        const giaMax = parseFloat($(".loc-san-pham input:last").val()) || Infinity;
        
        // Kiểm tra lọc giảm giá
        const locGiamGia = $("input[name='discount']:checked").attr("id"); // "discountYes" hoặc "discountNo"
        
        // Lọc danh sách sản phẩm chỉ trong danh mục bánh kem
        const filtered = productList.filter(product => {
            // Chỉ lọc sản phẩm trong danh mục bánh kem
            if (product.category !== "quan nam") return false;
            
            const giaSanPham = product.discountPercent > 0 ? product.discountPrice : product.price;
            
            // Kiểm tra giá nằm trong khoảng
            const hopLeGia = giaSanPham >= giaMin && giaSanPham <= giaMax;
            
            // Kiểm tra giảm giá
            let hopLeGiamGia = true;
            if (locGiamGia === "discountYes") {
                hopLeGiamGia = product.discountPercent > 0;
            } else if (locGiamGia === "discountNo") {
                hopLeGiamGia = product.discountPercent === 0;
            }
            
            return hopLeGia && hopLeGiamGia;
        });
        
        // Hiển thị sản phẩm đã lọc
        displayProducts(filtered, "ao nam");
        
        // Cuộn lên đầu trang sau khi lọc
        $('html, body').animate({ scrollTop: $('#top').offset().top }, 'slow');
    });
});


    $(document).ready(function() {
        // Xử lý cả nút cũ (trong dropdown) và nút mới lớn
        $('.pay-btn, .pay-btn-large').on('click', function() {
            // Kiểm tra giỏ hàng có sản phẩm không
            if ($('.num-item-in-cart').text() === '0' || $('.cart-items-container').children().length === 0) {
                alert('Giỏ hàng của bạn đang trống!');
                return;
            }
            $('#confirmPaymentModal').modal('show');
        });

        // Khi nhấn "Xác nhận thanh toán"
        $('#confirmPayBtn').on('click', function() {
            $('#confirmPaymentModal').modal('hide');
            
            // Hiển thị thông báo thành công
            $('#successPaymentModal').modal('show');

            // Làm trống giỏ hàng và bảng TOTAL
            $('.cart-items-container').empty();
            $('.num-item-in-cart').text('0');
            $('.empty-cart-message').show();

            $('#cart-items-container').empty();
            $('#bill-table').empty();
        });
    });



$(document).ready(function() {
    $("#lockem").click(function(e) {
        e.preventDefault();
        
        // Lấy giá trị lọc giá
        const giaMin = parseFloat($(".loc-san-pham input:first").val()) || 0;
        const giaMax = parseFloat($(".loc-san-pham input:last").val()) || Infinity;
        
        // Kiểm tra lọc giảm giá
        const locGiamGia = $("input[name='discount']:checked").attr("id"); // "discountYes" hoặc "discountNo"
        
        // Lọc danh sách sản phẩm chỉ trong danh mục bánh kem
        const filtered = productList.filter(product => {
            // Chỉ lọc sản phẩm trong danh mục bánh kem
            if (product.category !== "quan nam") return false;
            
            const giaSanPham = product.discountPercent > 0 ? product.discountPrice : product.price;
            
            // Kiểm tra giá nằm trong khoảng
            const hopLeGia = giaSanPham >= giaMin && giaSanPham <= giaMax;
            
            // Kiểm tra giảm giá
            let hopLeGiamGia = true;
            if (locGiamGia === "discountYes") {
                hopLeGiamGia = product.discountPercent > 0;
            } else if (locGiamGia === "discountNo") {
                hopLeGiamGia = product.discountPercent === 0;
            }
            
            return hopLeGia && hopLeGiamGia;
        });
        
        // Hiển thị sản phẩm đã lọc
        displayProducts(filtered, "quan nam");
        
        // Cuộn lên đầu trang sau khi lọc
        $('html, body').animate({ scrollTop: $('#top').offset().top }, 'slow');
    });
});