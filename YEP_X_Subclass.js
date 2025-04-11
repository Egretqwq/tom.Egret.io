//=============================================================================
// Yanfly Engine Plugins - Class Change Core Extension - Subclass
// YEP_X_Subclass.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_Subclass = true;

var Yanfly = Yanfly || {};
Yanfly.Subclass = Yanfly.Subclass || {};
Yanfly.Subclass.version = 1.11

//=============================================================================
 /*:
 * @plugindesc 官方版本：v1.11 | 007-职业变更核心扩展：副职业(第二职业)
 * @author Yanfly Engine Plugins(YEP) | 汉化+机翻：YuukakeID
 *
 * @param --职业菜单--
 * @default
 *
 * @param 副职业命令
 * @parent --职业菜单--
 * @desc '副职业'命令的文本
 * @default 副职业
 *
 * @param 显示命令
 * @parent --职业菜单--
 * @type boolean
 * @on 显示
 * @off 隐藏
 * @desc 默认显示/隐藏副职业命令
 * @default true
 *
 * @param 启用命令
 * @parent --职业菜单--
 * @type boolean
 * @on 启用
 * @off 禁用
 * @desc 默认启用/禁用副职业命令
 * @default true
 *
 * @param 名称格式
 * @parent --职业菜单--
 * @desc 职业和副职业的显示文本
 * 主职业：%1    副职业：%2
 * @default %1/副：%2
 *
 * @param 副职业颜色
 * @parent --职业菜单--
 * @type number
 * @min 0
 * @max 31
 * @desc 角色的副职业的文本颜色
 * @default 5
 *
 * @param --能力值参数--
 * @default
 *
 * @param 生命值上限
 * @parent --能力值参数--
 * @type number
 * @decimals 2
 * @min 0
 * @desc 生命值上限加成
 * 加成量为副职业的'生命值上限'的比率，默认：0.1
 * @default 0.10
 *
 * @param 魔力值上限
 * @parent --能力值参数--
 * @type number
 * @decimals 2
 * @min 0
 * @desc 魔力值上限加成
 * 加成量为副职业的'魔力值上限'的比率，默认：0.1
 * @default 0.10
 *
 * @param 攻击力
 * @parent --能力值参数--
 * @type number
 * @decimals 2
 * @min 0
 * @desc 攻击力加成
 * 加成量为副职业的'攻击力'的比率，默认：0.2
 * @default 0.20
 *
 * @param 防御力
 * @parent --能力值参数--
 * @type number
 * @decimals 2
 * @min 0
 * @desc 攻击力加成
 * 加成量为副职业的'攻击力'的比率，默认：0.2
 * @default 0.20
 *
 * @param 魔法攻击力
 * @parent --能力值参数--
 * @type number
 * @decimals 2
 * @min 0
 * @desc 攻击力加成
 * 加成量为副职业的'攻击力'的比率，默认：0.2
 * @default 0.20
 *
 * @param 魔法防御力
 * @parent --能力值参数--
 * @type number
 * @decimals 2
 * @min 0
 * @desc 攻击力加成
 * 加成量为副职业的'攻击力'的比率，默认：0.2
 * @default 0.20
 *
 * @param 敏捷
 * @parent --能力值参数--
 * @type number
 * @decimals 2
 * @min 0
 * @desc 攻击力加成
 * 加成量为副职业的'攻击力'的比率，默认：0.2
 * @default 0.20
 *
 * @param 幸运
 * @parent --能力值参数--
 * @type number
 * @decimals 2
 * @min 0
 * @desc 攻击力加成
 * 加成量为副职业的'攻击力'的比率，默认：0.2
 * @default 0.20
 *
 * @param 经验值
 * @parent --能力值参数--
 * @type number
 * @decimals 2
 * @min 0
 * @desc 主职业获得经验值时，副职业本身获得经验值的比例
 * 比例：A%；获得经验B → 副职业本身获得B × A%点
 * @default 0.25
 *
 * @param JP
 * @text 职业点
 * @parent --能力值参数--
 * @type number
 * @decimals 2
 * @min 0
 * @desc 主职业获得职业点时，副职业本身获得职业点的比例
 * 比例：A%；获得经验B → 副职业本身获得B × A%点
 * @default 0.25
 *
 * @param --特性继承--
 * @default
 *
 * @param 技能类型
 * @parent --特性继承--
 * @type boolean
 * @on 继承
 * @off 不继承
 * @desc 继承/不继承副职业的特性-技能-添加技能类型
 * @default true
 *
 * @param 添加技能
 * @parent --特性继承--
 * @type boolean
 * @on 继承
 * @off 不继承
 * @desc 继承/不继承副职业的特性-技能-添加技能
 * @default true
 *
 * @param 通常能力值
 * @parent --特性继承--
 * @type boolean
 * @on 继承
 * @off 不继承
 * @desc 继承/不继承副职业的特性-能力值-通常能力值
 * @default false
 *
 * @param 追加能力值
 * @parent --特性继承--
 * @type boolean
 * @on 继承
 * @off 不继承
 * @desc 继承/不继承副职业的特性-能力值-追加能力值
 * @default false
 *
 * @param 特殊能力值
 * @parent --特性继承--
 * @type boolean
 * @on 继承
 * @off 不继承
 * @desc 继承/不继承副职业的特性-能力值-特殊能力值
 * @default false
 *
 * @param 属性有效度
 * @parent --特性继承--
 * @type boolean
 * @on 继承
 * @off 不继承
 * @desc 继承/不继承副职业的特性-抗性-属性有效度
 * @default false
 *
 * @param 弱化有效度
 * @parent --特性继承--
 * @type boolean
 * @on 继承
 * @off 不继承
 * @desc 继承/不继承副职业的特性-抗性-弱化有效度
 * @default false
 *
 * @param 状态有效度
 * @parent --特性继承--
 * @type boolean
 * @on 继承
 * @off 不继承
 * @desc 继承/不继承副职业的特性-抗性-状态有效度
 * @default false
 *
 * @param 状态免疫
 * @parent --特性继承--
 * @type boolean
 * @on 继承
 * @off 不继承
 * @desc 继承/不继承副职业的特性-抗性-状态免疫
 * @default false
 *
 * @param 攻击时属性
 * @parent --特性继承--
 * @type boolean
 * @on 继承
 * @off 不继承
 * @desc 继承/不继承副职业的特性-攻击-攻击时属性
 * @default false
 *
 * @param 攻击时状态
 * @parent --特性继承--
 * @type boolean
 * @on 继承
 * @off 不继承
 * @desc 继承/不继承副职业的特性-攻击-攻击时状态
 * @default false
 *
 * @param 装备武器类型
 * @parent --特性继承--
 * @type boolean
 * @on 继承
 * @off 不继承
 * @desc 继承/不继承副职业的特性-装备-装备武器类型
 * @default false
 *
 * @param 装备护甲类型
 * @parent --特性继承--
 * @type boolean
 * @on 继承
 * @off 不继承
 * @desc 继承/不继承副职业的特性-装备-装备护甲类型
 * @default false
 *
 * @help
 *
 * 机翻版本：v0.03  完成时间：2023.10.07
 *
 * 插件官方描述：
 * (必需YEP_ClassChangeCore.js)允许你的角色副职业划分为二级职业！
 *
 * ============================================================================
 * 介绍
 * ============================================================================
 *
 * 需要安装并开启YEP_ClassChangeCore插件
 * 在YEP_ClassChangeCore下方安装本插件
 *
 * 角色的职业可以变为“副职业/第二职业”，并享有“副职业”的一系列能力：
 * 获得一部分能力值奖励加成，如：
 * 继承副职业的技能集、武器类型和护甲类型等
 *
 * ============================================================================
 * 备注标签
 * ============================================================================
 *
 * 使用一下备注标签来对“副职业”进行修改调节
 *
 * 角色 备注标签(本备注标签不区分大小写)：
 *
 *   <副职业: 数字x>  //或可用<Subclass: 数字x>
 *   设置玩家的默认 副职业 
 *
 *   <禁止转职副>    //或可用<禁止副职业转职>、<Cannot Change Subclass>
 *   禁止角色改变 副职业 
 *   但仍然可以通过插件命令更改 副职业 
 *
 *   <转职限制主: 数字x>
 *         //或可用<转职主职业限制: 数字x>、<Restrict Class: 数字x>
 *   <转职限制主: 数字a, 数字b, 数字c, …>
 *        //或可用<转职主职业限制: 数字a, 数字b, 数字c, …>
 *        //或可用<Restrict Class: 数字a, 数字b, 数字c, …>
 *   <转职限制主: 数字x到数字y>
 *        //或可用<转职主职业限制: 数字x到数字y>
 *        //或可用<Restrict Class: 数字x to 数字y>
 *   设置角色的 主职业 不能切换为指定数字编号的职业
 *   但仍然可以通过事件来切换 主职业 
 *   (如：事件指令-更改职业，下同)
 * 例如：<转职限制主: 1>
 * 即为：角色的 主职业 不能转为1号职业(当前职业可以为1号职业，下同)
 * 例如：<转职限制主: 2,3,6>
 * 即为：角色的 主职业 不能转为2、3、6号职业
 * 例如：<转职限制主: 7到20>
 * 即为：角色的 主职业 不能转为7到20号的所有职业
 *
 *   <转职限制副: 数字x>
 *        //或可用<转职副职业限制: 数字x>、<Restrict Subclass: 数字x>
 *   <转职限制副: 数字a, 数字b, 数字c, …>
 *        //或可用<转职副职业限制: 数字a, 数字b, 数字c, …>
 *        //或可用<Restrict Subclass: 数字a, 数字b, 数字c, …>
 *   <转职限制副: 数字x到数字y>
 *        //或可用<转职副职业限制: 数字x到数字y>
 *        //或可用<Restrict Subclass: 数字x to 数字y>
 *   设置角色的 副职业 不能切换为指定数字编号的职业
 *   但仍然可以通过事件来切换 副职业 
 *   (如：事件指令-插件命令-ChangeSubclass【详见插件命令部分说明】，下同)
 * 例如：<转职限制副: 1>
 *    //等同于<转职副职业限制: 1>
 *    //等同于<Restrict Subclass: 1>
 * 即为：角色的 副职业 不能转为1号职业
 * 例如：<转职限制副: 2,3,6>
 *    //等同于<转职副职业限制: 2,3,6>
 *    //等同于<Restrict Subclass: 2,3,6>
 * 即为：角色的 副职业 不能转为2、3、6号职业
 * 例如：<转职限制副: 7到20>
 *    //等同于<转职副职业限制: 7到20>
 *    //等同于<Restrict Subclass: 7 to 20>
 * 即为：角色的 副职业 不能转为7到20号的所有职业
 *
 *
 * 职业 备注标签(本备注标签不区分大小写)：
 *   <作主职业>  //或可用<仅作为主职业>、<Primary Only>
 *   转职时，有此备注标签的职业只能作为 主职业 使用(不影响当前)
 *   角色仍然可以通过事件来切换该职业为 主职业 
 *
 *   <作副职业>  //或可用<仅作为副职业>、<Subclass Only>
 *   转职时，有此备注标签的职业只能作为 副职业 使用(不影响当前)
 *   角色仍然可以通过事件来切换该职业为 副职业 
 *
 *   <副职业数字x组合名: 文字>
 *        //或可用<副职业数字x联动名: 文字>
 *        //或可用<Subclass 数字x Combo Name: 文字>
 *   当前备注的职业是 主职业 时，若 副职业 是指定数字编号的职业，则：
 *   显示的职业名将是指定的 文字文本 
 *   例如：
 *     给49号职业“承太郎”备注：<副职业50组合名: 无敌JoJo>
 *      当 主职业 为49号职业， 副职业 编号是50号(白金之星)时
 *      显示的职业名从默认的“承太郎/白金之星”变成“无敌JoJo”
 *      //等同于<副职业50联动名: 无敌JoJo>
 *      //等同于<Subclass 50 Combo Name: 无敌JoJo>
 *
 *   <职业名字组合名: 文字>
 *        //或可用<职业名字联动名: 文字>
 *        //或可用<职业名字 Combo Name: 文字>
 *   使用 职业名字 来代替职业编号
 *   当前备注的职业是 主职业 时，若 副职业 的名字是指定名字的职业，则：
 *   显示的职业名将是指定的 文字文本 
 *   例如：
 *     给49号职业“承太郎”备注：<白金之星 Combo Name: 无敌JoJo>
 *      副职业 名为“白金之星”时
 *      显示的职业名从默认的“承太郎/白金之星”变成“无敌JoJo”
 *     ！ 副职业 名字匹配职业编号最大的那一个
 *     ！如：所有职业里，编号10和50的职业都是 白金之星
 *     ！且没有其他职业为 白金之星
 *     ！则只有 副职业 是50号的 白金之星 才能与当前主职业组合名字
 *
 *
 * 技能、物品 备注标签(本备注标签不区分大小写)：
 *   <限定主职业: 数字x>
 *        //或可用<限定可使用主职业: 数字x>
 *        //或可用<Require Class: 数字x>
 *   <限定主职业: 数字a, 数字b, 数字c, ……>
 *        //或可用<限定可使用主职业: 数字a, 数字b, 数字c, ……>
 *        //或可用<Require Class: 数字a, 数字b, 数字c, ……>
 *   <限定主职业: 数字x to 数字y>
 *        //或可用<限定可使用主职业: 数字x到数字y>
 *        //或可用<Require Class: 数字x to 数字y>
 *   设置技能和物品只能被角色 主职业 为指定数字编号的职业使用
 *   对敌人不生效
 * 例如：<限定主职业: 1>
 *    //等同于<限定可使用主职业: 1>
 *    //等同于<Require Class: 1>
 * 即为：角色的 主职业 为1号职业才可使用此技能/此物品
 * 例如：<限定主职业: 2,3,6>
 *    //等同于<限定可使用主职业: 2,3,6>
 *    //等同于<Require Class: 2,3,6>
 * 即为：角色的 主职业 为2号，3号或6号职业才可使用此技能/此物品
 * 例如：<限定主职业: 7到20>
 *    //等同于<限定可使用主职业: 7到20>
 *    //等同于<Require Class: 7 to 20>
 * 即为：角色的 主职业 为7号到20号职业中的任一职业才可使用此技能/此物品
 *
 *   <限定副职业: 数字x>
 *        //或可用<限定可使用副职业: 数字x>
 *        //或可用<Require Subclass: 数字x>
 *   <限定副职业: 数字a, 数字b, 数字c, ……>
 *        //或可用<限定可使用副职业: 数字a, 数字b, 数字c, ……>
 *        //或可用<Require Subclass: 数字a, 数字b, 数字c, ……>
 *   <限定副职业: 数字x to 数字y>
 *        //或可用<限定可使用副职业: 数字x到数字y>
 *        //或可用<Require Subclass: 数字x to 数字y>
 *   设置技能和物品只能被角色 副职业 为指定数字编号的职业使用
 * 例如：<限定副职业: 1>
 *    //等同于<限定可使用副职业: 1>
 *    //等同于<Require Subclass: 1>
 * 即为：角色的 副职业 为1号职业才可使用此技能/此物品
 * 例如：<限定副职业: 2,3,6>
 *    //等同于<限定可使用副职业: 2,3,6>
 *    //等同于<Require Subclass: 2,3,6>
 * 即为：角色的 副职业 为2号，3号或6号职业才可使用此技能/此物品
 * 例如：<限定副职业: 7到20>
 *    //等同于<限定可使用副职业: 7到20>
 *    //等同于<Require Subclass: 7 to 20>
 * 即为：角色的 副职业 为7号到20号职业中的任一职业才可使用此技能/此物品
 *
 * ============================================================================
 * 插件命令
 * ============================================================================
 *
 * 使用以下插件命令，可以
 *
 * 插件命令：
 * 
 *   显示副职业选项    //或可用 ShowSubclass
 *   隐藏副职业选项    //或可用 HideSubclass
 *   - 职业变更菜单中显示/隐藏 副职业 命令
 *
 *   启用副职业选项    //或可用 EnableSubclass
 *   禁用副职业选项    //或可用 DisableSubclass
 *   - 职业变更菜单中启用/禁用 副职业 命令
 *
 *   副职业变更 角色编号 职业编号
 *      //或可用 ChangeSubclass 角色编号 职业编号
 *   - 变更指定编号的角色的副职业为指定编号的职业
 *   - 职业编号设置为0则移除角色的副职业
 *
 *   启用副职业变更 角色编号    //或可用 EnableSubclassChange 角色编号
 *   禁用副职业变更 角色编号    //或可用 DisableSubclassChange 角色编号
 *   - 指定编号的角色启用/禁用 副职业变更 功能
 *
 * ============================================================================
 * 变更日志
 * ============================================================================
 *
 * 基于'1.11'版本-By：YuukakeID
 * - 机翻君：
 * 修复了Yanfly.Param.SubStateRates调用插件参数'Debuff Rates'的错误，实际
 * 应调用插件参数'State Rates'！
 * (Debuff Rates，对应数据库的特性-抗性-弱化有效度)
 * (State Rates，对应数据库的特性-抗性-状态有效度)
 *
 * 版本 1.11：
 * - 为RPG Maker MV 1.5.0版本更新
 *
 * 版本 1.10：
 * - 与职业变更核心的<Use Nickname>备注标签的兼容性更新
 *
 * 版本 1.09：
 * - 为角色增加<Cannot Change Subclass>备注标签
 * - 为角色增加插件命令：
 *       EnableSubclassChange
 *       DisableSubclassChange
 *
 * 版本 1.08：
 * - 与其他插件的兼容性更新
 *
 * 版本 1.07：
 * - 为RPG Maker MV 1.1.0版本更新
 *
 * 版本 1.06：
 * - 增加插件参数'经验值'和'JP'，决定了经验值和职业点JP的获取比例
 *
 * 版本 1.05：
 * - 修复了更改已死亡角色的副职业会使其复活的错误
 *
 * 版本 1.04：
 * - 修正了会使战斗中的ATB仪表变成一个不同的颜色的问题
 *
 * 版本 1.03：
 * - 修复了复制非独立物品的错误
 * 
 * 版本 1.02：
 * - 修复了通过切换副职业会回满角色HP的错误
 *
 * 版本 1.01：
 * - 修复了增加了某些子类继承的最大速率的错误
 * - 由于MV的数据库未正确更新Classes.JSON文件，为未定义的副职业添加了
 * 故障保护
 *
 * 版本 1.00：
 * - 完成插件
 */
