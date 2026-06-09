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
    const isZh = currentLang === 'zh';

    const timelineData = isZh ? [
        { day: "D1", date: "6月11日 (周四)", title: "抵达珀斯", stay: "Novotel Perth Murray Street", transit: "机场接送约30分钟", sights: ["西澳大学 (UWA) 罗马式学府漫步", "打卡天鹅河畔 Crawley 蓝房子 (Blue Boat House)"] },
        { day: "D2", date: "6月12日 (周五)", title: "珀斯市区漫步", stay: "Novotel Perth Murray Street", transit: "市区步行 / CAT 免费巴士", sights: ["伦敦巷 (London Court) 都铎复古街景", "天鹅河畔步道偶遇野生黑天鹅", "攀爬 Jacobs Ladder 直达国王公园 (Kings Park) 鸟瞰夕阳"] },
        { day: "D3", date: "6月13日 (周六)", title: "北上自驾首站", stay: "Jurien Bay Tourist Park", transit: "自驾约 250 公里", sights: ["兰斯林白沙丘 (Lancelin Sand Dunes) 体验滑沙", "尖峰石阵 (Pinnacles) 异星黄沙石柱群探索"] },
        { day: "D4", date: "6月14日 (周日)", title: "粉红湖与卡尔巴里", stay: "Murchison View Apartments", transit: "自驾约 350 公里", sights: ["朱里恩湾 (Jurien Bay) 码头看海狮", "龙虾工厂 (Lobster Shack) 享用岩石龙虾午餐", "赫特泻湖 (Pink Lake / 粉红湖) 梦幻红土打卡"] },
        { day: "D5", date: "6月15日 (周一)", title: "卡尔巴里峡谷探秘", stay: "Murchison View Apartments", transit: "景区段自驾", sights: ["世界之窗 (Nature's Window) 经典红砂岩石框", "卡尔巴里空中步道 (Skywalk) 悬空峡谷全景俯瞰"] },
        { day: "D6", date: "6月16日 (周二)", title: "前往鲨鱼湾", stay: "RAC Monkey Mia Dolphin Resort", transit: "自驾约 400 公里", sights: ["细小贝壳铺就的贝壳沙滩 (Shell Beach)", "抵达鲨鱼湾红土蓝海度假村，沙滩漫步"] },
        { day: "D7", date: "6月17日 (周三)", title: "海豚与野生海洋", stay: "RAC Monkey Mia Dolphin Resort", transit: "度假村休整", sights: ["野生宽吻海豚晨间浅滩互动喂食", "乘野生生态游船寻找海牛 (Dugong) 与海龟"] },
        { day: "D8", date: "6月18日 (周四)", title: "南下杰拉尔顿", stay: "African Reef Geraldton", transit: "自驾约 400 公里", sights: ["哈美林池 (Hamelin Pool) 地球最古老生命化石叠层石", "杰拉尔顿海滨 HMAS Sydney II 纪念碑日落"] },
        { day: "D9", date: "6月19日 (周五)", title: "返回珀斯", stay: "Holiday Inn Perth City Centre By IHG", transit: "自驾约 420 公里", sights: ["倾斜树 (Leaning Trees) 奇观打卡", "格里诺 (Greenough) 历史小镇人文漫步"] },
        { day: "D10", date: "6月20日 (周六)", title: "珀斯市区购物放松", stay: "Holiday Inn Perth City Centre By IHG", transit: "市区步行 / CAT 巴士", sights: ["Murray/Hay St 步行街与复古商廊手信采购", "Koko Black 巧克力工坊下午茶品鉴"] },
        { day: "D11", date: "6月21日 (周日)", title: "亲子动物园与博物馆", stay: "Holiday Inn Perth City Centre By IHG", transit: "市区/天鹅谷自驾约1小时", sights: ["天鹅谷凯维森野生动物园 (Caversham) 喂袋鼠及考拉合影", "西澳博物馆 Boola Bardip 恐龙化石与蓝鲸骨架"] },
        { day: "D12", date: "6月22日 (周一)", title: "返程与告别", stay: "飞机上 (On Board)", transit: "市区步行 / 机场送机", sights: ["伊丽莎白码头 (The Reveley) 景观午餐", "Raine Square 特产蜂蜜采购", "前往机场办理 TRS 退税并登机"] },
        { day: "D13", date: "6月23日 (周二)", title: "抵达新加坡", stay: "温馨的家 (Home)", transit: "结束旅行", sights: ["降落新加坡樟宜机场 (06:30)", "Jewel 星耀樟宜室内雨漩涡瀑布打卡"] }
    ] : [
        { day: "D1", date: "Jun 11 (Thu)", title: "Arrive in Perth", stay: "Novotel Perth Murray Street", transit: "Airport transfer ~30 mins", sights: ["University of Western Australia (UWA) campus tour", "Walk to Crawley Blue Boat House on Swan River"] },
        { day: "D2", date: "Jun 12 (Fri)", title: "Perth City Walk", stay: "Novotel Perth Murray Street", transit: "Walking / CAT Free Bus", sights: ["London Court Tudor-style walkway", "Swan River walk to spot wild black swans", "Climb Jacobs Ladder to Kings Park for sunset views"] },
        { day: "D3", date: "Jun 13 (Sat)", title: "Northbound Road Trip", stay: "Jurien Bay Tourist Park", transit: "Drive ~250 km", sights: ["Lancelin Sand Dunes sandboarding", "Pinnacles Desert alien-like limestone formations"] },
        { day: "D4", date: "Jun 14 (Sun)", title: "Pink Lake & Kalbarri", stay: "Murchison View Apartments", transit: "Drive ~350 km", sights: ["Spot sea lions at Jurien Bay Jetty", "Rock lobster lunch at Lobster Shack", "Hutt Lagoon (Pink Lake) vibrant scenic drive"] },
        { day: "D5", date: "Jun 15 (Mon)", title: "Kalbarri Gorges", stay: "Murchison View Apartments", transit: "Drive inside National Park", sights: ["Nature's Window iconic valley views", "Kalbarri Skywalk cantilevered viewing platforms"] },
        { day: "D6", date: "Jun 16 (Tue)", title: "To Shark Bay", stay: "RAC Monkey Mia Dolphin Resort", transit: "Drive ~400 km", sights: ["Walk on millions of tiny shells at Shell Beach", "Arrive at red-sand and blue-ocean RAC Resort"] },
        { day: "D7", date: "Jun 17 (Wed)", title: "Dolphins & Marine Cruise", stay: "RAC Monkey Mia Dolphin Resort", transit: "Resort Stay", sights: ["Interact with wild dolphins at beach shallow waters", "Marine Wildlife Cruise to spot dugongs and turtles"] },
        { day: "D8", date: "Jun 18 (Thu)", title: "Southbound to Geraldton", stay: "African Reef Geraldton", transit: "Drive ~400 km", sights: ["Hamelin Pool ancient Stromatolites fossils", "HMAS Sydney II Memorial sunset views in Geraldton"] },
        { day: "D9", date: "Jun 19 (Fri)", title: "Return to Perth", stay: "Holiday Inn Perth City Centre By IHG", transit: "Drive ~420 km", sights: ["Photo session with the wind-bent Leaning Trees", "Greenough historical hamlet stroll"] },
        { day: "D10", date: "Jun 20 (Sat)", title: "Perth Shopping & Tea", stay: "Holiday Inn Perth City Centre By IHG", transit: "Walking / CAT Free Bus", sights: ["Murray/Hay St Mall and heritage arcade shopping", "Koko Black specialty hot chocolate afternoon tea"] },
        { day: "D11", date: "Jun 21 (Sun)", title: "Wildlife Park & Museum", stay: "Holiday Inn Perth City Centre By IHG", transit: "Drive ~1 hour", sights: ["Caversham Wildlife Park kangaroo feeding & koala photos", "WA Museum Boola Bardip dinosaurs and whale exhibits"] },
        { day: "D12", date: "Jun 22 (Mon)", title: "Final Day & Departure", stay: "On Board (Flight)", transit: "Walking / Airport transfer", sights: ["Elizabeth Quay scenic lunch at The Reveley", "Souvenirs and honey shopping at Raine Square", "TRS tax refund at airport & board flight"] },
        { day: "D13", date: "Jun 23 (Tue)", title: "Arrive in Singapore", stay: "Home Sweet Home", transit: "End of Journey", sights: ["Land at Changi Airport at 06:30 AM", "Check out Changi Jewel Rain Vortex indoor waterfall"] }
    ];

    container.innerHTML = `
        <div class="bg-white rounded-2xl shadow-md border border-stone-200 p-6 md:p-8 space-y-6">
            
            <!-- Header -->
            <div class="text-center pb-4 border-b border-stone-100">
                <h2 class="text-2xl md:text-3xl font-extrabold text-stone-800 tracking-tight">
                    ${isZh ? '西澳亲子自驾游・全行程总览' : 'WA Family Road Trip - Master Timeline'}
                </h2>
                <p class="text-stone-500 mt-1.5 font-medium">
                    ${isZh ? '2026年6月11日 - 6月23日 (13天) • 2大2小' : '11 Jun - 23 Jun 2026 (13 Days) • 2 Adults & 2 Kids'}
                </p>
            </div>

            <!-- Master Timeline Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${timelineData.map(day => `
                    <div class="bg-stone-50/50 hover:bg-stone-50 p-4 rounded-xl border border-stone-200/60 transition-colors flex flex-col justify-between space-y-3">
                        
                        <!-- Card Header -->
                        <div class="flex justify-between items-start border-b border-stone-200/55 pb-2">
                            <div>
                                <span class="bg-orange-500 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded mr-2 uppercase">${day.day}</span>
                                <span class="text-xs font-extrabold text-stone-700">${day.title}</span>
                            </div>
                            <span class="text-[10px] font-bold text-stone-400 font-mono">${day.date}</span>
                        </div>

                        <!-- Card Body (Stay & Sights) -->
                        <div class="space-y-2 flex-1">
                            <!-- Accommodation -->
                            <div class="flex items-center text-xs text-indigo-900/80 font-bold bg-indigo-50/45 p-1.5 rounded border border-indigo-100/30">
                                <i class="fa-solid fa-moon text-indigo-500 mr-2 shrink-0"></i>
                                <span class="truncate">${day.stay}</span>
                            </div>
                            <!-- Attractions -->
                            <ul class="space-y-1.5 pl-1.5">
                                ${day.sights.map(sight => `
                                    <li class="text-xs text-stone-600 leading-relaxed flex items-start">
                                        <span class="text-orange-400 mr-1.5 shrink-0 select-none">•</span>
                                        <span>${sight}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>

                        <!-- Card Footer (Transit) -->
                        <div class="text-[10px] font-bold text-stone-400 bg-stone-100/50 px-2 py-1 rounded flex items-center gap-1.5">
                            <i class="fa-solid fa-route text-stone-300"></i>
                            <span>${day.transit}</span>
                        </div>

                    </div>
                `).join('')}
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
