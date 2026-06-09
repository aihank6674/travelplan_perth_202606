// --- State Management ---
let currentLang = localStorage.getItem('travelplan_lang') || 'zh';
let itineraryData = currentLang === 'zh' ? itineraryDataZh : itineraryDataEn;
let currentDayId = -1; // -1 represents Overview
let activeFilter = 'all';

// --- UI Translation Dictionary ---
const uiTranslations = {
    zh: {
        title: "2026 珀斯 & 西澳珊瑚海岸 - 深度家庭探索",
        headerTitle: "西澳亲子自驾",
        headerSub: "2026年6月11日 - 6月23日 | 2大2小",
        btnLang: "English",
        filterAll: "全部",
        filterRoadtrip: "🚗 自驾段",
        filterCity: "🏙️ 城市段",
        overviewTitle: "行程总览 Overview",
        overviewSub: "路线图 • 统计 • 亮点",
        backBtn: "<i class=\"fa-solid fa-chevron-left\"></i> 返回行程表",
        drivingRoute: "自驾路线",
        overviewTitleDetail: "2026 珀斯珊瑚海岸之旅",
        overviewSubDetail: "13天亲子探索 • 2000公里自驾 • 美食与奇观",
        hotelConfirmed: "酒店已确认",
        tipsIntegrated: "自驾建议已整合",
        highlightsTitle: "🌟 深度体验亮点",
        highlight1Title: "海洋生物全接触",
        highlight1Desc: "不仅看海豚，还去寻找海牛(Dugong)，看喂鲨鱼，非常适合孩子。",
        highlight2Title: "味蕾升级",
        highlight2Desc: "从龙虾工厂到 State Buildings 的精品巧克力，以及 Kailis 的海鲜。",
        highlight3Title: "舒适节奏",
        highlight3Desc: "卡尔巴里与猴子米亚均连住两晚，减少打包频率。",
        carAdviceTitle: "自驾车型建议",
        carAdviceDesc: "建议租赁 <strong>大型 SUV (如 Toyota Kluger)</strong>，舒适且视野好，适合长途及4人行李。",
        stopsTitle: "住宿节点",
        dayAbbr: "第"
    },
    en: {
        title: "2026 Perth & WA Coral Coast - Family Exploration",
        headerTitle: "WA Family Road Trip",
        headerSub: "11 Jun - 23 Jun 2026 | 2 Adults & 2 Kids",
        btnLang: "简体中文",
        filterAll: "All",
        filterRoadtrip: "🚗 Road Trip",
        filterCity: "🏙️ City",
        overviewTitle: "Itinerary Overview",
        overviewSub: "Route Map • Stats • Highlights",
        backBtn: "<i class=\"fa-solid fa-chevron-left\"></i> Back to Timeline",
        drivingRoute: "Driving Route",
        overviewTitleDetail: "2026 Perth & WA Coral Coast",
        overviewSubDetail: "13-Day Family Trip • 2000km Drive • Food & Wonders",
        hotelConfirmed: "Hotel Confirmed",
        tipsIntegrated: "Road Trip Tips Integrated",
        highlightsTitle: "🌟 Key Highlights",
        highlight1Title: "Marine Life Encounters",
        highlight1Desc: "Spot dolphins, search for dugongs, and watch shark feeding—perfect for kids.",
        highlight2Title: "Culinary Joys",
        highlight2Desc: "From Lobster Shack to boutique chocolates at State Buildings and fresh seafood at Kailis.",
        highlight3Title: "Comfortable Pace",
        highlight3Desc: "2-night stays at both Kalbarri and Monkey Mia to reduce packing frequency.",
        carAdviceTitle: "Vehicle Advice",
        carAdviceDesc: "A <strong>Large SUV (e.g. Toyota Kluger)</strong> is recommended for comfort, visibility, and luggage space for 4.",
        stopsTitle: "Overnight Stops",
        dayAbbr: "Day"
    }
};

// --- Language Controls ---
function updateUIStrings() {
    const t = uiTranslations[currentLang];
    document.title = t.title;
    document.getElementById('header-title').textContent = t.headerTitle;
    document.getElementById('header-sub').textContent = t.headerSub;
    document.getElementById('btn-lang').querySelector('span').textContent = t.btnLang;
    document.getElementById('filter-all').textContent = t.filterAll;
    document.getElementById('filter-roadtrip').textContent = t.filterRoadtrip;
    document.getElementById('filter-city').textContent = t.filterCity;
    document.getElementById('overview-title').textContent = t.overviewTitle;
    document.getElementById('overview-sub').textContent = t.overviewSub;
    document.getElementById('back-btn').innerHTML = t.backBtn;
}

