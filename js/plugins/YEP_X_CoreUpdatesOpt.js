//=============================================================================
// Yanfly Engine Plugins - Core Extension - Updates and Desktop Optimization
// YEP_X_CoreUpdatesOpt.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_CoreUpdatesOpt = true;

var Yanfly = Yanfly || {};
Yanfly.Updates = Yanfly.Updates || {};
Yanfly.Updates.version = 1.62;

//=============================================================================
 /*:
 * @plugindesc 官方版本：v1.62 | 002核心引擎扩展：代码更新与桌游优化
 * @author Yanfly Engine Plugins(YEP) | 汉化+机翻：YuukakeID
 *
 * @help
 *
 * 机翻版本：v0.05  完成时间：2023.09.17
 *
 * 插件官方描述：
 * (必须：YEP_CoreEngine.js)无需修改基础rpg_xx.js文件，即可更新游戏
 * 并针对桌面进行优化
 *
 * ============================================================================
 * 介绍
 * ============================================================================
 *
 * 此插件需要：
 * - 安装并开启YEP_CoreEngine插件，在YEP_CoreEngine下方安装本插件
 * - 确保MV版本的基础代码是1.4.0或以上
 * - 请遵循该插件帮助文档中，“指南”部分中列出的说明
 *
 * 你的游戏项目是否至少1.4.0版本的内容？
 * 或者虽然更新过MV，但是您不想手动更新基础代码(指js/rpg_xx.js文件)
 * 可能是因为您已经对代码本身进行了一些自定义编辑，而你仍然想体验版本
 * 升级的变化。本插件会在保持基础代码不变的情况下为您提供帮助和修补。
 * 
 * 该插件还添加了1.5.2之前版本的更新和新功能
 * 以确保您的项目即使运行1.4.0，也具有最新的功能
 * 这样，您就不必自己修改游戏项目的基础代码文件。
 *
 * 注意：您仍然需要下载最新的Pixi库，并使用此插件正常工作
 * 更多内容将在帮助文件下的插件指南部分进行说明
 *
 * ============================================================================
 * 指南
 * ============================================================================
 *
 * 如果您有需要更新的旧项目，请执行以下操作：
 *
 * 1. 备份你的项目
 * 2. 创建一个新项目，或转到MV安装目录文件夹中的“NewData”文件夹
 * 3. 复制“js”下的“libs”文件夹，并替换旧项目中的文件夹
 * 4. 将新的index.html文件复制到当前项目
 * 5. 更新gamefont.css以防万一
 * 6. 确保已安装最新版本的YEP_CoreEngine.js
 * 7. 在游戏项目的插件管理器列表中的YEP_CoreEngine下安装此插件
 * 8. 运行游戏
 *
 * ============================================================================
 * 桌面游戏优化选项 - Desktop Optimization Option
 * ============================================================================
 *
 * 本插件还包括Yanfly的桌面优化基础代码更改，用于希望优化PC端游戏的人
 * 自1.5.0更新以来，MV为整个编辑器添加了许多精彩的新功能
 * 但是更多为了移动游戏的优化
 * 正因为如此，与1.4.0及以下版本不同，1.5.0及以上版本的MV游戏
 * 在加载图像时会出现奇怪的问题
 * 
 * 该功能通过使用更适合桌面优化的1.4.0源代码，成为MV最新版本的混合
 * 对主要致力于桌面游戏开发的人来说，游戏将像使用1.4.0基础代码一样运行
 * 同时能够充分利用最新更新的MV版本的功能！
 *
 * ============================================================================
 * RPG Maker MV 1.1.0 变更日志
 * ============================================================================
 *
 * rpg_core.js
 * Sprite.prototype.updateTransform – 不再需要向下舍入
 * Tilemap.prototype.update – 已删除动画帧
 * Tilemap.prototype.refresh – 重新绘制标志已移除
 * Tilemap.prototype.updateTransform – 删除了大量动画检查
 * Tilemap.prototype._paintTiles – 动画帧检查移至此处
 * Tilemap.prototype._drawAutotile – 修复了变量名错误
 *
 * rpg_managers.js
 * 
 * DataManager.saveGame – 在并行进程中保存时不再损坏保存文件
 * StorageManager.backup – 添加了新函数
 * StorageManager.backupExists – 添加了新函数
 * StorageManager.cleanBackup – 添加了新函数
 * StorageManager.restoreBackup – 添加了新函数
 * StorageManager.loadFromLocalBackupFile – 添加了新函数
 * StorageManager.loadFromWebStorageBackup – 添加了新函数
 * StorageManager.webStorageBackupExists – 添加了新函数
 * SceneManager – 添加了FPS同步
 * SceneManager.updateMain – 添加到FPS同步中
 * BattleManager.processEscape – 删除了战斗状态从错误位置移除过程
 * BattleManager.processAbort – 插入战斗状态移除过程以更正计时
 * 
 * rpg_objects.js
 * Game_Action.prototype.decideRandomTarget – 修复了随机目标索引错误
 * Game_Action.prototype.evaluate – 目标索引错误已修复
 * Game_Action.prototype.evalDamageFormula – 如果使用的公式返回NaN，则返回0
 * Game_Actor.prototype.changeClass – 修复了经验值错误
 * Game_Event.prototype.updateSelfMovement – 添加额外检查：事件是否未锁定
 * Game_Interpreter.prototype.command321(事件指令：变更职业)
 * – 变更职业命令现在可选择保留经验值
 * 
 * rpg_scenes.js
 * Scene_Save.prototype.onSaveSuccess – 添加了备份过程功能
 *
 * rpg_sprites.js
 * Sprite_Actor.prototype.refreshMotion – 为守备动作添加了修复
 * Spriteset_Map.prototype._canvasReAddParallax – 添加了新函数
 * Spriteset_Map.prototype.updateParallax – 视差(远景)错误的修复
 *
 * rpg_windows.js
 * Window_MenuStatus.prototype.drawItemImage – 修复了涉及可变面尺寸的错误
 * Window_ActorCommand.prototype.selectLast – 修复了保存上次选定命令的错误
 *
 * ============================================================================
 * RPG Maker MV 1.2.0 变更日志
 * ============================================================================
 * 
 * rpg_core.js
 * TilingSprite.prototype.generateTilingTexture – 添加
 * 
 * rpg_objects.js
 * Game_Picture.prototype.updateRotation - 更新。为了适应设置的旋转值
 * 
 * rpg_sprites.js
 * Sprite_Animation.prototype.updateCellSprite - 更新。图案存在精灵始终可见
 *
 * ============================================================================
 * RPG Maker MV 1.3.0 变更日志
 * ============================================================================
 * 
 * rpg_core.js
 * 数组获得一个新函数：equals
 * 新类:CacheEntry(缓存条目)
 *
 * Bitmap(位图)从Pixi2更新到Pixi4：：
 * Bitmap.initialize
 * Bitmap.load
 * Bitmap.snap
 * Bitmap.onLoad
 * Bitmap._setDirty
 * 新函数：Bitmap.touch, Bitmap.bltImage
 *
 * Graphics(图形)从Pixi2更新到Pixi4：：
 * Graphics.isWebGL
 * 新函数：callGC
 *
 * Sprite(精灵)从Pixi2更新到Pixi4：
 * Sprite.constructor
 * Sprite._refresh
 * Sprite._renderCanvas
 * Sprite._renderWebGL
 * 新函数：_speedUpCustomBlendModes
 *
 * Tilemap(平铺地图，图块)从Pixi2更新到Pixi4：
 * Tilemap.initialize
 * Tilemap.update
 * Tilemap.refresh
 * Tilemap.updateTransform
 * Tilemap._paintTiles
 * Tilemap._drawNormalTile
 * Tilemap._drawAutotile
 * Tilemap.isWallSideTile
 * 新类：ShaderTilemap(着色器图块)
 *
 * TilingSprite(平铺精灵)从Pixi2更新到Pixi4：
 * TilingSprite.initialize
 * TilingSprite.updateTransform
 * TilingSprite._refresh
 * 新函数：TilingSprite._renderCanvas, TilingSprite._renderWebGL
 *
 * ScreenSprite(屏幕精灵)从Pixi2更新到Pixi4：
 * ScreenSprite.initialize
 * ScreenSprite._renderCanvas
 *
 * Window(窗口)从Pixi2更新到Pixi4：
 * Window.initialize
 * Window.updateTransform
 * Window._createAllParts
 *
 * WindowLayer(窗口层)从Pixi2更新到Pixi4：
 * WindowLayer.initialize
 * WindowLayer._renderCanvas
 * WindowLayer._renderWebGL
 * WindowLayer._webglMaskWindow
 *
 * Weather(天气)从Pixi2更新到Pixi4：
 * Weather.initialize
 *
 * ToneFilter(音调滤波器)从Pixi2更新到Pixi4：
 * 移除：ToneFilter.initialize
 * 移除：ToneFilter.reset
 * ToneFilter.adjustHue
 * ToneFilter.adjustSaturation
 * ToneFilter.adjustTone
 *
 * ToneSprite(音调精灵)从Pixi2更新到Pixi4：
 * ToneSprite.initialize
 * ToneSprite._renderCanvas
 * ToneSprite._renderWebGL
 *
 * Stage(阶段)从Pixi2更新到Pixi4：
 * Stage.initialize
 *
 * WebAudio(Web音频)更新函数以与新的解密器配合使用
 * WebAudio._load
 * WebAudio._onXhrLoad
 *
 * Html5Audio(Html5音频)更新函数以与新的解密器配合使用
 * Html5Audio.setup
 * 新类：Decrypter(解密器)
 * 
 * rpg_managers.js
 * DataManager.onLoad - 获取添加的解密器的更新检查
 *
 * ImageManager._cache - 不再存在。ImageManager.cache作为新CacheMap取而代之
 * ImageManager.loadEmptyBitmap, ImageManager.loadNormalBitmap,
 * ImageManager.clear, ImageManager.isReady - 现在都从_cache更新到cache
 *
 * AudioManager - 获得AudioManager._blobUrl
 * AudioManager.playBgm - 获取Decryptor的更新检查
 * 新函数：AudioManager.playEncryptedBgm, AudioManager.createDecryptBuffer
 * AudioManager.createBuffer - 已更新到utilize _blobUrl
 * AudioManager.shouldUseHtml5Audio - 已为Decryptor更新
 *
 * SceneManager.update - 获取MobileSafari的更新检查
 * SceneManager.updateMain - 使用MobileSafari，将更新为不同的功能
 * 新函数：SceneManager.updateManagers
 *
 * rpg_objects.js
 * Game_Picture.updateRotation - 现在接受负速度
 * Game_BattlerBase.tpRate - 现在使用Game_Battler Base.maxTp函数
 *
 * rpg_scenes.js
 * Scene_Boot.create - 现在单独加载窗口图像
 * 新函数：Scene_Boot.loadSystemWindowImage
 * Scene_Boot.loadSystemImages - 不再加载窗口图像
 *
 * rpg_sprites.js
 * Sprite_Animation.initialize - 获取新的_reduceArtifacts变量
 * Sprite_Animation.updateCellSprite - 获得一个更新
 * 如果图案至少为0，则图案精灵现在始终可见
 *
 * Sprite_Picture.initialize - 获取新的_isPicture变量
 *
 * Spriteset_Map.createTilemap - 将更新以检查是否正在使用WebGL
 * 如果是，则平铺图块将是ShaderTilmap，而不是常规平铺图块
 * Spriteset_Map.loadTileset - 更新为在加载新的平铺图块标志时刷新标志
 *
 * ============================================================================
 * RPG Maker MV 1.3.1 变更日志
 * ============================================================================
 *
 * rpg_core.js
 * CacheEntry.free - 函数已修复
 * Tilemap’s TileRenderer的TileRender模式将自动默认为Nearest Neighbor
 * ScreenSprite - 更新
 * 新增财产：anchor和blendMode
 * ScreenSprite.initialize
 * ScreenSprite.setColor
 * WebAudio.onXhrLoad - 函数已修复
 *
 * ============================================================================
 * RPG Maker MV 1.3.2 变更日志
 * ============================================================================
 *
 * rpg_core.js
 * 添加waitForLoading和注册变量
 *
 * Graphics.playVideo - 更新，以添加视频播放的移动Safari检查
 * Graphics.isVideoPlaying - 更新，以添加视频播放的移动Safari检查
 * Graphics._onVideoLoad - 更新，以添加视频播放的移动Safari检查
 * Graphics._onVideoEnd - 更新，以添加视频播放的移动Safari检查
 *
 * Input._updateGamepadState - 更新，以提供直接输入控制器支持
 *
 * Sprite.prototype.initialize - 更新，不再具有偏移量变量。它现在被轴替换
 * Sprite.prototype._refresh - 更新了偏移量变量，以使用轴心和纹理更新ID
 * Sprite.prototype.updateTransform - 移除函数
 *
 * TilingSprite - 现在是一种不同的对象类型(PictureTilingSprite).
 * TilingSprite.prototype.initialize - 更新为调用PictureTilingPrite
 * TilingSprite.prototype._renderCanvas_PIXI、TilingSprite._renderWebGL_PIXI 
 * - 更新为使用PictureTilingPrite
 * TilingSprite.prototype._refresh - 更新，用于PictureTilingPrite和纹理更新ID
 * TilingSprite.prototype._speedUpCustomBlendModes - 新建
 * TilingSprite.prototype._renderWebGL - 新函数
 *
 * WindowLayer.prototype.initialize - 更新以修复内存泄漏
 * WindowLayer.prototype.onRemoveAsAChild - 新函数
 * WindowLayer.prototype.renderWebGL - 已更新，可用于PIXI.Point shift
 * WindowLayer.prototype._maskWindow - 更新，需要shift
 * 
 * rpg_managers.js
 * SceneManager.onKeyDown
 * - 更新，对日本游戏系统显示警告消息：
 *   在连接游戏板的情况下重新加载游戏将导致断开连接
 *
 * BattleManager.invokeCounterAttack - 更新为将目标显示为反击目标而不是对象
 * BattleManager.invokeMagicReflection
 * - 更新功能以注册反射目标并将目标显示为反射目标而不是对象
 * 
 * rpg_objects.js
 * Game_Action.prototype.gainDrainedHp - 更新，对反射目标有效
 * Game_Action.prototype.gainDrainedMp - 更新，对反射目标有效
 * Game_Actor.prototype.isLearnedSkill - 更新，现在包括通过“特性”添加的技能
 *
 * Game_Interpreter.prototype.command337(事件指令：显示战斗动画)
 * - 更新，可以使用新的编辑器更新
 * 
 * rpg_scenes.js
 * Scene_Map.prototype.terminate - 更新以修复内存泄漏错误
 *
 * ============================================================================
 * RPG Maker MV 1.3.3 变更日志
 * ============================================================================
 *
 * 严格来说是编辑器更新
 *
 * ============================================================================
 * RPG Maker MV 1.3.4 变更日志
 * ============================================================================
 * 
 * rpg_core.js
 * Bitmap.snap - 现在会销毁以前保存的快照
 * TilingSprite.prototype.updateTransform - 删除注释
 * WindowLayer.prototype.renderWebG - 现在舍入移动的窗口坐标
 * 
 * rpg_managers.js
 * SceneManager.onKeyDown - 在按下F5时删除了讨厌的弹出窗口
 * BattleManager.updateEvent - 现在使用BattleManager.checkAbort2函数
 * BattleManager.checkAbort2 - 新函数。播放额外的声效，将战斗标记为逃跑
 * BattleManager.updateBattleEnd - 检查一方全部死亡且未逃脱，战斗是否中止
 * 
 * rpg_objects.js
 * Game_Actor.prototype.isLearnedSkill - 从1.0.0恢复到至1.3.1版本
 * Game_Actor.prototype.hasSkill
 * - 现在检查该技能是否存在，是固有的还是通过临时特性获得的
 * Game_Actor.prototype.testEscape
 * - 新函数。检查动作(物品或技能)是否具有逃跑效果
 * Game_Actor.prototype.meetsUsableItemConditions
 * - 现在专门检查玩家角色的使用情况，并检查物品是否具有转义效果
 * Game_Interpreter.prototype.command111 (事件指令：条件分支)
 * - 已更新，以使用新的Game_Actor.hasSkill函数
 *
 * ============================================================================
 * RPG Maker MV 1.4.0 变更日志
 * ============================================================================
 *
 * rpg_core.js
 * TouchInput.isMousePressed - 移除函数
 * 
 * rpg_objects.js
 * Game_Temp.prototype.initialize - 函数删除地图触摸布尔值
 * Game_Temp.prototype.isMapTouched - 移除函数
 * Game_Temp.prototype.setIsMapTouched - 移除函数
 * Game_Actor.prototype.meetsUsableItemConditions - 已更改。
 * 返回对Game_BattlerBase.prototype.MeetsUsbleItemConditions的引用以进行检查
 * Game_Player.prototype.updateDashing
 * - 现在检查是否按下了冲刺按钮，而不是是否触摸了游戏地图
 * 
 * rpg_scenes.js
 * Scene_Map.prototype.processMapTouch - 已更新，以反映地图触摸功能的删除
 *
 * ============================================================================
 * RPG Maker MV 1.5.0 变更日志
 * ============================================================================
 *
 * rpg_core.js
 * Utils.isSupportPassiveEvent - 添加了新函数
 * ImageCache - 添加，及其各自的函数
 * 用于重复使用图像的iOS内存函数更新
 * Bitmap.prototype.initialize - 拆分为iOS内存功能更新的新函数
 * Bitmap.load - 拆分为iOS内存功能更新的新函数
 * Bitmap.prototype.isReady and Bitmap.prototype.isError - 现在有额外的检查
 * 更新了Pixi4.4的Bitmap财产
 * Bitmap.prototype.addLoadListener - 根据更新的就绪函数更新
 * Bitmap.prototype.addLoadListener - 根据更新的侦听器函数更新
 * Bitmap.request - 添加了新函数
 * Graphics.initialize - 使用添加的新变量进行更新
 * Graphics._setupCssFontLoading - 添加了新函数
 * Graphics.render - 更新
 * Graphics.printLoadingError - 添加了新函数
 * Graphics.isFontLoaded - 更新
 * Graphics.playVideo - 更新
 * Graphics._createVideo - 更新
 * Graphics._createRenderer - 更新
 * Graphics._onVideoLoad - 更新
 * Graphics._onVideoError - 更新
 * Graphics._setupEventHandlers - 根据更新的侦听器函数更新
 * Input._onKeyDown - 更新
 * TouchInput._setupEventHandlers - 更新
 * Sprite.prototype.setFrame - 更新
 * Sprite.prototype._onBitmapLoad - 更新
 * Sprite.prototype._renderCanvas - 更新
 * Sprite.prototype._renderWebGL - 更新
 * ShaderTilemap.prototype._hackRenderer - 更新
 * WindowLayer.prototype.renderWebGL - 更新
 * WindowLayer.prototype._maskWindow - 更新
 * WebAudio._standAlone - 添加了新函数
 * WebAudio._createMasterGainNode - 更新
 * WebAudio._fadeIn - 更新
 * WebAudio._fadeOut - 更新
 * WebAudio.prototype.fadeOut - 更新
 * WebAudio.prototype._load - 更新
 * WebAudio.prototype._createNodes - 更新
 * JsonEx.stringify - 更新
 * JsonEx.parse - 更新
 * JsonEx._encode - 更新
 * JsonEx._decode - 更新
 * Decrypter.decryptImg - 更新
 * ResourceHandler - 新类
 * 
 * rpg_managers.js
 * DataManager.loadDataFile - 更新
 * DataManager.loadMapData - 更新
 * DataManager.loadSavefileImage - 已通过函数重命名更新
 *
 * 新增：
 * ImageManager._imageCache
 * ImageManager._requestQueue
 * ImageManager._systemReservationId
 * ImageManager._generateCacheKey
 *
 * ImageManager.loadEmptyBitmap - 已通过函数重命名更新
 * ImageManager.loadNormalBitmap - 已通过函数重命名更新
 * ImageManager.clear - 已通过新的ImageCache更新
 * ImageManager.isReady - 已通过新的ImageCache更新
 *
 * 新函数(已重命名)：
 * ImageManager.reserveAnimation
 * ImageManager.reserveBattleback1
 * ImageManager.reserveBattleback2
 * ImageManager.reserveEnemy
 * ImageManager.reserveCharacter
 * ImageManager.reserveFace
 * ImageManager.reserveParallax
 * ImageManager.reservePicture
 * ImageManager.reserveSvActor
 * ImageManager.reserveSvEnemy
 * ImageManager.reserveSystem
 * ImageManager.reserveTileset
 * ImageManager.reserveTitle1
 * ImageManager.reserveTitle2
 * ImageManager.reserveBitmap
 * ImageManager.reserveNormalBitmap
 * ImageManager.releaseReservation
 * ImageManager.setDefaultReservationId
 * ImageManager.requestAnimation
 * ImageManager.requestBattleback1
 * ImageManager.requestBattleback2
 * ImageManager.requestEnemy
 * ImageManager.requestCharacter
 * ImageManager.requestFace
 * ImageManager.requestParallax
 * ImageManager.requestPicture
 * ImageManager.requestSvActor
 * ImageManager.requestSvEnemy
 * ImageManager.requestSystem
 * ImageManager.requestTileset
 * ImageManager.requestTitle1
 * ImageManager.requestTitle2
 * ImageManager.requestBitmap
 * ImageManager.requestNormalBitmap - 新函数
 * ImageManager.update - 新函数
 * ImageManager.clearRequest - 新函数
 * AudioManager._masterVolume - 增加
 * SceneManager._getTimeInMs
 * 重命名为SceneManager._getTimeInMsWithoutMobileSafari
 * SceneManager.preferableRendererType - 根据每次新图形更新而更新
 * SceneManager.update - 添加了新的updatemanager
 * SceneManager.updateMain
 * 为新的SceneManager._getTimeInMsWithoutMobileSafari更新
 * SceneManager.updateManagers - 更新以利用ImageManager.update()函数
 * SceneManager.changeScene - 更新了新的预约系统
 * SceneManager.resume 添加了新函数
 * 
 * rpg_objects.js
 * Game_System.prototype.saveWalkingBgm2 添加了新函数
 * Game_Message.prototype.allText - 更新
 * Game_Map.prototype.autoplay更新了工具bgm
 * 以考虑新的Game_System.prototype.saveWalkingBgm2函数
 * Game_Character.prototype.findDirectionTo - 更新
 * Game_Interpreter.prototype.setup - 更新，现在开始时请求图像
 * Game_Interpreter.prototype.command282(事件指令：更改地图图块)
 * - 根据新的图像预约系统进行了更新
 * Game_Interpreter.requestImages 添加新函数到预加载事件将使用的图像
 * 
 * rpg_scenes.js
 * Scene_Base.prototype.initialize - 更新了新的预约系统
 * Scene_Base.prototype.attachReservation - 添加了新函数
 * Scene_Base.prototype.detachReservation - 添加了新函数
 * Scene_Base.prototype.update - 不再检查音频错误
 * Scene_Boot.prototype.loadSystemWindowImage
 * - 现在更新为保留图像而不是加载图像
 * Scene_Boot.loadSystemImages - 现在更新为保留图像而不是加载图像
 * Scene_Boot.prototype.isGameFontLoaded
 * - 现已更新CSS，加载时间从20秒增加到60秒
 * Scene_Map.prototype.terminate - 现已更新以清除请求
 * Scene_Menu.prototype.createStatusWindow - 现已更新以保留脸图
 * Scene_Skill.prototype.start - 添加了新函数
 * Scene_Skill.prototype.createStatusWindow - 现已更新以保留脸图
 * Scene_Status.prototype.create - 现已更新以保留脸图
 * Scene_Status.prototype.start 添加了新函数
 * Scene_Battle.prototype.terminate - 现在可以清除使用的图像
 * 
 * rpg_sprites.js
 * Sprite_Animation.prototype.isReady - 使用新的图像就绪系统
 * Sprite_Animation.prototype.updateCellSprite - 更新
 * 
 * rpg_windows.js
 * Window_Base.prototype.reserveFaceImages - 添加了新函数
 * Window_MenuStatus.prototype.initialize - 不再加载图像
 * Window_MenuStatus.prototype.loadImages - 现在使用保留图像函数
 * Window_Status.prototype.initialize - 已更新为具有初始空玩家角色
 * Window_NameEdit.prototype.initialize - 现在使用保留图像函数
 * Window_Message.prototype.initMembers - 更新了Utils.generateRuntimeId()函数
 * Window_Message.prototype.updateLoading - 使用新的图像就绪系统
 * Window_Message.prototype.loadMessageFace - 现在使用保留图像函数
 * Window_Message.prototype.drawMessageFace - 更新了保留图像函数
 *
 * ============================================================================
 * RPG Maker MV 1.5.1 变更日志
 * ============================================================================
 *
 * rpg_core.js
 * Sprite.prototype._renderWebGL - 更新为在检测重型渲染器的使用时挑剔
 * PIXI.GC_MODES.DEFAULT = PIXI.GC_MODES.AUTO; 更改为：
 * PIXI.settings.GC_MODE = PIXI.GC_MODES.AUTO;
 * 
 * rpg_managers.js
 * BattleManager.initMembers - 添加了新this._turnForced变量
 * BattleManager.endTurn - 已更新以检查是否已被强制回合
 * BattleManager.isForcedTurn - 新函数
 * BattleManager.processForcedAction - 更新了新的turn force变量
 * 
 * rpg_objects.js
 * Game_Battler.prototype.onTurnEnd - 已更新以检查强制回合
 * Game_Interpreter.prototype.command122(事件指令：变量操作)
 * - 更新为具有适当范围计算更改
 *
 * ============================================================================
 * RPG Maker MV 1.5.2 变更日志
 * ============================================================================
 *
 * rpg_core.js
 * Graphics.initialize - 以布尔值false的_videoUnlocked开始
 * Graphics._setupEventHandlers - 添加了按下按键和按下鼠标事件侦听器
 * WebAudio._setupEventHandlers
 * - 函数更新为具有按下按键/鼠标和触碰结束侦听器恢复功能
 * 
 * rpg_managers.js
 * BattleManager.updateEvent - 现在返回checkAbort而不是checkAbort2
 * BattleManager.checkAbort2 - 删除并成为BattleManager.checkAbort
 * 
 * rpg_objects.js
 * Game_Interpreter.prototype.command113(事件指令：循环终止) - 事件已修复
 * 
 * rpg_scenes.js
 * 没有更改 (很好，自从它没有Scene_Item活动窗口断路器)
 * 
 * rpg_sprites.js
 * Spriteset_Battle.prototype.overworldBattleback1Name和……2Name
 * - 函数更新为在确定为空字符串时不返回背景
 *
 * ============================================================================
 * RPG Maker MV 1.6.1 变更日志
 * ============================================================================
 *
 * rpg_core.js
 * Utils.isOptionValid function - 函数更新失败保存
 * WebAudio.prototype._startPlaying - 已为loopLength变量更新函数
 * 
 * rpg_objects.js
 * Game_Interpreter.prototype.command113(事件指令：循环终止) - 函数更新
 *
 * ============================================================================
 * 帮助文档末
 * ============================================================================
 *
 * @param --官方更新--
 * @default
 *
 * @param 110_Updates
 * @text 1.0.0到1.1.0
 * @parent --官方更新--
 * @type boolean
 * @on 是
 * @off 否
 * @desc 是否添加1.0.0到1.1.0更新？
 * 如果检测到更高版本，将自动禁用此功能
 * @default true
 *
 * @param 120_Updates
 * @text 1.1.0到1.2.0
 * @parent --官方更新--
 * @type boolean
 * @on 是
 * @off 否
 * @desc 是否添加1.1.0到1.2.0更新？
 * 如果检测到更高版本，将自动禁用此功能
 * @default true
 *
 * @param 130_Updates
 * @text 1.2.0到1.3.0
 * @parent --官方更新--
 * @type boolean
 * @on 是
 * @off 否
 * @desc 是否添加1.2.0到1.3.0更新？
 * 如果检测到更高版本，将自动禁用此功能
 * @default true
 *
 * @param 131_Updates
 * @text 1.3.0到1.3.1
 * @parent --官方更新--
 * @type boolean
 * @on 是
 * @off 否
 * @desc 是否添加1.3.0到1.3.1更新？
 * 如果检测到更高版本，将自动禁用此功能
 * @default true
 *
 * @param 132_Updates
 * @text 1.3.1到1.3.2
 * @parent --官方更新--
 * @type boolean
 * @on 是
 * @off 否
 * @desc 是否添加1.3.1到1.3.2更新？
 * 如果检测到更高版本，将自动禁用此功能
 * @default true
 *
 * @param 133_Updates
 * @text 1.3.2到1.3.3
 * @parent --官方更新--
 * @type boolean
 * @on 是
 * @off 否
 * @desc 是否添加1.3.2到1.3.3更新？
 * 如果检测到更高版本，将自动禁用此功能
 * @default true
 *
 * @param 134_Updates
 * @text 1.3.3到1.3.4
 * @parent --官方更新--
 * @type boolean
 * @on 是
 * @off 否
 * @desc 是否添加1.3.3到1.3.4更新？
 * 如果检测到更高版本，将自动禁用此功能
 * @default true
 *
 * @param 140_Updates
 * @text 1.3.4到1.4.0
 * @parent --官方更新--
 * @type boolean
 * @on 是
 * @off 否
 * @desc 是否添加1.3.4到1.4.0更新？
 * 如果检测到更高版本，将自动禁用此功能
 * @default true
 *
 * @param 150_Updates
 * @text 1.4.0到1.5.0
 * @parent --官方更新--
 * @type boolean
 * @on 是
 * @off 否
 * @desc 是否添加1.4.0到1.5.0更新？
 * 如果检测到更高版本，将自动禁用此功能
 * @default true
 *
 * @param 151_Updates
 * @text 1.5.0到1.5.1
 * @parent --官方更新--
 * @type boolean
 * @on 是
 * @off 否
 * @desc 是否添加1.5.0到1.5.1更新？
 * 如果检测到更高版本，将自动禁用此功能
 * @default true
 *
 * @param 152_Updates
 * @text 1.5.1到1.5.2
 * @parent --官方更新--
 * @type boolean
 * @on 是
 * @off 否
 * @desc 是否添加1.5.1到1.5.2更新？
 * 如果检测到更高版本，将自动禁用此功能
 * @default true
 *
 * @param 161_Updates
 * @text 1.5.2到1.6.1
 * @parent --官方更新--
 * @type boolean
 * @on 是
 * @off 否
 * @desc 是否添加1.5.2到1.6.1更新？
 * 如果检测到更高版本，将自动禁用此功能
 * @default true
 *
 * @param --自定义--
 * @default
 *
 * @param 桌面优化
 * @parent --自定义--
 * @type boolean
 * @on 添加
 * @off 取消
 * @desc Yanfly的桌面游戏优化更新
 * @default true
 */
//=============================================================================

Yanfly.PluginRequirements = function() {
  return Imported.YEP_CoreEngine &&
         Utils.RPGMAKER_VERSION &&
         Utils.RPGMAKER_VERSION >= '1.4.0';
};

if (Yanfly.PluginRequirements()) {

//=============================================================================
// Parameter Variables - 参数变量
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_X_CoreUpdatesOpt');
Yanfly.Param = Yanfly.Param || {};

Yanfly.ParameterVersionCheck = function(version, key, parameter) {
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION === version) {
    Yanfly.Param[key] = false;
  } else if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION > version) {
    Yanfly.Param[key] = false;
  } else {
    Yanfly.Param[key] = eval(String(Yanfly.Parameters[parameter]));
  }
};

Yanfly.SetupParameters = function() {
  // Official Updates - 官方更新
  Yanfly.ParameterVersionCheck('1.1.0', 'Update110', '110_Updates');
  Yanfly.ParameterVersionCheck('1.2.0', 'Update120', '120_Updates');
  Yanfly.ParameterVersionCheck('1.3.0', 'Update130', '130_Updates');
  Yanfly.ParameterVersionCheck('1.3.1', 'Update131', '131_Updates');
  Yanfly.ParameterVersionCheck('1.3.2', 'Update132', '132_Updates');
  Yanfly.ParameterVersionCheck('1.3.3', 'Update133', '133_Updates');
  Yanfly.ParameterVersionCheck('1.3.4', 'Update134', '134_Updates');
  Yanfly.ParameterVersionCheck('1.4.0', 'Update140', '140_Updates');
  Yanfly.ParameterVersionCheck('1.5.0', 'Update150', '150_Updates');
  Yanfly.ParameterVersionCheck('1.5.1', 'Update151', '151_Updates');
  Yanfly.ParameterVersionCheck('1.5.2', 'Update152', '152_Updates');
  Yanfly.ParameterVersionCheck('1.6.1', 'Update161', '161_Updates');
  // Desktop Optimization - 桌面优化升级
  Yanfly.Param.UpdateDesktop = eval(String(Yanfly.Parameters['桌面优化']));
};
Yanfly.SetupParameters();

//-----------------------------------------------------------------------------

//=============================================================================
//  版本 1.0.0 到 1.1.0 变更
//=============================================================================

