const itineraryDataZh = [
    { 
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
    },
    { 
        id: 1, 
        date: "6月12日", 
        fullDate: "6月12日 (周五)", 
        title: "城市漫步 - 英伦风情与国王公园", 
        location: "Perth City", 
        type: "city", 
        stay: "Novotel Perth Murray Street", 
        driving: "市区步行", 
        mapImage: "images/perth_route_map.png",
        tags: ["特色早午餐", "都铎英伦风", "天鹅河畔", "Jacobs Ladder", "中东风晚宴"], 
        desc: "睡到自然醒，开启珀斯市区的慢行漫步之旅。游览充满英伦都铎风情的伦敦巷，漫步至天鹅河畔寻找野生黑天鹅，下午挑战著名的 Jacobs Ladder 阶梯，直达南半球最大的城市公园——国王公园，在夕阳下鸟瞰整座城市与河港的壮丽景致。", 
        activities: [
            {time:"10:30", title:"悠闲早午餐 (Brunch) 推荐", icon:"fa-mug-hot", note:"【今日晚起 & 专家推荐】推荐两家评分4.5+且价格中等($$)的高品质早午餐：<br>① <b>Tiisch</b> (4.6⭐) - 著名的“绿野仙踪”风格咖啡馆，招牌抹茶薄饼 (Matcha Pancakes) 和松露蘑菇吐司深受好评，环境清新治愈；<br>② <b>La Veen Coffee & Kitchen</b> (4.6⭐) - 坐落于复古红砖楼内，其手冲精品咖啡和创意全天候早午餐（如松脆土豆饼 rosti 配水波蛋、北非蛋）非常经典。<br>【拍照推荐】Tiisch 悬挂的绿植墙和木质餐椅是拍摄清新森系人像的绝佳背景。"},
            {time:"12:00", title:"第一站：London Court (伦敦巷)", icon:"fa-dungeon", note:"【打卡点 & 历史故事】建于1937年，由当时的黄金富商所建，完美重现了英国伊丽莎白时代的都铎风格街景。两端入口处均装有精致的古董机械大自鸣钟，北侧大钟每刻钟会有圣乔治与恶龙决斗的木偶表演，南侧则是骑士巡游。<br>【拍照推荐】站在狭窄的鹅卵石小巷中央，微微低角度仰拍，能将两侧精致的木梁、铁艺窗花和悬挂的红灯笼拍出复古哈利波特风的神秘感。"},
            {time:"13:30", title:"第二站：Elizabeth Quay (伊丽莎白港天桥)", icon:"fa-water", note:"【打卡点 & 风景介绍】从伦敦巷步行仅需5分钟即可返回伊丽莎白港。漫步踏上标志性的“大圆环”双弧桥，吹着天鹅河的清风。天鹅河是西澳大利亚的灵魂河道，原住民诺格人 (Noongar) 视其为创世神虹蛇 (Waugal) 的化身。<br>【拍照推荐】站在桥拱中央，侧身背对河道，可以拍出微风吹拂头发、蓝天碧水与游艇交织的极具度假感的肖像。"},
            {time:"15:00", title:"第三站：Swan River Side Walk (天鹅河畔步道)", icon:"fa-person-walking-dashed-line", note:"【打卡点 & 偶遇天鹅】沿着天鹅河畔向西慢行。这里有平整的散步道和绿茵茵的草坪，沿途设有许多木椅，非常适合坐下歇息。运气好的话，可以近距离看到优雅的野生黑天鹅 (Black Swan) 在岸边踱步或在水中优雅划行。<br>【拍照推荐】以宝蓝色的河水和远处横跨河面的狭窄大桥为背景，抓拍孩子们向黑天鹅招手或散步的自然瞬间。"},
            {time:"16:30", title:"第四站：Kings Park (挑战 Jacobs Ladder 与落日)", icon:"fa-mountain", note:"【打卡点 & 导游秘籍】走到悬崖高架桥下方，来到著名的 Jacobs Ladder 阶梯。顺着山壁的242级水泥台阶拾级而上，虽然爬完大腿有些酸痛，但这曾是珀斯市民健身的网红打卡点！到达顶部后，顺着路牌指引漫步进入国王公园 (Kings Park)。这是世界上最大的市区公园之一。漫步于高耸的柠檬桉树林荫道 (Fraser Avenue)，在观景台静候火红的落日沉入地平线，看整座珀斯市区的高楼大厦逐渐亮起霓虹灯，倒影在天鹅河上，美得动人心魄。<br>【背景故事】国王公园内种植了超过3000种西澳特有植物。这里有一棵树龄超过750年、重达36吨的巨型波巴布树 (Boab Tree)，是从3200公里外的金伯利荒野整体挖掘并运送过来的，堪称“镇园之宝”。"},
            {time:"18:30", title:"特色晚餐 (Dinner) 推荐", icon:"fa-utensils", note:"推荐两家评分4.5+且价格中等($$)的特色晚餐：<br>① <b>Bivouac Canteen & Bar</b> (4.6⭐) - 位于 Northbridge，主打特色中东分享菜（如慢烤八小时羊肩肉、香甜的鹰嘴豆泥配刚出炉的热饼），氛围温馨艺术；<br>② <b>Alba</b> (4.5⭐) - 位于 Yagan Square (Stories)，主打现代意式料理，其手工柴火比萨和奶油海鲜面分量十足，极其适合亲子家庭享用。"}
        ] 
    },
    { 
        id: 2, 
        date: "6月13日", 
        fullDate: "6月13日 (周六)", 
        title: "自驾启程 - 沙丘与尖峰", 
        location: "Jurien Bay", 
        type: "roadtrip", 
        stay: "Jurien Bay Tourist Park", 
        driving: "约2.5小时 (220km)", 
        mapImage: "images/jurien_bay_route_map.png",
        tags: ["自驾启程", "白沙滑沙", "龙虾大餐", "奇幻地貌", "落日海岸"], 
        desc: "提取租车，开启向北的印度洋自驾公路之旅！今日行程丰富动感，我们将驾车穿梭于海岸与荒漠之间，在兰斯林纯白沙丘体验飞速滑沙的爽快；在塞万提斯大快朵颐西澳顶级岩龙虾；下午探秘如火星般神奇的尖峰石阵；傍晚抵达朱里恩湾，漫步近在咫尺的落日沙滩，完美融合动感、美食与奇观。", 
        route: [{from:"Perth", to:"Lancelin", time:"1.5h"}, {from:"Lancelin", to:"Cervantes", time:"55m"}, {from:"Cervantes", to:"Jurien Bay", time:"25m"}], 
        activities: [
            {time:"08:00", title:"早起与早餐：Perth CBD 推荐", icon:"fa-coffee", note:"出发前在 Novotel 附近 500 米内享用优质早餐（推荐二选一，均为 4.5+⭐, $$）：<br>① <b>La Veen Coffee & Kitchen</b> (4.6⭐) - 距离酒店 300 米 (King St)，精品咖啡极赞，北非蛋与马铃薯饼非常优秀；<br>② <b>Croff Bakehouse</b> (4.5⭐) - 距离酒店 450 米 (Barrack St)，特色创意花式羊角面包面包房，适合快速堂食或外带。"},
            {time:"09:00", title:"租车公司取车并出发", icon:"fa-car", note:"前往租车公司办理手续，建议租用大型SUV以应对长途行李与沙丘路段。沿着印度洋公路一路向北，开启精彩自驾之旅！【驾驶小建议】西澳靠左行驶，主干道限速一般为110km/h，请保持安全车距。"},
            {time:"10:30", title:"兰斯林白沙丘 (Lancelin)", icon:"fa-wind", note:"【打卡点 & 玩乐指南】攀上高耸的雪白沙丘，体验从沙脊俯冲而下的速度与激情！孩子们玩得乐此不疲。可以租一块滑沙板（约$10/小时）。<br>【拍照推荐】穿着颜色鲜艳（如大红、亮黄或藏蓝）的衣服，在纯白的沙丘和宝蓝的天空映衬下，能够拍出极具视觉冲击力的极限运动感大片。<br>【旅行建议】沙丘反射阳光强烈且风沙大，<b>务必佩戴墨镜/防风镜并做好全方位防晒</b>；建议穿凉鞋或赤脚，方便清理沙子。"},
            {time:"12:30", title:"午餐：塞万提斯 (Cervantes) 推荐", icon:"fa-shrimp", note:"抵达海滨小镇塞万提斯，午餐推荐两家口碑出众的 $$ 级别餐厅：<br>① <b>Lobster Shack 龙虾工厂</b> (已在行程中提及, 4.1⭐) - 海滩旁大啖新鲜烤龙虾配香脆薯条，看着渔船进港，西澳风情拉满；<br>② <b>Cervantes Bar and Bistro</b> (4.5⭐) - 距离主路 350 米，主打当地野生海鲜拼盘、分量十足的牛排与意面，性价比极高。"},
            {time:"14:30", title:"尖峰石阵 (The Pinnacles)", icon:"fa-monument", note:"【打卡点 & 奇观背景】大自然万年风化雕琢而成的黄色石柱群，矗立在红土地上，如火星般奇幻。这里有数万根造型各异的石灰岩石柱。可以开车沿单向Loop环线慢行巡游，随停随拍，还可以下车步行漫步于石林间。<br>【拍照推荐】下午两三点阳光斜射，金黄色的石柱会投下长长的阴影，非常适合拍摄具有神秘氛围的逆光剪影照。<br>【旅行建议】防晒补水非常重要。<b>林间常有野生袋鼠和鸸鹋出没</b>，注意减速避让，请勿主动喂食。"},
            {time:"17:00", title:"入住朱里恩湾营地 & 栈桥散步", icon:"fa-bed", note:"入住著名的 Jurien Bay Tourist Park。营地设施完善，出门即是极美的绿松石沙滩，非常适合带孩子在栈桥散步，吹着海风看漫天瑰丽的日落晚霞。"},
            {time:"18:30", title:"晚餐：朱里恩湾 (Jurien Bay) 推荐", icon:"fa-utensils", note:"入住营地后，步行 500 米内推荐两家优质 $$ 晚餐餐厅（小镇营业晚餐的餐厅评分普遍在 4.1-4.4⭐）：<br>① <b>Sandpiper Tavern & Pizzeria</b> (4.3⭐) - 距离营地仅 200 米 (Roberts St)，招牌手工明火比萨及牛排，带露天啤酒花园，氛围轻松；<br>② <b>The Oneh Jurien</b> (4.4⭐) - 距离营地约 300 米 (Murray St)，主打越南河粉、泰式咖喱等亚洲融合菜，口味极其照顾亚洲胃。"}
        ] 
    },
    { 
        id: 3, 
        date: "6月14日", 
        fullDate: "6月14日 (周日)", 
        title: "粉红梦境 - 前往卡尔巴里", 
        location: "Kalbarri", 
        type: "roadtrip", 
        stay: "Kalbarri Murchison View Hotel", 
        driving: "约3.5小时 (300km)", 
        mapImage: "images/kalbarri_route_map.png",
        tags: ["横行怪树", "海滨纪念碑", "杰拉尔顿", "粉红湖", "罗曼蒂克", "海鲜晚宴"], 
        desc: "今日是自驾途中视觉盛宴的一天！从朱里恩湾北上，探秘被狂风吹袭至贴地生长的横行怪树；在杰拉尔顿山丘上俯瞰海湾，享用精致的码头午餐；随后在正午阳光折射最美时抵达粉红湖 Hutt Lagoon，欣赏粉色天空之镜的绝对浪漫；傍晚抵达卡尔巴里，在河畔日落中享用极鲜海鲜大餐。", 
        route: [{from:"Jurien Bay", to:"Geraldton", time:"2.5h"}, {from:"Geraldton", to:"Hutt Lagoon", time:"1h"}, {from:"Hutt Lagoon", to:"Kalbarri", time:"45m"}], 
        activities: [
            {time:"08:00", title:"早餐：朱里恩湾 (Jurien Bay) 推荐", icon:"fa-coffee", note:"出发前在营地 500 米内享用早餐与精品咖啡（均为 4.5+⭐, $$）：<br>① <b>Meraki Cafe</b> (4.6⭐) - 距离营地仅 200 米 (Roberts St)，精品咖啡与特色班尼迪克蛋很赞；<br>② <b>Screaming Mudlark Coffee Company</b> (4.5⭐) - 距离营地约 300 米 (Bashford St)，主打优质单源咖啡与热压三明治。"},
            {time:"09:15", title:"第一站：Greenough 横行怪树", icon:"fa-tree", note:"【打卡点 & 风景介绍】自驾途中路过停车拍照。因长期受强劲的南极印度洋信风吹袭，这里的红桉树竟然全部顺风横向贴地生长，堪称大自然顽强生命力的奇观。<br>【拍照推荐】站在那棵最著名的横卧树旁，将整棵树和广阔的牧场背景拉入镜头，可以拍出极具荒凉感的故事画面。路边设有安全停靠点，拍照时请注意避开围栏并注意安全。"},
            {time:"10:30", title:"第二站：杰拉尔顿纪念碑", icon:"fa-landmark", note:"【打卡点 & 历史背景】参观 HMAS Sydney II 纪念碑。其标志性的银色海鸥圆顶坐落于山丘之上，不仅具有深厚历史感，更是鸟瞰整个杰拉尔顿港湾蔚蓝海景的绝佳机位。<br>【拍照推荐】从纪念碑圆顶下方仰拍，将无数只展翅欲飞的“银色海鸥”与碧水蓝天同框，效果震撼。山顶风力大，<b>建议带上一件薄外套防风</b>。"},
            {time:"12:00", title:"午餐：杰拉尔顿 (Geraldton) 推荐", icon:"fa-hamburger", note:"自驾途经杰拉尔顿市区，在海滨 West End 享用美味午餐（均为 4.5+⭐, $$）：<br>① <b>Salt Dish</b> (4.6⭐) - 拥有精致复古小花园，主打创意西餐与手工意面，环境非常清雅；<br>② <b>Piper Lane Cafe</b> (4.6⭐) - 街头艺术风，主打健康沙拉碗、塔可与汉堡，咖啡品质极高，深受家庭喜爱。"},
            {time:"13:30", title:"第三站：粉红湖 (Hutt Lagoon)", icon:"fa-palette", note:"【重磅亮点 & 拍照指南】正午 11:00 至 14:00 是拍摄粉红湖的最佳时间，此时正午阳光直射，湖水折射出最浓郁迷人的玫瑰粉色！<br>【拍照推荐】<b>穿纯白色或鲜黄色衣服拍照极其出片</b>。避免踏入粘稠的盐滩边缘防止陷落；若有无人机，强烈建议在此起飞，能俯瞰粉红与淡绿相间的“天空之镜”拼图，震撼无比。<br>【科学故事】湖水呈粉色是因为水中含有大量的杜氏盐藻 (Dunaliella salina)，它产生丰富的胡萝卜素以抵御强烈的紫外线。"},
            {time:"16:30", title:"入住卡尔巴里酒店", icon:"fa-bed", note:"抵达卡尔巴里并入住 Kalbarri Murchison View Hotel。酒店地理位置极佳，马路对面就是静谧的默奇森河，可以稍微整理行李并休息，消除行车疲劳。"},
            {time:"18:00", title:"晚餐：卡尔巴里 (Kalbarri) 推荐", icon:"fa-utensils", note:"推荐两家步行或短途可达的 4.5+⭐, $$ 晚餐餐厅：<br>① <b>Finlay's Kalbarri</b> (4.5⭐, 已在行程中提及) - 距离酒店 600 米，极其出名的露天红土餐厅，提供自家精酿啤酒与极鲜的炭烤海鲜，氛围热闹野趣；<br>② <b>Upstairs Restaurant</b> (4.6⭐) - 距离酒店仅 120 米 (12 Grey St)，二楼阳台俯瞰河景，主打当地野生鲷鱼与高品质牛排。"}
        ] 
    },
    { 
        id: 4, 
        date: "6月15日", 
        fullDate: "6月15日 (周一)", 
        title: "卡尔巴里 - 峡谷奇观与河畔泛舟", 
        location: "Kalbarri", 
        type: "roadtrip", 
        stay: "Kalbarri Murchison View Hotel", 
        driving: "约1小时 (国家公园往返)", 
        mapImage: "images/kalbarri_national_park_route_map.png",
        tags: ["自然之窗", "天空步道", "红土峡谷", "河畔开小船", "鹈鹕同游", "炭烤海鲜"], 
        desc: "深入探秘卡尔巴里国家公园，这里拥有成型于4亿年前的红色砂岩峡谷。上午站在峭壁之巅俯瞰默奇森河的壮丽大拐弯，漫步悬空100米的天空步道；下午返回小镇，亲自驾驶小机动船在河口泛舟，与黑天鹅和鹈鹕亲密接触。傍晚在印度洋红崖欣赏绝美落日，晚上享受本地老字号的炭烤海鲜盛宴。", 
        activities: [
            {time:"08:00", title:"河畔早餐: The Gorges Café", icon:"fa-coffee", note:"【精品推荐】小镇最受欢迎的明星咖啡馆。推荐尝尝他们招牌的苹果金碎烤薄饼 (Apple Crumble Pancakes) 或红薯饼班尼迪克蛋。坐在户外露台，一边喝着香浓的精品咖啡，一边看清晨的默奇森河水波粼粼。"},
            {time:"09:15", title:"第一站: 自然之窗 (Nature's Window)", icon:"fa-camera-retro", note:"【奇观打卡 & 专家导览】这是一座由风雨侵蚀数百万年形成的天然红砂岩石拱门，恰好框住了下方默奇森河 (Murchison River) 的大拐弯峡谷。这里的砂岩展现出迷人的红黄相间条纹，是4亿年前古代潮汐和沉积留下的印记。<br>【拍照秘籍】清晨9:30前光线最柔和，此时逆光较弱。拍摄者可以站在石窗前侧的岩石上，被摄者站在拱门正中间，利用自然石框将人与远处的河谷完美锁在一个镜头里。<b>旅行建议：西澳冬季荒野苍蝇较多，进入峡谷前强烈建议佩戴防蝇网 (Fly Net)，并穿着防滑运动鞋，因为红砂岩表面较为光滑。</b>"},
            {time:"11:00", title:"第二站: 卡尔巴里天空步道 (Kalbarri Skywalk)", icon:"fa-bridge", note:"【震撼体验 & 文化背景】两个耗资数百万澳元打造的钢结构悬臂观警台，从峡谷边缘向外延伸，悬空于默奇森河上方100米处。走在镂空的钢网桥面上，低头直视万丈深渊，让人心跳加速！<br>【原住民故事】步道入口处布置了大量当地 Nanda 原住民艺术家的雕塑与壁画，诉说着这片土地在原住民神话中的创世故事。这里还设有用环保木材建造的咖啡凉亭，可以在此买个冰淇淋或冷饮，坐在树荫下静静欣赏这片荒凉而壮阔的古老大陆。"},
            {time:"12:30", title:"午餐野餐: Pelican Café 与小镇面包店", icon:"fa-bread-slice", note:"在 <b>The Pelican Café</b> 享用经典的汉堡与热压三明治，或者前往本地历史悠久的 <b>Kalbarri Bakery</b> 买上几只香喷喷的热肉派 (Meat Pies) 和甜点（如经典的香草片 Vanilla Slice）。带到小镇河畔的 Chinaman's Beach 沙滩椅上野餐。中午时分，巨大的野生鹈鹕常在岸边游弋，看它们张开大嘴抢食，十分逗趣。"},
            {time:"14:30", title:"第三站: 自驾机动船游览 (Hire a Tinny)", icon:"fa-ship", note:"【亲子力推 & 自由航行】无需任何船只驾照！在 Kalbarri Boat Hire 租一艘带遮阳篷的4人座铝合金小马达船 (Tinny)。工作讲解完油门和方向后，你就是船长！驾驶着它驶入平静宽阔的默奇森河口，孩子们可以坐在副驾驶位体验掌舵。顺着河道往上游开，沿途寻找优雅的黑天鹅家族和鹈鹕。水流平缓，非常安全，是全家人极其放松的黄金时光。"},
            {time:"17:00", title:"第四站: 红崖悬崖落日", icon:"fa-water", note:"【摄影胜地】驱车前往 Red Bluff 或 Island Rock 观景台。这里是南印度洋巨浪常年拍打形成的险峻海岸悬崖，在夕阳的金色余晖中，巨浪与红崖交相辉映，波澜壮阔。"},
            {time:"18:00", title:"丰盛晚餐推荐", icon:"fa-utensils", note:"推荐两家品质极佳的晚餐：<br>① <b>Finlay's Kalbarri</b> (4.5⭐) - 露天沙地里的传奇铁皮屋餐厅。一定要点当日新鲜捕捞的炭烤鲷鱼 (Snapper)，搭配他们自酿的卡尔巴里精酿啤酒，氛围野性而欢快；<br>② <b>Upstairs Restaurant</b> (4.6⭐) - 紧邻酒店，阳台位享有极佳河景。主打精致海鲜意大利面和当地烤牛排，服务一流。"}
        ] 
    },
    { 
        id: 5, 
        date: "6月16日", 
        fullDate: "6月16日 (周二)", 
        title: "北上世界遗产 - 贝壳海滩与老鹰崖", 
        location: "Monkey Mia", 
        type: "roadtrip", 
        stay: "RAC Monkey Mia Dolphin Resort", 
        driving: "约4.5小时 (400km)", 
        mapImage: "images/kalbarri_to_monkey_mia_map.png",
        tags: ["穿越荒原", "路口加油站", "纯白贝壳沙滩", "悬崖望远镜", "野生动物巡逻", "海边度假村", "海滩野餐", "荒野驿站"], 
        desc: "离开卡尔巴里，驾车穿越西澳最开阔的红土荒原北上，进入著名的世界自然遗产保护区——鲨鱼湾 (Shark Bay)。今日我们将赤脚踩在由亿万个微小贝壳组成的纯白沙滩上，在极高盐度的果冻海里轻松漂浮；随后在老鹰崖的悬崖栈道上俯瞰浅滩，用肉眼搜寻巡游的鲨鱼与大海龟。傍晚入住位于细软沙滩上的海豚度假村，开启极佳的沙滩度假时光。", 
        route: [{from:"Kalbarri", to:"Overlander", time:"2h50m"}, {from:"Overlander", to:"Monkey Mia", time:"1h40m"}], 
        activities: [
            {time:"09:00", title:"退房出发与内陆荒原自驾", icon:"fa-road", note:"告别卡尔巴里，沿着 Ajana Kalbarri Rd 接 1号公路北上。这是一段长达数百公里的旷野自驾，两旁是西澳标志性的矮灌木丛和红土地。行车途中注意避让可能横穿马路的野山羊和袋鼠。"},
            {time:"12:00", title:"午餐推荐：荒野驿站 or 海滩野餐", icon:"fa-shrimp", note:"【自驾午餐双重方案 & 专家推荐】沿途路途漫长，推荐以下两个午餐选择（均为 $$ 级别）：<br>① <b>海滩野餐（强烈推荐）</b>：出发前在卡尔巴里的 <b>Kalbarri Bakery</b> (4.3⭐) 购买新鲜出炉的热肉派 (Meat Pies)、三明治和蛋糕，带到贝壳海滩 (Shell Beach)，赤脚坐在雪白的贝壳堆上，看着Tiffany蓝的海水野餐，极其浪漫惬意；<br>② <b>Overlander Roadhouse 餐厅</b> (4.1⭐) - 位于 Shark Bay 转弯口，这是经典的澳洲内陆荒野驿站。提供分量十足的牛肉汉堡、炸薯条、新鲜三明治 and 咖啡，是在漫长自驾途中补充能量、加油休整的绝佳停靠点。"},
            {time:"13:30", title:"第一站: 贝壳海滩 (Shell Beach)", icon:"fa-gem", note:"【全球唯二奇观 & 科学背景】这片海滩长达 110公里，深达数米，完全由细小的白色心形贝壳（学名 <i>Fragum erugatum</i>）组成，没有任何沙子。由于海水盐度是普通海洋的两倍，人很容易在这里像死海一样漂浮。<br>【拍照秘籍 & 旅行技巧】<b>阳光反射极其刺眼，必须佩戴太阳镜！</b>穿着白色或鲜黄色衣物，躺在纯白贝壳上拍照极具震撼感。海滩配有淋浴区，起身后可冲洗盐分。"},
            {time:"14:30", title:"第二站: 老鹰崖 (Eagle Bluff)", icon:"fa-binoculars", note:"【悬崖探秘 & 野生动物搜寻】老鹰崖是一处耸立在德纳姆海湾 (Denham Sound) 边缘的红色断崖。悬崖边修有极其平整的木栈道，往下俯瞰，是浅至脚踝的清澈沙滩泥地。<br>【导游专业技巧】<b>这里是观察大型海洋动物的绝佳天然瞭望台！</b>顺着水流搜寻，你可以用肉眼轻松看到在浅滩中游弋巡游的黑鳍鲨、犁头鳐 (Shovel-nose Rays)、巨大的海龟，甚至偶尔能看到儒艮（海牛）缓缓游过。强烈建议带上双筒望远镜或长焦镜头，孩子们会像发现新大陆一样兴奋！"},
            {time:"16:30", title:"第三站: 入住海豚度假村与鸸鹋偶遇", icon:"fa-umbrella-beach", note:"抵达风景如画的 RAC Monkey Mia Dolphin Resort 并办理入住。度假村坐落在平静的拉格兰湾海滩边。这里生态极佳，经常有高大的野生鸸鹋一家在草地和沙滩上大摇大摆地散步，甚至会在你房间门口探头探脑。<br>【安全警示】<b>鸸鹋虽然可爱但属于大型野生鸟类，请与孩子一起保持安全距离，切勿拿食物去喂食，以免被它们锋利的嘴啄伤。</b>"},
            {time:"18:00", title:"度假村晚餐推荐", icon:"fa-utensils", note:"推荐度假村内两家风格迥异的餐饮，非常方便：<br>① <b>The Boughshed</b> (4.2⭐) - 度假村内的海景主餐厅，坐在木质露台上俯瞰海湾，提供精致的现代澳洲菜，主打当地海鱼与小羊排，晚风吹拂极其浪漫（需提前预订）；<br>② <b>Monkey Bar</b> (4.3⭐) - 露天啤酒花园风格，提供木火烤披萨、大汉堡和清凉扎啤，氛围极其轻松，适合孩子跑动。"}
        ] 
    },
    { 
        id: 6, 
        date: "6月17日", 
        fullDate: "6月17日 (周三)", 
        title: "海豚之约与海洋生物深度探索", 
        location: "Monkey Mia", 
        type: "roadtrip", 
        stay: "RAC Monkey Mia Dolphin Resort", 
        driving: "周边短途", 
        mapImage: "images/monkey_mia_local_map.png",
        tags: ["野生海豚", "喂食体验", "双体船出海", "海牛追踪", "古老海滨小镇", "生猛喂鲨鱼"], 
        desc: "与 Monkey Mia 的野生海豚亲密接触，随后搭乘双体帆船出海追踪神秘的海洋儒艮（美人鱼）；下午驾车探索古老的贝壳建筑小镇德纳姆，并在海洋公园近距离看生猛的鲨鱼喂食，是一次完美的海洋科普与生态奇观之旅。", 
        activities: [
            {time:"07:45", title:"第一站: 野生海豚喂食 (Dolphin Experience)", icon:"fa-fish", note:"【招牌必看 & 历史背景】在 Monkey Mia，野生印太瓶鼻海豚游到岸边互动的历史已达数十年。每天清晨7:45，海豚会准时游到拉格兰湾的浅水区。护林员会向大家讲解海豚的习性，并挑选几位幸运观众亲手投喂小鱼。<br>【注意事项】<b>必须听从护林员指挥</b>，不要试图去触摸海豚，站在水里拍照即可。上午通常有2-3次喂食机会，7:45是第一次。"},
            {time:"10:00", title:"第二站: Aristocat 2 双体帆船巡游", icon:"fa-sailboat", note:"【亲子推荐】搭乘双体风帆船出海，在绿松石般的海水上巡航。这里是世界上最大的儒艮 (Dugong，海牛) 栖息地之一，有90%的几率能看到它们，还能看到野生海豚、海龟和巨大的魔鬼鱼在船底穿梭。"},
            {time:"13:00", title:"午餐: 德纳姆 (Denham) 港口推荐", icon:"fa-burger", note:"驱车25分钟前往德纳姆小镇，推荐两家优质 $$ 港景餐厅：<br>① <b>Shark Bay Hotel</b> (4.3⭐) - 拥有百年历史的澳洲最西端酒吧餐厅，坐在露台上边吃香脆炸鱼薯条、澳洲大牛肉汉堡，边欣赏平静的内海风光；<br>② <b>Oceans Restaurant</b> (4.4⭐) - 主打地道的当地海鲜杂烩、意面和家庭烤牛排，配有儿童菜单，对家庭非常友好。"},
            {time:"14:30", title:"第三站: 鲨鱼湾海洋公园 (Ocean Park Aquarium)", icon:"fa-skull-crossbones", note:"由海洋生物学家带领的精品水族馆导览。孩子们能亲眼目睹生猛的鲨鱼喂食表演，近距离观察海蛇、剧毒的石头鱼和美丽的海马，互动感极强，非常有教育意义。"},
            {time:"17:00", title:"第四站: 德纳姆贝壳建筑与落日", icon:"fa-hotel", note:"散步经过德纳姆街头，参观 <b>The Old Pearler</b> 等用纯贝壳砖砌成的罕见老房子。傍晚坐在德纳姆海滨长椅上，看着火红的太阳缓缓沉入鲨鱼湾蔚蓝的水面，静谧祥和。"},
            {time:"18:30", title:"特色晚餐: 贝壳砖老店与度假村酒吧", icon:"fa-utensils", note:"推荐晚餐：<br>① <b>The Old Pearler Restaurant</b> (4.6⭐) - 【极力推介】必须提前预约！用贝壳石块砌成的小屋餐厅，菜品极其精致，他们的法式红酒炖海鲜和特色烤鱼是全澳一绝，非常有仪式感；<br>② <b>Monkey Bar</b> (4.3⭐) - 回到度假村，在沙滩旁的营地啤酒花园点上一份披萨配薯条，孩子们在海边玩沙，家长在旁边喝一杯，极为松弛。"}
        ] 
    },
    { 
        id: 7, 
        date: "6月18日", 
        fullDate: "6月18日 (周四)", 
        title: "南下折返 - 杰拉尔顿海滨之夜", 
        location: "Geraldton", 
        type: "roadtrip", 
        stay: "African Reef Resort", 
        driving: "约4.5小时 (430km)", 
        mapImage: "images/monkey_mia_to_geraldton_map.png",
        tags: ["返程南下", "野生袋鼠", "海滨大游乐场", "滑索荡秋千", "落日精酿啤酒", "码头海景晚餐", "剪羊毛棚咖啡"], 
        desc: "告别美丽的猴子米亚海豚，驾车开始南下折返旅程。中途在荒漠加油站休息，下午抵达西澳第二大城市杰拉尔顿。带孩子在海滨超大的木质游乐场痛快放电，傍晚在码头吹着海风，享用美味的精酿啤酒与极鲜的炭烤龙虾晚餐。", 
        activities: [
            {time:"08:30", title:"告别海豚与出发早餐", icon:"fa-coffee", note:"出发前在度假村 <b>The Boughshed</b> 吃个饱饱的西式早餐，或者在德纳姆的 <b>Shark Bay Bakery</b> 打包新鲜热乎的小麦肉派和香浓咖啡带上车。随后驾车南下。"},
            {time:"11:00", title:"中途休息加油", icon:"fa-gas-pump", note:"再次在 1号公路旁的 <b>Billabong Roadhouse</b> 停靠加油。这里提供冷饮、零食和干净的休息区。自驾路途漫长，在天桉树下伸展下身体，缓解疲劳非常必要。<b>请注意：西澳内陆野生动物多，行车途中务必注意避让路边的野山羊和可能突然跃出的袋鼠。</b>"},
            {time:"12:30", title:"午餐推荐：历史小镇 or 杰拉尔顿港口", icon:"fa-utensils", note:"【自驾午餐双重方案】从猴子米亚返回杰拉尔顿途中，中午时分有两个完美的午餐去处（均为 4.5+⭐, $$）：<br>① <b>The Shearing Shed Café</b> (4.5⭐) - 位于历史小镇 Northampton，是一家由老剪羊毛棚改建的特色乡村咖啡馆，主打超大分量的手作汉堡、特色帕尼尼以及精品咖啡，乡村风情拉满；<br>② <b>Salt Dish</b> (4.6⭐) - 抵达杰拉尔顿后享用，位于市中心，拥有绿意盎然的复古小花园，招牌的手工意面和创意沙拉极其精致，给疲惫的旅途带来一份优雅的慰藉。"},
            {time:"15:00", title:"抵达杰拉尔顿并办理入住", icon:"fa-hotel", note:"入住 African Reef Resort，稍作整理。酒店紧邻海滩，环境优美。"},
            {time:"16:00", title:"第一站: Foreshore Playground 游乐场", icon:"fa-child-reaching", note:"【亲子力推】杰拉尔顿标志性的巨型海滨乐园。这里有巨大的原木城堡、超长滑索 (Flying Fox)、攀爬网 and 儿童水上乐园，安全又好玩。孩子们在此疯狂放电，家长可以在旁边的长椅上欣赏港湾落日。"},
            {time:"18:00", title:"海滨晚餐推荐", icon:"fa-utensils", note:"推荐两家品质一流且距离极近的 $$ 餐厅：<br>① <b>Cutler & Smith</b> (4.5⭐) - 氛围极佳的潮流 Bistro 餐厅，提供当地精酿啤酒，他们的招牌软壳蟹、慢烤牛肋排味道惊艳，家庭友好度极高；<br>② <b>Skeetas Restaurant Bar & Cafe</b> (4.4⭐) - 位于 Marina 游艇码头，主打海景佐餐。强烈推荐点当地捕捞的岩龙虾 (Rock Lobster) 和海鲜什锦盘，坐在露天座位看游艇起伏，十分享受。"}
        ] 
    },
    { 
        id: 8, 
        date: "6月19日", 
        fullDate: "6月19日 (周五)", 
        title: "重返珀斯 - 历史怪树与绿松石栈桥", 
        location: "Perth", 
        type: "roadtrip", 
        stay: "Holiday Inn Perth City Centre By IHG", 
        driving: "约4.5小时 (420km)", 
        mapImage: "images/geraldton_to_perth_map.png",
        tags: ["古老无花果树", "绿松石港湾", "海滩海鱼篮", "市区还车", "重返都市", "牛排大餐"], 
        desc: "完成自驾的最后一程！途经充满英伦小镇风情的董加拉，打卡巨大的百年无花果树；在朱里恩湾栈桥旁享用最后的海岸午餐；下午抵达珀斯还车，入住市中心位置极其便利的 Holiday Inn 酒店。晚上在市中心享用美味的牛排盛宴，重返精彩的都市生活。", 
        route: [{from:"Geraldton", to:"Dongara", time:"45m"}, {from:"Dongara", to:"Jurien Bay", time:"1h10m"}, {from:"Jurien Bay", to:"Perth", time:"2.5h"}], 
        activities: [
            {time:"08:00", title:"早起与杰拉尔顿早餐", icon:"fa-coffee", note:"出发前在杰拉尔顿 Marine Terrace 吃一顿元气早餐（推荐二选一，均为 4.6⭐, $$）：<br>① <b>Salt Dish</b> (4.6⭐) - 绿意盎然的复古小花园，招牌法式吐司和班尼迪克蛋极具创意；<br>② <b>Piper Lane Cafe</b> (4.6⭐) - 时尚艺术风，精品拿铁、和风煎饼 (Okonomiyaki) 以及各种花式三明治味道绝佳。吃完退房出发。"},
            {time:"09:45", title:"第一站: 董加拉 (Dongara) 百年 fig tree 漫步", icon:"fa-tree", note:"【打卡点 & 历史背景】自驾约45分钟抵达董加拉小镇。主街两旁种满了建于1906年的巨型莫顿湾无花果树 (Morton Bay Fig Trees)，林荫蔽日，极其壮观。推荐在 <b>Poppies by the Park</b> (4.5⭐) 咖啡馆树下喝一杯咖啡，吃个小点心，感受宁静悠闲的澳洲小镇风情。<br>【拍照推荐】站在高大粗壮的百年无花果树根盘绕处，使用人像模式，能拍出宛如爱丽丝仙境般梦幻的童话感照片。"},
            {time:"12:00", title:"第二站: 朱里恩湾栈桥午餐 (Jurien Bay Jetty)", icon:"fa-umbrella-beach", note:"【打卡点 & 风景介绍】重温绿松石湾的绝美海景，在码头栈桥散散步。午餐推荐在 <b>Jurien Bay Jetty Cafe</b> (4.2⭐) 享用分量十足的海鲜炸物篮 (Seafood Basket) 或爆浆牛肉汉堡，感受海风吹拂的松弛。"},
            {time:"16:00", title:"第三站: 抵达珀斯 & 还车", icon:"fa-key", note:"回到珀斯市区。还车前务必在市区附近的加油站将油箱加满（以免租车公司扣取高额加油手续费）。办理好还车手续，步行前往入住 Holiday Inn Perth City Centre。"},
            {time:"18:30", title:"都市重逢晚餐推荐", icon:"fa-utensils", note:"重回市区，推荐两家 CBD 评分 4.5+ 且对家庭极其友好的晚餐餐厅：<br>① <b>Meat & Wine Co</b> (4.5⭐) - 位于历史地标建筑内，炭火直烤的高品质安格斯牛排与秘制猪肋排香气四溢，非常受孩子们欢迎（需提前预订）；<br>② <b>Ribs & Burgers Perth</b> (4.4⭐) - 轻松欢快的现代美式餐厅，主打慢火烟熏肋排和手工精品汉堡，性价比极高，无需预约。"}
        ] 
    },
    { 
        id: 9, 
        date: "6月20日", 
        fullDate: "6月20日 (周六)", 
        title: "珀斯都市慢生活", 
        location: "Perth City", 
        type: "city", 
        stay: "Holiday Inn Perth City Centre By IHG", 
        driving: "无", 
        tags: ["Brunch", "购物", "热巧克力"], 
        desc: "经历了一周丰富的自驾行程，今天我们在市区彻底放松，睡到自然醒。探索隐藏在街巷里的极品Brunch，漫步在繁华的步行街与复古商廊，享用著名的精品手工巧克力下午茶，傍晚去地标性的州府大楼享用殿堂级泰餐，享受轻松闲适的都市假日。", 
        activities: [
            {time:"10:00", title:"悠闲 Brunch 推荐", icon:"fa-mug-hot", note:"【专家推荐 & 4.5+⭐, $$】享受没有车马劳顿的一天，推荐两家高分早午餐：<br>① <b>Arrival Hall</b> (4.6⭐) - 位于 East Perth，是一家将北欧设计概念店与咖啡馆完美融合的时尚空间。招牌的牛油果吐司和松露炒蛋摆盘如艺术品，精品手冲咖啡香气四溢；<br>② <b>Hylin</b> (4.5⭐) - 位于 West Leederville，在巨大的悬铃木树荫下，工业风设计，其招牌的奶油枫糖培根班尼迪克蛋和香醇拿铁深受欢迎。<br>【拍照推荐】Arrival Hall 的日光中庭和极简陈列是拍摄时尚生活感照片的完美场所。"},
            {time:"12:00", title:"第一站：珀斯市区购物时光", icon:"fa-bag-shopping", note:"【打卡点 & 历史背景】步行游览 Murray Street Mall 和 Hay Street Mall 步行街，它们被多栋历史建筑环绕。您可以逛逛地标性的 <b>Perth GPO (老邮局)</b> 和建于1897年的 <b>Piccadilly Arcade (皮卡迪利商廊)</b>，感受爱德华时代的复古优雅。若想大肆采买，可以坐免费的黄猫巴士 (Yellow CAT) 直达南半球最大的奥特莱斯 <b>Watertown Brand Outlet</b>。<br>【拍照推荐】Piccadilly Arcade 内部精致的彩色玻璃天顶和大理石地面，适合开启手机的广角镜头，自下而上拍摄复古商廊对称的建筑美感。"},
            {time:"15:00", title:"第二站：Koko Black 奢华下午茶", icon:"fa-cake-candles", note:"【打卡点 & 巧克力文化】Koko Black 是澳洲殿堂级的手工巧克力品牌。一定要点他们标志性的 <b>Hot Chocolate Flight (热巧克力品鉴盘)</b>，您可以一次性品尝到从牛奶巧克力到80%单源黑巧克力的渐进风味，搭配一块香浓的松露巧克力或手工蛋糕，幸福感爆棚！孩子们可以点一杯温和的巧克力奶泡 (Babychino)。"},
            {time:"18:00", title:"特色晚餐：Long Chim 泰式街头美食", icon:"fa-pepper-hot", note:"【美食打卡 & 4.5+⭐, $$】推荐两家市区极赞晚餐：<br>① <b>Long Chim</b> (4.5⭐) - 隐藏在 State Buildings 地下的神秘餐厅，由米其林传奇主厨 David Thompson 创办，将曼谷街头的火辣辛香完美还原，其招牌的炭火红咖喱鸭和泰式炒河粉让人欲罢不能；<br>② <b>Ribs & Burgers Perth</b> (4.4⭐) - 距离 Holiday Inn 仅 200 米，主打慢火烟熏猪肋排和手工精品汉堡，氛围极其轻松欢快，无需预约，深受孩子们喜爱。<br>【拍照推荐】Long Chim 的地下室装饰着色彩斑斓的街头涂鸦，在幽暗昏黄的霓虹灯光下，具有极强的胶片复古感。"}
        ] 
    },
        { 
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
    },
    { 
        id: 11, 
        date: "6月22日", 
        fullDate: "6月22日 (周一)", 
        title: "最后的告别", 
        location: "Perth Airport", 
        type: "city", 
        stay: "飞机上", 
        driving: "前往机场", 
        tags: ["屋顶酒吧", "返程"], 
        desc: "在珀斯的最后一天。整理行李并退房，在市区进行最后的漫步与手信采购。中午在天鹅河畔的高空屋顶酒吧享用美食与美酒，下午在现代化的商区度过轻松时光，傍晚启程前往机场，带着满满的西澳回忆踏上返程航班。", 
        activities: [
            {time:"11:00", title:"第一站：天鹅河畔最后的重逢 (The Reveley)", icon:"fa-martini-glass", note:"【打卡点 & 4.5+⭐, $$】退房并寄存行李后，前往伊丽莎白码头旁的 <b>The Reveley</b>。这是一家拥有三层空间的时尚景观餐厅。推荐在其中层的餐厅或顶层露天屋顶酒吧享用一份轻食午餐或精致下午茶。<br>【拍照推荐】坐在顶楼的露天卡座，可以将天鹅河上的白帆、往来的渡轮以及横跨河面的伊丽莎白桥尽收眼底。用长焦镜头拍摄孩子们靠在玻璃护栏旁、背景是波光粼粼河面的照片，高级感十足。<br>【另一高分推荐 (4.5+⭐, $$)】<b>Petition Kitchen</b> (4.5⭐) - 再次前往 State Buildings 享用他们极赞的午餐菜品，如慢煮三文鱼或创意沙拉，水准极其稳定。"},
            {time:"14:00", title:"第二站：市区自由漫游与 Raine Square 采购", icon:"fa-film", note:"【打卡点 & 购物指南】利用最后的时间在珀斯 CBD 进行手信采购。推荐前往 Raine Square 或 Murray St 步行街，购买西澳特产的 **Jarrah Honey (红桉树蜂蜜，其活性媲美麦卢卡)**、羊毛制品或澳洲本土品牌的衣物。如果时间充裕，还可以在 Raine Square 的现代化影院看场电影，或者带孩子在室内的咖啡馆吃个冰淇淋，享受悠闲的午后时光。"},
            {time:"20:30", title:"送机：前往珀斯机场 (PER)", icon:"fa-taxi", note:"【送机指南】返回酒店取行李，乘坐 Uber XL（约30分钟）前往珀斯国际机场 T1 航站楼。由于国际航班建议提早3小时抵达，这里有充足的时间办理退税 (TRS)、托运行李以及在免税店采购最后一波西澳葡萄酒或奥宝 (Opal) 纪念品。"},
            {time:"01:00", title:"航班起飞", icon:"fa-plane-departure", note:"搭乘凌晨 01:00 起飞的红眼航班，孩子们可以在飞机上安稳睡上一觉，明早即可抵达新加坡。"}
        ] 
    },
    { 
        id: 12, 
        date: "6月23日", 
        fullDate: "6月23日 (周二)", 
        title: "抵达新加坡", 
        location: "Singapore", 
        type: "home", 
        stay: "温暖的家", 
        driving: "-", 
        tags: ["回家"], 
        desc: "清晨安抵新加坡，返回温馨的家，结束难忘的西澳珊瑚海岸亲子自驾之旅。", 
        activities: [
            {time:"06:30", title:"抵达新加坡樟宜机场", icon:"fa-home", note:"【欢迎回家】班机于清晨 06:30 降落在新加坡樟宜机场。如果时间充裕，可以顺道去 Jewel (星耀樟宜) 拍摄壮丽的 <b>Rain Vortex (室内雨漩涡瀑布)</b>。40米高的水流从穹顶倾泻而下，在晨光下云雾缭绕，为这段完美的西澳之旅画上圆满的句号。"}
        ] 
    }
];

