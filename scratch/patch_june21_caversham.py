# -*- coding: utf-8 -*-
import re

with open("scratch/enrich_all_itinerary.py", "r", encoding="utf-8") as f:
    content = f.read()

new_day_10_zh = """    { 
        id: 10, 
        date: "6月21日", 
        fullDate: "6月21日 (周日)", 
        title: "亲子探秘：野生动物与恐龙博物馆", 
        location: "Perth", 
        type: "city", 
        stay: "Holiday Inn Perth City Centre By IHG", 
        driving: "自驾约1小时", 
        mapImage: "images/june21_route_map.png", 
        tags: ["考拉合影", "野生动物园", "西澳博物馆", "亲子互动", "高分早午餐", "中东风晚餐"], 
        desc: "今天是专属的亲子快乐时光！早晨在市区享用高品质早午餐后，自驾或乘车前往位于天鹅谷怀特曼公园内的凯维森野生动物园，亲手喂袋鼠、抚摸 wombats，并与考拉近距离同框合影；中午在公园或天鹅谷享用轻食下午茶，下午返回市区前往西澳博物馆 Boola Bardip 探秘巨型恐龙与蓝鲸骨架，晚上在北区享用风味晚餐后返回酒店。", 
        activities: [
            {time:"09:00", title:"悠闲早午餐 (Brunch) 推荐", icon:"fa-mug-hot", note:"【市区高分 Brunch 推荐】在开启精彩亲子行程前，推荐在酒店附近享用盛的早午餐：<br>① <b>La Veen Coffee & Kitchen</b> (4.6⭐) - 距离酒店约 400 米，主打精品手冲咖啡和创意早午餐，其北非蛋和特制土豆饼非常适合家人口味；<br>② <b>Tiisch</b> (4.6⭐) - 距离酒店约 500 米，拥有充满绿植的温室美学设计，招牌的抹茶薄饼和炒蛋深受孩子们喜爱。"},
            {time:"10:15", title:"前往目的地：自驾前往凯维森野生动物园", icon:"fa-car", note:"【交通指南】从珀斯市区自驾或搭乘 Uber 往东北方向行驶约 25 公里（约 30 分钟），即可抵达位于怀特曼公园 (Whiteman Park) 内的 <b>Caversham Wildlife Park (凯维森野生动物园)</b>。这里是西澳规模最大的私人野生动物园，非常适合家庭亲子游览。"},
            {time:"10:45", title:"第一站：Caversham Wildlife Park (野生动物体验)", icon:"fa-paw", note:"【打卡点 & 亲子导游秘籍】凯维森野生动物园是亲子互动的绝佳地点。在这里，孩子们可以<b>免费亲手喂食袋鼠</b>，并在指定时间体验<b>与考拉免费近距离接触合影</b>。别忘了打卡“农场表演 (Farm Show)”，观看剪羊毛和牧羊犬赶羊。此外，还可以抚摸西澳特有的毛茸茸的袋熊 (Wombat)。<br>【拍照推荐】在考拉区，拍照者可以贴近栅栏，用大光圈虚化背景，让考拉和孩子们可爱的笑脸同框，画面非常温馨。喂袋鼠时，可以让孩子们轻轻蹲下递出饲料，抓拍袋鼠凑近吃食的特写镜头。"},
            {time:"13:00", title:"轻食午餐 / 下午茶推荐（公园及附近）", icon:"fa-utensils", note:"【高分午餐与下午茶推荐 & 4.5+⭐, $$】由于玩累了不想折腾，推荐两家最方便且适合家庭的用餐地点：<br>① <b>Village Cafe (Whiteman Park)</b> (4.0⭐) - 位于动物园所在的怀特曼公园内，是园内唯一的持牌咖啡馆，环境轻松，提供非常适合孩子的经典汉堡、炸鱼薯条与三明治轻食；<br>② <b>Taylor's Art and Coffee House</b> (4.6⭐) - 距离公园仅 10 分钟车程 (Swan Valley)，是一家充满艺术气息的复古花园咖啡馆，主打 Swan Valley 当地有机食材制作的轻食午餐、手冲咖啡和手工烘焙蛋糕，非常适合自驾出公园后带孩子享用精致的下午茶。"},
            {time:"14:30", title:"第二站：西澳博物馆 Boola Bardip (WA Museum)", icon:"fa-monument", note:"【打卡点 & 导游背景介绍】自驾返回市区，直接将车停在珀斯文化中心停车场。<i>Boola Bardip</i> 在当地原住民诺格语中意为“许多故事”。博物馆建筑将历史保护古迹与超现代的几何大厅完美交融。孩子们绝对不能错过<b>“野生与生态展厅 (Wild Life Gallery)”</b>，这里悬挂着巨大的蓝鲸骨架，还有栩栩如生的恐龙化石及本土珍稀动物标本，互动式多媒体设备非常多，真正做到了寓教于乐。<br>【拍照推荐】在博物馆二楼的玻璃连廊，以挑高的现代钢结构与红砖古建筑交界处为背景，能拍出极具建筑美学张力的时尚合影。也可以站在巨型恐龙骨架正下方仰拍，拍出震撼的视觉效果。"},
            {time:"18:00", title:"特色晚餐推荐（北区/市区附近）", icon:"fa-bowl-food", note:"【高分晚餐推荐 & 4.5+⭐, $$】推荐两家位于博物馆步行 5 分钟范围内的优质风味餐厅：<br>① <b>Bivouac Canteen & Bar</b> (4.6⭐) - 位于 William St，是一家非常温馨的艺术风中东共享小酒馆，招牌的 8 小时慢烤羊肩肉肉质酥烂，配上面包和奶油鹰嘴豆泥，极适合全家分享；<br>② <b>Authentic Bites Dumpling House (鼎泰丰级小笼)</b> (4.6⭐) - 位于 Newcastle St，是珀斯最火爆的手工面点店，招牌的鲜肉小笼包、红油抄手和生煎包皮薄汁多，非常对中国胃，深受孩子喜爱，建议提早去排队。"}
        ]
    },"""

