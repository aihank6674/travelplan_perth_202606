// --- Gemini API Setup ---
const apiKey = ""; // Environment API Key

async function callGemini(prompt) {
    if (!apiKey) {
        return new Promise(resolve => setTimeout(() => resolve("由于未设置API Key，此处显示模拟内容：\n\n1. **推荐美食**：试试当地的炸鱼薯条。\n2. **隐藏景点**：旁边有个安静的小海湾。\n3. **冷知识**：这里曾经是潜艇基地。"), 1000));
    }
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });
        if (!response.ok) throw new Error("API Error");
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (e) {
        console.error(e);
        return "抱歉，AI 暂时无法连接。请稍后再试。";
    }
}

// --- State Management ---
let currentDayId = -1; // -1 represents Overview
let activeFilter = 'all';

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
    container.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-6 md:p-8">
            <div class="text-center mb-8">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4 text-2xl">
                    <i class="fa-solid fa-map-location-dot"></i>
                </div>
                <h2 class="text-2xl font-bold text-stone-800">2026 珀斯珊瑚海岸之旅 (深度版)</h2>
                <p class="text-stone-500 mt-2">13天亲子探索 • 2000公里自驾 • 美食与奇观</p>
                <div class="mt-4 flex flex-wrap justify-center gap-2">
                    <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded border border-green-200"><i class="fa-solid fa-check"></i> 酒店已确认</span>
                    <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded border border-blue-200"><i class="fa-solid fa-file-lines"></i> 专家建议已整合</span>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Left: Highlights -->
                <div class="space-y-6">
                    <h3 class="font-bold text-lg text-stone-700 border-b border-stone-100 pb-2">🌟 深度体验亮点</h3>
                    <div class="space-y-4">
                        <div class="flex gap-3">
                            <div class="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0"><i class="fa-solid fa-water"></i></div>
                            <div><h4 class="font-bold text-sm">海洋生物全接触</h4><p class="text-xs text-stone-500">不仅看海豚，还去寻找海牛(Dugong)，看喂鲨鱼，非常适合男孩子。</p></div>
                        </div>
                        <div class="flex gap-3">
                            <div class="w-8 h-8 rounded bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0"><i class="fa-solid fa-utensils"></i></div>
                            <div><h4 class="font-bold text-sm">味蕾升级</h4><p class="text-xs text-stone-500">从龙虾工厂到 State Buildings 的顶级 Sue Lewis 巧克力，以及 Kailis 的海鲜。</p></div>
                        </div>
                        <div class="flex gap-3">
                            <div class="w-8 h-8 rounded bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0"><i class="fa-solid fa-bed"></i></div>
                            <div><h4 class="font-bold text-sm">舒适节奏</h4><p class="text-xs text-stone-500">卡尔巴里与猴子米亚均连住两晚，减少打包频率。</p></div>
                        </div>
                    </div>
                    
                    <div class="bg-stone-50 p-4 rounded-lg border border-stone-100 mt-4">
                        <h4 class="font-bold text-sm mb-3 text-stone-600">自驾车型建议</h4>
                        <div class="flex items-center gap-3">
                            <i class="fa-solid fa-car-side text-2xl text-stone-400"></i>
                            <p class="text-xs text-stone-500">建议租赁 <strong>大型 SUV (如 Toyota Kluger)</strong>，舒适且视野好，适合长途及4人行李。</p>
                        </div>
                    </div>
                </div>

                <!-- Right: Schematic Map -->
                <div class="bg-indigo-50 rounded-xl p-6 relative overflow-hidden">
                    <h3 class="font-bold text-indigo-900 mb-6 flex items-center gap-2"><i class="fa-solid fa-route"></i> 住宿节点</h3>
                    
                    <div class="relative z-10 space-y-0 ml-2 border-l-2 border-indigo-200 pl-6 py-2">
                        <div class="relative mb-6">
                            <span class="absolute -left-[31px] top-1 w-4 h-4 bg-indigo-500 rounded-full border-2 border-white"></span>
                            <h4 class="font-bold text-indigo-800">Perth (Novotel Murray St)</h4>
                            <p class="text-xs text-indigo-600">Day 1-2 (6月11-12)</p>
                        </div>
                        <div class="relative mb-6">
                            <span class="absolute -left-[31px] top-1 w-4 h-4 bg-white border-2 border-indigo-300 rounded-full"></span>
                            <h4 class="font-bold text-indigo-800">Jurien Bay (Tourist Park)</h4>
                            <p class="text-xs text-indigo-600">Day 3 (6月13)</p>
                        </div>
                        <div class="relative mb-6">
                            <span class="absolute -left-[31px] top-1 w-4 h-4 bg-white border-2 border-indigo-300 rounded-full"></span>
                            <h4 class="font-bold text-indigo-800">Kalbarri (Murchison View)</h4>
                            <p class="text-xs text-indigo-600">Day 4-5 (6月14-15)</p>
                        </div>
                        <div class="relative mb-6">
                            <span class="absolute -left-[31px] top-1 w-4 h-4 bg-indigo-500 rounded-full border-2 border-white"></span>
                            <h4 class="font-bold text-indigo-800">Monkey Mia (RAC Resort)</h4>
                            <p class="text-xs text-indigo-600">Day 6-7 (6月16-17)</p>
                        </div>
                        <div class="relative mb-6">
                            <span class="absolute -left-[31px] top-1 w-4 h-4 bg-white border-2 border-indigo-300 rounded-full"></span>
                            <h4 class="font-bold text-indigo-800">Geraldton (African Reef)</h4>
                            <p class="text-xs text-indigo-600">Day 8 (6月18)</p>
                        </div>
                        <div class="relative">
                            <span class="absolute -left-[31px] top-1 w-4 h-4 bg-indigo-500 rounded-full border-2 border-white"></span>
                            <h4 class="font-bold text-indigo-800">Perth (Holiday Inn IHG)</h4>
                            <p class="text-xs text-indigo-600">Day 9-11 (6月19-21)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderDayDetail(day) {
    const container = document.getElementById('day-content');
    
    let routeHtml = '';
    if (day.route) {
        routeHtml = `
            <div class="mb-6 p-3 bg-orange-50 rounded-lg border border-orange-100 text-sm">
                <div class="font-bold text-orange-800 mb-2 flex items-center gap-2"><i class="fa-solid fa-route"></i> 自驾路线 (${day.driving})</div>
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
                <img src="${day.mapImage}" alt="行程路线图" class="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300" />
            </div>
        `;
    }

    const aiHtml = day.type !== 'home' ? `
        <div class="mt-8 border-t border-stone-100 pt-6">
            <button onclick="fetchDayInsights(${day.id})" class="w-full ai-card p-4 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition group text-left">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center text-white shrink-0"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
                    <div>
                        <h4 class="font-bold text-stone-800 group-hover:text-orange-600 transition text-sm">✨ AI 发现更多惊喜</h4>
                        <p class="text-xs text-stone-500">获取 ${day.location} 的隐藏玩法与亲子冷知识</p>
                    </div>
                </div>
                <i class="fa-solid fa-chevron-right text-stone-300"></i>
            </button>
            <div id="ai-result-${day.id}" class="hidden mt-4 bg-white p-4 rounded border border-stone-100 text-sm"></div>
        </div>
    ` : '';

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

                ${aiHtml}
            </div>
        </div>
    `;
}

async function fetchDayInsights(id) {
    const el = document.getElementById(`ai-result-${id}`);
    if(!el.classList.contains('hidden')) return;
    el.classList.remove('hidden');
    el.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
    
    const day = itineraryData[id];
    const prompt = `为在${day.location}的一家四口（孩子10/13岁）提供3个简短旅行建议（美食/隐藏点/冷知识）。请结合"${day.activities.map(a=>a.title).join(',')}"的上下文。中文。`;
    const text = await callGemini(prompt);
    el.innerHTML = marked.parse(text);
}

function generatePackingList() {
    document.getElementById('packing-modal').classList.remove('hidden');
    const content = document.getElementById('packing-content');
    if(content.innerHTML.trim()) return;
    
    document.getElementById('packing-loading').classList.remove('hidden');
    callGemini("为6月西澳珀斯-鲨鱼湾亲子自驾游生成打包清单。重点：防风外套(冬季)、防蝇网(卡尔巴里)、晕车药(长途)、墨镜(滑沙)。中文Markdown格式。").then(res => {
        document.getElementById('packing-loading').classList.add('hidden');
        content.innerHTML = marked.parse(res);
    });
}
function closePackingModal() { document.getElementById('packing-modal').classList.add('hidden'); }

// Init
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