if (Yanfly.Param.Update110) {

//-----------------------------------------------------------------------------
// 1.1.0 rpg_core.js 变更
//-----------------------------------------------------------------------------

// 将列表中其余插件的版本视为1.1.0版本
Utils.RPGMAKER_VERSION = '1.1.0';
console.log('RPG Maker版本 ' + Utils.RPGMAKER_VERSION + ' 已加载更新');

Sprite.prototype.updateTransform = function() {
    PIXI.Sprite.prototype.updateTransform.call(this);
    this.worldTransform.tx += this._offset.x;
    this.worldTransform.ty += this._offset.y;
};

Tilemap.prototype.update = function() {
    this.animationCount++;
    this.children.forEach(function(child) {
        if (child.update) {
            child.update();
        }
    });
};

Tilemap.prototype.refresh = function() {
    this._lastTiles.length = 0;
};

Tilemap.prototype.updateTransform = function() {
    var ox = Math.floor(this.origin.x);
    var oy = Math.floor(this.origin.y);
    var startX = Math.floor((ox - this._margin) / this._tileWidth);
    var startY = Math.floor((oy - this._margin) / this._tileHeight);
    this._updateLayerPositions(startX, startY);
    this._paintAllTiles(startX, startY);
    this._sortChildren();
    PIXI.DisplayObjectContainer.prototype.updateTransform.call(this);
};

Tilemap.prototype._paintTiles = function(startX, startY, x, y) {
    var tableEdgeVirtualId = 10000;
    var mx = startX + x;
    var my = startY + y;
    var dx = (mx * this._tileWidth).mod(this._layerWidth);
    var dy = (my * this._tileHeight).mod(this._layerHeight);
    var lx = dx / this._tileWidth;
    var ly = dy / this._tileHeight;
    var tileId0 = this._readMapData(mx, my, 0);
    var tileId1 = this._readMapData(mx, my, 1);
    var tileId2 = this._readMapData(mx, my, 2);
    var tileId3 = this._readMapData(mx, my, 3);
    var shadowBits = this._readMapData(mx, my, 4);
    var upperTileId1 = this._readMapData(mx, my - 1, 1);
    var lowerTiles = [];
    var upperTiles = [];

    if (this._isHigherTile(tileId0)) {
        upperTiles.push(tileId0);
    } else {
        lowerTiles.push(tileId0);
    }
    if (this._isHigherTile(tileId1)) {
        upperTiles.push(tileId1);
    } else {
        lowerTiles.push(tileId1);
    }

    lowerTiles.push(-shadowBits);

    if (this._isTableTile(upperTileId1) && !this._isTableTile(tileId1)) {
        if (!Tilemap.isShadowingTile(tileId0)) {
            lowerTiles.push(tableEdgeVirtualId + upperTileId1);
        }
    }

    if (this._isOverpassPosition(mx, my)) {
        upperTiles.push(tileId2);
        upperTiles.push(tileId3);
    } else {
        if (this._isHigherTile(tileId2)) {
            upperTiles.push(tileId2);
        } else {
            lowerTiles.push(tileId2);
        }
        if (this._isHigherTile(tileId3)) {
            upperTiles.push(tileId3);
        } else {
            lowerTiles.push(tileId3);
        }
    }

    var count = 1000 + this.animationCount - my;
    var frameUpdated = (count % 30 === 0);
    this._animationFrame = Math.floor(count / 30);

    var lastLowerTiles = this._readLastTiles(0, lx, ly);
    if (!lowerTiles.equals(lastLowerTiles) ||
            (Tilemap.isTileA1(tileId0) && frameUpdated)) {
        this._lowerBitmap.clearRect(dx, dy, this._tileWidth, this._tileHeight);
        for (var i = 0; i < lowerTiles.length; i++) {
            var lowerTileId = lowerTiles[i];
            if (lowerTileId < 0) {
                this._drawShadow(this._lowerBitmap, shadowBits, dx, dy);
            } else if (lowerTileId >= tableEdgeVirtualId) {
                this._drawTableEdge(this._lowerBitmap, upperTileId1, dx, dy);
            } else {
                this._drawTile(this._lowerBitmap, lowerTileId, dx, dy);
            }
        }
        this._writeLastTiles(0, lx, ly, lowerTiles);
    }

    var lastUpperTiles = this._readLastTiles(1, lx, ly);
    if (!upperTiles.equals(lastUpperTiles)) {
        this._upperBitmap.clearRect(dx, dy, this._tileWidth, this._tileHeight);
        for (var j = 0; j < upperTiles.length; j++) {
            this._drawTile(this._upperBitmap, upperTiles[j], dx, dy);
        }
        this._writeLastTiles(1, lx, ly, upperTiles);
    }
};

Tilemap.prototype._drawAutotile = function(bitmap, tileId, dx, dy) {
    var autotileTable = Tilemap.FLOOR_AUTOTILE_TABLE;
    var kind = Tilemap.getAutotileKind(tileId);
    var shape = Tilemap.getAutotileShape(tileId);
    var tx = kind % 8;
    var ty = Math.floor(kind / 8);
    var bx = 0;
    var by = 0;
    var setNumber = 0;
    var isTable = false;

    if (Tilemap.isTileA1(tileId)) {
        var waterSurfaceIndex = [0, 1, 2, 1][this._animationFrame % 4];
        setNumber = 0;
        if (kind === 0) {
            bx = waterSurfaceIndex * 2;
            by = 0;
        } else if (kind === 1) {
            bx = waterSurfaceIndex * 2;
            by = 3;
        } else if (kind === 2) {
            bx = 6;
            by = 0;
        } else if (kind === 3) {
            bx = 6;
            by = 3;
        } else {
            bx = Math.floor(tx / 4) * 8;
            by = ty * 6 + Math.floor(tx / 2) % 2 * 3;
            if (kind % 2 === 0) {
                bx += waterSurfaceIndex * 2;
            }
            else {
                bx += 6;
                autotileTable = Tilemap.WATERFALL_AUTOTILE_TABLE;
                by += this._animationFrame % 3;
            }
        }
    } else if (Tilemap.isTileA2(tileId)) {
        setNumber = 1;
        bx = tx * 2;
        by = (ty - 2) * 3;
        isTable = this._isTableTile(tileId);
    } else if (Tilemap.isTileA3(tileId)) {
        setNumber = 2;
        bx = tx * 2;
        by = (ty - 6) * 2;
        autotileTable = Tilemap.WALL_AUTOTILE_TABLE;
    } else if (Tilemap.isTileA4(tileId)) {
        setNumber = 3;
        bx = tx * 2;
        by = Math.floor((ty - 10) * 2.5 + (ty % 2 === 1 ? 0.5 : 0));
        if (ty % 2 === 1) {
            autotileTable = Tilemap.WALL_AUTOTILE_TABLE;
        }
    }

    var table = autotileTable[shape];
    var source = this.bitmaps[setNumber];

    if (table && source) {
        var w1 = this._tileWidth / 2;
        var h1 = this._tileHeight / 2;
        for (var i = 0; i < 4; i++) {
            var qsx = table[i][0];
            var qsy = table[i][1];
            var sx1 = (bx * 2 + qsx) * w1;
            var sy1 = (by * 2 + qsy) * h1;
            var dx1 = dx + (i % 2) * w1;
            var dy1 = dy + Math.floor(i / 2) * h1;
            if (isTable && (qsy === 1 || qsy === 5)) {
                var qsx2 = qsx;
                var qsy2 = 3;
                if (qsy === 1) {
                    qsx2 = [0,3,2,1][qsx];
                }
                var sx2 = (bx * 2 + qsx2) * w1;
                var sy2 = (by * 2 + qsy2) * h1;
                bitmap.blt(source, sx2, sy2, w1, h1, dx1, dy1, w1, h1);
                dy1 += h1/2;
                bitmap.blt(source, sx1, sy1, w1, h1/2, dx1, dy1, w1, h1/2);
            } else {
                bitmap.blt(source, sx1, sy1, w1, h1, dx1, dy1, w1, h1);
            }
        }
    }
};

//-----------------------------------------------------------------------------
// 1.1.0 rpg_managers.js 变更
//-----------------------------------------------------------------------------

DataManager.saveGame = function(savefileId) {
    try {
        StorageManager.backup(savefileId);
        return this.saveGameWithoutRescue(savefileId);
    } catch (e) {
        console.error(e);
        try {
            StorageManager.remove(savefileId);
            StorageManager.restoreBackup(savefileId);
        } catch (e2) {
        }
        return false;
    }
};

StorageManager.backup = function(savefileId) {
    if (this.exists(savefileId)) {
        if (this.isLocalMode()) {
            var data = this.loadFromLocalFile(savefileId);
            var compressed = LZString.compressToBase64(data);
            var fs = require('fs');
            var dirPath = this.localFileDirectoryPath();
            var filePath = this.localFilePath(savefileId) + ".bak";
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath);
            }
            fs.writeFileSync(filePath, compressed);
        } else {
            var data = this.loadFromWebStorage(savefileId);
            var compressed = LZString.compressToBase64(data);
            var key = this.webStorageKey(savefileId) + "bak";
            localStorage.setItem(key, compressed);
        }
    }
};

StorageManager.backupExists = function(savefileId) {
    if (this.isLocalMode()) {
        return this.localFileBackupExists(savefileId);
    } else {
        return this.webStorageBackupExists(savefileId);
    }
};

StorageManager.cleanBackup = function(savefileId) {
  if (this.backupExists(savefileId)) {
    if (this.isLocalMode()) {
      var fs = require('fs');
            var dirPath = this.localFileDirectoryPath();
            var filePath = this.localFilePath(savefileId);
            fs.unlinkSync(filePath + ".bak");
    } else {
        var key = this.webStorageKey(savefileId);
      localStorage.removeItem(key + "bak");
    }
  }
};

StorageManager.restoreBackup = function(savefileId) {
    if (this.backupExists(savefileId)) {
        if (this.isLocalMode()) {
            var data = this.loadFromLocalBackupFile(savefileId);
            var compressed = LZString.compressToBase64(data);
            var fs = require('fs');
            var dirPath = this.localFileDirectoryPath();
            var filePath = this.localFilePath(savefileId);
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath);
            }
            fs.writeFileSync(filePath, compressed);
            fs.unlinkSync(filePath + ".bak");
        } else {
            var data = this.loadFromWebStorageBackup(savefileId);
            var compressed = LZString.compressToBase64(data);
            var key = this.webStorageKey(savefileId);
            localStorage.setItem(key, compressed);
            localStorage.removeItem(key + "bak","");
        }
    }
};

StorageManager.loadFromLocalBackupFile = function(savefileId) {
    var data = null;
    var fs = require('fs');
    var filePath = this.localFilePath(savefileId) + ".bak";
    if (fs.existsSync(filePath)) {
        data = fs.readFileSync(filePath, { encoding: 'utf8' });
    }
    return LZString.decompressFromBase64(data);
};

StorageManager.loadFromWebStorageBackup = function(savefileId) {
    var key = this.webStorageKey(savefileId) + "bak";
    var data = localStorage.getItem(key);
    return LZString.decompressFromBase64(data);
};

StorageManager.webStorageBackupExists = function(savefileId) {
    var key = this.webStorageKey(savefileId) + "bak";
    return !!localStorage.getItem(key);
};

SceneManager._getTimeInMs = function() {
    return performance.now();
};

SceneManager._deltaTime = 1.0 / 60.0;
SceneManager._currentTime = SceneManager._getTimeInMs();
SceneManager._accumulator = 0.0;

SceneManager.update = function() {
    try {
        this.tickStart();
        this.updateMain();
        this.tickEnd();
    } catch (e) {
        this.catchException(e);
    }
};

SceneManager.onKeyDown = function(event) {
    if (!event.ctrlKey && !event.altKey) {
        switch (event.keyCode) {
            case 116:   // F5
                if (Utils.isNwjs()) {
                    location.reload();
                }
                break;
            case 119:   // F8
                if (Utils.isNwjs() && Utils.isOptionValid('test')) {
                    require('nw.gui').Window.get().showDevTools();
                }
                break;
        }
    }
};

SceneManager.updateMain = function() {
    var newTime = this._getTimeInMs();
    var fTime =  (newTime - this._currentTime) / 1000;
    if (fTime > 0.25) fTime = 0.25;
    this._currentTime = newTime;
    this._accumulator += fTime;
    while (this._accumulator >= this._deltaTime) {
        this.updateInputData();
        this.changeScene();
        this.updateScene();
        this._accumulator -= this._deltaTime;
    }
    this.renderScene();
    this.requestUpdate();
};

BattleManager.processEscape = function() {
    $gameParty.performEscape();
    SoundManager.playEscape();
    var success = this._preemptive ? true : (Math.random() < this._escapeRatio);
    if (success) {
        this.displayEscapeSuccessMessage();
        this._escaped = true;
        this.processAbort();
    } else {
        this.displayEscapeFailureMessage();
        this._escapeRatio += 0.1;
        $gameParty.clearActions();
        this.startTurn();
    }
    return success;
};

BattleManager.processAbort = function() {
    $gameParty.removeBattleStates();
    this.replayBgmAndBgs();
    this.endBattle(1);
};

//-----------------------------------------------------------------------------
// 1.1.0 rpg_objects.js 变更
//-----------------------------------------------------------------------------

Game_Action.prototype.decideRandomTarget = function() {
    var target;
    if (this.isForDeadFriend()) {
        target = this.friendsUnit().randomDeadTarget();
    } else if (this.isForFriend()) {
        target = this.friendsUnit().randomTarget();
    } else {
        target = this.opponentsUnit().randomTarget();
    }
    if (target) {
        this._targetIndex = target.index();
    } else {
        this.clear();
    }
};

Game_Action.prototype.evaluate = function() {
    var value = 0;
    this.itemTargetCandidates().forEach(function(target) {
        var targetValue = this.evaluateWithTarget(target);
        if (this.isForAll()) {
            value += targetValue;
        } else if (targetValue > value) {
            value = targetValue;
            this._targetIndex = target.index();
        }
    }, this);
    value *= this.numRepeats();
    if (value > 0) {
        value += Math.random();
    }
    return value;
};

Game_Action.prototype.evalDamageFormula = function(target) {
  var item = this.item();
  var a = this.subject();
  var b = target;
  var v = $gameVariables._data;
  var sign = ([3, 4].contains(item.damage.type) ? -1 : 1);
  try {
    var value = Math.max(eval(item.damage.formula), 0) * sign;
    if (isNaN(value)) value = 0;
    return value;
  } catch (e) {
    //Yanfly.Util.displayError(e, item.damage.formula, 'DAMAGE FORMULA ERROR');
    Yanfly.Util.displayError(e, item.damage.formula, '伤害公式错误');
    return 0;
  }
};

Game_Actor.prototype.changeClass = function(classId, keepExp) {
    if (keepExp) {
        this._exp[classId] = this.currentExp();
    }
    this._classId = classId;
    this.changeExp(this._exp[this._classId] || 0, false);
    this.refresh();
};

Game_Event.prototype.updateSelfMovement = function() {
    if (!this._locked && this.isNearTheScreen() &&
            this.checkStop(this.stopCountThreshold())) {
        switch (this._moveType) {
        case 1:
            this.moveTypeRandom();
            break;
        case 2:
            this.moveTypeTowardPlayer();
            break;
        case 3:
            this.moveTypeCustom();
            break;
        }
    }
};

// Change Class - 变更职业
Game_Interpreter.prototype.command321 = function() {
    var actor = $gameActors.actor(this._params[0]);
    if (actor && $dataClasses[this._params[1]]) {
        actor.changeClass(this._params[1], this._params[2]);
    }
    return true;
};

//-----------------------------------------------------------------------------
// 1.1.0 rpg_scenes.js 变更
//-----------------------------------------------------------------------------

Scene_Save.prototype.onSaveSuccess = function() {
    SoundManager.playSave();
    StorageManager.cleanBackup(this.savefileId());
    this.popScene();
};

//-----------------------------------------------------------------------------
// 1.1.0 rpg_sprites.js 变更
//-----------------------------------------------------------------------------

Sprite_Actor.prototype.refreshMotion = function() {
    var actor = this._actor;
    var motionGuard = Sprite_Actor.MOTIONS['guard'];
    if (actor) {
        if (this._motion === motionGuard && !BattleManager.isInputting()) {
            return;
        }
        var stateMotion = actor.stateMotionIndex();
        if (actor.isInputting() || actor.isActing()) {
            this.startMotion('walk');
        } else if (stateMotion === 3) {
            this.startMotion('dead');
        } else if (stateMotion === 2) {
            this.startMotion('sleep');
        } else if (actor.isChanting()) {
            this.startMotion('chant');
        } else if (actor.isGuard() || actor.isGuardWaiting()) {
            this.startMotion('guard');
        } else if (stateMotion === 1) {
            this.startMotion('abnormal');
        } else if (actor.isDying()) {
            this.startMotion('dying');
        } else if (actor.isUndecided()) {
            this.startMotion('walk');
        } else {
            this.startMotion('wait');
        }
    }
};

Spriteset_Map.prototype._canvasReAddParallax = function() {
    var index = this._baseSprite.children.indexOf(this._parallax);
    this._baseSprite.removeChild(this._parallax);
    this._parallax = new TilingSprite();
    this._parallax.move(0, 0, Graphics.width, Graphics.height);
    this._parallax.bitmap = ImageManager.loadParallax(this._parallaxName);
    this._baseSprite.addChildAt(this._parallax,index);
};

Spriteset_Map.prototype.updateParallax = function() {
    if (this._parallaxName !== $gameMap.parallaxName()) {
        this._parallaxName = $gameMap.parallaxName();

        if (this._parallax.bitmap && Graphics.isWebGL() != true) {
            this._canvasReAddParallax();
        } else {
            this._parallax.bitmap = ImageManager.loadParallax(this._parallaxName);
        }
    }
    if (this._parallax.bitmap) {
        this._parallax.origin.x = $gameMap.parallaxOx();
        this._parallax.origin.y = $gameMap.parallaxOy();
    }
};

//-----------------------------------------------------------------------------
// 1.1.0 rpg_windows.js 变更
//-----------------------------------------------------------------------------

Window_MenuStatus.prototype.drawItemImage = function(index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    this.changePaintOpacity(actor.isBattleMember());
    this.drawActorFace(actor, rect.x + 1, rect.y + 1, Window_Base._faceWidth, Window_Base._faceHeight);
    this.changePaintOpacity(true);
};

Window_ActorCommand.prototype.selectLast = function() {
    this.select(0);
    if (this._actor && ConfigManager.commandRemember) {
        var symbol = this._actor.lastCommandSymbol();
        this.selectSymbol(symbol);
        if (symbol === 'skill') {
            var skill = this._actor.lastBattleSkill();
            if (skill) {
                this.selectExt(skill.stypeId);
            }
        }
    }
};

//=============================================================================
//  版本 1.0.0 到 1.1.0 变更-结束
//=============================================================================

}; // Yanfly.Param.Update110

//-----------------------------------------------------------------------------

//=============================================================================
//  版本 1.1.0 到 1.2.0 变更
//=============================================================================

if (Yanfly.Param.Update120) {

//-----------------------------------------------------------------------------
// 1.2.0 rpg_core.js 变更
//-----------------------------------------------------------------------------

// 将列表中其余插件的版本视为1.2.0版本
Utils.RPGMAKER_VERSION = '1.2.0';
console.log('RPG Maker版本 ' + Utils.RPGMAKER_VERSION + ' 已加载更新');

TilingSprite.prototype.generateTilingTexture = function(arg) {
    PIXI.TilingSprite.prototype.generateTilingTexture.call(this, arg);
    // 从Pixi的缓存中清除
    if (this.tilingTexture.canvasBuffer)
        PIXI.Texture.removeTextureFromCache(this.tilingTexture.canvasBuffer.canvas._pixiId);
};

//-----------------------------------------------------------------------------
// 1.2.0 rpg_objects.js 变更
//-----------------------------------------------------------------------------

Game_Picture.prototype.updateRotation = function() {
    if (this._rotationSpeed !== 0) {
        this._angle += this._rotationSpeed / 2;
    }
};

//-----------------------------------------------------------------------------
// 1.2.0 rpg_sprites.js 变更
//-----------------------------------------------------------------------------

Sprite_Animation.prototype.updateCellSprite = function(sprite, cell) {
    var pattern = cell[0];
    if (pattern >= 0) {
        var sx = pattern % 5 * 192;
        var sy = Math.floor(pattern % 100 / 5) * 192;
        var mirror = this._mirror;
        sprite.bitmap = pattern < 100 ? this._bitmap1 : this._bitmap2;
        sprite.setFrame(sx, sy, 192, 192);
        sprite.x = cell[1];
        sprite.y = cell[2];
        if (this._mirror) {
            sprite.x *= -1;
        }
        sprite.rotation = cell[4] * Math.PI / 180;
        sprite.scale.x = cell[3] / 100;
        if ((cell[5] && !mirror) || (!cell[5] && mirror)) {
            sprite.scale.x *= -1;
        }
        sprite.scale.y = cell[3] / 100;
        sprite.opacity = cell[6];
        sprite.blendMode = cell[7];
        sprite.visible = true;
    } else {
        sprite.visible = false;
    }
};

//=============================================================================
//  版本 1.1.0 到 1.2.0 变更-结束
//=============================================================================

}; // Yanfly.Param.Update120

//-----------------------------------------------------------------------------

//=============================================================================
//  版本 1.2.0 到 1.3.0 变更
//=============================================================================

