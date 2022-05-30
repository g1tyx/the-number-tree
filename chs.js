/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Boost '2', '3' and '4'.": "提升 '2', '3' 和 '4'.",
    "Currently:": "当前:",
    "Gain more numbers based on points.": "基于点数获得更多数字。",
    "Gain more points based on numbers.": "基于数字获得更多点数。",
    "Guide": "指南",
    "Link": "链接",
    "My server": "我的服务器",
    "Numbers": "数字",
    "Points boost itself.": "点数提升它自己。",
    "Quadruple point gain.": "四倍点数增益。",
    "Time": "时间",
    "Automation": "自动化",
    "Base++": "基础++",
    "Buyable challenge!": "可购买的挑战！",
    "Buyable challenge?": "可购买的挑战？",
    "Challenged": "挑战",
    "complete / factor. Reward: Number x2.": "完整/因子。奖励：数字x2。",
    "Complete Buyable upgrader once.": "完成一次可购买升级程序。",
    "Complete Buyable upgrader three times.": "完成 3 次可购买升级程序。",
    "Complete Super 3 in 1": "完成超级 3 合 1",
    "Factor": "因子",
    "Factors": "因子",
    "First": "第一滴血",
    "Get 1 Infinity.": "获得 1 无限。",
    "Get the first upgrade, reward: point x1.25": "获得第一次升级，奖励：点x1.25",
    "Get the fourth upgrade, reward: Number x3.": "获得第四次升级，奖励：数字x3。",
    "Inflatity": "通货膨胀",
    "More and more": "越来越多",
    "Multiply IP gain by 1e15.": "将 IP 增益乘以 1e15。",
    "Next layer at 5 Number upgrade": "下一层在 5 号升级",
    "one to fifteen": "一到十五",
    "Raise O gain to 1.5.": "将 O 增益提高到 1.5。",
    "Remove the first hardcap of '+', auto buy Factors, and Factors resets nothing.": "删除“+”的第一个硬上限，自动购买因子，因子不会重置任何内容。",
    "Remove the second hardcap of '+'.": "删除“+”的第二个硬上限。",
    "Save bank": "存档银行",
    "Super Challenged": "超级挑战",
    "Super click": "超级点击",
    "Ten Upgrade": "十次升级",
    "The first Factor milestone is better.": "第一个因子里程碑更好。",
    "Unlock a new upgrade and Factors boost number and point gain.": "解锁新的升级和因子提升数量和点数增益。",
    "Unlock a number buyable.": "解锁可购买的数字。",
    "Unlock another Factor challenge": "解锁另一个因子挑战",
    "Unlock another Factor challenge and double number gain.": "解锁另一个因子挑战和双倍数量增益。",
    "Unlock another number upgrade": "解锁另一个数字升级",
    "Unlock another number upgrade.": "解锁另一个数字升级。",
    "Unlock another Number upgrade.": "解锁另一个数字升级。",
    "Unlock Factor upgrades and gain 100% of numbers on reset per second": "解锁因子升级并在每秒重置时获得 100% 的数字",
    "Unlock the first Factor challenge": "解锁第一个因子挑战",
    "~2^10 factor": "~2^10 因子",
    "Show guide": "显示指南",
    "'Factor Alpha' is better": "“因子Alpha”更好",
    "'Factor Alpha' is much better.": "“因子Alpha”要好得多。",
    "'Factor Beta' is better.": "“因子Beta”更好。",
    "Remove the first hardcap of '2' and '4'.": "删除“2”和“4”的第一个硬上限。",
    "Goal:": "目标:",
    "Reward:": "奖励:",
    "/ factor": "/ 因子",
    "Challenges": "挑战",
    "There are upgrades that require being in a challenge (Number Upgrade).": "有些升级需要挑战（数字升级）。",
    "Remove the second hardcap of '2' but nerf it.": "移除“2”的第2个硬上限，但削弱它。",
    "Boost point and number gain based on Factors.": "提升点和数量增益基于因子。",
    "Factor Alpha": "因子 Alpha",
    "Factor Beta": "因子 Beta",
    "Numbers boost itself.": "数字提升它自己。",
    "Upgrades": "升级",
    "Factor Delta": "因子 Delta",
    "Factor Gamma": "因子 Gamma",
    "Factor Iota": "因子 Iota",
    "Factor Kappa": "因子 Kappa",
    "Factor milestone 4 and upgrades are useless.": "因子里程碑 4 和升级是无用的。",
    "Factor Theta": "因子 Theta",
    "Factor will not reset upgrades and numbers x1.5.": "因子不会重置升级和数字 x1.5。",
    "Factor Zeta": "因子 Zeta",
    "Factors are cheaper and unlock a factor upgrade.": "因子更便宜并解锁因子升级。",
    "Free Infinity": "免费无限",
    "Get '-3'": "得到'-3'",
    "Get 1 Factor shift.": "获得 1 个因子偏移。",
    "Get 1 Infinity point.": "获得 1 个无限点。",
    "Get 1 Mathematics Symbol. Reward: Always keep factor shift milestone on reset.": "获得 1 个数学符号。 奖励：始终保持因子偏移里程碑重置。",
    "Get 1.8e258 Number in IC2, reward: Number x1e50 in Row 1, 3 Infinity Challenge.": "IC2中获得1.8e258数字，奖励：第1行数字x1e50，3无限挑战。",
    "Get 1.8e308 point.": "获得 1.8e308 点。",
    "Get 18 Number Upgrade, reward: Number x5.": "获得18数字升级，奖励：数字x5。",
    "Get 1e25000 Number in IC3. Reward: Unlock 1 Infinity challenge.": "在 IC3 中获取 1e25000 数字。 奖励：解锁 1 个无限挑战。",
    "Get 1e50 Negative numbers in IC5, reward: Unlock 1 Number buyable.": "在IC5中获得1e50个负数，奖励：解锁1个可购买的数字。",
    "Get 23 Factor Upgrade. Reward: Number x1e5": "获得 23 因子升级。 奖励：数字x1e5",
    "'+' work in 'Buyable Upgrader' but nerf it in 'Buyable Upgrader'": "“+”在“可购买升级”中有效，但在“可购买升级”中削弱它",
    "'2' is useless": "'2' 没用",
    "'6', '7' and '8' are useless.": "'6'、'7' 和 '8' 没用。",
    "Buyables": "可购买",
    "Boost 'Factor Beta' and unlock 1 more factor upgrade.": "提升“因子 Beta”并解锁 1 个因子升级。",
    "No cap factor": "无上限因子",
    "No factor factor": "无因子因子",
    "No upgrade factor": "无升级因子",
    "Points and Numbers x2": "点数和数字 x2",
    "Remove the first hardcap of '3'.": "删除“3”的第一个硬上限。",
    "Remove the fourth hardcap of '2'.": "移除“2”的第四个硬上限。",
    "Remove the second hardcap of '3'": "删除“3”的第二个硬上限",
    "Remove the second hardcap of '4'.You can buy this upgrade while you are in Factor Challenge 5.": "移除“4”的第二个硬上限。您可以在因子挑战 5 中购买此升级。",
    "Remove the third hardcap of '2'. You can buy this upgrade while you are in Factor Challenge 4.": "移除“2”的第三个硬上限。 您可以在因子挑战 4 中购买此升级。",
    "Unlock 1 factor challenge": "解锁 1 因子挑战",
    "Unlock 2 factor challenges.": "解锁 2 个因子的挑战。",
    "Unlock 2 Number upgrades, 2 Factor challenges and you can buy max factor.": "解锁 2 个数字升级、2 个因子挑战，您可以购买最大因子。",
    "Unlock a number upgrade.": "解锁数字升级。",
    "You are trapped in / and No upgrade factor.": "你被困在 / 并且没有升级因子。",
    "You are trapped in 2 in 1, No cap and no factor factor.": "您被困在 2 合 1 中，没有上限，也没有因子因子。",
    "69 Infinity (NICE)": "69 无限 (不错)",
    "Auto buy Upgrade Factor, unlock 1 challenge and 5 upgrade.": "自动购买升级因子，解锁 1 次挑战和 5 次升级。",
    "First four Upgrade Factor Unlock 1 upgrade and point x2, keep upgrade on reset": "前四个升级因子解锁 1 升级和点 x2，重置时保持升级",
    "Infinity": "无限",
    "Infinity boost Negative Numbers gain and auto buy factor and number buyable.": "无限提升负数增益和自动购买因子和可购买数量。",
    "keep Factor challenge on reset, and '9' to '16' on ALL reset.": "在重置时保持因子挑战，在所有重置时保持“9”到“16”。",
    "keep Factor Upgrade, Negative number Upgrade and Negative number milestone on reset, Negative number x10.": "在重置    时保持因子升级、负数升级和负数里程碑，负数 x10。",
    "Number gain ^1.05 and point gain x100, keep upgrade on factor reset. Keep the seventeenth factor milestone on reset.": "数字增益 ^1.05 和点增益 x100，在因子重置时继续升级。保持第十七因子里程碑处于重置状态。",
    "Number gain ^1.05, keep Factor milestone and upgrade factor milestone on reset.": "数字增益 ^1.05，重置因子里程碑和升级因子里程碑。",
    "Remove the hardcap of 'Factor beta' but nerf it.": "移除“Factor beta”的硬顶，但削弱它。",
    "Unlock 1 buyable (not upgrade).": "解锁 1 个可购买（非升级）。",
    "Unlock 1 challenge (not upgrade) and point x10000.": "解锁 1 个挑战（非升级）并获得 x10000 点。",
    "Unlock 1 Negative number Upgrade and Negative number is cheaper again in IC.": "解锁 1 负数升级和负数在 IC 中再次更便宜。",
    "Unlock 1 Negative number Upgrade and Negative number is cheaper in IC.": "解锁 1 负数升级和负数在 IC 中更便宜。",
    "Unlock 1 upgrade.": "解锁 1 次升级。",
    "Unlock 2 Infinity challenge.": "解锁 2 无限挑战。",
    "Unlock 2 Number upgrades and boost the eighth milestone.": "解锁 2 号升级并提升第八个里程碑。",
    "Unlock more challenge.": "解锁更多挑战。",
    "Upgrade Factor": "升级因子",
    "Upgrade Factor boost point and Numbers gain.": "升级因子提升点和数字增益。",
    "Upgrade factor reset nothing.": "升级因子不会重置。",
    "You can buy max Infinity.": "您可以购买最大无限。",
    "Complete Infinity Point challenge 1": "完成无限点数挑战 1",
    "Don't forget achievements": "不要忘记成就",
    "Don't forget achievements again.": "不要再次忘记成就。",
    "Get 3 Infinity.": "获得 3 无限。",
    "Get IP upgrade 33.": "获取 IP 升级 33。",
    "I find the miss one!": "我找到了小姐！",
    "I forget achievements": "我忘记了成就",
    "Impossible?": "不可能的？",
    "Nine egg": "九个蛋",
    "Omega Cheaper": "Omega更便宜",
    "Omega Upgrade": "Omega升级",
    "Second infinity": "第二无限大",
    "True Infinity": "真无限",
    "twofinity challenge": "双无限挑战",
    "A new game": "新游戏",
    "Complete a Infinity challenge with 1 ???.": "用 1 ??? 完成一个无限挑战。",
    "Complete NNC4.": "完成 NNC4。",
    "Complete NNC6.": "完成 NNC6。",
    "Do ω once.": "做一次ω。",
    "Feature Factor": "特征因子",
    "Five 1": "五 1",
    "Get 1 ???.": "得到 1 ？？？",
    "Get 1 Eternity point.": "获得 1 永恒点数。",
    "Get 1 Infinity with 1 ???.": "用 1 获得 1 无限大 ???。",
    "Get 1 Mathematician.": "获得 1 名数学家。",
    "Get 1 Ordinal  Mathematician.": "获得 1 名序数数学家。",
    "Get 1 Ordinal.": "获得 1 个序数。",
    "Get 1 prestige point.": "获得 1 点声望。",
    "Get 1 shapes.": "得到 1 个形状。",
    "Get 1 super prestige point.": "获得 1 个超级声望点。",
    "Get 1 upgrade factor with 1 ???.": "获得 1 升级因子 1 ???。",
    "Get 1 zero": "得到 1 个零",
    "get Both": "两者兼得",
    "Get e11111 IP, reward: IP gain ^1.05 and x 1e40": "获得e11111 IP，奖励：IP增益^1.05和x 1e40",
    "Get the '-' upgrade in UF layer.": "在 UF 层中获取“-”升级。",
    "Infinity time": "无限时间",
    "Infinity X": "无限 X",
    "Infinityal": "无限的",
    "Make game speed >1.": "使游戏速度>1。",
    "Mathematician": "数学家",
    "Negative help us": "负面帮助我们",
    "New things": "新事物",
    "Non upgraded upgrade factor": "非升级升级因子",
    "OM rewritten": "OM重写",
    "Over Cheaper": "便宜多了",
    "Reach 1 Factor Shift with 1 ???.": "使用 1 ??? 达到 1 个因子偏移。",
    "Reach 1.8e308 points with 1 ???. Reward: Unlock '-3' earlier": "达到 1.8e308 点 1 ???。 奖励：提前解锁'-3'",
    "Speed": "速度",
    "The first layer": "第一层",
    "The greatest shapes": "最伟大的形状",
    "The sixth row layer": "第六排层",
    "Tickspeed from AD": "来自 AD 的滴答速度",
    "True OM": "真正的OM",
    "Unlock tickspeed.": "解锁滴答速度。",
    "ω boost": "ω 提升",
    "Your point and number gain ^^0.95 and ^0.95 but every ??? will rewrite the tree .": "您的点数和数字会增加 ^^0.95 和 ^0.95 但每 ??? 将重写树。",
    "Super / factor": "超/因子",
    "Super No upgrade factor": "超级无升级因子",
    "unlock a Number buyable.": "解锁可购买的号码。",
    "Upgrade challenge": "升级挑战",
    "Buyable upgrader": "可购买的升级器",
    "challenges": "挑战",
    "Factor point": "因子点",
    "Info": "信息",
    "Normal challenge": "普通挑战",
    "Points and Numbers / 1e6": "点数/1e6",
    "Points and Numbers x2 and unlock a buyable.": "点数和数字 x2 并解锁一个可购买。",
    "'-' base x2 and unlock a factor upgrade": "'-' 基数 x2 并解锁因子升级",
    "'-' have no effect and nerf '+'": "'-' 没有效果和 nerf '+'",
    "'-' work in 'Buyable Upgrader' but nerf it in 'Buyable Upgrader'": "'-' 在'可购买升级' 中工作，但在'Buyable Upgrader' 中削弱它",
    "'+' is better' (1-3) and Remove 1 hardcap of '-'  (4).": "'+' 更好' (1-3) 和删除 '-' (4) 的 1 个硬帽。",
    "'2','3' and '4' ard useless.": "'2'、'3' 和 '4' 没有用。",
    "3 and unlock a upgrade.": "3、解锁升级。",
    "Auto buy Upgrade Factor.": "自动购买升级因子。",
    "Boost '+', auto buy Factors, and Factors resets nothing": "提升“+”，自动购买因子，因子不会重置任何内容",
    "Boost '11' and '11' also boost point gain. Upgrade factor boost factor point gain.": "提升“11”和“11”也提升点增益。升级因子提升因子点增益。",
    "Boost '3'. You can buy this upgrade while you are in Factor Challenge 4.": "提升“3”。您可以在因子挑战 4 中购买此升级。",
    "Boost '5' and keep all number upgrade on reset. You can buy this upgrade while you are in Factor Challenge 1.": "提升“5”并在重置时保持所有数字升级。您可以在因子挑战 1 中购买此升级。",
    "Boost 'Factor alpha' and it also affect Factor Point gain.": "提升“因子 alpha”，它也会影响因子点增益。",
    "Boost negative numbers gain by 1.00x": "将负数增益提高 1.00 倍",
    "Boost the eighth milestone.": "推进第八个里程碑。",
    "Factor booster": "因子助推器",
    "Factor Generator": "因子生成器",
    "Factor point boost number gain.": "因子点提升数字增益。",
    "Increase '/' effect base by 0.005 and unlock an upgrade.": "将“/”效果基数增加 0.005 并解锁升级。",
    "Number boost Factor point gain.": "数字提升因子点增益。",
    "Remove the first hardcap of '2' but nerf it.": "移除“2”的第一个硬帽，但削弱它。",
    "Unlock 2 more Number upgrades.": "解锁另外 2 个号码升级。",
    "Unlock 3 Infinity challenge.": "解锁 3 无限挑战。",
    "Unlock a challenge, you can buy max factor.": "解锁挑战，您可以购买最大因子。",
    "Unlock a challenge.": "解锁挑战。",
    "Unlock a number buyable and auto buy it.": "解锁可购买的号码并自动购买。",
    "Unlock another Factor challenge and multiply point gain by 100.": "解锁另一个因子挑战并将积分增益乘以 100。",
    "Unlock factor point. multiply number gain by 2.5.": "解锁因子点。将数字增益乘以 2.5。",
    "'-' base x2 and unlock a factor challenge": "'-' 基数 x2 并解锁一个因子挑战",
    "'+' and '-' have no effect": "'+' 和 '-' 无效果",
    "Factor Epsilon": "因子ε",
    "Factor Eta": "因子Eta",
    "Next layer at 1.8e308 Numbers.": "下一层在 1.8e308 数字。",
    "Super 2 in 1": "超级二合一",
    "Unlock a number buyable and Number x2": "解锁一个可购买的号码和号码 x2",
    "Unlock the first upgrade factor challenge.": "解锁第一个升级因子挑战。",
    "You are trapped in super / and super No upgrade factor.": "你被困在超级/超级没有升级因子。",
    "69 ω completions": "69 ω 完成",
    "again": "再次",
    "Auto buy IP upgrade. Keep E and MS milestone and NN challenge on reset.": "自动购买IP升级。在重置时保持 E 和 MS 里程碑和 NN 挑战。",
    "Boost 'Factor Lambda'": "提升“因子 Lambda”",
    "boost Factor milestone 1.": "提升因子里程碑 1。",
    "divide point will reset to 1e20 and give 1 Subtraction point if it smaller than 1.": "分割点将重置为 1e20，如果小于 1，则给出 1 个减法点。",
    "Do IP reset in this challenge to get more IP": "在这个挑战中重置 IP 以获得更多 IP",
    "Euclid": "欧几里得",
    "Factor are cheaper, Boost or nerf is boost IP instead of NN.": "Factor 更便宜，Boost 或 nerf 是 boost IP 而不是 NN。",
    "Factor are cheaper.": "因子更便宜。",
    "Factor boost Negative numbers gain and unlock 1 upgrade.": "因子提升负数获得并解锁 1 次升级。",
    "Factor Chi": "因子Chi",
    "Factor is cheaper.": "因子更便宜。",
    "Factor Lambda": "因子 Lambda",
    "Factor Mu": "Mu因子",
    "Factor Nu": "因子 Nu",
    "Factor Omega": "欧米茄因子",
    "Factor Omicron": "因子 Omicron",
    "Factor Phi": "因子",
    "Factor Pi": "因子 Pi",
    "Factor Psi": "因子 Psi",
    "Factor Rho": "Rho因子",
    "Factor shift": "因子偏移",
    "Factor shift reset nothing and per factor shift (up to 5) unlock a prime factor.": "因子移位不会重置任何内容，并且每个因子移位（最多 5 个）解锁一个主要因子。",
    "Factor Sigma": "因子西格玛",
    "Factor Tau": "因子 Tau",
    "Factor Upsilon": "因子 Upsilon",
    "Factor Xi": "因子 Xi",
    "Game speed ^1.01. EP x1e8 and Mathematician is cheaper": "游戏速度^1.01。 EP x1e8 和 Mathematician 更便宜",
    "Keep I milestone and challenge on reset.": "在重置时保持我的里程碑和挑战。",
    "Keep IP content on reset.": "保持 IP 内容处于重置状态。",
    "Keep IP milestone on reset. Ordinal boost EP gain.": "保持 IP 里程碑复位。序数提升 EP 增益。",
    "Keep IP upgrade on reset.": "重置时保持 IP 升级。",
    "Keep IP, F, UF milestone on reset.": "保持 IP、F、UF 里程碑复位。",
    "Keep MS and UF upgrade on reset.": "重置时保持 MS 和 UF 升级。",
    "Keep Negative numbers challenge on reset.": "在重置时保持负数挑战。",
    "Keep Negative numbers, Infinity challenge, UF upgrade on reset. Unlock new UF upgrade.": "在重置时保持负数、无限挑战、UF 升级。解锁新的 UF 升级。",
    "Keep UF buyable on row 4 reset .": "在第 4 行重置时保持 UF 可购买。",
    "Keep UF upgrade on reset, auto buy buyable.": "重置时保持UF升级，自动购买可购买。",
    "Mathematics Symbol": "数学符号",
    "MP boost CP gain.": "MP 提升 CP 增益。",
    "Next layer at '1.798F308' upgrade (Just a upgrade name).": "'1.798F308' 升级的下一层（只是一个升级名称）。",
    "Number ^2 and Ordinal boost CP gain.": "Number ^2 和 Ordinal 提升 CP 增益。",
    "Number boost point gain.": "数字提升点增益。",
    "Number gain ^0.00002": "数字增益 ^0.00002",
    "Number gain ^1.14. However, remove upgrade factor layer (You can't get UF, but their challenge and upgrade won't reset.)": "数字增益 ^1.14。但是，删除升级因子层（您无法获得UF，但他们的挑战和升级不会重置。）",
    "Ordinal": "序数",
    "Remove E layer but Number ^10. Shape reset nothing.": "删除 E 层但编号 ^10。形状重置什么。",
    "Remove the third hardcap of '4'. You can buy this upgrade while you are in Factor Challenge 9.": "移除“4”的第三个硬帽。您可以在 Factor Challenge 9 中购买此升级。",
    "Shapes": "形状",
    "The '/' effect is always 3.08": "'/' 效果始终为 3.08",
    "The '+' effect is always 1.79e308": "'+' 效果始终为 1.79e308",
    "The 'x' effect is always 1.79e308": "'x' 效果始终为 1.79e308",
    "Tickspeed effect is better.": "滴答速度效果更好。",
    "True^2 Math": "真^2数学",
    "unlock ???.": "开锁 ？？？。",
    "Unlock 1 Negative number Upgrade": "解锁1个负数升级",
    "Unlock 1 number Upgrade": "解锁 1 个号码 升级",
    "Unlock 4 upgrade and Number ^1.1": "解锁 4 升级和编号 ^1.1",
    "Unlock a new prime factor, keep challenge point and upgrade point on reset.": "解锁一个新的主要因子，在重置时保持挑战点和升级点。",
    "Unlock Mathematics Symbol and Infinity point gain x100.": "解锁数学符号和无限点增益 x100。",
    "Unlock new Infinity challenge.": "解锁新的无限挑战。",
    "Unlock new upgrade challenge.": "解锁新的升级挑战。",
    "Unlock the third Infinity challenge": "解锁第三个无限挑战",
    "Upgrade Factors are cheaper and you can buy max it.": "升级因子更便宜，您可以购买最多。",
    "Upgrade factors are cheaper.": "升级因子更便宜。",
    "Which make Number Gain ^3,922": "这使得数字增益 ^3,922",
    "You can complete ω 1000 times.": "你可以完成 ω 1000 次。",
    "You have 0 Factors": "你有 0 个因子",
    "You have 2 layer left to unlock.": "您还有 2 层要解锁。",
    "Your have 1.65e9 Addition points.": "你有 1.65e9 加分。",
    "Your point and number gain ^^1 and ^1 but every ??? will rewrite the tree .": "您的点数和数字会增加 ^^1 和 ^1 但每个 ???将重写树。",
    "Your prime factor product is 1.00, which make you gain 1.00 prime factor point per second.": "您的素数因子生产是 1.00，这使您每秒获得 1.00 素数因子点数。",
    "1e105 prime factor point": "1e105 素数因子点数",
    "Factors are cheaper.": "因子更便宜。",
    "Master -": "掌握 -",
    "Master +": "掌握 +",
    "Remove the third hardcap of '3'. You can buy this upgrade while you are in Factor Challenge 11.": "删除“3”的第三个硬上限。 您可以在 因子挑战 11 中购买此升级。",
    "The '-' effect is always 1e50": "'-' 效果始终为 1e50",
    "The '+' effect is always 1e120": "'+' 效果始终为 1e120",
    "Unlock another buyable and a new numbers upgrade": "解锁另一个可购买和新数字升级",
    "Unlock the first factor buyable": "解锁第一个可购买因子",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'QQ群号:': 'QQ群号:',
    'N': 'N',
    'F': 'F',
    'I': 'I',
    'UF': 'UF',
    'i': 'i',
    'G': 'G',
    'x': 'x',
    'L': 'L',
    'O': 'O',
    'M': 'M',
    'T': 'T',
    'X': 'X',
    'v0.3.2.1 alpha 1': 'v0.3.2.1 alpha 1',
    'OM': 'OM',
    'FS': 'FS',
    'MS': 'MS',
    'S': 'S',
    '+': '+',
    '-': '-',
    'A': 'A',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Time played (real time): ": "游戏时长（实时）：",
    "Numbers and points gain x": "数字和点数增益 x",
    "Numbers and Points x": "数字和点数 x",
    "Boosts Numbers gain by ": "提升 数字 增益 ",
    "Boosts points gain by ": "提升 点数 增益 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)x$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^Next at (.+) Infinity$/, '下一个在 $1 无限'],
    [/^Next layer at (.+) Infinity.$/, '下一层在 $1 无限。'],
    [/^Next layer at (.+) Factor challenge$/, '下一层在 $1 因子挑战'],
    [/^You have (.+) layers left to unlock.$/, '您还有 $1 层需要解锁。'],
    [/^You have completed this challenge (.+) times.$/, '您已完成此挑战 $1 次。'],
    [/^You are gaining (.+) Factor Point per second.$/, '您每秒获得 $1 因子点数。'],
    [/^You are gaining (.+) Numbers per second$/, '您每秒获得 $1 数字'],
    [/^(.+) base x(.+). You can buy this upgrade while you are in Factor Challenge (.+).$/, '$1 基数 x$2。 您可以在因子挑战 $3 中购买此升级。'],
    [/^You have (.+) Factor point, which make factor cost base (.+)$/, '您有 $1 因子点数，这使得因子成本基数 $2'],
    [/^Your have (.+) prime factor point, which boost factor and number exp by (.+).$/, '您有 $1 素数因子点数，这会将因数和数字 指数 提高 $2。'],
    [/^You have (.+) Numbers$/, '你有 $1 数字'],
    [/^You have (.+) Infinity$/, '你有 $1 无限'],
    [/^Get (.+) Number upgrade$/, '获得 $1 个数字升级'],
    [/^Get (.+) Number upgrade.$/, '获得 $1 个数字升级。'],
    [/^Get (.+) upgrade.$/, '获得 $1 升级。'],
    [/^Get (.+) factor$/, '获得 $1 因子'],
    [/^Get (.+) factor.$/, '获得 $1 因子。'],
    [/^Get (.+) factors.$/, '获得 $1 因子。'],
    [/^Get (.+) factors$/, '获得 $1 因子'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) Numbers$/, '$1e$2 数字'],
    [/^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+) Numbers$/, '$1e$2 \/ $3e$4 数字'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+)e([\d\.,]+) factors$/, '$1e$2 因子'],
    [/^([\d\.]+)e([\d\.,]+) Ordinal$/, '$1e$2 序数'],
    [/^([\d\.]+)e([\d\.,]+) Numbers$/, '$1e$2 数字'],
    [/^e([\d\.]+)e([\d\.,]+) Numbers$/, 'e$1e$2 数字'],
    [/^e([\d\.]+)e([\d\.,]+) \/ e([\d\.]+)e([\d\.,]+) Numbers$/, 'e$1e$2 \/ e$3e$4 数字'],
    [/^Number \^([\d\.]+) but NN \^([\d\.]+).$/, '数字 \^$1 但 NN \^$2。'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) in ([\d\.,]+)$/, '$1 合 $2'],
    [/^Boost or nerf ([\d\.,]+)$/, '提升或削弱 $1'],
    [/^Boost \'([\d\.,]+)\'.$/, '提升 \'$1\'.'],
    [/^([\d\.,]+) Factor shift$/, '$1 因子偏移'],
    [/^([\d\.,]+) Ordinal$/, '$1 序数'],
    [/^([\d\.,]+) Numbers$/, '$1 数字'],
    [/^([\d\.,]+) points$/, '$1 点数'],
    [/^([\d\.,]+) Infinity$/, '$1 无限'],
    [/^([\d\.,]+) Upgrade Factor$/, '$1 升级因子'],
    [/^([\d\.,]+) factor$/, '$1 因子'],
    [/^([\d\.,]+) factors$/, '$1 因子'],
    [/^([\d\.,]+) Factors$/, '$1 因子'],
    [/^\((.+)\/sec\)$/, '（$1\/秒）'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) Factors$/, '成本：$1 因子'],
    [/^Cost: Infinity Numbers$/, '成本：无限 数字'],
    [/^Cost: (.+) Numbers$/, '成本：$1 数字'],
    [/^Cost : (.+) Numbers$/, '成本：$1 数字'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Currently: (.+)x$/, '当前：$1x'],
    [/^Req: (.+) \/ (.+) Number$/, '要求：$1 \/ $2 数字'],
    [/^Req: (.+) \/ (.+) Numbers$/, '要求：$1 \/ $2 数字'],
    [/^Req: (.+) \/ (.+) Infinity point$/, '要求：$1 \/ $2 无限点'],
    [/^Req: (.+) \/ (.+) Eternity points$/, '要求：$1 \/ $2 永恒点'],
    [/^Req: (.+) \/ (.+) Factors$/, '要求：$1 \/ $2 因子'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);