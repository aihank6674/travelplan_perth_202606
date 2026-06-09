# -*- coding: utf-8 -*-
import re

with open("scratch/enrich_all_itinerary.py", "r", encoding="utf-8") as f:
    content = f.read()

new_day_10_zh = """    { 
        id: 10, 
        date: "6月21日", 
        fullDate: "6月21日 (周日)", 
        title: "亲子探秘：动物园与恐龙博物馆", 
        location: "Perth", 
        type: "city", 
        stay: "Holiday Inn Perth City Centre By IHG", 
        driving: "渡轮/步行", 
        mapImage: "images/june21_route_map.png", 
        tags: ["天鹅河渡轮", "珀斯动物园", "西澳博物馆", "亲子互动", "高分早午餐", "风味晚餐"], 
        desc: "今天是专属的亲子快乐时光！早晨在市区享用高品质早午餐，随后步行至伊丽莎白码头，搭乘充满乐趣的跨河渡轮前往南半球历史悠久的珀斯动物园，近距离观察袋鼠与考拉；中午在南珀斯沿河享用美味午餐，下午乘渡轮折返，前往拥有丰富互动展厅和巨型恐龙骨架的西澳博物馆 Boola Bardip，晚上在北区享用风味晚餐后返回酒店。", 
        activities: [
            {time:"09:00", title:"悠闲早午餐 (Brunch) 推荐", icon:"fa-mug-hot", note:"【市区高分 Brunch 推荐】在开始一天的精彩亲子行程前，推荐在酒店附近享用丰盛的早午餐：<br>① <b>La Veen Coffee & Kitchen</b> (4.6⭐) - 距离酒店约 400 米，主打精品手冲咖啡和创意早午餐，其北非蛋和特制土豆饼非常适合家人口味；<br>② <b>Tiisch</b> (4.6⭐) - 距离酒店约 500 米，拥有充满绿植的温室美学设计，招牌的抹茶薄饼和炒蛋深受孩子们喜爱。"},
            {time:"10:15", title:"跨河航行：天鹅河渡轮体验", icon:"fa-ship", note:"【亲子导游体验】从酒店步行约 10 分钟（750米）抵达伊丽莎白码头 (Elizabeth Quay Jetty)，搭乘 Transperth 跨河渡轮（每 15-30 分钟一班）前往南珀斯的门兹街码头 (Mends Street Jetty)。这趟仅需 10 分钟的航程对孩子们来说像是一次微型冒险，可以在开阔的河面上远眺珀斯 CBD 的宏伟天际线。抵达后沿门兹街漫步约 500 米即可到达动物园正门。"},
            {time:"10:30", title:"第一站：珀斯动物园 (Perth Zoo) 探秘", icon:"fa-paw", note:"【打卡点 & 历史背景】建于1898年的珀斯动物园是澳洲最具历史底蕴的动物园之一，这里精心复原了野生动物的自然栖息环境。亲子必看“澳洲漫步区 (Australian Walkabout)”，可以让孩子们在全开放式的红土环境中近距离观察温顺的袋鼠、憨态可掬的考拉和袋熊。园内还有巨大的非洲草原区 and 亚洲热带雨林区。<br>【拍照推荐】在澳洲漫步区，蹲下身体以低视角抓拍孩子与身旁散步的小袋鼠对视的自然瞬间，背景的红土和桉树极具西澳自然风情。"},
            {time:"13:00", title:"美味午餐推荐（南珀斯 Mends St 附近）", icon:"fa-utensils", note:"【高分午餐推荐 & 4.5+⭐, $$】动物园出门步行 5 分钟的 Mends St 商业街有非常优秀的家庭友好餐厅：<br>① <b>Secret Garden Cafe & Patisserie</b> (4.5⭐) - 距离动物园仅 300 米，拥有幽静的后花园庭院，主打高水准的汉堡、沙拉与精致手工蛋糕，氛围温馨舒适；<br>② <b>Automatic</b> (4.6⭐) - 距离动物园 400 米，是一家极具人气的意式餐厅，其招牌的薄底罗马木炭烤比萨和手工松露意面分量充足，口味极佳，深得孩子们喜爱。"},
            {time:"14:30", title:"第二站：西澳博物馆 Boola Bardip (WA Museum)", icon:"fa-monument", note:"【打卡点 & 导游背景介绍】乘渡轮返回市区，随后乘坐免费的蓝猫巴士 (Blue CAT) 直达珀斯文化中心。<i>Boola Bardip</i> 在当地原住民诺格语中意为“许多故事”。博物馆建筑将历史保护古迹与超现代的几何大厅完美交融。孩子们绝对不能错过<b>“野生与生态展厅 (Wild Life Gallery)”</b>，这里悬挂着巨大的蓝鲸骨架，还有栩栩如生的恐龙化石及本土珍稀动物标本，互动式多媒体设备非常多，真正做到了寓教于乐。<br>【拍照推荐】在博物馆二楼的玻璃连廊，以挑高的现代钢结构与红砖古建筑交界处为背景，能拍出极具建筑美学张力的时尚合影。也可以站在巨型恐龙骨架正下方仰拍，拍出震撼的视觉效果。"},
            {time:"18:00", title:"特色晚餐推荐（北区/市区附近）", icon:"fa-bowl-food", note:"【高分晚餐推荐 & 4.5+⭐, $$】推荐两家位于博物馆步行 5 分钟范围内的优质风味餐厅：<br>① <b>Bivouac Canteen & Bar</b> (4.6⭐) - 位于 William St，是一家非常温馨的艺术风中东共享小酒馆，招牌的 8 小时慢烤羊肩肉肉质酥烂，配上面包和奶油鹰嘴豆泥，极适合全家分享；<br>② <b>Authentic Bites Dumpling House (鼎泰丰级小笼)</b> (4.6⭐) - 位于 Newcastle St，是珀斯最火爆的手工面点店，招牌的鲜肉小笼包、红油抄手和生煎包皮薄汁多，非常对中国胃，深受孩子喜爱，建议提早去排队。"}
        ]
    },"""

