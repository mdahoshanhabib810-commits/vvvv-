// ডিফল্ট স্কিল তালিকা
const defaultSkills = [
    { id: 1, title: "HTML5 & CSS3", level: 90, note: "রেসপন্সিভ ওয়েব পেজ ও ড্যাশবোর্ড ডিজাইন" },
    { id: 2, title: "JavaScript (ES6)", level: 80, note: "ডাইনামিক UI, কার্ট, ফিল্টার ও LocalStorage" },
    { id: 3, title: "Diploma Engineering", level: 85, note: "সেমিস্টার টেকনিক্যাল সাবজেক্ট ও প্রজেক্ট" },
    { id: 4, title: "VS Code & Git", level: 82, note: "কোড ম্যানেজমেন্ট ও প্রজেক্ট সেটআপ" }
];

// ডিপ্লোমা ১ম থেকে ৭ম সেমিস্টার ও গল্পের বইয়ের তালিকা (প্রতিটি বই ১০-১২ কপি স্টকে আছে)
const defaultBooks = [
    // --- ১ম সেমিস্টার ---
    { id: 1, category: "1st Semester", name: "Engineering Drawing (21011)", author: "হক পাবলিকেশন্স", price: 280, stock: 12, desc: "ডিপ্লোমা ১ম সেমিস্টারের আবশ্যিক ড্রয়িং বই।", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80" },
    { id: 2, category: "1st Semester", name: "Bangla-I (25711)", author: "টেকনিক্যাল প্রকাশনী", price: 220, stock: 10, desc: "নতুন প্রবিধান অনুযায়ী বাংলা-১ পাঠ্যবই।", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80" },
    { id: 3, category: "1st Semester", name: "English-I (25712)", author: "হক পাবলিকেশন্স", price: 240, stock: 12, desc: "কমিউনিকেটিভ ইংলিশ-১ পূর্ণাঙ্গ গাইড ও টেক্সট।", img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&q=80" },
    { id: 4, category: "1st Semester", name: "Mathematics-I (25911)", author: "প্রাইম পাবলিকেশন্স", price: 320, stock: 11, desc: "সহজ সমাধান ও বোর্ড প্রশ্নসহ ম্যাথমেটিক্স-১।", img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&q=80" },
    { id: 5, category: "1st Semester", name: "Physics-I (25912)", author: "হক পাবলিকেশন্স", price: 310, stock: 12, desc: "ব্যবহারিক ও তাত্ত্বিক অংশসহ ফিজিক্স-১।", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80" },
    { id: 6, category: "1st Semester", name: "Computer Office Application (26611)", author: "টেকনিক্যাল প্রকাশনী", price: 260, stock: 10, desc: "কম্পিউটার বেসিক ও অফিস অ্যাপ্লিকেশন বই।", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80" },

    // --- ২য় সেমিস্টার ---
    { id: 7, category: "2nd Semester", name: "Mathematics-II (25921)", author: "হক পাবলিকেশন্স", price: 330, stock: 12, desc: "ক্যালকুলাস ও ত্রিকোণমিতিসহ ম্যাথমেটিক্স-২।", img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&q=80" },
    { id: 8, category: "2nd Semester", name: "Physics-II (25922)", author: "প্রাইম পাবলিকেশন্স", price: 315, stock: 10, desc: "তাপ, আলো ও তড়িৎ অধ্যায়সমৃদ্ধ ফিজিক্স-২।", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80" },
    { id: 9, category: "2nd Semester", name: "Chemistry (25913)", author: "হক পাবলিকেশন্স", price: 290, stock: 11, desc: "ডিপ্লোমা ইঞ্জিনিয়ারিং রসায়ন পূর্ণাঙ্গ বই।", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&q=80" },
    { id: 10, category: "2nd Semester", name: "Python Programming (26621)", author: "টেকনিক্যাল প্রকাশনী", price: 340, stock: 12, desc: "কম্পিউটার টেকনোলজির পাইথন প্রোগ্রামিং বই।", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&q=80" },
    { id: 11, category: "2nd Semester", name: "Basic Electricity (26711)", author: "হক পাবলিকেশন্স", price: 300, stock: 10, desc: "ইলেকট্রিক্যাল সার্কিট ও বেসিক ইলেকট্রিসিটি।", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80" },

    // --- ৩য় সেমিস্টার ---
    { id: 12, category: "3rd Semester", name: "Mathematics-III (25931)", author: "হক পাবলিকেশন্স", price: 340, stock: 12, desc: "জ্যামিতি ও ভেক্টর ক্যালকুলাসহ ম্যাথ-৩।", img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&q=80" },
    { id: 13, category: "3rd Semester", name: "Application Development Using Python", author: "প্রাইম পাবলিকেশন্স", price: 350, stock: 11, desc: "পাইথন অ্যাপ্লিকেশন ডেভেলপমেন্ট প্র্যাকটিক্যাল বই।", img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&q=80" },
    { id: 14, category: "3rd Semester", name: "Digital Electronics-I (26831)", author: "হক পাবলিকেশন্স", price: 310, stock: 10, desc: "লজিক গেট ও ডিজিটাল সার্কিট ডিজাইন।", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80" },
    { id: 15, category: "3rd Semester", name: "Civil Engineering Materials (26431)", author: "টেকনিক্যাল প্রকাশনী", price: 320, stock: 12, desc: "সিভিল ৩য় সেমিস্টারের নির্মাণ সামগ্রী বিষয়ক বই।", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=80" },
    { id: 16, category: "3rd Semester", name: "Social Science (25811)", author: "হক পাবলিকেশন্স", price: 230, stock: 12, desc: "সব টেকনোলজির কমন সোশ্যাল সায়েন্স বই।", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&q=80" },

    // --- ৪র্থ সেমিস্টার ---
    { id: 17, category: "4th Semester", name: "Java Programming (26641)", author: "হক পাবলিকেশন্স", price: 360, stock: 12, desc: "অবজেক্ট ওরিয়েন্টেড জাভা প্রোগ্রামিং বই।", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80" },
    { id: 18, category: "4th Semester", name: "Data Structure & Algorithm (26642)", author: "প্রাইম পাবলিকেশন্স", price: 345, stock: 10, desc: "ডেটা স্ট্রাকচার ও অ্যালগরিদম সহজ ব্যাখ্যাসহ।", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80" },
    { id: 19, category: "4th Semester", name: "Computer Peripherals & Interfacing", author: "হক পাবলিকেশন্স", price: 310, stock: 11, desc: "হার্ডওয়্যার ও ইন্টারফেসিং পূর্ণাঙ্গ বই।", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80" },
    { id: 20, category: "4th Semester", name: "Business Communication (25831)", author: "টেকনিক্যাল প্রকাশনী", price: 240, stock: 12, desc: "বিজনেস কমিউনিকেশন ও রিপোর্ট রাইটিং।", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&q=80" },
    { id: 21, category: "4th Semester", name: "Surveying-II (26442)", author: "হক পাবলিকেশন্স", price: 330, stock: 10, desc: "সিভিল টেকনোলজির সার্ভেয়িং-২ টেক্সট বই।", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=80" },

    // --- ৫ম সেমিস্টার ---
    { id: 22, category: "5th Semester", name: "Sequential Logic System (26651)", author: "হক পাবলিকেশন্স", price: 340, stock: 12, desc: "ফ্লিপ-ফ্লপ, কাউন্টার ও রেজিস্টার ডিজাইন।", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80" },
    { id: 23, category: "5th Semester", name: "Web Design & Development-I", author: "প্রাইম পাবলিকেশন্স", price: 350, stock: 12, desc: "HTML, CSS ও JavaScript ওয়েব ডেভেলপমেন্ট বই।", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&q=80" },
    { id: 24, category: "5th Semester", name: "Operating System (26653)", author: "হক পাবলিকেশন্স", price: 320, stock: 10, desc: "অপারেটিং সিস্টেম আর্কিটেকচার ও প্রসেস ম্যানেজমেন্ট।", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&q=80" },
    { id: 25, category: "5th Semester", name: "Accounting (25841)", author: "টেকনিক্যাল প্রকাশনী", price: 260, stock: 11, desc: "ইঞ্জিনিয়ারিং অ্যাকাউন্টিং ও কস্টিং বই।", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&q=80" },

    // --- ৬ষ্ঠ সেমিস্টার ---
    { id: 26, category: "6th Semester", name: "Principles of Software Engineering", author: "হক পাবলিকেশন্স", price: 355, stock: 12, desc: "সফটওয়্যার ডেভেলপমেন্ট লাইফ সাইকেল ও টেস্টিং।", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80" },
    { id: 27, category: "6th Semester", name: "Microprocessor & Interfacing", author: "প্রাইম পাবলিকেশন্স", price: 370, stock: 10, desc: "8086 মাইক্রোপ্রসেসর ও অ্যাসেম্বলি ল্যাঙ্গুয়েজ।", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80" },
    { id: 28, category: "6th Semester", name: "Database Management System (DBMS)", author: "হক পাবলিকেশন্স", price: 360, stock: 12, desc: "SQL কুয়েরি ও ডেটাবেস ডিজাইন পূর্ণাঙ্গ বই।", img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&q=80" },
    { id: 29, category: "6th Semester", name: "Industrial Management (25852)", author: "টেকনিক্যাল প্রকাশনী", price: 270, stock: 11, desc: "ইন্ডাস্ট্রিয়াল ম্যানেজমেন্ট ও লিডারশিপ বই।", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&q=80" },

    // --- ৭ম সেমিস্টার ---
    { id: 30, category: "7th Semester", name: "System Analysis & Design (26671)", author: "হক পাবলিকেশন্স", price: 350, stock: 12, desc: "সিস্টেম অ্যানালাইসিস ও প্রজেক্ট ডকুমেন্টেশন।", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80" },
    { id: 31, category: "7th Semester", name: "Network Administration & Services", author: "প্রাইম পাবলিকেশন্স", price: 380, stock: 10, desc: "কম্পিউটার নেটওয়ার্কিং ও সার্ভার অ্যাডমিনিস্ট্রেশন।", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80" },
    { id: 32, category: "7th Semester", name: "Cyber Security & Ethics (26673)", author: "হক পাবলিকেশন্স", price: 330, stock: 12, desc: "সাইবার নিরাপত্তা ও ডিজিটাল ফরেনসিক বই।", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80" },
    { id: 33, category: "7th Semester", name: "Apps Development Project (26674)", author: "টেকনিক্যাল প্রকাশনী", price: 340, stock: 11, desc: "মোবাইল অ্যাপস ডেভেলপমেন্ট প্রজেক্ট গাইড।", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=80" },

    // --- জনপ্রিয় গল্প ও উপন্যাসের বই ---
    { id: 34, category: "Story Book", name: "হিমু সমগ্র (১ম খণ্ড)", author: "হুমায়ূন আহমেদ", price: 480, stock: 12, desc: "হুমায়ূন আহমেদের কালজয়ী চরিত্র হিমুর সেরা উপন্যাস সংকলন।", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80" },
    { id: 35, category: "Story Book", name: "মিসির আলি সমগ্র", author: "হুমায়ূন আহমেদ", price: 520, stock: 10, desc: "রহস্য ও মনস্তাত্ত্বিক যুক্তির অসাধারণ গল্প সংকলন।", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80" },
    { id: 36, category: "Story Book", name: "দেয়াল", author: "হুমায়ূন আহমেদ", price: 390, stock: 12, desc: "ইতিহাস ও আবেগের মিশেলে লেখা অনবদ্য উপন্যাস।", img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&q=80" },
    { id: 37, category: "Story Book", name: "শঙ্খনীল কারাগার", author: "হুমায়ূন আহমেদ", price: 240, stock: 11, desc: "মধ্যবিত্ত পরিবারের ভালোবাসা ও টানাপোড়েনের গল্প।", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&q=80" },
    { id: 38, category: "Story Book", name: "পথের পাঁচালী", author: "বিভূতিভূষণ বন্দ্যোপাধ্যায়", price: 310, stock: 12, desc: "অপু ও দুর্গার শৈশব নিয়ে বাংলা সাহিত্যের অমর সৃষ্টি।", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&q=80" },
    { id: 39, category: "Story Book", name: "আরণ্যক", author: "বিভূতিভূষণ বন্দ্যোপাধ্যায়", price: 290, stock: 10, desc: "প্রকৃতি ও অরণ্য জীবনের অসাধারণ সাহিত্যকর্ম।", img: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=500&q=80" },
    { id: 40, category: "Story Book", name: "সাতকাহন (অখণ্ড)", author: "সমরেশ মজুমদার", price: 580, stock: 12, desc: "দীপাবলির জীবনসংগ্রাম নিয়ে লেখা জনপ্রিয় উপন্যাস।", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&q=80" },
    { id: 41, category: "Story Book", name: "উত্তরাধিকার", author: "সমরেশ মজুমদার", price: 360, stock: 10, desc: "অনিমেষ ট্রিলজির প্রথম ও অনবদ্য উপন্যাস।", img: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=500&q=80" },
    { id: 42, category: "Story Book", name: "ফেলুদা সমগ্র (১ম খণ্ড)", author: "সত্যজিৎ রায়", price: 550, stock: 12, desc: "প্রদোষ চন্দ্র মিত্র ওরফে ফেলুদার সেরা গোয়েন্দা গল্প।", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&q=80" },
    { id: 43, category: "Story Book", name: "প্রোফেসর শঙ্কু সমগ্র", author: "সত্যজিৎ রায়", price: 460, stock: 11, desc: "সায়েন্স ফিকশন ও রোমাঞ্চকর অভিযানের গল্প।", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80" },
    { id: 44, category: "Story Book", name: "শেষের কবিতা", author: "রবীন্দ্রনাথ ঠাকুর", price: 220, stock: 12, desc: "অমিত ও লাবণ্যের চিরসবুজ প্রেমের উপন্যাস।", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80" },
    { id: 45, category: "Story Book", name: "গল্পগুচ্ছ (নির্বাচিত)", author: "রবীন্দ্রনাথ ঠাকুর", price: 420, stock: 10, desc: "রবীন্দ্রনাথ ঠাকুরের সেরা ছোটগল্পের সংকলন।", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80" },
    { id: 46, category: "Story Book", name: "লালসালু", author: "সৈয়দ ওয়ালীউল্লাহ", price: 210, stock: 12, desc: "বাংলা সাহিত্যের অন্যতম সেরা কালজয়ী উপন্যাস।", img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&q=80" },
    { id: 47, category: "Story Book", name: "হাজার বছর ধরে", author: "জহির রায়হান", price: 200, stock: 12, desc: "আবহমান বাংলার গ্রামীণ জীবনের চিরায়ত উপন্যাস।", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&q=80" },
    { id: 48, category: "Story Book", name: "দীপু নাম্বার টু", author: "মুহম্মদ জাফর ইকবাল", price: 250, stock: 11, desc: "কিশোর অ্যাডভেঞ্চার ও বন্ধুত্বের অসাধারণ গল্প।", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&q=80" },
    { id: 49, category: "Story Book", name: "টুকুনজিল (সায়েন্স ফিকশন)", author: "মুহম্মদ জাফর ইকবাল", price: 230, stock: 10, desc: "ভিনগ্রহের প্রাণী ও বিজ্ঞানের মজার কল্পকাহিনী।", img: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=500&q=80" },
    { id: 50, category: "Story Book", name: "প্যারাডক্সিক্যাল সাজিদ", author: "আরিফ আজাদ", price: 320, stock: 12, desc: "সর্বাধিক বিক্রিত জনপ্রিয় গল্প ও যুক্তির বই।", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&q=80" }
];

let books = JSON.parse(localStorage.getItem("library_books_v2")) || defaultBooks;
let skills = JSON.parse(localStorage.getItem("library_skills_v2")) || defaultSkills;
let orders = JSON.parse(localStorage.getItem("library_orders_v2")) || [];
let cart = [];
let currentCategory = "All";

function saveBooks() {
    localStorage.setItem("library_books_v2", JSON.stringify(books));
}

function saveSkills() {
    localStorage.setItem("library_skills_v2", JSON.stringify(skills));
}

// ==========================================
// স্কিলস রেন্ডার ও ম্যানেজমেন্ট
// ==========================================
function renderSkills() {
    const skillsDisplay = document.getElementById("skills-display");
    skillsDisplay.innerHTML = "";

    skills.forEach(sk => {
        skillsDisplay.innerHTML += `
            <div class="skill-card">
                <div class="skill-top">
                    <span>${sk.title}</span>
                    <span>${sk.level}%</span>
                </div>
                <div class="skill-bar-bg">
                    <div class="skill-bar-fill" style="width: ${sk.level}%;"></div>
                </div>
                <small>${sk.note}</small>
            </div>
        `;
    });

    const dashSkillList = document.getElementById("dash-skill-list");
    if (dashSkillList) {
        dashSkillList.innerHTML = "";
        skills.forEach(sk => {
            dashSkillList.innerHTML += `
                <tr>
                    <td><b>${sk.title}</b></td>
                    <td>${sk.level}%</td>
                    <td>${sk.note}</td>
                    <td><button class="del-btn" onclick="deleteSkill(${sk.id})">ডিলিট</button></td>
                </tr>
            `;
        });
    }

    const totalSkillsEl = document.getElementById("dash-total-skills");
    if (totalSkillsEl) totalSkillsEl.innerText = skills.length;
}

function addNewSkill(event) {
    event.preventDefault();
    const title = document.getElementById("skill-title").value;
    const level = parseInt(document.getElementById("skill-level").value);
    const note = document.getElementById("skill-note").value;

    skills.push({
        id: Date.now(),
        title,
        level,
        note
    });

    saveSkills();
    renderSkills();
    event.target.reset();
    alert("নতুন স্কিল যুক্ত হয়েছে!");
}

function deleteSkill(id) {
    skills = skills.filter(s => s.id !== id);
    saveSkills();
    renderSkills();
}

// ==========================================
// বইয়ের তালিকা, ফিল্টার, সার্চ ও কার্ট
// ==========================================
const bookList = document.getElementById("book-list");

function renderLibraryBooks(items) {
    bookList.innerHTML = "";
    document.getElementById("total-book-count").innerText = books.length;

    items.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";
        card.innerHTML = `
            <div class="book-img-wrap">
                <span class="cat-tag">${book.category}</span>
                <span class="stock-tag">স্টক: ${book.stock} কপি</span>
                <img src="${book.img}" alt="${book.name}" loading="lazy">
            </div>
            <div class="book-info">
                <h3>${book.name}</h3>
                <div class="author-name">✍️ ${book.author}</div>
                <p>${book.desc}</p>
                <div class="edition-box">
                    <label for="copy-${book.id}">কপি সংখ্যা:</label>
                    <select id="copy-${book.id}" class="edition-select">
                        <option value="1">১ কপি</option>
                        <option value="2">২ কপি</option>
                        <option value="3">৩ কপি</option>
                        <option value="5">৫ কপি</option>
                    </select>
                </div>
                <div class="price">৳ ${book.price}</div>
                <button class="add-btn" onclick="addToCart(${book.id})">ব্যাগে যোগ করুন</button>
            </div>
        `;
        bookList.appendChild(card);
    });
}

function filterCategory(cat, btnElement) {
    currentCategory = cat;
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    btnElement.classList.add("active");

    if (cat === "All") {
        renderLibraryBooks(books);
    } else {
        renderLibraryBooks(books.filter(b => b.category === cat));
    }
}

function searchBooks() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const filtered = books.filter(b => {
        const matchCat = currentCategory === "All" || b.category === currentCategory;
        const matchText = b.name.toLowerCase().includes(query) ||
                          b.author.toLowerCase().includes(query) ||
                          b.desc.toLowerCase().includes(query);
        return matchCat && matchText;
    });
    renderLibraryBooks(filtered);
}

function addToCart(id) {
    const item = books.find(b => b.id === id);
    const qty = parseInt(document.getElementById(`copy-${id}`).value);

    if (item.stock < qty) {
        alert(`দুঃখিত! স্টকে মাত্র ${item.stock} কপি বই আছে।`);
        return;
    }

    cart.push({ ...item, qty, totalItemPrice: item.price * qty });
    updateCartUI();
    alert(`"${item.name}" (${qty} কপি) বুক ব্যাগে যোগ করা হয়েছে!`);
}

function updateCartUI() {
    document.getElementById("cart-count").innerText = cart.length;
    const cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.totalItemPrice;
        cartItemsDiv.innerHTML += `
            <div class="cart-item">
                <span>${item.name} <span class="badge">${item.qty} কপি</span></span>
                <span>৳ ${item.totalItemPrice} <button onclick="removeItem(${index})" style="color:red; border:none; background:none; cursor:pointer;">[X]</button></span>
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
        alert("আপনার বুক ব্যাগ খালি! আগে বই যোগ করুন।");
        return;
    }

    const name = document.getElementById("cust-name").value;
    const phone = document.getElementById("cust-phone").value;
    const address = document.getElementById("cust-address").value;
    const deliveryCharge = parseInt(document.getElementById("delivery-area").value);

    let bookDetails = "";
    let summaryList = [];
    let bookTotal = 0;

    cart.forEach((item, i) => {
        bookDetails += `${i + 1}. ${item.name} (${item.qty} কপি) - ৳${item.totalItemPrice}%0A`;
        summaryList.push(`${item.name} (${item.qty} কপি)`);
        bookTotal += item.totalItemPrice;

        const storeBook = books.find(b => b.id === item.id);
        if (storeBook && storeBook.stock >= item.qty) {
            storeBook.stock -= item.qty;
        }
    });

    saveBooks();
    const grandTotal = bookTotal + deliveryCharge;

    orders.unshift({
        id: Date.now(),
        customer: name,
        phone,
        address,
        items: summaryList.join(", "),
        total: grandTotal,
        date: new Date().toLocaleDateString("bn-BD")
    });
    localStorage.setItem("library_orders_v2", JSON.stringify(orders));

    // আপনার WhatsApp নম্বর দিন
    const myWhatsAppNumber = "8801700000000";
    const message = `*Online Library - নতুন বইয়ের অর্ডার!*%0A%0A*নাম:* ${name}%0A*ফোন:* ${phone}%0A*ঠিকানা:* ${address}%0A%0A*বইয়ের তালিকা:*%0A${bookDetails}%0A*কুরিয়ার চার্জ:* ৳${deliveryCharge}%0A*সর্বমোট বিল:* ৳${grandTotal}`;

    window.open(`https://wa.me/${myWhatsAppNumber}?text=${message}`, "_blank");

    cart = [];
    updateCartUI();
    toggleCart();
    renderLibraryBooks(books);
    renderDashboard();
    document.getElementById("order-form").reset();
}

// ==========================================
// নিচের ড্যাশবোর্ড ফাংশনসমূহ
// ==========================================
function renderDashboard() {
    document.getElementById("dash-total-books").innerText = books.length;
    document.getElementById("table-book-count").innerText = books.length;
    document.getElementById("dash-total-orders").innerText = orders.length;

    const totalSales = orders.reduce((sum, ord) => sum + ord.total, 0);
    document.getElementById("dash-total-sales").innerText = `৳ ${totalSales}`;

    const dashBookList = document.getElementById("dash-book-list");
    dashBookList.innerHTML = "";
    books.forEach(b => {
        dashBookList.innerHTML += `
            <tr>
                <td><img src="${b.img}" style="width:42px; height:48px; object-fit:cover; border-radius:4px;"></td>
                <td><b>${b.name}</b><br><small style="color:#4f46e5;">${b.author}</small></td>
                <td>${b.category}</td>
                <td>${b.stock} কপি</td>
                <td>৳ ${b.price}</td>
                <td><button class="del-btn" onclick="deleteBook(${b.id})">ডিলিট</button></td>
            </tr>
        `;
    });

    const dashOrderList = document.getElementById("dash-order-list");
    dashOrderList.innerHTML = "";
    if (orders.length === 0) {
        dashOrderList.innerHTML = `<tr><td colspan="4" style="text-align:center; color:#64748b;">এখনো কোনো বই অর্ডার হয়নি</td></tr>`;
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

function addNewBook(event) {
    event.preventDefault();
    const name = document.getElementById("new-name").value;
    const author = document.getElementById("new-author").value;
    const category = document.getElementById("new-category").value;
    const price = parseInt(document.getElementById("new-price").value);
    const stock = parseInt(document.getElementById("new-stock").value);
    const desc = document.getElementById("new-desc").value;
    const img = document.getElementById("new-img").value;

    books.unshift({
        id: Date.now(),
        category,
        name,
        author,
        price,
        stock,
        desc,
        img
    });

    saveBooks();
    renderLibraryBooks(books);
    renderDashboard();
    event.target.reset();
    alert("নতুন বই লাইব্রেরিতে যুক্ত হয়েছে!");
}

function deleteBook(id) {
    if (confirm("আপনি কি নিশ্চিত এই বইটি ডিলিট করতে চান?")) {
        books = books.filter(b => b.id !== id);
        saveBooks();
        renderLibraryBooks(books);
        renderDashboard();
    }
}

function resetDefaultData() {
    if (confirm("সব পরিবর্তন মুছে ডিফল্ট বই ও স্কিল রিসেট করতে চান?")) {
        books = [...defaultBooks];
        skills = [...defaultSkills];
        saveBooks();
        saveSkills();
        renderSkills();
        renderLibraryBooks(books);
        renderDashboard();
    }
}

// পেজ লোড হলে সব রেন্ডার করা
renderSkills();
renderLibraryBooks(books);
renderDashboard();