//=============================================================================

if (Imported.YEP_ClassChangeCore) {

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_X_Subclass');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.SubclassCmd = String(Yanfly.Parameters['副职业命令']);
Yanfly.Param.SubclassShowCmd = String(Yanfly.Parameters['显示命令']);
Yanfly.Param.SubclassEnableCmd = String(Yanfly.Parameters['启用命令']);
Yanfly.Param.SubclassFmt = String(Yanfly.Parameters['名称格式']);
Yanfly.Param.SubclassColor = Number(Yanfly.Parameters['副职业颜色']);

Yanfly.Subclass.Param = {};
Yanfly.Subclass.Param[0] = Number(Yanfly.Parameters['生命值上限']);
Yanfly.Subclass.Param[1] = Number(Yanfly.Parameters['魔力值上限']);
Yanfly.Subclass.Param[2] = Number(Yanfly.Parameters['攻击力']);
Yanfly.Subclass.Param[3] = Number(Yanfly.Parameters['防御力']);
Yanfly.Subclass.Param[4] = Number(Yanfly.Parameters['魔法攻击力']);
Yanfly.Subclass.Param[5] = Number(Yanfly.Parameters['魔法防御力']);
Yanfly.Subclass.Param[6] = Number(Yanfly.Parameters['敏捷']);
Yanfly.Subclass.Param[7] = Number(Yanfly.Parameters['幸运']);
Yanfly.Param.SubclassExp = Number(Yanfly.Parameters['经验值']);
Yanfly.Param.SubclassJp = Number(Yanfly.Parameters['JP']);

Yanfly.Param.SubclassSType = eval(String(Yanfly.Parameters['技能类型']));
Yanfly.Param.SubParamRates = eval(String(Yanfly.Parameters['通常能力值']));
Yanfly.Param.SubXParamVal = eval(String(Yanfly.Parameters['追加能力值']));
Yanfly.Param.SubSParamRates = eval(String(Yanfly.Parameters['特殊能力值']));
Yanfly.Param.SubSEleRates = eval(String(Yanfly.Parameters['属性有效度']));
Yanfly.Param.SubDebuffRates = eval(String(Yanfly.Parameters['弱化有效度']));
Yanfly.Param.SubStateRates = eval(String(Yanfly.Parameters['状态有效度']));
Yanfly.Param.SubStateRes = eval(String(Yanfly.Parameters['状态免疫']));
Yanfly.Param.SubAttackEle = eval(String(Yanfly.Parameters['攻击时属性']));
Yanfly.Param.SubAttackState = eval(String(Yanfly.Parameters['攻击时状态']));
Yanfly.Param.SubAddedSkills = eval(String(Yanfly.Parameters['添加技能']));
Yanfly.Param.SubclassWeapons = eval(String(Yanfly.Parameters['装备武器类型']));
Yanfly.Param.SubclassArmors = eval(String(Yanfly.Parameters['装备护甲类型']));

//=============================================================================
// DataManager
//=============================================================================

Yanfly.Subclass.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.Subclass.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!Yanfly._loaded_YEP_X_Subclass) {
    DataManager.processSubclassNotetags1($dataActors);
    DataManager.processSubclassNotetags2($dataClasses);
    DataManager.processSubclassNotetags3($dataSkills);
    DataManager.processSubclassNotetags3($dataItems);
    Yanfly._loaded_YEP_X_Subclass = true;
  }
  return true;
};

