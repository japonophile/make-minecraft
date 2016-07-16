// This file was automatically generated from alerts.soy.
// Please don't edit this file by hand.

if (typeof alerts == 'undefined') { var alerts = {}; }


alerts.all = function(opt_data, opt_ignored, opt_ijData) {
  return '<!-- Different prompts to be displayed to screen --><div><div class="alert" id="successAlert"></div><div class="alert" id="hintAlert"></div><div class="alert" id="finishedLevelAlert"></div><div class="alert" id="errorAlert"></div><span class="alert" id="clickMeAlert">Kanoブロックへ戻るにはTABを押して下さい</span></div>';
};

;
// This file was automatically generated from toolbox.soy.
// Please don't edit this file by hand.

if (typeof toolbox == 'undefined') { var toolbox = {}; }


toolbox.toolboxTemplate = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="' + ((opt_data.project < 7) ? 'x-ACTIONS' : 'ACTIONS') + '">' + ((opt_data.project >= 7) ? '<block type="api_postToChat"><value name="TEXT"><block type="text"><title name="TEXT"></title></block></value></block>' : '') + ((opt_data.project >= 11) ? '<block type="api_sleep"><value name="NUM"><block type="math_number"></block></value></block>' : '') + '</category><category name="' + ((opt_data.project < 2) ? 'x-NUMBERS' : 'NUMBERS') + '">' + ((opt_data.project >= 2) ? '<block type="math_number"></block>' : '') + ((opt_data.project >= 3) ? '<block type="api_xyz"></block>' : '') + ((opt_data.project >= 13) ? '<block type="api_xyzPlugIn"><value name="X"><block type="math_number"><title name="NUM">0</title></block></value><value name="Y"><block type="math_number"><title name="NUM">0</title></block></value><value name="Z"><block type="math_number"><title name="NUM">0</title></block></value></block>' : '') + ((opt_data.project >= 10) ? '<block type="math_arithmetic"></block>' : '') + '</category><category name="' + ((opt_data.project < 2) ? 'x-SETTERS' : 'SETTERS') + '">' + ((opt_data.project >= 8) ? '<block type="api_player_setTilePos"></block>' : '') + ((opt_data.project >= 2) ? '<block type="api_setFloor"></block>' : '') + ((opt_data.project >= 3) ? '<block type="api_setBlocks"></block>' : '') + ((opt_data.project >= 13) ? '<block type="setVariable"><value name="VALUE"><block type="math_number"><title name="NUM">0</title></block></value></block>' : '') + '</category><category name="' + ((opt_data.project < 2) ? 'x-GETTERS' : 'GETTERS') + '">' + ((opt_data.project >= 2) ? '<block type="api_blockType"></block>' : '') + ((opt_data.project >= 10) ? '<block type="getVariable"></block>' : '') + ((opt_data.project >= 12) ? '<block type="api_getBlock"><value name="X"><block type="math_number"><title name="NUM">0</title></block></value><value name="Y"><block type="math_number"><title name="NUM">0</title></block></value><value name="Z"><block type="math_number"><title name="NUM">0</title></block></value></block>' : '') + '</category><category name="' + ((opt_data.project < 10) ? 'x-LOOPS' : 'LOOPS') + '">' + ((opt_data.project >= 13) ? '<block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><title name="NUM">5</title></block></value></block>' : '') + ((opt_data.project >= 11) ? '<block type="controls_whileUntil"></block>' : '') + '</category><category name="' + ((opt_data.project < 12) ? 'x-LOGIC' : 'LOGIC') + '">' + ((opt_data.project >= 12) ? '<block type="controls_if"></block>' : '') + ((opt_data.project >= 12) ? '<block type="logic_compare"></block>' : '') + '</category></xml>';
};


toolbox.project1toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return toolbox.toolboxTemplate({project: 1}, null, opt_ijData);
};


toolbox.project2toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return toolbox.toolboxTemplate({project: 2}, null, opt_ijData);
};


toolbox.project3toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return toolbox.toolboxTemplate({project: 3}, null, opt_ijData);
};


toolbox.project4toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return toolbox.toolboxTemplate({project: 4}, null, opt_ijData);
};


toolbox.project5toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return toolbox.toolboxTemplate({project: 5}, null, opt_ijData);
};


toolbox.project6toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return toolbox.toolboxTemplate({project: 6}, null, opt_ijData);
};


toolbox.project7toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return toolbox.toolboxTemplate({project: 7}, null, opt_ijData);
};


toolbox.project8toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return toolbox.toolboxTemplate({project: 8}, null, opt_ijData);
};


toolbox.project9toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return toolbox.toolboxTemplate({project: 9}, null, opt_ijData);
};


