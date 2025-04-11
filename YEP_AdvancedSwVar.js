//=============================================================================
// Yanfly Engine Plugins - Advanced Switches % Variables
// YEP_AdvSwVar.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_AdvSwVar = true;

var Yanfly = Yanfly || {};
Yanfly.AdvSwVar = Yanfly.AdvSwVar || {};
Yanfly.AdvSwVar.version = 1.02;

//=============================================================================
 /*:
 * @plugindesc 官方版本：v1.02 | 003高级开关与高级变量
 * @author Yanfly Engine Plugins(YEP) | 汉化+机翻：YuukakeID
 *
 * @help
 *
 * 机翻版本：v0.04  完成时间：2023.09.17
 *
 * 插件官方描述：
 * 制作可以利用JS来增强利用率的高级开关和变量。
 *
 * ============================================================================
 * 介绍
 * ============================================================================
 *
 * 对于有JavaScript经验的高级用户，可以将某些开关和变量设置为
 * 通过代码段返回有关游戏的数据
 * 这可以用于事件页面条件、敌方AI条件、敌群页面条件等
 *
 * ============================================================================
 * 指南
 * ============================================================================
 *
 * 按以下格式命名要使用代码效果的开关或变量——高级开关/高级变量：
 *
 *   高级: 代码
 *
 * 或可用：
 *
 *   eval: 代码
 * (注：eval不区分大小写，代码部分需要区分大小写)
 *
 * 特别地，你可以在“高级”或者“eval”前面加上其他字符：
 *
 *   文字高级: 代码
 *
 * 其中，“文字”的部分根据需求来更改，实例如：
 *
 * 第11号开关命名为：
 *   角色1是否习得技能10：高级: $gameActors.actor(1).isLearnedSkill(10)
 *
 * 前面的“角色1是否习得技能10：”即作为一个备注，对这个高级开关的代码
 * “$gameActors.actor(1).isLearnedSkill(10)”部分的效果做一个说明
 * 
 *
 * 这将使开关或变量运行“高级:”标识之后的代码段的内容
 * 用于开关，需要代码能返回布尔值“true”或“false”
 * 用于变量，需要代码能返回一个数值，与代码进行比较
 *
 * 例如，开关X名为“高级: $gameActors.actor(1).isLearnedSkill(5)”
 * 在1号角色已习得5号技能的状态，将返回“true”，未习得时返回“false”
 * 这可以用于一些特别的事件。比如制作一个“真实之眼”的技能：
 * 角色已习得该技能时，可以触发某些事件，地图上显示之前看不到的物品等
 *
 * 虽然由于事件指令的“变量操作-操作数-脚本”，变量本身可以轻松插入自己
 * 的JS代码，但将变量X命名为“高级: code”的形式可省去额外/重复的步骤
 * 例如，变量X名为“高级:$gameParty.gold()”
 * 将直接让变量X引用金钱数，省略在事件中加入“变量操作：#X = 金钱”的步骤
 *
 * ！注意：
 * 将高级开关/变量用作事件的页面出现条件时，
 * 对地图上的事件所做的任何更改都不会立即反映/更新到高级开关/变量上。
 * 需要刷新地图才能更新高级开关/变量的值，
 * 以此刷新制作者使用高级开关/变量作为出现条件的事件。
 * 可以在高级开关/变量的值产生变动后，使用以下插件命令来刷新地图：
 *
 * ============================================================================
 * 插件命令
 * ============================================================================
 *
 * 这些插件命令可用于立即刷新地图或敌群事件
 * 以确保开关/变量数据在你调用时，被识别、触发或更新
 * 
 * 插件命令(不区分大小写)：
 * 
 *   刷新地图
 * 或可用：RefreshMap
 *   - 这将刷新地图的所有事件，以更新高级开关/变量，使其变化立即适用
 *   只能在战斗之外的场景使用。
 *   ——举个例子，假如地图1上有三个事件：A、B、C
 *   其中：
 *     A事件的出现条件是1号开关开启时
 *     B事件的内容是，交互(对话)后执行事件指令：角色1学会技能66
 *     C事件的内容是，交互(对话)后执行插件命令：刷新地图
 *     1号开关的名称是：高级: $gameActors.actor(1).isLearnedSkill(66)
 *     
 *   当与事件B交互时，角色1习得技能66，但事件A不出现，此时选择：
 *     -1.什么也不做：事件A不会出现
 *     -2.直接与事件C交互：事件A出现
 *     -3.去其他地图再回来：事件A出现(切换地图本身就会刷新地图事件)
 *
 *   当使用“事件-场所移动”指令切换不同地图时，游戏将刷新页面，因此
 *   高级开关X/变量Y的变动，不与以X开关/Y变量作为触发/出现条件的事件
 *   处于同一个地图时，可以不使用该命令
 *   ！特别地，使用“事件-场所移动”指令在当前地图内移动，并不会刷新地图
 *
 *   此外，下列情形会刷新地图：
 *     事件执行“开关操作”、“独立开关操作”、“变量操作”时
 *     菜单中手动使用道具、更改装备后关闭菜单时
 *     (千寒暂时只发现这两种。喜欢玩代码的，可以去rpg_XXXX.js里找找看)
 *
 *   ！建议：
 *     高级开关/变量变动后，尽量使用这个命令
 *     除非你不想让对应的事件实时生效
 *
 *   刷新敌群
 * 或可用：RefreshTroop
 *   - 这将刷新战斗中的当前敌群的事件解释器
 *     事件解释器的刷新，同样会更新高级开关/变量
 *   ！注意：如果你使用了战斗引擎核心插件(YEP_BattleEngineCore)
 *     那么在“大多数”情况下都不需要使用此命令
 *
 * ============================================================================
 * 示例
 * ============================================================================
 *
 * 下面是一些可以使用高级开关和变量的示例！
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * 游戏开关
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 * 高级: $gameActors.actor(1).isLearnedSkill(5)
 * - 这将检查数据库中的 1号角色是否学习了 5号技能。
 * 这可以用于习得某些技能时，使某些事件在地图上显示/隐藏
 * 或让某些事件在战斗中发生（如看穿敌人的伪装）
 *
 * 高级: $gameActors.actor(2).isStateAffected(10)
 * - 这将检查 2号角色是否处于 10号状态中
 * 如果角色受到影响，开关将返回true；否则，返回false。下同！
 *
 * 高级: $gameActors.actor(3).isEquipped($dataWeapons[100])
 * - 这将检查 3号角色是否装备了 100号武器
 *
 * 高级: $gameActors.actor(4).isEquipped($dataArmors[200])
 * - 这将检查 4号角色是否装备了 200号护甲
 *
 * 高级: $gameActors.actor(5).isDead()
 * - 这将检查 5号角色目前是否已死亡。死亡需要角色处于“死亡”状态中
 *
 * 高级: $gameActors.actor(6).isAlive()
 * - 这将检查 6号角色目前是否存活。存活需要角色不处于“死亡”状态中
 *
 * 高级: $gameVariables.value(2) < 3
 * - 事件的页面出现条件，通常只能在变量“大于等于”某个值时进行检查
 * 而现在，你可以做相反的条件——检查变量是否小于某个值。
 *   上面使用的示例将检查 2号变量的值，是否小于(但不等于)3
 *
 * 高级: $gameSelfSwitches.value([10,20,'A'])
 * - 这将允许事件使用另一个事件的独立开关情况来确定其状态
 * 上面的示例会检查 10号地图的 20号事件的独立开关A是否开启
 * 20号事件的独立开关A打开时，这个开关将开启
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * 游戏变量
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 * 高级: $gameParty.leader().actorId()
 * - 这将返回领队角色的数据库编号ID
 * 如：当领队是1号角色时，执行事件获得道具A
 * 当领队是2号角色时，执行事件获得线索B等
 *
 * 高级: $gameParty.gold()
 * - 这将返回队伍的金钱数
 *
 * 高级: $gameParty.steps()
 * - 这将返回玩家走过的步数
 *
 * 高级: $gameParty.aliveMembers().length
 * - 这将返回当前队伍中存活的成员数量
 * 最好是在战斗中使用(因为脱战状态下，死亡成员会以1血复活，下同)
 * 根据目前在战斗中存活的成员数量，使不同的事情发生。
 *
 * 高级: $gameParty.deadMembers().length
 * - 这将返回当前队伍中死亡的成员数量
 * 根据目前在战斗中死亡的成员数量，使不同的事情发生。
 *
 * 高级: $gameParty.highestLevel()
 * - 这将返回队伍成员中，最大的等级数值
 * 如果在战斗中，只检测在战斗中的成员的等级
 * 战斗之外检测队伍中的所有成员的等级
 *
 * 高级: $gameParty.numItems($dataItems[1])
 * 高级: $gameParty.numItems($dataWeapons[2])
 * 高级: $gameParty.numItems($dataArmors[3])
 * - 这将返回道具(物品，武器，护甲)的实际数量，而不是队伍是否拥有该道具
 * 对于武器和护甲，将不包括已经被装备上的部分
 *
 * ============================================================================
 * 变更日志
 * ============================================================================
 *
 * 版本 1.02:
 * - 绕过由于更新到MV 1.6.1，脚本调用或自定义疯狂模式代码段中插入
 * 错误代码时的“isDevToolsOpen()”错误
 *
 * 版本 1.01:
 * - 已修复错误，以防止调试器出现兼容性问题
 *
 * 版本 1.00:
 * - 完成插件制作！
 *
 * ============================================================================
 * 帮助文档结束
 * ============================================================================
 *
 */