DataManager.processSubclassNotetags1 = function(group) {
  var note1a = /<(?:RESTRICT CLASS|转职限制主|转职主职业限制):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note1b = /<(?:RESTRICT CLASS|转职限制主|转职主职业限制):[ ](\d+)(?:[ ]THROUGH[ ]|[ ]to[ ]|[ ]?到[ ]?)(\d+)>/i;
  var note2a = /<(?:RESTRICT SUBCLASS|转职限制副|转职副职业限制):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note2b = /<(?:RESTRICT SUBCLASS|转职限制副|转职副职业限制):[ ](\d+)(?:[ ]THROUGH[ ]|[ ]to[ ]|[ ]?到[ ]?)(\d+)>/i;
  var note3 = /<(?:CANNOT CHANGE SUBCLASS|CANT CHANGE SUBCLASS|禁止转职副|禁止副职业转职)>/i;
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.subclassId = 0;
    obj.restrictClassChange = [];
    obj.restrictSubclassChange = [];
    obj.canChangeSubclass = true;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:SUBCLASS|副职业):[ ](\d+)>/i)) {
        obj.subclassId = parseInt(RegExp.$1);
      } else if (line.match(note1a)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        obj.restrictClassChange = obj.restrictClassChange.concat(array);
      } else if (line.match(note1b)) {
        var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
          parseInt(RegExp.$2));
        obj.restrictClassChange = obj.restrictClassChange.concat(range);
      } else if (line.match(note2a)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        obj.restrictSubclassChange = obj.restrictSubclassChange.concat(array);
      } else if (line.match(note2b)) {
        var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
          parseInt(RegExp.$2));
        obj.restrictSubclassChange = obj.restrictSubclassChange.concat(range);
      } else if (line.match(note3)) {
        obj.canChangeSubclass = false;
      }
    }
  }
};

