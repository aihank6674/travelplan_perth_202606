# -*- coding: utf-8 -*-
import os

def main():
    file_path = "scratch/enrich_all_itinerary.py"
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Update Chinese Day 5 Tags and Activities
    old_tags_5 = 'tags: ["穿越荒原", "路口加油站", "纯白贝壳沙滩", "悬崖望远镜", "野生动物巡逻", "海边度假村"],'
    new_tags_5 = 'tags: ["穿越荒原", "路口加油站", "纯白贝壳沙滩", "悬崖望远镜", "野生动物巡逻", "海边度假村", "海滩野餐", "荒野驿站"],'
    
    old_act_5 = """            {time:"09:00", title:"退房出发与内陆荒原自驾", icon:"fa-road", note:"告别卡尔巴里，沿着 Ajana Kalbarri Rd 接 1号公路北上。这是一段长达数百公里的旷野自驾，两旁是西澳标志性的矮灌木丛和红土地。中途可在 <b>Billabong Roadhouse</b> 或 <b>Overlander Roadhouse</b> 停靠充电加油。这两家是经典的澳洲荒漠驿站，可以买个热肉派、冰可乐，伸展四肢，感受真正的 Aussie Outback 氛围。同时注意避让可能横穿马路的野山羊和袋鼠。"},
            {time:"13:00", title:"第一站: 贝壳海滩 (Shell Beach)", icon:"fa-gem", note:"【全球唯二奇观 & 科学背景】这片海滩长达 110公里，深达数米，完全由细小的白色心形贝壳（学名 <i>Fragum erugatum</i>）组成，没有任何沙子。由于鲨鱼湾的狭窄海湾和高蒸发量，这里的海水盐度是普通海洋的两倍，导致大多数捕食者无法生存，这种微小贝壳得以爆发式繁衍。<br>【拍照秘籍 & 旅行技巧】<b>阳光反射极其刺眼，必须佩戴太阳镜！</b>赤脚走在贝壳上会有沙沙的响声，非常奇妙。这里的海水清澈如水晶，高盐度让浮力倍增，可以轻松拍出像死海一样漂浮在海面上的照片。旁边设有淋浴器，起身后可冲洗盐分。"},"""

    new_act_5 = """            {time:"09:00", title:"退房出发与内陆荒原自驾", icon:"fa-road", note:"告别卡尔巴里，沿着 Ajana Kalbarri Rd 接 1号公路北上。这是一段长达数百公里的旷野自驾，两旁是西澳标志性的矮灌木丛和红土地。行车途中注意避让可能横穿马路的野山羊和袋鼠。"},
            {time:"12:00", title:"午餐推荐：荒野驿站 or 海滩野餐", icon:"fa-shrimp", note:"【自驾午餐双重方案 & 专家推荐】沿途路途漫长，推荐以下两个午餐选择（均为 $$ 级别）：<br>① <b>海滩野餐（强烈推荐）</b>：出发前在卡尔巴里的 <b>Kalbarri Bakery</b> (4.3⭐) 购买新鲜出炉的热肉派 (Meat Pies)、三明治和蛋糕，带到贝壳海滩 (Shell Beach)，赤脚坐在雪白的贝壳堆上，看着Tiffany蓝的海水野餐，极其浪漫惬意；<br>② <b>Overlander Roadhouse 餐厅</b> (4.1⭐) - 位于 Shark Bay 转弯口，这是经典的澳洲内陆荒野驿站。提供分量十足的牛肉汉堡、炸薯条、新鲜三明治 and 咖啡，是在漫长自驾途中补充能量、加油休整的绝佳停靠点。"},
            {time:"13:30", title:"第一站: 贝壳海滩 (Shell Beach)", icon:"fa-gem", note:"【全球唯二奇观 & 科学背景】这片海滩长达 110公里，深达数米，完全由细小的白色心形贝壳（学名 <i>Fragum erugatum</i>）组成，没有任何沙子。由于海水盐度是普通海洋的两倍，人很容易在这里像死海一样漂浮。<br>【拍照秘籍 & 旅行技巧】<b>阳光反射极其刺眼，必须佩戴太阳镜！</b>穿着白色或鲜黄色衣物，躺在纯白贝壳上拍照极具震撼感。海滩配有淋浴区，起身后可冲洗盐分。"},"""

    # 2. Update Chinese Day 7 Tags and Activities
    old_tags_7 = 'tags: ["返程南下", "野生袋鼠", "海滨大游乐场", "滑索荡秋千", "落日精酿啤酒", "码头海景晚餐"],'
    new_tags_7 = 'tags: ["返程南下", "野生袋鼠", "海滨大游乐场", "滑索荡秋千", "落日精酿啤酒", "码头海景晚餐", "剪羊毛棚咖啡"],'

    old_act_7 = """            {time:"12:00", title:"中途休息加油", icon:"fa-gas-pump", note:"再次在 1号公路旁的 <b>Billabong Roadhouse</b> 停靠加油。这里提供冷饮、零食和干净的休息区。自驾路途漫长，在天桉树下伸展下身体，缓解疲劳非常必要。<b>请注意：西澳内陆野生动物多，行车途中务必注意避让路边的野山羊和可能突然跃出的袋鼠。</b>"},"""
    
    new_act_7 = """            {time:"11:00", title:"中途休息加油", icon:"fa-gas-pump", note:"再次在 1号公路旁的 <b>Billabong Roadhouse</b> 停靠加油。这里提供冷饮、零食和干净的休息区。自驾路途漫长，在天桉树下伸展下身体，缓解疲劳非常必要。<b>请注意：西澳内陆野生动物多，行车途中务必注意避让路边的野山羊和可能突然跃出的袋鼠。</b>"},
            {time:"12:30", title:"午餐推荐：历史小镇 or 杰拉尔顿港口", icon:"fa-utensils", note:"【自驾午餐双重方案】从猴子米亚返回杰拉尔顿途中，中午时分有两个完美的午餐去处（均为 4.5+⭐, $$）：<br>① <b>The Shearing Shed Café</b> (4.5⭐) - 位于历史小镇 Northampton，是一家由老剪羊毛棚改建的特色乡村咖啡馆，主打超大分量的手作汉堡、特色帕尼尼以及精品咖啡，乡村风情拉满；<br>② <b>Salt Dish</b> (4.6⭐) - 抵达杰拉尔顿后享用，位于市中心，拥有绿意盎然的复古小花园，招牌的手工意面和创意沙拉极其精致，给疲惫的旅途带来一份优雅的慰藉。"},"""

    # Do the replacements
    replaced = 0
    if old_tags_5 in content:
        content = content.replace(old_tags_5, new_tags_5)
        replaced += 1
    if old_act_5 in content:
        content = content.replace(old_act_5, new_act_5)
        replaced += 1
    if old_tags_7 in content:
        content = content.replace(old_tags_7, new_tags_7)
        replaced += 1
    if old_act_7 in content:
        content = content.replace(old_act_7, new_act_7)
        replaced += 1

    print(f"Patched {replaced}/4 items in Chinese section.")

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

if __name__ == "__main__":
    main()
