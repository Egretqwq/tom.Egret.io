/*:
 * @plugindesc [Debug] OrangeHud Clock Background - 显示时钟背景
 * @author Your Name
 * @help 调试版本，会在控制台输出日志。需要OrangeHud支持。
 * 
 * @param ClockBG
 * @desc 时钟背景设置
 * @type struct<ClockBGSettings>
 * @default {"picture":"clock_bg","x":600,"y":0,"switchId":0}
 */

/*~struct~ClockBGSettings:
 * @param picture
 * @desc 图片文件名（不加.png后缀）
 * @default clock_bg
 */
(function() {
    'use strict';
    var parameters = PluginManager.parameters('OrangeHudClockBG');
    var bgParams = JSON.parse(parameters['ClockBG']);

    var ClockBGManager = {
        validateParams: function(params) {
            params.picture = String(params.picture || 'clock_bg');
            params.x = Number(params.x || 600);
            params.y = Number(params.y || 0);
            params.switchId = Number(params.switchId || 0);
            console.log('[ClockBG] 参数加载:', params);
        },

        getKey: function(params) {
            return 'clock_bg_' + params.picture;
        },

        getValue: function(params) {
            var switchState = params.switchId > 0 ? $gameSwitches.value(params.switchId) : true;
            return params.picture + '_' + switchState;
        },

        drawLine: function(window, params) {
            if (params.switchId > 0 && !$gameSwitches.value(params.switchId)) {
                console.log('[ClockBG] 开关未开启，跳过绘制');
                return;
            }

            try {
                var bitmap = ImageManager.loadPicture(params.picture);
                if (bitmap.isReady()) {
                    window.drawPicture(params.picture, params.x, params.y);
                    console.log('[ClockBG] 成功绘制图片:', params.picture);
                } else {
                    console.warn('[ClockBG] 图片未加载完成:', params.picture);
                    bitmap.addLoadListener(function() {
                        OrangeHud.refresh();
                    });
                }
            } catch (e) {
                console.error('[ClockBG] 绘制错误:', e);
            }
        }
    };

    if (Imported.OrangeHud) {
        OrangeHud.registerLineType('OrangeHudClockBG', ClockBGManager);
        console.log('[ClockBG] 已注册到OrangeHud');
    } else {
        console.error('[ClockBG] 错误: 需要先加载OrangeHud插件');
    }

    // 初始化时验证参数
    ClockBGManager.validateParams(bgParams);
})();