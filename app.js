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
    
    container.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-6 md:p-8">
            <div class="text-center mb-8">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4 text-2xl">
                    <i class="fa-solid fa-map-location-dot"></i>
                </div>
                <h2 class="text-2xl font-bold text-stone-800">${t.overviewTitleDetail}</h2>
                <p class="text-stone-500 mt-2">${t.overviewSubDetail}</p>
                <div class="mt-4 flex flex-wrap justify-center gap-2">
                    <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded border border-green-200"><i class="fa-solid fa-check"></i> ${t.hotelConfirmed}</span>
                    <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded border border-blue-200"><i class="fa-solid fa-file-lines"></i> ${t.tipsIntegrated}</span>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Left: Highlights -->
                <div class="space-y-6">
                    <h3 class="font-bold text-lg text-stone-700 border-b border-stone-100 pb-2">${t.highlightsTitle}</h3>
                    <div class="space-y-4">
                        <div class="flex gap-3">
                            <div class="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0"><i class="fa-solid fa-water"></i></div>
                            <div><h4 class="font-bold text-sm">${t.highlight1Title}</h4><p class="text-xs text-stone-500">${t.highlight1Desc}</p></div>
                        </div>
                        <div class="flex gap-3">
                            <div class="w-8 h-8 rounded bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0"><i class="fa-solid fa-utensils"></i></div>
                            <div><h4 class="font-bold text-sm">${t.highlight2Title}</h4><p class="text-xs text-stone-500">${t.highlight2Desc}</p></div>
                        </div>
                        <div class="flex gap-3">
                            <div class="w-8 h-8 rounded bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0"><i class="fa-solid fa-bed"></i></div>
                            <div><h4 class="font-bold text-sm">${t.highlight3Title}</h4><p class="text-xs text-stone-500">${t.highlight3Desc}</p></div>
                        </div>
                    </div>
                    
                    <div class="bg-stone-50 p-4 rounded-lg border border-stone-100 mt-4">
                        <h4 class="font-bold text-sm mb-3 text-stone-600">${t.carAdviceTitle}</h4>
                        <div class="flex items-center gap-3">
                            <i class="fa-solid fa-car-side text-2xl text-stone-400"></i>
                            <p class="text-xs text-stone-500">${t.carAdviceDesc}</p>
                        </div>
                    </div>
                </div>

                <!-- Right: Overnight Stops -->
                <div class="bg-indigo-50 rounded-xl p-6 relative overflow-hidden">
                    <h3 class="font-bold text-indigo-900 mb-6 flex items-center gap-2"><i class="fa-solid fa-route"></i> ${t.stopsTitle}</h3>
                    
                    <div class="relative z-10 space-y-0 ml-2 border-l-2 border-indigo-200 pl-6 py-2">
                        <div class="relative mb-6">
                            <span class="absolute -left-[31px] top-1 w-4 h-4 bg-indigo-500 rounded-full border-2 border-white"></span>
                            <h4 class="font-bold text-indigo-800">Perth (Novotel Murray St)</h4>
                            <p class="text-xs text-indigo-600">${t.dayAbbr} 1-2 (${currentLang === 'zh' ? '6月11-12' : 'Jun 11-12'})</p>
                        </div>
                        <div class="relative mb-6">
                            <span class="absolute -left-[31px] top-1 w-4 h-4 bg-white border-2 border-indigo-300 rounded-full"></span>
                            <h4 class="font-bold text-indigo-800">Jurien Bay (Tourist Park)</h4>
                            <p class="text-xs text-indigo-600">${t.dayAbbr} 3 (${currentLang === 'zh' ? '6月13' : 'Jun 13'})</p>
                        </div>
                        <div class="relative mb-6">
                            <span class="absolute -left-[31px] top-1 w-4 h-4 bg-white border-2 border-indigo-300 rounded-full"></span>
                            <h4 class="font-bold text-indigo-800">Kalbarri (Murchison View)</h4>
                            <p class="text-xs text-indigo-600">${t.dayAbbr} 4-5 (${currentLang === 'zh' ? '6月14-15' : 'Jun 14-15'})</p>
                        </div>
                        <div class="relative mb-6">
                            <span class="absolute -left-[31px] top-1 w-4 h-4 bg-indigo-500 rounded-full border-2 border-white"></span>
                            <h4 class="font-bold text-indigo-800">Monkey Mia (RAC Resort)</h4>
                            <p class="text-xs text-indigo-600">${t.dayAbbr} 6-7 (${currentLang === 'zh' ? '6月16-17' : 'Jun 16-17'})</p>
                        </div>
                        <div class="relative mb-6">
                            <span class="absolute -left-[31px] top-1 w-4 h-4 bg-white border-2 border-indigo-300 rounded-full"></span>
                            <h4 class="font-bold text-indigo-800">Geraldton (African Reef)</h4>
                            <p class="text-xs text-indigo-600">${t.dayAbbr} 8 (${currentLang === 'zh' ? '6月18' : 'Jun 18'})</p>
                        </div>
                        <div class="relative">
                            <span class="absolute -left-[31px] top-1 w-4 h-4 bg-indigo-500 rounded-full border-2 border-white"></span>
                            <h4 class="font-bold text-indigo-800">Perth (Holiday Inn IHG)</h4>
                            <p class="text-xs text-indigo-600">${t.dayAbbr} 9-11 (${currentLang === 'zh' ? '6月19-21' : 'Jun 19-21'})</p>
                        </div>
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
