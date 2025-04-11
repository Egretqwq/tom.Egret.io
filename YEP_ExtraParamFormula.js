//=============================================================================
// Yanfly Engine Plugins - Extra Parameter Formula
// YEP_ExtraParamFormula.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_ExtraParamFormula = true;

var Yanfly = Yanfly || {};
Yanfly.XParam = Yanfly.XParam || {};
Yanfly.XParam.version = 1.04;

//=============================================================================
 /*:
 * @plugindesc 官方版本：v1.04 | 008额外10能力值公式
 * @author Yanfly Engine Plugins(YEP) | 汉化+机翻：YuukakeID
 *
 * @param 物理命中率公式
 * @desc 决定“物理命中率”的公式
 * 默认：(base + plus) * rate + flat
 * @default (base + plus) * rate + flat
 *
 * @param 物理回避率公式
 * @desc 决定“物理回避率”的公式
 * 默认：(base + plus) * rate + flat
 * @default (base + plus) * rate + flat
 *
 * @param 暴击率公式
 * @desc 决定“暴击率”的公式
 * 默认：(base + plus) * rate + flat
 * @default (base + plus) * rate + flat
 *
 * @param 暴击回避率公式
 * @desc 决定“暴击回避率”的公式
 * 默认：(base + plus) * rate + flat
 * @default (base + plus) * rate + flat
 *
 * @param 魔法回避率公式
 * @desc 决定“魔法回避率”的公式
 * 默认：(base + plus) * rate + flat
 * @default (base + plus) * rate + flat
 *
 * @param 魔法反射率公式
 * @desc 决定“魔法反射率”的公式
 * 默认：(base + plus) * rate + flat
 * @default (base + plus) * rate + flat
 *
 * @param 物理反击率公式
 * @desc 决定“物理反击率”的公式
 * 默认：(base + plus) * rate + flat
 * @default (base + plus) * rate + flat
 *
 * @param HP百分比再生公式
 * @desc 决定“HP百分比再生”的公式
 * 默认：(base + plus) * rate + flat
 * @default (base + plus) * rate + flat
 *
 * @param MP百分比再生公式
 * @desc 决定“MP百分比再生”的公式
 * 默认：(base + plus) * rate + flat
 * @default (base + plus) * rate + flat
 *
 * @param TP百分比再生公式
 * @desc 决定“TP百分比再生”的公式
 * 默认：(base + plus) * rate + flat
 * @default (base + plus) * rate + flat
 *
 * @help
 *
 * 机翻版本：v0.02  完成时间：2023.10.08
 *
 * 插件官方描述：
 * 控制HIT、EVA、CRI、CEV、MEV、MRF、CNT、HRG、MRG和TRG的额外参数的公式。
 * 
 *
 * ============================================================================
 * 介绍
 * ============================================================================
 *
 * RMMV中的十项额外能力值参数：
 * HIT、EVA、CRI、CEV、MEV、MRF、CNT、HRG、MRG、TRG
 * 命中/回避/暴击/暴击回避/魔法回避/魔法反射/反击/HP再生/MP再生/TP再生
 * 它们的值只能通过各种数据库对象(比如 角色)的 特性 进行修改
 * 虽然它们可变动，但RMMV不允许制作者运用自定义公式来实现诸如：
 * 攻击和敏捷影响命中率、幸运值影响暴击率等功能
 *
 * 本插件可以让制作者们为游戏增加这样一些非常“Ni——ce——！！”的好东西
 *
 * ============================================================================
 * 说明指南 - 额外参数[Extra Parameter/xparam(s)]解释
 * ============================================================================
 *
 * 不熟悉RMMV中的额外参数的，可参考以下解释说明：
 *
 * ---
 *
 * HIT - 命中率[物理命中率](Hit Rate%)
 * - 决定了物理动作的物理命中率
 * 所有物理攻击都会通过物理命中率(Hit Rate%)检查攻击是否关联
 * 如果HIT值通过随机器检查，则攻击视为关联
 * 反之视为未命中
 *
 * ---
 * 
 * EVA - 回避率[物理回避率](Evasion Rate%)
 * - 决定了对任何传入物理动作的物理回避率
 * HIT值通过随机器检查后，接着把动作传递给EVA检查
 * 如果EVA值通过了随机器检查，则物理攻击会被回避，动作关联将失败
 * 反之无法回避，动作将关联
 *
 * ---
 *
 * CRI - 暴击率(Critical Hit Rate%)
 * - 任何启用了'暴击'的动作，都将使用暴击率进行随机器检查
 * 如果暴击率通过了随机器检查，发起的动作将有额外的伤害加成
 * 反之不会对动作的伤害进行加成
 *
 * ---
 *
 * CEV - 暴击回避率[暴击抗性](Critical Evasion Rate%)
 * - 该值以乘法与'暴击率'相对置，源代码中暴击率实为：CRI × (1 - CEV)
 * 若暴击率为90%，暴击回避率为80%，实际暴击率为：90%×(1-80%) = 18%
 * 此时，随机器检查检查的暴击率为18%
 *
 * ---
 *
 * MEV - 魔法回避率(Magic Evasion Rate%)
 * - 决定了对任何传入魔法动作的回避率
 * 由于没有'魔法命中率'，因此当魔法动作启动时，MEV值将始终与之相对
 * 如果EVA值通过了随机器检查，则魔法动作将不关联
 * 反之则魔法动作将关联
 *
 * ---
 *
 * MRF - 魔法反射率(Magic Reflect Rate%)
 * - 当一个魔法动作关联并通过时，有机会被弹回施法者
 * 如果MRF通过随机器检查，魔法动作会被弹回施法者
 * (注意：弹回动作本身是无视原施法者的魔法反射率的)
 * 反之魔法动作将关联它的目标
 *
 * ---
 *
 * CNT - 反击率[物理反击率](Counter Attack Rate%)
 * - 当物理动作关联并通过时，有机会被避开，且目标的反击将落在攻击单元上
 * 如果CNT通过随机器检查，则物理动作被回避，目标将反击物理动作的使用者
 * (默认情况下，反击动作不会被反击)
 * 反之物理动作将关联它的目标
 *
 * ---
 *
 * HRG - 生命值[HP]百分比再生(HP% Regeneration)
 * - 在战斗者的再生阶段(回合结束时)
 * 战斗者将以100%的成功率再生其最大生命值的百分比
 *
 * ---
 *
 * MRG - 魔力值[MP]百分比再生(MP% Regeneration)
 * - 在战斗者的再生阶段(回合结束时)
 * 战斗者将以100%的成功率再生其最大魔力值的百分比
 *
 * ---
 *
 * TRG - 战术策略值[TP]百分比再生(TP% Regeneration)
 * - 在战斗者的再生阶段(回合结束时)
 * 战斗者将以100%的成功率再生其最大TP的百分比
 *
 * ---
 *
 * ============================================================================
 * 说明指南 - 自定义公式
 * ============================================================================
 *
 * 由插件参数中的公式计算的值将作为浮点值输出
 * 如果CRI的结果值为0.1，则CRI为10%
 * 下面是一个示例：
 *
 *   (base + plus) * rate + flat + user.luk / 1000
 *
 * 在默认公式的末尾插入了“ + user.luk/1000”
 * 假设默认公式的计算结果为10%，用户的LUK参数为500
 * 则结果为：0.1+0.5，这意味着总和为0.6，因此暴击率为60%！
 *
 * ============================================================================
 * 说明指南 - 了解公式变量
 * ============================================================================
 *
 * 本节将详细结束公式中的各个变量：
 *
 * 插件中默认公式为：(base + plus) * rate + flat
 *
 * BASE - 基本值
 * - 这个值是由RMMV确定该属性值的默认方式决定的
 * 而RMMV确定该属性的方式是将该属性的总属性值相加
 * 例如：如果一个战斗者具有+95%、-10%和+5%的命中率属性
 * 则基本命中率为：95-10+5 = 90(%)
 *
 * PLUS - 提升值
 * - 这是此插件添加的新变量，其目的是作为基础值的补充
 * 这个新增项可以独立于数据库项目进行
 * 就像您可以使用user.addXParam来更改额外参数的基础值一样
 * 默认公式中，PLUS值将优先于rate和flat进行计算
 *
 * RATE - 比率
 * - 这是此插件添加的新变量，其目的是作为额外能力值参数的乘法修饰符
 * 该比率值由各种数据库对象通过注释标记确定
 * 默认公式中，RATE值将优先于flat值，与base、plus之和进行计算
 *
 * FLAT - 固定值
 * - 这是此插件添加的新变量，其目的是作为额外能力值参数的附加修饰符
 * 此附加值由各种数据库对象通过注释标记确定
 * 默认公式中，FLAT值将于参与额外能力值的最终计算
 *
 * ============================================================================
 * 示例 - 示例公式
 * ============================================================================
 *
 * 以下是一些示例公式，您可以使用它们使额外能力值参数更加动态：
 *
 * --- 物理命中率 ---
 * (base + plus) * rate + flat + ((user.atk + user.agi) / 2000)
 * - 物理命中率将受'物攻'和'敏捷'影响
 *
 * --- 物理回避率 ---
 * (base + plus) * rate + flat + ((user.def + user.agi) / 2000)
 * - 物理回避率将受'物防'和'敏捷'影响
 *
 * --- 暴击率 ---
 * (base + plus) * rate + flat + (user.luk / 1000)
 * - 暴击率将受'幸运'影响
 *
 * --- 暴击回避率 ---
 * (base + plus) * rate + flat + ((user.agi + user.luk) / 2000)
 * - 暴击回避率将受'敏捷'和'幸运'影响
 *
 * --- 魔法回避率 ---
 * (base + plus) * rate + flat + ((user.mdf + user.agi) / 2000)
 * - 魔法回避率将受'魔防'和'敏捷'影响
 *
 * 通过以上示例，可以帮助你理解——
 * 如何使额外能力值参数受到用户其他能力属性数据的影响
 *
 * ============================================================================
 * 备注标签
 * ============================================================================
 *
 * 可以使用以下备注标签来更改修改额外参数值的各个方面：
 *
 * 玩家角色，职业，敌人，武器，护甲和状态 备注标签：
 * (此备注标签不区分大小写)
 * ！使用时将“能力值”替换为以下10个额外能力值的参数名之一：
 *   命中，回避，暴击，暴击回避
 *   魔法回避，魔法反射，反击
 *   HP再生，MP再生，TP再生
 *
 * 也可以相应的替换为
 * (可自行在本插件的DataManager.getXParamId中增减)：
 * 命中
 * →命中率、物理命中、物理命中率、HIT、HIT RATE
 * 
 * 回避
 * →回避率、物理回避、物理回避率、EVA、EVADE、EVASION
 * 
 * 暴击
 * →暴击率、CRI、CRITICAL、CRITICAL HIT
 * 
 * 暴击回避
 * →暴击回避率、暴击抗性、CEV、CRITICAL EVADE、CRITICAL EVASION
 * 
 * 魔法回避
 * →魔法回避率、MEV、MAGIC EVADE、MAGIC EVASION
 * 
 * 魔法反射
 * →魔法反射率、MRF、MAGIC REFLECT、MAGIC REFLECTION
 * 
 * 反击
 * →物理反击、CNT、COUNTER、COUNTERATTACK
 * 
 * HP再生
 * →HRG、HP REGEN、HP REGENERATION
 * 
 * MP再生
 * →MRG、MP REGEN、MP REGENERATION
 * 
 * TP再生
 * →TRG、TP REGEN、TP REGENERATION
 *
 *   <能力值 提升值: +百分数>    //或可用<能力值 plus: +百分数>
 *   <能力值 提升值: -百分数>    //或可用<能力值 plus: -百分数>
 *   <能力值 提升值: +小数>    //或可用<能力值 plus: +小数>
 *   <能力值 提升值: -小数>    //或可用<能力值 plus: -小数>
 *   使用插件默认公式时的提升值，写为百分比或小数
 *
 *   <能力值 比率: 百分数>    //或可用<能力值 rate: 百分数>
 *   <能力值 比率: 小数>    //或可用<能力值 rate: 小数>
 *   使用插件默认公式时的参数比率，写为百分比或小数
 *
 *   <能力值 固定值: +百分数>    //或可用<能力值 Flat: +百分数>
 *   <能力值 固定值: -百分数>    //或可用<能力值 Flat: -百分数>
 *   <能力值 固定值: +小数>    //或可用<能力值 Flat: +小数>
 *   <能力值 固定值: -小数>    //或可用<能力值 Flat: -小数>
 *   使用插件默认公式时的固定值，写为百分比或小数
 *
 * ============================================================================
 * 疯狂模式 - 新JavaScript函数
 * ============================================================================
 *
 * 可以使用以下JavaScript函数来更改角色的额外能力值。
 * 函数中，“actor”变量将由一个角色引用，即：
 *
 *   actor = $gameActors.actor(3));
 *   //引用数据库第三号角色
 *
 * 函数：
 *
 *   actor.clearXParamPlus()
 *   - 清除玩家角色的所有额外参数和数值奖励
 *
 *   actor.setHit(x)
 *   actor.setEva(x)
 *   actor.setCri(x)
 *   actor.setCev(x)
 *   actor.setMev(x)
 *   actor.setMrf(x)
 *   actor.setCnt(x)
 *   actor.setHrg(x)
 *   actor.setMrg(x)
 *   actor.setTrg(x)
 *   - 将玩家角色各自的额外参数值设置为x。
 *   在此处，1即100%，0.1即10%——负数同理
 *
 *   actor.setHitPlus(x)
 *   actor.setEvaPlus(x)
 *   actor.setCriPlus(x)
 *   actor.setCevPlus(x)
 *   actor.setMevPlus(x)
 *   actor.setMrfPlus(x)
 *   actor.setCntPlus(x)
 *   actor.setHrgPlus(x)
 *   actor.setMrgPlus(x)
 *   actor.setTrgPlus(x)
 *   - 将玩家角色各自的额外参数的plus值设置为x。
 *   在此处，1即100%，0.1即10%——负数同理
 *
 *   actor.addHit(x)
 *   actor.addEva(x)
 *   actor.addCri(x)
 *   actor.addCev(x)
 *   actor.addMev(x)
 *   actor.addMrf(x)
 *   actor.addCnt(x)
 *   actor.addHrg(x)
 *   actor.addMrg(x)
 *   actor.addTrg(x)
 *   - 将玩家角色各自的额外参数值增加x。
 *   在此处，1即100%，0.1即10%——负数同理，变成减少
 *
 *   actor.minusHit(x)
 *   actor.minusEva(x)
 *   actor.minusCri(x)
 *   actor.minusCev(x)
 *   actor.minusMev(x)
 *   actor.minusMrf(x)
 *   actor.minusCnt(x)
 *   actor.minusHrg(x)
 *   actor.minusMrg(x)
 *   actor.minusTrg(x)
 *   - 将玩家角色各自的额外参数值减少x。
 *   在此处，1即100%，0.1即10%——负数同理，变成增加
 *
 * ============================================================================
 * 变更日志
 * ============================================================================
 *
 * 版本 1.04:
 * - 为RM MV 1.5.0版本更新
 *
 * 版本 1.03a:
 * - 增加了疯狂模式故障保险
 * - 文档更新以修复排版错误
 *
 * 版本 1.02:
 * - 修复了battler.setXParam函数的一个问题：
 * 该问题使它们由于缓存问题而采用错误的值。 
 *
 * 版本 1.01:
 * - 为RM MV 1.1.0版本更新
 *
 * 版本 1.00:
 * - 完成插件
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_ExtraParamFormula');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.XParamFormula = [];
Yanfly.Param.XParamFormula.push(String(Yanfly.Parameters['物理命中率公式']));
Yanfly.Param.XParamFormula.push(String(Yanfly.Parameters['物理回避率公式']));
Yanfly.Param.XParamFormula.push(String(Yanfly.Parameters['暴击率公式']));
Yanfly.Param.XParamFormula.push(String(Yanfly.Parameters['暴击回避率公式']));
Yanfly.Param.XParamFormula.push(String(Yanfly.Parameters['魔法回避率公式']));
Yanfly.Param.XParamFormula.push(String(Yanfly.Parameters['魔法反射率公式']));
Yanfly.Param.XParamFormula.push(String(Yanfly.Parameters['物理反击率公式']));
Yanfly.Param.XParamFormula.push(String(Yanfly.Parameters['HP百分比再生公式']));
Yanfly.Param.XParamFormula.push(String(Yanfly.Parameters['MP百分比再生公式']));
Yanfly.Param.XParamFormula.push(String(Yanfly.Parameters['TP百分比再生公式']));

//=============================================================================
// DataManager
//=============================================================================

Yanfly.XParam.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.XParam.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!Yanfly._loaded_YEP_ExtraParamFormula) {
    this.processXParamNotetags($dataActors);
    this.processXParamNotetags($dataClasses);
    this.processXParamNotetags($dataEnemies);
    this.processXParamNotetags($dataWeapons);
    this.processXParamNotetags($dataArmors);
    this.processXParamNotetags($dataStates);
    Yanfly._loaded_YEP_ExtraParamFormula = true;
  }
  return true;
};

DataManager.processXParamNotetags = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.plusXParams = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    obj.rateXParams = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    obj.flatXParams = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(.*) (?:提升值|PLUS):[ ]([\+\-]\d+)([%％])>/i)) {
        var text = String(RegExp.$1).toUpperCase();
        var rate = parseFloat(RegExp.$2) * 0.01;
        var id = this.getXParamId(text);
        if (id !== null) obj.plusXParams[id] = rate;
      } else if (line.match(/<(.*) (?:提升值|PLUS):[ ]([\+\-]\d+).(\d+)>/i)) {
        var text = String(RegExp.$1).toUpperCase();
        var rate = parseFloat(String(RegExp.$2) + '.' + String(RegExp.$3));
        var id = this.getXParamId(text);
        if (id !== null) obj.plusXParams[id] = rate;
      } else if (line.match(/<(.*) (?:比率|RATE):[ ](\d+)([%％])>/i)) {
        var text = String(RegExp.$1).toUpperCase();
        var rate = parseFloat(RegExp.$2) * 0.01;
        var id = this.getXParamId(text);
        if (id !== null) obj.rateXParams[id] = rate;
      } else if (line.match(/<(.*) (?:比率|RATE):[ ](\d+).(\d+)>/i)) {
        var text = String(RegExp.$1).toUpperCase();
        var rate = parseFloat(String(RegExp.$2) + '.' + String(RegExp.$3));
        var id = this.getXParamId(text);
        if (id !== null) obj.rateXParams[id] = rate;
      } else if (line.match(/<(.*) (?:固定值|FLAT):[ ]([\+\-]\d+)([%％])>/i)) {
        var text = String(RegExp.$1).toUpperCase();
        var rate = parseFloat(RegExp.$2) * 0.01;
        var id = this.getXParamId(text);
        if (id !== null) obj.flatXParams[id] = rate;
      } else if (line.match(/<(.*) (?:固定值|FLAT):[ ]([\+\-]\d+).(\d+)>/i)) {
        var text = String(RegExp.$1).toUpperCase();
        var rate = parseFloat(String(RegExp.$2) + '.' + String(RegExp.$3));
        var id = this.getXParamId(text);
        if (id !== null) obj.flatXParams[id] = rate;
      }
    }
  }
};

DataManager.getXParamId = function(string) {
    if (['命中', '命中率', '物理命中', '物理命中率', 'HIT', 'HIT RATE'].contains(string)) {
      return 0;
    } else if (['回避', '回避率', '物理回避', '物理回避率', 'EVA', 'EVADE', 'EVASION'].contains(string)) {
      return 1;
    } else if (['暴击', '暴击率', 'CRI', 'CRITICAL', 'CRITICAL HIT'].contains(string)) {
      return 2;
    } else if (['暴击回避', '暴击回避率', '暴击抗性', 'CEV', 'CRITICAL EVADE', 'CRITICAL EVASION'].contains(string)) {
      return 3;
    } else if (['魔法回避', '魔法回避率', 'MEV', 'MAGIC EVADE', 'MAGIC EVASION'].contains(string)) {
      return 4;
    } else if (['魔法反射', '魔法反射率', 'MRF', 'MAGIC REFLECT', 'MAGIC REFLECTION'].contains(string)) {
      return 5;
    } else if (['反击', '物理反击', 'CNT', 'COUNTER', 'COUNTERATTACK'].contains(string)) {
      return 6;
    } else if (['HP再生', 'HRG', 'HP REGEN', 'HP REGENERATION'].contains(string)) {
      return 7;
    } else if (['MP再生', 'MRG', 'MP REGEN', 'MP REGENERATION'].contains(string)) {
      return 8;
    } else if (['TP再生', 'TRG', 'TP REGEN', 'TP REGENERATION'].contains(string)) {
      return 9;
    } else {
      return null;
    }
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Yanfly.XParam.Game_BattlerBase_initMembers =
    Game_BattlerBase.prototype.initMembers; 
Game_BattlerBase.prototype.initMembers = function() {
    Yanfly.XParam.Game_BattlerBase_initMembers.call(this);
    this.clearXParamPlus();
};

Game_BattlerBase.prototype.clearXParamPlus = function(id) {
    this._xparamPlus = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
};

Yanfly.XParam.Game_BattlerBase_refresh = Game_BattlerBase.prototype.refresh;
Game_BattlerBase.prototype.refresh = function() {
    this._xparam = undefined;
    Yanfly.XParam.Game_BattlerBase_refresh.call(this);
};

Yanfly.XParam.Game_BattlerBase_xparam = Game_BattlerBase.prototype.xparam;
Game_BattlerBase.prototype.xparam = function(id) {
    if (this._xparam && this._xparam[id] !== undefined) return this._xparam[id];
    if (this._xparam === undefined) this._xparam = {};
    var base = Yanfly.XParam.Game_BattlerBase_xparam.call(this, id);
    var plus = this.xparamPlus(id);
    var rate = this.xparamRate(id);
    var flat = this.xparamFlat(id);;
    var a = this;
    var user = this;
    var subject = this;
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    var code = Yanfly.Param.XParamFormula[id];
    try {
      this._xparam[id] = eval(code);
    } catch (e) {
      this._xparam[id] = 0;
      Yanfly.Util.displayError(e, code, '额外参数公式错误');
    }
    return this._xparam[id];
};

Game_BattlerBase.prototype.xparamPlus = function(id) {
    if (this._xparamPlus === undefined) this.clearXParamPlus();
    return this._xparamPlus[id];
};

Game_BattlerBase.prototype.xparamRate = function(id) {
    return 1;
};

Game_BattlerBase.prototype.xparamFlat = function(id) {
    return 0;
};

Game_BattlerBase.prototype.setXParam = function(id, value) {
    if (this._xparamPlus === undefined) this.clearXParamPlus();
    this._xparam = {};
    this._xparamPlus[id] = 0;
    this._xparamPlus[id] = value - this.xparam(id);
    this.refresh();
};

Game_BattlerBase.prototype.setHit = function(value) {
    this.setXParam(0, value);
};

Game_BattlerBase.prototype.setEva = function(value) {
    this.setXParam(1, value);
};

Game_BattlerBase.prototype.setCri = function(value) {
    this.setXParam(2, value);
};

Game_BattlerBase.prototype.setCev = function(value) {
    this.setXParam(3, value);
};

Game_BattlerBase.prototype.setMev = function(value) {
    this.setXParam(4, value);
};

Game_BattlerBase.prototype.setMrf = function(value) {
    this.setXParam(5, value);
};

Game_BattlerBase.prototype.setCnt = function(value) {
    this.setXParam(6, value);
};

Game_BattlerBase.prototype.setHrg = function(value) {
    this.setXParam(7, value);
};

Game_BattlerBase.prototype.setMrg = function(value) {
    this.setXParam(8, value);
};

Game_BattlerBase.prototype.setTrg = function(value) {
    this.setXParam(9, value);
};

Game_BattlerBase.prototype.setXParamPlus = function(id, value) {
    if (this._xparamPlus === undefined) this.clearXParamPlus();
    this._xparamPlus[id] = value;
    this.refresh();
};

Game_BattlerBase.prototype.setHitPlus = function(value) {
    this.setXParamPlus(0, value);
};

Game_BattlerBase.prototype.setEvaPlus = function(value) {
    this.setXParamPlus(1, value);
};

Game_BattlerBase.prototype.setCriPlus = function(value) {
    this.setXParamPlus(2, value);
};

Game_BattlerBase.prototype.setCevPlus = function(value) {
    this.setXParamPlus(3, value);
};

Game_BattlerBase.prototype.setMevPlus = function(value) {
    this.setXParamPlus(4, value);
};

Game_BattlerBase.prototype.setMrfPlus = function(value) {
    this.setXParamPlus(5, value);
};

Game_BattlerBase.prototype.setCntPlus = function(value) {
    this.setXParamPlus(6, value);
};

Game_BattlerBase.prototype.setHrgPlus = function(value) {
    this.setXParamPlus(7, value);
};

Game_BattlerBase.prototype.setMrgPlus = function(value) {
    this.setXParamPlus(8, value);
};

Game_BattlerBase.prototype.setTrgPlus = function(value) {
    this.setXParamPlus(9, value);
};

Game_BattlerBase.prototype.addXParam = function(id, value) {
    if (this._xparamPlus === undefined) this.clearXParamPlus();
    this._xparamPlus[id] += value;
    this.refresh();
};

Game_BattlerBase.prototype.addHit = function(value) {
    this.addXParam(0, value);
};

Game_BattlerBase.prototype.addEva = function(value) {
    this.addXParam(1, value);
};

Game_BattlerBase.prototype.addCri = function(value) {
    this.addXParam(2, value);
};

Game_BattlerBase.prototype.addCev = function(value) {
    this.addXParam(3, value);
};

Game_BattlerBase.prototype.addMev = function(value) {
    this.addXParam(4, value);
};

Game_BattlerBase.prototype.addMrf = function(value) {
    this.addXParam(5, value);
};

Game_BattlerBase.prototype.addCnt = function(value) {
    this.addXParam(6, value);
};

Game_BattlerBase.prototype.addHrg = function(value) {
    this.addXParam(7, value);
};

Game_BattlerBase.prototype.addMrg = function(value) {
    this.addXParam(8, value);
};

Game_BattlerBase.prototype.addTrg = function(value) {
    this.addXParam(9, value);
};

Game_BattlerBase.prototype.minusHit = function(value) {
    this.addXParam(0, -value);
};

Game_BattlerBase.prototype.minusEva = function(value) {
    this.addXParam(1, -value);
};

Game_BattlerBase.prototype.minusCri = function(value) {
    this.addXParam(2, -value);
};

Game_BattlerBase.prototype.minusCev = function(value) {
    this.addXParam(3, -value);
};

Game_BattlerBase.prototype.minusMev = function(value) {
    this.addXParam(4, -value);
};

Game_BattlerBase.prototype.minusMrf = function(value) {
    this.addXParam(5, -value);
};

Game_BattlerBase.prototype.minusCnt = function(value) {
    this.addXParam(6, -value);
};

Game_BattlerBase.prototype.minusHrg = function(value) {
    this.addXParam(7, -value);
};

Game_BattlerBase.prototype.minusMrg = function(value) {
    this.addXParam(8, -value);
};

Game_BattlerBase.prototype.minusTrg = function(value) {
    this.addXParam(9, -value);
};

//=============================================================================
// Game_Battler
//=============================================================================

Game_Battler.prototype.xparamPlus = function(id) {
    var value = Game_BattlerBase.prototype.xparamPlus.call(this, id);
    var length = this.states().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.states()[i];
      if (obj && obj.plusXParams) value += obj.plusXParams[id];
    }
    return value;
};

Game_Battler.prototype.xparamRate = function(id) {
    var value = Game_BattlerBase.prototype.xparamRate.call(this, id);
    var length = this.states().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.states()[i];
      if (obj && obj.rateXParams) value *= obj.rateXParams[id];
    }
    return value;
};

Game_Battler.prototype.xparamFlat = function(id) {
    var value = Game_BattlerBase.prototype.xparamFlat.call(this, id);
    var length = this.states().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.states()[i];
      if (obj && obj.flatXParams) value += obj.flatXParams[id];
    }
    return value;
};

//=============================================================================
// Game_Actor
//=============================================================================

Yanfly.XParam.Game_Actor_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function(actorId) {
    Yanfly.XParam.Game_Actor_setup.call(this, actorId);
    this.clearXParamPlus();
};

Game_Actor.prototype.xparamPlus = function(id) {
    var value = Game_Battler.prototype.xparamPlus.call(this, id);
    var length = this.equips().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.equips()[i];
      if (obj && obj.plusXParams) value += obj.plusXParams[id];
    }
    value += this.actor().plusXParams[id];
    value += this.currentClass().plusXParams[id];
    return value;
};

Game_Actor.prototype.xparamRate = function(id) {
    var value = Game_Battler.prototype.xparamRate.call(this, id);
    var length = this.equips().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.equips()[i];
      if (obj && obj.rateXParams) value *= obj.rateXParams[id];
    }
    value *= this.actor().rateXParams[id];
    value *= this.currentClass().rateXParams[id];
    return value;
};

Game_Actor.prototype.xparamFlat = function(id) {
    var value = Game_Battler.prototype.xparamFlat.call(this, id);
    var length = this.equips().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.equips()[i];
      if (obj && obj.flatXParams) value += obj.flatXParams[id];
    }
    value += this.actor().flatXParams[id];
    value += this.currentClass().flatXParams[id];
    return value;
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.xparamPlus = function(id) {
    var value = Game_Battler.prototype.xparamPlus.call(this, id);
    value += this.enemy().plusXParams[id];
    return value;
};

Game_Enemy.prototype.xparamRate = function(id) {
    var value = Game_Battler.prototype.xparamRate.call(this, id);
    value *= this.enemy().rateXParams[id];
    return value;
};

Game_Enemy.prototype.xparamFlat = function(id) {
    var value = Game_Battler.prototype.xparamFlat.call(this, id);
    value += this.enemy().flatXParams[id];
    return value;
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

Yanfly.Util.displayError = function(e, code, message) {
  console.log(message);
  console.log(code || 'NON-EXISTENT');
  console.error(e);
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0") return;
  if (Utils.isNwjs() && Utils.isOptionValid('test')) {
    if (!require('nw.gui').Window.get().isDevToolsOpen()) {
      require('nw.gui').Window.get().showDevTools();
    }
  }
};

//=============================================================================
// End of File
//=============================================================================