toolbox.project10toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return toolbox.toolboxTemplate({project: 10}, null, opt_ijData);
};


toolbox.project11toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return toolbox.toolboxTemplate({project: 11}, null, opt_ijData);
};


toolbox.project12toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return toolbox.toolboxTemplate({project: 12}, null, opt_ijData);
};


toolbox.project13toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return toolbox.toolboxTemplate({project: 13}, null, opt_ijData);
};


toolbox.playgroundunlockedtoolbox = function(opt_data, opt_ignored, opt_ijData) {
  return toolbox.toolboxTemplate({project: 14}, null, opt_ijData);
};

;
// This file was automatically generated from workspace.soy.
// Please don't edit this file by hand.

if (typeof workspace == 'undefined') { var workspace = {}; }


workspace.topRight = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="topRight container"><button class="menu_buttons menu" title="チャレンジ一覧を表示" onclick="CodePreview.turn.off(); IO.cache(); Code.goToMenu()" id="displayMenuButton">一覧</button><button class="close" onclick="Code.close_window()">&times</button></div>';
};


workspace.toolbar = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="toolbar" class="toolbar"><div class="half left"><div class="progressInfo" onclick="IO.cache(); Help.hideScreen(); Project.goToIntro(Project.getLastVisited());"><img src="../../kano-blocks/blockly/media/challenge-overview.png"><span id="projectMessage" class="challengeTitle"></span></div><div class="stepsNavigation"><button class="previousStep" onclick="Project.tooltip.undo();"><img src="../../kano-blocks/blockly/media/1x1.gif" class="icon projectBack"></button><div class="progressBar"><span class="progressDoneBar"><span class="progressDoneBarEnd stepBlob currentStep"></span></span><span class="stepBlob maxStepsIndicator"><img src="../../kano-blocks/blockly/media/1x1.gif" class="icon greyLightning"><span class="maxSteps"></span></span></div><button class="nextStep" onclick="Project.tooltip.redo();"><img src="../../kano-blocks/blockly/media/1x1.gif" class="icon projectForward"></button></div></div><div class="half right"><button class="menu_buttons make" title="ブロックで定義したプログラムを実行" onclick="SoundFX.make.play(); IO.screenshot.updateSrc(); Minecraft.savePythonScript()" id="runButton"><img src=\'../../kano-blocks/blockly/media/1x1.gif\' class="icon lightning kano-icon">実行</button><button class="toggle code" title="ブロックによって作られたコードを見る"><input type="checkbox" id="codeSwitch" class="switch" onclick="CodePreview.toggle()"/><label for="codeSwitch"><span class="projectName">コード</span></label></button><button id="helpSwitch" class="toggle help" onclick="Help.toggle();" title="ヘルプを表示を見る"><img src="../../kano-blocks/blockly/media/1x1.gif"></button></div></div>';
};

;
// This file was automatically generated from dialog.soy.
// Please don't edit this file by hand.

if (typeof dialog == 'undefined') { var dialog = {}; }


dialog.splashFirst = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="splashFirst" class="dialog splash"><div>' + dialogElement.splashBottom({firstBoot: true}, null, opt_ijData) + '</div></div>';
};


dialog.splashOther = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="splashOther" class="dialog splash"><div>' + dialogElement.splashBottom({firstBoot: false}, null, opt_ijData) + '</div></div>';
};


dialog.mainMenu = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="menu" class="dialog main"><div id="menucontainer">' + dialogElement.closeButton({code: 'Code.closeMenu();'}, null, opt_ijData) + '<div class="top">' + dialogElement.mainMenuButtons(null, null, opt_ijData) + '</div><div class="bottom">' + dialogElement.hintToggle(null, null, opt_ijData) + '</div></div></div>';
};


dialog.challengeMenu = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="challengeMenu" class="dialog challenge"><div><div class="top">' + dialogElement.projectMenu(null, null, opt_ijData) + '</div><div class="bottom"><span class="button no-space" onclick=\'Project.goToIntro(Project.getLastVisited());\'>スタート</span></div></div></div>';
};


dialog.congratulations = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="congratulations" class="dialog congratulations challengeInfo post"><div>' + dialogElement.widget({id: 'congratulations', progress: false, heading: 'すごい！レベル: Make Minecraft完了！', subheading: 'おめでとう！<span class="challengeTitle"></span>が出来た！次に進もう...', content: [{type: 'text', class: 'stat code', label: '<img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator codeLines"> <span class="subheading">書いたコード</span> <span class="linesLabel"></span>'}, {type: 'text', class: 'stat xp', label: '<img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator xp"> <span class="subheading">獲得した経験値</span> <span class="xpLabel"></span>'}, {type: 'bottom'}, {type: 'spanbutton', buttonclass: 'back', spanclass: 'back', alignIcon: 'left', iconclass: 'back', code: 'location.href = "#challengeMenu";', label: ''}, {type: 'spanbutton', buttonclass: 'goToNext', spanclass: 'goToPlayground', alignIcon: 'none', iconclass: '', code: 'Project.goToNext();', label: '次へ'}]}, null, opt_ijData) + '</div></div>';
};