//=============================================================================

//=============================================================================
// Game_Switches
//=============================================================================

Yanfly.AdvSwVar.Game_Switches_value = Game_Switches.prototype.value;
Game_Switches.prototype.value = function(switchId) {
  if (this.isAdvancedSwitch(switchId)) {
    return this.runAdvancedSwitchCode(switchId);
  } else {
    return Yanfly.AdvSwVar.Game_Switches_value.call(this, switchId);
  }
};

Game_Switches.prototype.isAdvancedSwitch = function(switchId) {
  if (SceneManager._scene._debugActive) return false;
  if (SceneManager._scene instanceof Scene_Debug) return;
  var name = $dataSystem.switches[switchId];
  if (name.match(/高级:[ ](.*)/i) || name.match(/EVAL:[ ](.*)/i)) return true;
  return false;
};

Game_Switches.prototype.runAdvancedSwitchCode = function(switchId) {
  var value = false;
  var name = $dataSystem.switches[switchId];
  if (name.match(/高级:[ ](.*)/i) || name.match(/EVAL:[ ](.*)/i)) {
    var code = 'value = ' + String(RegExp.$1);
  } else {
    return this.defaultAdvancedSwitchResult(switchId);
  }
  try {
    eval(code);
  } catch (e) {
    Yanfly.Util.displayError(e, code, '第' + switchId + '号高级开关函数错误');
    //Yanfly.Util.displayError(e, code, 'ADVANCED SWITCH ' + switchId + ' EVAL ERROR');
  }
  return value;
};

