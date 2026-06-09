# -*- coding: utf-8 -*-
with open("scratch/enrich_all_itinerary.py", "r", encoding="utf-8") as f:
    content = f.read()

old_day_0_zh = """    { 
        id: 0, 
        date: "6月11日", 
        fullDate: "6月11日 (周四)", 
        title: "抵达珀斯 - 舒适调整", 
        location: "Perth", 
        type: "city", 
        stay: "Novotel Perth Murray Street", 
        driving: "机场接送约30分钟", 
        tags: ["精致早餐", "酒店泳池", "牛排晚餐"], 
        desc: "抵达西澳首府珀斯！第一天以轻松调整时差和恢复体力为主。入住位于市中心的Novotel酒店，漫步至美丽的天鹅河畔，打卡标志性的伊丽莎白码头，在古老的州府大楼享用精致美食，开启轻松愉悦的亲子假期。", 
        activities: [
            {time:"06:00", title:"抵达珀斯国际机场 (PER)", icon:"fa-plane-arrival", note:"【通关与交通指南】珀斯机场通关效率较高，但西澳对食品和动植物制品的检疫极其严格，请务必如实申报所有携带食品。出关后，在航站楼外的指定乘车点打车（推荐使用 Uber XL，空间宽敞，适合装载4人行李），约30分钟即可抵达市区酒店。"},
            {time:"09:00", title:"早餐：Petition Kitchen", icon:"fa-mug-hot", note:"【打卡点 & 导游推荐】位于由19世纪古建筑改建 of “州府大楼 (State Buildings)”内，这里是珀斯的历史核心。Petition Kitchen 空间设计现代与古朴交融，其招牌的慢炖肉本尼迪克蛋和精品意式咖啡极具口碑。<br>【拍照推荐】大楼内部的复古红砖墙和挑高拱门是绝佳的英伦风背景，用肖像模式拍摄咖啡拉花和餐食特写非常出片。<br>【另一高分推荐 (4.5+⭐, $$)】<b>Telegram Coffee</b> (4.6⭐) - 同样位于 State Buildings，由精品咖啡大师主理，外带一杯拿铁，配上一块刚烤好的黄油羊角面包，是开启珀斯慢生活的完美方式。"},
            {time:"11:00", title:"第一站：Elizabeth Quay (伊丽莎白码头)", icon:"fa-water", note:"【打卡点 & 历史背景】伊丽莎白码头是连接珀斯市区与天鹅河的现代化景观地标。打卡高耸的白色环形雕塑 <i>Spanda</i>（象征着水波与宇宙的涟漪）和标志性的双弧形人行天桥。孩子们可以在这里乘坐从意大利手工定制、充满童话色彩的威尼斯旋转木马 (Carousel，票价约$6)。<br>【拍照推荐】站在天桥顶端，以背后珀斯 CBD 的摩天大楼群为背景，能够拍出极具现代都市感与自然河景交融的大片；傍晚或清晨光线更佳。"},
            {time:"14:00", title:"办理入住 & 恒温泳池放松", icon:"fa-hotel", note:"【住宿推荐】办理入住 Novotel Perth Murray Street。酒店位置极其便利，房间现代舒适。下午带孩子去12楼的室外恒温泳池游个泳，在躺椅上晒晒西澳温暖的阳光，彻底洗去长途飞行的疲惫，为明天的精彩旅程储备体力。"},
            {time:"18:00", title:"晚餐：Meat & Wine Co 牛排馆", icon:"fa-utensils", note:"【美食打卡 & 预订建议】位于历史地标 Palace Hotel 古建筑内，是一家极高人气的牛排馆。其招牌的炭烤安格斯牛排和秘制肋排 (Ribs) 外焦里嫩，甜甜的酱汁深得孩子们喜爱。必须提早在官网预约。<br>【另一高分推荐 (4.5+⭐, $$)】<b>Grand Lane Fish House</b> (4.6⭐) - 隐藏在市区巷弄里的超人气炸鱼薯条店，主打新鲜的当地鲷鱼 (Snapper) 搭配香脆粗薯条，氛围轻松，分量扎实，非常适合家庭轻松享用。"}
        ]
    },"""

