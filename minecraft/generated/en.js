// This file was automatically generated from alerts.soy.
// Please don't edit this file by hand.

if (typeof alerts == 'undefined') { var alerts = {}; }


alerts.all = function(opt_data, opt_ignored, opt_ijData) {
  return '<!-- Different prompts to be displayed to screen --><div><div class="alert" id="successAlert"></div><div class="alert" id="hintAlert"></div><div class="alert" id="finishedLevelAlert"></div><div class="alert" id="errorAlert"></div><span class="alert" id="clickMeAlert">Press TAB to return to Kano Blocks</span></div>';
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
  return '<div class="topRight container"><button class="menu_buttons menu" title="Display the challenges menu" onclick="CodePreview.turn.off(); IO.cache(); Code.goToMenu()" id="displayMenuButton">MENU</button><button class="close" onclick="Code.close_window()">&times</button></div>';
};


workspace.toolbar = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="toolbar" class="toolbar"><div class="half left"><div class="progressInfo" onclick="IO.cache(); Help.hideScreen(); Project.goToIntro(Project.getLastVisited());"><img src="../../kano-blocks/blockly/media/challenge-overview.png"><span id="projectMessage" class="challengeTitle"></span></div><div class="stepsNavigation"><button class="previousStep" onclick="Project.tooltip.undo();"><img src="../../kano-blocks/blockly/media/1x1.gif" class="icon projectBack"></button><div class="progressBar"><span class="progressDoneBar"><span class="progressDoneBarEnd stepBlob currentStep"></span></span><span class="stepBlob maxStepsIndicator"><img src="../../kano-blocks/blockly/media/1x1.gif" class="icon greyLightning"><span class="maxSteps"></span></span></div><button class="nextStep" onclick="Project.tooltip.redo();"><img src="../../kano-blocks/blockly/media/1x1.gif" class="icon projectForward"></button></div></div><div class="half right"><button class="menu_buttons make" title="Run the program defined by the blocks in the workspace." onclick="SoundFX.make.play(); IO.screenshot.updateSrc(); Minecraft.savePythonScript()" id="runButton"><img src=\'../../kano-blocks/blockly/media/1x1.gif\' class="icon lightning kano-icon">MAKE</button><button class="toggle code" title="Show the code your blocks have generated"><input type="checkbox" id="codeSwitch" class="switch" onclick="CodePreview.toggle()"/><label for="codeSwitch"><span class="projectName">CODE</span></label></button><button id="helpSwitch" class="toggle help" onclick="Help.toggle();" title="Show the code your blocks have generated"><img src="../../kano-blocks/blockly/media/1x1.gif"></button></div></div>';
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
  return '<div id="challengeMenu" class="dialog challenge"><div><div class="top">' + dialogElement.projectMenu(null, null, opt_ijData) + '</div><div class="bottom"><span class="button no-space" onclick=\'Project.goToIntro(Project.getLastVisited());\'>START</span></div></div></div>';
};


dialog.congratulations = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="congratulations" class="dialog congratulations challengeInfo post"><div>' + dialogElement.widget({id: 'congratulations', progress: false, heading: 'Wow! Level: Make Minecraft completed!', subheading: 'Great work, you beat <span class="challengeTitle"></span>! Lets keep making...', content: [{type: 'text', class: 'stat code', label: '<img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator codeLines"> <span class="subheading">CODE WRITTEN</span> <span class="linesLabel"></span>'}, {type: 'text', class: 'stat xp', label: '<img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator xp"> <span class="subheading">XP EARNED</span> <span class="xpLabel"></span>'}, {type: 'bottom'}, {type: 'spanbutton', buttonclass: 'back', spanclass: 'back', alignIcon: 'left', iconclass: 'back', code: 'location.href = "#challengeMenu";', label: ''}, {type: 'spanbutton', buttonclass: 'goToNext', spanclass: 'goToPlayground', alignIcon: 'none', iconclass: '', code: 'Project.goToNext();', label: 'NEXT'}]}, null, opt_ijData) + '</div></div>';
};