if (Yanfly.Param.Update130) {

//-----------------------------------------------------------------------------
// 1.3.0 rpg_core.js 变更
//-----------------------------------------------------------------------------

// 将列表中其余插件的版本视为1.3.0版本
Utils.RPGMAKER_VERSION = '1.3.0';
console.log('RPG Maker版本 ' + Utils.RPGMAKER_VERSION + ' 已加载更新');

Object.defineProperties(Array.prototype, {
    equals: {
        enumerable: false,
        value: function(array) {
            if (!array || this.length !== array.length) {
                return false;
            }
            for (var i = 0; i < this.length; i++) {
                if (this[i] instanceof Array && array[i] instanceof Array) {
                    if (!this[i].equals(array[i])) {
                        return false;
                    }
                } else if (this[i] !== array[i]) {
                    return false;
                }
            }
            return true;
        }
    },
    clone: {
        enumerable: false,
        value: function() {
            return this.slice(0);
        }
    },
    contains : {
        enumerable: false,
        value: function(element) {
            return this.indexOf(element) >= 0;
        }
    }
});

CacheEntry = function(cache, key, item) {
    this.cache = cache;
    this.key = key;
    this.item = item;
    this.cached = false;
    this.touchTicks = 0;
    this.touchSeconds = 0;
    this.ttlTicks = 0;
    this.ttlSeconds = 0;
    this.freedByTTL = false;
}

CacheEntry.prototype.free = function(byTTL) {
    this.freedByTTL = byTTL || false;
    if (this.cached) {
        this.cached = false;
        delete this.cache._inner[key];
    }
};

CacheEntry.prototype.allocate = function() {
    if (!this.cached) {
        this.cache._inner[this.key] = this;
        this.cached = true;
    }
    this.touch();
    return this;
};

CacheEntry.prototype.setTimeToLive = function(ticks, seconds) {
    this.ttlTicks = ticks || 0;
    this.ttlSeconds = seconds || 0;
    return this;
};

CacheEntry.prototype.isStillAlive = function() {
    var cache = this.cache;
    return ((this.ttlTicks == 0) || (this.touchTicks + this.ttlTicks < cache.updateTicks )) &&
        ((this.ttlSeconds == 0) || (this.touchSeconds + this.ttlSeconds < cache.updateSeconds ));
};

CacheEntry.prototype.touch = function() {
    var cache = this.cache;
    if (this.cached) {
        this.touchTicks = cache.updateTicks;
        this.touchSeconds = cache.updateSeconds;
    } else if (this.freedByTTL) {
        this.freedByTTL = false;
        //TODO: shall we log this event? its not normal
        //待办事项：我们应该记录这个事件吗？这不正常
        if (!cache._inner[this.key]) {
            cache._inner[this.key] = this;
        }
    }
};

CacheMap = function(manager) {
    this.manager = manager;
    this._inner = {};
    this._lastRemovedEntries = {};
    this.updateTicks = 0;
    this.lastCheckTTL = 0;
    this.delayCheckTTL = 100.0;
    this.updateSeconds = Date.now();
}

CacheMap.prototype.checkTTL = function() {
    var cache = this._inner;
    var temp = this._lastRemovedEntries;
    if (!temp) {
        temp = [];
        this._lastRemovedEntries = temp;
    }
    for (var key in cache) {
        var entry = cache[key];
        if (!entry.isStillAlive()) {
            temp.push(entry);
        }
    }
    for (var i = 0; i < temp.length; i++) {
        temp[i].free(true);
    }
    temp.length = 0;
};

CacheMap.prototype.getItem = function(key) {
    var entry = this._inner[key];
    if (entry) {
        return entry.item;
    }
    return null;
};

CacheMap.prototype.clear = function() {
    var keys = Object.keys(this._inner);
    for (var i = 0; i < keys.length; i++) {
        this._inner[keys[i]].free();
    }
};

CacheMap.prototype.setItem = function(key, item) {
    return new CacheEntry(this, key, item).allocate();
};

CacheMap.prototype.update = function(ticks, delta) {
    this.updateTicks += ticks;
    this.updateSeconds += delta;
    if (this.updateSeconds >= this.delayCheckTTL + this.lastCheckTTL) {
        this.lastCheckTTL = this.updateSeconds;
        this.checkTTL();
    }
};

Bitmap.prototype.initialize = function(width, height) {
    this._canvas = document.createElement('canvas');
    this._context = this._canvas.getContext('2d');
    this._canvas.width = Math.max(width || 0, 1);
    this._canvas.height = Math.max(height || 0, 1);
    this._baseTexture = new PIXI.BaseTexture(this._canvas);
    this._baseTexture.mipmap = false;
    this._baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    this._image = null;
    this._url = '';
    this._paintOpacity = 255;
    this._smooth = false;
    this._loadListeners = [];
    this._isLoading = false;
    this._hasError = false;
    this.cacheEntry = null;
    this.fontFace = 'GameFont';
    this.fontSize = 28;
    this.fontItalic = false;
    this.textColor = '#ffffff';
    this.outlineColor = 'rgba(0, 0, 0, 0.5)';
    this.outlineWidth = 4;
};

Bitmap.load = function(url) {
    var bitmap = new Bitmap();
    bitmap._image = new Image();
    bitmap._url = url;
    bitmap._isLoading = true;

    if(!Decrypter.checkImgIgnore(url) && Decrypter.hasEncryptedImages) {
        Decrypter.decryptImg(url, bitmap);
    } else {
        bitmap._image.src = url;
        bitmap._image.onload = Bitmap.prototype._onLoad.bind(bitmap);
        bitmap._image.onerror = Bitmap.prototype._onError.bind(bitmap);
    }

    return bitmap;
};

Bitmap.snap = function(stage) {
    var width = Graphics.width;
    var height = Graphics.height;
    var bitmap = new Bitmap(width, height);
    var context = bitmap._context;
    var renderTexture = PIXI.RenderTexture.create(width, height);
    if (stage) {
        Graphics._renderer.render(stage, renderTexture);
        stage.worldTransform.identity();
        var canvas = null;
        if (Graphics.isWebGL()) {
            canvas = Graphics._renderer.extract.canvas(renderTexture);
        } else {
            canvas = renderTexture.baseTexture._canvasRenderTarget.canvas;
        }
        context.drawImage(canvas, 0, 0);
    } else {
        //TODO: Ivan: what if stage is not present?
        //待办事项：Ivan：如果舞台不在怎么办？
    }
    bitmap._setDirty();
    return bitmap;
};

Bitmap.prototype.touch = function() {
    if (this.cacheEntry) {
        this.cacheEntry.touch();
    }
};

Object.defineProperty(Bitmap.prototype, 'smooth', {
    get: function() {
        return this._smooth;
    },
    set: function(value) {
        if (this._smooth !== value) {
            this._smooth = value;
            if (this._smooth) {
                this._baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
            } else {
                this._baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
            }
        }
    },
    configurable: true
});

Bitmap.prototype.bltImage = function(source, sx, sy, sw, sh, dx, dy, dw, dh) {
    dw = dw || sw;
    dh = dh || sh;
    if (sx >= 0 && sy >= 0 && sw > 0 && sh > 0 && dw > 0 && dh > 0 &&
        sx + sw <= source.width && sy + sh <= source.height) {
        this._context.globalCompositeOperation = 'source-over';
        this._context.drawImage(source._image, sx, sy, sw, sh, dx, dy, dw, dh);
        this._setDirty();
    }
};

Bitmap.prototype._onLoad = function() {
    if(Decrypter.hasEncryptedImages) {
        window.URL.revokeObjectURL(this._image.src);
    }
    this._isLoading = false;
    this.resize(this._image.width, this._image.height);
    this._context.drawImage(this._image, 0, 0);
    this._setDirty();
    this._callLoadListeners();
};

Bitmap.prototype._setDirty = function() {
    this._dirty = true;
};

Bitmap.prototype.checkDirty = function() {
    if (this._dirty) {
        this._baseTexture.update();
        this._dirty = false;
    }
};

Graphics.isWebGL = function() {
    return this._renderer && this._renderer.type === PIXI.RENDERER_TYPE.WEBGL;
};

Graphics.callGC = function() {
    if (Graphics.isWebGL()) {
        Graphics._renderer.textureGC.run();
    }
}

Sprite.voidFilter = new PIXI.filters.VoidFilter();

Sprite.prototype.initialize = function(bitmap) {
    var texture = new PIXI.Texture(new PIXI.BaseTexture());

    PIXI.Sprite.call(this, texture);

    this._bitmap = null;
    this._frame = new Rectangle();
    this._realFrame = new Rectangle();
    this._offset = new Point();
    this._blendColor = [0, 0, 0, 0];
    this._colorTone = [0, 0, 0, 0];
    this._canvas = null;
    this._context = null;
    this._tintTexture = null;
    this._isPicture = false;
    this.spriteId = Sprite._counter++;
    this.opaque = false;
    this.bitmap = bitmap;
};

Object.defineProperty(Sprite.prototype, 'bitmap', {
    get: function() {
        return this._bitmap;
    },
    set: function(value) {
        if (this._bitmap !== value) {
            this._bitmap = value;
            if (this._bitmap) {
                this.setFrame(0, 0, 0, 0);
                this._bitmap.addLoadListener(this._onBitmapLoad.bind(this));
            } else {
                this.texture.frame = Rectangle.emptyRectangle;
            }
        }
    },
    configurable: true
});

Sprite.prototype._refresh = function() {
    var frameX = Math.floor(this._frame.x);
    var frameY = Math.floor(this._frame.y);
    var frameW = Math.floor(this._frame.width);
    var frameH = Math.floor(this._frame.height);
    var bitmapW = this._bitmap ? this._bitmap.width : 0;
    var bitmapH = this._bitmap ? this._bitmap.height : 0;
    var realX = frameX.clamp(0, bitmapW);
    var realY = frameY.clamp(0, bitmapH);
    var realW = (frameW - realX + frameX).clamp(0, bitmapW - realX);
    var realH = (frameH - realY + frameY).clamp(0, bitmapH - realY);

    this._realFrame.x = realX;
    this._realFrame.y = realY;
    this._realFrame.width = realW;
    this._realFrame.height = realH;
    this._offset.x = realX - frameX;
    this._offset.y = realY - frameY;

    if (realW > 0 && realH > 0) {
        if (this._needsTint()) {
            this._createTinter(realW, realH);
            this._executeTint(realX, realY, realW, realH);
            this._tintTexture.update();
            this.texture.baseTexture = this._tintTexture;
            this.texture.frame = new Rectangle(0, 0, realW, realH);
        } else {
            if (this._bitmap) {
                this.texture.baseTexture = this._bitmap.baseTexture;
            }
            this.texture.frame = this._realFrame;
        }
    } else if (this._bitmap) {
        this.texture.frame = Rectangle.emptyRectangle;
    } else {
        //TODO: remove this
        //待办事项：移除它
        this.texture.baseTexture.width = Math.max(this.texture.baseTexture.width, this._frame.x + this._frame.width);
        this.texture.baseTexture.height = Math.max(this.texture.baseTexture.height, this._frame.y + this._frame.height);
        this.texture.frame = this._frame;
    }
};

Sprite.prototype._renderCanvas_PIXI = PIXI.Sprite.prototype._renderCanvas;
Sprite.prototype._renderWebGL_PIXI = PIXI.Sprite.prototype._renderWebGL;

Sprite.prototype._renderCanvas = function(renderer) {
    if (this.bitmap) {
        this.bitmap.touch();
    }
    if (this.texture.frame.width > 0 && this.texture.frame.height > 0) {
        this._renderCanvas_PIXI(renderer);
    }
};

Sprite.prototype._speedUpCustomBlendModes = function(renderer) {
    var picture = renderer.plugins.picture;
    var blend = this.blendMode;
    if (renderer.renderingToScreen && renderer._activeRenderTarget.root) {
        if (picture.drawModes[blend]) {
            var stage = renderer._lastObjectRendered;
            var f = stage._filters;
            if (!f || !f[0]) {
                setTimeout(function() {
                    var f = stage._filters;
                    if (!f || !f[0]) {
                        stage.filters = [Sprite.voidFilter];
                        stage.filterArea = new PIXI.Rectangle(0, 0, Graphics.width, Graphics.height);
                    }
                }, 0);
            }
        }
    }
};

Sprite.prototype._renderWebGL = function(renderer) {
    if (this.bitmap) {
        this.bitmap.touch();
    }
    if (this.texture.frame.width > 0 && this.texture.frame.height > 0) {
        if (this._bitmap) {
            this._bitmap.checkDirty();
        }
        this.calculateVertices();
        if (this._isPicture) {
            this._speedUpCustomBlendModes(renderer);
            renderer.setObjectRenderer(renderer.plugins.picture);
            renderer.plugins.picture.render(this);
        } else {
            renderer.setObjectRenderer(renderer.plugins.sprite);
            renderer.plugins.sprite.render(this);
        }
    }
};

Tilemap = function() {
    this.initialize.apply(this, arguments);
}

Tilemap.prototype = Object.create(PIXI.Container.prototype);
Tilemap.prototype.constructor = Tilemap;

Tilemap.prototype.initialize = function() {
    PIXI.Container.call(this);

    this._margin = 20;
    this._width = Graphics.width + this._margin * 2;
    this._height = Graphics.height + this._margin * 2;
    this._tileWidth = 48;
    this._tileHeight = 48;
    this._mapWidth = 0;
    this._mapHeight = 0;
    this._mapData = null;
    this._layerWidth = 0;
    this._layerHeight = 0;
    this._lastTiles = [];
    this.bitmaps = [];
    this.origin = new Point();
    this.flags = [];
    this.animationCount = 0;
    this.horizontalWrap = false;
    this.verticalWrap = false;
    this._createLayers();
    this.refresh();
};

Object.defineProperty(Tilemap.prototype, 'width', {
    get: function() {
        return this._width;
    },
    set: function(value) {
        if (this._width !== value) {
            this._width = value;
            this._createLayers();
        }
    }
});

Object.defineProperty(Tilemap.prototype, 'height', {
    get: function() {
        return this._height;
    },
    set: function(value) {
        if (this._height !== value) {
            this._height = value;
            this._createLayers();
        }
    }
});

Object.defineProperty(Tilemap.prototype, 'tileWidth', {
    get: function() {
        return this._tileWidth;
    },
    set: function(value) {
        if (this._tileWidth !== value) {
            this._tileWidth = value;
            this._createLayers();
        }
    }
});

Object.defineProperty(Tilemap.prototype, 'tileHeight', {
    get: function() {
        return this._tileHeight;
    },
    set: function(value) {
        if (this._tileHeight !== value) {
            this._tileHeight = value;
            this._createLayers();
        }
    }
});

Tilemap.prototype.setData = function(width, height, data) {
    this._mapWidth = width;
    this._mapHeight = height;
    this._mapData = data;
};

Tilemap.prototype.isReady = function() {
    for (var i = 0; i < this.bitmaps.length; i++) {
        if (this.bitmaps[i] && !this.bitmaps[i].isReady()) {
            return false;
        }
    }
    return true;
};

Tilemap.prototype.update = function() {
    this.animationCount++;
    this.animationFrame = Math.floor(this.animationCount / 30);
    this.children.forEach(function(child) {
        if (child.update) {
            child.update();
        }
    });
    for (var i=0; i<this.bitmaps.length;i++) {
        if (this.bitmaps[i]) {
            this.bitmaps[i].touch();
        }
    }
};

Tilemap.prototype.refresh = function() {
    this._lastTiles.length = 0;
};

Tilemap.prototype.refreshTileset = function() {
};

Tilemap.prototype.updateTransform = function() {
    var ox = Math.floor(this.origin.x);
    var oy = Math.floor(this.origin.y);
    var startX = Math.floor((ox - this._margin) / this._tileWidth);
    var startY = Math.floor((oy - this._margin) / this._tileHeight);
    this._updateLayerPositions(startX, startY);
    if (this._needsRepaint || this._lastAnimationFrame !== this.animationFrame ||
        this._lastStartX !== startX || this._lastStartY !== startY) {
        this._frameUpdated = this._lastAnimationFrame !== this.animationFrame;
        this._lastAnimationFrame = this.animationFrame;
        this._lastStartX = startX;
        this._lastStartY = startY;
        this._paintAllTiles(startX, startY);
        this._needsRepaint = false;
    }
    this._sortChildren();
    PIXI.Container.prototype.updateTransform.call(this);
};

Tilemap.prototype._createLayers = function() {
    var width = this._width;
    var height = this._height;
    var margin = this._margin;
    var tileCols = Math.ceil(width / this._tileWidth) + 1;
    var tileRows = Math.ceil(height / this._tileHeight) + 1;
    var layerWidth = tileCols * this._tileWidth;
    var layerHeight = tileRows * this._tileHeight;
    this._lowerBitmap = new Bitmap(layerWidth, layerHeight);
    this._upperBitmap = new Bitmap(layerWidth, layerHeight);
    this._layerWidth = layerWidth;
    this._layerHeight = layerHeight;
    this._lowerLayer = new Sprite();
    this._lowerLayer.move(-margin, -margin, width, height);
    this._lowerLayer.z = 0;

    this._upperLayer = new Sprite();
    this._upperLayer.move(-margin, -margin, width, height);
    this._upperLayer.z = 4;

    for (var i = 0; i < 4; i++) {
        this._lowerLayer.addChild(new Sprite(this._lowerBitmap));
        this._upperLayer.addChild(new Sprite(this._upperBitmap));
    }

    this.addChild(this._lowerLayer);
    this.addChild(this._upperLayer);
};

Tilemap.prototype._updateLayerPositions = function(startX, startY) {
    var m = this._margin;
    var ox = Math.floor(this.origin.x);
    var oy = Math.floor(this.origin.y);
    var x2 = (ox - m).mod(this._layerWidth);
    var y2 = (oy - m).mod(this._layerHeight);
    var w1 = this._layerWidth - x2;
    var h1 = this._layerHeight - y2;
    var w2 = this._width - w1;
    var h2 = this._height - h1;

    for (var i = 0; i < 2; i++) {
        var children;
        if (i === 0) {
            children = this._lowerLayer.children;
        } else {
            children = this._upperLayer.children;
        }
        children[0].move(0, 0, w1, h1);
        children[0].setFrame(x2, y2, w1, h1);
        children[1].move(w1, 0, w2, h1);
        children[1].setFrame(0, y2, w2, h1);
        children[2].move(0, h1, w1, h2);
        children[2].setFrame(x2, 0, w1, h2);
        children[3].move(w1, h1, w2, h2);
        children[3].setFrame(0, 0, w2, h2);
    }
};

Tilemap.prototype._paintAllTiles = function(startX, startY) {
    var tileCols = Math.ceil(this._width / this._tileWidth) + 1;
    var tileRows = Math.ceil(this._height / this._tileHeight) + 1;
    for (var y = 0; y < tileRows; y++) {
        for (var x = 0; x < tileCols; x++) {
            this._paintTiles(startX, startY, x, y);
        }
    }
};

Tilemap.prototype._paintTiles = function(startX, startY, x, y) {
    var tableEdgeVirtualId = 10000;
    var mx = startX + x;
    var my = startY + y;
    var dx = (mx * this._tileWidth).mod(this._layerWidth);
    var dy = (my * this._tileHeight).mod(this._layerHeight);
    var lx = dx / this._tileWidth;
    var ly = dy / this._tileHeight;
    var tileId0 = this._readMapData(mx, my, 0);
    var tileId1 = this._readMapData(mx, my, 1);
    var tileId2 = this._readMapData(mx, my, 2);
    var tileId3 = this._readMapData(mx, my, 3);
    var shadowBits = this._readMapData(mx, my, 4);
    var upperTileId1 = this._readMapData(mx, my - 1, 1);
    var lowerTiles = [];
    var upperTiles = [];

    if (this._isHigherTile(tileId0)) {
        upperTiles.push(tileId0);
    } else {
        lowerTiles.push(tileId0);
    }
    if (this._isHigherTile(tileId1)) {
        upperTiles.push(tileId1);
    } else {
        lowerTiles.push(tileId1);
    }

    lowerTiles.push(-shadowBits);

    if (this._isTableTile(upperTileId1) && !this._isTableTile(tileId1)) {
        if (!Tilemap.isShadowingTile(tileId0)) {
            lowerTiles.push(tableEdgeVirtualId + upperTileId1);
        }
    }

    if (this._isOverpassPosition(mx, my)) {
        upperTiles.push(tileId2);
        upperTiles.push(tileId3);
    } else {
        if (this._isHigherTile(tileId2)) {
            upperTiles.push(tileId2);
        } else {
            lowerTiles.push(tileId2);
        }
        if (this._isHigherTile(tileId3)) {
            upperTiles.push(tileId3);
        } else {
            lowerTiles.push(tileId3);
        }
    }

    var lastLowerTiles = this._readLastTiles(0, lx, ly);
    if (!lowerTiles.equals(lastLowerTiles) ||
            (Tilemap.isTileA1(tileId0) && this._frameUpdated)) {
        this._lowerBitmap.clearRect(dx, dy, this._tileWidth, this._tileHeight);
        for (var i = 0; i < lowerTiles.length; i++) {
            var lowerTileId = lowerTiles[i];
            if (lowerTileId < 0) {
                this._drawShadow(this._lowerBitmap, shadowBits, dx, dy);
            } else if (lowerTileId >= tableEdgeVirtualId) {
                this._drawTableEdge(this._lowerBitmap, upperTileId1, dx, dy);
            } else {
                this._drawTile(this._lowerBitmap, lowerTileId, dx, dy);
            }
        }
        this._writeLastTiles(0, lx, ly, lowerTiles);
    }

    var lastUpperTiles = this._readLastTiles(1, lx, ly);
    if (!upperTiles.equals(lastUpperTiles)) {
        this._upperBitmap.clearRect(dx, dy, this._tileWidth, this._tileHeight);
        for (var j = 0; j < upperTiles.length; j++) {
            this._drawTile(this._upperBitmap, upperTiles[j], dx, dy);
        }
        this._writeLastTiles(1, lx, ly, upperTiles);
    }
};

Tilemap.prototype._readLastTiles = function(i, x, y) {
    var array1 = this._lastTiles[i];
    if (array1) {
        var array2 = array1[y];
        if (array2) {
            var tiles = array2[x];
            if (tiles) {
                return tiles;
            }
        }
    }
    return [];
};

Tilemap.prototype._writeLastTiles = function(i, x, y, tiles) {
    var array1 = this._lastTiles[i];
    if (!array1) {
        array1 = this._lastTiles[i] = [];
    }
    var array2 = array1[y];
    if (!array2) {
        array2 = array1[y] = [];
    }
    array2[x] = tiles;
};

Tilemap.prototype._drawTile = function(bitmap, tileId, dx, dy) {
    if (Tilemap.isVisibleTile(tileId)) {
        if (Tilemap.isAutotile(tileId)) {
            this._drawAutotile(bitmap, tileId, dx, dy);
        } else {
            this._drawNormalTile(bitmap, tileId, dx, dy);
        }
    }
};

Tilemap.prototype._drawNormalTile = function(bitmap, tileId, dx, dy) {
    var setNumber = 0;

    if (Tilemap.isTileA5(tileId)) {
        setNumber = 4;
    } else {
        setNumber = 5 + Math.floor(tileId / 256);
    }

    var w = this._tileWidth;
    var h = this._tileHeight;
    var sx = (Math.floor(tileId / 128) % 2 * 8 + tileId % 8) * w;
    var sy = (Math.floor(tileId % 256 / 8) % 16) * h;

    var source = this.bitmaps[setNumber];
    if (source) {
        bitmap.bltImage(source, sx, sy, w, h, dx, dy, w, h);
    }
};

Tilemap.prototype._drawAutotile = function(bitmap, tileId, dx, dy) {
    var autotileTable = Tilemap.FLOOR_AUTOTILE_TABLE;
    var kind = Tilemap.getAutotileKind(tileId);
    var shape = Tilemap.getAutotileShape(tileId);
    var tx = kind % 8;
    var ty = Math.floor(kind / 8);
    var bx = 0;
    var by = 0;
    var setNumber = 0;
    var isTable = false;

    if (Tilemap.isTileA1(tileId)) {
        var waterSurfaceIndex = [0, 1, 2, 1][this.animationFrame % 4];
        setNumber = 0;
        if (kind === 0) {
            bx = waterSurfaceIndex * 2;
            by = 0;
        } else if (kind === 1) {
            bx = waterSurfaceIndex * 2;
            by = 3;
        } else if (kind === 2) {
            bx = 6;
            by = 0;
        } else if (kind === 3) {
            bx = 6;
            by = 3;
        } else {
            bx = Math.floor(tx / 4) * 8;
            by = ty * 6 + Math.floor(tx / 2) % 2 * 3;
            if (kind % 2 === 0) {
                bx += waterSurfaceIndex * 2;
            }
            else {
                bx += 6;
                autotileTable = Tilemap.WATERFALL_AUTOTILE_TABLE;
                by += this.animationFrame % 3;
            }
        }
    } else if (Tilemap.isTileA2(tileId)) {
        setNumber = 1;
        bx = tx * 2;
        by = (ty - 2) * 3;
        isTable = this._isTableTile(tileId);
    } else if (Tilemap.isTileA3(tileId)) {
        setNumber = 2;
        bx = tx * 2;
        by = (ty - 6) * 2;
        autotileTable = Tilemap.WALL_AUTOTILE_TABLE;
    } else if (Tilemap.isTileA4(tileId)) {
        setNumber = 3;
        bx = tx * 2;
        by = Math.floor((ty - 10) * 2.5 + (ty % 2 === 1 ? 0.5 : 0));
        if (ty % 2 === 1) {
            autotileTable = Tilemap.WALL_AUTOTILE_TABLE;
        }
    }

    var table = autotileTable[shape];
    var source = this.bitmaps[setNumber];

    if (table && source) {
        var w1 = this._tileWidth / 2;
        var h1 = this._tileHeight / 2;
        for (var i = 0; i < 4; i++) {
            var qsx = table[i][0];
            var qsy = table[i][1];
            var sx1 = (bx * 2 + qsx) * w1;
            var sy1 = (by * 2 + qsy) * h1;
            var dx1 = dx + (i % 2) * w1;
            var dy1 = dy + Math.floor(i / 2) * h1;
            if (isTable && (qsy === 1 || qsy === 5)) {
                var qsx2 = qsx;
                var qsy2 = 3;
                if (qsy === 1) {
                    qsx2 = [0,3,2,1][qsx];
                }
                var sx2 = (bx * 2 + qsx2) * w1;
                var sy2 = (by * 2 + qsy2) * h1;
                bitmap.bltImage(source, sx2, sy2, w1, h1, dx1, dy1, w1, h1);
                dy1 += h1/2;
                bitmap.bltImage(source, sx1, sy1, w1, h1/2, dx1, dy1, w1, h1/2);
            } else {
                bitmap.bltImage(source, sx1, sy1, w1, h1, dx1, dy1, w1, h1);
            }
        }
    }
};

Tilemap.prototype._drawTableEdge = function(bitmap, tileId, dx, dy) {
    if (Tilemap.isTileA2(tileId)) {
        var autotileTable = Tilemap.FLOOR_AUTOTILE_TABLE;
        var kind = Tilemap.getAutotileKind(tileId);
        var shape = Tilemap.getAutotileShape(tileId);
        var tx = kind % 8;
        var ty = Math.floor(kind / 8);
        var setNumber = 1;
        var bx = tx * 2;
        var by = (ty - 2) * 3;
        var table = autotileTable[shape];

        if (table) {
            var source = this.bitmaps[setNumber];
            var w1 = this._tileWidth / 2;
            var h1 = this._tileHeight / 2;
            for (var i = 0; i < 2; i++) {
                var qsx = table[2 + i][0];
                var qsy = table[2 + i][1];
                var sx1 = (bx * 2 + qsx) * w1;
                var sy1 = (by * 2 + qsy) * h1 + h1/2;
                var dx1 = dx + (i % 2) * w1;
                var dy1 = dy + Math.floor(i / 2) * h1;
                bitmap.bltImage(source, sx1, sy1, w1, h1/2, dx1, dy1, w1, h1/2);
            }
        }
    }
};

Tilemap.prototype._drawShadow = function(bitmap, shadowBits, dx, dy) {
    if (shadowBits & 0x0f) {
        var w1 = this._tileWidth / 2;
        var h1 = this._tileHeight / 2;
        var color = 'rgba(0,0,0,0.5)';
        for (var i = 0; i < 4; i++) {
            if (shadowBits & (1 << i)) {
                var dx1 = dx + (i % 2) * w1;
                var dy1 = dy + Math.floor(i / 2) * h1;
                bitmap.fillRect(dx1, dy1, w1, h1, color);
            }
        }
    }
};

Tilemap.prototype._readMapData = function(x, y, z) {
    if (this._mapData) {
        var width = this._mapWidth;
        var height = this._mapHeight;
        if (this.horizontalWrap) {
            x = x.mod(width);
        }
        if (this.verticalWrap) {
            y = y.mod(height);
        }
        if (x >= 0 && x < width && y >= 0 && y < height) {
            return this._mapData[(z * height + y) * width + x] || 0;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
};

Tilemap.prototype._isHigherTile = function(tileId) {
    return this.flags[tileId] & 0x10;
};

Tilemap.prototype._isTableTile = function(tileId) {
    return Tilemap.isTileA2(tileId) && (this.flags[tileId] & 0x80);
};

Tilemap.prototype._isOverpassPosition = function(mx, my) {
    return false;
};

Tilemap.prototype._sortChildren = function() {
    this.children.sort(this._compareChildOrder.bind(this));
};

Tilemap.prototype._compareChildOrder = function(a, b) {
    if (a.z !== b.z) {
        return a.z - b.z;
    } else if (a.y !== b.y) {
        return a.y - b.y;
    } else {
        return a.spriteId - b.spriteId;
    }
};

Tilemap.TILE_ID_B      = 0;
Tilemap.TILE_ID_C      = 256;
Tilemap.TILE_ID_D      = 512;
Tilemap.TILE_ID_E      = 768;
Tilemap.TILE_ID_A5     = 1536;
Tilemap.TILE_ID_A1     = 2048;
Tilemap.TILE_ID_A2     = 2816;
Tilemap.TILE_ID_A3     = 4352;
Tilemap.TILE_ID_A4     = 5888;
Tilemap.TILE_ID_MAX    = 8192;

Tilemap.isVisibleTile = function(tileId) {
    return tileId > 0 && tileId < this.TILE_ID_MAX;
};

Tilemap.isAutotile = function(tileId) {
    return tileId >= this.TILE_ID_A1;
};

Tilemap.getAutotileKind = function(tileId) {
    return Math.floor((tileId - this.TILE_ID_A1) / 48);
};

Tilemap.getAutotileShape = function(tileId) {
    return (tileId - this.TILE_ID_A1) % 48;
};

Tilemap.makeAutotileId = function(kind, shape) {
    return this.TILE_ID_A1 + kind * 48 + shape;
};

Tilemap.isSameKindTile = function(tileID1, tileID2) {
    if (this.isAutotile(tileID1) && this.isAutotile(tileID2)) {
        return this.getAutotileKind(tileID1) === this.getAutotileKind(tileID2);
    } else {
        return tileID1 === tileID2;
    }
};

Tilemap.isTileA1 = function(tileId) {
    return tileId >= this.TILE_ID_A1 && tileId < this.TILE_ID_A2;
};

Tilemap.isTileA2 = function(tileId) {
    return tileId >= this.TILE_ID_A2 && tileId < this.TILE_ID_A3;
};

Tilemap.isTileA3 = function(tileId) {
    return tileId >= this.TILE_ID_A3 && tileId < this.TILE_ID_A4;
};

Tilemap.isTileA4 = function(tileId) {
    return tileId >= this.TILE_ID_A4 && tileId < this.TILE_ID_MAX;
};

Tilemap.isTileA5 = function(tileId) {
    return tileId >= this.TILE_ID_A5 && tileId < this.TILE_ID_A1;
};

Tilemap.isWaterTile = function(tileId) {
    if (this.isTileA1(tileId)) {
        return !(tileId >= this.TILE_ID_A1 + 96 && tileId < this.TILE_ID_A1 + 192);
    } else {
        return false;
    }
};

Tilemap.isWaterfallTile = function(tileId) {
    if (tileId >= this.TILE_ID_A1 + 192 && tileId < this.TILE_ID_A2) {
        return this.getAutotileKind(tileId) % 2 === 1;
    } else {
        return false;
    }
};

Tilemap.isGroundTile = function(tileId) {
    return this.isTileA1(tileId) || this.isTileA2(tileId) || this.isTileA5(tileId);
};

Tilemap.isShadowingTile = function(tileId) {
    return this.isTileA3(tileId) || this.isTileA4(tileId);
};

Tilemap.isRoofTile = function(tileId) {
    return this.isTileA3(tileId) && this.getAutotileKind(tileId) % 16 < 8;
};

Tilemap.isWallTopTile = function(tileId) {
    return this.isTileA4(tileId) && this.getAutotileKind(tileId) % 16 < 8;
};

Tilemap.isWallSideTile = function(tileId) {
    return (this.isTileA3(tileId) || this.isTileA4(tileId)) &&
            this.getAutotileKind(tileId) % 16 >= 8;
};

Tilemap.isWallTile = function(tileId) {
    return this.isWallTopTile(tileId) || this.isWallSideTile(tileId);
};

Tilemap.isFloorTypeAutotile = function(tileId) {
    return (this.isTileA1(tileId) && !this.isWaterfallTile(tileId)) ||
            this.isTileA2(tileId) || this.isWallTopTile(tileId);
};

Tilemap.isWallTypeAutotile = function(tileId) {
    return this.isRoofTile(tileId) || this.isWallSideTile(tileId);
};

Tilemap.isWaterfallTypeAutotile = function(tileId) {
    return this.isWaterfallTile(tileId);
};

Tilemap.FLOOR_AUTOTILE_TABLE = [
    [[2,4],[1,4],[2,3],[1,3]],[[2,0],[1,4],[2,3],[1,3]],
    [[2,4],[3,0],[2,3],[1,3]],[[2,0],[3,0],[2,3],[1,3]],
    [[2,4],[1,4],[2,3],[3,1]],[[2,0],[1,4],[2,3],[3,1]],
    [[2,4],[3,0],[2,3],[3,1]],[[2,0],[3,0],[2,3],[3,1]],
    [[2,4],[1,4],[2,1],[1,3]],[[2,0],[1,4],[2,1],[1,3]],
    [[2,4],[3,0],[2,1],[1,3]],[[2,0],[3,0],[2,1],[1,3]],
    [[2,4],[1,4],[2,1],[3,1]],[[2,0],[1,4],[2,1],[3,1]],
    [[2,4],[3,0],[2,1],[3,1]],[[2,0],[3,0],[2,1],[3,1]],
    [[0,4],[1,4],[0,3],[1,3]],[[0,4],[3,0],[0,3],[1,3]],
    [[0,4],[1,4],[0,3],[3,1]],[[0,4],[3,0],[0,3],[3,1]],
    [[2,2],[1,2],[2,3],[1,3]],[[2,2],[1,2],[2,3],[3,1]],
    [[2,2],[1,2],[2,1],[1,3]],[[2,2],[1,2],[2,1],[3,1]],
    [[2,4],[3,4],[2,3],[3,3]],[[2,4],[3,4],[2,1],[3,3]],
    [[2,0],[3,4],[2,3],[3,3]],[[2,0],[3,4],[2,1],[3,3]],
    [[2,4],[1,4],[2,5],[1,5]],[[2,0],[1,4],[2,5],[1,5]],
    [[2,4],[3,0],[2,5],[1,5]],[[2,0],[3,0],[2,5],[1,5]],
    [[0,4],[3,4],[0,3],[3,3]],[[2,2],[1,2],[2,5],[1,5]],
    [[0,2],[1,2],[0,3],[1,3]],[[0,2],[1,2],[0,3],[3,1]],
    [[2,2],[3,2],[2,3],[3,3]],[[2,2],[3,2],[2,1],[3,3]],
    [[2,4],[3,4],[2,5],[3,5]],[[2,0],[3,4],[2,5],[3,5]],
    [[0,4],[1,4],[0,5],[1,5]],[[0,4],[3,0],[0,5],[1,5]],
    [[0,2],[3,2],[0,3],[3,3]],[[0,2],[1,2],[0,5],[1,5]],
    [[0,4],[3,4],[0,5],[3,5]],[[2,2],[3,2],[2,5],[3,5]],
    [[0,2],[3,2],[0,5],[3,5]],[[0,0],[1,0],[0,1],[1,1]]
];

Tilemap.WALL_AUTOTILE_TABLE = [
    [[2,2],[1,2],[2,1],[1,1]],[[0,2],[1,2],[0,1],[1,1]],
    [[2,0],[1,0],[2,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]],
    [[2,2],[3,2],[2,1],[3,1]],[[0,2],[3,2],[0,1],[3,1]],
    [[2,0],[3,0],[2,1],[3,1]],[[0,0],[3,0],[0,1],[3,1]],
    [[2,2],[1,2],[2,3],[1,3]],[[0,2],[1,2],[0,3],[1,3]],
    [[2,0],[1,0],[2,3],[1,3]],[[0,0],[1,0],[0,3],[1,3]],
    [[2,2],[3,2],[2,3],[3,3]],[[0,2],[3,2],[0,3],[3,3]],
    [[2,0],[3,0],[2,3],[3,3]],[[0,0],[3,0],[0,3],[3,3]]
];

Tilemap.WATERFALL_AUTOTILE_TABLE = [
    [[2,0],[1,0],[2,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]],
    [[2,0],[3,0],[2,1],[3,1]],[[0,0],[3,0],[0,1],[3,1]]
];

ShaderTilemap = function() {
    Tilemap.apply(this, arguments);
    this.roundPixels = true;
};

ShaderTilemap.prototype = Object.create(Tilemap.prototype);
ShaderTilemap.prototype.constructor = ShaderTilemap;

PIXI.glCore.VertexArrayObject.FORCE_NATIVE = true;

ShaderTilemap.prototype._hackRenderer = function(renderer) {
    var af = this.animationFrame % 4;
    if (af==3) af = 1;
    renderer.plugins.tile.tileAnim[0] = af * this._tileWidth;
    renderer.plugins.tile.tileAnim[1] = (this.animationFrame % 3) * this._tileHeight;
    return renderer;
};

ShaderTilemap.prototype.renderCanvas = function(renderer) {
    this._hackRenderer(renderer);
    PIXI.Container.prototype.renderCanvas.call(this, renderer);
};

ShaderTilemap.prototype.renderWebGL = function(renderer) {
    this._hackRenderer(renderer);
    PIXI.Container.prototype.renderWebGL.call(this, renderer);
};

ShaderTilemap.prototype.refresh = function() {
    if (this._lastBitmapLength !== this.bitmaps.length) {
        this._lastBitmapLength = this.bitmaps.length;
        this.refreshTileset();
    };
    this._needsRepaint = true;
};

ShaderTilemap.prototype.refreshTileset = function() {
    var bitmaps = this.bitmaps.map(function(x) { return x._baseTexture ? new PIXI.Texture(x._baseTexture) : x; } );
    this.lowerLayer.setBitmaps(bitmaps);
    this.upperLayer.setBitmaps(bitmaps);
};

ShaderTilemap.prototype.updateTransform = function() {
    if (this.roundPixels) {
        var ox = Math.floor(this.origin.x);
        var oy = Math.floor(this.origin.y);
    } else {
        ox = this.origin.x;
        oy = this.origin.y;
    }
    var startX = Math.floor((ox - this._margin) / this._tileWidth);
    var startY = Math.floor((oy - this._margin) / this._tileHeight);
    this._updateLayerPositions(startX, startY);
    if (this._needsRepaint ||
        this._lastStartX !== startX || this._lastStartY !== startY) {
        this._lastStartX = startX;
        this._lastStartY = startY;
        this._paintAllTiles(startX, startY);
        this._needsRepaint = false;
    }
    this._sortChildren();
    PIXI.Container.prototype.updateTransform.call(this);
};

ShaderTilemap.prototype._createLayers = function() {
    var width = this._width;
    var height = this._height;
    var margin = this._margin;
    var tileCols = Math.ceil(width / this._tileWidth) + 1;
    var tileRows = Math.ceil(height / this._tileHeight) + 1;
    var layerWidth = this._layerWidth = tileCols * this._tileWidth;
    var layerHeight = this._layerHeight = tileRows * this._tileHeight;
    this._needsRepaint = true;

    if (!this.lowerZLayer) {
        //@hackerham: create layers only in initialization. Doesn't depend on width/height
        //@hackerham：只在初始化时创建层。不取决于宽度/高度
        this.addChild(this.lowerZLayer = new PIXI.tilemap.ZLayer(this, 0));
        this.addChild(this.upperZLayer = new PIXI.tilemap.ZLayer(this, 4));

        var parameters = PluginManager.parameters('ShaderTilemap');
        var useSquareShader = Number(parameters.hasOwnProperty('squareShader') ? parameters['squareShader'] : 0);

        this.lowerZLayer.addChild(this.lowerLayer = new PIXI.tilemap.CompositeRectTileLayer(0, [], useSquareShader));
        this.lowerLayer.shadowColor = new Float32Array([0.0, 0.0, 0.0, 0.5]);
        this.upperZLayer.addChild(this.upperLayer = new PIXI.tilemap.CompositeRectTileLayer(4, [], useSquareShader));
    }
};

ShaderTilemap.prototype._updateLayerPositions = function(startX, startY) {
    if (this.roundPixels) {
        var ox = Math.floor(this.origin.x);
        var oy = Math.floor(this.origin.y);
    } else {
        ox = this.origin.x;
        oy = this.origin.y;
    }
    this.lowerZLayer.position.x = startX * this._tileWidth - ox;
    this.lowerZLayer.position.y = startY * this._tileHeight - oy;
    this.upperZLayer.position.x = startX * this._tileWidth - ox;
    this.upperZLayer.position.y = startY * this._tileHeight - oy;
};

ShaderTilemap.prototype._paintAllTiles = function(startX, startY) {
    this.lowerZLayer.clear();
    this.upperZLayer.clear();
    var tileCols = Math.ceil(this._width / this._tileWidth) + 1;
    var tileRows = Math.ceil(this._height / this._tileHeight) + 1;
    for (var y = 0; y < tileRows; y++) {
        for (var x = 0; x < tileCols; x++) {
            this._paintTiles(startX, startY, x, y);
        }
    }
};

ShaderTilemap.prototype._paintTiles = function(startX, startY, x, y) {
    var mx = startX + x;
    var my = startY + y;
    var dx = x * this._tileWidth, dy = y * this._tileHeight;
    var tileId0 = this._readMapData(mx, my, 0);
    var tileId1 = this._readMapData(mx, my, 1);
    var tileId2 = this._readMapData(mx, my, 2);
    var tileId3 = this._readMapData(mx, my, 3);
    var shadowBits = this._readMapData(mx, my, 4);
    var upperTileId1 = this._readMapData(mx, my - 1, 1);
    var lowerLayer = this.lowerLayer.children[0];
    var upperLayer = this.upperLayer.children[0];

    if (this._isHigherTile(tileId0)) {
        this._drawTile(upperLayer, tileId0, dx, dy);
    } else {
        this._drawTile(lowerLayer, tileId0, dx, dy);
    }
    if (this._isHigherTile(tileId1)) {
        this._drawTile(upperLayer, tileId1, dx, dy);
    } else {
        this._drawTile(lowerLayer, tileId1, dx, dy);
    }

    this._drawShadow(lowerLayer, shadowBits, dx, dy);
    if (this._isTableTile(upperTileId1) && !this._isTableTile(tileId1)) {
        if (!Tilemap.isShadowingTile(tileId0)) {
            this._drawTableEdge(lowerLayer, upperTileId1, dx, dy);
        }
    }

    if (this._isOverpassPosition(mx, my)) {
        this._drawTile(upperLayer, tileId2, dx, dy);
        this._drawTile(upperLayer, tileId3, dx, dy);
    } else {
        if (this._isHigherTile(tileId2)) {
            this._drawTile(upperLayer, tileId2, dx, dy);
        } else {
            this._drawTile(lowerLayer, tileId2, dx, dy);
        }
        if (this._isHigherTile(tileId3)) {
            this._drawTile(upperLayer, tileId3, dx, dy);
        } else {
            this._drawTile(lowerLayer, tileId3, dx, dy);
        }
    }
};

ShaderTilemap.prototype._drawTile = function(layer, tileId, dx, dy) {
    if (Tilemap.isVisibleTile(tileId)) {
        if (Tilemap.isAutotile(tileId)) {
            this._drawAutotile(layer, tileId, dx, dy);
        } else {
            this._drawNormalTile(layer, tileId, dx, dy);
        }
    }
};

ShaderTilemap.prototype._drawNormalTile = function(layer, tileId, dx, dy) {
    var setNumber = 0;

    if (Tilemap.isTileA5(tileId)) {
        setNumber = 4;
    } else {
        setNumber = 5 + Math.floor(tileId / 256);
    }

    var w = this._tileWidth;
    var h = this._tileHeight;
    var sx = (Math.floor(tileId / 128) % 2 * 8 + tileId % 8) * w;
    var sy = (Math.floor(tileId % 256 / 8) % 16) * h;

    layer.addRect(setNumber, sx, sy, dx, dy, w, h);
};

ShaderTilemap.prototype._drawAutotile = function(layer, tileId, dx, dy) {
    var autotileTable = Tilemap.FLOOR_AUTOTILE_TABLE;
    var kind = Tilemap.getAutotileKind(tileId);
    var shape = Tilemap.getAutotileShape(tileId);
    var tx = kind % 8;
    var ty = Math.floor(kind / 8);
    var bx = 0;
    var by = 0;
    var setNumber = 0;
    var isTable = false;
    var animX = 0, animY = 0;

    if (Tilemap.isTileA1(tileId)) {
        setNumber = 0;
        if (kind === 0) {
            animX = 2;
            by = 0;
        } else if (kind === 1) {
            animX = 2;
            by = 3;
        } else if (kind === 2) {
            bx = 6;
            by = 0;
        } else if (kind === 3) {
            bx = 6;
            by = 3;
        } else {
            bx = Math.floor(tx / 4) * 8;
            by = ty * 6 + Math.floor(tx / 2) % 2 * 3;
            if (kind % 2 === 0) {
                animX = 2;
            }
            else {
                bx += 6;
                autotileTable = Tilemap.WATERFALL_AUTOTILE_TABLE;
                animY = 1;
            }
        }
    } else if (Tilemap.isTileA2(tileId)) {
        setNumber = 1;
        bx = tx * 2;
        by = (ty - 2) * 3;
        isTable = this._isTableTile(tileId);
    } else if (Tilemap.isTileA3(tileId)) {
        setNumber = 2;
        bx = tx * 2;
        by = (ty - 6) * 2;
        autotileTable = Tilemap.WALL_AUTOTILE_TABLE;
    } else if (Tilemap.isTileA4(tileId)) {
        setNumber = 3;
        bx = tx * 2;
        by = Math.floor((ty - 10) * 2.5 + (ty % 2 === 1 ? 0.5 : 0));
        if (ty % 2 === 1) {
            autotileTable = Tilemap.WALL_AUTOTILE_TABLE;
        }
    }

    var table = autotileTable[shape];
    var w1 = this._tileWidth / 2;
    var h1 = this._tileHeight / 2;
    for (var i = 0; i < 4; i++) {
        var qsx = table[i][0];
        var qsy = table[i][1];
        var sx1 = (bx * 2 + qsx) * w1;
        var sy1 = (by * 2 + qsy) * h1;
        var dx1 = dx + (i % 2) * w1;
        var dy1 = dy + Math.floor(i / 2) * h1;
        if (isTable && (qsy === 1 || qsy === 5)) {
            var qsx2 = qsx;
            var qsy2 = 3;
            if (qsy === 1) {
                //qsx2 = [0, 3, 2, 1][qsx];
                qsx2 = (4-qsx)%4;
            }
            var sx2 = (bx * 2 + qsx2) * w1;
            var sy2 = (by * 2 + qsy2) * h1;
            layer.addRect(setNumber, sx2, sy2, dx1, dy1, w1, h1, animX, animY);
            layer.addRect(setNumber, sx1, sy1, dx1, dy1+h1/2, w1, h1/2, animX, animY);
        } else {
            layer.addRect(setNumber, sx1, sy1, dx1, dy1, w1, h1, animX, animY);
        }
    }
};

ShaderTilemap.prototype._drawTableEdge = function(layer, tileId, dx, dy) {
    if (Tilemap.isTileA2(tileId)) {
        var autotileTable = Tilemap.FLOOR_AUTOTILE_TABLE;
        var kind = Tilemap.getAutotileKind(tileId);
        var shape = Tilemap.getAutotileShape(tileId);
        var tx = kind % 8;
        var ty = Math.floor(kind / 8);
        var setNumber = 1;
        var bx = tx * 2;
        var by = (ty - 2) * 3;
        var table = autotileTable[shape];
        var w1 = this._tileWidth / 2;
        var h1 = this._tileHeight / 2;
        for (var i = 0; i < 2; i++) {
            var qsx = table[2 + i][0];
            var qsy = table[2 + i][1];
            var sx1 = (bx * 2 + qsx) * w1;
            var sy1 = (by * 2 + qsy) * h1 + h1 / 2;
            var dx1 = dx + (i % 2) * w1;
            var dy1 = dy + Math.floor(i / 2) * h1;
            layer.addRect(setNumber, sx1, sy1, dx1, dy1, w1, h1/2);
        }
    }
};

ShaderTilemap.prototype._drawShadow = function(layer, shadowBits, dx, dy) {
    if (shadowBits & 0x0f) {
        var w1 = this._tileWidth / 2;
        var h1 = this._tileHeight / 2;
        for (var i = 0; i < 4; i++) {
            if (shadowBits & (1 << i)) {
                var dx1 = dx + (i % 2) * w1;
                var dy1 = dy + Math.floor(i / 2) * h1;
                layer.addRect(-1, 0, 0, dx1, dy1, w1, h1);
            }
        }
    }
};

TilingSprite = function() {
    this.initialize.apply(this, arguments);
}

TilingSprite.prototype = Object.create(PIXI.extras.TilingSprite.prototype);
TilingSprite.prototype.constructor = TilingSprite;

TilingSprite.prototype.initialize = function(bitmap) {
    var texture = new PIXI.Texture(new PIXI.BaseTexture());

    PIXI.extras.TilingSprite.call(this, texture);

    this._bitmap = null;
    this._width = 0;
    this._height = 0;
    this._frame = new Rectangle();
    this.spriteId = Sprite._counter++;
    this.origin = new Point();

    this.bitmap = bitmap;
};

TilingSprite.prototype._renderCanvas_PIXI = PIXI.extras.TilingSprite.prototype._renderCanvas;
TilingSprite.prototype._renderWebGL_PIXI = PIXI.extras.TilingSprite.prototype._renderWebGL;

TilingSprite.prototype._renderCanvas = function(renderer) {
    if (this._bitmap) {
        this._bitmap.touch();
    }
    if (this.texture.frame.width > 0 && this.texture.frame.height > 0) {
        this._renderCanvas_PIXI(renderer);
    }
};

TilingSprite.prototype._renderWebGL = function(renderer) {
    if (this._bitmap) {
        this._bitmap.touch();
    }
    if (this.texture.frame.width > 0 && this.texture.frame.height > 0) {
        if (this._bitmap) {
            this._bitmap.checkDirty();
        }
        this._renderWebGL_PIXI(renderer);
    }
};

Object.defineProperty(TilingSprite.prototype, 'bitmap', {
    get: function() {
        return this._bitmap;
    },
    set: function(value) {
        if (this._bitmap !== value) {
            this._bitmap = value;
            if (this._bitmap) {
                this._bitmap.addLoadListener(this._onBitmapLoad.bind(this));
            } else {
                this.texture.frame = Rectangle.emptyRectangle;
            }
        }
    },
    configurable: true
});

Object.defineProperty(TilingSprite.prototype, 'opacity', {
    get: function() {
        return this.alpha * 255;
    },
    set: function(value) {
        this.alpha = value.clamp(0, 255) / 255;
    },
    configurable: true
});

TilingSprite.prototype.update = function() {
    this.children.forEach(function(child) {
        if (child.update) {
            child.update();
        }
    });
};

TilingSprite.prototype.move = function(x, y, width, height) {
    this.x = x || 0;
    this.y = y || 0;
    this._width = width || 0;
    this._height = height || 0;
};

TilingSprite.prototype.setFrame = function(x, y, width, height) {
    this._frame.x = x;
    this._frame.y = y;
    this._frame.width = width;
    this._frame.height = height;
    this._refresh();
};

TilingSprite.prototype.updateTransform = function() {
    this.tilePosition.x = Math.round(-this.origin.x);
    this.tilePosition.y = Math.round(-this.origin.y);
    this.updateTransformTS();
};

TilingSprite.prototype.updateTransformTS = PIXI.extras.TilingSprite.prototype.updateTransform;

TilingSprite.prototype._onBitmapLoad = function() {
    this.texture.baseTexture = this._bitmap.baseTexture;
    this._refresh();
};

TilingSprite.prototype._refresh = function() {
    var frame = this._frame.clone();
    if (frame.width === 0 && frame.height === 0 && this._bitmap) {
        frame.width = this._bitmap.width;
        frame.height = this._bitmap.height;
    }
    var lastTrim = this.texture.trim;
    this.texture.trim = frame;
    this.texture.frame = frame;
    this.texture.trim = lastTrim;
    this.tilingTexture = null;
};

ScreenSprite.prototype.initialize = function() {
    var texture = new PIXI.Texture(new PIXI.BaseTexture());

    PIXI.Sprite.call(this, texture);

    this._bitmap = new Bitmap(1, 1);
    this.texture.baseTexture = this._bitmap.baseTexture;
    this.texture.frame = new Rectangle(0, 0, 1, 1);
    this.scale.x = Graphics.width;
    this.scale.y = Graphics.height;
    this.opacity = 0;

    this._red = -1;
    this._green = -1;
    this._blue = -1;
    this._colorText = '';
    this.setBlack();
};

ScreenSprite.prototype._renderCanvas = function(renderer) {
    if (this.visible && this.alpha > 0) {
        var context = renderer.context;
        var t = this.worldTransform;
        var r = renderer.resolution;
        context.setTransform(t.a, t.b, t.c, t.d, t.tx * r, t.ty * r);
        context.globalCompositeOperation = renderer.blendModes[this.blendMode];
        context.globalAlpha = this.alpha;
        context.fillStyle = this._colorText;
        context.fillRect(0, 0, Graphics.width, Graphics.height);
    }
};

Window = function() {
    this.initialize.apply(this, arguments);
}

Window.prototype = Object.create(PIXI.Container.prototype);
Window.prototype.constructor = Window;

Window.prototype.initialize = function() {
    PIXI.Container.call(this);

    this._isWindow = true;
    this._windowskin = null;
    this._width = 0;
    this._height = 0;
    this._cursorRect = new Rectangle();
    this._openness = 255;
    this._animationCount = 0;

    this._padding = 18;
    this._margin = 4;
    this._colorTone = [0, 0, 0];

    this._windowSpriteContainer = null;
    this._windowBackSprite = null;
    this._windowCursorSprite = null;
    this._windowFrameSprite = null;
    this._windowContentsSprite = null;
    this._windowArrowSprites = [];
    this._windowPauseSignSprite = null;

    this._createAllParts();

    this.origin = new Point();

    this.active = true;

    this.downArrowVisible = false;

    this.upArrowVisible = false;

    this.pause = false;
};

Object.defineProperty(Window.prototype, 'windowskin', {
    get: function() {
        return this._windowskin;
    },
    set: function(value) {
        if (this._windowskin !== value) {
            this._windowskin = value;
            this._windowskin.addLoadListener(this._onWindowskinLoad.bind(this));
        }
    },
    configurable: true
});

Object.defineProperty(Window.prototype, 'contents', {
    get: function() {
        return this._windowContentsSprite.bitmap;
    },
    set: function(value) {
        this._windowContentsSprite.bitmap = value;
    },
    configurable: true
});

Object.defineProperty(Window.prototype, 'width', {
    get: function() {
        return this._width;
    },
    set: function(value) {
        this._width = value;
        this._refreshAllParts();
    },
    configurable: true
});

Object.defineProperty(Window.prototype, 'height', {
    get: function() {
        return this._height;
    },
    set: function(value) {
        this._height = value;
        this._refreshAllParts();
    },
    configurable: true
});

Object.defineProperty(Window.prototype, 'padding', {
    get: function() {
        return this._padding;
    },
    set: function(value) {
        this._padding = value;
        this._refreshAllParts();
    },
    configurable: true
});

Object.defineProperty(Window.prototype, 'margin', {
    get: function() {
        return this._margin;
    },
    set: function(value) {
        this._margin = value;
        this._refreshAllParts();
    },
    configurable: true
});

Object.defineProperty(Window.prototype, 'opacity', {
    get: function() {
        return this._windowSpriteContainer.alpha * 255;
    },
    set: function(value) {
        this._windowSpriteContainer.alpha = value.clamp(0, 255) / 255;
    },
    configurable: true
});

Object.defineProperty(Window.prototype, 'backOpacity', {
    get: function() {
        return this._windowBackSprite.alpha * 255;
    },
    set: function(value) {
        this._windowBackSprite.alpha = value.clamp(0, 255) / 255;
    },
    configurable: true
});

Object.defineProperty(Window.prototype, 'contentsOpacity', {
    get: function() {
        return this._windowContentsSprite.alpha * 255;
    },
    set: function(value) {
        this._windowContentsSprite.alpha = value.clamp(0, 255) / 255;
    },
    configurable: true
});

Object.defineProperty(Window.prototype, 'openness', {
    get: function() {
        return this._openness;
    },
    set: function(value) {
        if (this._openness !== value) {
            this._openness = value.clamp(0, 255);
            this._windowSpriteContainer.scale.y = this._openness / 255;
            this._windowSpriteContainer.y = this.height / 2 * (1 - this._openness / 255);
        }
    },
    configurable: true
});

Window.prototype.update = function() {
    if (this.active) {
        this._animationCount++;
    }
    this.children.forEach(function(child) {
        if (child.update) {
            child.update();
        }
    });
};

Window.prototype.move = function(x, y, width, height) {
    this.x = x || 0;
    this.y = y || 0;
    if (this._width !== width || this._height !== height) {
        this._width = width || 0;
        this._height = height || 0;
        this._refreshAllParts();
    }
};

Window.prototype.isOpen = function() {
    return this._openness >= 255;
};

Window.prototype.isClosed = function() {
    return this._openness <= 0;
};

Window.prototype.setCursorRect = function(x, y, width, height) {
    var cx = Math.floor(x || 0);
    var cy = Math.floor(y || 0);
    var cw = Math.floor(width || 0);
    var ch = Math.floor(height || 0);
    var rect = this._cursorRect;
    if (rect.x !== cx || rect.y !== cy || rect.width !== cw || rect.height !== ch) {
        this._cursorRect.x = cx;
        this._cursorRect.y = cy;
        this._cursorRect.width = cw;
        this._cursorRect.height = ch;
        this._refreshCursor();
    }
};

Window.prototype.setTone = function(r, g, b) {
    var tone = this._colorTone;
    if (r !== tone[0] || g !== tone[1] || b !== tone[2]) {
        this._colorTone = [r, g, b];
        this._refreshBack();
    }
};

Window.prototype.addChildToBack = function(child) {
    var containerIndex = this.children.indexOf(this._windowSpriteContainer);
    return this.addChildAt(child, containerIndex + 1);
};

Window.prototype.updateTransform = function() {
    this._updateCursor();
    this._updateArrows();
    this._updatePauseSign();
    this._updateContents();
    PIXI.Container.prototype.updateTransform.call(this);
};

Window.prototype._createAllParts = function() {
    this._windowSpriteContainer = new PIXI.Container();
    this._windowBackSprite = new Sprite();
    this._windowCursorSprite = new Sprite();
    this._windowFrameSprite = new Sprite();
    this._windowContentsSprite = new Sprite();
    this._downArrowSprite = new Sprite();
    this._upArrowSprite = new Sprite();
    this._windowPauseSignSprite = new Sprite();
    this._windowBackSprite.bitmap = new Bitmap(1, 1);
    this._windowBackSprite.alpha = 192 / 255;
    this.addChild(this._windowSpriteContainer);
    this._windowSpriteContainer.addChild(this._windowBackSprite);
    this._windowSpriteContainer.addChild(this._windowFrameSprite);
    this.addChild(this._windowCursorSprite);
    this.addChild(this._windowContentsSprite);
    this.addChild(this._downArrowSprite);
    this.addChild(this._upArrowSprite);
    this.addChild(this._windowPauseSignSprite);
};

Window.prototype._onWindowskinLoad = function() {
    this._refreshAllParts();
};

Window.prototype._refreshAllParts = function() {
    this._refreshBack();
    this._refreshFrame();
    this._refreshCursor();
    this._refreshContents();
    this._refreshArrows();
    this._refreshPauseSign();
};

Window.prototype._refreshBack = function() {
    var m = this._margin;
    var w = this._width - m * 2;
    var h = this._height - m * 2;
    var bitmap = new Bitmap(w, h);

    this._windowBackSprite.bitmap = bitmap;
    this._windowBackSprite.setFrame(0, 0, w, h);
    this._windowBackSprite.move(m, m);

    if (w > 0 && h > 0 && this._windowskin) {
        var p = 96;
        bitmap.blt(this._windowskin, 0, 0, p, p, 0, 0, w, h);
        for (var y = 0; y < h; y += p) {
            for (var x = 0; x < w; x += p) {
                bitmap.blt(this._windowskin, 0, p, p, p, x, y, p, p);
            }
        }
        var tone = this._colorTone;
        bitmap.adjustTone(tone[0], tone[1], tone[2]);
    }
};

Window.prototype._refreshFrame = function() {
    var w = this._width;
    var h = this._height;
    var m = 24;
    var bitmap = new Bitmap(w, h);

    this._windowFrameSprite.bitmap = bitmap;
    this._windowFrameSprite.setFrame(0, 0, w, h);

    if (w > 0 && h > 0 && this._windowskin) {
        var skin = this._windowskin;
        var p = 96;
        var q = 96;
        bitmap.blt(skin, p+m, 0+0, p-m*2, m, m, 0, w-m*2, m);
        bitmap.blt(skin, p+m, 0+q-m, p-m*2, m, m, h-m, w-m*2, m);
        bitmap.blt(skin, p+0, 0+m, m, p-m*2, 0, m, m, h-m*2);
        bitmap.blt(skin, p+q-m, 0+m, m, p-m*2, w-m, m, m, h-m*2);
        bitmap.blt(skin, p+0, 0+0, m, m, 0, 0, m, m);
        bitmap.blt(skin, p+q-m, 0+0, m, m, w-m, 0, m, m);
        bitmap.blt(skin, p+0, 0+q-m, m, m, 0, h-m, m, m);
        bitmap.blt(skin, p+q-m, 0+q-m, m, m, w-m, h-m, m, m);
    }
};

Window.prototype._refreshCursor = function() {
    var pad = this._padding;
    var x = this._cursorRect.x + pad - this.origin.x;
    var y = this._cursorRect.y + pad - this.origin.y;
    var w = this._cursorRect.width;
    var h = this._cursorRect.height;
    var m = 4;
    var x2 = Math.max(x, pad);
    var y2 = Math.max(y, pad);
    var ox = x - x2;
    var oy = y - y2;
    var w2 = Math.min(w, this._width - pad - x2);
    var h2 = Math.min(h, this._height - pad - y2);
    var bitmap = new Bitmap(w2, h2);

    this._windowCursorSprite.bitmap = bitmap;
    this._windowCursorSprite.setFrame(0, 0, w2, h2);
    this._windowCursorSprite.move(x2, y2);

    if (w > 0 && h > 0 && this._windowskin) {
        var skin = this._windowskin;
        var p = 96;
        var q = 48;
        bitmap.blt(skin, p+m, p+m, q-m*2, q-m*2, ox+m, oy+m, w-m*2, h-m*2);
        bitmap.blt(skin, p+m, p+0, q-m*2, m, ox+m, oy+0, w-m*2, m);
        bitmap.blt(skin, p+m, p+q-m, q-m*2, m, ox+m, oy+h-m, w-m*2, m);
        bitmap.blt(skin, p+0, p+m, m, q-m*2, ox+0, oy+m, m, h-m*2);
        bitmap.blt(skin, p+q-m, p+m, m, q-m*2, ox+w-m, oy+m, m, h-m*2);
        bitmap.blt(skin, p+0, p+0, m, m, ox+0, oy+0, m, m);
        bitmap.blt(skin, p+q-m, p+0, m, m, ox+w-m, oy+0, m, m);
        bitmap.blt(skin, p+0, p+q-m, m, m, ox+0, oy+h-m, m, m);
        bitmap.blt(skin, p+q-m, p+q-m, m, m, ox+w-m, oy+h-m, m, m);
    }
};

Window.prototype._refreshContents = function() {
    this._windowContentsSprite.move(this.padding, this.padding);
};

Window.prototype._refreshArrows = function() {
    var w = this._width;
    var h = this._height;
    var p = 24;
    var q = p/2;
    var sx = 96+p;
    var sy = 0+p;
    this._downArrowSprite.bitmap = this._windowskin;
    this._downArrowSprite.anchor.x = 0.5;
    this._downArrowSprite.anchor.y = 0.5;
    this._downArrowSprite.setFrame(sx+q, sy+q+p, p, q);
    this._downArrowSprite.move(w/2, h-q);
    this._upArrowSprite.bitmap = this._windowskin;
    this._upArrowSprite.anchor.x = 0.5;
    this._upArrowSprite.anchor.y = 0.5;
    this._upArrowSprite.setFrame(sx+q, sy, p, q);
    this._upArrowSprite.move(w/2, q);
};

Window.prototype._refreshPauseSign = function() {
    var sx = 144;
    var sy = 96;
    var p = 24;
    this._windowPauseSignSprite.bitmap = this._windowskin;
    this._windowPauseSignSprite.anchor.x = 0.5;
    this._windowPauseSignSprite.anchor.y = 1;
    this._windowPauseSignSprite.move(this._width / 2, this._height);
    this._windowPauseSignSprite.setFrame(sx, sy, p, p);
    this._windowPauseSignSprite.alpha = 0;
};

Window.prototype._updateCursor = function() {
    var blinkCount = this._animationCount % 40;
    var cursorOpacity = this.contentsOpacity;
    if (this.active) {
        if (blinkCount < 20) {
            cursorOpacity -= blinkCount * 8;
        } else {
            cursorOpacity -= (40 - blinkCount) * 8;
        }
    }
    this._windowCursorSprite.alpha = cursorOpacity / 255;
    this._windowCursorSprite.visible = this.isOpen();
};

Window.prototype._updateContents = function() {
    var w = this._width - this._padding * 2;
    var h = this._height - this._padding * 2;
    if (w > 0 && h > 0) {
        this._windowContentsSprite.setFrame(this.origin.x, this.origin.y, w, h);
        this._windowContentsSprite.visible = this.isOpen();
    } else {
        this._windowContentsSprite.visible = false;
    }
};

Window.prototype._updateArrows = function() {
    this._downArrowSprite.visible = this.isOpen() && this.downArrowVisible;
    this._upArrowSprite.visible = this.isOpen() && this.upArrowVisible;
};

Window.prototype._updatePauseSign = function() {
    var sprite = this._windowPauseSignSprite;
    var x = Math.floor(this._animationCount / 16) % 2;
    var y = Math.floor(this._animationCount / 16 / 2) % 2;
    var sx = 144;
    var sy = 96;
    var p = 24;
    if (!this.pause) {
        sprite.alpha = 0;
    } else if (sprite.alpha < 1) {
        sprite.alpha = Math.min(sprite.alpha + 0.1, 1);
    }
    sprite.setFrame(sx+x*p, sy+y*p, p, p);
    sprite.visible = this.isOpen();
};

WindowLayer = function() {
    this.initialize.apply(this, arguments);
}

WindowLayer.prototype = Object.create(PIXI.Container.prototype);
WindowLayer.prototype.constructor = WindowLayer;

WindowLayer.prototype.initialize = function() {
    PIXI.Container.call(this);
    this._width = 0;
    this._height = 0;
    this._tempCanvas = null;
    this._translationMatrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];

    this._windowMask = new PIXI.Graphics();
    this._windowMask.beginFill(0xffffff, 1);
    this._windowMask.drawRect(0, 0, 0, 0);
    this._windowMask.endFill();
    this._windowRect = this._windowMask.graphicsData[0].shape;

    this._renderSprite = null;
    this.filterArea = new PIXI.Rectangle();
    this.filters = [WindowLayer.voidFilter];
};

WindowLayer.voidFilter = new PIXI.filters.VoidFilter();

Object.defineProperty(WindowLayer.prototype, 'width', {
    get: function() {
        return this._width;
    },
    set: function(value) {
        this._width = value;
    },
    configurable: true
});

Object.defineProperty(WindowLayer.prototype, 'height', {
    get: function() {
        return this._height;
    },
    set: function(value) {
        this._height = value;
    },
    configurable: true
});

WindowLayer.prototype.move = function(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};

WindowLayer.prototype.update = function() {
    this.children.forEach(function(child) {
        if (child.update) {
            child.update();
        }
    });
};

WindowLayer.prototype.renderCanvas = function(renderer) {
    if (!this.visible || !this.renderable) {
        return;
    }

    if (!this._tempCanvas) {
        this._tempCanvas = document.createElement('canvas');
    }

    this._tempCanvas.width = Graphics.width;
    this._tempCanvas.height = Graphics.height;

    var realCanvasContext = renderer.context;
    var context = this._tempCanvas.getContext('2d');

    context.save();
    context.clearRect(0, 0, Graphics.width, Graphics.height);
    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.closePath();
    context.clip();

    renderer.context = context;

    for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        if (child._isWindow && child.visible && child.openness > 0) {
            this._canvasClearWindowRect(renderer, child);
            context.save();
            child.renderCanvas(renderer);
            context.restore();
        }
    }

    context.restore();

    renderer.context = realCanvasContext;
    renderer.context.setTransform(1, 0, 0, 1, 0, 0);
    renderer.context.globalCompositeOperation = 'source-over';
    renderer.context.globalAlpha = 1;
    renderer.context.drawImage(this._tempCanvas, 0, 0);

    for (var j = 0; j < this.children.length; j++) {
        if (!this.children[j]._isWindow) {
            this.children[j].renderCanvas(renderer);
        }
    }
};

WindowLayer.prototype._canvasClearWindowRect = function(renderSession, window) {
    var rx = this.x + window.x;
    var ry = this.y + window.y + window.height / 2 * (1 - window._openness / 255);
    var rw = window.width;
    var rh = window.height * window._openness / 255;
    renderSession.context.clearRect(rx, ry, rw, rh);
};

WindowLayer.prototype.renderWebGL = function(renderer) {
    if (!this.visible || !this.renderable) {
        return;
    }

    renderer.currentRenderer.flush();
    this.filterArea.copy(this);
    renderer.filterManager.pushFilter(this, this.filters);
    renderer.currentRenderer.start();

    for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        if (child._isWindow && child.visible && child.openness > 0) {
            this._maskWindow(child);
            renderer.maskManager.pushScissorMask(this, this._windowMask);
            renderer.clear();
            renderer.maskManager.popScissorMask();
            renderer.currentRenderer.start();
            child.renderWebGL(renderer);
            renderer.currentRenderer.flush();
        }
    }

    renderer.filterManager.popFilter();
    renderer.maskManager.popScissorMask();

    for (var j = 0; j < this.children.length; j++) {
        if (!this.children[j]._isWindow) {
            this.children[j].renderWebGL(renderer);
        }
    }
};