Game_Switches.prototype.defaultAdvancedSwitchResult = function(switchId) {
  return false;
};

//=============================================================================
// Game_Variables
//=============================================================================

Yanfly.AdvSwVar.Game_Variables_value = Game_Variables.prototype.value;
Game_Variables.prototype.value = function(variableId) {
  if (this.isAdvancedVariable(variableId)) {
    return this.runAdvancedVariableCode(variableId);
  } else {
    return Yanfly.AdvSwVar.Game_Variables_value.call(this, variableId);
  }
};

Game_Variables.prototype.isAdvancedVariable = function(variableId) {
  if (SceneManager._scene._debugActive) return false;
  if (SceneManager._scene instanceof Scene_Debug) return;
  var name = $dataSystem.variables[variableId];
  if (name.match(/高级:[ ](.*)/i) || name.match(/EVAL:[ ](.*)/i)) return true;
  //if (name.match(/EVAL:[ ](.*)/i)) return true;
  return false;
};

Game_Variables.prototype.runAdvancedVariableCode = function(variableId) {
  var value = 0;
  var name = $dataSystem.variables[variableId];
  if (name.match(/高级:[ ](.*)/i) || name.match(/EVAL:[ ](.*)/i)) {
  //if (name.match(/EVAL:[ ](.*)/i)) {
    var code = 'value = ' + String(RegExp.$1);
  } else {
    return this.defaultAdvancedVariableResult(variableId);
  }
  try {
    eval(code);
  } catch (e) {
    Yanfly.Util.displayError(e, code, '第' + variableId + '号高级变量函数错误');
    //Yanfly.Util.displayError(e, code, 'ADVANCED VARIABLE' + variableId + ' EVAL ERROR');
  }
  return value;
};

Game_Switches.prototype.defaultAdvancedVariableResult = function(variableId) {
  return 0;
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.AdvSwVar.Game_Interpreter_pluginCommand =
  Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  Yanfly.AdvSwVar.Game_Interpreter_pluginCommand.call(this, command, args);
  //if (command === '刷新地图') {
  if (command.match(/^REFRESHMAP$|^刷新地图$/i)) {
    if (!$gameParty.inBattle()) {
      $gameMap.requestRefresh($gameMap.mapId());
    }
  }
  //if (command === '刷新敌群') {
  if (command.match(/^REFRESHTROOP$|^刷新敌群$/i)) {
    if ($gameParty.inBattle()) {
      $gameTroop.setupBattleEvent();
    }
  }
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