function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('travelplan_lang', currentLang);
    itineraryData = currentLang === 'zh' ? itineraryDataZh : itineraryDataEn;
    
    // Update static strings
    updateUIStrings();
    
    // Refresh timeline list
    renderTimeline();
    
    // Refresh detail pane
    if (currentDayId === -1) {
        renderOverview();
    } else {
        renderDayDetail(itineraryData[currentDayId]);
    }
}

// --- Logic: Layout Control (Mobile) ---
function showSidebar() {
    document.getElementById('sidebar-panel').classList.remove('mobile-hidden');
    document.getElementById('detail-panel').classList.add('mobile-hidden');
}

function showDetail() {
    if (window.innerWidth < 768) {
        document.getElementById('sidebar-panel').classList.add('mobile-hidden');
        document.getElementById('detail-panel').classList.remove('mobile-hidden');
    }
}

// --- Logic: Render Timeline ---
function renderTimeline() {
    const listEl = document.getElementById('timeline-list');
    // Remove all days (keep line and overview)
    const days = listEl.querySelectorAll('.day-item');
    days.forEach(d => d.remove());

    itineraryData.forEach((day, index) => {
        if (activeFilter !== 'all' && day.type !== activeFilter && day.type !== 'home') return;

        const item = document.createElement('div');
        item.className = `day-item relative pl-10 pr-4 py-4 cursor-pointer hover:bg-stone-50 transition-colors border-b border-stone-100 ${index === currentDayId ? 'active-day' : ''}`;
        item.onclick = () => selectDay(index);

        let iconClass = 'fa-city text-blue-500';
        if (day.type === 'roadtrip') iconClass = 'fa-car text-orange-500';
        if (day.type === 'home') iconClass = 'fa-plane text-stone-400';

        item.innerHTML = `
            <div class="absolute left-4 top-5 w-4 h-4 bg-white border-2 ${index === currentDayId ? 'border-orange-500 scale-125' : 'border-stone-300'} rounded-full z-10"></div>
            <div class="flex flex-col">
                <span class="text-xs font-bold text-stone-400 uppercase tracking-wide">${day.date}</span>
                <h3 class="text-sm font-bold text-stone-800">${day.title}</h3>
                <div class="flex items-center gap-2 mt-1">
                    <i class="fa-solid ${iconClass} text-[10px]"></i>
                    <span class="text-xs text-stone-500 truncate">${day.location}</span>
                </div>
            </div>
        `;
        listEl.appendChild(item);
    });
}

// --- Logic: Selections ---
function selectOverview() {
    currentDayId = -1;
    // Update UI styles
    document.getElementById('overview-item').classList.add('active-day');
    document.querySelectorAll('.day-item').forEach(el => el.classList.remove('active-day'));
    
    renderOverview();
    showDetail();
}

function selectDay(index) {
    currentDayId = index;
    // Update UI styles
    document.getElementById('overview-item').classList.remove('active-day');
    document.querySelectorAll('.day-item').forEach((el, idx) => {
        if(idx === index) el.classList.add('active-day');
        else el.classList.remove('active-day');
    });
    renderDayDetail(itineraryData[index]);
    showDetail();
}

function filterDays(filter) {
    activeFilter = filter;
    // Update button styles
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if(btn.dataset.filter === filter) {
            btn.classList.remove('bg-stone-100', 'text-stone-600');
            btn.classList.add('bg-stone-800', 'text-white');
        } else {
            btn.classList.add('bg-stone-100', 'text-stone-600');
            btn.classList.remove('bg-stone-800', 'text-white');
        }
    });
    renderTimeline();
}