dialog.levelUp = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="levelUp" class="dialog levelUp challengeInfo post"><div>' + dialogElement.widget({id: 'levelUp', progress: false, heading: 'Challenge Complete!', subheading: 'Great work, you beat <span class="challengeTitle"></span>! Lets keep making...', content: [{type: 'text', class: 'stat code', label: '<img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator codeLines"> <span class="subheading">CODE WRITTEN</span> <span class="linesLabel"></span>'}, {type: 'text', class: 'stat xp', label: '<img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator xp"> <span class="subheading">XP EARNED</span> <span class="xpLabel"></span>'}, {type: 'bottom'}, {type: 'spanbutton', buttonclass: 'back', spanclass: 'back', alignIcon: 'left', iconclass: 'back', code: 'location.href = "#challengeMenu";', label: ''}, {type: 'spanbutton', buttonclass: 'goToNext', spanclass: 'goToPlayground', alignIcon: 'none', iconclass: '', code: 'Project.goToNext();', label: 'NEXT'}]}, null, opt_ijData) + '</div></div>';
};


dialog.projectIntro = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id=\'projectIntroDialog\' class=\'dialog challengeInfo pre\'><div>' + dialogElement.widget({id: 'challengeIntro', progress: false, heading: '<span class="challengeNumber"></span>: <span class="challengeTitle"></span>', subheading: '<span class="challengeDescription"></span>', content: [{type: 'text', class: 'stat objective', label: '<img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator objective"> <span class="subheading">NEW BLOCKS</span> <span class="objectiveLabel"></span>'}, {type: 'text', class: 'stat badge', label: '<img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator badge"> <span class="subheading">UNLOCK BADGE</span> <span class="badgeLabel"></span>'}, {type: 'bottom'}, {type: 'spanbutton', buttonclass: 'back', spanclass: 'back', alignIcon: 'left', iconclass: 'back', code: 'location.href = "#challengeMenu";', label: ''}, {type: 'spanbutton', buttonclass: 'goToNext', spanclass: 'goToPlayground', alignIcon: 'none', iconclass: '', code: 'Project.switch(Project.getLastVisited());', label: 'GO!'}]}, null, opt_ijData) + '</div></div>';
};


dialog.replayProjectIntro = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="replayProjectIntroDialog" class="dialog levelUp challengeInfo post"><div>' + dialogElement.widget({id: 'levelUp', progress: false, heading: 'Challenge Complete!', subheading: 'Great work, you beat <span class="challengeTitle"></span>! Lets keep making...', content: [{type: 'text', class: 'stat code', label: '<img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator codeLines"> <span class="subheading">CODE WRITTEN</span> <span class="linesLabel"></span>'}, {type: 'text', class: 'stat xp', label: '<img src="../../kano-blocks/blockly/media/1x1.gif" class="indicator xp"> <span class="subheading">XP EARNED</span> <span class="xpLabel"></span>'}, {type: 'bottom'}, {type: 'spanbutton', buttonclass: 'back', spanclass: 'back', alignIcon: 'left', iconclass: 'back', code: 'location.href = "#challengeMenu";', label: ''}, {type: 'spanbutton', buttonclass: 'goToNext', spanclass: 'goToPlayground', alignIcon: 'none', iconclass: '', code: 'Project.goToCurrent();', label: 'REPLAY'}]}, null, opt_ijData) + '</div></div>';
};


dialog.playgroundIntro = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="playgroundIntroDialog" class="dialog levelUp challengeInfo playground"><div>' + dialogElement.widget({id: 'levelUp', progress: false, heading: 'Playground!', subheading: 'Welcome to the Playground! In here you are able to put your skills to test and make whatever comes to mind.', content: [{type: 'bottom'}, {type: 'spanbutton', buttonclass: 'back', spanclass: 'back', alignIcon: 'none', iconclass: '', code: 'location.href = "#challengeMenu";', label: '<'}, {type: 'spanbutton', buttonclass: 'goToNext', spanclass: 'goToPlayground', alignIcon: 'none', iconclass: '', code: 'Project.switch(Project.getLastVisited());', label: 'GO!'}]}, null, opt_ijData) + '</div></div>';
};