WindowLayer.prototype._maskWindow = function(window) {
    this._windowMask._currentBounds = null;
    this._windowMask.boundsDirty = true;
    var rect = this._windowRect;
    rect.x = window.x;
    rect.y = window.y + window.height / 2 * (1 - window._openness / 255);
    rect.width = window.width;
    rect.height = window.height * window._openness / 255;
};

Weather = function() {
    this.initialize.apply(this, arguments);
}

Weather.prototype = Object.create(PIXI.Container.prototype);
Weather.prototype.constructor = Weather;

Weather.prototype.initialize = function() {
    PIXI.Container.call(this);

    this._width = Graphics.width;
    this._height = Graphics.height;
    this._sprites = [];

    this._createBitmaps();
    this._createDimmer();

    this.type = 'none';

    this.power = 0;

    this.origin = new Point();
};

Weather.prototype.update = function() {
    this._updateDimmer();
    this._updateAllSprites();
};

Weather.prototype._createBitmaps = function() {
    this._rainBitmap = new Bitmap(1, 60);
    this._rainBitmap.fillAll('white');
    this._stormBitmap = new Bitmap(2, 100);
    this._stormBitmap.fillAll('white');
    this._snowBitmap = new Bitmap(9, 9);
    this._snowBitmap.drawCircle(4, 4, 4, 'white');
};

Weather.prototype._createDimmer = function() {
    this._dimmerSprite = new ScreenSprite();
    this._dimmerSprite.setColor(80, 80, 80);
    this.addChild(this._dimmerSprite);
};

Weather.prototype._updateDimmer = function() {
    this._dimmerSprite.opacity = Math.floor(this.power * 6);
};

Weather.prototype._updateAllSprites = function() {
    var maxSprites = Math.floor(this.power * 10);
    while (this._sprites.length < maxSprites) {
        this._addSprite();
    }
    while (this._sprites.length > maxSprites) {
        this._removeSprite();
    }
    this._sprites.forEach(function(sprite) {
        this._updateSprite(sprite);
        sprite.x = sprite.ax - this.origin.x;
        sprite.y = sprite.ay - this.origin.y;
    }, this);
};

Weather.prototype._addSprite = function() {
    var sprite = new Sprite(this.viewport);
    sprite.opacity = 0;
    this._sprites.push(sprite);
    this.addChild(sprite);
};

Weather.prototype._removeSprite = function() {
    this.removeChild(this._sprites.pop());
};

Weather.prototype._updateSprite = function(sprite) {
    switch (this.type) {
    case 'rain':
        this._updateRainSprite(sprite);
        break;
    case 'storm':
        this._updateStormSprite(sprite);
        break;
    case 'snow':
        this._updateSnowSprite(sprite);
        break;
    }
    if (sprite.opacity < 40) {
        this._rebornSprite(sprite);
    }
};

Weather.prototype._updateRainSprite = function(sprite) {
    sprite.bitmap = this._rainBitmap;
    sprite.rotation = Math.PI / 16;
    sprite.ax -= 6 * Math.sin(sprite.rotation);
    sprite.ay += 6 * Math.cos(sprite.rotation);
    sprite.opacity -= 6;
};

Weather.prototype._updateStormSprite = function(sprite) {
    sprite.bitmap = this._stormBitmap;
    sprite.rotation = Math.PI / 8;
    sprite.ax -= 8 * Math.sin(sprite.rotation);
    sprite.ay += 8 * Math.cos(sprite.rotation);
    sprite.opacity -= 8;
};

Weather.prototype._updateSnowSprite = function(sprite) {
    sprite.bitmap = this._snowBitmap;
    sprite.rotation = Math.PI / 16;
    sprite.ax -= 3 * Math.sin(sprite.rotation);
    sprite.ay += 3 * Math.cos(sprite.rotation);
    sprite.opacity -= 3;
};

Weather.prototype._rebornSprite = function(sprite) {
    sprite.ax = Math.randomInt(Graphics.width + 100) - 100 + this.origin.x;
    sprite.ay = Math.randomInt(Graphics.height + 200) - 200 + this.origin.y;
    sprite.opacity = 160 + Math.randomInt(60);
};

ToneFilter = function() {
    PIXI.filters.ColorMatrixFilter.call(this);
}

ToneFilter.prototype = Object.create(PIXI.filters.ColorMatrixFilter.prototype);
ToneFilter.prototype.constructor = ToneFilter;

ToneFilter.prototype.adjustHue = function(value) {
    this.hue(value, true);
};

ToneFilter.prototype.adjustSaturation = function(value) {
    value = (value || 0).clamp(-255, 255) / 255;
    this.saturate(value, true);
};

ToneFilter.prototype.adjustTone = function(r, g, b) {
    r = (r || 0).clamp(-255, 255) / 255;
    g = (g || 0).clamp(-255, 255) / 255;
    b = (b || 0).clamp(-255, 255) / 255;

    if (r !== 0 || g !== 0 || b !== 0) {
        var matrix = [
            1, 0, 0, r, 0,
            0, 1, 0, g, 0,
            0, 0, 1, b, 0,
            0, 0, 0, 1, 0
        ];

        this._loadMatrix(matrix, true);
    }
};

ToneSprite = function() {
    this.initialize.apply(this, arguments);
}

ToneSprite.prototype = Object.create(PIXI.Container.prototype);
ToneSprite.prototype.constructor = ToneSprite;

ToneSprite.prototype.initialize = function() {
    PIXI.Container.call(this);
    this.clear();
};

ToneSprite.prototype.clear = function() {
    this._red = 0;
    this._green = 0;
    this._blue = 0;
    this._gray = 0;
};

ToneSprite.prototype.setTone = function(r, g, b, gray) {
    this._red = Math.round(r || 0).clamp(-255, 255);
    this._green = Math.round(g || 0).clamp(-255, 255);
    this._blue = Math.round(b || 0).clamp(-255, 255);
    this._gray = Math.round(gray || 0).clamp(0, 255);
};

ToneSprite.prototype._renderCanvas = function(renderer) {
    if (this.visible) {
        var context = renderer.context;
        var t = this.worldTransform;
        var r = renderer.resolution;
        var width = Graphics.width;
        var height = Graphics.height;
        context.save();
        context.setTransform(t.a, t.b, t.c, t.d, t.tx * r, t.ty * r);
        if (Graphics.canUseSaturationBlend() && this._gray > 0) {
            context.globalCompositeOperation = 'saturation';
            context.globalAlpha = this._gray / 255;
            context.fillStyle = '#ffffff';
            context.fillRect(0, 0, width, height);
        }
        context.globalAlpha = 1;
        var r1 = Math.max(0, this._red);
        var g1 = Math.max(0, this._green);
        var b1 = Math.max(0, this._blue);
        if (r1 || g1 || b1) {
            context.globalCompositeOperation = 'lighter';
            context.fillStyle = Utils.rgbToCssColor(r1, g1, b1);
            context.fillRect(0, 0, width, height);
        }
        if (Graphics.canUseDifferenceBlend()) {
            var r2 = Math.max(0, -this._red);
            var g2 = Math.max(0, -this._green);
            var b2 = Math.max(0, -this._blue);
            if (r2 || g2 || b2) {
                context.globalCompositeOperation = 'difference';
                context.fillStyle = '#ffffff';
                context.fillRect(0, 0, width, height);
                context.globalCompositeOperation = 'lighter';
                context.fillStyle = Utils.rgbToCssColor(r2, g2, b2);
                context.fillRect(0, 0, width, height);
                context.globalCompositeOperation = 'difference';
                context.fillStyle = '#ffffff';
                context.fillRect(0, 0, width, height);
            }
        }
        context.restore();
    }
};

ToneSprite.prototype._renderWebGL = function(renderer) {
};