dialog.levelUp = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="levelUp" class="dialog levelUp challengeInfo post"><div>' + dialogElement.widget({id: 'levelUp', progress: false, heading: 'チャレンジ完了！', subheading: 'おめでとう！<span class="challengeTitle"></span>が出来た！次に進もう...', content: [{type: 'text', class: 'stat code', label: '<img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator codeLines"> <span class="subheading">書いたコード</span> <span class="linesLabel"></span>'}, {type: 'text', class: 'stat xp', label: '<img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator xp"> <span class="subheading">獲得した経験値</span> <span class="xpLabel"></span>'}, {type: 'bottom'}, {type: 'spanbutton', buttonclass: 'back', spanclass: 'back', alignIcon: 'left', iconclass: 'back', code: 'location.href = "#challengeMenu";', label: ''}, {type: 'spanbutton', buttonclass: 'goToNext', spanclass: 'goToPlayground', alignIcon: 'none', iconclass: '', code: 'Project.goToNext();', label: '次へ'}]}, null, opt_ijData) + '</div></div>';
};


dialog.projectIntro = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id=\'projectIntroDialog\' class=\'dialog challengeInfo pre\'><div>' + dialogElement.widget({id: 'challengeIntro', progress: false, heading: '<span class="challengeNumber"></span>: <span class="challengeTitle"></span>', subheading: '<span class="challengeDescription"></span>', content: [{type: 'text', class: 'stat objective', label: '<img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator objective"> <span class="subheading">新しいブロック</span> <span class="objectiveLabel"></span>'}, {type: 'text', class: 'stat badge', label: '<img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator badge"> <span class="subheading">ゲットできるバッジ</span> <span class="badgeLabel"></span>'}, {type: 'bottom'}, {type: 'spanbutton', buttonclass: 'back', spanclass: 'back', alignIcon: 'left', iconclass: 'back', code: 'location.href = "#challengeMenu";', label: ''}, {type: 'spanbutton', buttonclass: 'goToNext', spanclass: 'goToPlayground', alignIcon: 'none', iconclass: '', code: 'Project.switch(Project.getLastVisited());', label: 'GO!'}]}, null, opt_ijData) + '</div></div>';
};


dialog.replayProjectIntro = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="replayProjectIntroDialog" class="dialog levelUp challengeInfo post"><div>' + dialogElement.widget({id: 'levelUp', progress: false, heading: 'チャレンジ完了！', subheading: 'おめでとう！<span class="challengeTitle"></span>が出来た！次に進もう...', content: [{type: 'text', class: 'stat code', label: '<img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator codeLines"> <span class="subheading">書いたコード</span> <span class="linesLabel"></span>'}, {type: 'text', class: 'stat xp', label: '<img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator xp"> <span class="subheading">獲得した経験値</span> <span class="xpLabel"></span>'}, {type: 'bottom'}, {type: 'spanbutton', buttonclass: 'back', spanclass: 'back', alignIcon: 'left', iconclass: 'back', code: 'location.href = "#challengeMenu";', label: ''}, {type: 'spanbutton', buttonclass: 'goToNext', spanclass: 'goToPlayground', alignIcon: 'none', iconclass: '', code: 'Project.goToCurrent();', label: '再度実行'}]}, null, opt_ijData) + '</div></div>';
};


dialog.playgroundIntro = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="playgroundIntroDialog" class="dialog levelUp challengeInfo playground"><div>' + dialogElement.widget({id: 'levelUp', progress: false, heading: 'Playground!', subheading: 'Welcome to the Playground! In here you are able to put your skills to test and make whatever comes to mind.', content: [{type: 'bottom'}, {type: 'spanbutton', buttonclass: 'back', spanclass: 'back', alignIcon: 'none', iconclass: '', code: 'location.href = "#challengeMenu";', label: '<'}, {type: 'spanbutton', buttonclass: 'goToNext', spanclass: 'goToPlayground', alignIcon: 'none', iconclass: '', code: 'Project.switch(Project.getLastVisited());', label: 'GO!'}]}, null, opt_ijData) + '</div></div>';
};


dialog.makingGame = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="makingGame" class="dialog makingGame"><div id="makingGameMessage"><img src="media/tab_to_return.png"></div></div>';
};