const itineraryDataEn = [
    { 
        id: 0, 
        date: "Jun 11", 
        fullDate: "Jun 11 (Thu)", 
        title: "Arrive in Perth - UWA & Blue Boat House", 
        location: "Perth", 
        type: "city", 
        stay: "Novotel Perth Murray Street", 
        driving: "Airport transfer ~30 mins", 
        mapImage: "images/june11_route_map.png", 
        tags: ["Drop Luggage", "UWA", "Blue Boat House", "Heated Pool", "Fine Brunch", "Fine Dinner"], 
        desc: "After arriving in Perth, drop your bags at the Novotel hotel and start a relaxed exploration of the prestigious University of Western Australia and the iconic Blue Boat House. Enjoy a French crepe lunch on Broadway, return to the hotel for an afternoon rest and pool relaxation, and round off your first day with a premium steak dinner in the CBD.", 
        activities: [
            {time:"06:00", title:"Arrive at Perth International Airport (PER)", icon:"fa-plane-arrival", note:"【Arrival & Transfer Guide】After clearing customs (note: WA has extremely strict biosecurity laws, so declare all food items honestly), proceed to the designated rideshare pick-up point outside the terminal. Book an Uber XL (ideal for 4 passengers with large luggage) to head into the city, taking approximately 30 minutes."},
            {time:"08:30", title:"Drop Luggage at Hotel", icon:"fa-hotel", note:"【Drop luggage】Arrive at Novotel Perth Murray Street. While formal check-in is in the afternoon, you can drop your bags at the concierge counter and head out light for your first day of city exploration."},
            {time:"09:30", title:"Leisurely Brunch Recommendations", icon:"fa-mug-hot", note:"【CBD Brunch Recommendations】Recommend two highly-rated 4.5+ star ($$) options near the hotel:<br>① <b>La Veen Coffee & Kitchen</b> (4.6⭐) - 300m from Novotel, set in a historic red-brick building, famous for premium specialty coffee, potato rosti, and shakshuka;<br>② <b>Tiisch</b> (4.6⭐) - 500m from Novotel, a plant-filled greenhouse oasis famous for creative scrambled eggs and matcha pancakes, perfect for photos."},
            {time:"11:30", title:"Stop 1: The University of Western Australia (UWA)", icon:"fa-tree", note:"【Check-in & History】Established in 1911, UWA is a prestigious sandstone university. Explore the iconic <b>Winthrop Hall</b>, featuring a Romanesque clock tower, grand red sandstone arcades, and a beautiful reflection pond. Kids will love running around the manicured lawns and checking out the historical Sun Dial.<br>【Photo Tips】Stand directly in front of the Reflection Pond and use a wide-angle lens to capture the mirror reflection of the tower and the blue sky. The historic arcades also offer amazing depth and soft lighting for family portraits.<br>【Transit Guide】Take Bus 950 from St Georges Terrace directly to the campus, a quick 10-minute ride."},
            {time:"13:00", title:"Stop 2: Blue Boat House (Crawley)", icon:"fa-camera-retro", note: "【Check-in & Scenery】A short 10-minute walk east from UWA campus along the Swan River brings you to Perth's most photographed landmark—the **Crawley Blue Boat House**. Standing on wooden piles in the turquoise river and connected to the shore by a narrow jetty, it looks like a scene from a fairy tale.<br>【Photo Tips】<b>Wear white, yellow, or bright clothing for maximum contrast</b>. Shoot from the shore at the start of the jetty, framing the blue house and the boardwalk centered against the blue water. Best shot under the bright midday or early afternoon sun.<br>【Alternative 4.5+⭐, $$ Option】<b>Something French on Broadway</b> (4.6⭐) - A short walk from the campus on Broadway, serving authentic handmade French crepes, galettes, and salads, perfect for an afternoon tea or light lunch after photos."},
            {time:"15:00", title:"Hotel Check-in & Rest", icon:"fa-bed", note: "【Hotel Check-in】Take Bus 950 or an Uber back to Novotel Perth Murray Street to check in. Take a shower and rest during the afternoon. You can also take the kids to the heated outdoor pool on the 12th floor to shake off jet lag and prepare for the road trip ahead."},
            {time:"18:00", title:"Dinner Recommendations", icon:"fa-utensils", note: "【Culinary Highlights】Recommend two highly-rated family-friendly CBD options ($$):<br>① <b>Meat & Wine Co</b> (4.5⭐) - Housed in the heritage Palace Hotel, serving premium charcoal-grilled steaks and sticky ribs that kids love (bookings essential);<br>② <b>Grand Lane Fish House</b> (4.6⭐) - 450m from Novotel, serving Perth's best crispy battered local snapper and hot chips in a lively, casual lane atmosphere."}
        ]
    },
    { 
        id: 1, 
        date: "Jun 12", 
        fullDate: "Jun 12 (Fri)", 
        title: "City Walk - British Charm & Kings Park", 
        location: "Perth City", 
        type: "city", 
        stay: "Novotel Perth Murray Street", 
        driving: "Walking in CBD", 
        mapImage: "images/perth_route_map.png",
        tags: ["Fine Brunch", "Tudor Style", "River Walk", "Jacobs Ladder", "Middle Eastern Dinner"], 
        desc: "Sleep in and embark on a signature Perth walking tour. Wander through the Tudor-style London Court, trace the scenic Swan River banks to spot wild black swans, climb the legendary Jacobs Ladder, and spend the afternoon at Kings Park—one of the world's largest inner-city parks—to capture a breathtaking sunset overlooking the glowing city skyline.", 
        activities: [
            {time:"10:30", title:"Leisurely Brunch Recommendations", icon:"fa-mug-hot", note:"【Sleep-in Option】Try two highly-rated 4.5+ star ($$) options:<br>① <b>Tiisch</b> (4.6⭐) - A gorgeous, jungle-themed cafe famous for its 'matcha pancakes' and truffle mushrooms on toast in a leafy, glasshouse-like setting;<br>② <b>La Veen Coffee & Kitchen</b> (4.6⭐) - Set in a historic brick building, serving artisanal coffee and creative staples like potato rosti with poached eggs and shakshuka.<br>【Photo Tips】The hanging lush greenery wall at Tiisch makes a beautiful background for lifestyle portraits."},
            {time:"12:00", title:"Stop 1: London Court Tudor Walkway", icon:"fa-dungeon", note:"【Check-in & History】Built in 1937 by a wealthy gold financier to recreate an Elizabethan streetscape. Look out for the clock tower at each entrance: the northern clock shows St George fighting the dragon, while the southern clock features marching knights.<br>【Photo Tips】Stand in the center of the narrow cobblestone alleyway and shoot from a low angle. The wooden beams, wrought-iron window grills, and hanging lanterns evoke a magical, Harry Potter-esque vibe."},
            {time:"13:30", title:"Stop 2: Elizabeth Quay & Pedestrian Bridge", icon:"fa-water", note:"【Check-in & Scenery】A short 5-minute walk back to Elizabeth Quay. Stroll across the iconic double-arched bridge. Feel the cool breeze of the Swan River (Derbarl Yerrigan to the local Noongar people, who believe it was created by the sacred Rainbow Serpent Waugal).<br>【Photo Tips】Frame a portrait from the middle of the bridge arch, capturing the blue water and sailboats against the modern skyscrapers."},
            {time:"15:00", title:"Stop 3: Swan River Side Walk", icon:"fa-person-walking-dashed-line", note:"【Check-in & Wildlife】Walk westward along the river path. Bordered by manicured grass lawns and shady trees, it features several park benches. Keep an eye out for Perth's native mascot, the majestic wild Black Swan, waddling on the shore or swimming gracefully in the river.<br>【Photo Tips】Capture the kids interacting naturally with the grass and river, using the sparkling river as a bright backdrop."},
            {time:"16:30", title:"Stop 4: Kings Park (Jacobs Ladder & Sunset)", icon:"fa-mountain", note:"【Check-in & Expert Tips】Navigate to Jacobs Ladder at the base of the hill and climb the 242 concrete steps. It is a famous fitness challenge in Perth! Once at the top, follow the signs to enter Kings Park. Walk down Fraser Avenue, lined with towering lemon-scented gum trees, and watch the spectacular sunset paint the sky red and orange as the city lights reflect on the river.<br>【Background Story】Kings Park is larger than New York's Central Park. It is home to a massive 750-year-old, 36-tonne Boab Tree transported 3,200 km from the remote Kimberley region in 2008 as a conservation miracle."},
            {time:"18:30", title:"Dinner Recommendations", icon:"fa-utensils", note:"Recommend two 4.5+ star ($$) options:<br>① <b>Bivouac Canteen & Bar</b> (4.6⭐) - Located in Northbridge, offering artsy Middle Eastern sharing plates like 8-hour slow-cooked lamb shoulder and warm flatbread with creamy hummus;<br>② <b>Alba</b> (4.5⭐) - In Yagan Square (Stories), serving premium wood-fired pizzas and homemade pastas in a vibrant family-friendly dining hall."}
        ] 
    },
    { 
        id: 2, 
        date: "Jun 13", 
        fullDate: "Jun 13 (Sat)", 
        title: "Road Trip Begins - Sand Dunes & Pinnacles", 
        location: "Jurien Bay", 
        type: "roadtrip", 
        stay: "Jurien Bay Tourist Park", 
        driving: "~2.5 hours (220km)", 
        mapImage: "images/jurien_bay_route_map.png",
        tags: ["Road Trip", "Sandboarding", "Lobster Feast", "Martian Landscape", "Sunset Coast"], 
        desc: "Pick up the rental car and head north along the scenic Indian Ocean Drive! Today we drive through beaches and deserts, experience thrilling sandboarding in Lancelin, enjoy fresh lobsters in Cervantes, explore the mystical Pinnacles Desert, and arrive at Jurien Bay to walk along the sunset beach.", 
        route: [{from:"Perth", to:"Lancelin", time:"1.5h"}, {from:"Lancelin", to:"Cervantes", time:"55m"}, {from:"Cervantes", to:"Jurien Bay", time:"25m"}], 
        activities: [
            {time:"08:00", title:"Breakfast in Perth CBD", icon:"fa-coffee", note:"Recommend two 4.5+ star, $$ options within 500m of Novotel:<br>① <b>La Veen Coffee & Kitchen</b> (4.6⭐) - 300m away, exceptional coffee, Shakshuka and potato rosti are great;<br>② <b>Croff Bakehouse</b> (4.5⭐) - 450m away, famous for creative croissants (e.g., salted egg yolk), perfect for a quick bite or takeaway."},
            {time:"09:00", title:"Car Rental Pick-up & Start", icon:"fa-car", note:"Head to the rental office. A large SUV is recommended for luggage and long drives. Drive north along the Indian Ocean Drive! Keep left, general highway limit is 110km/h."},
            {time:"10:30", title:"Lancelin Sand Dunes", icon:"fa-wind", note:"【Check-in & Fun Activities】Climb to the summit of the sweeping white dunes and experience the thrill of sandboarding down the steep slopes! Rent a board (~$10/hr). Kids absolutely love this.<br>【Photo Tips】Wear bright, contrasting colors (such as red, bright yellow, or navy blue). The pure white sand and deep blue sky provide a stunning natural canvas for action shots.<br>【Safety Tips】The dunes reflect intense sunlight and can be windy. <b>Always wear sunglasses/goggles and apply sunscreen</b>; going barefoot or wearing sandals makes cleaning sand much easier."},
            {time:"12:30", title:"Lunch in Cervantes", icon:"fa-shrimp", note:"Two great $$ options:<br>① <b>Lobster Shack</b> (4.1⭐, mentioned in itinerary) - Enjoy fresh grilled rock lobster and chips by the beach, watching fishing boats come in;<br>② <b>Cervantes Bar and Bistro</b> (4.5⭐) - 350m from main road, serves large seafood platters, steaks, and pasta with great value."},
            {time:"14:30", title:"The Pinnacles Desert", icon:"fa-monument", note:"【Check-in & Geology】Thousands of ancient limestone pillars rising out of yellow sand dunes, creating a surreal Martian landscape. You can drive along the one-way loop or walk freely among the pillars.<br>【Photo Tips】Late afternoon light casts long, dramatic shadows from the pillars, creating the perfect opportunity for moody backlit silhouettes. Use a wide-angle lens.<br>【Safety Tips】Very warm and dry. Bring plenty of water. <b>Kangaroos and emus are common here</b>; drive slowly and do not feed them."},
            {time:"17:00", title:"Check in at Jurien Bay & Jetty Walk", icon:"fa-bed", note:"Check in at Jurien Bay Tourist Park. The park has excellent facilities and is right next to the beach, perfect for walking along the jetty to watch the spectacular sunset."},
            {time:"18:30", title:"Dinner in Jurien Bay", icon:"fa-utensils", note:"Recommend two $$ options within 500m of the caravan park:<br>① <b>Sandpiper Tavern & Pizzeria</b> (4.3⭐) - 200m away (Roberts St), featuring Little C's pizzas, steaks, and a lively beer garden;<br>② <b>The Oneh Jurien</b> (4.4⭐) - 300m away (Murray St), serves Vietnamese pho, Thai curries, and Asian fusion dishes, very friendly for Asian tastes."}
        ] 
    },
    { 
        id: 3, 
        date: "Jun 14", 
        fullDate: "Jun 14 (Sun)", 
        title: "Pink Dream - Drive to Kalbarri", 
        location: "Kalbarri", 
        type: "roadtrip", 
        stay: "Kalbarri Murchison View Hotel", 
        driving: "~3.5 hours (300km)", 
        mapImage: "images/kalbarri_route_map.png",
        tags: ["Leaning Trees", "Coastal Memorial", "Geraldton", "Pink Lake", "River Sunset"], 
        desc: "Today is a visual feast! Head north from Jurien Bay, visit the unique Leaning Trees of Greenough, stop in Geraldton to overlook the harbor, enjoy a waterfront lunch, take photos at the striking pink Hutt Lagoon at noon, and arrive at Kalbarri for a fresh seafood dinner.", 
        route: [{from:"Jurien Bay", to:"Geraldton", time:"2.5h"}, {from:"Geraldton", to:"Hutt Lagoon", time:"1h"}, {from:"Hutt Lagoon", to:"Kalbarri", time:"45m"}], 
        activities: [
            {time:"08:00", title:"Breakfast in Jurien Bay", icon:"fa-coffee", note:"Recommend two $$ options within 500m of the caravan park:<br>① <b>Meraki Cafe</b> (4.6⭐) - 200m away (Roberts St), serving specialty coffee and signature eggs benedict;<br>② <b>Screaming Mudlark Coffee Company</b> (4.5⭐) - 300m away (Bashford St), offering excellent single-origin coffee and toasties."},
            {time:"09:15", title:"Stop 1: Greenough Leaning Trees", icon:"fa-tree", note:"【Check-in & Natural Wonder】A quick roadside stop. Due to the persistent, salt-laden winds blowing off the Southern Ocean, these native eucalyptus trees grow completely horizontally along the ground.<br>【Photo Tips】Pose near the horizontal trunk to emphasize the scale. Use a landscape crop. Stay behind the safety fences and watch for traffic."},
            {time:"10:30", title:"Stop 2: Geraldton HMAS Sydney II Memorial", icon:"fa-landmark", note:"【Check-in & History】A memorial built on Mount Scott commemorating the 645 sailors lost in WWII. The dome, composed of 645 silver stainless-steel seagulls, offers a beautiful architectural tribute and a panoramic lookout over the harbor.<br>【Photo Tips】Shoot looking upward from underneath the dome to capture the seagulls against the sky. Mount Scott can be extremely windy; <b>bring a light jacket</b>."},
            {time:"12:00", title:"Lunch in Geraldton", icon:"fa-hamburger", note:"Two 4.5+ star, $$ options on Marine Terrace (West End):<br>① <b>Salt Dish</b> (4.6⭐) - Charming vintage courtyard cafe, serves creative main courses and pastas;<br>② <b>Piper Lane Cafe</b> (4.6⭐) - Artsy cafe, serves healthy salad bowls, tacos, burgers, and excellent coffee."},
            {time:"13:30", title:"Stop 3: Pink Lake (Hutt Lagoon)", icon:"fa-palette", note:"【Highlight & Photography Guide】The lake displays its most vibrant bubblegum pink between 11:00 AM and 2:00 PM when the sun is overhead and salt crystals reflect the light.<br>【Photo Tips】<b>Wear pure white or bright yellow clothing for a striking contrast</b>. Do not step into the thick mud along the edges. If you have a drone, launch it here to capture the stunning contrast of the pink lake separated from the blue ocean by a thin highway strip.<br>【Science Fact】The pink shade is caused by the algae <i>Dunaliella salina</i>, which produces beta-carotene to protect itself from sunlight."},
            {time:"16:30", title:"Check in at Kalbarri", icon:"fa-bed", note:"Check in at Kalbarri Murchison View Hotel. Take a rest. The hotel is opposite the Murchison River where you can watch pelicans and sunsets."},
            {time:"18:00", title:"Dinner in Kalbarri", icon:"fa-utensils", note:"Recommend two $$ options:<br>① <b>Finlay's Kalbarri</b> (4.5⭐, mentioned in itinerary) - 600m from hotel, famous open-air microbrewery serving fresh grilled seafood under trees;<br>② <b>Upstairs Restaurant</b> (4.6⭐) - 120m from hotel (12 Grey St), second-floor balcony overlooking the river, serving local snapper and steaks."}
        ] 
    },
    { 
        id: 4, 
        date: "Jun 15", 
        fullDate: "Jun 15 (Mon)", 
        title: "Kalbarri - Gorges Wonders & River Cruise", 
        location: "Kalbarri", 
        type: "roadtrip", 
        stay: "Kalbarri Murchison View Hotel", 
        driving: "~1 hour (NP return)", 
        mapImage: "images/kalbarri_national_park_route_map.png",
        tags: ["Nature's Window", "Skywalk", "Red Gorges", "Self-Drive Tinny", "Pelican Feeding", "Grilled Seafood"], 
        desc: "Deeply explore Kalbarri National Park, home to magnificent red sandstone gorges carved 400 million years ago. Stand on the edge of towering cliffs overlooking the Murchison River loop and walk across the cantilevered Skywalk suspended 100 meters high. In the afternoon, return to town and self-drive a small motorboat along the calm river mouth to get up close with black swans and pelicans—an absolute favorite for kids. Enjoy a spectacular cliff sunset at Red Bluff before enjoying a fresh local grilled seafood feast.", 
        activities: [
            {time:"08:00", title:"Riverfront Breakfast: The Gorges Café", icon:"fa-coffee", note: "【Expert Recommended】The most popular cafe in town. We highly recommend their signature Apple Crumble Pancakes or sweet potato rosti with eggs benedict. Enjoy a premium espresso on the outdoor terrace overlooking the sparkling morning river."},
            {time:"09:15", title:"Stop 1: Nature's Window", icon:"fa-camera-retro", note: "【Check-in & Geology】A natural wind-eroded sandstone arch framing the Murchison River loop below. The sandstone layers represent ancient tidal deposits from 400 million years ago. Walk is 1km return.<br><b>Photo Tip:</b> 9:00 to 10:00 AM offers the best soft light. The photographer should stand on the side rocks while the subject stands directly inside the frame. <b>Tip: Wear a fly net during warmer months as bush flies are common in the gorge, and wear sturdy shoes.</b>"},
            {time:"11:00", title:"Stop 2: Kalbarri Skywalk", icon:"fa-bridge", note: "【Cantilevered Heights & Culture】Two steel-mesh platforms extending 22m and 17m past the gorge edge, suspended 100m above the canyon floor. Walking on the mesh floor is a thrilling experience!<br><b>Indigenous Story:</b> Look at the beautiful sculptures and path designs created by local Nanda artists, representing ancestral stories. A local kiosk sells ice creams and cold drinks under shade sails."},
            {time:"12:30", title:"Picnic Lunch: Pelican Café & Bakery", icon:"fa-bread-slice", note: "Grab burgers at the friendly <b>Pelican Café</b>, or pick up hot Australian meat pies and vanilla slices from the historic <b>Kalbarri Bakery</b>. Enjoy a picnic lunch at the lawn tables by Chinaman's Beach while watching giant pelicans glide on the water."},
            {time:"14:30", title:"Stop 3: River Tinny Hire (Self-Drive)", icon:"fa-ship", note: "【Family Fun】No boat license required! Hire a 4-person aluminum motorboat (Tinny) from Kalbarri Boat Hire. After a quick briefing on the outboard motor, you are the captain! Cruise up the calm Murchison River mouth. Kids can sit at the wheel under supervision and watch for black swans and pelicans. Very safe and fun."},
            {time:"17:00", title:"Stop 4: Red Bluff Sunset", icon:"fa-water", note: "【Sunset Lookout】Drive to Red Bluff or Island Rock. Watch the powerful Indian Ocean waves crash against the towering red coastal cliffs as the sun dips below the horizon, painting the rocks in fiery gold."},
            {time:"18:00", title:"Dinner: Finlay's Kalbarri", icon:"fa-utensils", note: "Two excellent $$ choices within Kalbarri:<br>① <b>Finlay's Kalbarri</b> (4.5⭐) - A legendary open-air restaurant. Order the fresh grilled fish of the day (e.g. Snapper) paired with their own microbrewed craft beer in a lively backyard atmosphere;<br>② <b>Upstairs Restaurant</b> (4.6⭐) - Just 120m from your hotel. Sit on the balcony for river views, serving local snapper, premium steaks, and pastas with outstanding service."}
        ] 
    },
    { 
        id: 5, 
        date: "Jun 16", 
        fullDate: "Jun 16 (Tue)", 
        title: "Drive to Shark Bay - Shell Beach & Eagle Bluff", 
        location: "Monkey Mia", 
        type: "roadtrip", 
        stay: "RAC Monkey Mia Dolphin Resort", 
        driving: "~4.5 hours (400km)", 
        mapImage: "images/kalbarri_to_monkey_mia_map.png", 
        tags: ["Outback Drive", "Roadhouse Stop", "Pure Shell Beach", "Eagle Bluff Walk", "Resort Emus", "Waterfront Dining", "Beach Picnic", "Outback Roadhouse"], 
        desc: "Drive north through the vast outback to the World Heritage listed Shark Bay. Walk barefoot on the pure white Shell Beach and float in its hyper-saline water; look down from the boardwalk at Eagle Bluff to spot sharks, turtles, and rays in the crystal-clear shallow bay. Arrive at the scenic Monkey Mia resort and watch wild emus wander around.", 
        route: [{from:"Kalbarri", to:"Overlander", time:"2h50m"}, {from:"Overlander", to:"Monkey Mia", time:"1h40m"}], 
        activities: [
            {time:"09:00", title:"Check-out & Outback Drive", icon:"fa-road", note: "Depart Kalbarri. Drive north along Ajana Kalbarri Rd to Highway 1. Enjoy the vast outback scenery. Keep an eye out for feral goats and wild kangaroos near the highway."},
            {time:"12:00", title:"Lunch Options: Roadhouse or Beach Picnic", icon:"fa-shrimp", note: "【Road Trip Lunch Options】As there are no towns between Kalbarri and Shark Bay, we recommend two great $$ choices:<br>① <b>Scenic Shell Beach Picnic (Highly Recommended)</b>: Grab fresh gourmet rolls, hot meat pies, and pastries from the local <b>Kalbarri Bakery</b> (4.3⭐) before departing Kalbarri. Bring them to Shell Beach to enjoy a unique picnic sitting on pure white shells by the turquoise sea;<br>② <b>Overlander Roadhouse Diner</b> (4.1⭐) - Located at the Shark Bay turn-off on Highway 1. A classic outback roadhouse serving licensed hearty beef burgers, hot chips, fresh wraps, and hot coffee—ideal for refueling both your car and family."},
            {time:"13:30", title:"Stop 1: Shell Beach", icon:"fa-gem", note: "【World Wonder】One of only two beaches globally made entirely of shells, stretching over 110km and several meters deep. The water is twice as salty as the ocean, making it easy to float like in the Dead Sea.<br><b>Photo Tip:</b> The pure white shells reflect intense light; <b>sunglasses are mandatory</b>. Wear white or bright yellow clothing for a striking contrast. Showers are available to wash off the salt."},
            {time:"15:00", title:"Stop 2: Eagle Bluff Lookout", icon:"fa-binoculars", note: "【Marine Sanctuary View】A spectacular clifftop boardwalk overlooking the shallow Denham Sound.<br><b>Wildlife Spotting:</b> Look down to spot reef sharks, shovelnose rays, sea turtles, and dugongs swimming in the shallow flats. Bring binoculars!"},
            {time:"16:30", title:"Stop 3: Check in at Monkey Mia", icon:"fa-umbrella-beach", note: "Check in at the RAC Monkey Mia Dolphin Resort. Look out for the resident family of wild emus walking along the grass and sand.<br><b>Safety Note: Keep a safe distance from the emus and do not feed them.</b>"},
            {time:"18:00", title:"Resort Dinner Recommendations", icon:"fa-utensils", note: "Two convenient options within the resort:<br>① <b>The Boughshed</b> (4.2⭐) - The main oceanfront restaurant offering fine Australian dining (local fish, lamb loin) on a timber deck. Dinner bookings are essential;<br>② <b>Monkey Bar</b> (4.3⭐) - An open-air beer garden serving fresh wood-fired pizzas, burgers, and cold beers in a relaxed, family-friendly setting."}
        ] 
    },
    { 
        id: 6, 
        date: "Jun 17", 
        fullDate: "Jun 17 (Wed)", 
        title: "Dolphins Encounter & Marine Cruise", 
        location: "Monkey Mia", 
        type: "roadtrip", 
        stay: "RAC Monkey Mia Dolphin Resort", 
        driving: "Local short drives", 
        mapImage: "images/monkey_mia_local_map.png",
        tags: ["Wild Dolphins", "Hand Feeding", "Catamaran Cruise", "Dugong Search", "Shell Brick Town", "Shark Feeding"], 
        desc: "Meet the famous wild dolphins of Monkey Mia in the morning, then board a catamaran cruise to search for the elusive dugongs (sea cows). In the afternoon, explore the historic town of Denham and watch live shark feeding at the Ocean Park Aquarium—an educational and ecological adventure.", 
        activities: [
            {time:"07:45", title:"Stop 1: Wild Dolphin Feeding", icon:"fa-fish", note: "【Famous Experience & History】Wild Indo-Pacific bottlenose dolphins have visited the shallow shores of Monkey Mia for decades. Rangers will choose a few lucky visitors to feed the dolphins.<br><b>Important:</b> Always follow ranger instructions. Do not touch the dolphins. The first session at 7:45 AM is the most popular."},
            {time:"10:00", title:"Stop 2: Aristocat 2 Catamaran Cruise", icon:"fa-sailboat", note: "【Marine Cruise & Dugong Search】Cruise on a spacious sailing catamaran from the resort jetty into the Shark Bay Marine Park. The bay contains the world's largest seagrass meadows, supporting a massive population of endangered dugongs (sea cows). There is a 90% chance of spotting them, alongside green turtles, wild dolphins, and giant shovelnose rays swimming beneath the ship's bow net."},
            {time:"13:00", title:"Lunch in Denham Waterfront", icon:"fa-burger", note: "Drive 25 mins to Denham town. Two great $$ dining choices:<br>① <b>Shark Bay Hotel</b> (4.3⭐) - Australia's westernmost pub, serving classic fish & chips and big beef burgers on a deck overlooking the water;<br>② <b>Oceans Restaurant</b> (4.4⭐) - Waterfront dining featuring fresh local seafood chowder, steaks, and pasta with a kids' menu."},
            {time:"14:30", title:"Stop 3: Ocean Park Aquarium", icon:"fa-skull-crossbones", note: "A guided tour led by marine biologists. Watch a live shark feeding, see sea snakes, stonefish, and seahorses, and learn about the local marine ecosystem. Highly educational for kids."},
            {time:"17:00", title:"Stop 4: Denham Shell Buildings & Sunset", icon:"fa-hotel", note: "Walk past old buildings like <b>The Old Pearler</b> built entirely of coquina shell blocks. Sit on a bench at the Denham foreshore to watch a peaceful sunset over the calm waters of Shark Bay."},
            {time:"18:30", title:"Dinner Recommendations", icon:"fa-utensils", note: "Recommend two options:<br>① <b>The Old Pearler Restaurant</b> (4.6⭐) - 【Highly Recommended】Must book in advance! An intimate shell-block cottage serving gourmet local snapper and red-wine seafood stew;<br>② <b>Monkey Bar</b> (4.3⭐) - Return to the resort for wood-fired pizza and chips while kids play on the sand, letting parents unwind."}
        ] 
    },
    { 
        id: 7, 
        date: "Jun 18", 
        fullDate: "Jun 18 (Thu)", 
        title: "Southbound - Geraldton Waterfront Night", 
        location: "Geraldton", 
        type: "roadtrip", 
        stay: "African Reef Resort", 
        driving: "~4.5 hours (430km)", 
        mapImage: "images/monkey_mia_to_geraldton_map.png", 
        tags: ["Southbound", "Outback Drive", "Foreshore Playground", "Water Park", "Sunset Craft Beer", "Marina Seafood", "Shearing Shed Cafe"], 
        desc: "Bid farewell to the dolphins of Monkey Mia and drive south back to Geraldton. Stop at outback roadhouses, and in the afternoon, let the kids burn off energy at the massive foreshore playground. Enjoy sunset drinks and fresh local lobster at the marina for dinner.", 
        activities: [
            {time:"08:30", title:"Breakfast & Departure", icon:"fa-coffee", note: "Enjoy breakfast at the resort's <b>The Boughshed</b> or pick up hot meat pies and coffees from <b>Shark Bay Bakery</b> in Denham before setting off south."},
            {time:"11:00", title:"Fuel & Roadhouse Break", icon:"fa-gas-pump", note: "Stop again at <b>Billabong Roadhouse</b> to fuel up, grab snacks, and stretch your legs in the shade to ease the long drive. Keep an eye out for kangaroos and goats near the road."},
            {time:"12:30", title:"Lunch: Historic Town or Geraldton Harbor", icon:"fa-utensils", note: "【Road Trip Lunch Options】Recommend two highly rated 4.5+ star ($$) options on your way south:<br>① <b>The Shearing Shed Café</b> (4.5⭐) - Located in the historic town of Northampton (~4 hours from Monkey Mia). A rustic cafe housed in a restored shearing shed, serving massive handmade burgers, toasted paninis, and great coffee with authentic country hospitality;<br>② <b>Salt Dish</b> (4.6⭐) - Located in Geraldton CBD (end of drive). A gorgeous, vintage-garden cafe serving gourmet handmade pastas, fresh seasonal salads, and top-tier local coffee."},
            {time:"15:00", title:"Check in at African Reef Resort", icon:"fa-hotel", note: "Check in at African Reef Resort in Geraldton. Take a short rest; the hotel is right next to the beach."},
            {time:"16:00", title:"Stop 1: Geraldton Foreshore Playground", icon:"fa-child-reaching", note: "【Family Choice】A spectacular waterfront playground featuring climbing nets, a flying fox, slides, and a water play area. Kids can play freely while parents enjoy views of the port and sunset."},
            {time:"18:00", title:"Dinner Recommendations in Geraldton", icon:"fa-utensils", note: "Two fantastic $$ dining options near the foreshore:<br>① <b>Cutler & Smith</b> (4.5⭐) - A stylish, family-friendly bistro serving exceptional craft beers, soft-shell crab, and slow-cooked ribs;<br>② <b>Skeetas Restaurant Bar & Cafe</b> (4.4⭐) - Located at Batavia Coast Marina, offering outdoor dining with marina views. Try their local grilled Rock Lobster or seafood platter."}
        ] 
    },
    { 
        id: 8, 
        date: "Jun 19", 
        fullDate: "Jun 19 (Fri)", 
        title: "Return to Perth - Giant Trees & Jetty Lunch", 
        location: "Perth", 
        type: "roadtrip", 
        stay: "Holiday Inn Perth City Centre By IHG", 
        driving: "~4.5 hours (420km)", 
        mapImage: "images/geraldton_to_perth_map.png",
        tags: ["Centenary Fig Trees", "Turquoise Bay", "Jetty Seafood Basket", "Return Rental Car", "Perth CBD", "Steak Feast"], 
        desc: "Complete the final leg of the road trip! Stop in the historic town of Dongara to admire massive fig trees; enjoy a final waterfront lunch by the Jurien Bay jetty; arrive in Perth in the afternoon to return the rental car and check in at the Holiday Inn. Celebrate the trip with a premium steak dinner in the city center.", 
        route: [{from:"Geraldton", to:"Dongara", time:"45m"}, {from:"Dongara", to:"Jurien Bay", time:"1h10m"}, {from:"Jurien Bay", to:"Perth", time:"2.5h"}], 
        activities: [
            {time:"08:00", title:"Breakfast in Geraldton", icon:"fa-coffee", note: "Enjoy a high-quality breakfast at one of these two 4.6⭐ Marine Terrace cafes:<br>① <b>Salt Dish</b> (4.6⭐) - Vintage courtyard garden serving creative french toast and eggs benedict;<br>② <b>Piper Lane Cafe</b> (4.6⭐) - Artsy cafe serving fantastic lattes, okonomiyaki savory pancakes, and toasties. Check out and depart."},
            {time:"09:45", title:"Stop 1: Dongara Fig Tree Walk", icon:"fa-tree", note: "【Check-in & Heritage】Drive 45 mins to Dongara. The main street is lined with massive Morton Bay Fig trees planted in 1906, creating a majestic green canopy. Stop at <b>Poppies by the Park</b> (4.5⭐) for a coffee under the shade to experience local village life.<br>【Photo Tips】Pose under the giant, sprawling roots of the centenary fig trees for a fairy-tale look. Use portrait mode."},
            {time:"12:00", title:"Stop 2: Jurien Bay Jetty Lunch", icon:"fa-umbrella-beach", note: "【Check-in & Scenery】Walk along the scenic Jurien Bay Jetty. Grab lunch at <b>Jurien Bay Jetty Cafe</b> (4.2⭐), famous for generous seafood baskets, burgers, and milkshakes by the beach."},
            {time:"16:00", title:"Stop 3: Arrive in Perth & Return Car", icon:"fa-key", note: "Drive back to Perth CBD. Remember to fill the fuel tank at a nearby petrol station before returning the rental car. Check in at Holiday Inn Perth City Centre."},
            {time:"18:30", title:"Dinner Recommendations", icon:"fa-utensils", note: "Celebrate returning to the city at one of these 4.5+ star family-friendly CBD restaurants:<br>① <b>Meat & Wine Co</b> (4.5⭐) - Located in a heritage building, famous for premium charcoal-grilled steaks and ribs (bookings highly recommended);<br>② <b>Ribs & Burgers Perth</b> (4.4⭐) - Casual diner serving high-quality smoked ribs and gourmet burgers, very family-friendly, no booking needed."}
        ] 
    },
    { 
        id: 9, 
        date: "Jun 20", 
        fullDate: "Jun 20 (Sat)", 
        title: "Perth City Life", 
        location: "Perth City", 
        type: "city", 
        stay: "Holiday Inn Perth City Centre By IHG", 
        driving: "None", 
        tags: ["Brunch", "Shopping", "Hot Chocolate"], 
        desc: "After a week of scenic driving, enjoy a lazy, car-free day in Perth CBD. Wake up naturally and indulge in Perth's elite brunch scene, browse heritage retail arcades, treat yourself to a decadent chocolate flight for afternoon tea, and finish with a fiery street-food dinner at the legendary Long Chim.", 
        activities: [
            {time:"10:00", title:"Leisurely Brunch", icon:"fa-mug-hot", note:"【Expert Recommended】Try two highly-rated 4.5+ star ($$) options:<br>① <b>Arrival Hall</b> (4.6⭐) - In East Perth, a unique concept store blending Scandinavian furniture design with a gourmet cafe. Their poached eggs on sourdough and matcha lattes are plated like fine art;<br>② <b>Hylin</b> (4.5⭐) - In West Leederville, a leafy neighborhood favorite serving outstanding coffee and loaded Benedicts under shady trees.<br>【Photo Tips】The light-filled, minimalist courtyard at Arrival Hall is perfect for aesthetic lifestyle photography."},
            {time:"12:00", title:"Shopping", icon:"fa-bag-shopping", note:"【Check-in & Scenery】Stroll through the pedestrian-only Murray Street and Hay Street Malls. Admire the grand Edwardian architecture of the historic **Perth GPO** (General Post Office) and walk through the heritage-listed **Piccadilly Arcade** (built in 1897). For brand outlet shopping, take the free Yellow CAT bus directly to **Watertown Brand Outlet**.<br>【Photo Tips】Shoot a wide-angle photograph inside the Piccadilly Arcade, looking up to capture the symmetrical timber frames and stained-glass ceiling panels."},
            {time:"15:00", title:"Koko Black Afternoon Tea", icon:"fa-cake-candles", note:"【Check-in & Gastronomy】Koko Black is Australia's premier artisanal chocolatier. Order their signature **Hot Chocolate Flight**, allowing you to taste three different cocoa percentages from creamy milk to rich single-origin dark chocolate. Pair it with a fresh raspberry chocolate ganache cake. Kids will love their frothy, marshmallow-topped Babychinos."},
            {time:"18:00", title:"Dinner at Long Chim", icon:"fa-pepper-hot", note:"【Culinary Highlights】Two fantastic $$ options:<br>① <b>Long Chim</b> (4.5⭐) - Tucked inside the historic basement of the State Buildings, run by Michelin-starred chef David Thompson. It serves authentic, spicy Bangkok street food like rich roast duck red curry and charcoal pork skewers in a moody, graffiti-walled underground space;<br>② <b>Ribs & Burgers Perth</b> (4.4⭐) - Just 200m from your hotel, offering amazing smoky pork ribs, soft brioche buns, and thick milkshakes in a casual setting.<br>【Photo Tips】The underground walls of Long Chim are adorned with colorful graffiti, offering a cool filmic street look under neon lighting."}
        ] 
    },
        { 
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
    },
    { 
        id: 11, 
        date: "Jun 22", 
        fullDate: "Jun 22 (Mon)", 
        title: "Final Day in Perth", 
        location: "Perth Airport", 
        type: "city", 
        stay: "On Board", 
        driving: "To airport", 
        tags: ["Rooftop Bar", "Departure"], 
        desc: "Your final day in Western Australia. Check out and store your luggage, pick up last-minute souvenirs in the CBD, and enjoy a beautiful rooftop lunch at Elizabeth Quay. Spend a relaxed afternoon in the city before heading to the airport for your red-eye flight home.", 
        activities: [
            {time:"11:00", title:"Final Views", icon:"fa-martini-glass", note:"【Check-in & 4.5+⭐, $$】After checking out, head to **The Reveley** at Elizabeth Quay. This multi-level dining venue features a stunning mid-level dining room and a vibrant rooftop bar. Grab a light lunch or mocktails while enjoying panoramic Swan River views.<br>【Photo Tips】Sit at the perimeter tables on the top deck. The glass balustrade allows for clean, unobstructed portraits with the sparkling blue water and yachts as your backdrop.<br>【Alternative 4.5+⭐, $$ Option】<b>Petition Kitchen</b> (4.5⭐) - Return to the State Buildings to savor their modern Australian lunch menu, featuring outstanding local seasonal produce."},
            {time:"14:00", title:"Free Time/Movie", icon:"fa-film", note:"【Shopping Guide】Spend your last hours purchasing local West Australian specialties in the CBD. Pick up some highly prized **Jarrah Honey** (WA's unique medicinal honey), Merino wool products, or classic Australian snacks from local supermarkets. Raine Square offers a great range of boutiques and a modern cinema hall to unwind if you need to escape the midday cold."},
            {time:"20:30", title:"To Perth Airport (PER)", icon:"fa-taxi", note:"【Departure Guide】Collect your luggage from the hotel lobby and hail an Uber XL (~30 mins) to Perth Airport Terminal 1. Arrive 3 hours early to process tourist tax refunds (TRS), check in your baggage, and do some tax-free shopping for WA Margaret River wines."},
            {time:"01:00", title:"Flight Departure", icon:"fa-plane-departure", note:"Board your red-eye flight departing at 01:00 AM. Kids can sleep through the night as you fly back towards Singapore."}
        ] 
    },
    { 
        id: 12, 
        date: "Jun 23", 
        fullDate: "Jun 23 (Tue)", 
        title: "Arrive in Singapore", 
        location: "Singapore", 
        type: "home", 
        stay: "Home Sweet Home", 
        driving: "-", 
        tags: ["Home"], 
        desc: "Arrive safely in Singapore in the morning and return to your warm home, bringing back beautiful memories of your West Australian Coral Coast family road trip.", 
        activities: [
            {time:"06:30", title:"Arrive at Changi Airport", icon:"fa-home", note:"【Welcome Home】Land at Changi Airport at 06:30 AM. If you have energy, walk over to **Jewel Changi** to admire the spectacular 40-meter **Rain Vortex**, the world's tallest indoor waterfall, steaming under the morning sunlight—a perfect end to an unforgettable journey."}
        ] 
    }
];