DataManager.processSubclassNotetags2 = function(group) {
  var note1a = /<(?:SUBCLASS[ ]|副职业[ ]?)(\d+)[ ]?(?:[ ]COMBO NAME|组合名|联动名):[ ](.*)>/i;
  var note1b = /<(.*)[ ]?(?:[ ]COMBO NAME|组合名|联动名):[ ](.*)>/i;
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.primaryAllowed = true;
    obj.subclassAllowed = true;
    obj.subclassComboName = {};

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:PRIMARY ONLY|作主职业|仅作为主职业)>/i)) {
        obj.primaryAllowed = true;
        obj.subclassAllowed = false;
      } else if (line.match(/<(?:SUBCLASS ONLY|作副职业|仅作为副职业)>/i)) {
        obj.primaryAllowed = false;
        obj.subclassAllowed = true;
      } else if (line.match(note1a)) {
        var classId = parseInt(RegExp.$1);
        var className = String(RegExp.$2);
        obj.subclassComboName[classId] = className;
      } else if (line.match(note1b)) {
        var name = String(RegExp.$1).toUpperCase();
        var className = String(RegExp.$2);
        var classId = Yanfly.ClassIdRef[name];
        if (classId) obj.subclassComboName[classId] = className;
      }
    }
  }
};

DataManager.processSubclassNotetags3 = function(group) {
  var note1a = /<(?:REQUIRE CLASS|限定主职业|限定可使用主职业):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note1b = /<(?:REQUIRE CLASS|限定主职业|限定可使用主职业):[ ](\d+)(?:[ ]THROUGH[ ]|[ ]to[ ]|[ ]?到[ ]?)(\d+)>/i;
  var note2a = /<(?:REQUIRE SUBCLASS|限定副职业|限定可使用副职业):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note2b = /<(?:REQUIRE SUBCLASS|限定副职业|限定可使用副职业):[ ](\d+)(?:[ ]THROUGH[ ]|[ ]to[ ]|[ ]?到[ ]?)(\d+)>/i;
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.requiredClasses = [];
    obj.requiredSubclasses = [];

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(note1a)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        obj.requiredClasses = obj.requiredClasses.concat(array);
      } else if (line.match(note1b)) {
        var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
          parseInt(RegExp.$2));
        obj.requiredClasses = obj.requiredClasses.concat(range);
      } else if (line.match(note2a)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        obj.requiredSubclasses = obj.requiredSubclasses.concat(array);
      } else if (line.match(note2b)) {
        var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
          parseInt(RegExp.$2));
        obj.requiredSubclasses = obj.requiredSubclasses.concat(range);
      }
    }
  }
};