dialog.loadSource = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="loadSource" class="dialog loadSource"><div id="loadSourceContainer">' + dialogElement.closeButton({code: 'location.href="#menu";'}, null, opt_ijData) + dialogElement.widget({id: 'loadSource', progress: false, heading: 'チャレンジをロードする', subheading: 'どこからロードしますか？', content: [{type: 'button', class: 'level_up_buttons loadXML', code: 'IO.load.file.remote.XML();', label: 'インターネット'}, {type: 'button', class: 'level_up_buttons loadXML', code: 'IO.load.file.local.XML("~/Minecraft-content");', label: 'KANO'}]}, null, opt_ijData) + '</div></div>';
};


dialog.loadMakeOrPlay = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="loadMakeOrPlay" class="dialog loadMakeOrPlay"><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}, null, opt_ijData) + dialogElement.widget({id: 'loadMakeOrPlay', progress: false, heading: 'ブロックをロードしますか？それとも自分で指示に従って作りますか？', subheading: '', content: [{type: 'button', class: 'level_up_buttons loadXML', code: 'window.location.href = "#clearBlocksLoadBlocksDialog"; ', label: 'ロードする'}, {type: 'button', class: 'level_up_buttons loadXML', code: 'Code.closeMenu(); Blockly.mainWorkspace.clear(); IO.load.inject.blocks.onWorkspace(IO.loadedChallenge); IO.save.XML(false,true); IO.load.inject.steps.dialog(IO.loadedChallenge);', label: '作る'}]}, null, opt_ijData) + '</div></div>';
};


dialog.loadFileFail = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="loadFileFail" class="dialog loadFileFail"><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}, null, opt_ijData) + dialogElement.widget({id: 'loadFileFail', progress: false, heading: '', subheading: '', content: [{type: 'image', src: '../../kano-blocks/blockly/media/Judoka-Error.png'}, {type: 'text', class: 'level_up_buttons loadXML', label: 'ファイルをアップロードできません。インターネットに接続していますか？'}]}, null, opt_ijData) + '</div></div>';
};


dialog.save = function(opt_data, opt_ignored, opt_ijData) {
  return dialogElement.export({id: 'saveDialog', class: 'save', label: 'SAVE', code: 'IO.save.XML()', input_id: 'filename_save'}, null, opt_ijData);
};


dialog.share = function(opt_data, opt_ignored, opt_ijData) {
  return dialogElement.export({id: 'shareDialog', class: 'share', label: 'SHARE', code: 'IO.shipBlocks()', input_id: 'filename_share'}, null, opt_ijData);
};


dialog.saveCode = function(opt_data, opt_ignored, opt_ijData) {
  return dialogElement.export({id: 'saveCodeDialog', class: 'save', label: 'SAVE', code: 'IO.save.advancedMode("save");', input_id: 'filename_save'}, null, opt_ijData);
};


dialog.tooltipTutorial = function(opt_data, opt_ignored, opt_ijData) {
  return '<!-- Tooltip tutoral --><div id=\'tutorialPointer\' class=\'tooltip\'></div><div id=\'tutorialDialog\' class=\'tooltipdialog\'></div>';
};


dialog.codePreview = function(opt_data, opt_ignored, opt_ijData) {
  return '<!-- The code preview dialog --><div id=\'codePreview\' class=\'codePreview hidden\'><div class=\'basicMode\'><pre id="code_preview_input" class=\'code\'></pre><div class=\'buttons\'><span class=\'button advancedModeToggle\' onclick=\'CodePreview.advancedMode.view(true);\' >上級モード</span></div></div><div class=\'advancedMode\'><pre id="advancedModeCode" class=\'code\' contenteditable=\'plaintext-only\'></pre><span class=\'errors\'><span class=\'heading\'>Errors</span><span class=\'msg\'></span></span><span class=\'guide hidden\'><span class=\'heading\'>Useful commands</span><span class=\'msg\'></span></span><div class=\'buttons\'><span class=\'button advancedModeToggle\' onclick=\'CodePreview.advancedMode.view(false);\'>ブロックモード</span><span class=\'button save\' onclick=\'location.href = "#saveCodeDialog"; IO.form.addListeners();\'>コード保存</span><span class=\'button load\' onclick=\'IO.load.file.local.python("~/Minecraft-content");\'>コード読込</span><span class=\'button guide\' onclick=\'CodePreview.advancedMode.guide.toggle();\'>文法ガイド</span></div></div></div>';
};


