// ডিফল্ট স্কিল তালিকা
const defaultSkills = [
    { id: 1, name: "Web Design & Frontend", pct: 88, desc: "HTML, CSS, JavaScript ও UI ডিজাইন" },
    { id: 2, name: "Python & Programming", pct: 82, desc: "লজিক, অ্যালগরিদম ও স্ক্রিপ্টিং" },
    { id: 3, name: "Computer Networking", pct: 78, desc: "LAN, রাউটিং ও সার্ভার বেসিক" },
    { id: 4, name: "Database & SQL", pct: 80, desc: "ডেটা মডেলিং ও কুয়েরি ম্যানেজমেন্ট" }
];

// ৮৫টি রুম (প্রতি রুমে ৩ জন করে = ২৫৫ সিট; ২৫০ জন বোর্ডার)
const TOTAL_ROOMS = 85;
const SEATS_PER_ROOM = 3;
const TOTAL_BOARDERS = 250;

const firstNames = [
    "তানভীর", "রাকিব", "নাহিদ", "সাকিব", "মেহেদী", "আরিফ", "ইমন", "শাওন", "ফাহিম", "সাব্বির",
    "মাহমুদ", "হাসান", "জুবায়ের", "নাঈম", "রায়হান", "আশিক", "তৌহিদ", "মুনতাসির", "রিফাত", "রাব্বি",
    "সালমান", "আবরার", "জিসান", "আদনান", "সাজিদ", "ওমর", "ইয়াসিন", "নাবিল", "রাহাত", "মাহফুজ",
    "কাব্য", "অর্ণব", "দীপ", "শুভ", "আকাশ", "নীল", "অভ্র", "সৌরভ", "পার্থ", "প্রান্ত"
];

const lastNames = [
    "হাসান", "ইসলাম", "আহমেদ", "হোসেন", "মাহমুদ", "রহমান", "আলী", "চৌধুরী", "খান", "মিয়া",
    "শেখ", "করিম", "সরকার", "মণ্ডল", "ভুঁইয়া", "তালুকদার", "দাশ", "রায়", "সেন", "বসু"
];

const skillPool = [
    "Web Development", "Python Programming", "Graphic Design", "Networking",
    "Database (SQL)", "Cyber Security", "Mobile App Dev", "Video Editing"
];

const districts = ["ঢাকা", "চট্টগ্রাম", "রাজশাহী", "খুলনা", "সিলেট", "রংপুর", "বরিশাল", "ময়মনসিংহ", "কুমিল্লা", "বগুড়া"];

function generate250Boarders() {
    const list = [];
    const seatLabels = ["Seat A", "Seat B", "Seat C"];

    for (let i = 0; i < TOTAL_BOARDERS; i++) {
        const roomIndex = Math.floor(i / SEATS_PER_ROOM);
        const roomNumber = 101 + roomIndex;
        const seatName = seatLabels[i % SEATS_PER_ROOM];

        const fName = firstNames[i % firstNames.length];
        const lName = lastNames[(i * 3 + Math.floor(i / 5)) % lastNames.length];
        const fullName = `${fName} ${lName}`;

        const roll = `${502000 + i + 1}`;
        const regNo = `${1502180000 + i + 1}`;
        const email = `${fName.toLowerCase().replace(/\s+/g, '')}.${roll}@hostel.edu.bd`;
        const phone = `017${String(10000000 + i * 37).slice(0, 8)}`;
        const guardianPhone = `018${String(20000000 + i * 53).slice(0, 8)}`;
        const skill = skillPool[i % skillPool.length];
        const district = districts[i % districts.length];
        const rent = 3500;
        const status = i >= 235 ? "Inactive" : "Active";

        list.push({
            id: i + 1,
            name: fullName,
            roll,
            reg: regNo,
            email,
            phone,
            guardianPhone,
            skill,
            room: `Room ${roomNumber}`,
            seat: seatName,
            district,
            rent,
            status
        });
    }
    return list;
}

let boarders = JSON.parse(localStorage.getItem("hostel_boarders_v2")) || generate250Boarders();
let skills = JSON.parse(localStorage.getItem("hostel_skills_v2")) || defaultSkills;
let isDashboardView = false;

function saveBoarders() {
    localStorage.setItem("hostel_boarders_v2", JSON.stringify(boarders));
}

function saveSkills() {
    localStorage.setItem("hostel_skills_v2", JSON.stringify(skills));
}