Stage = function() {
    this.initialize.apply(this, arguments);
}

Stage.prototype = Object.create(PIXI.Container.prototype);
Stage.prototype.constructor = Stage;

Stage.prototype.initialize = function() {
    PIXI.Container.call(this);
    this.interactive = false;
};

WebAudio.prototype._load = function(url) {
    if (WebAudio._context) {
        var xhr = new XMLHttpRequest();
        if(Decrypter.hasEncryptedAudio) url = Decrypter.extToEncryptExt(url);
        xhr.open('GET', url);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function() {
            if (xhr.status < 400) {
                this._onXhrLoad(xhr);
            }
        }.bind(this);
        xhr.onerror = function() {
            this._hasError = true;
        }.bind(this);
        xhr.send();
    }
};

WebAudio.prototype._onXhrLoad = function(xhr) {
    var array = xhr.response;
    this._readLoopComments(array);
    if(Decrypter.hasEncryptedAudio) array = Decrypter.decryptArrayBuffer(array);
    WebAudio._context.decodeAudioData(array, function(buffer) {
        this._buffer = buffer;
        this._totalTime = buffer.duration;
        if (this._loopLength > 0 && this._sampleRate > 0) {
            this._loopStart /= this._sampleRate;
            this._loopLength /= this._sampleRate;
        } else {
            this._loopStart = 0;
            this._loopLength = this._totalTime;
        }
        this._onLoad();
    }.bind(this));
};

Html5Audio.setup = function(url) {
    if (!this._initialized) {
        this.initialize();
    }
    this.clear();

    if(Decrypter.hasEncryptedAudio && this._audioElement.src) {
        window.URL.revokeObjectURL(this._audioElement.src);
    }
    this._url = url;
};

Decrypter = function() {
    throw new Error('这是一个静态类！');
}

Decrypter.hasEncryptedImages = false;
Decrypter.hasEncryptedAudio = false;
Decrypter._requestImgFile = [];
Decrypter._headerlength = 16;
Decrypter._xhrOk = 400;
Decrypter._encryptionKey = "";
Decrypter._ignoreList = [
    "img/system/Window.png"
];
Decrypter.SIGNATURE = "5250474d56000000";
Decrypter.VER = "000301";
Decrypter.REMAIN = "0000000000";

Decrypter.checkImgIgnore = function(url){
    for(var cnt = 0; cnt < this._ignoreList.length; cnt++) {
        if(url === this._ignoreList[cnt]) return true;
    }
    return false;
};

Decrypter.decryptImg = function(url, bitmap) {
    url = this.extToEncryptExt(url);

    var requestFile = new XMLHttpRequest();
    requestFile.open("GET", url);
    requestFile.responseType = "arraybuffer";
    requestFile.send();

    requestFile.onload = function() {
        if(this.status < Decrypter._xhrOk) {
            var arrayBuffer = Decrypter.decryptArrayBuffer(requestFile.response);
            bitmap._image.src = Decrypter.createBlobUrl(arrayBuffer);
            bitmap._image.onload = Bitmap.prototype._onLoad.bind(bitmap);
            bitmap._image.onerror = Bitmap.prototype._onError.bind(bitmap);
        }
    };
};

Decrypter.decryptHTML5Audio = function(url, bgm, pos) {
    var requestFile = new XMLHttpRequest();
    requestFile.open("GET", url);
    requestFile.responseType = "arraybuffer";
    requestFile.send();

    requestFile.onload = function() {
        if(this.status < Decrypter._xhrOk) {
            var arrayBuffer = Decrypter.decryptArrayBuffer(requestFile.response);
            var url = Decrypter.createBlobUrl(arrayBuffer);
            AudioManager.createDecryptBuffer(url, bgm, pos);
        }
    };
};

Decrypter.cutArrayHeader = function(arrayBuffer, length) {
    return arrayBuffer.slice(length);
};

Decrypter.decryptArrayBuffer = function(arrayBuffer) {
    if (!arrayBuffer) return null;
    var header = new Uint8Array(arrayBuffer, 0, this._headerlength);

    var i;
    var ref = this.SIGNATURE + this.VER + this.REMAIN;
    var refBytes = new Uint8Array(16);
    for (i = 0; i < this._headerlength; i++) {
        refBytes[i] = parseInt("0x" + ref.substr(i * 2, 2), 16);
    }
    for (i = 0; i < this._headerlength; i++) {
        if (header[i] !== refBytes[i]) {
            throw new Error("页眉标头错误");
        }
    }

    arrayBuffer = this.cutArrayHeader(arrayBuffer, Decrypter._headerlength);
    var view = new DataView(arrayBuffer);
    this.readEncryptionkey();
    if (arrayBuffer) {
        var byteArray = new Uint8Array(arrayBuffer);
        for (i = 0; i < this._headerlength; i++) {
            byteArray[i] = byteArray[i] ^ parseInt(Decrypter._encryptionKey[i], 16);
            view.setUint8(i, byteArray[i]);
        }
    }

    return arrayBuffer;
};

Decrypter.createBlobUrl = function(arrayBuffer){
    var blob = new Blob([arrayBuffer]);
    return window.URL.createObjectURL(blob);
};

Decrypter.extToEncryptExt = function(url) {
    var ext = url.split('.').pop();
    var encryptedExt = ext;

    if(ext === "ogg") encryptedExt = ".rpgmvo";
    else if(ext === "m4a") encryptedExt = ".rpgmvm";
    else if(ext === "png") encryptedExt = ".rpgmvp";
    else encryptedExt = ext;

    return url.slice(0, url.lastIndexOf(ext) - 1) + encryptedExt;
};

Decrypter.readEncryptionkey = function(){
    this._encryptionKey = $dataSystem.encryptionKey.split(/(.{2})/).filter(Boolean);
};

//-----------------------------------------------------------------------------
// 1.3.0 rpg_managers.js 变更
//-----------------------------------------------------------------------------

DataManager.onLoad = function(object) {
    var array;
    if (object === $dataMap) {
        this.extractMetadata(object);
        array = object.events;
    } else {
        array = object;
    }
    if (Array.isArray(array)) {
        for (var i = 0; i < array.length; i++) {
            var data = array[i];
            if (data && data.note !== undefined) {
                this.extractMetadata(data);
            }
        }
    }
    if (object === $dataSystem) {
        Decrypter.hasEncryptedImages = !!object.hasEncryptedImages;
        Decrypter.hasEncryptedAudio = !!object.hasEncryptedAudio;
        Scene_Boot.loadSystemImages();
    }
};

StorageManager.restoreBackup = function(savefileId) {
    if (this.backupExists(savefileId)) {
        if (this.isLocalMode()) {
            var data = this.loadFromLocalBackupFile(savefileId);
            var compressed = LZString.compressToBase64(data);
            var fs = require('fs');
            var dirPath = this.localFileDirectoryPath();
            var filePath = this.localFilePath(savefileId);
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath);
            }
            fs.writeFileSync(filePath, compressed);
            fs.unlinkSync(filePath + ".bak");
        } else {
            var data = this.loadFromWebStorageBackup(savefileId);
            var compressed = LZString.compressToBase64(data);
            var key = this.webStorageKey(savefileId);
            localStorage.setItem(key, compressed);
            localStorage.removeItem(key + "bak");
        }
    }
};

StorageManager.localFileDirectoryPath = function() {
    var path = require('path');

    var base = path.dirname(process.mainModule.filename);
    return path.join(base, 'save/');
};

ImageManager.cache = new CacheMap(ImageManager);

ImageManager.loadEmptyBitmap = function() {
    var empty = this.cache.getItem('empty');
    if (!empty) {
        empty = new Bitmap();
        this.cache.setItem('empty', empty);
    }
    return empty;
};

ImageManager.loadNormalBitmap = function(path, hue) {
    var key = path + ':' + hue;
    var bitmap = this.cache.getItem(key);
    if (!bitmap) {
        bitmap = Bitmap.load(path);
        bitmap.addLoadListener(function() {
            bitmap.rotateHue(hue);
        });
        this.cache.setItem(key, bitmap);
    }
    return bitmap;
};

ImageManager.clear = function() {
    this.cache.clear();
};

ImageManager.isReady = function() {
    for (var key in this.cache._inner) {
        var bitmap = this.cache._inner[key].item;
        if (bitmap.isError()) {
            throw new Error('加载失败：' + bitmap.url);
        }
        if (!bitmap.isReady()) {
            return false;
        }
    }
    return true;
};

AudioManager._blobUrl        = null;

AudioManager.playBgm = function(bgm, pos) {
    if (this.isCurrentBgm(bgm)) {
        this.updateBgmParameters(bgm);
    } else {
        this.stopBgm();
        if (bgm.name) { 
            if(Decrypter.hasEncryptedAudio && this.shouldUseHtml5Audio()){
                this.playEncryptedBgm(bgm, pos);
            }
            else {
                this._bgmBuffer = this.createBuffer('bgm', bgm.name);
                this.updateBgmParameters(bgm);
                if (!this._meBuffer) {
                    this._bgmBuffer.play(true, pos || 0);
                }
            }
        }
    }
    this.updateCurrentBgm(bgm, pos);
};

AudioManager.playEncryptedBgm = function(bgm, pos) {
    var ext = this.audioFileExt();
    var url = this._path + 'bgm/' + encodeURIComponent(bgm.name) + ext;
    url = Decrypter.extToEncryptExt(url);
    Decrypter.decryptHTML5Audio(url, bgm, pos);
};

AudioManager.createBuffer = function(folder, name) {
    var ext = this.audioFileExt();
    var url = this._path + folder + '/' + encodeURIComponent(name) + ext;
    if (this.shouldUseHtml5Audio() && folder === 'bgm') {
        if(this._blobUrl) Html5Audio.setup(this._blobUrl);
        else Html5Audio.setup(url);
        return Html5Audio;
    } else {
        return new WebAudio(url);
    }
};

AudioManager.shouldUseHtml5Audio = function() {
    // We use HTML5 Audio to play BGM instead of Web Audio API
    // because decodeAudioData() is very slow on Android Chrome.
    // 我们使用HTML5的Audio来播放BGM而不是Web Audio API接口
    //因为decodeAudioData()在安卓的Chrome上非常慢
    return Utils.isAndroidChrome() && !Decrypter.hasEncryptedAudio;
};

SceneManager.update = function() {
    try {
        this.tickStart();
        if (Utils.isMobileSafari()) {
            this.updateInputData();
        }
        this.updateMain();
        this.tickEnd();
    } catch (e) {
        this.catchException(e);
    }
};

SceneManager.onKeyDown = function(event) {
    if (!event.ctrlKey && !event.altKey) {
        switch (event.keyCode) {
        case 116:   // F5
            if (Utils.isNwjs()) {
                location.reload();
            }
            break;
        case 119:   // F8
            if (Utils.isNwjs() && Utils.isOptionValid('test')) {
                require('nw.gui').Window.get().showDevTools();
            }
            break;
        }
    }
};

SceneManager.updateMain = function() {
    if (Utils.isMobileSafari()) {
        this.changeScene();
        this.updateScene();
    } else {
        var newTime = this._getTimeInMs();
        var fTime = (newTime - this._currentTime) / 1000;
        if (fTime > 0.25) fTime = 0.25;
        this._currentTime = newTime;
        this._accumulator += fTime;
        while (this._accumulator >= this._deltaTime) {
            this.updateInputData();
            this.changeScene();
            this.updateScene();
            this._accumulator -= this._deltaTime;
        }
    }
    this.renderScene();
    this.requestUpdate();
};

SceneManager.updateManagers = function(ticks, delta) {
    ImageManager.cache.update(ticks, delta);
};

//-----------------------------------------------------------------------------
// 1.3.0 rpg_objects.js 变更
//-----------------------------------------------------------------------------

Game_BattlerBase.prototype.tpRate = function() {
    return this.tp / this.maxTp();
};

//-----------------------------------------------------------------------------
// 1.3.0 rpg_scenes.js 变更
//-----------------------------------------------------------------------------

Scene_Boot.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    DataManager.loadDatabase();
    ConfigManager.load();
    this.loadSystemWindowImage();
};

Scene_Boot.prototype.loadSystemWindowImage = function() {
    ImageManager.loadSystem('Window');
};

Scene_Boot.loadSystemImages = function() {
    ImageManager.loadSystem('IconSet');
    ImageManager.loadSystem('Balloon');
    ImageManager.loadSystem('Shadow1');
    ImageManager.loadSystem('Shadow2');
    ImageManager.loadSystem('Damage');
    ImageManager.loadSystem('States');
    ImageManager.loadSystem('Weapons1');
    ImageManager.loadSystem('Weapons2');
    ImageManager.loadSystem('Weapons3');
    ImageManager.loadSystem('ButtonSet');
};

//-----------------------------------------------------------------------------
// 1.3.0 rpg_sprites.js 变更
//-----------------------------------------------------------------------------

Sprite_Animation.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
    this._reduceArtifacts = true;
    this.initMembers();
};

Sprite_Picture.prototype.initialize = function(pictureId) {
    Sprite.prototype.initialize.call(this);
    this._pictureId = pictureId;
    this._pictureName = '';
    this._isPicture = true;
    this.update();
};

Spriteset_Map.prototype.createTilemap = function() {
    if (Graphics.isWebGL()) {
        this._tilemap = new ShaderTilemap();
    } else {
        this._tilemap = new Tilemap();
    }
    this._tilemap.tileWidth = $gameMap.tileWidth();
    this._tilemap.tileHeight = $gameMap.tileHeight();
    this._tilemap.setData($gameMap.width(), $gameMap.height(), $gameMap.data());
    this._tilemap.horizontalWrap = $gameMap.isLoopHorizontal();
    this._tilemap.verticalWrap = $gameMap.isLoopVertical();
    this.loadTileset();
    this._baseSprite.addChild(this._tilemap);
};

Spriteset_Map.prototype.loadTileset = function() {
    this._tileset = $gameMap.tileset();
    if (this._tileset) {
        var tilesetNames = this._tileset.tilesetNames;
        for (var i = 0; i < tilesetNames.length; i++) {
            this._tilemap.bitmaps[i] = ImageManager.loadTileset(tilesetNames[i]);
        }
        var newTilesetFlags = $gameMap.tilesetFlags();
        this._tilemap.refreshTileset();
        if (!this._tilemap.flags.equals(newTilesetFlags)) {
            this._tilemap.refresh();
        }
        this._tilemap.flags = newTilesetFlags;
    }
};

//=============================================================================
//  版本 1.2.0 到 1.3.0 变更-结束
//=============================================================================

}; // Yanfly.Param.Update130

//-----------------------------------------------------------------------------

//=============================================================================
//  版本 1.3.0 到 1.3.1 变更
//=============================================================================

if (Yanfly.Param.Update131) {

//-----------------------------------------------------------------------------
// 1.3.1 rpg_core.js 变更
//-----------------------------------------------------------------------------

// 将列表中其余插件的版本视为1.3.1版本
Utils.RPGMAKER_VERSION = '1.3.1';
console.log('RPG Maker版本 ' + Utils.RPGMAKER_VERSION + ' 已加载更新');

CacheEntry.prototype.free = function (byTTL) {
    this.freedByTTL = byTTL || false;
    if (this.cached) {
        this.cached = false;
        delete this.cache._inner[this.key];
    }
};

PIXI.GC_MODES.DEFAULT = PIXI.GC_MODES.AUTO;
PIXI.tilemap.TileRenderer.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

ScreenSprite = function() {
    this.initialize.apply(this, arguments);
}

ScreenSprite.prototype = Object.create(PIXI.Container.prototype);
ScreenSprite.prototype.constructor = ScreenSprite;

ScreenSprite.prototype.initialize = function () {
    PIXI.Container.call(this);

    this._graphics = new PIXI.Graphics();
    this.addChild(this._graphics);
    this.opacity = 0;

    this._red = -1;
    this._green = -1;
    this._blue = -1;
    this._colorText = '';
    this.setBlack();
};

Object.defineProperty(ScreenSprite.prototype, 'opacity', {
    get: function () {
        return this.alpha * 255;
    },
    set: function (value) {
        this.alpha = value.clamp(0, 255) / 255;
    },
    configurable: true
});

ScreenSprite.YEPWarned = false;
ScreenSprite.warnYep = function () {
    if (!ScreenSprite.YEPWarned) {
        console.log("弃用警告。请更新YEP_CoreEngine。ScreenSprite不是精灵，它里面有图形。");
        //console.log("Deprecation warning. Please update YEP_CoreEngine. ScreenSprite is not a sprite, it has graphics inside.");
        ScreenSprite.YEPWarned = true;
    }
};

Object.defineProperty(ScreenSprite.prototype, 'anchor', {
    get: function () {
        ScreenSprite.warnYep();
        this.scale.x = 1;
        this.scale.y = 1;
        return {x: 0, y: 0};
    },
    set: function (value) {
        this.alpha = value.clamp(0, 255) / 255;
    },
    configurable: true
});

Object.defineProperty(ScreenSprite.prototype, 'blendMode', {
    get: function () {
        return this._graphics.blendMode;
    },
    set: function (value) {
        this._graphics.blendMode = value;
    },
    configurable: true
});

ScreenSprite.prototype.setBlack = function () {
    this.setColor(0, 0, 0);
};

ScreenSprite.prototype.setWhite = function () {
    this.setColor(255, 255, 255);
};

ScreenSprite.prototype.setColor = function (r, g, b) {
    if (this._red !== r || this._green !== g || this._blue !== b) {
        r = Math.round(r || 0).clamp(0, 255);
        g = Math.round(g || 0).clamp(0, 255);
        b = Math.round(b || 0).clamp(0, 255);
        this._red = r;
        this._green = g;
        this._blue = b;
        this._colorText = Utils.rgbToCssColor(r, g, b);

        var graphics = this._graphics;
        graphics.clear();
        var intColor = (r << 16) | (g << 8) | b;
        graphics.beginFill(intColor, 1);
        graphics.drawRect(-Graphics.width * 5, -Graphics.height * 5, Graphics.width * 10, Graphics.height * 10);
    }
};

WebAudio.prototype._onXhrLoad = function(xhr) {
    var array = xhr.response;
    if(Decrypter.hasEncryptedAudio) array = Decrypter.decryptArrayBuffer(array);
    this._readLoopComments(new Uint8Array(array));
    WebAudio._context.decodeAudioData(array, function(buffer) {
        this._buffer = buffer;
        this._totalTime = buffer.duration;
        if (this._loopLength > 0 && this._sampleRate > 0) {
            this._loopStart /= this._sampleRate;
            this._loopLength /= this._sampleRate;
        } else {
            this._loopStart = 0;
            this._loopLength = this._totalTime;
        }
        this._onLoad();
    }.bind(this));
};

//=============================================================================
//  版本 1.3.0 到 1.3.1 变更-结束
//=============================================================================

}; // Yanfly.Param.Update131

//-----------------------------------------------------------------------------

//=============================================================================
//  版本 1.3.1 到 1.3.2 变更
//=============================================================================

if (Yanfly.Param.Update132) {

//-----------------------------------------------------------------------------
// 1.3.2 rpg_core.js 变更
//-----------------------------------------------------------------------------

// 将列表中其余插件的版本视为1.3.2版本
Utils.RPGMAKER_VERSION = '1.3.2';
console.log('RPG Maker版本 ' + Utils.RPGMAKER_VERSION + ' 已加载更新');

var waitForLoading = false;
var register = false;

handleiOSTouch = function(ev) {
  if (Graphics._video.paused && Graphics.isVideoPlaying())Graphics._video.play();
}

Graphics.playVideo = function(src) {
    this._video.src = src;
    this._video.onloadeddata = this._onVideoLoad.bind(this);
    this._video.onerror = this._onVideoError.bind(this);
    this._video.onended = this._onVideoEnd.bind(this);
    this._video.load();

    if (Utils.isMobileSafari()) {
        waitForLoading = true;
        if (!register) {
            register = true;
            document.addEventListener('touchstart', handleiOSTouch);
        }
    }
};

Graphics.isVideoPlaying = function() {
    if (Utils.isMobileSafari()) return waitForLoading || (this._video && this._isVideoVisible());
    return this._video && this._isVideoVisible();
};

Graphics._onVideoEnd = function() {
    this._updateVisibility(false);

    if (Utils.isMobileSafari()) {
        if (register) {
            document.removeEventListener('touchstart', handleiOSTouch);
            register = false;
        }
    }
};

Input._updateGamepadState = function(gamepad) {
    var lastState = this._gamepadStates[gamepad.index] || [];
    var newState = [];
    var buttons = gamepad.buttons;
    var axes = gamepad.axes;
    var threshold = 0.5;
    newState[12] = false;
    newState[13] = false;
    newState[14] = false;
    newState[15] = false;
    for (var i = 0; i < buttons.length; i++) {
        newState[i] = buttons[i].pressed;
    }
    if (axes[1] < -threshold) {
        newState[12] = true;    // up
    } else if (axes[1] > threshold) {
        newState[13] = true;    // down
    }
    if (axes[0] < -threshold) {
        newState[14] = true;    // left
    } else if (axes[0] > threshold) {
        newState[15] = true;    // right
    }
    for (var j = 0; j < newState.length; j++) {
        if (newState[j] !== lastState[j]) {
            var buttonName = this.gamepadMapper[j];
            if (buttonName) {
                this._currentState[buttonName] = newState[j];
            }
        }
    }
    this._gamepadStates[gamepad.index] = newState;
};

Sprite.prototype.initialize = function(bitmap) {
    var texture = new PIXI.Texture(new PIXI.BaseTexture());

    PIXI.Sprite.call(this, texture);

    this._bitmap = null;
    this._frame = new Rectangle();
    this._realFrame = new Rectangle();
    this._blendColor = [0, 0, 0, 0];
    this._colorTone = [0, 0, 0, 0];
    this._canvas = null;
    this._context = null;
    this._tintTexture = null;

    this._isPicture = false;

    this.spriteId = Sprite._counter++;
    this.opaque = false;

    this.bitmap = bitmap;
};

Sprite.prototype._refresh = function() {
    var frameX = Math.floor(this._frame.x);
    var frameY = Math.floor(this._frame.y);
    var frameW = Math.floor(this._frame.width);
    var frameH = Math.floor(this._frame.height);
    var bitmapW = this._bitmap ? this._bitmap.width : 0;
    var bitmapH = this._bitmap ? this._bitmap.height : 0;
    var realX = frameX.clamp(0, bitmapW);
    var realY = frameY.clamp(0, bitmapH);
    var realW = (frameW - realX + frameX).clamp(0, bitmapW - realX);
    var realH = (frameH - realY + frameY).clamp(0, bitmapH - realY);

    this._realFrame.x = realX;
    this._realFrame.y = realY;
    this._realFrame.width = realW;
    this._realFrame.height = realH;
    this.pivot.x = frameX - realX;
    this.pivot.y = frameY - realY;

    if (realW > 0 && realH > 0) {
        if (this._needsTint()) {
            this._createTinter(realW, realH);
            this._executeTint(realX, realY, realW, realH);
            this._tintTexture.update();
            this.texture.baseTexture = this._tintTexture;
            this.texture.frame = new Rectangle(0, 0, realW, realH);
        } else {
            if (this._bitmap) {
                this.texture.baseTexture = this._bitmap.baseTexture;
            }
            this.texture.frame = this._realFrame;
        }
    } else if (this._bitmap) {
        this.texture.frame = Rectangle.emptyRectangle;
    } else {
        //TODO: remove this
        //待办事项：移除它
        this.texture.baseTexture.width = Math.max(this.texture.baseTexture.width, this._frame.x + this._frame.width);
        this.texture.baseTexture.height = Math.max(this.texture.baseTexture.height, this._frame.y + this._frame.height);
        this.texture.frame = this._frame;
    }
    this.texture._updateID++;
};

Sprite.prototype.updateTransform = function() {
};

TilingSprite = function() {
    this.initialize.apply(this, arguments);
}

TilingSprite.prototype = Object.create(PIXI.extras.PictureTilingSprite.prototype);
TilingSprite.prototype.constructor = TilingSprite;

TilingSprite.prototype.initialize = function(bitmap) {
    var texture = new PIXI.Texture(new PIXI.BaseTexture());

    PIXI.extras.PictureTilingSprite.call(this, texture);

    this._bitmap = null;
    this._width = 0;
    this._height = 0;
    this._frame = new Rectangle();
    this.spriteId = Sprite._counter++;

    this.origin = new Point();

    this.bitmap = bitmap;
};

TilingSprite.prototype._renderCanvas_PIXI = PIXI.extras.PictureTilingSprite.prototype._renderCanvas;
TilingSprite.prototype._renderWebGL_PIXI = PIXI.extras.PictureTilingSprite.prototype._renderWebGL;

TilingSprite.prototype._renderCanvas = function(renderer) {
    if (this._bitmap) {
        this._bitmap.touch();
    }
    if (this.texture.frame.width > 0 && this.texture.frame.height > 0) {
        this._renderCanvas_PIXI(renderer);
    }
};

TilingSprite.prototype._renderWebGL = function(renderer) {
    if (this._bitmap) {
        this._bitmap.touch();
    }
    if (this.texture.frame.width > 0 && this.texture.frame.height > 0) {
        if (this._bitmap) {
            this._bitmap.checkDirty();
        }
        this._renderWebGL_PIXI(renderer);
    }
};

Object.defineProperty(TilingSprite.prototype, 'bitmap', {
    get: function() {
        return this._bitmap;
    },
    set: function(value) {
        if (this._bitmap !== value) {
            this._bitmap = value;
            if (this._bitmap) {
                this._bitmap.addLoadListener(this._onBitmapLoad.bind(this));
            } else {
                this.texture.frame = Rectangle.emptyRectangle;
            }
        }
    },
    configurable: true
});

Object.defineProperty(TilingSprite.prototype, 'opacity', {
    get: function() {
        return this.alpha * 255;
    },
    set: function(value) {
        this.alpha = value.clamp(0, 255) / 255;
    },
    configurable: true
});

TilingSprite.prototype.update = function() {
    this.children.forEach(function(child) {
        if (child.update) {
            child.update();
        }
    });
};

TilingSprite.prototype.move = function(x, y, width, height) {
    this.x = x || 0;
    this.y = y || 0;
    this._width = width || 0;
    this._height = height || 0;
};

TilingSprite.prototype.setFrame = function(x, y, width, height) {
    this._frame.x = x;
    this._frame.y = y;
    this._frame.width = width;
    this._frame.height = height;
    this._refresh();
};

TilingSprite.prototype.updateTransform = function() {
    this.tilePosition.x = Math.round(-this.origin.x);
    this.tilePosition.y = Math.round(-this.origin.y);
    this.updateTransformTS();
};

TilingSprite.prototype.updateTransformTS = PIXI.extras.TilingSprite.prototype.updateTransform;

TilingSprite.prototype._onBitmapLoad = function() {
    this.texture.baseTexture = this._bitmap.baseTexture;
    this._refresh();
};

TilingSprite.prototype._refresh = function() {
    var frame = this._frame.clone();
    if (frame.width === 0 && frame.height === 0 && this._bitmap) {
        frame.width = this._bitmap.width;
        frame.height = this._bitmap.height;
    }
    this.texture.frame = frame;
    this.texture._updateID++;
    this.tilingTexture = null;
};


TilingSprite.prototype._speedUpCustomBlendModes = Sprite.prototype._speedUpCustomBlendModes;

TilingSprite.prototype._renderWebGL = function(renderer) {
    if (this._bitmap) {
        this._bitmap.touch();
        this._bitmap.checkDirty();
    }

    this._speedUpCustomBlendModes(renderer);

    this._renderWebGL_PIXI(renderer);
};

WindowLayer.prototype.initialize = function() {
    PIXI.Container.call(this);
    this._width = 0;
    this._height = 0;
    this._tempCanvas = null;
    this._translationMatrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];

    this._windowMask = new PIXI.Graphics();
    this._windowMask.beginFill(0xffffff, 1);
    this._windowMask.drawRect(0, 0, 0, 0);
    this._windowMask.endFill();
    this._windowRect = this._windowMask.graphicsData[0].shape;

    this._renderSprite = null;
    this.filterArea = new PIXI.Rectangle();
    this.filters = [WindowLayer.voidFilter];

    //temporary fix for memory leak bug
    //内存泄漏错误的临时修复程序
    this.on('removed', this.onRemoveAsAChild);
};

WindowLayer.prototype.onRemoveAsAChild = function() {
    this.removeChildren();
}

WindowLayer.prototype.renderWebGL = function(renderer) {
    if (!this.visible || !this.renderable) {
        return;
    }

    renderer.currentRenderer.flush();
    this.filterArea.copy(this);
    renderer.filterManager.pushFilter(this, this.filters);
    renderer.currentRenderer.start();

    var shift = new PIXI.Point();
    var rt = renderer._activeRenderTarget;
    var projectionMatrix = rt.projectionMatrix;
    shift.x = (projectionMatrix.tx + 1) / 2 * rt.size.width;
    shift.y = (projectionMatrix.ty + 1) / 2 * rt.size.height;

    for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        if (child._isWindow && child.visible && child.openness > 0) {
            this._maskWindow(child, shift);
            renderer.maskManager.pushScissorMask(this, this._windowMask);
            renderer.clear();
            renderer.maskManager.popScissorMask();
            renderer.currentRenderer.start();
            child.renderWebGL(renderer);
            renderer.currentRenderer.flush();
        }
    }

    renderer.filterManager.popFilter();
    renderer.maskManager.popScissorMask();

    for (var j = 0; j < this.children.length; j++) {
        if (!this.children[j]._isWindow) {
            this.children[j].renderWebGL(renderer);
        }
    }
};

WindowLayer.prototype._maskWindow = function(window, shift) {
    this._windowMask._currentBounds = null;
    this._windowMask.boundsDirty = true;
    var rect = this._windowRect;
    rect.x = shift.x + window.x;
    rect.y = shift.y + window.y + window.height / 2 * (1 - window._openness / 255);
    rect.width = window.width;
    rect.height = window.height * window._openness / 255;
};

//-----------------------------------------------------------------------------
// 1.3.2 rpg_managers.js 变更
//-----------------------------------------------------------------------------

BattleManager.invokeCounterAttack = function(subject, target) {
    var action = new Game_Action(target);
    action.setAttack();
    action.apply(subject);
    this._logWindow.displayCounter(target);
    this._logWindow.displayActionResults(target, subject);
};

BattleManager.invokeMagicReflection = function(subject, target) {
  this._action._reflectionTarget = target;
    this._logWindow.displayReflection(target);
    this._action.apply(subject);
    this._logWindow.displayActionResults(target, subject);
};

//-----------------------------------------------------------------------------
// 1.3.2 rpg_objects.js 变更
//-----------------------------------------------------------------------------

Game_Action.prototype.gainDrainedHp = function(value) {
    if (this.isDrain()) {
       var gainTarget = this.subject();
       if (this._reflectionTarget !== undefined) {
            gainTarget = this._reflectionTarget;
        }
       gainTarget.gainHp(value);
    }
};

Game_Action.prototype.gainDrainedMp = function(value) {
    if (this.isDrain()) {
       var gainTarget = this.subject();
       if (this._reflectionTarget !== undefined) {
           gainTarget = this._reflectionTarget;
       }
       gainTarget.gainMp(value);
    }
};

// Show Battle Animation - 显示战斗动画
Game_Interpreter.prototype.command337 = function() {
    if (this._params[2] == true) {
        this.iterateEnemyIndex(-1,function(enemy) {
            if (enemy.isAlive()) {
                enemy.startAnimation(this._params[1],false,0);
            }
        }.bind(this));
    } else {
        this.iterateEnemyIndex(this._params[0], function (enemy) {
            if (enemy.isAlive()) {
                enemy.startAnimation(this._params[1], false, 0);
            }
        }.bind(this));
    }
    return true;
};

//-----------------------------------------------------------------------------
// 1.3.2 rpg_scenes.js 变更
//-----------------------------------------------------------------------------

Scene_Map.prototype.terminate = function() {
    this._bypassFirstClear = true;
    Scene_Base.prototype.terminate.call(this);
    if (!SceneManager.isNextScene(Scene_Battle)) {
        this._spriteset.update();
        this._mapNameWindow.hide();
        SceneManager.snapForBackground();
    }
    $gameScreen.clearZoom();
    //TODO: Ivan: investigate why is it working, what keeps Scene_Map from freeing stuff
    //待办事项：Ivan：调查它为什么有效，是什么阻止Scene_Map释放内容
    this.removeChild(this._fadeSprite);
    this.removeChild(this._mapNameWindow);
    this.removeChild(this._windowLayer);
    this.removeChild(this._spriteset);
    this.clearChildren();
};

//=============================================================================
//  版本 1.3.1 到 1.3.2 变更-结束
//=============================================================================

}; // Yanfly.Param.Update132

//-----------------------------------------------------------------------------

//=============================================================================
//  版本 1.3.2 到 1.3.3 变更
//=============================================================================

if (Yanfly.Param.Update133) {

//-----------------------------------------------------------------------------
// 1.3.3 rpg_core.js 变更
//-----------------------------------------------------------------------------

// 将列表中其余插件的版本视为1.3.3版本
Utils.RPGMAKER_VERSION = '1.3.3';
console.log('RPG Maker版本 ' + Utils.RPGMAKER_VERSION + ' 已加载更新');

//=============================================================================
//  版本 1.3.2 到 1.3.3 变更-结束
//=============================================================================

}; // Yanfly.Param.Update133

//-----------------------------------------------------------------------------

//=============================================================================
//  版本 1.3.3 到 1.3.4 变更
//=============================================================================

