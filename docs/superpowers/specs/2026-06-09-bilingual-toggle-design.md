# Design Spec: Bilingual Toggle & Code Cleanup (2026-06-09)

## Goal
Implement a clean, fast Chinese-English language toggle for the Perth Travel Plan website, relocate all route map images to an `images/` directory to keep the root tidy, and remove the unused AI (Gemini) packing assistant and day insights features to clean up the codebase.

## Proposed Changes

### 1. Directory Restructuring
- Move `perth_route_map.png`, `jurien_bay_route_map.png`, and `kalbarri_route_map.png` to `/images/`.
- Update image paths in `itineraryData.js` to use `images/[filename].png`.

### 2. UI/UX Changes
- **Header**:
  - Remove the "智能打包" (AI Packing) button.
  - Add a language toggle button: `<button onclick="toggleLanguage()" id="btn-lang" class="...">... English</button>`.
- **Modals**:
  - Remove the `#packing-modal` container and its styling completely.
- **Day Details**:
  - Remove the "✨ AI 发现更多惊喜" (AI Insights) card from the bottom of the day details container.
- **Timeline Overview (Sidebar)**:
  - Add IDs (`overview-title`, `overview-sub`, `filter-all`, `filter-roadtrip`, `filter-city`) to support dynamic translation.

### 3. JavaScript Updates (`app.js`)
- **State Management**:
  - `let currentLang = localStorage.getItem('travelplan_lang') || 'zh';`
  - `let itineraryData = currentLang === 'zh' ? itineraryDataZh : itineraryDataEn;`
- **Translations Dictionary (`uiTranslations`)**:
  - Add localized strings for page title, headers, filters, overview items, etc.
- **Bilingual Dynamic Rendering**:
  - Translate the static text inside `renderOverview()` dynamically based on `currentLang`.
  - Update `renderTimeline()`, `renderDayDetail()`, and `selectDay()` to render contents in the selected language.
- **Language Toggle Handler**:
  - Implement `toggleLanguage()` to switch `currentLang`, update `localStorage`, refresh `itineraryData`, translate the static UI elements via `updateUIStrings()`, and re-render the current view (either the day detail or the overview page).
- **Code Removal**:
  - Delete `callGemini()`, `fetchDayInsights()`, `generatePackingList()`, `closePackingModal()`, and related DOM loading/results elements.

### 4. HTML Updates (`index.html` & `travelplan_perth_2026.html`)
- Remove the packing modal container.
- Remove the AI packing button in the header.
- Add the language switcher button.
- Ensure both files match since they serve the same layout.