// একই পেজে হোস্টেল ভিউ ও ড্যাশবোর্ড ভিউ সুইচ করা
function toggleDashboardView() {
    isDashboardView = !isDashboardView;
    const mainView = document.getElementById("hostel-main-view");
    const dashView = document.getElementById("dashboard-view");
    const mainNav = document.getElementById("main-nav");
    const btn = document.getElementById("dash-toggle-btn");

    if (isDashboardView) {
        mainView.style.display = "none";
        dashView.style.display = "block";
        mainNav.style.display = "none";
        btn.innerText = "🏠 হোস্টেল ভিউ";
        renderDashboard();
    } else {
        mainView.style.display = "block";
        dashView.style.display = "none";
        mainNav.style.display = "block";
        btn.innerText = "⚙️ ড্যাশবোর্ড";
        renderSkills();
        renderPublicBoarders(boarders);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// স্কিলস রেন্ডার ও ম্যানেজমেন্ট
// ==========================================
function renderSkills() {
    const grid = document.getElementById("public-skills-grid");
    grid.innerHTML = "";

    skills.forEach(s => {
        grid.innerHTML += `
            <div class="skill-card">
                <div class="skill-head">
                    <span>${s.name}</span>
                    <span>${s.pct}%</span>
                </div>
                <div class="progress-bg">
                    <div class="progress-fill" style="width:${s.pct}%;"></div>
                </div>
                <small style="color:#64748b;">${s.desc}</small>
            </div>
        `;
    });

    const dashSkillsBody = document.getElementById("dash-skills-tbody");
    if (dashSkillsBody) {
        dashSkillsBody.innerHTML = "";
        skills.forEach(s => {
            dashSkillsBody.innerHTML += `
                <tr>
                    <td><b>${s.name}</b></td>
                    <td>${s.pct}%</td>
                    <td>${s.desc}</td>
                    <td><button class="action-btn del-st-btn" onclick="deleteSkill(${s.id})">ডিলিট</button></td>
                </tr>
            `;
        });
    }

    const skillCountEl = document.getElementById("dash-skill-count");
    if (skillCountEl) skillCountEl.innerText = skills.length;
}

function addSkill(event) {
    event.preventDefault();
    const name = document.getElementById("s-name").value;
    const pct = parseInt(document.getElementById("s-pct").value);
    const desc = document.getElementById("s-desc").value;

    skills.push({ id: Date.now(), name, pct, desc });
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
// মূল হোস্টেল ভিউ: ২৫০ বোর্ডার ও Bio-Data
// ==========================================
function populateRoomDropdowns() {
    const filterSelect = document.getElementById("filter-room");
    const dashSelect = document.getElementById("b-room");

    for (let i = 0; i < TOTAL_ROOMS; i++) {
        const rNum = `Room ${101 + i}`;
        filterSelect.innerHTML += `<option value="${rNum}">${rNum}</option>`;
        dashSelect.innerHTML += `<option value="${rNum}">${rNum}</option>`;
    }
}

function renderPublicBoarders(list) {
    const grid = document.getElementById("boarders-grid");
    grid.innerHTML = "";

    document.getElementById("showing-count").innerText = list.length;
    document.getElementById("hero-boarder-count").innerText = `${boarders.length} জন`;

    list.forEach(b => {
        const statusBadge = b.status === "Active"
            ? `<span class="status-active">Active</span>`
            : `<span class="status-inactive">Inactive</span>`;

        const card = document.createElement("div");
        card.className = "boarder-card";
        card.onclick = () => openBioData(b.id);
        card.innerHTML = `
            <div class="card-top">
                <span class="room-pill">${b.room} • ${b.seat}</span>
                ${statusBadge}
            </div>
            <h3>${b.name}</h3>
            <div class="meta-line"><b>রোল:</b> ${b.roll} | <b>রেজি:</b> ${b.reg}</div>
            <div class="meta-line"><b>ইমেইল:</b> ${b.email}</div>
            <div class="meta-line"><b>স্কিল:</b> ${b.skill}</div>
            <div class="click-hint">ক্লিক করে সম্পূর্ণ Bio-Data দেখুন →</div>
        `;
        grid.appendChild(card);
    });
}

function filterBoarders() {
    const q = document.getElementById("search-boarder").value.toLowerCase();
    const st = document.getElementById("filter-status").value;
    const rm = document.getElementById("filter-room").value;

    const filtered = boarders.filter(b => {
        const matchStatus = st === "All" || b.status === st;
        const matchRoom = rm === "All" || b.room === rm;
        const matchText =
            b.name.toLowerCase().includes(q) ||
            b.roll.toLowerCase().includes(q) ||
            b.reg.toLowerCase().includes(q) ||
            b.email.toLowerCase().includes(q) ||
            b.room.toLowerCase().includes(q) ||
            b.skill.toLowerCase().includes(q);
        return matchStatus && matchRoom && matchText;
    });

    renderPublicBoarders(filtered);
}

function openBioData(id) {
    const b = boarders.find(item => item.id === id);
    if (!b) return;

    document.getElementById("bio-name").innerText = b.name;
    document.getElementById("bio-sub").innerText = `${b.room} (${b.seat}) • স্ট্যাটাস: ${b.status}`;

    document.getElementById("bio-details-table").innerHTML = `
        <tr><td>পূর্ণ নাম</td><td>${b.name}</td></tr>
        <tr><td>রোল নম্বর</td><td>${b.roll}</td></tr>
        <tr><td>রেজিস্ট্রেশন নম্বর</td><td>${b.reg}</td></tr>
        <tr><td>ইমেইল ঠিকানা</td><td>${b.email}</td></tr>
        <tr><td>মোবাইল নম্বর</td><td>${b.phone}</td></tr>
        <tr><td>গার্ডিয়ানের নম্বর</td><td>${b.guardianPhone}</td></tr>
        <tr><td>রুম নম্বর</td><td>${b.room}</td></tr>
        <tr><td>সিট নম্বর</td><td>${b.seat}</td></tr>
        <tr><td>স্কিল / দক্ষতা</td><td>${b.skill}</td></tr>
        <tr><td>জেলা</td><td>${b.district}</td></tr>
        <tr><td>মাসিক ভাড়া</td><td>৳ ${b.rent}</td></tr>
        <tr><td>বর্তমান অবস্থা</td><td><b>${b.status}</b></td></tr>
    `;

    document.getElementById("biodata-modal").style.display = "block";
}

function closeBioData() {
    document.getElementById("biodata-modal").style.display = "none";
}

// ==========================================
// ড্যাশবোর্ড ফাংশনসমূহ
// ==========================================
function renderDashboard() {
    const tbody = document.getElementById("dash-boarders-tbody");
    const activeList = boarders.filter(b => b.status === "Active");
    const inactiveList = boarders.filter(b => b.status !== "Active");

    document.getElementById("dash-total-count").innerText = boarders.length;
    document.getElementById("dash-active-count").innerText = activeList.length;
    document.getElementById("dash-inactive-count").innerText = inactiveList.length;
    document.getElementById("dash-skill-count").innerText = skills.length;

    renderSkills();

    const q = (document.getElementById("dash-search")?.value || "").toLowerCase();
    const filtered = boarders.filter(b =>
        b.name.toLowerCase().includes(q) ||
        b.roll.toLowerCase().includes(q) ||
        b.reg.toLowerCase().includes(q) ||
        b.room.toLowerCase().includes(q)
    );

    tbody.innerHTML = "";
    filtered.forEach(b => {
        const stBadge = b.status === "Active"
            ? `<span class="status-active">Active</span>`
            : `<span class="status-inactive">Inactive</span>`;

        tbody.innerHTML += `
            <tr>
                <td><b>${b.room}</b><br><small>${b.seat}</small></td>
                <td><a href="javascript:void(0)" onclick="openBioData(${b.id})" style="color:#0284c7; font-weight:700; text-decoration:none;">${b.name}</a></td>
                <td>রোল: ${b.roll}<br><small>রেজি: ${b.reg}</small></td>
                <td>${b.email}<br><small style="color:#475569;">স্কিল: ${b.skill}</small></td>
                <td>৳ ${b.rent}</td>
                <td>${stBadge}</td>
                <td>
                    <button class="action-btn toggle-st-btn" onclick="toggleBoarderStatus(${b.id})">স্ট্যাটাস বদলান</button>
                    <button class="action-btn del-st-btn" onclick="deleteBoarder(${b.id})">ডিলিট</button>
                </td>
            </tr>
        `;
    });
}

function addBoarder(event) {
    event.preventDefault();
    const newB = {
        id: Date.now(),
        name: document.getElementById("b-name").value,
        roll: document.getElementById("b-roll").value,
        reg: document.getElementById("b-reg").value,
        email: document.getElementById("b-email").value,
        phone: document.getElementById("b-phone").value,
        guardianPhone: document.getElementById("b-guardian").value,
        skill: document.getElementById("b-skill").value,
        room: document.getElementById("b-room").value,
        seat: document.getElementById("b-seat").value,
        district: "ঢাকা",
        rent: parseInt(document.getElementById("b-rent").value),
        status: document.getElementById("b-status").value
    };

    boarders.unshift(newB);
    saveBoarders();
    renderDashboard();
    event.target.reset();
    alert("নতুন বোর্ডার সফলভাবে যুক্ত হয়েছে!");
}

function toggleBoarderStatus(id) {
    boarders = boarders.map(b => {
        if (b.id === id) {
            return { ...b, status: b.status === "Active" ? "Inactive" : "Active" };
        }
        return b;
    });
    saveBoarders();
    renderDashboard();
}

function deleteBoarder(id) {
    if (confirm("আপনি কি নিশ্চিত এই বোর্ডারকে ডিলিট করতে চান?")) {
        boarders = boarders.filter(b => b.id !== id);
        saveBoarders();
        renderDashboard();
    }
}

function resetAllHostelData() {
    if (confirm("সব পরিবর্তন মুছে আবার ডিফল্ট ২৫০ জন বোর্ডার ও স্কিল ফিরিয়ে আনতে চান?")) {
        boarders = generate250Boarders();
        skills = [...defaultSkills];
        saveBoarders();
        saveSkills();
        renderDashboard();
    }
}

// ইনিশিয়ালাইজ
populateRoomDropdowns();
renderSkills();
renderPublicBoarders(boarders);