new_day_0_zh = """    { 
        id: 0, 
        date: "6月11日", 
        fullDate: "6月11日 (周四)", 
        title: "抵达珀斯 - 校园与蓝房子探索", 
        location: "Perth", 
        type: "city", 
        stay: "Novotel Perth Murray Street", 
        driving: "机场接送约30分钟", 
        mapImage: "images/june11_route_map.png", 
        tags: ["寄存行李", "西澳大学", "蓝房子", "恒温泳池", "精品早午餐", "高品质晚餐"], 
        desc: "第一天抵达珀斯后，我们先在市区Novotel酒店寄存行李，轻松开启首日的英伦复古校园与网红蓝房子之旅。中午在Broadway享用美味下午茶，下午回酒店办理入住并彻底休息，享受泳池与慢时光，晚上在CBD享用美味大餐，完成舒适的亲子第一站。", 
        activities: [
            {time:"06:00", title:"抵达珀斯国际机场 (PER)", icon:"fa-plane-arrival", note:"【通关与交通指南】珀斯机场通关效率较高，但西澳对食品和动植物制品的检疫极其严格，请务必如实申报所有携带食品。出关后，在航站楼外的指定乘车点打车（推荐使用 Uber XL，空间宽敞，适合装载4人行李），约30分钟即可抵达市区酒店。"},
            {time:"08:30", title:"抵达酒店寄存行李", icon:"fa-hotel", note:"【寄存行李】抵达 Novotel Perth Murray Street。虽然此时未到入住时间，但可以先在酒店前台寄存行李，轻装上阵开启第一天的市区游玩。"},
            {time:"09:30", title:"悠闲早午餐 (Brunch) 推荐", icon:"fa-mug-hot", note:"【市区高分 Brunch 推荐】推荐两家步行或短途可达的 4.5+⭐, $$ 高水准早午餐：<br>① <b>La Veen Coffee & Kitchen</b> (4.6⭐) - 距离酒店仅 300 米 (King St)，位于红砖复古历史建筑内，其招牌精品咖啡极其优秀，松脆土豆饼 (rosti) 和本尼迪克蛋深受欢迎；<br>② <b>Tiisch</b> (4.6⭐) - 距离酒店 500 米 (Milligan St)，充满绿意环绕的温室空间，招牌的抹茶薄饼 (Matcha Pancakes) 和创意炒蛋极其美味，非常适合拍照打卡。"},
            {time:"11:30", title:"第一站：西澳大学 (The University of Western Australia)", icon:"fa-tree", note:"【打卡点 & 历史背景】西澳大学 (UWA) 是澳洲著名的“砂岩学府”之一，建于1911年。打卡标志性的 <b>Winthrop Hall (温斯罗普大堂)</b>，其罗马式钟楼、宏伟的拱廊和波光粼粼的倒影池极具学院风情。孩子们会非常喜欢在大草坪上追逐，或者在太阳钟 (Sun Dial) 旁观察阴影的变化。<br>【拍照推荐】站在倒影池 (Reflection Pond) 前，使用广角镜头拍摄 Winthrop Hall 钟楼与蓝天在水池中的完美倒影。或者在古老的红砂岩拱廊下，利用拱门透光拍摄极极有英伦纵深感的人像照。<br>【交通建议】从 CBD 可在 St Georges Terrace 搭乘 950 路巴士直接抵达西澳大学，非常方便。"},
            {time:"13:00", title:"第二站：Crawley 蓝房子 (Blue Boat House)", icon:"fa-camera-retro", note:"【打卡点 & 风景介绍】从西澳大学步行约 10 分钟沿天鹅河畔向东慢步，即可抵达珀斯最具代表性的网红地标——<b>Crawley Blue Boat House</b>。这座静静矗立在波光粼粼的天鹅河面上的蓝色木屋，通过一条细长的木栈道与岸边相连，宛如童话世界般静谧。<br>【拍照推荐】<b>穿纯白色、鲜黄色或对比鲜明的亮色衣物拍照极其出片</b>。建议拍摄者站在岸边木栈道起点，被摄者走到栈道尽头或木屋门前，将蓝色小屋、延伸的栈道和天鹅河水平面平分画面，能够拍出极简又充满故事感的大片。中午至下午光线明亮，河水呈深蓝色，是经典机位。<br>【另一高分推荐 (4.5+⭐, $$)】<b>Something French on Broadway</b> (4.6⭐) - 位于西澳大学旁的 Broadway 街区，主打地道的手工法式可丽饼 (Crepes) 和沙拉，非常适合在蓝房子拍照后带孩子来享用下午茶或轻便午餐。"},
            {time:"15:00", title:"回酒店办理入住 & 休息放松", icon:"fa-bed", note:"【酒店休息】搭乘 950 巴士或 Uber 返回 Novotel Perth Murray Street 办理入住。回房间洗个热水澡，下午在房间小憩休息，避开一天中最热的时段。下午可以带孩子们去 12 楼的恒温泳池放松，消除长途飞行的时差疲劳，为后续的长途自驾储备体力。"},
            {time:"18:00", title:"晚餐推荐：Meat & Wine Co 牛排馆", icon:"fa-utensils", note:"【美食打卡 & 预订建议】推荐两家市区评分 4.5+ 且对家庭极其友好的晚餐餐厅（$$ 级别）：<br>① <b>Meat & Wine Co</b> (4.5⭐) - 位于 CBD 历史建筑 Palace Hotel 内，以高品质的炭火直烤安格斯牛排和秘制肋排 (Ribs) 著称，秘制酱汁非常迎合孩子的口味，需提前官网预约；<br>② <b>Grand Lane Fish House</b> (4.6⭐) - 距离酒店仅 450 米，是珀斯评分最高的经典炸鱼薯条店，主打极鲜炭烤或油炸当地鲷鱼 (Snapper) 搭配香脆薯条，服务热情，非常适合家庭轻松就餐。"}
        ]
    },"""

