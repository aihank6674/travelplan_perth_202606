# -*- coding: utf-8 -*-
import os

def main():
    dest_path = "itineraryData.js"

    days_zh_before_4 = """    { 
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
        mapImage: "images/perth_route_map.png",
        tags: ["特色早午餐", "都铎英伦风", "天鹅河畔", "Jacobs Ladder", "中东风晚宴"], 
        desc: "睡到自然醒，在市中心搜寻高分早午餐餐馆，随后开启市中心-伦敦巷-伊丽莎白码头-天鹅河畔的慢行步道之旅，攀登 Jacobs Ladder 并在国王公园静候落日，晚上享用美味的地道晚餐。", 
        activities: [
            {time:"10:30", title:"悠闲早午餐 (Brunch) 推荐", icon:"fa-mug-hot", note:"【今日晚起】推荐两家评分4.5+且价格中等($$)的高品质早午餐：<br>① <b>Tiisch</b> (4.6⭐) - 招牌抹茶薄饼 (Matcha Pancakes) 备受喜爱，环境清新绿意盎然；<br>② <b>La Veen Coffee & Kitchen</b> (4.6⭐) - 位于复古红砖楼，其精品咖啡和创意全天候早午餐（如松脆土豆 rosti、北非蛋）非常经典。"},
            {time:"12:00", title:"第一站：London Court (伦敦巷)", icon:"fa-dungeon", note:"从酒店/餐厅出发步行几步即达。英伦都铎风格小巷，拍照极其出片，记得抬头看精致的大自鸣钟 🕰️。出来后是步行街（今天因公共假期，多数商店未营业，正适合清静拍照）。"},
            {time:"13:30", title:"第二站：Elizabeth Quay (伊丽莎白港)", icon:"fa-water", note:"向南慢步至伊丽莎白港，踏上标志性的“大圆环”双弧桥。吹着天鹅河的清风，看渡轮来回，尽享西澳慢生活的松弛感 🌊。"},
            {time:"15:00", title:"第三站：Swan River Side Walk (漫步天鹅河)", icon:"fa-person-walking-dashed-line", note:"顺着河边步道一直向西。虽然有些距离，但一路上天鹅河景绝美，沿途有很多出片的木椅。运气好的话，可以遇到在岸边踱步的黑天鹅 🦢。"},
            {time:"16:30", title:"第四站：Kings Park (爬坡 Jacobs Ladder)", icon:"fa-mountain", note:"走到高架桥下方，通过环岛过马路到对面，定位到 Jacobs Ladder。顺着山坡的242级台阶往上爬，沿途可欣赏到美丽的壁画。顺着路牌指引一直走到 Kings Park。虽然爬坡有些酸痛，但看到俯瞰整个珀斯 City 的无敌 View 时瞬间治愈！这里的落日和傍晚夜景更美 🌿。"},
            {time:"18:30", title:"特色晚餐 (Dinner) 推荐", icon:"fa-utensils", note:"推荐两家评分4.5+且价格中等($$)的特色晚餐：<br>① <b>Bivouac Canteen & Bar</b> (4.6⭐) - 位于 Northbridge，主主打特色中东分享菜（如慢烤羊肩肉、鹰嘴豆泥配热饼），氛围温馨艺术；<br>② <b>Alba</b> (4.5⭐) - 位于 Yagan Square (Stories)，主打现代意式料理，手工披萨 and 意面质量上乘，非常适合家庭。"}
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
            {time:"10:30", title:"兰斯林白沙丘 (Lancelin)", icon:"fa-wind", note:"租一块滑沙板（约$10/小时），攀上高耸的雪白沙丘，体验从沙脊俯冲而下的速度与激情！孩子们玩得乐此不疲。<br>【旅行建议】沙丘反射阳光强烈且风沙大，<b>务必佩戴墨镜/防风镜并做好全方位防晒</b>；建议穿凉鞋或赤脚，方便清理沙子。"},
            {time:"12:30", title:"午餐：塞万提斯 (Cervantes) 推荐", icon:"fa-shrimp", note:"抵达海滨小镇塞万提斯，午餐推荐两家口碑出众 of $$ 级别餐厅：<br>① <b>Lobster Shack 龙虾工厂</b> (已在行程中提及, 4.1⭐) - 海滩旁大啖新鲜烤龙虾配香脆薯条，看着渔船进港，西澳风情拉满；<br>② <b>Cervantes Bar and Bistro</b> (4.5⭐) - 距离主路 350 米，主打当地野生海鲜拼盘、分量十足的牛排与意面，性价比极高。"},
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
        mapImage: "images/kalbarri_route_map.png",
        tags: ["横行怪树", "海滨纪念碑", "杰拉尔顿", "粉红湖", "罗曼蒂克", "海鲜晚宴"], 
        desc: "今日是视觉盛宴的一天！从朱里恩湾北上，探秘贴地生长的横行怪树；在杰拉尔顿山丘上俯瞰海湾，享用精致的码头午餐；正午阳光折射最美时抵达粉红湖 Hutt Lagoon，欣赏粉色天空之镜的浪漫；傍晚抵达卡尔巴里，在河畔日落中享用极鲜海鲜大餐。", 
        route: [{from:"Jurien Bay", to:"Geraldton", time:"2.5h"}, {from:"Geraldton", to:"Hutt Lagoon", time:"1h"}, {from:"Hutt Lagoon", to:"Kalbarri", time:"45m"}], 
        activities: [
            {time:"08:00", title:"早餐：朱里恩湾 (Jurien Bay) 推荐", icon:"fa-coffee", note:"出发前在营地 500 米内享用早餐与精品咖啡（均为 4.5+⭐, $$）：<br>① <b>Meraki Cafe</b> (4.6⭐) - 距离营地仅 200 米 (Roberts St)，精品咖啡与特色班尼迪克蛋很赞；<br>② <b>Screaming Mudlark Coffee Company</b> (4.5⭐) - 距离营地约 300 米 (Bashford St)，主打优质单源咖啡与热压三明治。"},
            {time:"09:15", title:"Greenough 横行怪树", icon:"fa-tree", note:"自驾途中路过停车拍照。因长期受强劲的南极印度洋信风吹袭，这里的红桉树竟然全部顺风横向贴地生长，堪称大自然顽强生命力的奇观。<br>【旅行建议】路边安全防撞护栏，拍照注意安全。"},
            {time:"10:30", title:"杰拉尔顿纪念碑", icon:"fa-landmark", note:"参观 HMAS Sydney II 纪念碑。其标志性的银色海鸥圆顶坐落于山丘之上，不仅具有深厚历史感，更是鸟瞰整个杰拉尔顿港湾蔚蓝海景的绝佳机位。<br>【旅行建议】山丘上风力通常极大，<b>建议带上一件薄外套防风</b>。"},
            {time:"12:00", title:"午餐：杰拉尔顿 (Geraldton) 推荐", icon:"fa-hamburger", note:"自驾途经杰拉尔顿市区，在海滨 West End 享用美味午餐（均为 4.5+⭐, $$）：<br>① <b>Salt Dish</b> (4.6⭐) - 拥有精致复古小花园，主打创意西餐与手工意面，环境非常清雅；<br>② <b>Piper Lane Cafe</b> (4.6⭐) - 街头艺术风，主打健康沙拉碗、塔可与汉堡，咖啡品质极高，深受家庭喜爱。"},
            {time:"13:30", title:"粉红湖 (Hutt Lagoon)", icon:"fa-palette", note:"【重磅亮点】正午 11:00 至 14:00 是拍摄粉红湖的最佳时间，此时正午阳光直射，湖水折射出最浓郁迷人的玫瑰粉色！<br>【旅行建议】<b>穿纯白色或浅色衣服拍照极其出片</b>。避免踏入粘稠的盐滩边缘防止陷落；若有无人机，强烈建议在此起飞，能俯瞰粉绿相间的“天空之镜”拼图。"},
            {time:"16:30", title:"入住卡尔巴里酒店", icon:"fa-bed", note:"抵达卡尔巴里并入住 Kalbarri Murchison View Hotel。酒店地理位置极佳，马路对面就是静谧的默奇森河，可以稍微整理行李并休息，消除行车疲劳。"},
            {time:"18:00", title:"晚餐：卡尔巴里 (Kalbarri) 推荐", icon:"fa-utensils", note:"推荐两家步行或短途可达的 4.5+⭐, $$ 晚餐餐厅：<br>① <b>Finlay's Kalbarri</b> (4.5⭐, 已在行程中提及) - 距离酒店 600 米，极其出名的露天红土餐厅，提供自家精酿啤酒与极鲜的炭烤海鲜，氛围热闹野趣；<br>② <b>Upstairs Restaurant</b> (4.6⭐) - 距离酒店仅 120 米 (12 Grey St)，二楼阳台俯瞰河景，主打当地野生鲷鱼与高品质牛排。"}
        ] 
    }"""

    days_zh_4_to_8 = """    { 
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
            {time:"09:15", title:"第一站: 自然之窗 (Nature's Window)", icon:"fa-camera-retro", note:"【奇观打卡 & 专家导览】这是一座由风雨侵蚀数百万年形成的天然红砂岩石拱门，恰好框住了下方默奇森河 (Murchison River) 的大拐弯峡谷。这里的砂岩展现出迷人的红黄相间条纹，是4亿年前古代潮汐和沉积留下的印记。<br>【拍照秘籍】清晨9:30前光线最柔和，此时逆光较弱。拍摄者可以站在石窗前侧의岩石上，被摄者站在拱门正中间，利用自然石框将人与远处的河谷完美锁在一个镜头里。<b>旅行建议：西澳冬季荒野苍蝇较多，进入峡谷前强烈建议佩戴防蝇网 (Fly Net)，并穿着防滑运动鞋，因为红砂岩表面较为光滑。</b>"},
            {time:"11:00", title:"第二站: 卡尔巴里天空步道 (Kalbarri Skywalk)", icon:"fa-bridge", note:"【震撼体验 & 文化背景】两个耗资数百万澳元打造的钢结构悬臂观景台，从峡谷边缘向外延伸，悬空于默奇森河上方100米处。走在镂空的钢网桥面上，低头直视万丈深渊，让人心跳加速！<br>【原住民故事】步道入口处布置了大量当地 Nanda 原住民艺术家的雕塑与壁画，诉说着这片土地在原住民神话中的创世故事。这里还设有用环保木材建造的咖啡凉亭，可以在此买个冰淇淋或冷饮，坐在树荫下静静欣赏这片荒凉而壮阔的古老大陆。"},
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
        tags: ["穿越荒原", "路口加油站", "纯白贝壳沙滩", "悬崖望远镜", "野生动物巡逻", "海边度假村"], 
        desc: "离开卡尔巴里，驾车穿越西澳最开阔的红土荒原北上，进入著名的世界自然遗产保护区——鲨鱼湾 (Shark Bay)。今日我们将赤脚踩在由亿万个微小贝壳组成的纯白沙滩上，在极高盐度的果冻海里轻松漂浮；随后在老鹰崖的悬崖栈道上俯瞰浅滩，用肉眼搜寻巡游的鲨鱼与大海龟。傍晚入住位于细软沙滩上的海豚度假村，开启极佳的沙滩度假时光。", 
        route: [{from:"Kalbarri", to:"Overlander", time:"2h50m"}, {from:"Overlander", to:"Monkey Mia", time:"1h40m"}], 
        activities: [
            {time:"09:00", title:"退房出发与内陆荒原自驾", icon:"fa-road", note:"告别卡尔巴里，沿着 Ajana Kalbarri Rd 接 1号公路北上。这是一段长达数百公里的旷野自驾，两旁是西澳标志性的矮灌木丛和红土地。中途可在 <b>Billabong Roadhouse</b> 或 <b>Overlander Roadhouse</b> 停靠充电加油。这两家是经典的澳洲荒漠驿站，可以买个热肉派、冰可乐，伸展四肢，感受真正的 Aussie Outback 氛围。同时注意避让可能横穿马路的野山羊和袋鼠。"},
            {time:"13:00", title:"第一站: 贝壳海滩 (Shell Beach)", icon:"fa-gem", note:"【全球唯二奇观 & 科学背景】这片海滩长达 110公里，深达数米，完全由细小的白色心形贝壳（学名 <i>Fragum erugatum</i>）组成，没有任何沙子。由于鲨鱼湾的狭窄海湾和高蒸发量，这里的海水盐度是普通海洋的两倍，导致大多数捕食者无法生存，这种微小贝壳得以爆发式繁衍。<br>【拍照秘籍 & 旅行技巧】<b>阳光反射极其刺眼，必须佩戴太阳镜！</b>赤脚走在贝壳上会有沙沙的响声，非常奇妙。这里的海水清澈如水晶，高盐度让浮力倍增，可以轻松拍出像死海一样漂浮在海面上的照片。旁边设有淋浴器，起身后可冲洗盐分。"},
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
        tags: ["返程南下", "野生袋鼠", "海滨大游乐场", "滑索荡秋千", "落日精酿啤酒", "码头海景晚餐"], 
        desc: "告别美丽的猴子米亚海豚，驾车开始南下折返旅程。中途在荒漠加油站休息，下午抵达西澳第二大城市杰拉尔顿。带孩子在海滨超大的木质游乐场痛快放电，傍晚在码头吹着海风，享用美味的精酿啤酒与极鲜的炭烤龙虾晚餐。", 
        activities: [
            {time:"08:30", title:"告别海豚与出发早餐", icon:"fa-coffee", note:"出发前在度假村 <b>The Boughshed</b> 吃个饱饱的西式早餐，或者在德纳姆的 <b>Shark Bay Bakery</b> 打包新鲜热乎的小麦肉派和香浓咖啡带上车。随后驾车南下。"},
            {time:"12:00", title:"中途休息加油", icon:"fa-gas-pump", note:"再次在 1号公路旁的 <b>Billabong Roadhouse</b> 停靠加油。这里提供冷饮、零食和干净的休息区。自驾路途漫长，在天桉树下伸展下身体，缓解疲劳非常必要。<b>请注意：西澳内陆野生动物多，行车途中务必注意避让路边的野山羊和可能突然跃出的袋鼠。</b>"},
            {time:"15:00", title:"抵达杰拉尔顿并办理入住", icon:"fa-hotel", note:"入住 African Reef Resort，稍作整理。酒店紧邻海滩，环境优美。"},
            {time:"16:00", title:"第一站: Foreshore Playground 游乐场", icon:"fa-child-reaching", note:"【亲子力推】杰拉尔顿标志性的巨型海滨乐园。这里有巨大的原木城堡、超长滑索 (Flying Fox)、攀爬网和儿童水上乐园，安全又好玩。孩子们在此疯狂放电，家长可以在旁边的长椅上欣赏港湾落日。"},
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
            {time:"09:45", title:"第一站: 董加拉 (Dongara) 百年 fig tree 漫步", icon:"fa-tree", note:"自驾约45分钟抵达董加拉小镇。主街两旁种满了建于1906年的巨型莫顿湾无花果树，林荫蔽日。推荐在 <b>Poppies by the Park</b> (4.5⭐) 咖啡馆树下喝一杯咖啡，吃个小点心，感受宁静悠闲的澳洲小镇风情。"},
            {time:"12:00", title:"第二站: 朱里恩湾栈桥午餐 (Jurien Bay Jetty)", icon:"fa-umbrella-beach", note:"重温绿松石湾的绝美海景，在码头栈桥散散步。午餐推荐在 <b>Jurien Bay Jetty Cafe</b> (4.2⭐) 享用分量十足的海鲜炸物篮 (Seafood Basket) 或爆浆牛肉汉堡，感受海风吹拂的松弛。"},
            {time:"16:00", title:"第三站: 抵达珀斯 & 还车", icon:"fa-key", note:"回到珀斯市区。还车前务必在市区附近的加油站将油箱加满（以免租车公司扣取高额加油手续费）。办理好还车手续，步行前往入住 Holiday Inn Perth City Centre。"},
            {time:"18:30", title:"都市重逢晚餐推荐", icon:"fa-utensils", note:"重回市区，推荐两家 CBD 评分 4.5+ 且对家庭极其友好的晚餐餐厅：<br>① <b>Meat & Wine Co</b> (4.5⭐) - 位于历史地标建筑内，炭火直烤的高品质安格斯牛排与秘制猪肋排香气四溢，非常受孩子们欢迎（需提前预订）；<br>② <b>Ribs & Burgers Perth</b> (4.4⭐) - 轻松欢快的现代美式餐厅，主打慢火烟熏肋排和手工精品汉堡，性价比极高，无需预约。"}
        ] 
    }"""

    days_zh_after_8 = """    { 
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
    }"""

    days_en_before_4 = """    { 
        id: 0, 
        date: "Jun 11", 
        fullDate: "Jun 11 (Thu)", 
        title: "Arrive in Perth - Relax & Adjust", 
        location: "Perth", 
        type: "city", 
        stay: "Novotel Perth Murray Street", 
        driving: "Airport transfer ~30 mins", 
        tags: ["Fine Breakfast", "Hotel Pool", "Steak Dinner"], 
        desc: "Arrive in Perth and check in at the centrally located Novotel. Focus on relaxing and enjoying food on the first day.", 
        activities: [
            {time:"06:00", title:"Arrive at Perth Airport (PER)", icon:"fa-plane-arrival", note:"Take an Uber XL to the city center after clearing customs."},
            {time:"09:00", title:"Breakfast: Petition Kitchen", icon:"fa-mug-hot", note:"【Expert Recommended】Located in the State Buildings, serving a fine western breakfast in an elegant, relaxed setting."},
            {time:"11:00", title:"Elizabeth Quay", icon:"fa-water", note:"Take photos with the Spanda sculpture, and kids can enjoy the Venetian Carousel."},
            {time:"14:00", title:"Check-in & Pool Time", icon:"fa-hotel", note:"Check in at Novotel Perth Murray St. Relax at the heated pool on the 12th floor in the afternoon."},
            {time:"18:00", title:"Dinner: Meat & Wine Co", icon:"fa-utensils", note:"【Booking Required】A high-quality steakhouse located in a heritage building. Ribs are highly recommended for kids."}
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
        desc: "Sleep in, find a high-rated brunch cafe in the city center, then start a leisurely walking tour from the CBD to London Court, Elizabeth Quay, and along the Swan River, climb Jacobs Ladder to Kings Park to enjoy the sunset, and finish with a local dinner.", 
        activities: [
            {time:"10:30", title:"Leisurely Brunch Recommendations", icon:"fa-mug-hot", note:"Sleep in and try two 4.5+ star, $$ brunch options:<br>① <b>Tiisch</b> (4.6⭐) - Famous for its Matcha Pancakes in a bright, green environment;<br>② <b>La Veen Coffee & Kitchen</b> (4.6⭐) - Located in a heritage building, famous for specialty coffee and creative all-day brunch (e.g., potato rosti, Shakshuka)."},
            {time:"12:00", title:"Stop 1: London Court", icon:"fa-dungeon", note:"A short walk from the hotel. A Tudor-style alley that feels like stepping into London, great for photos! Look up at the exquisite chiming clock 🕰️. Outside is the shopping street (most shops closed today due to the public holiday, perfect for quiet photography)."},
            {time:"13:30", title:"Stop 2: Elizabeth Quay", icon:"fa-water", note:"Walk south to the quay and walk across the iconic double-arc bridge. Feel the river breeze and watch ferries cross, enjoying WA's signature relaxation 🌊."},
            {time:"15:00", title:"Stop 3: Swan River Side Walk", icon:"fa-person-walking-dashed-line", note:"Walk west along the river path. A bit long but offers stunning views and wooden benches to rest. If lucky, you might spot black swans waddling on the shore 🦢."},
            {time:"16:30", title:"Stop 4: Kings Park (Climb Jacobs Ladder)", icon:"fa-mountain", note:"Walk under the overpass, cross the roundabout, and locate Jacobs Ladder. Climb up the 242-step stairs (enjoying murals along the way), and follow the signs to Kings Park. The leg-aching climb is instantly rewarded by the panoramic view of Perth City! Sunset and night views are even more beautiful 🌿."},
            {time:"18:30", title:"Dinner Recommendations", icon:"fa-utensils", note:"Recommend two 4.5+ star, $$ dinner spots:<br>① <b>Bivouac Canteen & Bar</b> (4.6⭐) - Located in Northbridge, Middle Eastern-inspired shared plates (e.g., slow-cooked lamb shoulder, hummus with warm bread) in an artsy atmosphere;<br>② <b>Alba</b> (4.5⭐) - Located in Yagan Square (Stories), modern Italian restaurant with fresh handmade pasta and pizzas, family-friendly."}
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
            {time:"10:30", title:"Lancelin Sand Dunes", icon:"fa-wind", note:"Rent a sandboard (~$10/hr) and slide down the towering pure-white dunes. It's a blast for kids!<br><b>Tips:</b> The dunes reflect strong sunlight and can be windy. Wear sunglasses and sunscreen. Sandals or bare feet are recommended for easy cleaning."},
            {time:"12:30", title:"Lunch in Cervantes", icon:"fa-shrimp", note:"Two great $$ options:<br>① <b>Lobster Shack</b> (4.1⭐, mentioned in itinerary) - Enjoy fresh grilled rock lobster and chips by the beach, watching fishing boats come in;<br>② <b>Cervantes Bar and Bistro</b> (4.5⭐) - 350m from main road, serves large seafood platters, steaks, and pasta with great value."},
            {time:"14:30", title:"The Pinnacles Desert", icon:"fa-monument", note:"Walk or drive through thousands of ancient limestone pillars rising from the yellow sand, looking like a Martian landscape. Drive along the single-lane Loop Drive or walk among the rocks.<br><b>Tips:</b> Very sunny in the afternoon. Watch out for wild kangaroos and emus crossing the drive."},
            {time:"17:00", title:"Check in at Jurien Bay", icon:"fa-bed", note:"Check in at Jurien Bay Tourist Park. Centrally located, right next to the beach, perfect for walking along the jetty to watch the sunset."},
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
            {time:"09:15", title:"Greenough Leaning Trees", icon:"fa-tree", note:"Roadside stop. Due to strong winds from the Southern Ocean, these eucalyptus trees grow horizontally along the ground. Be careful of traffic when taking photos."},
            {time:"10:30", title:"Geraldton Memorial", icon:"fa-landmark", note:"Visit the HMAS Sydney II Memorial on the hill. The dome of silver seagulls overlooks the entire bay and offers panoramic views. It can be very windy, so a jacket is recommended."},
            {time:"12:00", title:"Lunch in Geraldton", icon:"fa-hamburger", note:"Two 4.5+ star, $$ options on Marine Terrace (West End):<br>① <b>Salt Dish</b> (4.6⭐) - Charming vintage courtyard cafe, serves creative main courses and pastas;<br>② <b>Piper Lane Cafe</b> (4.6⭐) - Artsy cafe, serves healthy salad bowls, tacos, burgers, and excellent coffee."},
            {time:"13:30", title:"Pink Lake (Hutt Lagoon)", icon:"fa-palette", note:"【Highlights】11:00 to 14:00 is the best time for photos, as the overhead sun reflects the brightest rose-pink color! White or light-colored clothes look best here. Do not walk into mud on the edge. Flying drones offers a stunning view of pink and green salt fields."},
            {time:"16:30", title:"Check in at Kalbarri", icon:"fa-bed", note:"Check in at Kalbarri Murchison View Hotel. Take a rest. The hotel is opposite the Murchison River where you can watch pelicans and sunsets."},
            {time:"18:00", title:"Dinner in Kalbarri", icon:"fa-utensils", note:"Recommend two $$ options:<br>① <b>Finlay's Kalbarri</b> (4.5⭐, mentioned in itinerary) - 600m from hotel, famous open-air microbrewery serving fresh grilled seafood under trees;<br>② <b>Upstairs Restaurant</b> (4.6⭐) - 120m from hotel (12 Grey St), second-floor balcony overlooking the river, serving local snapper and steaks."}
        ] 
    }"""

    days_en_4_to_8 = """    { 
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
            {time:"09:15", title:"Stop 1: Nature's Window", icon:"fa-camera-retro", note:"【Iconic Spot & Geological Story】A natural red sandstone arch framing the Murchison River loop below. The sandstone layers show striking red and white bands, which are ancient tidal ripples fossilized over 400 million years.<br><b>Photo Tip:</b> Before 9:30 AM is the best time for soft light. Stand inside the window frame while the photographer shoots from the outer rocks, using the rock as a natural photo frame. <i>Travel Tip: Winter in WA can be fly-heavy; wearing a fly net is highly recommended. Wear sturdy, slip-resistant walking shoes as the sandstone can be slippery.</i>"},
            {time:"11:00", title:"Stop 2: Kalbarri Skywalk", icon:"fa-bridge", note:"【Thrilling Views & Indigenous Art】Twin cantilevered viewing platforms suspended 100 meters above the canyon floor. Walk over the steel-grate walkway and look straight down into the deep gorge below—a heart-pounding experience!<br><b>Aboriginal Culture:</b> The skywalk pathway features beautiful sculptures and artworks by local Nanda artists, detailing their Dreamtime stories. There is a kiosk serving cold drinks and ice cream under the shade of native trees."},
            {time:"12:30", title:"Picnic Lunch: Pelican Café & Local Bakery", icon:"fa-bread-slice", note:"Enjoy a gourmet burger or toasted paninis at <b>The Pelican Café</b>, or head to the historic <b>Kalbarri Bakery</b> to buy fresh, hot meat pies and desserts (try their legendary Vanilla Slice). Bring your lunch to the benches at Chinaman's Beach. Wild pelicans often swim along the shoreline at midday, which is a delight to watch."},
            {time:"14:30", title:"Stop 3: Self-Drive River Tinny Hire", icon:"fa-ship", note:"【Highly Recommended for Families】No boat license required! Hire a 4-seater aluminum motorboat (Tinny) with a sunshade from Kalbarri Boat Hire. After a quick briefing on steering and throttle, you become the captain! Navigate the calm waters of the Murchison River mouth. Kids can sit at the front to help steer. Look out for families of black swans and pelicans. The water is very calm and safe—a golden highlight for the family."},
            {time:"17:00", title:"Stop 4: Red Bluff Coastal Cliffs Sunset", icon:"fa-water", note:"【Photography Heaven】Drive to the Red Bluff lookout. The cliffs tower high above the Indian Ocean, where massive waves clash violently against the crimson rocks, generating tall white sea sprays. In the golden sunset hour, the entire cliff turns into a glowing fiery red, contrasting with the dark blue ocean waves—incredibly stunning and photogenic."},
            {time:"18:00", title:"Local Seafood Dinner Recommendations", icon:"fa-utensils", note:"Two exceptional dining choices in town (4.5+ star, $$):<br>① <b>Finlay's Kalbarri</b> (4.5⭐) - A legendary open-air microbrewery and restaurant set on red sand under giant gum trees. Feast on fresh, locally caught fish (like Snapper or Emperor) grilled over hot charcoals. The cozy fire pits and lively rustic vibe are unmatched;<br>② <b>Upstairs Restaurant</b> (4.6⭐) - Just 120m from your hotel. Sit on the balcony for river views, serving local rock lobster pasta, fresh snapper, and premium beef steaks with outstanding service."}
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
        tags: ["Outback Drive", "Roadhouse Stop", "Pure Shell Beach", "Eagle Bluff Walk", "Resort Emus", "Waterfront Dining"], 
        desc: "Drive north through the vast outback to the World Heritage listed Shark Bay. Walk barefoot on the pure white Shell Beach and float in its hyper-saline water; look down from the boardwalk at Eagle Bluff to spot sharks, turtles, and rays in the crystal-clear shallow bay. Arrive at the scenic Monkey Mia resort and watch wild emus wander around.", 
        route: [{from:"Kalbarri", to:"Overlander", time:"2h50m"}, {from:"Overlander", to:"Monkey Mia", time:"1h40m"}], 
        activities: [
            {time:"09:00", title:"Outback Road Trip & Roadhouse Stop", icon:"fa-road", note:"Check out and drive north along Highway 1. This is a classic Western Australian outback drive, characterized by endless red soil and low desert shrubs. Stop at <b>Billabong Roadhouse</b> or <b>Overlander Roadhouse</b> for fuel, hot pies, cold drinks, and a quick stretch to break the long drive. Keep a sharp eye out for wild goats and kangaroos crossing the highway."},
            {time:"13:00", title:"Stop 1: Shell Beach", icon:"fa-gem", note:"【World Wonder & Science Background】One of only two beaches in the world made entirely of tiny white shells (Fragum erugatum) instead of sand, stretching over 110km and several meters deep. Because of high salt evaporation, the water here is twice as salty as ordinary sea water, keeping predators out and allowing this mollusk to thrive.<br><b>Photo & Travel Tips:</b> Wear sunglasses as the pure white beach is extremely reflective! The crystal-clear, hypersaline water has high buoyancy, allowing you to float easily for a fun photo. Showers are available to rinse off the salt."},
            {time:"14:30", title:"Stop 2: Eagle Bluff Lookout", icon:"fa-binoculars", note:"【Marine Life Spotting & Clifftop Walk】Eagle Bluff is a high limestone cliff overlooking the shallow sand flats of the Denham Sound. Walk along the clifftop boardwalk.<br><b>Expert Guide Tip:</b> This is a magnificent natural lookout. Because the water is crystal clear, you can easily spot blacktip reef sharks, shovel-nose rays, green sea turtles, and occasionally dugongs swimming in the shallow flats below. Bringing binoculars or a zoom lens is highly recommended."},
            {time:"16:30", title:"Stop 3: Check in at Monkey Mia & Spot Emus", icon:"fa-umbrella-beach", note:"Check in at the beachside RAC Monkey Mia Dolphin Resort. The resort sits on the tranquil waters of Dolphin Beach, where tall wild emus roam freely on the lawns and beach, sometimes even peeking into room doorways.<br><b>Safety Warning:</b> Emus are large wild birds. Keep a safe distance, and never feed them, as they can bite if they spot food."},
            {time:"18:00", title:"Resort Dinner Recommendations", icon:"fa-utensils", note:"Two convenient options within the resort:<br>① <b>The Boughshed</b> (4.2⭐) - The main oceanfront restaurant offering fine Australian dining (local fish, lamb loin) on a timber deck. Sit on the timber deck and watch the sunset; bookings are essential;<br>② <b>Monkey Bar</b> (4.3⭐) - A casual open-air beer garden serving fresh wood-fired pizzas, burgers, and cold beers. Kids can play on the lawn while parents relax."}
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
            {time:"07:45", title:"Stop 1: Wild Dolphin Feeding", icon:"fa-fish", note:"野生海豚游到沙滩浅水区互动。Rangers will select a few lucky visitors to feed the dolphins.<br><b>Important:</b> Always follow ranger instructions. Do not touch the dolphins. The first session at 7:45 AM is the most popular."},
            {time:"10:00", title:"Stop 2: Aristocat 2 Catamaran Cruise", icon:"fa-sailboat", note:"【Marine Cruise & Dugong Search】Cruise on a spacious sailing catamaran from the resort jetty into the Shark Bay Marine Park. The bay contains the world's largest seagrass meadows, supporting a massive population of endangered dugongs (sea cows). There is a 90% chance of spotting them, alongside green turtles, wild dolphins, and giant shovelnose rays swimming beneath the ship's bow net."},
            {time:"13:00", title:"Lunch in Denham Waterfront", icon:"fa-burger", note:"Drive 25 mins to Denham town. Two great $$ dining choices:<br>① <b>Shark Bay Hotel</b> (4.3⭐) - Australia's westernmost pub, serving classic fish & chips and big beef burgers on a deck overlooking the water;<br>② <b>Oceans Restaurant</b> (4.4⭐) - Waterfront dining featuring fresh local seafood chowder, steaks, and pasta with a kids' menu."},
            {time:"14:30", title:"Stop 3: Ocean Park Aquarium", icon:"fa-skull-crossbones", note:"A guided tour led by marine biologists. Watch a live shark feeding, see sea snakes, stonefish, and seahorses, and learn about the local marine ecosystem. Highly educational for kids."},
            {time:"17:00", title:"Stop 4: Denham Shell Buildings & Sunset", icon:"fa-hotel", note:"Walk past old buildings like <b>The Old Pearler</b> built entirely of coquina shell blocks. Sit on a bench at the Denham foreshore to watch a peaceful sunset over the calm waters of Shark Bay."},
            {time:"18:30", title:"Dinner Recommendations", icon:"fa-utensils", note:"Recommend two options:<br>① <b>The Old Pearler Restaurant</b> (4.6⭐) - 【Highly Recommended】Must book in advance! An intimate shell-block cottage serving gourmet local snapper and red-wine seafood stew;<br>② <b>Monkey Bar</b> (4.3⭐) - Return to the resort for wood-fired pizza and chips while kids play on the sand, letting parents unwind."}
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
        tags: ["Southbound", "Outback Drive", "Foreshore Playground", "Water Park", "Sunset Craft Beer", "Marina Seafood"], 
        desc: "Bid farewell to the dolphins of Monkey Mia and drive south back to Geraldton. Stop at outback roadhouses, and in the afternoon, let the kids burn off energy at the massive foreshore playground. Enjoy sunset drinks and fresh local lobster at the marina for dinner.", 
        activities: [
            {time:"08:30", title:"Breakfast & Departure", icon:"fa-coffee", note:"Enjoy breakfast at the resort's <b>The Boughshed</b> or pick up hot meat pies and coffees from <b>Shark Bay Bakery</b> in Denham before setting off south."},
            {time:"12:00", title:"Fuel & Roadhouse Break", icon:"fa-gas-pump", note:"Stop again at <b>Billabong Roadhouse</b> to fuel up, grab snacks, and stretch your legs in the shade to ease the long drive."},
            {time:"15:00", title:"Check in at African Reef Resort", icon:"fa-hotel", note:"Check in at African Reef Resort in Geraldton. Take a short rest; the hotel is right next to the beach."},
            {time:"16:00", title:"Stop 1: Geraldton Foreshore Playground", icon:"fa-child-reaching", note:"【Family Choice】A spectacular waterfront playground featuring climbing nets, a flying fox, slides, and a water play area. Kids can play freely while parents enjoy views of the port and sunset."},
            {time:"18:00", title:"Dinner Recommendations in Geraldton", icon:"fa-utensils", note:"Two fantastic $$ dining options near the foreshore:<br>① <b>Cutler & Smith</b> (4.5⭐) - A stylish, family-friendly bistro serving exceptional craft beers, soft-shell crab, and slow-cooked ribs;<br>② <b>Skeetas Restaurant Bar & Cafe</b> (4.4⭐) - Located at Batavia Coast Marina, offering outdoor dining with marina views. Try their local grilled Rock Lobster or seafood platter."}
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
            {time:"08:00", title:"Breakfast in Geraldton", icon:"fa-coffee", note:"Enjoy a high-quality breakfast at one of these two 4.6⭐ Marine Terrace cafes:<br>① <b>Salt Dish</b> (4.6⭐) - Vintage courtyard garden serving creative french toast and eggs benedict;<br>② <b>Piper Lane Cafe</b> (4.6⭐) - Artsy cafe serving fantastic lattes, okonomiyaki savory pancakes, and toasties. Check out and depart."},
            {time:"09:45", title:"Stop 1: Dongara Fig Tree Walk", icon:"fa-tree", note:"Drive 45 mins to Dongara. The main street is lined with massive Morton Bay Fig trees planted in 1906. Enjoy a coffee under the shade at <b>Poppies by the Park</b> (4.5⭐) to experience local village life."},
            {time:"12:00", title:"Stop 2: Jurien Bay Jetty Lunch", icon:"fa-umbrella-beach", note:"Walk along the scenic Jurien Bay Jetty. Grab lunch at <b>Jurien Bay Jetty Cafe</b> (4.2⭐), famous for generous seafood baskets, burgers, and milkshakes by the beach."},
            {time:"16:00", title:"Stop 3: Arrive in Perth & Return Car", icon:"fa-key", note:"Drive back to Perth CBD. Remember to fill the fuel tank at a nearby petrol station before returning the rental car. Check in at Holiday Inn Perth City Centre."},
            {time:"18:30", title:"Dinner Recommendations", icon:"fa-utensils", note:"Celebrate returning to the city at one of these 4.5+ star family-friendly CBD restaurants:<br>① <b>Meat & Wine Co</b> (4.5⭐) - Located in a heritage building, famous for premium charcoal-grilled steaks and ribs (bookings highly recommended);<br>② <b>Ribs & Burgers Perth</b> (4.4⭐) - Casual diner serving high-quality smoked ribs and gourmet burgers, very family-friendly, no booking needed."}
        ] 
    }"""

    days_en_after_8 = """    { 
        id: 9, 
        date: "Jun 20", 
        fullDate: "Jun 20 (Sat)", 
        title: "Perth City Life", 
        location: "Perth City", 
        type: "city", 
        stay: "Holiday Inn Perth City Centre By IHG", 
        driving: "None", 
        tags: ["Brunch", "Shopping", "Hot Chocolate"], 
        desc: "A car-free day. Sleep in, enjoy shopping and dining in the city.", 
        activities: [
            {time:"10:00", title:"Leisurely Brunch", icon:"fa-mug-hot", note:"Recommend Arrival Hall or Hylin."},
            {time:"12:00", title:"Shopping", icon:"fa-bag-shopping", note:"Walk around Murray St Mall or take the free Yellow CAT bus to Watertown Brand Outlet."},
            {time:"15:00", title:"Koko Black Afternoon Tea", icon:"fa-cake-candles", note:"Try the Hot Chocolate Flight to taste different chocolate origins."},
            {time:"18:00", title:"Dinner at Long Chim", icon:"fa-pepper-hot", note:"Located in State Buildings, serves premium Thai street food, or choose Ribs & Burgers."}
        ] 
    },
    { 
        id: 10, 
        date: "Jun 21", 
        fullDate: "Jun 21 (Sun)", 
        title: "Rottnest & Fremantle", 
        location: "Rottnest / Fremantle", 
        type: "city", 
        stay: "Holiday Inn Perth City Centre By IHG", 
        driving: "Ferry/Train", 
        tags: ["Island Bus", "Markets", "Fish & Chips"], 
        desc: "Search for the smiling quokkas on Rottnest Island and visit Fremantle Markets in the afternoon.", 
        activities: [
            {time:"07:30", title:"Ferry from Barrack St", icon:"fa-ship", note:"Enjoy Swan River views. Multi-port ticket recommended (depart from Perth, return to Freo)."},
            {time:"09:00", title:"Rottnest Island", icon:"fa-camera", note:"Take the Island Explorer Bus (easier than biking) to find quokkas and take photos."},
            {time:"14:30", title:"Ferry to Fremantle", icon:"fa-anchor", note:"Take the ferry to Fremantle (B-Shed)."},
            {time:"15:30", title:"Fremantle Markets", icon:"fa-store", note:"Bustling weekend market with honey cakes, street performers, and local crafts."},
            {time:"17:30", title:"Dinner at Kailis Fish Market", icon:"fa-fish", note:"Premium seafood platter and fish & chips right by the harbor."},
            {time:"19:30", title:"Return to Perth", icon:"fa-train", note:"Take the train (30 mins) or Uber back to the city."}
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
        desc: "Enjoy the last hours in Perth before heading to the airport in the evening.", 
        activities: [
            {time:"11:00", title:"Final Views", icon:"fa-martini-glass", note:"Enjoy drinks at The Reveley rooftop bar at Elizabeth Quay."},
            {time:"14:00", title:"Free Time/Movie", icon:"fa-film", note:"Watch a movie at Raine Square or do final shopping."},
            {time:"20:30", title:"To Perth Airport (PER)", icon:"fa-taxi", note:"Take a taxi to Terminal 1."},
            {time:"01:00", title:"Flight Departure", icon:"fa-plane-departure", note:"Red-eye flight departing in the early morning of June 23."}
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
        desc: "Journey ends, returning home with beautiful memories.", 
        activities: [{time:"06:30", title:"Arrive at Changi Airport", icon:"fa-home", note:"Welcome home!"}] 
    }"""

    # Assemble the final contents
    final_contents = f"""const itineraryDataZh = [
{days_zh_before_4},
{days_zh_4_to_8},
{days_zh_after_8}
];

const itineraryDataEn = [
{days_en_before_4},
{days_en_4_to_8},
{days_en_after_8}
];
"""

    print("Reconstruction of itineraryData.js started...")
    with open(dest_path, "w", encoding="utf-8") as f:
        f.write(final_contents)
    print("Success! itineraryData.js reconstructed completely with enriched data.")

if __name__ == "__main__":
    main()