//=============================================================================
// Game_System
//=============================================================================

Yanfly.Subclass.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    Yanfly.Subclass.Game_System_initialize.call(this);
    this.initSubclasses();
};

Game_System.prototype.initSubclasses = function() {
    this._showSubclass = eval(Yanfly.Param.SubclassShowCmd);
    this._enableSubclass = eval(Yanfly.Param.SubclassEnableCmd);
};

Game_System.prototype.isShowSubclass = function() {
    if (this._showSubclass === undefined) this.initSubClasses();
    return this._showSubclass;
};

Game_System.prototype.isEnableSubclass = function() {
    if (this._enableSubclass === undefined) this.initSubClasses();
    return this._enableSubclass;
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Game_BattlerBase.prototype.piSubclassTraits = function(code, id) {
  if (!this.subclass()) return 1;
  var r = 1;
  for (var i = 0; i < this.subclass().traits.length; ++i) {
    var trait = this.subclass().traits[i];
    if (trait.code !== code) continue;
    if (trait.dataId !== id) continue;
    r *= trait.value;
  }
  return r;
};

Game_BattlerBase.prototype.sumSubclassTraits = function(code, id) {
  if (!this.subclass()) return 0;
  var r = 0;
  for (var i = 0; i < this.subclass().traits.length; ++i) {
    var trait = this.subclass().traits[i];
    if (trait.code !== code) continue;
    if (trait.dataId !== id) continue;
    r += trait.value;
  }
  return r;
};

Game_BattlerBase.prototype.addSubclassTraitSet = function(array, code) {
  if (!this.subclass()) return array;
  for (var i = 0; i < this.subclass().traits.length; ++i) {
    var trait = this.subclass().traits[i];
    if (trait.code === code) array.push(trait.dataId);
  }
  return array;
};

Yanfly.Subclass.Game_BattlerBase_addedSkillTypes =
    Game_BattlerBase.prototype.addedSkillTypes;
Game_BattlerBase.prototype.addedSkillTypes = function() {
  var array = Yanfly.Subclass.Game_BattlerBase_addedSkillTypes.call(this);
  if (this.isActor() && Yanfly.Param.SubclassSType) {
    this.addSubclassTraitSet(array, Game_BattlerBase.TRAIT_STYPE_ADD);
  }
  return array.filter(Yanfly.Util.onlyUnique);
};

Yanfly.Subclass.Game_BattlerBase_paramRate = 
    Game_BattlerBase.prototype.paramRate;
Game_BattlerBase.prototype.paramRate = function(paramId) {
  var rate = Yanfly.Subclass.Game_BattlerBase_paramRate.call(this, paramId);
  if (this.isActor() && Yanfly.Param.SubParamRates) {
    rate *= this.piSubclassTraits(Game_BattlerBase.TRAIT_PARAM, paramId);
  }
  return rate;
};

Yanfly.Subclass.Game_BattlerBase_xparam = Game_BattlerBase.prototype.xparam;
Game_BattlerBase.prototype.xparam = function(xparamId) {
  var value = Yanfly.Subclass.Game_BattlerBase_xparam.call(this, xparamId);
  if (this.isActor() && Yanfly.Param.SubXParamVal) {
    value += this.sumSubclassTraits(Game_BattlerBase.TRAIT_XPARAM, xparamId);
  }
  return value;
};

Yanfly.Subclass.Game_BattlerBase_sparam = Game_BattlerBase.prototype.sparam;
Game_BattlerBase.prototype.sparam = function(sparamId) {
  var rate = Yanfly.Subclass.Game_BattlerBase_sparam.call(this, sparamId);
  if (this.isActor() && Yanfly.Param.SubSParamRates) {
    rate *= this.piSubclassTraits(Game_BattlerBase.TRAIT_SPARAM, sparamId);
  }
  return rate;
};

Yanfly.Subclass.Game_BattlerBase_elementRate =
    Game_BattlerBase.prototype.elementRate;
Game_BattlerBase.prototype.elementRate = function(eleId) {
  var rate = Yanfly.Subclass.Game_BattlerBase_elementRate.call(this, eleId);
  if (this.isActor() && Yanfly.Param.SubSEleRates) {
    rate *= this.piSubclassTraits(Game_BattlerBase.TRAIT_ELEMENT_RATE, eleId);
  }
  return rate;
};

Yanfly.Subclass.Game_BattlerBase_debuffRate =
    Game_BattlerBase.prototype.debuffRate;
Game_BattlerBase.prototype.debuffRate = function(paramId) {
  var rate = Yanfly.Subclass.Game_BattlerBase_debuffRate.call(this, paramId);
  if (this.isActor() && Yanfly.Param.SubDebuffRates) {
    rate *= this.piSubclassTraits(Game_BattlerBase.TRAIT_DEBUFF_RATE, paramId);
  }
  return rate;
};

Yanfly.Subclass.Game_BattlerBase_stateRate =
    Game_BattlerBase.prototype.stateRate;
Game_BattlerBase.prototype.stateRate = function(stateId) {
  var rate = Yanfly.Subclass.Game_BattlerBase_stateRate.call(this, stateId);
  if (this.isActor() && Yanfly.Param.SubStateRates) {
    rate *= this.piSubclassTraits(Game_BattlerBase.TRAIT_STATE_RATE, stateId);
  }
  return rate;
};

Yanfly.Subclass.Game_BattlerBase_stateResistSet =
    Game_BattlerBase.prototype.stateResistSet;
Game_BattlerBase.prototype.stateResistSet = function() {
    var array = Yanfly.Subclass.Game_BattlerBase_stateResistSet.call(this);
    if (this.isActor() && Yanfly.Param.SubStateRes) {
      this.addSubclassTraitSet(array, Game_BattlerBase.TRAIT_STATE_RESIST);
    }
    return array;
};

Yanfly.Subclass.Game_BattlerBase_attackElements =
    Game_BattlerBase.prototype.attackElements;
Game_BattlerBase.prototype.attackElements = function() {
    var array = Yanfly.Subclass.Game_BattlerBase_attackElements.call(this);
    if (this.isActor() && Yanfly.Param.SubAttackEle) {
      this.addSubclassTraitSet(array, Game_BattlerBase.TRAIT_ATTACK_ELEMENT);
    }
    return array;
};

Yanfly.Subclass.Game_BattlerBase_attackStates =
    Game_BattlerBase.prototype.attackStates;
Game_BattlerBase.prototype.attackStates = function() {
    var array = Yanfly.Subclass.Game_BattlerBase_attackStates.call(this);
    if (this.isActor() && Yanfly.Param.SubAttackState) {
      this.addSubclassTraitSet(array, Game_BattlerBase.TRAIT_ATTACK_STATE);
    }
    return array;
};

Yanfly.Subclass.Game_BattlerBase_addedSkills =
    Game_BattlerBase.prototype.addedSkills;
Game_BattlerBase.prototype.addedSkills = function() {
    var array = Yanfly.Subclass.Game_BattlerBase_addedSkills.call(this);
    if (this.isActor() && Yanfly.Param.SubAddedSkills) {
      this.addSubclassTraitSet(array, Game_BattlerBase.TRAIT_SKILL_ADD);
    }
    return array;
};

Yanfly.Subclass.Game_BattlerBase_Wtype =
    Game_BattlerBase.prototype.isEquipWtypeOk;
Game_BattlerBase.prototype.isEquipWtypeOk = function(wtypeId) {
    var value = Yanfly.Subclass.Game_BattlerBase_Wtype.call(this, wtypeId);
    if (value) return true;
    var array = [];
    if (this.isActor() && Yanfly.Param.SubclassWeapons) {
      this.addSubclassTraitSet(array, Game_BattlerBase.TRAIT_EQUIP_WTYPE);
    }
    return array.contains(wtypeId);
};

Yanfly.Subclass.Game_BattlerBase_Atype =
    Game_BattlerBase.prototype.isEquipAtypeOk;
Game_BattlerBase.prototype.isEquipAtypeOk = function(atypeId) {
    var value = Yanfly.Subclass.Game_BattlerBase_Atype.call(this, atypeId);
    if (value) return true;
    var array = [];
    if (this.isActor() && Yanfly.Param.SubclassArmors) {
      this.addSubclassTraitSet(array, Game_BattlerBase.TRAIT_EQUIP_ATYPE);
    }
    return array.contains(atypeId);
};

Yanfly.Game_BattlerBase_canUse = Game_BattlerBase.prototype.canUse;
Game_BattlerBase.prototype.canUse = function(item) {
    if (!item) return false;
    if (this.isActor()) {
      if (!this.meetsClassCanUseRequirements(item)) return false;
    }
    return Yanfly.Game_BattlerBase_canUse.call(this, item);
};

Game_BattlerBase.prototype.meetsClassCanUseRequirements = function(item) {
    if (item.requiredClasses && item.requiredClasses.length > 0) {
      if (!item.requiredClasses.contains(this._classId)) return false;
    }
    if (item.requiredSubclasses && item.requiredSubclasses.length > 0) {
      if (!this.subclass()) return false;
      if (!item.requiredSubclasses.contains(this._subclassId)) return false;
    };
    return true;
};

//=============================================================================
// Game_Actor
//=============================================================================

Yanfly.Subclass.Game_Actor_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function(actorId) {
    Yanfly.Subclass.Game_Actor_setup.call(this, actorId);
    this.initSubclasses();
};

Game_Actor.prototype.initSubclasses = function() {
    if (this.actor().subclassId === this._classId) return;
    this.setSubclass(this.actor().subclassId);
    if (this._subclassId > 0) this.unlockClass(this._subclassId);
};

Game_Actor.prototype.subclass = function() {
    if (this._subclassId === undefined) this.initSubclasses();
    return $dataClasses[this._subclassId];
};

Game_Actor.prototype.className = function() {
    if (!this.subclass()) {
      if (this.currentClass().useNickname) {
        return this.nickname();
      } else {
        return this.currentClass().name;
      }
    }
    if (this.currentClass().subclassComboName[this._subclassId]) {
      var text = this.currentClass().subclassComboName[this._subclassId];
    } else {
      var name1 = this.currentClass().name;
      if (this.currentClass().useNickname) {
        name1 = this.nickname();
      }
      var name2 = this.subclass().name;
      if (this.subclass().useNickname) {
        name2 = this.nickname();
      }
      var fmt = Yanfly.Param.SubclassFmt;
      var text = fmt.format(name1, name2);
    }
    return text;
};

Yanfly.Subclass.Game_Actor_changeClass = Game_Actor.prototype.changeClass;
Game_Actor.prototype.changeClass = function(classId, keepExp) {
    if (this._subclassId === classId) this._subclassId = 0;
    Yanfly.Subclass.Game_Actor_changeClass.call(this, classId, keepExp);
};

Game_Actor.prototype.setSubclass = function(classId) {
    if (this._classId === classId) return;
    this.unlockClass(classId);
    this._subclassId = classId;
    this.refresh();
};

Game_Actor.prototype.changeSubclass = function(classId) {
    if (this._classId === classId) return;
    this.unlockClass(classId);
    if (this._subclassId === classId) classId = 0;
    this.setSubclass(classId);
};

Yanfly.Subclass.Game_Actor_paramBase = Game_Actor.prototype.paramBase;
Game_Actor.prototype.paramBase = function(paramId) {
    var value = Yanfly.Subclass.Game_Actor_paramBase.call(this, paramId);
    value += Math.floor(this.subclassParamBase(paramId));
    return value;
};

Game_Actor.prototype.subclassParamBase = function(paramId) {
    if (!this.subclass()) return 0;
    var rate = Yanfly.Subclass.Param[paramId];
    if (!rate) return 0;
    if (this.subclass().baseParamFormula) {
      var formula = this.subclass().baseParamFormula[paramId];
      if (formula !== '') {
        return this.classBaseParamFormula(formula, paramId) * rate;
      }
    }
    var level = this.classLevel(this._subclassId);
    if (level > 99) {
      var i = this.subclass().params[paramId][99];
      var j = this.subclass().params[paramId][98];
      i += (i - j) * (level - 99);
      var value = i;
    } else {
      var value = this.subclass().params[paramId][level];
    }
    return value * rate;
};

Game_Actor.prototype.restrictClassChange = function(classId) {
    return this.actor().restrictClassChange.contains(classId);
};

Game_Actor.prototype.restrictSubclassChange = function(classId) {
    return this.actor().restrictSubclassChange.contains(classId);
};

Yanfly.Subclass.Game_Actor_gainExp = Game_Actor.prototype.gainExp;
Game_Actor.prototype.gainExp = function(exp) {
    this.gainExpSubclass(exp);
    Yanfly.Subclass.Game_Actor_gainExp.call(this, exp);
};

Game_Actor.prototype.gainExpSubclass = function(exp) {
    if (!this.subclass()) return;
    exp *= Yanfly.Param.SubclassExp;
    var curExp = this._exp[this._subclassId] || 0;
    var newExp = curExp + Math.round(exp * this.finalExpRate());
    this._exp[this._subclassId] = Math.max(newExp, 0);
};

Game_Actor.prototype.canChangeSubclass = function() {
    if (this._canChangeSubclass) return this._canChangeSubclass;
    this._canChangeSubclass = this.actor().canChangeSubclass;
    return this._canChangeSubclass;
};

Game_Actor.prototype.setCanChangeSubclass = function(value) {
    this._canChangeSubclass = value;
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.Subclass.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Yanfly.Subclass.Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === '显示副职业选项' || command === 'ShowSubclass') {
      $gameSystem._showSubclass = true;
    } else if (command === '隐藏副职业选项' || command === 'HideSubclass') {
      $gameSystem._showSubclass = false;
    } else if (command === '启用副职业选项' || command === 'EnableSubclass') {
      $gameSystem._enableSubclass = true;
    } else if (command === '禁用副职业选项' || command === 'DisableSubclass') {
      $gameSystem._enableSubclass = false;
    } else if (command === '副职业变更' || command === 'ChangeSubclass') {
      this.changeSubclass(args);
    } else if (command === '启用副职业变更' || command === 'EnableSubclassChange') {
      this.setSubclassChange(args, true);
    } else if (command === '禁用副职业变更' || command === 'DisableSubclassChange') {
      this.setSubclassChange(args, false);
    }
};