// --- Logic: Render Views ---
function renderOverview() {
    const container = document.getElementById('day-content');
    const t = uiTranslations[currentLang];
    const isZh = currentLang === 'zh';

    // Data for Stays
    const stays = isZh ? [
        { hotel: "Novotel Perth Murray Street", location: "珀斯 CBD", dates: "6月11日 - 6月13日", duration: "2 晚", icon: "fa-hotel", color: "bg-blue-50 text-blue-600", note: "现代化高空泳池酒店，适合刚抵达休整" },
        { hotel: "Jurien Bay Tourist Park", location: "朱里恩湾", dates: "6月13日 - 6月14日", duration: "1 晚", icon: "fa-tents", color: "bg-orange-50 text-orange-600", note: "靠近海滩与尖峰石阵，自驾第一站" },
        { hotel: "Murchison View Apartments", location: "卡尔巴里", dates: "6月14日 - 6月16日", duration: "2 晚", icon: "fa-house-chimney", color: "bg-purple-50 text-purple-600", note: "海滨公寓连住，减少收拾行李折腾" },
        { hotel: "RAC Monkey Mia Dolphin Resort", location: "猴子米亚", dates: "6月16日 - 6月18日", duration: "2 晚", icon: "fa-umbrella-beach", color: "bg-emerald-50 text-emerald-600", note: "海豚沙滩度假村，出门即是粉蓝大海" },
        { hotel: "African Reef Geraldton", location: "杰拉尔顿", dates: "6月18日 - 6月19日", duration: "1 晚", icon: "fa-water", color: "bg-cyan-50 text-cyan-600", note: "海滨汽车旅馆，南下中途舒适休整" },
        { hotel: "Holiday Inn Perth City Centre By IHG", location: "珀斯 CBD", dates: "6月19日 - 6月22日", duration: "3 晚", icon: "fa-hotel", color: "bg-indigo-50 text-indigo-600", note: "CBD中心商业街，便利购物与返程" }
    ] : [
        { hotel: "Novotel Perth Murray Street", location: "Perth CBD", dates: "Jun 11 - Jun 13", duration: "2 Nights", icon: "fa-hotel", color: "bg-blue-50 text-blue-600", note: "Modern room & heated pool, perfect for arrival recovery" },
        { hotel: "Jurien Bay Tourist Park", location: "Jurien Bay", dates: "Jun 13 - Jun 14", duration: "1 Night", icon: "fa-tents", color: "bg-orange-50 text-orange-600", note: "Beachside cabins, ideal base near Pinnacles" },
        { hotel: "Murchison View Apartments", location: "Kalbarri", dates: "Jun 14 - Jun 16", duration: "2 Nights", icon: "fa-house-chimney", color: "bg-purple-50 text-purple-600", note: "Waterfront apartments, 2-night stress-free stay" },
        { hotel: "RAC Monkey Mia Dolphin Resort", location: "Monkey Mia", dates: "Jun 16 - Jun 18", duration: "2 Nights", icon: "fa-umbrella-beach", color: "bg-emerald-50 text-emerald-600", note: "Dolphin beach resort, walk out to turquoise waters" },
        { hotel: "African Reef Geraldton", location: "Geraldton", dates: "Jun 18 - Jun 19", duration: "1 Night", icon: "fa-water", color: "bg-cyan-50 text-cyan-600", note: "Waterfront motel, comfortable stopover on southbound leg" },
        { hotel: "Holiday Inn Perth City Centre By IHG", location: "Perth CBD", dates: "Jun 19 - Jun 22", duration: "3 Nights", icon: "fa-hotel", color: "bg-indigo-50 text-indigo-600", note: "Heart of CBD shopping malls, convenient for departure" }
    ];

    // Data for Key Attractions
    const attractions = isZh ? [
        { category: "🏙️ 珀斯市区 & 亲子玩乐 (Perth & Family)", color: "border-blue-100 bg-blue-50/20", icon: "fa-city text-blue-500", list: [
            { name: "西澳大学 & 蓝房子", desc: "古老罗马式砂岩拱廊学府，漫步河畔打卡静谧梦幻的蓝色水上小屋。" },
            { name: "国王公园", desc: "南半球最大的城市公园，俯瞰天河与珀斯天际线，打卡750年树龄的巨型面包树。" },
            { name: "凯维森野生动物园", desc: "天鹅谷内的动物天堂，亲手喂食袋鼠、拥抱袋熊并免费与考拉同框合影。" },
            { name: "西澳博物馆 Boola Bardip", desc: "极具设计感的现代展厅，近距离观察恐龙化石、悬挂蓝鲸骨架，儿童互动极多。" }
        ]},
        { category: "🚗 自驾沿线 & 地质奇观 (Roadtrip Wonders)", color: "border-orange-100 bg-orange-50/20", icon: "fa-mountain-sun text-orange-500", list: [
            { name: "兰斯林沙丘 (滑沙)", desc: "细腻纯白的沙漠与蔚蓝天空交织，带孩子们坐在滑沙板上呼啸而下，体验极致刺激。" },
            { name: "尖峰石阵 (Pinnacles)", desc: "数千座黄金石灰岩石柱矗立在黄色沙漠中，仿佛步入异星地表的宏伟景象。" },
            { name: "赫特泻湖 (粉红湖)", desc: "天然粉色盐湖，在阳光下呈现极其梦幻的粉红色彩，极力推荐空中观光飞机俯瞰。" },
            { name: "卡尔巴里国家公园", desc: "站在壮丽的 Nature's Window (世界之窗) 前俯瞰红褐色峡谷，漫步悬空天际步道。" }
        ]},
        { category: "🐬 海洋生态 & 动物接触 (Marine & Wildlife)", color: "border-emerald-100 bg-emerald-50/20", icon: "fa-shrimp text-emerald-500", list: [
            { name: "Monkey Mia 野生海豚", desc: "度假村沙滩浅滩上观赏野生宽吻海豚的清晨近距离互动与喂食，孩子们的最爱。" },
            { name: "野生海洋生态游船", desc: "乘船出海寻找稀有海牛 (Dugong)、大海龟，并近距离观看船员用鱼饵吸引野生鲨鱼。" },
            { name: "贝壳沙滩 & 叠层石", desc: "纯由数以亿计细小贝壳铺就的白色沙滩；哈美林池旁观赏地球上最古老的生命化石叠层石。" }
        ]}
    ] : [
        { category: "🏙️ Perth City & Family Fun", color: "border-blue-100 bg-blue-50/20", icon: "fa-city text-blue-500", list: [
            { name: "UWA & Blue Boat House", desc: "Historic sandstone Romanesque campus and the iconic, picturesque blue boathouse on Swan River." },
            { name: "Kings Park", desc: "Overlooking the Swan River and CBD skyline, home to a massive 750-year-old Boab Tree." },
            { name: "Caversham Wildlife Park", desc: "Swan Valley's gem. Hand-feed kangaroos, meet wombats, and take photos with koalas." },
            { name: "WA Museum Boola Bardip", desc: "Masterpiece blending heritage buildings and modern wing. Features giant whale skeletons and dinosaurs." }
        ]},
        { category: "🚗 Coastal Road Trip & Geology", color: "border-orange-100 bg-orange-50/20", icon: "fa-mountain-sun text-orange-500", list: [
            { name: "Lancelin Sand Dunes", desc: "Massive pure white sand dunes. Slide down on sandboards for pure family excitement." },
            { name: "Pinnacles Desert", desc: "Thousands of golden limestone pillars rising out of yellow sand like a sci-fi alien landscape." },
            { name: "Hutt Lagoon (Pink Lake)", desc: "Stunning pink lake, extraordinarily vibrant in color. Best seen from scenic flights or the shore." },
            { name: "Kalbarri National Park", desc: "Stand in Nature's Window over the Murchison River and walk the high-altitude Skywalk." }
        ]},
        { category: "🐬 Marine Life & Eco Encounters", color: "border-emerald-100 bg-emerald-50/20", icon: "fa-shrimp text-emerald-500", list: [
            { name: "Wild Dolphin Feeding", desc: "Watch wild bottlenose dolphins visit the shores of Monkey Mia for morning feeds, just inches away." },
            { name: "Marine Wildlife Cruise", desc: "Cruise through Shark Bay to spot rare dugongs (sea cows) and watch sharks feed up close." },
            { name: "Shell Beach & Stromatolites", desc: "A pure white beach composed entirely of tiny shells; inspect earth's oldest living fossils at Hamelin Pool." }
        ]}
    ];

    container.innerHTML = `
        <div class="bg-white rounded-2xl shadow-md border border-stone-200/80 p-6 md:p-8 space-y-8">
            
            <!-- 1. Header Hero -->
            <div class="text-center pb-6 border-b border-stone-100">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl mb-4 text-3xl shadow-sm">
                    <i class="fa-solid fa-map-location-dot"></i>
                </div>
                <h2 class="text-2xl md:text-3xl font-extrabold text-stone-800 tracking-tight">${t.overviewTitleDetail}</h2>
                <p class="text-stone-500 mt-2 font-medium">${t.overviewSubDetail}</p>
                <div class="mt-4 flex flex-wrap justify-center gap-2">
                    <span class="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full border border-green-200"><i class="fa-solid fa-hotel"></i> ${t.hotelConfirmed}</span>
                    <span class="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200"><i class="fa-solid fa-road"></i> ${t.tipsIntegrated}</span>
                    <span class="px-2.5 py-1 bg-orange-50 text-orange-700 text-xs font-semibold rounded-full border border-orange-200"><i class="fa-solid fa-child-reaching"></i> ${isZh ? '亲子自驾推荐' : 'Family Roadtrip'}</span>
                </div>
            </div>

            <!-- 2. Travel Stats Grid -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="bg-stone-50 p-4 rounded-xl border border-stone-200/60 flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center text-lg shrink-0"><i class="fa-regular fa-calendar-days"></i></div>
                    <div>
                        <p class="text-[10px] text-stone-400 font-bold uppercase tracking-wider">${isZh ? '行程天数' : 'Duration'}</p>
                        <p class="text-sm font-extrabold text-stone-700">13 ${isZh ? '天' : 'Days'}</p>
                    </div>
                </div>
                <div class="bg-stone-50 p-4 rounded-xl border border-stone-200/60 flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-lg shrink-0"><i class="fa-solid fa-route"></i></div>
                    <div>
                        <p class="text-[10px] text-stone-400 font-bold uppercase tracking-wider">${isZh ? '自驾路程' : 'Driving Distance'}</p>
                        <p class="text-sm font-extrabold text-stone-700">~2000 ${isZh ? '公里' : 'km'}</p>
                    </div>
                </div>
                <div class="bg-stone-50 p-4 rounded-xl border border-stone-200/60 flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg shrink-0"><i class="fa-solid fa-users"></i></div>
                    <div>
                        <p class="text-[10px] text-stone-400 font-bold uppercase tracking-wider">${isZh ? '出游成员' : 'Travelers'}</p>
                        <p class="text-sm font-extrabold text-stone-700">2 ${isZh ? '大' : 'Ad'} 2 ${isZh ? '小' : 'Ch'}</p>
                    </div>
                </div>
                <div class="bg-stone-50 p-4 rounded-xl border border-stone-200/60 flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-lg shrink-0"><i class="fa-solid fa-car-side"></i></div>
                    <div>
                        <p class="text-[10px] text-stone-400 font-bold uppercase tracking-wider">${isZh ? '租车建议' : 'Vehicle Class'}</p>
                        <p class="text-sm font-extrabold text-stone-700">${isZh ? '大型 SUV / MPV' : 'Large SUV'}</p>
                    </div>
                </div>
            </div>

            <!-- 3. Key Summaries: Accommodation Timeline & Key Attractions -->
            <div class="grid grid-cols-1 xl:grid-cols-12 gap-8">
                
                <!-- Left: Accommodation Timeline (5 cols) -->
                <div class="xl:col-span-5 space-y-4">
                    <h3 class="font-extrabold text-lg text-stone-700 border-b border-stone-100 pb-2 flex items-center gap-2">
                        <i class="fa-solid fa-hotel text-indigo-500"></i> ${isZh ? '🏨 酒店与住宿节点' : '🏨 Overnight Stays'}
                    </h3>
                    
                    <div class="relative pl-6 border-l border-stone-200 space-y-5 py-2 ml-3">
                        ${stays.map((stay, idx) => `
                            <div class="relative group">
                                <!-- Dot indicator -->
                                <span class="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full border-2 border-white group-hover:scale-125 transition-transform ${idx === 0 || idx === stays.length - 1 ? 'bg-indigo-500' : 'bg-stone-300'}"></span>
                                <div class="bg-stone-50/60 hover:bg-stone-50 p-3 rounded-lg border border-stone-200/50 transition-colors">
                                    <div class="flex justify-between items-start gap-2">
                                        <h4 class="font-extrabold text-xs text-stone-700 leading-tight">${stay.hotel}</h4>
                                        <span class="text-[10px] font-bold shrink-0 px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100">${stay.duration}</span>
                                    </div>
                                    <div class="flex items-center gap-1.5 mt-1.5 text-[10px] font-bold text-stone-400">
                                        <i class="fa-solid fa-location-dot text-stone-300"></i>
                                        <span>${stay.location}</span>
                                        <span class="mx-1">•</span>
                                        <i class="fa-regular fa-calendar text-stone-300"></i>
                                        <span>${stay.dates}</span>
                                    </div>
                                    <p class="text-[10px] text-stone-500 mt-1 italic">${stay.note}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Right: Key Attractions Summary (7 cols) -->
                <div class="xl:col-span-7 space-y-4">
                    <h3 class="font-extrabold text-lg text-stone-700 border-b border-stone-100 pb-2 flex items-center gap-2">
                        <i class="fa-solid fa-signs-post text-orange-500"></i> ${isZh ? '🌟 核心景点与亲子打卡' : '🌟 Key Attractions'}
                    </h3>
                    
                    <div class="space-y-4">
                        ${attractions.map(cat => `
                            <div class="border rounded-xl p-4 ${cat.color}">
                                <h4 class="font-extrabold text-xs text-stone-700 flex items-center gap-2 mb-3">
                                    <i class="fa-solid ${cat.icon}"></i> ${cat.category}
                                </h4>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    ${cat.list.map(attr => `
                                        <div class="bg-white/90 p-2.5 rounded-lg border border-stone-200/40 shadow-sm flex flex-col justify-between">
                                            <span class="text-[11px] font-extrabold text-stone-700 mb-1 leading-tight flex items-center gap-1">
                                                <i class="fa-solid fa-circle-check text-orange-400 text-[8px]"></i> ${attr.name}
                                            </span>
                                            <p class="text-[10px] text-stone-500 leading-normal">${attr.desc}</p>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- 4. Driving Tips & Warning Banner -->
            <div class="bg-stone-50 border border-stone-200/80 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-start gap-4 shadow-inner">
                <div class="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-xl shrink-0"><i class="fa-solid fa-triangle-exclamation"></i></div>
                <div class="space-y-2">
                    <h4 class="font-extrabold text-sm text-stone-700">${isZh ? '自驾车型建议与安全贴士' : 'Road Trip & Safety Advice'}</h4>
                    <p class="text-xs text-stone-500 leading-relaxed">
                        ${isZh ? '建议租用 <b>大型 SUV (如丰田 Kluger)</b> 或 <b>豪华 MPV (如起亚 Carnival)</b>。西澳自驾路途遥远，充沛的动力和宽敞的后备箱是收纳4人行李及亲子舒适度保障的必备条件。' : 'We strongly recommend hiring a <b>Large SUV (e.g., Toyota Kluger)</b> or <b>MPV (e.g., Kia Carnival)</b>. Vast driving distances in WA require robust power, comfort, and ample luggage space for a family of 4.'}
                    </p>
                    <p class="text-xs text-orange-600 font-bold leading-normal">
                        <i class="fa-solid fa-circle-info"></i> ${isZh ? '【安全警告】自驾路线中（特别是在西北公路上）黄昏或黎明时段野生袋鼠极度活跃，请尽量避免在夜间及视线不佳时行车，以防碰撞事故。' : '【Safety Warning】Wild kangaroos are extremely active during dusk and dawn on regional roads. Avoid driving at night or under low visibility to prevent wildlife collisions.'}
                    </p>
                </div>
            </div>

            <!-- 5. Highlights Section -->
            <div class="space-y-4">
                <h3 class="font-extrabold text-lg text-stone-700 border-b border-stone-100 pb-2 flex items-center gap-2">
                    <i class="fa-solid fa-sparkles text-yellow-500"></i> ${t.highlightsTitle}
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-blue-50/30 border border-blue-100 rounded-xl p-4 space-y-2">
                        <div class="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-sm"><i class="fa-solid fa-water"></i></div>
                        <h4 class="font-extrabold text-xs text-stone-700">${t.highlight1Title}</h4>
                        <p class="text-[11px] text-stone-500 leading-relaxed">${t.highlight1Desc}</p>
                    </div>
                    <div class="bg-orange-50/30 border border-orange-100 rounded-xl p-4 space-y-2">
                        <div class="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center text-sm"><i class="fa-solid fa-utensils"></i></div>
                        <h4 class="font-extrabold text-xs text-stone-700">${t.highlight2Title}</h4>
                        <p class="text-[11px] text-stone-500 leading-relaxed">${t.highlight2Desc}</p>
                    </div>
                    <div class="bg-purple-50/30 border border-purple-100 rounded-xl p-4 space-y-2">
                        <div class="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center text-sm"><i class="fa-solid fa-bed"></i></div>
                        <h4 class="font-extrabold text-xs text-stone-700">${t.highlight3Title}</h4>
                        <p class="text-[11px] text-stone-500 leading-relaxed">${t.highlight3Desc}</p>
                    </div>
                </div>
            </div>
            
        </div>
    `;
}

function renderDayDetail(day) {
    const container = document.getElementById('day-content');
    const t = uiTranslations[currentLang];
    
    let routeHtml = '';
    if (day.route) {
        routeHtml = `
            <div class="mb-6 p-3 bg-orange-50 rounded-lg border border-orange-100 text-sm">
                <div class="font-bold text-orange-800 mb-2 flex items-center gap-2">
                    <i class="fa-solid fa-route"></i> ${t.drivingRoute} (${day.driving})
                </div>
                <div class="flex flex-wrap gap-2 items-center text-xs text-stone-600">
                     ${day.route.map((r,i) => `<span>${r.from}</span> <i class="fa-solid fa-arrow-right text-orange-300"></i> ${i===day.route.length-1 ? `<span>${r.to}</span>` : ''}`).join('')}
                </div>
            </div>
        `;
    }

    let mapImageHtml = '';
    if (day.mapImage) {
        mapImageHtml = `
            <div class="mb-6 rounded-xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100">
                <img src="${day.mapImage}" alt="Route Map" class="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300" />
            </div>
        `;
    }

    container.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden">
            <div class="h-28 bg-gradient-to-r from-stone-200 to-stone-300 relative">
                <!-- Accommodation Badge -->
                <div class="absolute right-4 top-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-stone-700 shadow-sm flex items-center gap-2 border border-white">
                     <i class="fa-solid fa-moon text-indigo-500"></i> ${day.stay}
                </div>
                <div class="absolute -bottom-8 left-6 md:left-8 w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center text-2xl border border-stone-100">
                     <i class="fa-solid ${day.type === 'roadtrip' ? 'fa-car text-orange-500' : 'fa-city text-blue-500'}"></i>
                </div>
            </div>
            <div class="pt-10 px-6 md:px-8 pb-8">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <div class="text-xs font-bold text-stone-400 uppercase tracking-wide">${day.fullDate}</div>
                        <h2 class="text-2xl font-bold text-stone-800 mt-1 leading-tight">${day.title}</h2>
                    </div>
                    <span class="bg-stone-100 text-stone-600 text-xs px-2 py-1 rounded">${day.location}</span>
                </div>
                <p class="text-stone-600 text-sm mb-6">${day.desc}</p>
                
                ${routeHtml}

                ${mapImageHtml}
 
                <div class="space-y-6">
                    ${day.activities.map(act => `
                        <div class="flex gap-4">
                            <div class="flex flex-col items-center">
                                <div class="w-8 h-8 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center shrink-0"><i class="fa-solid ${act.icon} text-xs"></i></div>
                                <div class="h-full w-px bg-stone-100 my-1"></div>
                            </div>
                            <div class="pb-2">
                                <div class="flex items-center gap-2 mb-1">
                                    <span class="text-xs font-mono font-bold text-stone-400 bg-stone-50 px-1 rounded">${act.time}</span>
                                    <h4 class="text-sm font-bold text-stone-800">${act.title}</h4>
                                </div>
                                <p class="text-sm text-stone-500 leading-relaxed">${act.note}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// --- Init ---
updateUIStrings();
renderTimeline();
selectOverview(); // Default to Overview

// Handle Resize to reset views if needed
window.addEventListener('resize', () => {
    if(window.innerWidth >= 768) {
        document.getElementById('sidebar-panel').classList.remove('mobile-hidden');
        document.getElementById('detail-panel').classList.remove('mobile-hidden');
    } else {
        // Re-apply current state logic
        if (currentDayId === -1 && !document.querySelector('.active-day')) {
             // Initial state or overview selected
             showDetail(); 
        }
    }
});