dialog.resetWorldDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id=\'resetWorldDialog\' class="dialog resetWorldDialog"><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}, null, opt_ijData) + dialogElement.widget({id: 'resetWorldElements', progress: false, heading: '本当にクリアしますか？', subheading: 'マインクラフトの世界で作ったものは全て失われます。', content: [{type: 'spanbutton', buttonclass: '', alignIcon: 'none', code: 'Minecraft.resetWorld(); location.href="#menu";', label: '了解'}, {type: 'spanbutton', buttonclass: 'red', alignIcon: 'none', code: 'location.href="#menu";', label: '取消'}]}, null, opt_ijData) + '</div></div>';
};


dialog.discardDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id=\'discardDialog\' class="dialog discardDialog"><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}, null, opt_ijData) + dialogElement.widget({id: 'discardElements', progress: false, heading: ' ', subheading: '', content: [{type: 'spanbutton', buttonclass: '', alignIcon: 'none', code: 'Code.closeMenu(); Code.discard();', label: '了解'}, {type: 'spanbutton', buttonclass: 'red', alignIcon: 'none', code: 'Code.closeMenu()', label: '取消'}]}, null, opt_ijData) + '</div></div>';
};


dialog.clearBlocksLoadBlocksDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id=\'clearBlocksLoadBlocksDialog\' class="dialog clearBlocksDialog"><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}, null, opt_ijData) + dialogElement.widget({id: 'clearBlocksElements', progress: false, heading: 'ワークスペースのブロックを削除しますか？', subheading: '', content: [{type: 'spanbutton', buttonclass: '', alignIcon: 'none', code: 'Code.closeMenu(); Blockly.mainWorkspace.clear(); IO.load.inject.blocks.onWorkspace(IO.loadedChallenge);', label: 'はい'}, {type: 'spanbutton', buttonclass: 'red', alignIcon: 'none', code: 'Code.closeMenu(); IO.load.inject.blocks.onWorkspace(IO.loadedChallenge);', label: 'いいえ'}]}, null, opt_ijData) + '</div></div>';
};


dialog.clearBlocksLoadStepsDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id=\'clearBlocksLoadStepsDialog\' class=\'dialog clearBlocksDialog\'><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}, null, opt_ijData) + dialogElement.widget({id: 'clearBlocksElements', progress: false, heading: 'ワークスペースのブロックを削除しますか？', subheading: '', content: [{type: 'spanbutton', buttonclass: '', alignIcon: 'none', code: 'Code.closeMenu(); Blockly.mainWorkspace.clear(); IO.tooltip.display(IO.loadedChallenge);', label: 'はい'}, {type: 'spanbutton', buttonclass: 'red', alignIcon: 'none', code: 'Code.closeMenu(); IO.tooltip.display(IO.loadedChallenge);', label: 'いいえ'}]}, null, opt_ijData) + '</div></div>';
};


dialog.advancedModeExplainDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id=\'advancedModeExplainDialog\' class="dialog advancedModeExplainDialog"><div>' + dialogElement.closeButton({code: 'Code.closeMenu();'}, null, opt_ijData) + dialogElement.widget({id: 'clearBlocksElements', progress: false, heading: '上級モード', subheading: '上級モードへようこそ！ここでコードをライブで編集できます。', content: [{type: 'bottom'}, {type: 'spanbutton', buttonclass: 'green', alignIcon: 'none', code: 'Code.closeMenu();', label: '進む'}]}, null, opt_ijData) + '</div></div>';
};

;
// This file was automatically generated from dialog_element.soy.
// Please don't edit this file by hand.

if (typeof dialogElement == 'undefined') { var dialogElement = {}; }


dialogElement.closeButton = function(opt_data, opt_ignored, opt_ijData) {
  return '<div height="0px" style="text-align:right;"><button class="close" onclick="' + soy.$$escapeHtml(opt_data.code) + '">&times;</button></div>';
};


dialogElement.splashBottom = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="top"><img alt=\'マインクラフト\' src=\'media/intro.png\', class=\'minecraft-splash\'></div><div class="bottom">' + ((opt_data.firstBoot) ? '<button class="orange_text" onclick="location.href=\'#challengeMenu\';">飛ばす</button><button class="button orange no-space" onclick="(function(e) {e.target.disabled = true; backend.call(\'play_intro\', function() {e.target.disabled = false;}); location.href=\'#challengeMenu\';})(event); ">ビデオを再生</button>' : '<button class="orange_text" onclick="(function(e) {e.target.disabled = true; backend.call(\'play_intro\', function() {e.target.disabled = false;});})(event); ">ビデオを観る</button><button class="button red no-space" onclick="Code.close_window();">閉じる</button><button class="button no-space" onclick="location.href=\'#challengeMenu\';">スタート</button>') + '</div>';
};