Game_Interpreter.prototype.changeSubclass = function(args) {
    if (!args) return;
    var actorId = parseInt(args[0]);
    var subclassId = parseInt(args[1]);
    var actor = $gameActors.actor(actorId);
    if (actor) actor.setSubclass(subclassId);
};

Yanfly.Subclass.Game_Interpreter_command315 = 
    Game_Interpreter.prototype.command315;
Game_Interpreter.prototype.command315 = function() {
    var value = this.operateValue(this._params[2], this._params[3],
      this._params[4]);
    this.iterateActorEx(this._params[0], this._params[1], function(actor) {
      actor.gainExpSubclass(value);
    }.bind(this));
    return Yanfly.Subclass.Game_Interpreter_command315.call(this);
};

Game_Interpreter.prototype.setSubclassChange = function(args, enable) {
    var actorId = parseInt(args[0]);
    var actor = $gameActors.actor(actorId);
    if (!actor) return;
    actor.setCanChangeSubclass(enable);
};

//=============================================================================
// Window_Base
//=============================================================================

Window_Base.prototype.drawActorClass = function(actor, x, y, width) {
    width = width || 168;
    this.resetTextColor();
    this.drawText(actor.className(), x, y, width);
};

//=============================================================================
// Window_ClassCommand
//=============================================================================