if (Yanfly.Param.Update134) {

//-----------------------------------------------------------------------------
// 1.3.4 rpg_core.js 变更
//-----------------------------------------------------------------------------

// 将列表中其余插件的版本视为1.3.4版本
Utils.RPGMAKER_VERSION = '1.3.4';
console.log('RPG Maker版本 ' + Utils.RPGMAKER_VERSION + ' 已加载更新');

Bitmap.snap = function(stage) {
    var width = Graphics.width;
    var height = Graphics.height;
    var bitmap = new Bitmap(width, height);
    var context = bitmap._context;
    var renderTexture = PIXI.RenderTexture.create(width, height);
    if (stage) {
        Graphics._renderer.render(stage, renderTexture);
        stage.worldTransform.identity();
        var canvas = null;
        if (Graphics.isWebGL()) {
            canvas = Graphics._renderer.extract.canvas(renderTexture);
        } else {
            canvas = renderTexture.baseTexture._canvasRenderTarget.canvas;
        }
        context.drawImage(canvas, 0, 0);
    } else {
        //TODO: Ivan: what if stage is not present?
        //待办事项：Ivan：如果舞台不在怎么办？
    }
    renderTexture.destroy({ destroyBase: true });
    bitmap._setDirty();
    return bitmap;
};

TilingSprite.prototype.updateTransform = function() {
    this.tilePosition.x = Math.round(-this.origin.x);
    this.tilePosition.y = Math.round(-this.origin.y);
    this.updateTransformTS();
};

WindowLayer.prototype.renderWebGL = function(renderer) {
    if (!this.visible || !this.renderable) {
        return;
    }

    renderer.currentRenderer.flush();
    this.filterArea.copy(this);
    renderer.filterManager.pushFilter(this, this.filters);
    renderer.currentRenderer.start();

    var shift = new PIXI.Point();
    var rt = renderer._activeRenderTarget;
    var projectionMatrix = rt.projectionMatrix;
    shift.x = Math.round((projectionMatrix.tx + 1) / 2 * rt.sourceFrame.width);
    shift.y = Math.round((projectionMatrix.ty + 1) / 2 * rt.sourceFrame.height);

    for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        if (child._isWindow && child.visible && child.openness > 0) {
            this._maskWindow(child, shift);
            renderer.maskManager.pushScissorMask(this, this._windowMask);
            renderer.clear();
            renderer.maskManager.popScissorMask();
            renderer.currentRenderer.start();
            child.renderWebGL(renderer);
            renderer.currentRenderer.flush();
        }
    }

    renderer.filterManager.popFilter();
    renderer.maskManager.popScissorMask();

    for (var j = 0; j < this.children.length; j++) {
        if (!this.children[j]._isWindow) {
            this.children[j].renderWebGL(renderer);
        }
    }
};

//-----------------------------------------------------------------------------
// 1.3.4 rpg_managers.js 变更
//-----------------------------------------------------------------------------

BattleManager.updateEvent = function() {
    switch (this._phase) {
        case 'start':
        case 'turn':
        case 'turnEnd':
            if (this.isActionForced()) {
                this.processForcedAction();
                return true;
            } else {
                return this.updateEventMain();
            }
    }
    return this.checkAbort2();
};

BattleManager.checkAbort2 = function() {
    if ($gameParty.isEmpty() || this.isAborting()) {
        SoundManager.playEscape();
        this._escaped = true;
        this.processAbort();
    }
    return false;
};

BattleManager.updateBattleEnd = function() {
    if (this.isBattleTest()) {
        AudioManager.stopBgm();
        SceneManager.exit();
    } else if (!this._escaped && $gameParty.isAllDead()) {
        if (this._canLose) {
            $gameParty.reviveBattleMembers();
            SceneManager.pop();
        } else {
            SceneManager.goto(Scene_Gameover);
        }
    } else {
        SceneManager.pop();
    }
    this._phase = null;
};

//-----------------------------------------------------------------------------
// 1.3.4 rpg_objects.js 变更
//-----------------------------------------------------------------------------

Game_Actor.prototype.hasSkill = function(skillId) {
    return this.skills().contains($dataSkills[skillId]);
};

Game_Actor.prototype.testEscape = function(item) {
    return item.effects.some(function(effect, index, ar) {
        return effect && effect.code === Game_Action.EFFECT_SPECIAL;
    });
};

Game_Actor.prototype.meetsUsableItemConditions = function(item) {
    if($gameParty.inBattle() && !BattleManager.canEscape() && this.testEscape(item)){
        return false;
    }
    return this.canMove() && this.isOccasionOk(item);
};

// Conditional Branch - 条件分支
Game_Interpreter.prototype.command111 = function() {
    var result = false;
    switch (this._params[0]) {
        case 0: // Switch
          if (this._params[2] === 0) {
            result = $gameSwitches.value(this._params[1]);
          } else {
            result = !$gameSwitches.value(this._params[1]);
          }
          this._branch[this._indent] = result;
          if (this._branch[this._indent] === false) this.skipBranch();
          return true
          break;
        case 1:  // Variable
            var value1 = $gameVariables.value(this._params[1]);
            var value2;
            if (this._params[2] === 0) {
                value2 = this._params[3];
            } else {
                value2 = $gameVariables.value(this._params[3]);
            }
            switch (this._params[4]) {
                case 0:  // Equal to
                    result = (value1 === value2);
                    break;
                case 1:  // Greater than or Equal to
                    result = (value1 >= value2);
                    break;
                case 2:  // Less than or Equal to
                    result = (value1 <= value2);
                    break;
                case 3:  // Greater than
                    result = (value1 > value2);
                    break;
                case 4:  // Less than
                    result = (value1 < value2);
                    break;
                case 5:  // Not Equal to
                    result = (value1 !== value2);
                    break;
            }
            break;
        case 2: // Self Switch
          if (this._eventId > 0) {
            var key = [this._mapId, this._eventId, this._params[1]];
            if (this._params[2] === 0) {
              result = $gameSelfSwitches.value(key);
            } else {
              result = !$gameSelfSwitches.value(key);
            }
          }
          this._branch[this._indent] = result;
          if (this._branch[this._indent] === false) this.skipBranch();
          return true
          break;
        case 3:  // Timer
            if ($gameTimer.isWorking()) {
                if (this._params[2] === 0) {
                    result = ($gameTimer.seconds() >= this._params[1]);
                } else {
                    result = ($gameTimer.seconds() <= this._params[1]);
                }
            }
            break;
        case 4:  // Actor
            var actor = $gameActors.actor(this._params[1]);
            if (actor) {
                var n = this._params[3];
                switch (this._params[2]) {
                    case 0:  // In the Party
                        result = $gameParty.members().contains(actor);
                        break;
                    case 1:  // Name
                        result = (actor.name() === n);
                        break;
                    case 2:  // Class
                        result = actor.isClass($dataClasses[n]);
                        break;
                    case 3:  // Skill
                        result = actor.hasSkill(n);
                        break;
                    case 4:  // Weapon
                        result = actor.hasWeapon($dataWeapons[n]);
                        break;
                    case 5:  // Armor
                        result = actor.hasArmor($dataArmors[n]);
                        break;
                    case 6:  // State
                        result = actor.isStateAffected(n);
                        break;
                }
            }
            break;
        case 5:  // Enemy
            var enemy = $gameTroop.members()[this._params[1]];
            if (enemy) {
                switch (this._params[2]) {
                    case 0:  // Appeared
                        result = enemy.isAlive();
                        break;
                    case 1:  // State
                        result = enemy.isStateAffected(this._params[3]);
                        break;
                }
            }
            break;
        case 6:  // Character
            var character = this.character(this._params[1]);
            if (character) {
                result = (character.direction() === this._params[2]);
            }
            break;
        case 7:  // Gold
            switch (this._params[2]) {
                case 0:  // Greater than or equal to
                    result = ($gameParty.gold() >= this._params[1]);
                    break;
                case 1:  // Less than or equal to
                    result = ($gameParty.gold() <= this._params[1]);
                    break;
                case 2:  // Less than
                    result = ($gameParty.gold() < this._params[1]);
                    break;
            }
            break;
        case 8:  // Item
            result = $gameParty.hasItem($dataItems[this._params[1]]);
            break;
        case 9:  // Weapon
            result = $gameParty.hasItem($dataWeapons[this._params[1]], this._params[2]);
            break;
        case 10:  // Armor
            result = $gameParty.hasItem($dataArmors[this._params[1]], this._params[2]);
            break;
        case 11:  // Button
            result = Input.isPressed(this._params[1]);
            break;
        case 12:  // Script
            var code = this._params[1];
            try {
              result = !!eval(code);
            } catch (e) {
              result = false;
              Yanfly.Util.displayError(e, code, '条件分支脚本错误');
              //Yanfly.Util.displayError(e, code, 'CONDITIONAL BRANCH SCRIPT ERROR');
            }
            this._branch[this._indent] = result;
            if (this._branch[this._indent] === false) this.skipBranch();
            return true
            break;
        case 13:  // Vehicle
            result = ($gamePlayer.vehicle() === $gameMap.vehicle(this._params[1]));
            break;
    }
    this._branch[this._indent] = result;
    if (this._branch[this._indent] === false) {
        this.skipBranch();
    }
    return true;
};

//=============================================================================
//  版本 1.3.3 到 1.3.4 变更-结束
//=============================================================================

}; // Yanfly.Param.Update134

//-----------------------------------------------------------------------------

//=============================================================================
//  版本 1.3.4 到 1.4.0 变更
//=============================================================================

if (Yanfly.Param.Update140) {

//-----------------------------------------------------------------------------
// 1.4.0 rpg_core.js 变更
//-----------------------------------------------------------------------------

// 将列表中其余插件的版本视为1.4.0版本
Utils.RPGMAKER_VERSION = '1.4.0';
console.log('RPG Maker版本 ' + Utils.RPGMAKER_VERSION + ' 已加载更新');

WebAudio._setupEventHandlers = function() {
    document.addEventListener("touchend", function() {
            var context = WebAudio._context;
            if (context && context.state === "suspended" && typeof context.resume === "function") {
                context.resume().then(function() {
                    WebAudio._onTouchStart();
                })
            } else {
                WebAudio._onTouchStart();
            }
    });
    document.addEventListener('touchstart', this._onTouchStart.bind(this));
    document.addEventListener('visibilitychange', this._onVisibilityChange.bind(this));
};

//-----------------------------------------------------------------------------
// 1.4.0 rpg_managers.js 变更
//-----------------------------------------------------------------------------

AudioManager.shouldUseHtml5Audio = function() {
    // The only case where we wanted html5audio was android/ no encrypt
    // Atsuma-ru asked to force webaudio there too, so just return false for ALL    // return Utils.isAndroidChrome() && !Decrypter.hasEncryptedAudio;
    //我们想要html5 audio的唯一情况是安卓/无加密
    //Atsuma-ru也要求在那里强制使用网络音频，所以只需为ALL返回false
    // return Utils.isAndroidChrome() && !Decrypter.hasEncryptedAudio;
 return false;
};

//-----------------------------------------------------------------------------
// 1.4.0 rpg_objects.js 变更
//-----------------------------------------------------------------------------

Game_Actor.prototype.meetsUsableItemConditions = function(item) {
    if ($gameParty.inBattle() && !BattleManager.canEscape() && this.testEscape(item)) {
        return false;
    }
    return Game_BattlerBase.prototype.meetsUsableItemConditions.call(this, item);
};

//=============================================================================
//  版本 1.3.4 到 1.4.0 变更-结束
//=============================================================================

}; // Yanfly.Param.Update140

//-----------------------------------------------------------------------------

//=============================================================================
//  版本 1.4.0 到 1.5.0 变更
//=============================================================================

if (Yanfly.Param.Update150) {

//-----------------------------------------------------------------------------
// 1.5.0 rpg_core.js 变更
//-----------------------------------------------------------------------------

// 将列表中其余插件的版本视为1.5.0版本
Utils.RPGMAKER_VERSION = '1.5.0';
console.log('RPG Maker版本 ' + Utils.RPGMAKER_VERSION + ' 已加载更新');

Utils._id = 1;
Utils.generateRuntimeId = function(){
    return Utils._id++;
};

Utils._supportPassiveEvent = null;

Utils.isSupportPassiveEvent = function() {
    if (typeof Utils._supportPassiveEvent === "boolean") {
        return Utils._supportPassiveEvent;
    }
    // test support passive event
    // 测试支持被动事件
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
    var passive = false;
    var options = Object.defineProperty({}, "passive", {
        get: function() { passive = true; }
    });
    window.addEventListener("test", null, options);
    Utils._supportPassiveEvent = passive;
    return passive;
}

ImageCache = function(){
    this.initialize.apply(this, arguments);
}

ImageCache.limit = 10 * 1000 * 1000;

ImageCache.prototype.initialize = function(){
    this._items = {};
};

ImageCache.prototype.add = function(key, value){
    this._items[key] = {
        bitmap: value,
        touch: Date.now(),
        key: key
    };

    this._truncateCache();
};

ImageCache.prototype.get = function(key){
    if(this._items[key]){
        var item = this._items[key];
        item.touch = Date.now();
        return item.bitmap;
    }

    return null;
};

ImageCache.prototype.reserve = function(key, value, reservationId){
    if(!this._items[key]){
        this._items[key] = {
            bitmap: value,
            touch: Date.now(),
            key: key
        };
    }

    this._items[key].reservationId = reservationId;
};

ImageCache.prototype.releaseReservation = function(reservationId){
    var items = this._items;

    Object.keys(items)
        .map(function(key){return items[key];})
        .forEach(function(item){
            if(item.reservationId === reservationId){
                delete item.reservationId;
            }
        });
};

ImageCache.prototype._truncateCache = function(){
    var items = this._items;
    var sizeLeft = ImageCache.limit;

    Object.keys(items).map(function(key){
        return items[key];
    }).sort(function(a, b){
        return b.touch - a.touch;
    }).forEach(function(item){
        if(sizeLeft > 0 || this._mustBeHeld(item)){
            var bitmap = item.bitmap;
            sizeLeft -= bitmap.width * bitmap.height;
        }else{
            delete items[item.key];
        }
    }.bind(this));
};

ImageCache.prototype._mustBeHeld = function(item){
    // request only is weak so It's purgeable
    // 请求很弱，因此可以清除
    if(item.bitmap.isRequestOnly()) return false;
    // reserved item must be held
    // 必须保留保留项目
    if(item.reservationId) return true;
    // not ready bitmap must be held (because of checking isReady())
    // 必须保留未就绪位图（因为检查isReady()）
    if(!item.bitmap.isReady()) return true;
    // then the item may purgeable
    // 那么该物品可以清除
    return false;
};

ImageCache.prototype.isReady = function(){
    var items = this._items;
    return !Object.keys(items).some(function(key){
        return !items[key].bitmap.isRequestOnly() && !items[key].bitmap.isReady();
    });
};

ImageCache.prototype.getErrorBitmap = function(){
    var items = this._items;
    var bitmap = null;
    if(Object.keys(items).some(function(key){
            if(items[key].bitmap.isError()){
                bitmap = items[key].bitmap;
                return true;
            }
            return false;
        })) {
        return bitmap;
    }

    return null;
};

RequestQueue = function(){
    this.initialize.apply(this, arguments);
}

RequestQueue.prototype.initialize = function(){
    this._queue = [];
};

RequestQueue.prototype.enqueue = function(key, value){
    this._queue.push({
        key: key,
        value: value,
    });
};

RequestQueue.prototype.update = function(){
    if(this._queue.length === 0) return;

    var top = this._queue[0];
    if(top.value.isRequestReady()){
        this._queue.shift();
        if(this._queue.length !== 0){
            this._queue[0].value.startRequest();
        }
    }else{
        top.value.startRequest();
    }
};

RequestQueue.prototype.raisePriority = function(key){
    for(var n = 0; n < this._queue.length; n++){
        var item = this._queue[n];
        if(item.key === key){
            this._queue.splice(n, 1);
            this._queue.unshift(item);
            break;
        }
    }
};

RequestQueue.prototype.clear = function(){
    this._queue.splice(0);
};

Bitmap._reuseImages = [];

Bitmap.prototype._createCanvas = function(width, height){
    this.__canvas = this.__canvas || document.createElement('canvas');
    this.__context = this.__canvas.getContext('2d');

    this.__canvas.width = Math.max(width || 0, 1);
    this.__canvas.height = Math.max(height || 0, 1);

    if(this._image){
        var w = Math.max(this._image.width || 0, 1);
        var h = Math.max(this._image.height || 0, 1);
        this.__canvas.width = w;
        this.__canvas.height = h;
        this._createBaseTexture(this._canvas);

        this.__context.drawImage(this._image, 0, 0);
    }

    this._setDirty();
};

Bitmap.prototype._createBaseTexture = function(source){
    this.__baseTexture = new PIXI.BaseTexture(source);
    this.__baseTexture.mipmap = false;
    this.__baseTexture.width = source.width;
    this.__baseTexture.height = source.height;

    if (this._smooth) {
        this._baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
    } else {
        this._baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    }
};

Bitmap.prototype._clearImgInstance = function(){
    this._image.src = "";
    this._image.onload = null;
    this._image.onerror = null;
    this._errorListener = null;
    this._loadListener = null;

    Bitmap._reuseImages.push(this._image);
    this._image = null;
};

Object.defineProperties(Bitmap.prototype, {
    _canvas: {
        get: function(){
            if(!this.__canvas)this._createCanvas();
            return this.__canvas;
        }
    },
    _context: {
        get: function(){
            if(!this.__context)this._createCanvas();
            return this.__context;
        }
    },

    _baseTexture: {
        get: function(){
            if(!this.__baseTexture) this._createBaseTexture(this._image || this.__canvas);
            return this.__baseTexture;
        }
    }
});

Bitmap.prototype._renewCanvas = function(){
    var newImage = this._image;
    if(newImage && this.__canvas && (this.__canvas.width < newImage.width || this.__canvas.height < newImage.height)){
        this._createCanvas();
    }
};

Bitmap.prototype.initialize = function(width, height) {
    if(!this._defer){
        this._createCanvas(width, height);
    }

    this._image = null;
    this._url = '';
    this._paintOpacity = 255;
    this._smooth = false;
    this._loadListeners = [];
    this._loadingState = 'none';
    this._decodeAfterRequest = false;

    this.cacheEntry = null;

    this.fontFace = 'GameFont';

    this.fontSize = 28;

    this.fontItalic = false;

    this.textColor = '#ffffff';

    this.outlineColor = 'rgba(0, 0, 0, 0.5)';

    this.outlineWidth = 4;
};

Bitmap.load = function(url) {
    var bitmap = Object.create(Bitmap.prototype);
    bitmap._defer = true;
    bitmap.initialize();

    bitmap._decodeAfterRequest = true;
    bitmap._requestImage(url);

    return bitmap;
};

Bitmap.prototype.isReady = function() {
    return this._loadingState === 'loaded' || this._loadingState === 'none';
};

Bitmap.prototype.isError = function() {
    return this._loadingState === 'error';
};

Object.defineProperty(Bitmap.prototype, 'width', {
    get: function() {
        if(this.isReady()){
            return this._image? this._image.width: this._canvas.width;
        }

        return 0;
    },
    configurable: true
});

Object.defineProperty(Bitmap.prototype, 'height', {
    get: function() {
        if(this.isReady()){
            return this._image? this._image.height: this._canvas.height;
        }

        return 0;
    },
    configurable: true
});

Object.defineProperty(Bitmap.prototype, 'smooth', {
    get: function() {
        return this._smooth;
    },
    set: function(value) {
        if (this._smooth !== value) {
            this._smooth = value;
            if(this.__baseTexture){
                if (this._smooth) {
                    this._baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
                } else {
                    this._baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
                }
            }
        }
    },
    configurable: true
});

Bitmap.prototype.addLoadListener = function(listner) {
    if (!this.isReady()) {
        this._loadListeners.push(listner);
    } else {
        listner(this);
    }
};

Bitmap.prototype._onLoad = function() {
    this._image.removeEventListener('load', this._loadListener);
    this._image.removeEventListener('error', this._errorListener);

    this._renewCanvas();

    switch(this._loadingState){
        case 'requesting':
            this._loadingState = 'requestCompleted';
            if(this._decodeAfterRequest){
                this.decode();
            }else{
                this._loadingState = 'purged';
                this._clearImgInstance();
            }
            break;

        case 'decrypting':
            window.URL.revokeObjectURL(this._image.src);
            this._loadingState = 'decryptCompleted';
            if(this._decodeAfterRequest){
                this.decode();
            }else{
                this._loadingState = 'purged';
                this._clearImgInstance();
            }
            break;
    }
};

Bitmap.prototype.decode = function(){
    switch(this._loadingState){
        case 'requestCompleted': case 'decryptCompleted':
            this._loadingState = 'loaded';

            if(!this.__canvas) this._createBaseTexture(this._image);
            this._setDirty();
            this._callLoadListeners();
            break;

        case 'requesting': case 'decrypting':
            this._decodeAfterRequest = true;
            if (!this._loader) {
                this._loader = ResourceHandler.createLoader(this._url, this._requestImage.bind(this, this._url), this._onError.bind(this));
                this._image.removeEventListener('error', this._errorListener);
                this._image.addEventListener('error', this._errorListener = this._loader);
            }
            break;

        case 'pending': case 'purged': case 'error':
            this._decodeAfterRequest = true;
            this._requestImage(this._url);
            break;
    }
};

Bitmap.prototype._callLoadListeners = function() {
    while (this._loadListeners.length > 0) {
        var listener = this._loadListeners.shift();
        listener(this);
    }
};

Bitmap.prototype._onError = function() {
    this._image.removeEventListener('load', this._loadListener);
    this._image.removeEventListener('error', this._errorListener);
    this._loadingState = 'error';
};

Bitmap.request = function(url){
    var bitmap = Object.create(Bitmap.prototype);
    bitmap._defer = true;
    bitmap.initialize();

    bitmap._url = url;
    bitmap._loadingState = 'pending';

    return bitmap;
};

Bitmap.prototype._requestImage = function(url){
    if(Bitmap._reuseImages.length !== 0){
        this._image = Bitmap._reuseImages.pop();
    }else{
        this._image = new Image();
    }

    if (this._decodeAfterRequest && !this._loader) {
        this._loader = ResourceHandler.createLoader(url, this._requestImage.bind(this, url), this._onError.bind(this));
    }

    this._image = new Image();
    this._url = url;
    this._loadingState = 'requesting';

    if(!Decrypter.checkImgIgnore(url) && Decrypter.hasEncryptedImages) {
        this._loadingState = 'decrypting';
        Decrypter.decryptImg(url, this);
    } else {
        this._image.src = url;

        this._image.addEventListener('load', this._loadListener = Bitmap.prototype._onLoad.bind(this));
        this._image.addEventListener('error', this._errorListener = this._loader || Bitmap.prototype._onError.bind(this));
    }
};

Bitmap.prototype.isRequestOnly = function(){
    return !(this._decodeAfterRequest || this.isReady());
};

Bitmap.prototype.isRequestReady = function(){
    return this._loadingState !== 'pending' &&
        this._loadingState !== 'requesting' &&
        this._loadingState !== 'decrypting';
};

Bitmap.prototype.startRequest = function(){
    if(this._loadingState === 'pending'){
        this._decodeAfterRequest = false;
        this._requestImage(this._url);
    }
};

Graphics._cssFontLoading =  document.fonts && document.fonts.ready;
Graphics._fontLoaded = null;
Graphics._videoVolume = 1;

Graphics.initialize = function(width, height, type) {
    this._width = width || 800;
    this._height = height || 600;
    this._rendererType = type || 'auto';
    this._boxWidth = this._width;
    this._boxHeight = this._height;

    this._scale = 1;
    this._realScale = 1;

    this._errorShowed = false;
    this._errorPrinter = null;
    this._canvas = null;
    this._video = null;
    this._videoUnlocked = !Utils.isMobileDevice();
    this._videoLoading = false;
    this._upperCanvas = null;
    this._renderer = null;
    this._fpsMeter = null;
    this._modeBox = null;
    this._skipCount = 0;
    this._maxSkip = 3;
    this._rendered = false;
    this._loadingImage = null;
    this._loadingCount = 0;
    this._fpsMeterToggled = false;
    this._stretchEnabled = this._defaultStretchMode();

    this._canUseDifferenceBlend = false;
    this._canUseSaturationBlend = false;
    this._hiddenCanvas = null;

    this._testCanvasBlendModes();
    this._modifyExistingElements();
    this._updateRealScale();
    this._createAllElements();
    this._disableTextSelection();
    this._disableContextMenu();
    this._setupEventHandlers();
    this._setupCssFontLoading();
};

Graphics._setupCssFontLoading = function(){
    if(Graphics._cssFontLoading){
        document.fonts.ready.then(function(fonts){
            Graphics._fontLoaded = fonts;
        }).catch(function(error){
            SceneManager.onError(error);
        });
    }
};

Graphics.canUseCssFontLoading = function(){
    return !!this._cssFontLoading;
};

Graphics.render = function(stage) {
    if (this._skipCount === 0) {
        var startTime = Date.now();
        if (stage) {
            this._renderer.render(stage);
            if (this._renderer.gl && this._renderer.gl.flush) {
                this._renderer.gl.flush();
            }
        }
        var endTime = Date.now();
        var elapsed = endTime - startTime;
        this._skipCount = Math.min(Math.floor(elapsed / 15), this._maxSkip);
        this._rendered = true;
    } else {
        this._skipCount--;
        this._rendered = false;
    }
    this.frameCount++;
};

Graphics.printLoadingError = function(url) {
    if (this._errorPrinter && !this._errorShowed) {
        this._errorPrinter.innerHTML = this._makeErrorHtml('Loading Error', '加载失败：' + url);
        var button = document.createElement('button');
        button.innerHTML = 'Retry';
        button.style.fontSize = '24px';
        button.style.color = '#ffffff';
        button.style.backgroundColor = '#000000';
        button.onmousedown = button.ontouchstart = function(event) {
            ResourceHandler.retry();
            event.stopPropagation();
        };
        this._errorPrinter.appendChild(button);
        this._loadingCount = -Infinity;
    }
};

Graphics.eraseLoadingError = function() {
    if (this._errorPrinter && !this._errorShowed) {
        this._errorPrinter.innerHTML = '';
        this.startLoading();
    }
};

Graphics.printError = function(name, message) {
    this._errorShowed = true;
    if (this._errorPrinter) {
        this._errorPrinter.innerHTML = this._makeErrorHtml(name, message);
    }
    this._applyCanvasFilter();
    this._clearUpperCanvas();
};

Graphics.isFontLoaded = function(name) {
    if (Graphics._cssFontLoading) {
        if(Graphics._fontLoaded){
            return Graphics._fontLoaded.check('10px "'+name+'"');
        }

        return false;
    } else {
        if (!this._hiddenCanvas) {
            this._hiddenCanvas = document.createElement('canvas');
        }
        var context = this._hiddenCanvas.getContext('2d');
        var text = 'abcdefghijklmnopqrstuvwxyz';
        var width1, width2;
        context.font = '40px ' + name + ', sans-serif';
        width1 = context.measureText(text).width;
        context.font = '40px sans-serif';
        width2 = context.measureText(text).width;
        return width1 !== width2;
    }
};

Graphics.playVideo = function(src) {
    this._videoLoader = ResourceHandler.createLoader(null, this._playVideo.bind(this, src), this._onVideoError.bind(this));
    this._playVideo(src);
};

Graphics._playVideo = function(src) {
    this._video.src = src;
    this._video.onloadeddata = this._onVideoLoad.bind(this);
    this._video.onerror = this._videoLoader;
    this._video.onended = this._onVideoEnd.bind(this);
    this._video.load();
    this._videoLoading = true;
};

Graphics.isVideoPlaying = function() {
    return this._videoLoading || this._isVideoVisible();
};

Graphics.setVideoVolume = function(value) {
    this._videoVolume = value;
    if (this._video) {
        this._video.volume = this._videoVolume;
    }
};

Graphics._createVideo = function() {
    this._video = document.createElement('video');
    this._video.id = 'GameVideo';
    this._video.style.opacity = 0;
    this._video.setAttribute('playsinline', '');
    this._video.volume = this._videoVolume;
    this._updateVideo();
    makeVideoPlayableInline(this._video);
    document.body.appendChild(this._video);
};

Graphics._createRenderer = function() {
    PIXI.dontSayHello = true;
    var width = this._width;
    var height = this._height;
    var options = { view: this._canvas };
    try {
        switch (this._rendererType) {
        case 'canvas':
            this._renderer = new PIXI.CanvasRenderer(width, height, options);
            break;
        case 'webgl':
            this._renderer = new PIXI.WebGLRenderer(width, height, options);
            break;
        default:
            this._renderer = PIXI.autoDetectRenderer(width, height, options);
            break;
        }

        if(this._renderer && this._renderer.textureGC)
            this._renderer.textureGC.maxIdle = 1;

    } catch (e) {
        this._renderer = null;
    }
};

Graphics._onVideoLoad = function() {
    this._video.play();
    this._updateVisibility(true);
    this._videoLoading = false;
};

Graphics._onVideoError = function() {
    this._updateVisibility(false);
    this._videoLoading = false;
};

Graphics._onVideoEnd = function() {
    this._updateVisibility(false);
};

Graphics._setupEventHandlers = function() {
    window.addEventListener('resize', this._onWindowResize.bind(this));
    document.addEventListener('keydown', this._onKeyDown.bind(this));
    document.addEventListener('touchend', this._onTouchEnd.bind(this));
};

Graphics._onTouchEnd = function(event) {
    if (!this._videoUnlocked) {
        this._video.play();
        this._videoUnlocked = true;
    }
    if (this._isVideoVisible() && this._video.paused) {
        this._video.play();
    }
};

Input._onKeyDown = function(event) {
    if (this._shouldPreventDefault(event.keyCode)) {
        event.preventDefault();
    }
    if (event.keyCode === 144) {    // Numlock
        this.clear();
    }
    var buttonName = this.keyMapper[event.keyCode];
    if (ResourceHandler.exists() && buttonName === 'ok') {
        ResourceHandler.retry();
    } else if (buttonName) {
        this._currentState[buttonName] = true;
    }
};

TouchInput._setupEventHandlers = function() {
    var isSupportPassive = Utils.isSupportPassiveEvent();
    document.addEventListener('mousedown', this._onMouseDown.bind(this));
    document.addEventListener('mousemove', this._onMouseMove.bind(this));
    document.addEventListener('mouseup', this._onMouseUp.bind(this));
    document.addEventListener('wheel', this._onWheel.bind(this));
    document.addEventListener('touchstart', this._onTouchStart.bind(this), isSupportPassive ? {passive: false} : false);
    document.addEventListener('touchmove', this._onTouchMove.bind(this), isSupportPassive ? {passive: false} : false);
    document.addEventListener('touchend', this._onTouchEnd.bind(this));
    document.addEventListener('touchcancel', this._onTouchCancel.bind(this));
    document.addEventListener('pointerdown', this._onPointerDown.bind(this));
};

Object.defineProperty(Sprite.prototype, 'bitmap', {
    get: function() {
        return this._bitmap;
    },
    set: function(value) {
        if (this._bitmap !== value) {
            this._bitmap = value;

            if(value){
                this._refreshFrame = true;
                value.addLoadListener(this._onBitmapLoad.bind(this));
            }else{
                this._refreshFrame = false;
                this.texture.frame = Rectangle.emptyRectangle;
            }
        }
    },
    configurable: true
});

Sprite.prototype.setFrame = function(x, y, width, height) {
    this._refreshFrame = false;
    var frame = this._frame;
    if (x !== frame.x || y !== frame.y ||
            width !== frame.width || height !== frame.height) {
        frame.x = x;
        frame.y = y;
        frame.width = width;
        frame.height = height;
        this._refresh();
    }
};

Sprite.prototype._onBitmapLoad = function(bitmapLoaded) {
    if(bitmapLoaded === this._bitmap){
        if (this._refreshFrame && this._bitmap) {
            this._refreshFrame = false;
            this._frame.width = this._bitmap.width;
            this._frame.height = this._bitmap.height;
        }
    }

    this._refresh();
};

Sprite.prototype._renderCanvas = function(renderer) {
    if (this.bitmap) {
        this.bitmap.touch();
    }
    if(this.bitmap && !this.bitmap.isReady()){
        return;
    }

    if (this.texture.frame.width > 0 && this.texture.frame.height > 0) {
        this._renderCanvas_PIXI(renderer);
    }
};

Sprite.prototype._renderWebGL = function(renderer) {
    if (this.bitmap) {
        this.bitmap.touch();
    }
    if(this.bitmap && !this.bitmap.isReady()){
        return;
    }
    if (this.texture.frame.width > 0 && this.texture.frame.height > 0) {
        if (this._bitmap) {
            this._bitmap.checkDirty();
        }

        //copy of pixi-v4 internal code
        //pixi-v4内部代码的副本
        this.calculateVertices();

        if (this._isPicture) {
            // use heavy renderer, which reduces artifacts and applies corrent blendMode,
            // but does not use multitexture optimization
            //使用重渲染器，这可以减少瑕疵并应用相应的blendMode，但不使用多纹理优化
            this._speedUpCustomBlendModes(renderer);
            renderer.setObjectRenderer(renderer.plugins.picture);
            renderer.plugins.picture.render(this);
        } else {
            // use pixi super-speed renderer
            // 使用pixi超高速渲染器
            renderer.setObjectRenderer(renderer.plugins.sprite);
            renderer.plugins.sprite.render(this);
        }
    }
};

PIXI.tilemap.TileRenderer.DO_CLEAR = true;

ShaderTilemap.prototype._hackRenderer = function(renderer) {
    var af = this.animationFrame % 4;
    if (af==3) af = 1;
    renderer.plugins.tilemap.tileAnim[0] = af * this._tileWidth;
    renderer.plugins.tilemap.tileAnim[1] = (this.animationFrame % 3) * this._tileHeight;
    return renderer;
};

WindowLayer.prototype.renderWebGL = function(renderer) {
    if (!this.visible || !this.renderable) {
        return;
    }

    if (this.children.length==0) {
        return;
    }

    renderer.flush();
    this.filterArea.copy(this);
    renderer.filterManager.pushFilter(this, this.filters);
    renderer.currentRenderer.start();

    var shift = new PIXI.Point();
    var rt = renderer._activeRenderTarget;
    var projectionMatrix = rt.projectionMatrix;
    shift.x = Math.round((projectionMatrix.tx + 1) / 2 * rt.sourceFrame.width);
    shift.y = Math.round((projectionMatrix.ty + 1) / 2 * rt.sourceFrame.height);

    for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        if (child._isWindow && child.visible && child.openness > 0) {
            this._maskWindow(child, shift);
            renderer.maskManager.pushScissorMask(this, this._windowMask);
            renderer.clear();
            renderer.maskManager.popScissorMask();
            renderer.currentRenderer.start();
            child.renderWebGL(renderer);
            renderer.currentRenderer.flush();
        }
    }

    renderer.flush();
    renderer.filterManager.popFilter();
    renderer.maskManager.popScissorMask();

    for (var j = 0; j < this.children.length; j++) {
        if (!this.children[j]._isWindow) {
            this.children[j].renderWebGL(renderer);
        }
    }
};

