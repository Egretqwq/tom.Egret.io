/*:
 * @plugindesc 防止在敌人5出现前战斗结束（胜利）v1.0
 * @author ChatGPT
 *
 * @help
 * 本插件会阻止战斗在“敌人5”未出现之前结束。
 * 即使其他敌人全部被打败，战斗也不会胜利，直到敌人5出现在战场上。
 *
 * 使用说明：
 * - 请确保敌人5在敌群中是第5个敌人（编号为4，从0开始计数）
 * - 敌人5必须是通过事件“显示战斗者”加入的，而不是一开始就出现
 * - 启用此插件后，战斗结束逻辑会自动被覆盖
 */

(function() {
  const _BattleManager_checkBattleEnd = BattleManager.checkBattleEnd;
  BattleManager.checkBattleEnd = function() {
    const enemy5 = $gameTroop.members()[4];
    const enemy5NotAppeared = enemy5 && !enemy5.isAppeared();
    if (this._phase === 'battleEnd') return true;
    if (this._phase && this._phase !== 'start') {
      if ($gameTroop.isAllDead() && enemy5NotAppeared) {
        return false; // 阻止战斗结束
      }
    }
    return _BattleManager_checkBattleEnd.call(this);
  };
})();