Yanfly.Subclass.Window_ClassCommand_addClassCommand =
    Window_ClassCommand.prototype.addClassCommand;
Window_ClassCommand.prototype.addClassCommand = function() {
    Yanfly.Subclass.Window_ClassCommand_addClassCommand.call(this);
    this.addSubclassCommand();
};

Window_ClassCommand.prototype.addSubclassCommand = function() {
    if (!$gameSystem.isShowSubclass()) return;
    var enabled = this.isSubclassEnabled();
    this.addCommand(Yanfly.Param.SubclassCmd, 'subclass', enabled);
};

Window_ClassCommand.prototype.isSubclassEnabled = function() {
    var actor = SceneManager._scene.actor();
    if (actor && !actor.canChangeSubclass()) return false;
    return $gameSystem.isEnableSubclass();
};

//=============================================================================
// Window_ClassList
//=============================================================================

Yanfly.Subclass.Window_ClassList_isEnabled =
    Window_ClassList.prototype.isEnabled;
Window_ClassList.prototype.isEnabled = function(item) {
    if (!this.checkSubclassEnabled(item)) return false;
    return Yanfly.Subclass.Window_ClassList_isEnabled.call(this, item);
};

Window_ClassList.prototype.checkSubclassEnabled = function(item) {
    if (SceneManager._scene instanceof Scene_Class) {
      var win = SceneManager._scene._commandWindow;
      if (!win) return true;
      if (!this.active) return true;
      if (win.currentSymbol() === 'class') {
        if ($dataClasses[item]) {
          if (!$dataClasses[item].primaryAllowed) return false;
        }
        if (this._actor.restrictClassChange(item)) return false;
      } else if (win.currentSymbol() === 'subclass') {
        if (item === this._actor.currentClass().id) return false;
        if ($dataClasses[item]) {
          if (!$dataClasses[item].subclassAllowed) return false;
        }
        if (this._actor.restrictSubclassChange(item)) return false;
      }
    }
    return true;
};

