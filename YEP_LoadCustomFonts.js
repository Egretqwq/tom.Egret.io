//=============================================================================
// Yanfly Engine Plugins - Load Custom Fonts
// YEP_LoadCustomFonts.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_LoadCustomFonts = true;

var Yanfly = Yanfly || {};
Yanfly.LCF = Yanfly.LCF || {};
Yanfly.LCF.version = 1.01;

//=============================================================================
 /*:
 * @plugindesc 官方版本：v1.01 | 009加载自定义字体
 * @author Yanfly Engine Plugins(YEP) | 汉化+机翻：YuukakeID
 *
 * @param 字体文件名
 * @desc 需要从项目的fonts文件夹加载的字体完整文件名。用英文逗号“,”隔开。默认示例：cc-wild-words.ttf, ds-pixel-cyr.ttf
 * @default cc-wild-words.ttf, ds-pixel-cyr.ttf
 *
 * @param 字体族
 * @desc 字体的字体族名称。将它们按与上述参数相同的顺序排列。用英文逗号“,”隔开。默认示例：CC Wild Words, DS Pixel Cyr
 * @default CC Wild Words, DS Pixel Cyr
 *
 * @help
 *
 * 机翻版本：v0.02  完成时间：2023.10.12
 *
 * 插件官方描述：
 * 从“fonts”文件夹加载自定义字体
 * 这将让您在不安装自定义字体的情况下可以使用它们
 *
 * ============================================================================
 * 简介 & 说明
 * ============================================================================
 *
 * 对于那些使用自定义字体的用户，您可能已经注意到：
 * 在加载游戏时，并非所有“fonts”目录中的字体都已加载
 *
 *
 * ！！举个例子
 * ！！使用Message Core插件时，即使你的fonts文件夹里放着很多字体
 * ！！游戏里存在更改字体的效果功能
 * ！！但如果用户的电脑没有安装这些字体
 * ！！那这些更改字体的效果将不会实现！
 * ！！
 * ！！而这个插件的作用就是，无需用户安装那些字体
 * ！！只要在此插件的参数里录入字体名称、字体族
 * ！！就能使更改字体的效果生效
 *
 *
 * 这个插件可以在游戏开始时加载放在“fonts”目录中的指定字体
 *
 * 请按照以下使用说明使用操作此插件：
 *
 * 插件参数“字体文件名”和“字体族”必须相互对应填写
 * 每个字体条目的顺序必须相互匹配。例如：
 *      字体文件名: cc-wild-words.ttf, ds-pixel-cyr.ttf
 *      字体族: CC Wild Words, DS Pixel Cyr
 * 字体：cc-wild-words.ttf，对应字体族：CC Wild Words
 * 字体：ds-pixel-cyr.ttf，对应字体族：DS Pixel Cyr
 *
 * 对于使用字体名称的插件，如：YEP_MessageCore插件时
 * 您将使用字体族的名称而不是字体文件名
 *
 * ！注：YEP_MessageCore的字体参数中，有 字体名称 这个参数
 * ！以本插件默认的设置来说，YEP_MessageCore的参数 字体名称
 * ！需要填：CC Wild Words
 * ！或者：DS Pixel Cyr
 * ！或者：CC Wild Words, DS Pixel Cyr
 * ！而非：cc-wild-words(.ttf)、ds-pixel-cyr(.ttf)和
 * ！cc-wild-words(.ttf), ds-pixel-cyr(.ttf)
 *
 * ============================================================================
 * 变更日志
 * ============================================================================
 *
 * 版本 1.01:
 * - - 为RPG Maker MV 1.5.0版更新
 *
 * Version 1.00:
 * - 完成插件制作！
 */
//=============================================================================

//=============================================================================
// Parameter Variables - 插件参数变量
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_LoadCustomFonts');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.LCFFontFilenames = String(Yanfly.Parameters['字体文件名']);
Yanfly.Param.LCFFontFamilies = String(Yanfly.Parameters['字体族']);

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

Yanfly.Util.loadCustomFonts = function() {
  var filenames = Yanfly.Param.LCFFontFilenames.split(',');
  var fontfamilies = Yanfly.Param.LCFFontFamilies.split(',');
  if (filenames.length !== fontfamilies.length) {
    if (filenames.length > fontfamilies.length) {
      console.log('“字体族”参数中缺少字体。');
    }
    if (filenames.length < fontfamilies.length) {
      console.log('“字体文件名”参数中缺少字体。');
    }
    console.log('加载自定义字体已中止。');
    return;
  }
  var projectDirectory = window.location.pathname.substring(0,
    window.location.pathname.lastIndexOf('/'));
  var length = filenames.length;
  for (var i = 0; i < length; ++i) {
    var filename = filenames[i].trim();
    var fontfamily = fontfamilies[i].trim();
    Graphics.loadFont(fontfamily, projectDirectory + '/fonts/' + filename);
  }
};
Yanfly.Util.loadCustomFonts();

//=============================================================================
// End of File
//=============================================================================

