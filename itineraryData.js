const itineraryData = [
    { 
        id: 0, 
        date: "6月11日", 
        fullDate: "6月11日 (周四)", 
        title: "抵达珀斯 - 舒适调整", 
        location: "Perth", 
        type: "city", 
        stay: "Novotel Perth Murray Street", 
        driving: "机场接送约30分钟", 
        tags: ["精致早餐", "酒店泳池", "牛排晚餐"], 
        desc: "抵达珀斯，入住市中心位置极佳的Novotel。首日以调整状态和享受美食为主。", 
        activities: [
            {time:"06:00", title:"抵达珀斯国际机场 (PER)", icon:"fa-plane-arrival", note:"通关后打车前往市区 (Uber XL)。"},
            {time:"09:00", title:"早餐: Petition Kitchen", icon:"fa-mug-hot", note:"【专家推荐】位于 State Buildings，享用精致西式早餐，环境优雅轻松。"},
            {time:"11:00", title:"伊丽莎白码头", icon:"fa-water", note:"打卡 Spanda 雕塑，孩子们可以玩威尼斯旋转木马 (Carousel)。"},
            {time:"14:00", title:"办理入住 & 休息放松", icon:"fa-hotel", note:"入住 Novotel Perth Murray Street。下午可以去12楼的恒温泳池放松，为后续行程储备体力。"},
            {time:"18:00", title:"晚餐: Meat & Wine Co", icon:"fa-utensils", note:"【需预订】位于古建筑内的高品质牛排馆，肋排非常适合孩子。"}
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
        mapImage: "perth_route_map.png",
        tags: ["特色早午餐", "都铎英伦风", "天鹅河畔", "Jacobs Ladder", "中东风晚宴"], 
        desc: "睡到自然醒，在市中心搜寻高分早午餐餐馆，随后开启市中心-伦敦巷-伊丽莎白码头-天鹅河畔的慢行步道之旅，攀登 Jacobs Ladder 并在国王公园静候落日，晚上享用美味的地道晚餐。", 
        activities: [
            {time:"10:30", title:"悠闲早午餐 (Brunch) 推荐", icon:"fa-mug-hot", note:"【今日晚起】推荐两家评分4.5+且价格中等($$)的高品质早午餐：<br>① <b>Tiisch</b> (4.6⭐) - 招牌抹茶薄饼 (Matcha Pancakes) 备受喜爱，环境清新绿意盎然；<br>② <b>La Veen Coffee & Kitchen</b> (4.6⭐) - 位于复古红砖楼，其精品咖啡和创意全天候早午餐（如松脆土豆 rosti、北非蛋）非常经典。"},
            {time:"12:00", title:"第一站：London Court (伦敦巷)", icon:"fa-dungeon", note:"从酒店/餐厅出发步行几步即达。英伦都铎风格小巷，拍照极其出片，记得抬头看精致的大自鸣钟 🕰️。出来后是步行街（今天因公共假期，多数商店未营业，正适合清静拍照）。"},
            {time:"13:30", title:"第二站：Elizabeth Quay (伊丽莎白港)", icon:"fa-water", note:"向南慢步至伊丽莎白港，踏上标志性的“大圆环”双弧桥。吹着天鹅河的清风，看渡轮来回，尽享西澳慢生活的松弛感 🌊。"},
            {time:"15:00", title:"第三站：Swan River Side Walk (漫步天鹅河)", icon:"fa-person-walking-dashed-line", note:"顺着河边步道一直向西。虽然有些距离，但一路上天鹅河景绝美，沿途有很多出片的木椅。运气好的话，可以遇到在岸边踱步的黑天鹅 🦢。"},
            {time:"16:30", title:"第四站：Kings Park (爬坡 Jacobs Ladder)", icon:"fa-mountain", note:"走到高架桥下方，通过环岛过马路到对面，定位到 Jacobs Ladder。顺着山坡的242级台阶往上爬，沿途可欣赏到美丽的壁画。顺着路牌指引一直走到 Kings Park。虽然爬坡有些酸痛，但看到俯瞰整个珀斯 City 的无敌 View 时瞬间治愈！这里的落日和傍晚夜景更美 🌿。"},
            {time:"18:30", title:"特色晚餐 (Dinner) 推荐", icon:"fa-utensils", note:"推荐两家评分4.5+且价格中等($$)的特色晚餐：<br>① <b>Bivouac Canteen & Bar</b> (4.6⭐) - 位于 Northbridge，主打特色中东分享菜（如慢烤羊肩肉、鹰嘴豆泥配热饼），氛围温馨艺术；<br>② <b>Alba</b> (4.5⭐) - 位于 Yagan Square (Stories)，主主打现代意式料理，手工披萨和意面质量上乘，非常适合家庭。"}
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
        mapImage: "jurien_bay_route_map.png",
        tags: ["自驾启程", "白沙滑沙", "龙虾大餐", "奇幻地貌", "落日海岸"], 
        desc: "提取租车，开启向北的印度洋自驾公路之旅！今日行程丰富动感，我们将驾车穿梭于海岸与荒漠之间，在兰斯林纯白沙丘体验飞速滑沙的爽快；在塞万提斯大快朵颐西澳顶级岩龙虾；下午探秘如火星般神奇的尖峰石阵；傍晚抵达朱里恩湾，漫步近在咫尺的落日沙滩，完美融合动感、美食与奇观。", 
        route: [{from:"Perth", to:"Lancelin", time:"1.5h"}, {from:"Lancelin", to:"Cervantes", time:"55m"}, {from:"Cervantes", to:"Jurien Bay", time:"25m"}], 
        activities: [
            {time:"08:00", title:"早起与早餐：Perth CBD 推荐", icon:"fa-coffee", note:"出发前在 Novotel 附近 500 米内享用优质早餐（推荐二选一，均为 4.5+⭐, $$）：<br>① <b>La Veen Coffee & Kitchen</b> (4.6⭐) - 距离酒店 300 米 (King St)，精品咖啡极赞，北非蛋与马铃薯饼非常优秀；<br>② <b>Croff Bakehouse</b> (4.5⭐) - 距离酒店 450 米 (Barrack St)，特色创意花式羊角面包面包房，适合快速堂食或外带。"},
            {time:"09:00", title:"租车公司取车并出发", icon:"fa-car", note:"前往租车公司办理手续，建议租用大型SUV以应对长途行李与沙丘路段。沿着印度洋公路一路向北，开启精彩自驾之旅！【驾驶小建议】西澳靠左行驶，主干道限速一般为110km/h，请保持安全车距。"},
            {time:"10:30", title:"兰斯林白沙丘 (Lancelin)", icon:"fa-wind", note:"租一块滑沙板（约$10/小时），攀上高耸的雪白沙丘，体验从沙脊俯冲而下的速度与激情！孩子们玩得乐此不疲。<br>【旅行建议】沙丘反射阳光强烈且风沙大，<b>务必佩戴墨镜/防风镜并做好全方位防晒</b>；建议穿凉鞋或赤脚，方便清理沙子。"},
            {time:"12:30", title:"午餐：塞万提斯 (Cervantes) 推荐", icon:"fa-shrimp", note:"抵达海滨小镇塞万提斯，午餐推荐两家口碑出众的 $$ 级别餐厅：<br>① <b>Lobster Shack 龙虾工厂</b> (已在行程中提及, 4.1⭐) - 海滩旁大啖新鲜烤龙虾配香脆薯条，看着渔船进港，西澳风情拉满；<br>② <b>Cervantes Bar and Bistro</b> (4.5⭐) - 距离主路 350 米，主打当地野生海鲜拼盘、分量十足的牛排与意面，性价比极高。"},
            {time:"14:30", title:"尖峰石阵 (The Pinnacles)", icon:"fa-monument", note:"大自然万年风化雕琢而成的黄色石柱群，矗立在红土地上，如火星般奇幻。可以开车沿单向Loop环线慢行巡游，随停随拍，还可以下车步行漫步于石林间。<br>【旅行建议】下午两三点阳光较晒，注意防晒补水。<b>林间常有野生袋鼠和鸸鹋出没</b>，注意减速避让，请勿主动喂食。"},
            {time:"17:00", title:"入住朱里恩湾营地", icon:"fa-bed", note:"入住著名的 Jurien Bay Tourist Park。营地设施完善，出门即是极美的绿松石沙滩，非常适合带孩子在栈桥散步，吹着海风看漫天瑰丽的日落晚霞。"},
            {time:"18:30", title:"晚餐：朱里恩湾 (Jurien Bay) 推荐", icon:"fa-utensils", note:"入住营地后，步行 500 米内推荐两家优质 $$ 晚餐餐厅（小镇营业晚餐的餐厅评分普遍在 4.1-4.4⭐）：<br>① <b>Sandpiper Tavern & Pizzeria</b> (4.3⭐) - 距离营地仅 200 米 (Roberts St)，招牌手工明火比萨（Little C's 运营）及牛排，带露天啤酒花园，氛围轻松；<br>② <b>The Oneh Jurien</b> (4.4⭐) - 距离营地约 300 米 (Murray St)，主打越南河粉、泰式咖喱等亚洲融合菜，口味极其照顾亚洲胃。"}
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
        mapImage: "kalbarri_route_map.png",
        tags: ["横行怪树", "海滨纪念碑", "杰拉尔顿", "粉红湖", "罗曼蒂克", "海鲜晚宴"], 
        desc: "今日是视觉盛宴的一天！从朱里恩湾北上，探秘贴地生长的横行怪树；在杰拉尔顿山丘上俯瞰海湾，享用精致的码头午餐；正午阳光折射最美时抵达粉红湖 Hutt Lagoon，欣赏粉色天空之镜的浪漫；傍晚抵达卡尔巴里，在河畔日落中享用极鲜海鲜大餐。", 
        route: [{from:"Jurien Bay", to:"Geraldton", time:"2.5h"}, {from:"Geraldton", to:"Hutt Lagoon", time:"1h"}, {from:"Hutt Lagoon", to:"Kalbarri", time:"45m"}], 
        activities: [
            {time:"08:00", title:"早餐：朱里恩湾 (Jurien Bay) 推荐", icon:"fa-coffee", note:"出发前在营地 500 米内享用早餐与精品咖啡（均为 4.5+⭐, $$）：<br>① <b>Meraki Cafe</b> (4.6⭐) - 距离营地仅 200 米 (Roberts St)，精品咖啡与特色班尼迪克蛋很赞；<br>② <b>Screaming Mudlark Coffee Company</b> (4.5⭐) - 距离营地约 300 米 (Bashford St)，主打优质单源咖啡与热压三明治。"},
            {time:"09:15", title:"Greenough 横行怪树", icon:"fa-tree", note:"自驾途中路过停车拍照。因长期受强劲的南极印度洋信风吹袭，这里的红桉树竟然全部顺风横向贴地生长，堪称大自然顽强生命力的奇观。<br>【旅行建议】路边设有安全停靠点，拍照时请注意来往车辆，注意安全。"},
            {time:"10:30", title:"杰拉尔顿纪念碑", icon:"fa-landmark", note:"参观 HMAS Sydney II 纪念碑。其标志性的银色海鸥圆顶坐落于山丘之上，不仅具有深厚历史感，更是鸟瞰整个杰拉尔顿港湾蔚蓝海景的绝佳机位。<br>【旅行建议】山丘上风力通常极大，<b>建议带上一件薄外套防风</b>。"},
            {time:"12:00", title:"午餐：杰拉尔顿 (Geraldton) 推荐", icon:"fa-hamburger", note:"自驾途经杰拉尔顿市区，在海滨 West End 享用美味午餐（均为 4.5+⭐, $$）：<br>① <b>Salt Dish</b> (4.6⭐) - 拥有精致复古小花园，主打创意西餐与手工意面，环境非常清雅；<br>② <b>Piper Lane Cafe</b> (4.6⭐) - 街头艺术风，主打健康沙拉碗、塔可与汉堡，咖啡品质极高，深受家庭喜爱。"},
            {time:"13:30", title:"粉红湖 (Hutt Lagoon)", icon:"fa-palette", note:"【重磅亮点】正午 11:00 至 14:00 是拍摄粉红湖的最佳时间，此时正午阳光直射，湖水折射出最浓郁迷人的玫瑰粉色！<br>【旅行建议】<b>穿纯白色或浅色衣服拍照极其出片</b>。避免踏入粘稠的盐滩边缘防止陷落；若有无人机，强烈建议在此起飞，能俯瞰粉绿相间的“天空之镜”拼图。"},
            {time:"16:30", title:"入住卡尔巴里酒店", icon:"fa-bed", note:"抵达卡尔巴里并入住 Kalbarri Murchison View Hotel。酒店地理位置极佳，马路对面就是静谧的默奇森河，可以稍微整理行李并休息，消除行车疲劳。"},
            {time:"18:00", title:"晚餐：卡尔巴里 (Kalbarri) 推荐", icon:"fa-utensils", note:"推荐两家步行或短途可达的 4.5+⭐, $$ 晚餐餐厅：<br>① <b>Finlay's Kalbarri</b> (4.5⭐, 已在行程中提及) - 距离酒店 600 米，极其出名的露天红土餐厅，提供自家精酿啤酒与极鲜的炭烤海鲜，氛围热闹野趣；<br>② <b>Upstairs Restaurant</b> (4.6⭐) - 距离酒店仅 120 米 (12 Grey St)，二楼阳台俯瞰河景，主打当地野生鲷鱼与高品质牛排。"}
        ] 
    },
    { 
        id: 4, 
        date: "6月15日", 
        fullDate: "6月15日 (周一)", 
        title: "卡尔巴里 - 峡谷与小船", 
        location: "Kalbarri", 
        type: "roadtrip", 
        stay: "Kalbarri Murchison View Hotel", 
        driving: "约1小时 (国家公园往返)", 
        tags: ["自然之窗", "天空步道", "开小船"], 
        desc: "深入国家公园看红土峡谷，下午悠闲地在河上开船 (无需驾照)。", 
        activities: [
            {time:"09:00", title:"自然之窗 (Nature's Window)", icon:"fa-camera-retro", note:"透过岩石框看默奇森河，往返1公里步行，稍有攀爬乐趣。"},
            {time:"11:00", title:"天空步道 (Skywalk)", icon:"fa-bridge", note:"悬臂观景台，悬空100米，设有咖啡亭可以休息。"},
            {time:"13:00", title:"午餐: Kalbarri Bakery", icon:"fa-bread-slice", note:"买好肉派，去 Chinaman's Beach 边看鹈鹕边野餐。"},
            {time:"14:30", title:"河上巡游 (Hire a Tinny)", icon:"fa-ship", note:"【亲子推荐】在河边租艘小船，全家开船找黑天鹅，孩子的最爱。"},
            {time:"17:00", title:"海岸悬崖日落", icon:"fa-water", note:"去 Red Bluff 或 Island Rock 看壮丽的悬崖日落。"}
        ] 
    },
    { 
        id: 5, 
        date: "6月16日", 
        fullDate: "6月16日 (周二)", 
        title: "北上鲨鱼湾 - 世界遗产", 
        location: "Monkey Mia", 
        type: "roadtrip", 
        stay: "RAC Monkey Mia Dolphin Resort", 
        driving: "约4.5小时 (400km)", 
        tags: ["贝壳海滩", "老鹰崖", "海景房"], 
        desc: "穿过荒原，抵达独特的世界自然遗产区。注意路途较长，准备好车载娱乐。", 
        route: [{from:"Kalbarri", to:"Overlander", time:"2h50m"}, {from:"Overlander", to:"Monkey Mia", time:"1h40m"}], 
        activities: [
            {time:"09:00", title:"出发北上", icon:"fa-road", note:"途中在 Billabong Roadhouse 休息加油。"},
            {time:"13:00", title:"贝壳海滩 (Shell Beach)", icon:"fa-gem", note:"由亿万个微小贝壳组成的海滩，白色海滩与绿松石海水对比强烈。"},
            {time:"14:30", title:"鹰崖 (Eagle Bluff)", icon:"fa-binoculars", note:"走在悬崖栈道上，俯瞰浅海里的鲨鱼和鳐鱼。"},
            {time:"16:30", title:"抵达度假村", icon:"fa-umbrella-beach", note:"入住 RAC Monkey Mia。出门就是沙滩，常有鸸鹋在度假村散步。"},
            {time:"18:00", title:"晚餐: The Boughshed", icon:"fa-utensils", note:"度假村内餐厅，方便舒适。"}
        ] 
    },
    { 
        id: 6, 
        date: "6月17日", 
        fullDate: "6月17日 (周三)", 
        title: "海豚与海洋生物全接触", 
        location: "Monkey Mia", 
        type: "roadtrip", 
        stay: "RAC Monkey Mia Dolphin Resort", 
        driving: "周边短途", 
        tags: ["喂海豚", "找海牛", "喂鲨鱼"], 
        desc: "全天与海洋生物互动。早起看海豚，出海找海牛，再去水族馆看喂鲨鱼。", 
        activities: [
            {time:"07:45", title:"海豚体验 (Dolphin Experience)", icon:"fa-fish", note:"必做！野生海豚游到脚边，机会亲手喂食 (听从护林员安排)。"},
            {time:"10:00", title:"双体船巡游", icon:"fa-sailboat", note:"【Aristocat 2】出海寻找海牛 (Dugong)、海龟和鲨鱼。"},
            {time:"13:00", title:"午餐: Shark Bay Hotel", icon:"fa-burger", note:"驱车去 Denham 镇，在拥有无敌海景的酒吧吃午餐。"},
            {time:"14:30", title:"海洋公园 (Ocean Park)", icon:"fa-skull-crossbones", note:"【硬核体验】看生猛的鲨鱼喂食，近距离观察海蛇和石头鱼。"},
            {time:"17:00", title:"日落休闲", icon:"fa-glass-water", note:"在度假村打迷你高尔夫或海滩漫步。"}
        ] 
    },
    { 
        id: 7, 
        date: "6月18日", 
        fullDate: "6月18日 (周四)", 
        title: "折返杰拉尔顿", 
        location: "Geraldton", 
        type: "roadtrip", 
        stay: "African Reef Resort", 
        driving: "约4.5小时 (430km)", 
        tags: ["返程", "游乐场", "精酿啤酒"], 
        desc: "开始南下返程，在杰拉尔顿停留一晚，享受城市便利。", 
        activities: [
            {time:"09:00", title:"告别海豚，出发", icon:"fa-car", note:"再次途径 Shell Beach 可补拍照片。"},
            {time:"12:00", title:"中途休息: Billabong", icon:"fa-gas-pump", note:"补充能量。"},
            {time:"15:00", title:"入住 African Reef", icon:"fa-city", note:"入住 African Reef Resort (海边)。"},
            {time:"16:00", title:"Foreshore Playground", icon:"fa-child-reaching", note:"带孩子去海滨超大游乐场放电 (水上乐园/攀爬网)。"},
            {time:"18:00", title:"晚餐: Cutler & Smith", icon:"fa-utensils", note:"氛围极佳的精酿餐厅，食物精致 (如软壳蟹)，家庭友好。"}
        ] 
    },
    { 
        id: 8, 
        date: "6月19日", 
        fullDate: "6月19日 (周五)", 
        title: "回到珀斯 - 咖啡与海景", 
        location: "Perth", 
        type: "roadtrip", 
        stay: "Holiday Inn Perth City Centre By IHG", 
        driving: "约4.5小时 (420km)", 
        tags: ["董加拉", "栈桥午餐", "还车"], 
        desc: "完成最后的自驾路段，途径美丽的董加拉和朱里恩湾。", 
        route: [{from:"Geraldton", to:"Dongara", time:"45m"}, {from:"Dongara", to:"Jurien Bay", time:"1h10m"}, {from:"Jurien Bay", to:"Perth", time:"2.5h"}], 
        activities: [
            {time:"09:30", title:"咖啡: Poppies by the Park", icon:"fa-coffee", note:"【董加拉】温馨的公园旁咖啡馆，环境优美，适合休息。"},
            {time:"12:00", title:"午餐: Jurien Bay Jetty", icon:"fa-umbrella-beach", note:"在栈桥旁的 Cafe 用餐，最后看一眼绿松石海岸。"},
            {time:"16:00", title:"抵达珀斯 & 还车", icon:"fa-key", note:"市区还车，入住 Holiday Inn Perth City Centre。"},
            {time:"18:00", title:"晚餐", icon:"fa-bowl-food", note:"在市中心简单用餐，休息。"}
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
        desc: "没有车的一天，睡到自然醒，享受城市的购物和美食。", 
        activities: [
            {time:"10:00", title:"悠闲 Brunch", icon:"fa-mug-hot", note:"推荐 Arrival Hall 或 Hylin。"},
            {time:"12:00", title:"购物时光", icon:"fa-bag-shopping", note:"逛逛 Murray St Mall 或坐黄猫巴士去 Watertown Brand Outlet。"},
            {time:"15:00", title:"Koko Black 下午茶", icon:"fa-cake-candles", note:"尝试 Hot Chocolate Flight (热巧克力品鉴盘)，一次喝到多种口味。"},
            {time:"18:00", title:"晚餐: Long Chim", icon:"fa-pepper-hot", note:"【State Buildings】米其林大厨的泰餐，或选择 Ribs & Burgers。"}
        ] 
    },
    { 
        id: 10, 
        date: "6月21日", 
        fullDate: "6月21日 (周日)", 
        title: "双城记：罗特尼斯 & 弗里曼特尔", 
        location: "Rottnest / Fremantle", 
        type: "city", 
        stay: "Holiday Inn Perth City Centre By IHG", 
        driving: "渡轮/火车", 
        tags: ["环岛巴士", "集市", "炸鱼薯条"], 
        desc: "寻找微笑袋鼠，下午逛弗里曼特尔周末集市。", 
        activities: [
            {time:"07:30", title:"渡轮出发 (Barrack St)", icon:"fa-ship", note:"顺便欣赏天鹅河两岸豪宅。预订 Multi-port 船票 (Perth出, Freo回)。"},
            {time:"09:00", title:"罗特尼斯岛 (Rottnest)", icon:"fa-camera", note:"推荐坐 Island Explorer Bus 环岛 (比骑车省力)，寻找 Quokka 合影。"},
            {time:"14:30", title:"前往弗里曼特尔", icon:"fa-anchor", note:"乘船前往 Fremantle (B-Shed)。"},
            {time:"15:30", title:"弗里曼特尔集市", icon:"fa-store", note:"周末集市非常热闹，有蜂蜜蛋糕、街头表演和手工艺品。"},
            {time:"17:30", title:"晚餐: Kailis Fish Market", icon:"fa-fish", note:"【推荐】海鲜拼盘和炸鱼薯条比 Cicerello's 更精致，坐在港口边享用。"},
            {time:"19:30", title:"返回珀斯", icon:"fa-train", note:"坐火车 (30分钟) 或 Uber 返回市区。"}
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
        desc: "享受珀斯的最后时光，傍晚前往机场。", 
        activities: [
            {time:"11:00", title:"最后的休闲", icon:"fa-martini-glass", note:"去 Elizabeth Quay 的 The Reveley 屋顶酒吧喝杯饮料，看看风景。"},
            {time:"14:00", title:"自由活动/电影", icon:"fa-film", note:"在 Raine Square 看场电影或做最后采购。"},
            {time:"20:30", title:"前往机场 (PER)", icon:"fa-taxi", note:"前往 T1 航站楼。"},
            {time:"01:00", title:"航班起飞", icon:"fa-plane-departure", note:"次日凌晨航班 (6月23日)。"}
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
        desc: "旅程结束，带回满满的回忆。", 
        activities: [{time:"06:30", title:"抵达樟宜机场", icon:"fa-home", note:"欢迎回家！"}] 
    }
];