dialog.makingGame = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="makingGame" class="dialog makingGame"><div id="makingGameMessage"><img src="media/tab_to_return.png"></div></div>';
};


dialog.loadSource = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="loadSource" class="dialog loadSource"><div id="loadSourceContainer">' + dialogElement.closeButton({code: 'location.href="#menu";'}, null, opt_ijData) + dialogElement.widget({id: 'loadSource', progress: false, heading: 'Load challenge', subheading: 'Choose where to load from', content: [{type: 'button', class: 'level_up_buttons loadXML', code: 'IO.load.file.remote.XML();', label: 'INTERNET'}, {type: 'button', class: 'level_up_buttons loadXML', code: 'IO.load.file.local.XML("~/Minecraft-content");', label: 'YOUR KANO'}]}, null, opt_ijData) + '</div></div>';
};


dialog.loadMakeOrPlay = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="loadMakeOrPlay" class="dialog loadMakeOrPlay"><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}, null, opt_ijData) + dialogElement.widget({id: 'loadMakeOrPlay', progress: false, heading: 'Do you want to load the blocks or make it yourself with steps', subheading: '', content: [{type: 'button', class: 'level_up_buttons loadXML', code: 'window.location.href = "#clearBlocksLoadBlocksDialog"; ', label: 'PLAY'}, {type: 'button', class: 'level_up_buttons loadXML', code: 'Code.closeMenu(); Blockly.mainWorkspace.clear(); IO.load.inject.blocks.onWorkspace(IO.loadedChallenge); IO.save.XML(false,true); IO.load.inject.steps.dialog(IO.loadedChallenge);', label: 'MAKE'}]}, null, opt_ijData) + '</div></div>';
};


dialog.loadFileFail = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="loadFileFail" class="dialog loadFileFail"><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}, null, opt_ijData) + dialogElement.widget({id: 'loadFileFail', progress: false, heading: '', subheading: '', content: [{type: 'image', src: '../../kano-blocks/blockly/media/Judoka-Error.png'}, {type: 'text', class: 'level_up_buttons loadXML', label: 'Cannot upload file. Are you connected to the internet?'}]}, null, opt_ijData) + '</div></div>';
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
  return '<!-- The code preview dialog --><div id=\'codePreview\' class=\'codePreview hidden\'><div class=\'basicMode\'><pre id="code_preview_input" class=\'code\'></pre><div class=\'buttons\'><span class=\'button advancedModeToggle\' onclick=\'CodePreview.advancedMode.view(true);\' >ADVANCED MODE</span></div></div><div class=\'advancedMode\'><pre id="advancedModeCode" class=\'code\' contenteditable=\'plaintext-only\'></pre><span class=\'errors\'><span class=\'heading\'>Errors</span><span class=\'msg\'></span></span><span class=\'guide hidden\'><span class=\'heading\'>Useful commands</span><span class=\'msg\'></span></span><div class=\'buttons\'><span class=\'button advancedModeToggle\' onclick=\'CodePreview.advancedMode.view(false);\'>BLOCKS MODE</span><span class=\'button save\' onclick=\'location.href = "#saveCodeDialog"; IO.form.addListeners();\'>SAVE CODE</span><span class=\'button load\' onclick=\'IO.load.file.local.python("~/Minecraft-content");\'>LOAD CODE</span><span class=\'button guide\' onclick=\'CodePreview.advancedMode.guide.toggle();\'>SYNTAX GUIDE</span></div></div></div>';
};


dialog.resetWorldDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id=\'resetWorldDialog\' class="dialog resetWorldDialog"><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}, null, opt_ijData) + dialogElement.widget({id: 'resetWorldElements', progress: false, heading: 'Do you REALLY want to do this?', subheading: 'You will lose everything you\'ve built in your Minecraft world.', content: [{type: 'spanbutton', buttonclass: '', alignIcon: 'none', code: 'Minecraft.resetWorld(); location.href="#menu";', label: 'OK'}, {type: 'spanbutton', buttonclass: 'red', alignIcon: 'none', code: 'location.href="#menu";', label: 'CANCEL'}]}, null, opt_ijData) + '</div></div>';
};