WindowLayer.prototype._maskWindow = function(window, shift) {
    this._windowMask._currentBounds = null;
    this._windowMask.boundsDirty = true;
    var rect = this._windowRect;
    rect.x = this.x + shift.x + window.x;
    rect.y = this.x + shift.y + window.y + window.height / 2 * (1 - window._openness / 255);
    rect.width = window.width;
    rect.height = window.height * window._openness / 255;
};

WebAudio._standAlone = (function(top){
    return !top.ResourceHandler;
})(this);

WebAudio.prototype.initialize = function(url) {
    if (!WebAudio._initialized) {
        WebAudio.initialize();
    }
    this.clear();

    if(!WebAudio._standAlone){
        this._loader = ResourceHandler.createLoader(url, this._load.bind(this, url), function() {
            this._hasError = true;
        }.bind(this));
    }
    this._load(url);
    this._url = url;
};

WebAudio._masterVolume   = 1;

WebAudio.setMasterVolume = function(value) {
    this._masterVolume = value;
    if (this._masterGainNode) {
        this._masterGainNode.gain.setValueAtTime(this._masterVolume, this._context.currentTime);
    }
};

WebAudio._createMasterGainNode = function() {
    var context = WebAudio._context;
    if (context) {
        this._masterGainNode = context.createGain();
        this._masterGainNode.gain.setValueAtTime(this._masterVolume, context.currentTime);
        this._masterGainNode.connect(context.destination);
    }
};

WebAudio._fadeIn = function(duration) {
    if (this._masterGainNode) {
        var gain = this._masterGainNode.gain;
        var currentTime = WebAudio._context.currentTime;
        gain.setValueAtTime(0, currentTime);
        gain.linearRampToValueAtTime(this._masterVolume, currentTime + duration);
    }
};

WebAudio._fadeOut = function(duration) {
    if (this._masterGainNode) {
        var gain = this._masterGainNode.gain;
        var currentTime = WebAudio._context.currentTime;
        gain.setValueAtTime(this._masterVolume, currentTime);
        gain.linearRampToValueAtTime(0, currentTime + duration);
    }
};

Object.defineProperty(WebAudio.prototype, 'volume', {
    get: function() {
        return this._volume;
    },
    set: function(value) {
        this._volume = value;
        if (this._gainNode) {
            this._gainNode.gain.setValueAtTime(this._volume, WebAudio._context.currentTime);
        }
    },
    configurable: true
});

WebAudio.prototype.fadeOut = function(duration) {
    if (this._gainNode) {
        var gain = this._gainNode.gain;
        var currentTime = WebAudio._context.currentTime;
        gain.setValueAtTime(this._volume, currentTime);
        gain.linearRampToValueAtTime(0, currentTime + duration);
    }
    this._autoPlay = false;
};

WebAudio.prototype._load = function(url) {
    if (WebAudio._context) {
        var xhr = new XMLHttpRequest();
        if(Decrypter.hasEncryptedAudio) url = Decrypter.extToEncryptExt(url);
        xhr.open('GET', url);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function() {
            if (xhr.status < 400) {
                this._onXhrLoad(xhr);
            }
        }.bind(this);
        xhr.onerror = this._loader || function(){this._hasError = true;}.bind(this);
        xhr.send();
    }
};

WebAudio.prototype._createNodes = function() {
    var context = WebAudio._context;
    this._sourceNode = context.createBufferSource();
    this._sourceNode.buffer = this._buffer;
    this._sourceNode.loopStart = this._loopStart;
    this._sourceNode.loopEnd = this._loopStart + this._loopLength;
    this._sourceNode.playbackRate.setValueAtTime(this._pitch, context.currentTime);
    this._gainNode = context.createGain();
    this._gainNode.gain.setValueAtTime(this._volume, context.currentTime);
    this._pannerNode = context.createPanner();
    this._pannerNode.panningModel = 'equalpower';
    this._updatePanner();
};

JsonEx._id = 1;
JsonEx._generateId = function(){
    return JsonEx._id++;
};

JsonEx.stringify = function(object) {
    var circular = [];
    JsonEx._id = 1;
    var json = JSON.stringify(this._encode(object, circular, 0));
    this._cleanMetadata(object);
    this._restoreCircularReference(circular);

    return json;
};

JsonEx._restoreCircularReference = function(circulars){
    circulars.forEach(function(circular){
        var key = circular[0];
        var value = circular[1];
        var content = circular[2];

        value[key] = content;
    });
};

JsonEx.parse = function(json) {
    var circular = [];
    var registry = {};
    var contents = this._decode(JSON.parse(json), circular, registry);
    this._cleanMetadata(contents);
    this._linkCircularReference(contents, circular, registry);

    return contents;
};

JsonEx._linkCircularReference = function(contents, circulars, registry){
    circulars.forEach(function(circular){
        var key = circular[0];
        var value = circular[1];
        var id = circular[2];

        value[key] = registry[id];
    });
};

JsonEx._cleanMetadata = function(object){
    if(!object) return;

    delete object['@'];
    delete object['@c'];

    if(typeof object === 'object'){
        Object.keys(object).forEach(function(key){
            var value = object[key];
            if(typeof value === 'object'){
                JsonEx._cleanMetadata(value);
            }
        });
    }
};

JsonEx._encode = function(value, circular, depth) {
    depth = depth || 0;
    if (++depth >= this.maxDepth) {
        throw new Error('对象太深：Object too deep');
    }
    var type = Object.prototype.toString.call(value);
    if (type === '[object Object]' || type === '[object Array]') {
        value['@c'] = JsonEx._generateId();

        var constructorName = this._getConstructorName(value);
        if (constructorName !== 'Object' && constructorName !== 'Array') {
            value['@'] = constructorName;
        }
        for (var key in value) {
            if (value.hasOwnProperty(key) && !key.match(/^@./)) {
                if(value[key] && typeof value[key] === 'object'){
                    if(value[key]['@c']){
                        circular.push([key, value, value[key]]);
                        value[key] = {'@r': value[key]['@c']};
                    }else{
                        value[key] = this._encode(value[key], circular, depth + 1);

                        if(value[key] instanceof Array){
                            //wrap array - 环绕阵列
                            circular.push([key, value, value[key]]);

                            value[key] = {
                                '@c': value[key]['@c'],
                                '@a': value[key]
                            };
                        }
                    }
                }else{
                    value[key] = this._encode(value[key], circular, depth + 1);
                }
            }
        }
    }
    depth--;
    return value;
};

JsonEx._decode = function(value, circular, registry) {
    var type = Object.prototype.toString.call(value);
    if (type === '[object Object]' || type === '[object Array]') {
        registry[value['@c']] = value;

        if (value['@']) {
            var constructor = window[value['@']];
            if (constructor) {
                value = this._resetPrototype(value, constructor.prototype);
            }
        }
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                if(value[key] && value[key]['@a']){
                    //object is array wrapper
                    //对象是数组包装器
                    var body = value[key]['@a'];
                    body['@c'] = value[key]['@c'];
                    value[key] = body;
                }
                if(value[key] && value[key]['@r']){
                    //object is reference
                    //对象是引用
                    circular.push([key, value, value[key]['@r']])
                }
                value[key] = this._decode(value[key], circular, registry);
            }
        }
    }
    return value;
};

Decrypter.decryptImg = function(url, bitmap) {
    url = this.extToEncryptExt(url);

    var requestFile = new XMLHttpRequest();
    requestFile.open("GET", url);
    requestFile.responseType = "arraybuffer";
    requestFile.send();

    requestFile.onload = function () {
        if(this.status < Decrypter._xhrOk) {
            var arrayBuffer = Decrypter.decryptArrayBuffer(requestFile.response);
            bitmap._image.src = Decrypter.createBlobUrl(arrayBuffer);
            bitmap._image.addEventListener('load', bitmap._loadListener = Bitmap.prototype._onLoad.bind(bitmap));
            bitmap._image.addEventListener('error', bitmap._errorListener = bitmap._loader || Bitmap.prototype._onError.bind(bitmap));
        }
    };

    requestFile.onerror = function () {
        if (bitmap._loader) {
            bitmap._loader();
        } else {
            bitmap._onError();
        }
    };
};

ResourceHandler = function() {
    throw new Error('这是一个静态类！');
}

ResourceHandler._reloaders = [];
ResourceHandler._defaultRetryInterval = [500, 1000, 3000];

ResourceHandler.createLoader = function(url, retryMethod, resignMethod, retryInterval) {
    retryInterval = retryInterval || this._defaultRetryInterval;
    var reloaders = this._reloaders;
    var retryCount = 0;
    return function() {
        if (retryCount < retryInterval.length) {
            setTimeout(retryMethod, retryInterval[retryCount]);
            retryCount++;
        } else {
            if (resignMethod) {
                resignMethod();
            }
            if (url) {
                if (reloaders.length === 0) {
                    Graphics.printLoadingError(url);
                    SceneManager.stop();
                }
                reloaders.push(function() {
                    retryCount = 0;
                    retryMethod();
                });
            }
        }
    };
};

ResourceHandler.exists = function() {
    return this._reloaders.length > 0;
};

ResourceHandler.retry = function() {
    if (this._reloaders.length > 0) {
        Graphics.eraseLoadingError();
        SceneManager.resume();
        this._reloaders.forEach(function(reloader) {
            reloader();
        });
        this._reloaders.length = 0;
    }
};

//-----------------------------------------------------------------------------
// 1.5.0 rpg_managers.js 变更
//-----------------------------------------------------------------------------

DataManager.loadDataFile = function(name, src) {
    var xhr = new XMLHttpRequest();
    var url = 'data/' + src;
    xhr.open('GET', url);
    xhr.overrideMimeType('application/json');
    xhr.onload = function() {
        if (xhr.status < 400) {
            window[name] = JSON.parse(xhr.responseText);
            DataManager.onLoad(window[name]);
        }
    };
    xhr.onerror = this._mapLoader || function() {
        DataManager._errorUrl = DataManager._errorUrl || url;
    };
    window[name] = null;
    xhr.send();
};

DataManager.loadMapData = function(mapId) {
    if (mapId > 0) {
        var filename = 'Map%1.json'.format(mapId.padZero(3));
        this._mapLoader = ResourceHandler.createLoader('data/' + filename, this.loadDataFile.bind(this, '$dataMap', filename));
        this.loadDataFile('$dataMap', filename);
    } else {
        this.makeEmptyMap();
    }
};

DataManager.loadSavefileImages = function(info) {
    if (info.characters) {
        for (var i = 0; i < info.characters.length; i++) {
            ImageManager.reserveCharacter(info.characters[i][0]);
        }
    }
    if (info.faces) {
        for (var j = 0; j < info.faces.length; j++) {
            ImageManager.reserveFace(info.faces[j][0]);
        }
    }
};

ImageManager._imageCache = new ImageCache();
ImageManager._requestQueue = new RequestQueue();
ImageManager._systemReservationId = Utils.generateRuntimeId();

ImageManager._generateCacheKey = function(path, hue){
    return  path + ':' + hue;
};

ImageManager.loadEmptyBitmap = function() {
    var empty = this._imageCache.get('empty');
    if(!empty){
        empty = new Bitmap();
        this._imageCache.add('empty', empty);
        this._imageCache.reserve('empty', empty, this._systemReservationId);
    }

    return empty;
};

ImageManager.loadNormalBitmap = function(path, hue) {
    var key = this._generateCacheKey(path, hue);
    var bitmap = this._imageCache.get(key);
    if (!bitmap) {
        bitmap = Bitmap.load(path);
        bitmap.addLoadListener(function() {
            bitmap.rotateHue(hue);
        });
        this._imageCache.add(key, bitmap);
    }else if(!bitmap.isReady()){
        bitmap.decode();
    }

    return bitmap;
};

ImageManager.clear = function() {
    this._imageCache = new ImageCache();
};

ImageManager.isReady = function() {
    return this._imageCache.isReady();
};

ImageManager.reserveAnimation = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/animations/', filename, hue, true, reservationId);
};

ImageManager.reserveBattleback1 = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/battlebacks1/', filename, hue, true, reservationId);
};

ImageManager.reserveBattleback2 = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/battlebacks2/', filename, hue, true, reservationId);
};

ImageManager.reserveEnemy = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/enemies/', filename, hue, true, reservationId);
};

ImageManager.reserveCharacter = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/characters/', filename, hue, false, reservationId);
};

ImageManager.reserveFace = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/faces/', filename, hue, true, reservationId);
};

ImageManager.reserveParallax = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/parallaxes/', filename, hue, true, reservationId);
};

ImageManager.reservePicture = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/pictures/', filename, hue, true, reservationId);
};

ImageManager.reserveSvActor = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/sv_actors/', filename, hue, false, reservationId);
};

ImageManager.reserveSvEnemy = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/sv_enemies/', filename, hue, true, reservationId);
};

ImageManager.reserveSystem = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/system/', filename, hue, false, reservationId || this._systemReservationId);
};

ImageManager.reserveTileset = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/tilesets/', filename, hue, false, reservationId);
};

ImageManager.reserveTitle1 = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/titles1/', filename, hue, true, reservationId);
};

ImageManager.reserveTitle2 = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/titles2/', filename, hue, true, reservationId);
};

ImageManager.reserveBitmap = function(folder, filename, hue, smooth, reservationId) {
    if (filename) {
        var path = folder + encodeURIComponent(filename) + '.png';
        var bitmap = this.reserveNormalBitmap(path, hue || 0, reservationId || this._defaultReservationId);
        bitmap.smooth = smooth;
        return bitmap;
    } else {
        return this.loadEmptyBitmap();
    }
};

ImageManager.reserveNormalBitmap = function(path, hue, reservationId){
    var bitmap = this.loadNormalBitmap(path, hue);
    this._imageCache.reserve(this._generateCacheKey(path, hue), bitmap, reservationId);

    return bitmap;
};

ImageManager.releaseReservation = function(reservationId){
    this._imageCache.releaseReservation(reservationId);
};

ImageManager.setDefaultReservationId = function(reservationId){
    this._defaultReservationId = reservationId;
};


ImageManager.requestAnimation = function(filename, hue) {
    return this.requestBitmap('img/animations/', filename, hue, true);
};

ImageManager.requestBattleback1 = function(filename, hue) {
    return this.requestBitmap('img/battlebacks1/', filename, hue, true);
};

ImageManager.requestBattleback2 = function(filename, hue) {
    return this.requestBitmap('img/battlebacks2/', filename, hue, true);
};

ImageManager.requestEnemy = function(filename, hue) {
    return this.requestBitmap('img/enemies/', filename, hue, true);
};

ImageManager.requestCharacter = function(filename, hue) {
    return this.requestBitmap('img/characters/', filename, hue, false);
};

ImageManager.requestFace = function(filename, hue) {
    return this.requestBitmap('img/faces/', filename, hue, true);
};

ImageManager.requestParallax = function(filename, hue) {
    return this.requestBitmap('img/parallaxes/', filename, hue, true);
};

ImageManager.requestPicture = function(filename, hue) {
    return this.requestBitmap('img/pictures/', filename, hue, true);
};

ImageManager.requestSvActor = function(filename, hue) {
    return this.requestBitmap('img/sv_actors/', filename, hue, false);
};

ImageManager.requestSvEnemy = function(filename, hue) {
    return this.requestBitmap('img/sv_enemies/', filename, hue, true);
};

ImageManager.requestSystem = function(filename, hue) {
    return this.requestBitmap('img/system/', filename, hue, false);
};

ImageManager.requestTileset = function(filename, hue) {
    return this.requestBitmap('img/tilesets/', filename, hue, false);
};

ImageManager.requestTitle1 = function(filename, hue) {
    return this.requestBitmap('img/titles1/', filename, hue, true);
};

ImageManager.requestTitle2 = function(filename, hue) {
    return this.requestBitmap('img/titles2/', filename, hue, true);
};

ImageManager.requestBitmap = function(folder, filename, hue, smooth) {
    if (filename) {
        var path = folder + encodeURIComponent(filename) + '.png';
        var bitmap = this.requestNormalBitmap(path, hue || 0);
        bitmap.smooth = smooth;
        return bitmap;
    } else {
        return this.loadEmptyBitmap();
    }
};

ImageManager.requestNormalBitmap = function(path, hue){
    var key = this._generateCacheKey(path, hue);
    var bitmap = this._imageCache.get(key);
    if(!bitmap){
        bitmap = Bitmap.request(path);
        bitmap.addLoadListener(function(){
            bitmap.rotateHue(hue);
        });
        this._imageCache.add(key, bitmap);
        this._requestQueue.enqueue(key, bitmap);
    }else{
        this._requestQueue.raisePriority(key);
    }

    return bitmap;
};

ImageManager.update = function(){
    this._requestQueue.update();
};

ImageManager.clearRequest = function(){
    this._requestQueue.clear();
};

AudioManager._masterVolume   = 1;   // (min: 0, max: 1)

Object.defineProperty(AudioManager, 'masterVolume', {
    get: function() {
        return this._masterVolume;
    },
    set: function(value) {
        this._masterVolume = value;
        WebAudio.setMasterVolume(this._masterVolume);
        Graphics.setVideoVolume(this._masterVolume);
    },
    configurable: true
});

SceneManager._getTimeInMsWithoutMobileSafari = function() {
    return performance.now();
};

if (!Utils.isMobileSafari()) SceneManager._currentTime = SceneManager._getTimeInMsWithoutMobileSafari();

SceneManager.preferableRendererType = function() {
    if (Utils.isOptionValid('canvas')) {
        return 'canvas';
    } else if (Utils.isOptionValid('webgl')) {
        return 'webgl';
    } else {
        return 'auto';
    }
};

SceneManager.update = function() {
    try {
        this.tickStart();
        if (Utils.isMobileSafari()) {
            this.updateInputData();
        }
        this.updateManagers();
        this.updateMain();
        this.tickEnd();
    } catch (e) {
        this.catchException(e);
    }
};

SceneManager.updateMain = function() {
    if (Utils.isMobileSafari()) {
        this.changeScene();
        this.updateScene();
    } else {
        var newTime = this._getTimeInMsWithoutMobileSafari();
        var fTime = (newTime - this._currentTime) / 1000;
        if (fTime > 0.25) fTime = 0.25;
        this._currentTime = newTime;
        this._accumulator += fTime;
        while (this._accumulator >= this._deltaTime) {
            this.updateInputData();
            this.changeScene();
            this.updateScene();
            this._accumulator -= this._deltaTime;
        }
    }
    this.renderScene();
    this.requestUpdate();
};

SceneManager.updateManagers = function() {
    ImageManager.update();
};

SceneManager.changeScene = function() {
    if (this.isSceneChanging() && !this.isCurrentSceneBusy()) {
        if (this._scene) {
            this._scene.terminate();
            this._scene.detachReservation();
            this._previousClass = this._scene.constructor;
        }
        this._scene = this._nextScene;
        if (this._scene) {
            this._scene.attachReservation();
            this._scene.create();
            this._nextScene = null;
            this._sceneStarted = false;
            this.onSceneCreate();
        }
        if (this._exiting) {
            this.terminate();
        }
    }
};

SceneManager.resume = function() {
    this._stopped = false;
    this.requestUpdate();
    if (!Utils.isMobileSafari()) {
        this._currentTime = this._getTimeInMsWithoutMobileSafari();
        this._accumulator = 0;
    }
};

//-----------------------------------------------------------------------------
// 1.5.0 rpg_objects.js 变更
//-----------------------------------------------------------------------------

Game_System.prototype.saveWalkingBgm2 = function() {
  this._walkingBgm = $dataMap.bgm;
};

Game_Message.prototype.allText = function() {
    return this._texts.join('\n');
};

Game_Map.prototype.autoplay = function() {
    if ($dataMap.autoplayBgm) {
        if ($gamePlayer.isInVehicle()) {
            $gameSystem.saveWalkingBgm2();
        } else {
            AudioManager.playBgm($dataMap.bgm);
        }
    }
    if ($dataMap.autoplayBgs) {
        AudioManager.playBgs($dataMap.bgs);
    }
};

Game_Character.prototype.findDirectionTo = function(goalX, goalY) {
    var searchLimit = this.searchLimit();
    var mapWidth = $gameMap.width();
    var nodeList = [];
    var openList = [];
    var closedList = [];
    var start = {};
    var best = start;

    if (this.x === goalX && this.y === goalY) {
        return 0;
    }

    start.parent = null;
    start.x = this.x;
    start.y = this.y;
    start.g = 0;
    start.f = $gameMap.distance(start.x, start.y, goalX, goalY);
    nodeList.push(start);
    openList.push(start.y * mapWidth + start.x);

    while (nodeList.length > 0) {
        var bestIndex = 0;
        for (var i = 0; i < nodeList.length; i++) {
            if (nodeList[i].f < nodeList[bestIndex].f) {
                bestIndex = i;
            }
        }

        var current = nodeList[bestIndex];
        var x1 = current.x;
        var y1 = current.y;
        var pos1 = y1 * mapWidth + x1;
        var g1 = current.g;

        nodeList.splice(bestIndex, 1);
        openList.splice(openList.indexOf(pos1), 1);
        closedList.push(pos1);

        if (current.x === goalX && current.y === goalY) {
            best = current;
            break;
        }

        if (g1 >= searchLimit) {
            continue;
        }

        for (var j = 0; j < 4; j++) {
            var direction = 2 + j * 2;
            var x2 = $gameMap.roundXWithDirection(x1, direction);
            var y2 = $gameMap.roundYWithDirection(y1, direction);
            var pos2 = y2 * mapWidth + x2;

            if (closedList.contains(pos2)) {
                continue;
            }
            if (!this.canPass(x1, y1, direction)) {
                continue;
            }

            var g2 = g1 + 1;
            var index2 = openList.indexOf(pos2);

            if (index2 < 0 || g2 < nodeList[index2].g) {
                var neighbor;
                if (index2 >= 0) {
                    neighbor = nodeList[index2];
                } else {
                    neighbor = {};
                    nodeList.push(neighbor);
                    openList.push(pos2);
                }
                neighbor.parent = current;
                neighbor.x = x2;
                neighbor.y = y2;
                neighbor.g = g2;
                neighbor.f = g2 + $gameMap.distance(x2, y2, goalX, goalY);
                if (!best || neighbor.f - neighbor.g < best.f - best.g) {
                    best = neighbor;
                }
            }
        }
    }

    var node = best;
    while (node.parent && node.parent !== start) {
        node = node.parent;
    }

    var deltaX1 = $gameMap.deltaX(node.x, start.x);
    var deltaY1 = $gameMap.deltaY(node.y, start.y);
    if (deltaY1 > 0) {
        return 2;
    } else if (deltaX1 < 0) {
        return 4;
    } else if (deltaX1 > 0) {
        return 6;
    } else if (deltaY1 < 0) {
        return 8;
    }

    var deltaX2 = this.deltaXFrom(goalX);
    var deltaY2 = this.deltaYFrom(goalY);
    if (Math.abs(deltaX2) > Math.abs(deltaY2)) {
        return deltaX2 > 0 ? 4 : 6;
    } else if (deltaY2 !== 0) {
        return deltaY2 > 0 ? 8 : 2;
    }

    return 0;
};

Game_Interpreter.prototype.setup = function(list, eventId) {
    this.clear();
    this._mapId = $gameMap.mapId();
    this._eventId = eventId || 0;
    this._list = list;
    Game_Interpreter.requestImages(list);
};

// Change Tileset - 变更地图块
Game_Interpreter.prototype.command282 = function() {
    var tileset = $dataTilesets[this._params[0]];
    if(!this._imageReservationId){
        this._imageReservationId = Utils.generateRuntimeId();
    }

    var allReady = tileset.tilesetNames.map(function(tilesetName) {
        return ImageManager.reserveTileset(tilesetName, 0, this._imageReservationId);
    }, this).every(function(bitmap) {return bitmap.isReady();});

    if (allReady) {
        $gameMap.changeTileset(this._params[0]);
        ImageManager.releaseReservation(this._imageReservationId);
        this._imageReservationId = null;

        return true;
    } else {
        return false;
    }
};

Game_Interpreter.requestImages = function(list, commonList){
    if(!list) return;

    list.forEach(function(command){
        var params = command.parameters;
        switch(command.code){
            // Show Text
            case 101:
                ImageManager.requestFace(params[0]);
                break;

            // Common Event
            case 117:
                var commonEvent = $dataCommonEvents[params[0]];
                if (commonEvent) {
                    if (!commonList) {
                        commonList = [];
                    }
                    if (!commonList.contains(params[0])) {
                        commonList.push(params[0]);
                        Game_Interpreter.requestImages(commonEvent.list, commonList);
                    }
                }
                break;

            // Change Party Member
            case 129:
                var actor = $gameActors.actor(params[0]);
                if (actor && params[1] === 0) {
                    var name = actor.characterName();
                    ImageManager.requestCharacter(name);
                }
                break;

            // Set Movement Route
            case 205:
                if(params[1]){
                    params[1].list.forEach(function(command){
                        var params = command.parameters;
                        if(command.code === Game_Character.ROUTE_CHANGE_IMAGE){
                            ImageManager.requestCharacter(params[0]);
                        }
                    });
                }
                break;

            // Show Animation, Show Battle Animation
            case 212: case 337:
                if(params[1]) {
                    var animation = $dataAnimations[params[1]];
                    var name1 = animation.animation1Name;
                    var name2 = animation.animation2Name;
                    var hue1 = animation.animation1Hue;
                    var hue2 = animation.animation2Hue;
                    ImageManager.requestAnimation(name1, hue1);
                    ImageManager.requestAnimation(name2, hue2);
                }
                break;

            // Change Player Followers
            case 216:
                if (params[0] === 0) {
                    $gamePlayer.followers().forEach(function(follower) {
                        var name = follower.characterName();
                        ImageManager.requestCharacter(name);
                    });
                }
                break;

            // Show Picture
            case 231:
                ImageManager.requestPicture(params[1]);
                break;

            // Change Tileset
            case 282:
                var tileset = $dataTilesets[params[0]];
                tileset.tilesetNames.forEach(function(tilesetName){
                    ImageManager.requestTileset(tilesetName);
                });
                break;

            // Change Battle Back
            case 283:
                if ($gameParty.inBattle()) {
                    ImageManager.requestBattleback1(params[0]);
                    ImageManager.requestBattleback2(params[1]);
                }
                break;

            // Change Parallax
            case 284:
                if (!$gameParty.inBattle()) {
                    ImageManager.requestParallax(params[0]);
                }
                break;

            // Change Actor Images
            case 322:
                ImageManager.requestCharacter(params[1]);
                ImageManager.requestFace(params[3]);
                ImageManager.requestSvActor(params[5]);
                break;

            // Change Vehicle Image
            case 323:
                var vehicle = $gameMap.vehicle(params[0]);
                if(vehicle){
                    ImageManager.requestCharacter(params[1]);
                }
                break;

            // Enemy Transform
            case 336:
                var enemy = $dataEnemies[params[1]];
                var name = enemy.battlerName;
                var hue = enemy.battlerHue;
                if ($gameSystem.isSideView()) {
                    ImageManager.requestSvEnemy(name, hue);
                } else {
                    ImageManager.requestEnemy(name, hue);
                }
                break;
        }
    });
};

//-----------------------------------------------------------------------------
// 1.5.0 rpg_scenes.js 变更
//-----------------------------------------------------------------------------

Scene_Base.prototype.initialize = function() {
    Stage.prototype.initialize.call(this);
    this._active = false;
    this._fadeSign = 0;
    this._fadeDuration = 0;
    this._fadeSprite = null;
    this._imageReservationId = Utils.generateRuntimeId();
};

Scene_Base.prototype.attachReservation = function() {
    ImageManager.setDefaultReservationId(this._imageReservationId);
};

Scene_Base.prototype.detachReservation = function() {
    ImageManager.releaseReservation(this._imageReservationId);
};

Scene_Base.prototype.update = function() {
    this.updateFade();
    this.updateChildren();
};

Scene_Boot.prototype.loadSystemWindowImage = function() {
    ImageManager.reserveSystem('Window');
};

Scene_Boot.loadSystemImages = function() {
    ImageManager.reserveSystem('IconSet');
    ImageManager.reserveSystem('Balloon');
    ImageManager.reserveSystem('Shadow1');
    ImageManager.reserveSystem('Shadow2');
    ImageManager.reserveSystem('Damage');
    ImageManager.reserveSystem('States');
    ImageManager.reserveSystem('Weapons1');
    ImageManager.reserveSystem('Weapons2');
    ImageManager.reserveSystem('Weapons3');
    ImageManager.reserveSystem('ButtonSet');
};

Scene_Boot.prototype.isGameFontLoaded = function() {
    if (Graphics.isFontLoaded('GameFont')) {
        return true;
    } else if (!Graphics.canUseCssFontLoading()){
        var elapsed = Date.now() - this._startDate;
        if (elapsed >= 60000) {
            throw new Error('游戏字体：GameFont加载失败');
        }
    }
};

Scene_Map.prototype.terminate = function() {
  this._bypassFirstClear = true;
    Scene_Base.prototype.terminate.call(this);
    if (!SceneManager.isNextScene(Scene_Battle)) {
        this._spriteset.update();
        this._mapNameWindow.hide();
        SceneManager.snapForBackground();
    } else {
        ImageManager.clearRequest();
    }

    if (SceneManager.isNextScene(Scene_Map)) {
        ImageManager.clearRequest();
    }

    $gameScreen.clearZoom();

    this.removeChild(this._fadeSprite);
    this.removeChild(this._mapNameWindow);
    this.removeChild(this._windowLayer);
    this.removeChild(this._spriteset);
    this.clearChildren();
};

Scene_Menu.prototype.createStatusWindow = function() {
    this._statusWindow = new Window_MenuStatus(this._commandWindow.width, 0);
    this._statusWindow.reserveFaceImages();
    this.addWindow(this._statusWindow);
};

Scene_Skill.prototype.create = function() {
    Scene_ItemBase.prototype.create.call(this);
    this.createHelpWindow();
    this.createSkillTypeWindow();
    this.createStatusWindow();
    this.createItemWindow();
    this.createActorWindow();
};

Scene_Skill.prototype.start = function() {
    Scene_ItemBase.prototype.start.call(this);
    this.refreshActor();
};

Scene_Skill.prototype.createStatusWindow = function() {
    var wx = this._skillTypeWindow.width;
    var wy = this._helpWindow.height;
    var ww = Graphics.boxWidth - wx;
    var wh = this._skillTypeWindow.height;
    this._statusWindow = new Window_SkillStatus(wx, wy, ww, wh);
    this._statusWindow.reserveFaceImages();
    this.addWindow(this._statusWindow);
};

Scene_Status.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this._statusWindow = new Window_Status();
    this._statusWindow.setHandler('cancel',   this.popScene.bind(this));
    this._statusWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._statusWindow.setHandler('pageup',   this.previousActor.bind(this));
    this._statusWindow.reserveFaceImages();
    this.addWindow(this._statusWindow);
};

Scene_Status.prototype.start = function() {
    Scene_MenuBase.prototype.start.call(this);
    this.refreshActor();
};

Scene_Battle.prototype.terminate = function() {
    Scene_Base.prototype.terminate.call(this);
    $gameParty.onBattleEnd();
    $gameTroop.onBattleEnd();
    AudioManager.stopMe();

    ImageManager.clearRequest();
};

//-----------------------------------------------------------------------------
// 1.5.0 rpg_sprites.js 变更
//-----------------------------------------------------------------------------

Sprite_Animation.prototype.isReady = function() {
    return this._bitmap1 && this._bitmap1.isReady() && this._bitmap2 && this._bitmap2.isReady();
};