# Note: The target content has 'by' instead of 'of'? Wait! Let's check line 20 in the file:
# `{time:"09:00", title:"早餐：Petition Kitchen", icon:"fa-mug-hot", note:"【打卡点 & 导游推荐】位于由19世纪古建筑改建的“州府大楼 (State Buildings)”内，这里是珀斯的历史核心。Petition Kitchen 空间设计现代与古朴交融，其招牌的慢炖肉本尼迪克蛋和精品意式咖啡极具口碑...`
# Ah! It had '由19世纪古建筑改建的' (using '的' instead of 'of'). Let's make sure the string exactly matches by using a simple substring replace if needed.

if old_day_0_zh not in content:
    # Try a slightly more relaxed version by replacing the first few characters or direct replacement
    # Let's search for Petition Kitchen and just do a manual replace in Python
    pass

# Let's write a robust patch script that uses structured search and replace.
# Since we know the exact lines, let's load and print matches.
content_replaced = content.replace(old_day_0_zh, new_day_0_zh)
if content_replaced == content:
    # Let's try replacing from id: 0 to the closing bracket of activities:
    # We will search for id: 0 inside days_zh
    import re
    # We want to replace the first day block inside days_zh
    # Let's match the block starting with id: 0 inside days_zh
    # We can locate: 'days_zh = """    { \n        id: 0,' and end at the next '    },'
    pattern = r'(days_zh\s*=\s*"""\s*\{\s*\n\s*id:\s*0,.*?\n\s*\},)'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        matched_str = match.group(1)
        # We replace it
        new_matched_str = 'days_zh = """' + new_day_0_zh
        content = content.replace(matched_str, new_matched_str)
        print("Regex replaced day 0 zh successfully!")
    else:
        print("Regex match failed!")
else:
    content = content_replaced
    print("Direct replaced day 0 zh successfully!")

with open("scratch/enrich_all_itinerary.py", "w", encoding="utf-8") as f:
    f.write(content)