dialog.discardDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id=\'discardDialog\' class="dialog discardDialog"><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}, null, opt_ijData) + dialogElement.widget({id: 'discardElements', progress: false, heading: ' ', subheading: '', content: [{type: 'spanbutton', buttonclass: '', alignIcon: 'none', code: 'Code.closeMenu(); Code.discard();', label: 'OK'}, {type: 'spanbutton', buttonclass: 'red', alignIcon: 'none', code: 'Code.closeMenu()', label: 'CANCEL'}]}, null, opt_ijData) + '</div></div>';
};


dialog.clearBlocksLoadBlocksDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id=\'clearBlocksLoadBlocksDialog\' class="dialog clearBlocksDialog"><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}, null, opt_ijData) + dialogElement.widget({id: 'clearBlocksElements', progress: false, heading: 'Clear the blocks on the workspace?', subheading: '', content: [{type: 'spanbutton', buttonclass: '', alignIcon: 'none', code: 'Code.closeMenu(); Blockly.mainWorkspace.clear(); IO.load.inject.blocks.onWorkspace(IO.loadedChallenge);', label: 'YES'}, {type: 'spanbutton', buttonclass: 'red', alignIcon: 'none', code: 'Code.closeMenu(); IO.load.inject.blocks.onWorkspace(IO.loadedChallenge);', label: 'NO'}]}, null, opt_ijData) + '</div></div>';
};


dialog.clearBlocksLoadStepsDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id=\'clearBlocksLoadStepsDialog\' class=\'dialog clearBlocksDialog\'><div>' + dialogElement.closeButton({code: 'location.href="#menu";'}, null, opt_ijData) + dialogElement.widget({id: 'clearBlocksElements', progress: false, heading: 'Clear the blocks on the workspace?', subheading: '', content: [{type: 'spanbutton', buttonclass: '', alignIcon: 'none', code: 'Code.closeMenu(); Blockly.mainWorkspace.clear(); IO.tooltip.display(IO.loadedChallenge);', label: 'YES'}, {type: 'spanbutton', buttonclass: 'red', alignIcon: 'none', code: 'Code.closeMenu(); IO.tooltip.display(IO.loadedChallenge);', label: 'NO'}]}, null, opt_ijData) + '</div></div>';
};


dialog.advancedModeExplainDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id=\'advancedModeExplainDialog\' class="dialog advancedModeExplainDialog"><div>' + dialogElement.closeButton({code: 'Code.closeMenu();'}, null, opt_ijData) + dialogElement.widget({id: 'clearBlocksElements', progress: false, heading: 'Code mode', subheading: 'Welcome to Code mode! In here you can edit your code live.', content: [{type: 'bottom'}, {type: 'spanbutton', buttonclass: 'green', alignIcon: 'none', code: 'Code.closeMenu();', label: 'CONTINUE'}]}, null, opt_ijData) + '</div></div>';
};

;
// This file was automatically generated from dialog_element.soy.
// Please don't edit this file by hand.

if (typeof dialogElement == 'undefined') { var dialogElement = {}; }


dialogElement.closeButton = function(opt_data, opt_ignored, opt_ijData) {
  return '<div height="0px" style="text-align:right;"><button class="close" onclick="' + soy.$$escapeHtml(opt_data.code) + '">&times;</button></div>';
};


dialogElement.splashBottom = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="top"><img alt=\'Minecraft\' src=\'media/intro.png\', class=\'minecraft-splash\'></div><div class="bottom">' + ((opt_data.firstBoot) ? '<button class="orange_text" onclick="location.href=\'#challengeMenu\';">SKIP</button><button class="button orange no-space" onclick="(function(e) {e.target.disabled = true; backend.call(\'play_intro\', function() {e.target.disabled = false;}); location.href=\'#challengeMenu\';})(event); "><img alt="Watch Video" class="kano-icon" src="../../kano-blocks/blockly/media/watch-video-white.png">PLAY VIDEO</button>' : '<button class="orange_text" onclick="(function(e) {e.target.disabled = true; backend.call(\'play_intro\', function() {e.target.disabled = false;});})(event); "><img alt="Watch Video" src="../../kano-blocks/blockly/media/watch-video.png">WATCH VIDEO</button><button class="button red no-space" onclick="Code.close_window();">EXIT</button><button class="button no-space" onclick="location.href=\'#challengeMenu\';">START</button>') + '</div>';
};