Sprite_Animation.prototype.updateCellSprite = function(sprite, cell) {
    var pattern = cell[0];
    if (pattern >= 0) {
        var sx = pattern % 5 * 192;
        var sy = Math.floor(pattern % 100 / 5) * 192;
        var mirror = this._mirror;
        sprite.bitmap = pattern < 100 ? this._bitmap1 : this._bitmap2;
        sprite.setFrame(sx, sy, 192, 192);
        sprite.x = cell[1];
        sprite.y = cell[2];
        sprite.rotation = cell[4] * Math.PI / 180;
        sprite.scale.x = cell[3] / 100;

        if(cell[5]){
            sprite.scale.x *= -1;
        }
        if(mirror){
            sprite.x *= -1;
            sprite.rotation *= -1;
            sprite.scale.x *= -1;
        }

        sprite.scale.y = cell[3] / 100;
        sprite.opacity = cell[6];
        sprite.blendMode = cell[7];
        sprite.visible = true;
    } else {
        sprite.visible = false;
    }
};

//-----------------------------------------------------------------------------
// 1.5.0 rpg_windows.js 变更
//-----------------------------------------------------------------------------

Window_Base.prototype.reserveFaceImages = function() {
    $gameParty.members().forEach(function(actor) {
        ImageManager.reserveFace(actor.faceName());
    }, this);
};

Window_MenuStatus.prototype.initialize = function(x, y) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._formationMode = false;
    this._pendingIndex = -1;
    this.refresh();
};

Window_MenuStatus.prototype.loadImages = function() {
    $gameParty.members().forEach(function(actor) {
        ImageManager.reserveFace(actor.faceName());
    }, this);
};

Window_Status.prototype.initialize = function() {
    var width = Graphics.boxWidth;
    var height = Graphics.boxHeight;
    Window_Selectable.prototype.initialize.call(this, 0, 0, width, height);
    this._actor = null;
    this.refresh();
    this.activate();
};

Window_NameEdit.prototype.initialize = function(actor, maxLength) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    var x = (Graphics.boxWidth - width) / 2;
    var y = (Graphics.boxHeight - (height + this.fittingHeight(9) + 8)) / 2;
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this._actor = actor;
    this._name = actor.name().slice(0, this._maxLength);
    this._index = this._name.length;
    this._maxLength = maxLength;
    this._defaultName = this._name;
    this.deactivate();
    this.refresh();
    ImageManager.reserveFace(actor.faceName());
};

Window_Message.prototype.initMembers = function() {
    this._imageReservationId = Utils.generateRuntimeId();
    this._background = 0;
    this._positionType = 2;
    this._waitCount = 0;
    this._faceBitmap = null;
    this._textState = null;
    this.clearFlags();
};

Window_Message.prototype.updateLoading = function() {
    if (this._faceBitmap) {
        if (this._faceBitmap.isReady()) {
            this.drawMessageFace();
            this._faceBitmap = null;
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
};

Window_Message.prototype.loadMessageFace = function() {
    this._faceBitmap = ImageManager.reserveFace($gameMessage.faceName(), 0, this._imageReservationId);
};

Window_Message.prototype.drawMessageFace = function() {
    this.drawFace($gameMessage.faceName(), $gameMessage.faceIndex(), 0, 0);
    ImageManager.releaseReservation(this._imageReservationId);
};

//=============================================================================
//  版本 1.4.0 到 1.5.0 变更-结束
//=============================================================================

}; // Yanfly.Param.Update150

//-----------------------------------------------------------------------------

//=============================================================================
//  版本 1.5.0 到 1.5.1 变更
//=============================================================================

if (Yanfly.Param.Update151) {

//-----------------------------------------------------------------------------
// 1.5.1 rpg_core.js 变更
//-----------------------------------------------------------------------------

// 将列表中其余插件的版本视为1.5.1版本
Utils.RPGMAKER_VERSION = '1.5.1';
console.log('RPG Maker版本 ' + Utils.RPGMAKER_VERSION + ' 已加载更新');

Sprite.prototype._renderWebGL = function(renderer) {
    if (this.bitmap) {
        this.bitmap.touch();
    }
    if(this.bitmap && !this.bitmap.isReady()){
        return;
    }
    if (this.texture.frame.width > 0 && this.texture.frame.height > 0) {
        if (this._bitmap) {
            this._bitmap.checkDirty();
        }

        //copy of pixi-v4 internal code
        //pixi-v4内部代码的副本
        this.calculateVertices();

        if (this.pluginName === 'sprite' && this._isPicture) {
            // use heavy renderer, which reduces artifacts and applies corrent blendMode,
            // but does not use multitexture optimization
            //使用重渲染器，这可以减少瑕疵并应用相应的blendMode，但不使用多纹理优化
            this._speedUpCustomBlendModes(renderer);
            renderer.setObjectRenderer(renderer.plugins.picture);
            renderer.plugins.picture.render(this);
        } else {
            // use pixi super-speed renderer
            // 使用pixi超高速渲染器
            renderer.setObjectRenderer(renderer.plugins[this.pluginName]);
      renderer.plugins[this.pluginName].render(this);
        }
    }
};

PIXI.settings.GC_MODE = PIXI.GC_MODES.AUTO;

//-----------------------------------------------------------------------------
// 1.5.1 rpg_managers.js 变更
//-----------------------------------------------------------------------------

BattleManager.initMembers = function() {
    this._phase = 'init';
    this._canEscape = false;
    this._canLose = false;
    this._battleTest = false;
    this._eventCallback = null;
    this._preemptive = false;
    this._surprise = false;
    this._actorIndex = -1;
    this._actionForcedBattler = null;
    this._mapBgm = null;
    this._mapBgs = null;
    this._actionBattlers = [];
    this._subject = null;
    this._action = null;
    this._targets = [];
    this._logWindow = null;
    this._statusWindow = null;
    this._spriteset = null;
    this._escapeRatio = 0;
    this._escaped = false;
    this._rewards = {};
    this._turnForced = false;
};

BattleManager.endTurn = function() {
    this._phase = 'turnEnd';
    this._preemptive = false;
    this._surprise = false;
    this.allBattleMembers().forEach(function(battler) {
        battler.onTurnEnd();
        this.refreshStatus();
        this._logWindow.displayAutoAffectedStatus(battler);
        this._logWindow.displayRegeneration(battler);
    }, this);
    if (this.isForcedTurn()) {
        this._turnForced = false;
    }
};

BattleManager.processForcedAction = function() {
    if (this._actionForcedBattler) {
        this._turnForced = true;
        this._subject = this._actionForcedBattler;
        this._actionForcedBattler = null;
        this.startAction();
        this._subject.removeCurrentAction();
    }
};

//-----------------------------------------------------------------------------
// 1.5.1 rpg_objects.js 变更
//-----------------------------------------------------------------------------

// Control Variables
Game_Interpreter.prototype.command122 = function() {
    var value = 0;
    switch (this._params[3]) { // Operand
        case 0: // Constant
            value = this._params[4];
            break;
        case 1: // Variable
            value = $gameVariables.value(this._params[4]);
            break;
        case 2: // Random
            value = this._params[5] - this._params[4] + 1;
            for (var i = this._params[0]; i <= this._params[1]; i++) {
                this.operateVariable(i, this._params[2], this._params[4] + Math.randomInt(value));
            }
            return true;
            break;
        case 3: // Game Data
            value = this.gameDataOperand(this._params[4], this._params[5], this._params[6]);
            break;
        case 4: // Script
            var value = 0;
            var code = this._params[4];
            try {
              value = eval(code);
            } catch (e) {
              Yanfly.Util.displayError(e, code, '变量操作脚本错误');
              //Yanfly.Util.displayError(e, code, 'CONTROL VARIABLE SCRIPT ERROR');
            }
            for (var i = this._params[0]; i <= this._params[1]; i++) {
              this.operateVariable(i, this._params[2], value);
            }
            return true;
            break;
    }
    for (var i = this._params[0]; i <= this._params[1]; i++) {
        this.operateVariable(i, this._params[2], value);
    }
    return true;
};

//=============================================================================
//  版本 1.5.0 到 1.5.1 变更-结束
//=============================================================================

}; // Yanfly.Param.Update151

//-----------------------------------------------------------------------------

//=============================================================================
//  版本 1.5.1 到 1.5.2 变更
//=============================================================================

if (Yanfly.Param.Update152) {

//-----------------------------------------------------------------------------
// 1.5.2 rpg_core.js 变更
//-----------------------------------------------------------------------------

// 将列表中其余插件的版本视为1.5.2版本
Utils.RPGMAKER_VERSION = '1.5.2';
console.log('RPG Maker版本 ' + Utils.RPGMAKER_VERSION + ' 已加载更新');

Graphics.initialize = function(width, height, type) {
    this._width = width || 800;
    this._height = height || 600;
    this._rendererType = type || 'auto';
    this._boxWidth = this._width;
    this._boxHeight = this._height;

    this._scale = 1;
    this._realScale = 1;

    this._errorShowed = false;
    this._errorPrinter = null;
    this._canvas = null;
    this._video = null;
    this._videoUnlocked = false;
    this._videoLoading = false;
    this._upperCanvas = null;
    this._renderer = null;
    this._fpsMeter = null;
    this._modeBox = null;
    this._skipCount = 0;
    this._maxSkip = 3;
    this._rendered = false;
    this._loadingImage = null;
    this._loadingCount = 0;
    this._fpsMeterToggled = false;
    this._stretchEnabled = this._defaultStretchMode();

    this._canUseDifferenceBlend = false;
    this._canUseSaturationBlend = false;
    this._hiddenCanvas = null;

    this._testCanvasBlendModes();
    this._modifyExistingElements();
    this._updateRealScale();
    this._createAllElements();
    this._disableTextSelection();
    this._disableContextMenu();
    this._setupEventHandlers();
    this._setupCssFontLoading();
};

Graphics._setupEventHandlers = function() {
    window.addEventListener('resize', this._onWindowResize.bind(this));
    document.addEventListener('keydown', this._onKeyDown.bind(this));
    document.addEventListener('keydown', this._onTouchEnd.bind(this));
    document.addEventListener('mousedown', this._onTouchEnd.bind(this));
    document.addEventListener('touchend', this._onTouchEnd.bind(this));
};

WebAudio._setupEventHandlers = function() {
    var resumeHandler = function() {
        var context = WebAudio._context;
        if (context && context.state === "suspended" && typeof context.resume === "function") {
            context.resume().then(function() {
                WebAudio._onTouchStart();
            })
        } else {
            WebAudio._onTouchStart();
        }
    };
    document.addEventListener("keydown", resumeHandler);
    document.addEventListener("mousedown", resumeHandler);
    document.addEventListener("touchend", resumeHandler);
    document.addEventListener('touchstart', this._onTouchStart.bind(this));
    document.addEventListener('visibilitychange', this._onVisibilityChange.bind(this));
};

//-----------------------------------------------------------------------------
// 1.5.2 rpg_managers.js 变更
//-----------------------------------------------------------------------------

BattleManager.updateEvent = function() {
    switch (this._phase) {
        case 'start':
        case 'turn':
        case 'turnEnd':
            if (this.isActionForced()) {
                this.processForcedAction();
                return true;
            } else {
                return this.updateEventMain();
            }
    }
    return this.checkAbort();
};

BattleManager.checkAbort = function() {
    if ($gameParty.isEmpty() || this.isAborting()) {
        this.processAbort();
        return true;
    }
    return false;
};

// Break Loop
Game_Interpreter.prototype.command113 = function() {
    var depth = 0;
    while (this._index < this._list.length - 1) {
        this._index++;
        var command = this.currentCommand();

        if (command.code === 112)
            depth++;

        if (command.code === 413 && command.indent < this._indent) {
            if (depth > 0)
                depth--;
            else
                break;
        }
    }
    return true;
};

//-----------------------------------------------------------------------------
// 1.5.2 rpg_sprites.js 变更
//-----------------------------------------------------------------------------

Spriteset_Battle.prototype.overworldBattleback1Name = function() {
    if ($gameMap.battleback1Name() === '') return '';
    if ($gamePlayer.isInVehicle()) {
        return this.shipBattleback1Name();
    } else {
        return this.normalBattleback1Name();
    }
};

Spriteset_Battle.prototype.overworldBattleback2Name = function() {
    if ($gameMap.battleback2Name() === '') return '';
    if ($gamePlayer.isInVehicle()) {
        return this.shipBattleback2Name();
    } else {
        return this.normalBattleback2Name();
    }
};

//=============================================================================
//  版本 1.5.1 到 1.5.2 变更-结束
//=============================================================================

}; // Yanfly.Param.Update152

//-----------------------------------------------------------------------------

//=============================================================================
//  版本 1.5.2 到 1.6.1 变更
//=============================================================================

if (Yanfly.Param.Update161) {

//-----------------------------------------------------------------------------
// 1.6.1 rpg_core.js 变更
//-----------------------------------------------------------------------------

// 将列表中其余插件的版本视为1.6.1版本
Utils.RPGMAKER_VERSION = '1.6.1';
console.log('RPG Maker版本 ' + Utils.RPGMAKER_VERSION + ' 已加载更新');

Utils.isOptionValid = function(name) {
    if (location.search.slice(1).split('&').contains(name)) {return 1;};
    if (typeof nw !== "undefined" && nw.App.argv.length > 0 && nw.App.argv[0].split('&').contains(name)) {return 1;};
    return 0;
};

WebAudio.prototype._startPlaying = function(loop, offset) {
    if (this._loopLength > 0) {
     while (offset >= this._loopStart + this._loopLength) {
     offset -= this._loopLength;
     }
    }
    this._removeEndTimer();
    this._removeNodes();
    this._createNodes();
    this._connectNodes();
    this._sourceNode.loop = loop;
    this._sourceNode.start(0, offset);
    this._startTime = WebAudio._context.currentTime - offset / this._pitch;
    this._createEndTimer();
};

//-----------------------------------------------------------------------------
// 1.6.1 rpg_objects.js 变更
//-----------------------------------------------------------------------------

// Break Loop
Game_Interpreter.prototype.command113 = function() {
    var depth = 0;
    while (this._index < this._list.length - 1) {
        this._index++;
        var command = this.currentCommand();

        if (command.code === 112)
            depth++;

        if (command.code === 413) {
            if (depth > 0)
                depth--;
            else
                break;
        }
    }
    return true;
};

//=============================================================================
//  版本 1.5.2 到 1.6.1 变更-结束
//=============================================================================

}; // Yanfly.Param.Update152

//-----------------------------------------------------------------------------

//=============================================================================
// Desktop Optimization 变更
//=============================================================================

//-----------------------------------------------------------------------------
// Desktop Optimization rpg_core.js 变更
//-----------------------------------------------------------------------------

if (Yanfly.Param.UpdateDesktop) {

// Set up a flag to signify the Yanfly Desktop Optimization plugin is used.
// This is done for compatibility reasons.
//设置一个标志，表示使用了Yanfly桌面优化插件，这样做是出于兼容性的原因
Utils.RPGMAKER_VERSION.Yanfly = true;

// Replaced ForEach - 替换为ForEach语句
Sprite.prototype.update = function() {
  var length = this.children.length;
  for (var i = 0; i < length; ++i) {
    var child = this.children[i];
    if (child && child.update) child.update();
  };
};

// Replaced ForEach
Tilemap.prototype.update = function() {
  this.animationCount++;
  this.animationFrame = Math.floor(this.animationCount / 30);
  var length = this.children.length;
  for (var i = 0; i < length; ++i) {
    var child = this.children[i];
    if (child && child.update) child.update();
  }
  var length = this.bitmaps.length;
  for (var i = 0; i < length; ++i) {
    if (this.bitmaps[i]) this.bitmaps[i].touch();
  }
};

// Replaced ForEach
TilingSprite.prototype.update = function() {
  var length = this.children.length;
  for (var i = 0; i < length; ++i) {
    var child = this.children[i];
    if (child && child.update) child.update();
  }
};

// Replaced ForEach
Window.prototype.update = function() {
  if (this.active) this._animationCount++;
  var length = this.children.length;
  for (var i = 0; i < length; ++i) {
    var child = this.children[i];
    if (child && child.update) child.update();
  }
};

// Replaced ForEach
WindowLayer.prototype.update = function() {
  var length = this.children.length;
  for (var i = 0; i < length; ++i) {
    var child = this.children[i];
    if (child && child.update) child.update();
  }
};

// Replaced ForEach
Weather.prototype._updateAllSprites = function() {
  var maxSprites = Math.floor(this.power * 10);
  while (this._sprites.length < maxSprites) {
    this._addSprite();
  }
  while (this._sprites.length > maxSprites) {
    this._removeSprite();
  }
  var length = this._sprites.length;
  for (var i = 0; i < length; ++i) {
    var sprite = this._sprites[i];
    this._updateSprite(sprite);
    sprite.x = sprite.ax - this.origin.x;
    sprite.y = sprite.ay - this.origin.y;
  }
};

//-----------------------------------------------------------------------------
// Desktop Optimizatioin rpg_managers.js 变更
//-----------------------------------------------------------------------------

// Maintaining an old, renamed function
// 维护已重命名的旧函数
SceneManager._getTimeInMs = function() {
    return performance.now();
};

// Switched ImageManager.reserves into ImageManager.loads
// 已将ImageManager.reserves切换到ImageManager.loads
DataManager.loadSavefileImages = function(info) {
  if (info.characters) {
    for (var i = 0; i < info.characters.length; i++) {
      ImageManager.loadCharacter(info.characters[i][0]);
    }
  }
  if (info.faces) {
    for (var j = 0; j < info.faces.length; j++) {
      ImageManager.loadFace(info.faces[j][0]);
    }
  }
};

ImageManager.loadEmptyBitmap = function() {
  var empty = this.cache.getItem('empty');
  if (!empty) {
    empty = new Bitmap();
    this.cache.setItem('empty', empty);
  }
  return empty;
};

ImageManager.loadNormalBitmap = function(path, hue) {
  var key = path + ':' + hue;
  var bitmap = this.cache.getItem(key);
  if (!bitmap) {
    bitmap = Bitmap.load(path);
    bitmap.addLoadListener(function() {
        bitmap.rotateHue(hue);
    });
    this.cache.setItem(key, bitmap);
  }
  return bitmap;
};

ImageManager.clear = function() {
  this.cache.clear();
};

ImageManager.isReady = function() {
  for (var key in this.cache._inner) {
    var bitmap = this.cache._inner[key].item;
    if (bitmap.isError()) {
      throw new Error('加载失败：' + bitmap.url);
    }
    if (!bitmap.isReady()) {
      return false;
    }
  }
  return true;
};

// Added shouldUseCanvasRenderer condition
// 增加了 shouldUseCanvasRenderer 条件
SceneManager.preferableRendererType = function() {
  if (Utils.isOptionValid('canvas')) {
    return 'canvas';
  } else if (Utils.isOptionValid('webgl')) {
    return 'webgl';
  } else if (this.shouldUseCanvasRenderer()) {
    return 'canvas';
  } else {
    return 'auto';
  }
};

// Removed this.updateManagers
// 移除了 this.updateManagers
SceneManager.update = function() {
  try {
    this.tickStart();
    if (Utils.isMobileSafari()) {
      this.updateInputData();
    }
    this.updateMain();
    this.tickEnd();
  } catch (e) {
    this.catchException(e);
  }
};

// Refer to this._getTimeInMs instead of this._getTimeInMsWithoutMobileSafari
// 参考 this._getTimeInMs 而不是 this._getTimeInMsWithoutMobileSafari
SceneManager.updateMain = function() {
  if (Utils.isMobileSafari()) {
    this.changeScene();
    this.updateScene();
  } else {
    var newTime = this._getTimeInMs();
    var fTime = (newTime - this._currentTime) / 1000;
    if (fTime > 0.25) fTime = 0.25;
    this._currentTime = newTime;
    this._accumulator += fTime;
    while (this._accumulator >= this._deltaTime) {
      this.updateInputData();
      this.changeScene();
      this.updateScene();
      this._accumulator -= this._deltaTime;
    }
  }
  this.renderScene();
  this.requestUpdate();
};

// Utilize former cache system
// 利用以前的缓存系统
SceneManager.updateManagers = function(ticks, delta) {
  ImageManager.cache.update(ticks, delta);
};

//-----------------------------------------------------------------------------
// Desktop Optimization rpg_objects.js 变更
//-----------------------------------------------------------------------------

// No longer loads reserved images
// 不再加载保留的图像
Game_Interpreter.prototype.setup = function(list, eventId) {
  this.clear();
  this._mapId = $gameMap.mapId();
  this._eventId = eventId || 0;
  this._list = list;
};

// Change Tileset Event: load instead of reserve
// 变更地图块事件：加载而不是保留
Game_Interpreter.prototype.command282 = function() {
  var tileset = $dataTilesets[this._params[0]];
  for (var i = 0; i < tileset.tilesetNames.length; i++) {
    ImageManager.loadTileset(tileset.tilesetNames[i]);
  }
  if (ImageManager.isReady()) {
    $gameMap.changeTileset(this._params[0]);
    return true;
  } else {
    return false;
  }
};

//-----------------------------------------------------------------------------
// Desktop Optimization rpg_scenes.js 变更
//-----------------------------------------------------------------------------

// Removal of reservation ID
// 删除预订ID
Scene_Base.prototype.initialize = function() {
  Stage.prototype.initialize.call(this);
  this._active = false;
  this._fadeSign = 0;
  this._fadeDuration = 0;
  this._fadeSprite = null;
};

// Audio error checking added
// 已添加音频错误检查
Scene_Base.prototype.update = function() {
  this.updateFade();
  this.updateChildren();
  AudioManager.checkErrors();
};

// Replaced ForEach
Scene_Base.prototype.updateChildren = function() {
  var length = this.children.length;
  for (var i = 0; i < length; ++i) {
    var child = this.children[i];
    if (child.update) child.update();
  }
};

// Loaded image instead of reserving it
// 已加载图像而不是保留图像
Scene_Boot.prototype.loadSystemWindowImage = function() {
  ImageManager.loadSystem('Window');
};

// 已加载图像而不是保留它们
Scene_Boot.loadSystemImages = function() {
  ImageManager.loadSystem('IconSet');
  ImageManager.loadSystem('Balloon');
  ImageManager.loadSystem('Shadow1');
  ImageManager.loadSystem('Shadow2');
  ImageManager.loadSystem('Damage');
  ImageManager.loadSystem('States');
  ImageManager.loadSystem('Weapons1');
  ImageManager.loadSystem('Weapons2');
  ImageManager.loadSystem('Weapons3');
  ImageManager.loadSystem('ButtonSet');
};

// Game font now loads instead of being in the process of loading
// Loading time upped to 60 seconds from 20
// 游戏字体现在加载，而不是正在加载过程中
// 加载时间从20秒增加到60秒
Scene_Boot.prototype.isGameFontLoaded = function() {
  if (Graphics.isFontLoaded('GameFont')) {
    return true;
  } else {
    var elapsed = Date.now() - this._startDate;
    if (elapsed >= 60000) {
      throw new Error('游戏字体：GameFont加载失败');
    }
  }
};

// Clear requests removed for image reservation
// 清除已删除的图像保留请求
Scene_Map.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Scene_Base.prototype.terminate.call(this);
  if (!SceneManager.isNextScene(Scene_Battle)) {
    this._spriteset.update();
    this._mapNameWindow.hide();
    SceneManager.snapForBackground();
  }
  $gameScreen.clearZoom();
  this.removeChild(this._fadeSprite);
  this.removeChild(this._mapNameWindow);
  this.removeChild(this._windowLayer);
  this.removeChild(this._spriteset);
  this.clearChildren();
};

// Face reservation removed
// 面部保留已删除
Scene_Menu.prototype.createStatusWindow = function() {
  this._statusWindow = new Window_MenuStatus(this._commandWindow.width, 0);
  this.addWindow(this._statusWindow);
};

// Replaced ForEach
Scene_ItemBase.prototype.applyItem = function() {
    var action = new Game_Action(this.user());
    action.setItemObject(this.item());
    var repeats = action.numRepeats();
    var items = this.itemTargetActors();
    var length = items.length;
    for (var i = 0; i < length; ++i) {
      var target = items[i];
      for (var j = 0; j < repeats; ++j) {
        action.apply(target);
      }
    };
    action.applyGlobal();
};

// Refreshing the actor now occurs upon creation and instead of start
// 刷新角色现在发生在创作时，而不是开始
Scene_Skill.prototype.create = function() {
  Scene_ItemBase.prototype.create.call(this);
  this.createHelpWindow();
  this.createSkillTypeWindow();
  this.createStatusWindow();
  this.createItemWindow();
  this.createActorWindow();
  this.refreshActor();
};

// Refreshing the actor now occurs upon creation and instead of start
Scene_Skill.prototype.start = function() {
  Scene_ItemBase.prototype.start.call(this);
};

// Face reservation removed
Scene_Skill.prototype.createStatusWindow = function() {
  var wx = this._skillTypeWindow.width;
  var wy = this._helpWindow.height;
  var ww = Graphics.boxWidth - wx;
  var wh = this._skillTypeWindow.height;
  this._statusWindow = new Window_SkillStatus(wx, wy, ww, wh);
  this.addWindow(this._statusWindow);
};

// Refreshing the actor now occurs upon creation and instead of start
Scene_Status.prototype.create = function() {
  Scene_MenuBase.prototype.create.call(this);
  this._statusWindow = new Window_Status();
  this._statusWindow.setHandler('cancel',   this.popScene.bind(this));
  this._statusWindow.setHandler('pagedown', this.nextActor.bind(this));
  this._statusWindow.setHandler('pageup',   this.previousActor.bind(this));
  this._statusWindow.reserveFaceImages();
  this.addWindow(this._statusWindow);
  this.refreshActor();
};

// Refreshing the actor now occurs upon creation and instead of start
Scene_Status.prototype.start = function() {
  Scene_MenuBase.prototype.start.call(this);
};

// Image Reservation Clear Request removed
// 已删除图像保留清除请求
Scene_Battle.prototype.terminate = function() {
  Scene_Base.prototype.terminate.call(this);
  $gameParty.onBattleEnd();
  $gameTroop.onBattleEnd();
  AudioManager.stopMe();
};

//-----------------------------------------------------------------------------
// Desktop Optimization rpg_sprites.js 变更
//-----------------------------------------------------------------------------

// Ready preparation now refers to fully loaded instead of reservation
// 准备就绪现在指的是满载，而不是预订
Sprite_Animation.prototype.isReady = function() {
  return ImageManager.isReady();
};

// Replaced ForEach
Sprite_Animation.prototype.updateFrame = function() {
  if (this._duration > 0) {
    var frameIndex = this.currentFrameIndex();
    this.updateAllCellSprites(this._animation.frames[frameIndex]);
    var length = this._animation.timings.length;
    for (var i = 0; i < length; ++i) {
      var timing = this._animation.timings[i];
      if (timing.frame === frameIndex) this.processTimingData(timing);
    };
  }
};

// Cleaning algorithm up
//清理算法提升
Sprite_Animation.prototype.updateCellSprite = function(sprite, cell) {
  var pattern = cell[0];
  if (pattern >= 0) {
    var sx = pattern % 5 * 192;
    var sy = Math.floor(pattern % 100 / 5) * 192;
    var mirror = this._mirror;
    sprite.bitmap = pattern < 100 ? this._bitmap1 : this._bitmap2;
    sprite.setFrame(sx, sy, 192, 192);
    sprite.x = cell[1];
    sprite.y = cell[2];
    if (this._mirror) {
        sprite.x *= -1;
    }
    sprite.rotation = cell[4] * Math.PI / 180;
    sprite.scale.x = cell[3] / 100;
    if ((cell[5] && !mirror) || (!cell[5] && mirror)) {
        sprite.scale.x *= -1;
    }
    sprite.scale.y = cell[3] / 100;
    sprite.opacity = cell[6];
    sprite.blendMode = cell[7];
    sprite.visible = true;
  } else {
    sprite.visible = false;
  }
};

//-----------------------------------------------------------------------------
// Desktop Optimization rpg_windows.js 变更
//-----------------------------------------------------------------------------

// Load images upon initializing
// 初始化时加载图像
Window_MenuStatus.prototype.initialize = function(x, y) {
  var width = this.windowWidth();
  var height = this.windowHeight();
  Window_Selectable.prototype.initialize.call(this, x, y, width, height);
  this._formationMode = false;
  this._pendingIndex = -1;
  this.loadImages();
  this.refresh();
};

// 加载图像而不是保留
Window_MenuStatus.prototype.loadImages = function() {
  $gameParty.members().forEach(function(actor) {
    ImageManager.loadFace(actor.faceName());
  }, this);
};

// Removed actor null initializing
// 删除了初始化角色 null
Window_Status.prototype.initialize = function() {
  var width = Graphics.boxWidth;
  var height = Graphics.boxHeight;
  Window_Selectable.prototype.initialize.call(this, 0, 0, width, height);
  this.refresh();
  this.activate();
};

// Actor face loaded instead of reserved
// 角色面部已加载而不是保留
Window_NameEdit.prototype.initialize = function(actor, maxLength) {
  var width = this.windowWidth();
  var height = this.windowHeight();
  var x = (Graphics.boxWidth - width) / 2;
  var y = (Graphics.boxHeight - (height + this.fittingHeight(9) + 8)) / 2;
  Window_Base.prototype.initialize.call(this, x, y, width, height);
  this._actor = actor;
  this._name = actor.name().slice(0, this._maxLength);
  this._index = this._name.length;
  this._maxLength = maxLength;
  this._defaultName = this._name;
  this.deactivate();
  this.refresh();
  ImageManager.loadFace(actor.faceName());
};

// Image reservation ID removal
// 删除图像保留ID
Window_Message.prototype.initMembers = function() {
  this._background = 0;
  this._positionType = 2;
  this._waitCount = 0;
  this._faceBitmap = null;
  this._textState = null;
  this.clearFlags();
};

// Proper ready check for image loading instead of reservation
// 对图像加载进行适当的就绪检查，而不是保留
Window_Message.prototype.updateLoading = function() {
  if (this._faceBitmap) {
    if (ImageManager.isReady()) {
      this.drawMessageFace();
      this._faceBitmap = null;
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

// Face bitmap loaded instead of reserved
// 已加载而非保留的人脸位图
Window_Message.prototype.loadMessageFace = function() {
  this._faceBitmap = ImageManager.loadFace($gameMessage.faceName());
};

// Removal of reservation release function
// 取消预订释放功能
Window_Message.prototype.drawMessageFace = function() {
  this.drawFace($gameMessage.faceName(), $gameMessage.faceIndex(), 0, 0);
};

//=============================================================================
// Desktop Optimization 变更-结束
//=============================================================================

}; // Yanfly.Param.UpdateDesktop

//=============================================================================
// Maximize Path Finding - 最大化路径查找
//=============================================================================

ImageManager.loadNormalBitmap = function(path, hue) {
  var key = path + ':' + hue;
  var bitmap = this.cache.getItem(key);
  if (!bitmap) {
    bitmap = Bitmap.load(decodeURIComponent(path))
    bitmap.addLoadListener(function() {
        bitmap.rotateHue(hue);
    });
    this.cache.setItem(key, bitmap);
  }
  return bitmap;
};


//-----------------------------------------------------------------------------

//=============================================================================
// Version Fail Checks - 版本失败检查
//=============================================================================
} else if (!Utils.RPGMAKER_VERSION) {

var text = '';
text += '此错误是由于您试图在项目文件低于1.4.0版本时，运行YEP_X_CoreUpdatesOpt';
text += '有关如何将项目文件更新到1.4.0或更高版本的说明，请访问本线程： \n\n';
text += 'http://forums.rpgmakerweb.com/';
/*
text += 'You are getting this error because you are trying to run YEP_X_CoreUp';
text += 'datesOpt while your project files are lower than version 1.4.0. \n\n';
text += 'Please visit this thread for instructions on how to update your ';
text += 'project files to 1.4.0 or higher: \n\n';
text += 'http://forums.rpgmakerweb.com/';
*/
console.log(text);
require('nw.gui').Window.get().showDevTools();

} else if (Utils.RPGMAKER_VERSION < '1.4.0') {

var text = '';
text += '此错误是由于您试图在项目文件低于1.4.0版本时，运行YEP_X_CoreUpdatesOpt';
text += '有关如何将项目文件更新到1.4.0或更高版本的说明，请访问本线程： \n\n';
text += 'http://forums.rpgmakerweb.com/';
/*
text += 'You are getting this error because you are trying to run YEP_X_CoreUp';
text += 'datesOpt while your project files are lower than version 1.4.0. \n\n';
text += 'Please visit this thread for instructions on how to update your ';
text += 'project files to 1.4.0 or higher: \n\n';
text += 'http://forums.rpgmakerweb.com/';
*/
console.log(text);
require('nw.gui').Window.get().showDevTools();

} else {

var text = '';
text += '此错误是由于您在没有安装前置插件“YEP_CoreEngine”\n'
text += '或前置插件代码错误的情况下(例如：大中小括号不成对)的情况下\n'
text += '安装并试图启用YEP_X_CoreUpdatesOpt插件。\n\n';
text += '请访问Yanfly.moe或其他途径下载安装YEP_CoreEngine插件\n或正确的修复YEP_CoreEngine的代码后，再使用YEP_X_CoreUpdatesOpt插件。';
/*
text += 'You are getting this error because you are trying to run ';
text += 'YEP_X_CoreUpdatesOpt without the required plugins. Please visit ';
text += 'Yanfly.moe and install the required plugins neede for this plugin ';
text += 'found in this plugin\'s help file before you can use it.';
*/
console.log(text);
require('nw.gui').Window.get().showDevTools();

}; // Yanfly.PluginRequirements
//=============================================================================
// 文件末
//=============================================================================