dialogElement.widget = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div class="' + opt_data.id + '"><div class="top">' + ((opt_data.progress) ? '<div class="preheading">チャレンジ: 13個中の<span class="challengeNumber"></span></div>' : '') + ((opt_data.heading != '') ? '<div class=\'heading\'>' + opt_data.heading + '</div>' : '') + ((opt_data.subheading != '') ? '<div class=\'subheading\'>' + opt_data.subheading + '</div>' : '') + '<br>';
  var objectList380 = opt_data.content;
  var objectListLen380 = objectList380.length;
  for (var objectIndex380 = 0; objectIndex380 < objectListLen380; objectIndex380++) {
    var objectData380 = objectList380[objectIndex380];
    switch (objectData380.type) {
      case 'bottom':
        output += '</div><div class=\'bottom\'>';
        break;
      case 'text':
        output += '<span class=\'' + objectData380['class'] + '\'>' + objectData380.label + '</span>';
        break;
      case 'button':
        output += '<button class=\'level_up_buttons\' class=\'' + objectData380['class'] + '\' onclick=\'' + objectData380.code + '\'>' + objectData380.label + '</button>';
        break;
      case 'spanbutton':
        output += '<span class=\'button level_up_buttons dialogItem ' + objectData380.buttonclass + '\' onclick=\'' + objectData380.code + '\'>' + ((objectData380.alignIcon == 'left') ? '<img src=\'../../kano-blocks/blockly/media/1x1.gif\' class=\'icon projectMenuIcons ' + objectData380.iconclass + '\'><span class=\'' + objectData380.spanclass + '\'>' + objectData380.label + '</span>' : (objectData380.alignIcon == 'right') ? '<span class=\'' + objectData380.spanclass + '\'>' + objectData380.label + '</span><img src=\'../../kano-blocks/blockly/media/1x1.gif\' class=\'icon projectMenuIcons ' + objectData380.iconclass + '\'>' : (objectData380.alignIcon == 'none') ? '<span class=\'' + objectData380.spanclass + '\'>' + objectData380.label + '</span>' : '') + '</span>';
        break;
      case 'image':
        output += ((! (objectIndex380 == 0)) ? '<br>' : '') + '<img src="' + objectData380.src + '">' + ((! (objectIndex380 == objectListLen380 - 1)) ? '<br>' : '');
        break;
      default:
        output += objectData380;
    }
  }
  output += '</div></div></div>';
  return output;
};


dialogElement.projectMenuItem = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id=\'project' + soy.$$escapeHtml(opt_data.projectNo) + '\' class=\'dialogItem projectMenu locked\' onclick=\'Project.goToIntro(' + soy.$$escapeHtml(opt_data.projectNo) + ');\'><span class=\'text\'>' + soy.$$escapeHtml(opt_data.projectText) + '</span><span class=\'projectNumber\'>' + soy.$$escapeHtml(opt_data.projectNo) + '</span><span class=\'bottom\'><span class=\'indicator xp\'><img src=\'../../kano-blocks/blockly/media/1x1.gif\' class=\'indicator xp\'><span class=\'xpLabel\'></span></span><span class=\'indicator objective\'><img src=\'../../kano-blocks/blockly/media/1x1.gif\' class=\'indicator objective\'></span><span class=\'indicator badge\'><img src=\'../../kano-blocks/blockly/media/1x1.gif\' class=\'indicator badge\'></span></span></span>';
};


dialogElement.playgroundMenuItem = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="project' + soy.$$escapeHtml(opt_data.projectNo) + '" class="dialogItem playground locked" onclick="Project.goToIntro(' + soy.$$escapeHtml(opt_data.projectNo) + ')"><span class="text">想像力を働かせよう</span><span class="projectNumber playgroundName">遊び場</span><span class=\'bottom\'></span></span>';
};


dialogElement.projectMenu = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<!-- Unlocks as user progresses through project -->';
  var projectTexts__soy460 = ['マインクラフトをコードで作ろう', 'ダイヤモンドの床', '浮く水キューブ', '暗いトンネル', '家を作ろう', '火山', 'ハローワールド', '念力移動', '空の刑務所', 'インスタント牧場', '溶岩の道', '冷凍！', '水の滑り台'];
  output += '<div class="challengeMenuList"><span class="challengeMenuRow">';
  for (var i462 = 0; i462 < 9; i462++) {
    output += dialogElement.projectMenuItem({projectNo: i462 + 1, projectText: projectTexts__soy460[i462]}, null, opt_ijData);
  }
  output += '</span><span class="challengeMenuRow">';
  for (var i467 = 9; i467 < 13; i467++) {
    output += dialogElement.projectMenuItem({projectNo: i467 + 1, projectText: projectTexts__soy460[i467]}, null, opt_ijData);
  }
  output += dialogElement.playgroundMenuItem({projectNo: '14'}, null, opt_ijData) + '</span></div>';
  return output;
};