new_day_10_en = """    { 
        id: 10, 
        date: "Jun 21", 
        fullDate: "Jun 21 (Sun)", 
        title: "Family Adventure: Wildlife & Dinosaur Museum", 
        location: "Perth", 
        type: "city", 
        stay: "Holiday Inn Perth City Centre By IHG", 
        driving: "Drive ~1 hour", 
        mapImage: "images/june21_route_map.png", 
        tags: ["Meet Koalas", "Wildlife Park", "WA Museum", "Family Friendly", "Fine Brunch", "Flavored Dinner"], 
        desc: "Today is dedicated to pure family joy! After a hearty CBD brunch, drive northeast to the famous Caversham Wildlife Park in Whiteman Park to hand-feed kangaroos and take photos with koalas. Enjoy a casual park cafe lunch or a cozy Swan Valley garden tea, then return to the city to explore the interactive galleries and giant dinosaur skeletons at the WA Museum Boola Bardip, ending with a flavored Northbridge dinner.", 
        activities: [
            {time:"09:00", title:"Leisurely Brunch Recommendations", icon:"fa-mug-hot", note:"【CBD Brunch Recommendations】Fuel up for a fun family day at highly-rated 4.5+ star ($$) options near the hotel:<br>① <b>La Veen Coffee & Kitchen</b> (4.6⭐) - 400m from the hotel, set in a historic red-brick building, serving excellent specialty pour-over coffee and creative staples like potato rosti with poached eggs;<br>② <b>Tiisch</b> (4.6⭐) - 500m from the hotel, a beautiful plant-filled conservatory cafe famous for creative eggs and matcha pancakes that kids love."},
            {time:"10:15", title:"Transit: Drive to Caversham Wildlife Park", icon:"fa-car", note:"【Transit Guide】Drive or take an Uber northeast from Perth CBD for about 25 km (approx. 30 mins) to reach <b>Caversham Wildlife Park</b>, situated inside the expansive <b>Whiteman Park</b>. It is WA's premier privately-owned wildlife sanctuary and an absolute favorite for families."},
            {time:"10:45", title:"Stop 1: Caversham Wildlife Park Adventure", icon:"fa-paw", note:"【Check-in & Expert Tips】Caversham offers incredible hands-on experiences. Kids can **hand-feed friendly kangaroos for free** and enjoy **free close-up photos with koalas** at scheduled times. Catch the 'Farm Show' to see sheep shearing and sheepdogs in action, and meet the fluffy wombats.<br>【Photo Tips】In the koala enclosure, position your camera close to the safety fence with a wide aperture to blur the background, capturing a sweet portrait of your child with the koala. While feeding kangaroos, crouch low to capture the animals approaching the children naturally."},
            {time:"13:00", title:"Light Lunch & Afternoon Tea Recommendations", icon:"fa-utensils", note:"【Swan Valley/Park Dining & 4.5+⭐, $$】Choose between two highly-rated convenient options for families:<br>① <b>Village Cafe (Whiteman Park)</b> (4.0⭐) - Located directly inside the park near the zoo, offering convenient, casual dining with classic burgers, fish & chips, and sandwiches that kids love;<br>② <b>Taylor's Art and Coffee House</b> (4.6⭐) - A short 10-minute drive from the park in Middle Swan, featuring a gorgeous rustic garden courtyard. They serve organic farm-to-table lunch plates, specialty coffee, and artisan cakes, making it perfect for a relaxed family afternoon tea."},
            {time:"14:30", title:"Stop 2: WA Museum Boola Bardip", icon:"fa-monument", note:"【Check-in & Expert Tips】Drive back to the city and park at the Perth Cultural Centre. *Boola Bardip* means 'many stories' in the Noongar language. The museum is a masterpiece blending heritage buildings with hyper-modern halls. Kids will be mesmerized by the **Wild Life Gallery**, featuring a massive blue whale skeleton, giant dinosaur fossils, and interactive touchscreens.<br>【Photo Tips】Stand in the grand glass-and-steel atrium connecting the modern wing to the heritage brick building for a stunning architectural family portrait. Or shoot looking upward from beneath the massive dinosaur skeleton for a dramatic scale effect."},
            {time:"18:00", title:"Dinner Recommendations in Northbridge", icon:"fa-bowl-food", note:"【Northbridge Dining & 4.5+⭐, $$】Recommend two great family spots within 5 minutes' walk of the museum:<br>① <b>Bivouac Canteen & Bar</b> (4.6⭐) - On William St, a cozy, artsy Middle Eastern sharing house famous for its 8-hour slow-cooked lamb shoulder with flatbread and creamy hummus;<br>② <b>Authentic Bites Dumpling House</b> (4.6⭐) - On Newcastle St, Perth's most popular dumpling spot serving incredible handmade soup dumplings (Xiao Long Bao) and pan-fried pork buns that kids adore. Get there early to avoid the queue."}
        ]
    },"""

# Split the content by the days_en definition to avoid cross-matching
parts = content.split('days_en = """')
if len(parts) == 2:
    zh_section = parts[0]
    en_section = parts[1]
    
    # Replace in Chinese section
    pattern_zh = r'(\{\s*\n\s*id:\s*10,.*?\n\s*\},)'
    match_zh = re.search(pattern_zh, zh_section, re.DOTALL)
    if match_zh:
        zh_section = zh_section.replace(match_zh.group(1), new_day_10_zh)
        print("Successfully replaced day 10 Chinese!")
    else:
        print("Failed to match day 10 Chinese!")
        
    # Replace in English section
    pattern_en = r'(\{\s*\n\s*id:\s*10,.*?\n\s*\},)'
    match_en = re.search(pattern_en, en_section, re.DOTALL)
    if match_en:
        en_section = en_section.replace(match_en.group(1), new_day_10_en)
        print("Successfully replaced day 10 English!")
    else:
        print("Failed to match day 10 English!")
        
    # Reassemble
    content = zh_section + 'days_en = """' + en_section
    
    with open("scratch/enrich_all_itinerary.py", "w", encoding="utf-8") as f:
        f.write(content)
else:
    print("Error: Could not split file by days_en = \"\"\"")