dialogElement.widget = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div class="' + opt_data.id + '"><div class="top">' + ((opt_data.progress) ? '<div class="preheading">CHALLENGE <span class="challengeNumber"></span> OF 13</div>' : '') + ((opt_data.heading != '') ? '<div class=\'heading\'>' + opt_data.heading + '</div>' : '') + ((opt_data.subheading != '') ? '<div class=\'subheading\'>' + opt_data.subheading + '</div>' : '') + '<br>';
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
  return '<span id="project' + soy.$$escapeHtml(opt_data.projectNo) + '" class="dialogItem playground locked" onclick="Project.goToIntro(' + soy.$$escapeHtml(opt_data.projectNo) + ')"><span class="text">BE CREATIVE</span><span class="projectNumber playgroundName">PLAYGROUND</span><span class=\'bottom\'></span></span>';
};


dialogElement.projectMenu = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<!-- Unlocks as user progresses through project -->';
  var projectTexts__soy460 = ['LEARN TO CODE MINECRAFT', 'DIAMOND FLOOR', 'FLOATING WATER CUBE', 'SHADY TUNNELS', 'BUILD A HOUSE', 'VOLCANO', 'HELLO WORLD', 'TELEPORTATION', 'SKY JAIL', 'INSTANT FARM', 'LAVA TRAIL', 'FROZEN!', 'WATER SLIDE'];
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
  return '<div class="mainMenuButtons"><div><button class="menu_buttons saveXML" id="saveButton" title="Save the program defined by the blocks as XML." onclick="IO.screenshot.refreshElements(); location.href=\'#saveDialog\'; IO.form.addListeners();">SAVE</button> <button class="menu_buttons loadXML" id="loadButton" onclick=location.href=\'#loadSource\' title="Load a program defined by blocks from XML.">LOAD</button> </div><div><button class="menu_buttons launch" id="shipButton" title="Share your blocks with the world." onclick="IO.screenshot.refreshElements(); location.href=\'#shareDialog\'; IO.form.addListeners();">SHARE</button> <button class="menu_buttons exitButton" title="Exit the project." onclick="Code.close_window();">EXIT</button> </div></div>';
};


dialogElement.hintToggle = function(opt_data, opt_ignored, opt_ijData) {
  return '<span><button class="toggle_button"><!--Hints toggle switch--><span class="toggle_container"><input type="checkbox" id="tutorialSwitch" name="tutorialSwitch" class="switch" onclick="Code.tutorial_toggle()" checked/><label for="tutorialSwitch"><span class="projectName">HINTS?</span></label></span></button><button class="deleteButton reset" title="Resets your Minecraft world" onclick="Minecraft.showResetOption()">NEW WORLD</button><button class="deleteButton clear" title="Delete all blocks." onclick="Code.closeMenu(); Code.confirmDiscard();">RESET</button></div></span>';
};


dialogElement.export = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="' + soy.$$escapeHtml(opt_data.id) + '" class="dialog ' + soy.$$escapeHtml(opt_data['class']) + '"><div id="' + soy.$$escapeHtml(opt_data['class']) + '">' + dialogElement.closeButton({code: 'location.href="#menu"; IO.form.removeListeners();'}, null, opt_ijData) + '<div class="leftPane"><div class="screenshotBorder"><img src="./media/minecraft.png" class="screenshot"><span>Screenshot</span></div></div><div class="rightPane"><input class="filename" type="text" name="filename" id=\'' + soy.$$escapeHtml(opt_data.input_id) + '\' maxlength="200" placeholder="Title"><textarea class="description" name="description" maxlength="500" placeholder="Description"></textarea><button class="menu_buttons launch disabled" id="shipButton" disabled=true title="Share your blocks with the world." onclick="' + soy.$$escapeHtml(opt_data.code) + '">' + soy.$$escapeHtml(opt_data.label) + '</button></div></div></div>';
};