Yanfly.Subclass.Window_ClassList_changeClassNameColor =
    Window_ClassList.prototype.changeClassNameColor;
Window_ClassList.prototype.changeClassNameColor = function(item) {
    if (item === this._actor.subclass()) {
      this.changeTextColor(this.textColor(Yanfly.Param.SubclassColor));
    } else {
      Yanfly.Subclass.Window_ClassList_changeClassNameColor.call(this, item);
    }
};

Yanfly.Subclass.Window_ClassList_selectLast =
    Window_ClassList.prototype.selectLast;
Window_ClassList.prototype.selectLast = function() {
    var win = SceneManager._scene._commandWindow;
    if (win && win.currentSymbol() === 'subclass' && this._actor.subclass()) {
      this.selectLastSubclass();
    } else {
      Yanfly.Subclass.Window_ClassList_selectLast.call(this);
    }
};

Window_ClassList.prototype.selectLastSubclass = function() {
    this._index = this._data.indexOf(this._actor._subclassId);
    this.select(this._index);
};

Yanfly.Subclass.Window_ClassList_updateCompare =
    Window_ClassList.prototype.updateCompare;
Window_ClassList.prototype.updateCompare = function() {
    var win = SceneManager._scene._commandWindow;
    if (win && win.currentSymbol() === 'subclass') {
      this.updateSubclassCompare();
    } else {
      Yanfly.Subclass.Window_ClassList_updateCompare.call(this);
    }
};

Window_ClassList.prototype.updateSubclassCompare = function() {
    if (this._actor && this.item() && this._statusWindow) {
      var actor = JsonEx.makeDeepCopy(this._actor);
      if (this.isEnabled(this.item())) {
        Yanfly.CCC.PreventReleaseItem = true;
        actor.changeSubclass(this.item());
        Yanfly.CCC.PreventReleaseItem = undefined;
      }
      this._statusWindow.setTempActor(actor);
    }
};

//=============================================================================
// Scene_Class
//=============================================================================

Yanfly.Subclass.Scene_Class_createCommandWindow =
    Scene_Class.prototype.createCommandWindow;
Scene_Class.prototype.createCommandWindow = function() {
    Yanfly.Subclass.Scene_Class_createCommandWindow.call(this);
    var win = this._commandWindow;
    win.setHandler('subclass', this.commandClass.bind(this));
};

Yanfly.Subclass.Scene_Class_onItemOk = Scene_Class.prototype.onItemOk;
Scene_Class.prototype.onItemOk = function() {
    if (this._commandWindow.currentSymbol() === 'class') {
      Yanfly.Subclass.Scene_Class_onItemOk.call(this);
    } else {
      this.onSubclassOk();
    }
};

Scene_Class.prototype.onSubclassOk = function() {
    SoundManager.playEquip();
    var classId = this._itemWindow.item();
    var hpRate = this.actor().hp / this.actor().mhp;
    var mpRate = this.actor().mp / Math.max(1, this.actor().mmp);
    this.actor().changeSubclass(classId);
    var max = this.actor().isDead() ? 0 : 1;
    var hpAmount = Math.max(max, parseInt(this.actor().mhp * hpRate));
    this.actor().setHp(hpAmount);
    this.actor().setMp(parseInt(this.actor().mmp * mpRate));
    this._itemWindow.activate();
    this.refreshWindows();
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

Yanfly.Util.getRange = function(n, m) {
    var result = [];
    for (var i = n; i <= m; ++i) result.push(i);
    return result;
};

Yanfly.Util.onlyUnique = function(value, index, self) {
    return self.indexOf(value) === index;
};

//=============================================================================
// 文件末
//=============================================================================
};