dialogElement.mainMenuButtons = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="mainMenuButtons"><div><button class="menu_buttons saveXML" id="saveButton" title="ブロックのプログラムをXMLとして保存する。" onclick="IO.screenshot.refreshElements(); location.href=\'#saveDialog\'; IO.form.addListeners();">保存</button> <button class="menu_buttons loadXML" id="loadButton" onclick=location.href=\'#loadSource\' title="XMLからブロックのプログラムをロードする">ロード</button> </div><div><button class="menu_buttons launch" id="shipButton" title="ブロックのプログラムを世界の友達と共有する" onclick="IO.screenshot.refreshElements(); location.href=\'#shareDialog\'; IO.form.addListeners();">共有</button> <button class="menu_buttons exitButton" title="プロジェクトを閉じる" onclick="Code.close_window();">閉じる</button> </div></div>';
};


dialogElement.hintToggle = function(opt_data, opt_ignored, opt_ijData) {
  return '<span><button class="toggle_button"><!--Hints toggle switch--><span class="toggle_container"><input type="checkbox" id="tutorialSwitch" name="tutorialSwitch" class="switch" onclick="Code.tutorial_toggle()" checked/><label for="tutorialSwitch"><span class="projectName">ヒント？</span></label></span></button><button class="deleteButton reset" title="マインクラフトの世界をリセットする" onclick="Minecraft.showResetOption()">新しい世界</button><button class="deleteButton clear" title="全てのブロックを削除する" onclick="Code.closeMenu(); Code.confirmDiscard();">リセット</button></div></span>';
};


dialogElement.export = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="' + soy.$$escapeHtml(opt_data.id) + '" class="dialog ' + soy.$$escapeHtml(opt_data['class']) + '"><div id="' + soy.$$escapeHtml(opt_data['class']) + '">' + dialogElement.closeButton({code: 'location.href="#menu"; IO.form.removeListeners();'}, null, opt_ijData) + '<div class="leftPane"><div class="screenshotBorder"><img src="./media/minecraft.png" class="screenshot"><span>スクリーンショット</span></div></div><div class="rightPane"><input class="filename" type="text" name="filename" id=\'' + soy.$$escapeHtml(opt_data.input_id) + '\' maxlength="200" placeholder="タイトル"><textarea class="description" name="description" maxlength="500" placeholder="説明"></textarea><button class="menu_buttons launch disabled" id="shipButton" disabled=true title="ブロックを世界の友達と共有する" onclick="' + soy.$$escapeHtml(opt_data.code) + '">' + soy.$$escapeHtml(opt_data.label) + '</button></div></div></div>';
};

;
// This file was automatically generated from template_g.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">ビジュアルなプログラミング環境</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">生成されたジャバスクリプトのコードを見る</span><span id="linkTooltip">保存し、ブロックと繋ぐ</span><span id="runTooltip">ワークスペースのブロックで定義したプログラムを走らせる</span><span id="runProgram">プログラム実行</span><span id="resetProgram">リセット</span><span id="catLogic">論理</span><span id="catLoops">ループ</span><span id="catMath">算数</span><span id="catText">テキスト</span><span id="catLists">リスト</span><span id="catColour">色</span><span id="catVariables">変数</span><span id="catProcedures">手順</span><span id="httpRequestError">リクェストで問題が発生しました</span><span id="linkAlert">次のリンクでブロックを共有してください:\\n\\n%1</span><span id="hashError">\'%1\'に該当するプログラムが見つかりません</span><span id="xmlError">保存したファイルを読み込めません。Blocklyの別のバージョンで作られたかもしれません。</span><span id="listVariable">list</span><span id="textVariable">text</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<style type="text/css">#dialog {visibility: hidden; background-color: #fff; color: #000; border: 1px solid #000; position: absolute; border-radius: 8px; box-shadow: 5px 5px 5px #888; padding: 10px;}#dialogBorder {visibility: hidden; position: absolute; background-color: #fff; color: #000; border: 1px solid #000; border-radius: 8px; box-shadow: 5px 5px 5px #888;}#dialogShadow {visibility: hidden; position: fixed; top: 0; left: 0; height: 100%; width: 100%; background-color: #000; opacity: 0.3}.dialogAnimate {transition-property: width, height, left, top, opacity; transition-duration: 0.2s; transition-timing-function: linear;}.dialogHiddenContent {visibility: hidden; position: absolute; top: 0; left: 0; z-index: -1;}</style><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button onclick="BlocklyApps.hideDialog(true)">了解</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof codepage == 'undefined') { var codepage = {}; }


codepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Code_badXml">XMLのパースで失敗しました:\\n%1\\n\\n修正を破棄しますか？</span><span id="Code_badCode">プログラムエラー:\\n%1</span><span id="Code_timeout">繰り返しの上限を超えました</span><span id="Code_discard">%1個のブロックを全て削除しますか？</span></div>';
};


codepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return codepage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../kano-blocks/src/generated/blockly_compressed.js"><\/script><script type="text/javascript" src="core/generator.js"><\/script><script type="text/javascript" src="generated/python_compressed.js"><\/script><script type="text/javascript" src="generated/' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><!-- Dialogs -->' + dialog.splashFirst(null, null, opt_ijData) + dialog.splashOther(null, null, opt_ijData) + dialog.mainMenu(null, null, opt_ijData) + dialog.challengeMenu(null, null, opt_ijData) + dialog.projectIntro(null, null, opt_ijData) + dialog.playgroundIntro(null, null, opt_ijData) + dialog.replayProjectIntro(null, null, opt_ijData) + dialog.congratulations(null, null, opt_ijData) + dialog.levelUp(null, null, opt_ijData) + dialog.makingGame(null, null, opt_ijData) + dialog.loadSource(null, null, opt_ijData) + dialog.loadMakeOrPlay(null, null, opt_ijData) + dialog.loadFileFail(null, null, opt_ijData) + dialog.save(null, null, opt_ijData) + dialog.share(null, null, opt_ijData) + dialog.saveCode(null, null, opt_ijData) + dialog.tooltipTutorial(null, null, opt_ijData) + dialog.codePreview(null, null, opt_ijData) + dialog.resetWorldDialog(null, null, opt_ijData) + dialog.discardDialog(null, null, opt_ijData) + dialog.clearBlocksLoadBlocksDialog(null, null, opt_ijData) + dialog.clearBlocksLoadStepsDialog(null, null, opt_ijData) + dialog.advancedModeExplainDialog(null, null, opt_ijData) + alerts.all(null, null, opt_ijData) + workspace.topRight(null, null, opt_ijData) + '<!-- Where the blocks and python code is shown --><div id="content_container"><div id="blocks_container"><div id="content_blocks" class="content"></div></div>' + apps.dialog(null, null, opt_ijData) + '</div>' + workspace.toolbar(null, null, opt_ijData) + helpScreen.help(null, null, opt_ijData) + '</div>';
};

;
// This file was automatically generated from help_screen.soy.
// Please don't edit this file by hand.

if (typeof helpScreen == 'undefined') { var helpScreen = {}; }


helpScreen.help = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="helpScreen"><div><button class="closeButton" onclick="Help.hideScreen();">&times</button>' + helpScreen.leftHalf(null, null, opt_ijData) + helpScreen.rightHalf(null, null, opt_ijData) + '</div></div>';
};


helpScreen.leftHalf = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="leftHalf"><div class="verticalContainer"><div id="helpTitle" class="helpTitle">タイトルのデフォルト値です</div><div id="helpDescription" class="helpDescription">説明のデフォルト値です</div><br><div class="blueBorder"><div class="stepHeading">前のステップ</div><div id="prevStep" class="helpDescription">前のステップのデフォルト文です</div></div><div class="blackBorder"><div class="stepHeading">次のステップ</div><div id="nextStep" class="helpDescription">次のステップのデフォルト文です</div></div></div></div>';
};


helpScreen.rightHalf = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="rightHalf"><div id="stillStuck" class="controlsContainer verticalContainer"><div class="stillStuck helpTitle">手こずってますか？</div><button id="showSolutionButton" class="greenButton" onclick="Help.showBlockConfiguration();">正解を表示</button><button id="controlsButton" class="greenButton" onclick="Help.showBlockControls();">ブロックを表示</button><!-- This is commented out in case we want to add the walkthrough button later --><!--<button id="walkthroughButton" class="greenButton" onclick="Help.showForumPage();">WALKTHROUGH</button>--></div><div id="blockSolution" class="controlsContainer verticalContainer"><img id="blockSolutionImg"><div><button class="redButton" onclick="Help.showMenu();">戻る</button></div></div><!-- This is commented out in case we want to add the walkthrough button later --><!--<div id="forumPage" class="controlsContainer verticalContainer"><div class="helpDescription">Launching the forum.  This may take a few seconds.</div><button class="redButton" onclick="Help.showMenu();">BACK</button></div>--><div id="blockControls" class="controlsContainer verticalContainer"><div><img src=\'media/mccontrols.png\'></div><button class="redButton" onclick="Help.showMenu();">戻る</button></div></div>';
};