;
// This file was automatically generated from template_g.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">a visual programming environment</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">See generated JavaScript code.</span><span id="linkTooltip">Save and link to blocks.</span><span id="runTooltip">Run the program defined by the blocks in the workspace.</span><span id="runProgram">Run Program</span><span id="resetProgram">Reset</span><span id="catLogic">Logic</span><span id="catLoops">Loops</span><span id="catMath">Math</span><span id="catText">Text</span><span id="catLists">Lists</span><span id="catColour">Colour</span><span id="catVariables">Variables</span><span id="catProcedures">Procedures</span><span id="httpRequestError">There was a problem with the request.</span><span id="linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="xmlError">Could not load your saved file.  Perhaps it was created with a different version of Blockly?</span><span id="listVariable">list</span><span id="textVariable">text</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<style type="text/css">#dialog {visibility: hidden; background-color: #fff; color: #000; border: 1px solid #000; position: absolute; border-radius: 8px; box-shadow: 5px 5px 5px #888; padding: 10px;}#dialogBorder {visibility: hidden; position: absolute; background-color: #fff; color: #000; border: 1px solid #000; border-radius: 8px; box-shadow: 5px 5px 5px #888;}#dialogShadow {visibility: hidden; position: fixed; top: 0; left: 0; height: 100%; width: 100%; background-color: #000; opacity: 0.3}.dialogAnimate {transition-property: width, height, left, top, opacity; transition-duration: 0.2s; transition-timing-function: linear;}.dialogHiddenContent {visibility: hidden; position: absolute; top: 0; left: 0; z-index: -1;}</style><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button onclick="BlocklyApps.hideDialog(true)">OK</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof codepage == 'undefined') { var codepage = {}; }


codepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Code_badXml">Error parsing XML:\\n%1\\n\\nAbandon changes?</span><span id="Code_badCode">Program error:\\n%1</span><span id="Code_timeout">Maximum execution iterations exceeded.</span><span id="Code_discard">Delete all %1 blocks?</span></div>';
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
  return '<div id="leftHalf"><div class="verticalContainer"><div id="helpTitle" class="helpTitle">This is default text for the title</div><div id="helpDescription" class="helpDescription">This is default text for the description</div><br><div class="blueBorder"><div class="stepHeading">Previous step</div><div id="prevStep" class="helpDescription">This is default text for the previous step</div></div><div class="blackBorder"><div class="stepHeading">Next step</div><div id="nextStep" class="helpDescription">This is default text for the next step</div></div></div></div>';
};


helpScreen.rightHalf = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="rightHalf"><div id="stillStuck" class="controlsContainer verticalContainer"><div class="stillStuck helpTitle">Still stuck?</div><button id="showSolutionButton" class="greenButton" onclick="Help.showBlockConfiguration();">SHOW SOLUTION</button><button id="controlsButton" class="greenButton" onclick="Help.showBlockControls();">CONTROLS</button><!-- This is commented out in case we want to add the walkthrough button later --><!--<button id="walkthroughButton" class="greenButton" onclick="Help.showForumPage();">WALKTHROUGH</button>--></div><div id="blockSolution" class="controlsContainer verticalContainer"><img id="blockSolutionImg"><div><button class="redButton" onclick="Help.showMenu();">BACK</button></div></div><!-- This is commented out in case we want to add the walkthrough button later --><!--<div id="forumPage" class="controlsContainer verticalContainer"><div class="helpDescription">Launching the forum.  This may take a few seconds.</div><button class="redButton" onclick="Help.showMenu();">BACK</button></div>--><div id="blockControls" class="controlsContainer verticalContainer"><div><img src=\'media/mccontrols.png\'></div><button class="redButton" onclick="Help.showMenu();">BACK</button></div></div>';
};