new_day_10_en = """    { 
        id: 10, 
        date: "Jun 21", 
        fullDate: "Jun 21 (Sun)", 
        title: "Family Adventure: Perth Zoo & Boola Bardip", 
        location: "Perth", 
        type: "city", 
        stay: "Holiday Inn Perth City Centre By IHG", 
        driving: "Ferry/Walking", 
        mapImage: "images/june21_route_map.png", 
        tags: ["Ferry Ride", "Perth Zoo", "WA Museum", "Family Friendly", "Fine Brunch", "Flavored Dinner"], 
        desc: "Today is dedicated to pure family joy in the city! After a hearty CBD brunch, hop on the ferry across the Swan River to the historic Perth Zoo to meet koalas and kangaroos. Enjoy a premium lunch in South Perth, then cruise back to explore the interactive galleries and giant dinosaur skeletons at the WA Museum Boola Bardip, ending the day with a delicious Northbridge dinner.", 
        activities: [
            {time:"09:00", title:"Leisurely Brunch Recommendations", icon:"fa-mug-hot", note:"【CBD Brunch Recommendations】Fuel up for a fun family day at highly-rated 4.5+ star ($$) options near the hotel:<br>① <b>La Veen Coffee & Kitchen</b> (4.6⭐) - 400m from the hotel, set in a historic red-brick building, serving excellent specialty pour-over coffee and creative staples like potato rosti with poached eggs;<br>② <b>Tiisch</b> (4.6⭐) - 500m from the hotel, a beautiful plant-filled conservatory cafe famous for creative eggs and matcha pancakes that kids love."},
            {time:"10:15", title:"Scenic Ferry Crossing to South Perth", icon:"fa-ship", note:"【Transit & Kids Fun】Walk 10 mins (750m) from your hotel to Elizabeth Quay Jetty. Board the Transperth Ferry for a scenic 10-minute crossing of the Swan River to Mends Street Jetty in South Perth. The short boat ride is a highlight for kids and offers stunning views of the Perth CBD skyline. From Mends St Jetty, walk 500m up the street to the zoo entrance."},
            {time:"10:30", title:"Stop 1: Perth Zoo Wildlife Safari", icon:"fa-paw", note:"【Check-in & History】Established in 1898, Perth Zoo is a historic botanical and zoological sanctuary. Don't miss the open-air **Australian Walkabout**, where kids can wander among free-roaming kangaroos and spot sleepy koalas and wombats. The zoo also features massive African Savannah and Asian Rainforest zones.<br>【Photo Tips】In the Australian Walkabout area, crouch down to take a low-angle shot of your kids interacting naturally with a roaming kangaroo, capturing the red sand and gum trees in the background."},
            {time:"13:00", title:"Lunch Recommendations in South Perth", icon:"fa-utensils", note:"【South Perth Dining & 4.5+⭐, $$】Try two highly-rated family-friendly spots along Mends Street:<br>① <b>Secret Garden Cafe & Patisserie</b> (4.5⭐) - 300m from the zoo, featuring a tranquil garden courtyard, serving delicious burgers, salads, and artisan cakes;<br>② <b>Automatic</b> (4.6⭐) - 400m from the zoo, a lively Italian venue serving amazing Roman-style thin-crust wood-fired pizzas and fresh pastas, perfect for sharing."},
            {time:"14:30", title:"Stop 2: WA Museum Boola Bardip", icon:"fa-monument", note:"【Check-in & Expert Tips】Ferry back to Elizabeth Quay, then take the free Blue CAT bus directly to the Perth Cultural Centre. *Boola Bardip* means 'many stories' in the Noongar language. The museum is a masterpiece blending heritage buildings with hyper-modern halls. Kids will be mesmerized by the **Wild Life Gallery**, featuring a massive blue whale skeleton, giant dinosaur fossils, and interactive touchscreens.<br>【Photo Tips】Stand in the grand glass-and-steel atrium connecting the modern wing to the heritage brick building for a stunning architectural family portrait. Or shoot looking upward from beneath the massive dinosaur skeleton for a dramatic scale effect."},
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
