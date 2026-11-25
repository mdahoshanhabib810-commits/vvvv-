// ডিফল্ট ৫০টি প্রোডাক্ট (Aura Studio)
const defaultProducts = [
    // --- শার্ট (১ - ১০) ---
    { id: 1, category: "Shirt", name: "ক্যাজুয়াল চেক কটন শার্ট", price: 850, sizes: ["M", "L", "XL"], desc: "১০০% পিওর কটন, আরামদায়ক ফিট।", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80" },
    { id: 2, category: "Shirt", name: "ফরমাল হোয়াইট অফিস শার্ট", price: 980, sizes: ["M", "L", "XL", "XXL"], desc: "অফিস ও মিটিংয়ের জন্য প্রিমিয়াম শার্ট।", img: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500&q=80" },
    { id: 3, category: "Shirt", name: "ডেনিম জিন্স ফুল শার্ট", price: 1150, sizes: ["M", "L", "XL"], desc: "স্টাইলিশ ডেনিম কাপড়ের আধুনিক শার্ট।", img: "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?w=500&q=80" },
    { id: 4, category: "Shirt", name: "প্রিমিয়াম পোলো টি-শার্ট", price: 620, sizes: ["M", "L", "XL"], desc: "সফট পিকে কটন, ক্যাজুয়াল লুকের জন্য সেরা।", img: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=500&q=80" },
    { id: 5, category: "Shirt", name: "লিনেন সামার ক্যাজুয়াল শার্ট", price: 920, sizes: ["M", "L", "XL"], desc: "গরমে ঠান্ডা ও আরামদায়ক লিনেন শার্ট।", img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80" },
    { id: 6, category: "Shirt", name: "ওভারসাইজড ড্রপ শোল্ডার টি-শার্ট", price: 750, sizes: ["M", "L", "XL"], desc: "ট্রেন্ডি স্ট্রিট-স্টাইল কালেকশন।", img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=80" },
    { id: 7, category: "Shirt", name: "নেভি ব্লু স্লিম ফিট শার্ট", price: 890, sizes: ["M", "L", "XL"], desc: "স্মার্ট লুকের জন্য স্লিম ফিট কাটিং।", img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&q=80" },
    { id: 8, category: "Shirt", name: "ফ্লানেল উইন্টার চেক শার্ট", price: 1100, sizes: ["M", "L", "XL"], desc: "হালকা শীতে পরার জন্য মোটা ফ্লানেল কাপড়।", img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&q=80" },
    { id: 9, category: "Shirt", name: "অলিভ গ্রিন ম্যান্ডারিন কলার শার্ট", price: 870, sizes: ["M", "L", "XL"], desc: "চাইনিজ কলারের আধুনিক ডিজাইন।", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80" },
    { id: 10, category: "Shirt", name: "ব্ল্যাক পার্টি ওয়্যার শার্ট", price: 1050, sizes: ["M", "L", "XL"], desc: "যেকোনো অনুষ্ঠানে মানানসই প্রিমিয়াম ব্ল্যাক শার্ট।", img: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=500&q=80" },

    // --- প্যান্ট (১১ - ১৮) ---
    { id: 11, category: "Pant", name: "স্লিম ফিট ডেনিম জিন্স প্যান্ট", price: 1350, sizes: ["30", "32", "34", "36"], desc: "ইলাস্টিক স্ট্রেচেবল প্রিমিয়াম জিন্স।", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80" },
    { id: 12, category: "Pant", name: "চিনো গ্যাবার্ডিন প্যান্ট (খাকি)", price: 1100, sizes: ["30", "32", "34"], desc: "স্মার্ট ও ক্যাজুয়াল উভয়ভাবে মানানসই।", img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&q=80" },
    { id: 13, category: "Pant", name: "কার্গো প্যান্ট (অলিভ গ্রিন)", price: 1450, sizes: ["30", "32", "34", "36"], desc: "মাল্টি-পকেট স্টাইলিশ ও টেকসই প্যান্ট।", img: "https://images.unsplash.com/photo-1517438476312-105cbe9b27bf?w=500&q=80" },
    { id: 14, category: "Pant", name: "ফরমাল অফিস ট্রাউজার", price: 1250, sizes: ["30", "32", "34", "36"], desc: "নিখুঁত কাটিং ও প্রিমিয়াম ফিনিশিং।", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80" },
    { id: 15, category: "Pant", name: "উইন্টার ফ্লিস জগার্স প্যান্ট", price: 790, sizes: ["M", "L", "XL"], desc: "শীতের জন্য আরামদায়ক ও উষ্ণ জগার্স।", img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&q=80" },
    { id: 16, category: "Pant", name: "ব্ল্যাক স্ট্রেচ ডেনিম জিন্স", price: 1300, sizes: ["30", "32", "34"], desc: "কালার গ্যারান্টিযুক্ত প্রিমিয়াম ব্ল্যাক ডেনিম।", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80" },
    { id: 17, category: "Pant", name: "নেভি ব্লু গ্যাবার্ডিন প্যান্ট", price: 1120, sizes: ["30", "32", "34", "36"], desc: "অফিস ও ডেইলি ব্যবহারের জন্য সেরা।", img: "https://images.unsplash.com/photo-1584865288642-42078afe6942?w=500&q=80" },
    { id: 18, category: "Pant", name: "ব্যাগি স্ট্রিট-স্টাইল কার্গো", price: 1500, sizes: ["30", "32", "34"], desc: "তরুণদের পছন্দের ট্রেন্ডি লুজ ফিট কার্গো।", img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80" },

    // --- শীতের হুডি (১৯ - ২৮) ---
    { id: 19, category: "Hoodie", name: "প্রিমিয়াম ব্ল্যাক পুলওভার হুডি", price: 1250, sizes: ["M", "L", "XL", "XXL"], desc: "৩২০ GSM হেভি ফ্লিস কটন, প্রচণ্ড শীতে উষ্ণ রাখবে।", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80" },
    { id: 20, category: "Hoodie", name: "অ্যাশ গ্রে জিপার হুডি জ্যাকেট", price: 1380, sizes: ["M", "L", "XL"], desc: "চেইনযুক্ত স্টাইলিশ শীতের জ্যাকেট হুডি।", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&q=80" },
    { id: 21, category: "Hoodie", name: "নেভি ব্লু উইন্টার হুডি", price: 1200, sizes: ["M", "L", "XL"], desc: "সফট ইনসাইড ফ্লিস ও ক্যাঙ্গারু পকেট।", img: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=500&q=80" },
    { id: 22, category: "Hoodie", name: "মেরুন কালার ওভারসাইজড হুডি", price: 1320, sizes: ["M", "L", "XL"], desc: "আধুনিক ড্রপ-শোল্ডার উইন্টার হুডি।", img: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=500&q=80" },
    { id: 23, category: "Hoodie", name: "অলিভ গ্রিন স্ট্রিট হুডি", price: 1280, sizes: ["M", "L", "XL"], desc: "টেকসই কালার ও প্রিমিয়াম সেলাই।", img: "https://images.unsplash.com/photo-1614975059251-992f11792b9f?w=500&q=80" },
    { id: 24, category: "Hoodie", name: "হোয়াইট মিনিমাল এস্থেটিক হুডি", price: 1350, sizes: ["M", "L", "XL"], desc: "Aura Studio স্পেশাল এডিশন উইন্টার কালেকশন।", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80" },
    { id: 25, category: "Hoodie", name: "টু-টোন কালারব্লক হুডি", price: 1420, sizes: ["M", "L", "XL"], desc: "ডাবল কালারের আকর্ষণীয় শীতের হুডি।", img: "https://images.unsplash.com/photo-1542327897-d73f4005b533?w=500&q=80" },
    { id: 26, category: "Hoodie", name: "চারকোল গ্রে হেভি সোয়েটশার্ট হুডি", price: 1190, sizes: ["M", "L", "XL", "XXL"], desc: "বাইক রাইডিং ও শীতের ভ্রমণের জন্য উপযুক্ত।", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80" },
    { id: 27, category: "Hoodie", name: "মাস্টার্ড ইয়েলো ট্রেন্ডি হুডি", price: 1260, sizes: ["M", "L", "XL"], desc: "উজ্জ্বল রঙের সফট কটন ফ্লিস হুডি।", img: "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=500&q=80" },
    { id: 28, category: "Hoodie", name: "কাপল কম্বো উইন্টার হুডি সেট", price: 2350, sizes: ["M + L", "L + XL"], desc: "২ পিস ম্যাচিং প্রিমিয়াম শীতের হুডি।", img: "https://images.unsplash.com/photo-1572495641004-28421ae52e52?w=500&q=80" },

    // --- কম্পিউটার ও টেক সামগ্রী (২৯ - ৩৯) ---
    { id: 29, category: "Computer", name: "RGB মেকানিক্যাল গেমিং কিবোর্ড", price: 2450, sizes: ["87 Keys (TKL)", "104 Keys"], desc: "ব্লু সুইচ ও ১৮টি লাইটিং মোড।", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80" },
    { id: 30, category: "Computer", name: "ওয়্যারলেস সাইলেন্ট মাউস", price: 680, sizes: ["Standard"], desc: "রিচার্জেবল ও নিঃশব্দ ক্লিক সুবিধা।", img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80" },
    { id: 31, category: "Computer", name: "অ্যালুমিনিয়াম ল্যাপটপ স্ট্যান্ড", price: 950, sizes: ["11 - 17 Inch"], desc: "ফোল্ডেবল ও হিট-ডিসিপেশন ডিজাইন।", img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80" },
    { id: 32, category: "Computer", name: "এক্সটেন্ডেড ডেস্ক মাউসপ্যাড", price: 550, sizes: ["80x30 cm", "90x40 cm"], desc: "ওয়াটারপ্রুফ সারফেস ও স্টিচড বর্ডার।", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80" },
    { id: 33, category: "Computer", name: "USB-C ৭-ইন-১ মাল্টিপোর্ট হাব", price: 1550, sizes: ["Type-C"], desc: "HDMI 4K, USB 3.0 ও PD চার্জিং সাপোর্ট।", img: "https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=500&q=80" },
    { id: 34, category: "Computer", name: "স্টুডিও ওভার-ইয়ার হেডফোন", price: 1850, sizes: ["Adjustable"], desc: "ডিপ বেস ও নয়েজ আইসোলেশন।", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
    { id: 35, category: "Computer", name: "ফুল HD ১০৮০পি ওয়েবক্যাম", price: 1650, sizes: ["USB Plug & Play"], desc: "অনলাইন মিটিং ও স্ট্রিমিংয়ের জন্য ক্লিয়ার ভিডিও।", img: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500&q=80" },
    { id: 36, category: "Computer", name: "ল্যাপটপ কুলিং প্যাড (৫ ফ্যান)", price: 1250, sizes: ["Up to 17 Inch"], desc: "হাই-স্পিড কুলিং ফ্যান ও এলইডি লাইট।", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80" },
    { id: 37, category: "Computer", name: "ডুয়াল মোড ব্লুটুথ স্পিকার বার", price: 1350, sizes: ["Desktop Size"], desc: "কম্পিউটার ডেস্কের জন্য দারুণ সাউন্ডবার।", img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80" },
    { id: 38, category: "Computer", name: "কনডেনসার পডকাস্ট মাইক্রোফোন", price: 1950, sizes: ["USB / 3.5mm"], desc: "ভয়েস রেকর্ড ও গেমিংয়ের জন্য ক্রিস্টাল ক্লিয়ার সাউন্ড।", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&q=80" },
    { id: 39, category: "Computer", name: "পোর্টেবল SSD এনক্লোজার কেস", price: 850, sizes: ["M.2 NVMe"], desc: "হাই-স্পিড ডেটা ট্রান্সফার অ্যালুমিনিয়াম কেস।", img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&q=80" },

    // --- হাতঘড়ি ও ঘরের ছোট ঘড়ি (৪০ - ৫০) ---
    { id: 40, category: "Watch", name: "ক্লাসিক ব্রাউন লেদার হাতঘড়ি", price: 1650, sizes: ["40mm Dial", "42mm Dial"], desc: "খাঁটি চামড়ার স্ট্র্যাপ ও কোয়ার্টজ মুভমেন্ট।", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80" },
    { id: 41, category: "Watch", name: "সিলভার মেটাল চেইন হাতঘড়ি", price: 2100, sizes: ["41mm Dial"], desc: "স্টেইনলেস স্টিল চেইন ও ওয়াটার রেজিস্ট্যান্ট।", img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&q=80" },
    { id: 42, category: "Watch", name: "মিনিমালিস্ট ফুল ব্ল্যাক ওয়াচ", price: 1350, sizes: ["38mm Dial", "42mm Dial"], desc: "সিম্পল ও এলিগ্যান্ট ডেইলি ওয়্যার ঘড়ি।", img: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&q=80" },
    { id: 43, category: "Watch", name: "স্মার্ট ফিটনেস ওয়াচ আল্ট্রা", price: 1890, sizes: ["44mm", "49mm"], desc: "কলিং ফিচার, হার্ট রেট ও স্পোর্টস মোড।", img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&q=80" },
    { id: 44, category: "Watch", name: "ক্রোনোগ্রাফ লাক্সারি রিস্টওয়াচ", price: 2650, sizes: ["43mm Dial"], desc: "প্রিমিয়াম গিফট বক্সসহ লাক্সারি ঘড়ি।", img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500&q=80" },
    { id: 45, category: "Watch", name: "ছোট কাঠের বেডসাইড টেবিল ঘড়ি", price: 780, sizes: ["Small (5 inch)"], desc: "পড়ার টেবিল বা বেডসাইডের জন্য কিউট ঘড়ি।", img: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&q=80" },
    { id: 46, category: "Watch", name: "মিনি ডিজিটাল অ্যালার্ম ক্লক", price: 650, sizes: ["Compact (4 inch)"], desc: "সময়, তারিখ ও রুম টেম্পারেচার ডিসপ্লে।", img: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=500&q=80" },
    { id: 47, category: "Watch", name: "ভিন্টেজ টুইন-বেল ছোট টেবিল ঘড়ি", price: 890, sizes: ["Mini (4.5 inch)"], desc: "ক্লাসিক অ্যালার্ম ও নীরব সুইপ মুভমেন্ট।", img: "https://images.unsplash.com/photo-1584208124425-9a64bd3c4947?w=500&q=80" },
    { id: 48, category: "Watch", name: "ছোট রাউন্ড ডেস্ক ও শোকেস ক্লক", price: 590, sizes: ["Small (6 inch)"], desc: "হালকা ও আধুনিক মিনিমাল ডিজাইন।", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&q=80" },
    { id: 49, category: "Watch", name: "LED মিরর স্মার্ট টেবিল ঘড়ি", price: 720, sizes: ["Medium (6 inch)"], desc: "মিরর ডিসপ্লে ও নাইট মোড ব্রাইটনেস।", img: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=500&q=80" },
    { id: 50, category: "Watch", name: "মিনি কিউব কালার-চেঞ্জিং ক্লক", price: 540, sizes: ["Mini Cube (3.5 inch)"], desc: "ছোট্ট কিউব ডিজাইনের অ্যালার্ম ঘড়ি।", img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=500&q=80" }
];

let products = JSON.parse(localStorage.getItem("aura_products")) || defaultProducts;
let orders = JSON.parse(localStorage.getItem("aura_orders")) || [];
let cart = [];
let currentCategory = "All";
let isDashboardOpen = false;

function saveProducts() {
    localStorage.setItem("aura_products", JSON.stringify(products));
}

// শপ ও ড্যাশবোর্ডের মধ্যে সুইচ করা
function toggleView() {
    isDashboardOpen = !isDashboardOpen;
    const shopView = document.getElementById("shop-view");
    const dashView = document.getElementById("dashboard-view");
    const shopNav = document.getElementById("shop-nav");
    const switchBtn = document.getElementById("view-switch-btn");

    if (isDashboardOpen) {
        shopView.style.display = "none";
        dashView.style.display = "block";
        shopNav.style.display = "none";
        switchBtn.innerText = "🏠 শপ ভিউ";
        renderDashboard();
    } else {
        shopView.style.display = "block";
        dashView.style.display = "none";
        shopNav.style.display = "block";
        switchBtn.innerText = "⚙️ ড্যাশবোর্ড";
        renderShopProducts(products);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// ১. শপ ভিউ ফাংশনসমূহ
// ==========================================
const productList = document.getElementById("product-list");

function renderShopProducts(items) {
    productList.innerHTML = "";
    document.getElementById("total-prod-count").innerText = products.length;

    items.forEach(product => {
        const sizeOptions = product.sizes
            .map(size => `<option value="${size}">${size}</option>`)
            .join("");

        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div class="product-img-wrap">
                <span class="cat-tag">${product.category}</span>
                <img src="${product.img}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.desc}</p>
                <div class="size-box">
                    <label for="size-${product.id}">সাইজ বেছে নিন:</label>
                    <select id="size-${product.id}" class="size-select">
                        ${sizeOptions}
                    </select>
                </div>
                <div class="price">৳ ${product.price}</div>
                <button class="add-btn" onclick="addToCart(${product.id})">কার্টে যোগ করুন</button>
            </div>
        `;
        productList.appendChild(card);
    });
}

function filterCategory(cat, btnElement) {
    currentCategory = cat;
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    btnElement.classList.add("active");

    if (cat === "All") {
        renderShopProducts(products);
    } else {
        renderShopProducts(products.filter(p => p.category === cat));
    }
}

function searchProducts() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const filtered = products.filter(p => {
        const matchCat = currentCategory === "All" || p.category === currentCategory;
        const matchText = p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query);
        return matchCat && matchText;
    });
    renderShopProducts(filtered);
}

function addToCart(id) {
    const item = products.find(p => p.id === id);
    const selectedSize = document.getElementById(`size-${id}`).value;

    cart.push({ ...item, selectedSize });
    updateCartUI();
    alert(`"${item.name}" (সাইজ: ${selectedSize}) কার্টে যোগ করা হয়েছে!`);
}

function updateCartUI() {
    document.getElementById("cart-count").innerText = cart.length;
    const cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartItemsDiv.innerHTML += `
            <div class="cart-item">
                <span>${item.name} <span class="size-badge">${item.selectedSize}</span></span>
                <span>৳ ${item.price} <button onclick="removeItem(${index})" style="color:red; border:none; background:none; cursor:pointer;">[X]</button></span>
            </div>
        `;
    });

    document.getElementById("total-amount").innerText = total;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function toggleCart() {
    const modal = document.getElementById("cart-modal");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
}

function submitOrder(event) {
    event.preventDefault();
    if (cart.length === 0) {
        alert("আপনার কার্ট খালি! আগে প্রোডাক্ট যোগ করুন।");
        return;
    }

    const name = document.getElementById("cust-name").value;
    const phone = document.getElementById("cust-phone").value;
    const address = document.getElementById("cust-address").value;
    const deliveryCharge = parseInt(document.getElementById("delivery-area").value);

    let productDetails = "";
    let summaryList = [];
    let productTotal = 0;

    cart.forEach((item, i) => {
        productDetails += `${i + 1}. ${item.name} [${item.selectedSize}] - ৳${item.price}%0A`;
        summaryList.push(`${item.name} (${item.selectedSize})`);
        productTotal += item.price;
    });

    const grandTotal = productTotal + deliveryCharge;

    const newOrder = {
        id: Date.now(),
        customer: name,
        phone: phone,
        address: address,
        items: summaryList.join(", "),
        total: grandTotal,
        date: new Date().toLocaleDateString("bn-BD")
    };
    orders.unshift(newOrder);
    localStorage.setItem("aura_orders", JSON.stringify(orders));

    // আপনার WhatsApp নম্বর দিন
    const myWhatsAppNumber = "8801700000000";
    const message = `*Aura Studio - নতুন অর্ডার!*%0A%0A*নাম:* ${name}%0A*ফোন:* ${phone}%0A*ঠিকানা:* ${address}%0A%0A*পণ্যসমূহ:*%0A${productDetails}%0A*ডেলিভারি চার্জ:* ৳${deliveryCharge}%0A*সর্বমোট বিল:* ৳${grandTotal}`;

    window.open(`https://wa.me/${myWhatsAppNumber}?text=${message}`, "_blank");

    cart = [];
    updateCartUI();
    toggleCart();
    document.getElementById("order-form").reset();
}

// ==========================================
// ২. ড্যাশবোর্ড ভিউ ফাংশনসমূহ
// ==========================================
function renderDashboard() {
    document.getElementById("dash-total-products").innerText = products.length;
    document.getElementById("table-prod-count").innerText = products.length;
    document.getElementById("dash-total-orders").innerText = orders.length;

    const totalSales = orders.reduce((sum, ord) => sum + ord.total, 0);
    document.getElementById("dash-total-sales").innerText = `৳ ${totalSales}`;

    const dashProdList = document.getElementById("dash-product-list");
    dashProdList.innerHTML = "";
    products.forEach(p => {
        dashProdList.innerHTML += `
            <tr>
                <td><img src="${p.img}" style="width:45px; height:45px; object-fit:cover; border-radius:4px;"></td>
                <td><b>${p.name}</b><br><small style="color:#64748b;">সাইজ: ${p.sizes.join(", ")}</small></td>
                <td>${p.category}</td>
                <td>৳ ${p.price}</td>
                <td><button class="del-btn" onclick="deleteProduct(${p.id})">ডিলিট</button></td>
            </tr>
        `;
    });

    const dashOrderList = document.getElementById("dash-order-list");
    dashOrderList.innerHTML = "";
    if (orders.length === 0) {
        dashOrderList.innerHTML = `<tr><td colspan="4" style="text-align:center; color:#64748b;">এখনো কোনো অর্ডার আসেনি</td></tr>`;
    } else {
        orders.forEach(o => {
            dashOrderList.innerHTML += `
                <tr>
                    <td><b>${o.customer}</b><br><small>${o.date}</small></td>
                    <td>${o.phone}<br><small>${o.address}</small></td>
                    <td>${o.items}</td>
                    <td><b>৳ ${o.total}</b></td>
                </tr>
            `;
        });
    }
}

function addNewProduct(event) {
    event.preventDefault();
    const name = document.getElementById("new-name").value;
    const category = document.getElementById("new-category").value;
    const price = parseInt(document.getElementById("new-price").value);
    const sizes = document.getElementById("new-sizes").value.split(",").map(s => s.trim());
    const desc = document.getElementById("new-desc").value;
    const img = document.getElementById("new-img").value;

    products.unshift({
        id: Date.now(),
        category,
        name,
        price,
        sizes,
        desc,
        img
    });

    saveProducts();
    renderDashboard();
    event.target.reset();
    alert("নতুন প্রোডাক্ট সফলভাবে Aura Studio শপে যুক্ত হয়েছে!");
}

function deleteProduct(id) {
    if (confirm("আপনি কি নিশ্চিত এই প্রোডাক্টটি ডিলিট করতে চান?")) {
        products = products.filter(p => p.id !== id);
        saveProducts();
        renderDashboard();
    }
}

function resetDefaultProducts() {
    if (confirm("সব পরিবর্তন মুছে আবার ডিফল্ট ৫০টি প্রোডাক্ট ফিরিয়ে আনতে চান?")) {
        products = [...defaultProducts];
        saveProducts();
        renderDashboard();
    }
}

// শুরুতে শপ লোড করা
renderShopProducts(products);