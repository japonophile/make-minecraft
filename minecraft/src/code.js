
/*
# code-minecraft.js
#
# Copyright (C) 2013 Kano Computing Ltd.
# License:   http://www.gnu.org/licenses/gpl-2.0.txt GNU General Public License v2
#
*/

// Supported languages.
BlocklyApps.LANGUAGES = {
  // Format: ['Language name', 'direction', 'XX_compressed.js']
  en: ['English', 'ltr', '../generated/en_compressed.js']
};
BlocklyApps.LANG = 'en';

// namespace
var Minecraft = {};

Minecraft.launch = function (event) {
    var code = event.charCode || event.keyCode;
    var href = window.location.href.toLowerCase();
    var regexep = /menu|dialog/;

    switch (code) {
    case 9:  // tab
        if(!regexep.test(href)) {
          backend.call('launch', false);
        }
        break;
    }
}

window.addEventListener('keyup', Minecraft.launch);

/**
 * Save code to local .py file.
 */
Minecraft.savePythonScript = function(filename) {
    Project.deleteOrphans();
    var level = Project.getLastVisited(),
        code;

    Code.disableButton('runButton');
    IO.cache();
    AlertsMessages.hideOnMake();

    if (level === Project.challenge.count + 1 && CodePreview.advancedMode.activated) {
        code = CodePreview.advancedMode.getCode();
    } else {
        BlocklyStorage.migrateCacheLevels(level, Project.challenge.count + 1, Project.challenge.count);
        code = Blockly.Generator.workspaceToCode('Python');
    }

    // Take screenshot and prevent loops
    // Note that this Pythoncode is executed anywhere from 3 to 7 times
    // On Minecraft first startup, so we are moving the Minecraft instance code
    // after the screenshot is done.
    //
    code = '# Prevent infinite loops by using a timeout\n' +
           'import signal\n' +
           'mc = None\n' +
           'def signal_handler(signum, frame):\n' +
           '    if mc:\n' +
           '        mc.postToChat("Infinite loop! Stopping script...")\n' +
           '    raise Exception("Timed out")\n' +
           'signal.signal(signal.SIGALRM, signal_handler)\n' +
           'signal.alarm(20)\n' +
           '\n' +
           code;

    Stats.update(code);

    // Create a request to save the code
    // Add the name of the file to the first line
    backend.call('save', 'mc_script.py', code);

    var hintFadeTime = 100;
    document.getElementById('makingGame').style.display = 'block';

    setTimeout(
        function() {
            // Launch the game
            backend.call('launch', function(rv) {
                if (rv === 0) {
                    Project.levelUp(code);
                }
            });

            $(window).focus(
                function() {
                    document.getElementById('makingGame').style.display = 'none';
                    backend.call('_get_errors', function(err_msg) {
                        document.querySelector('.codePreview .advancedMode .errors .msg').innerHTML = err_msg;
                    });
                });

            Code.enableButton('runButton');
        },
        hintFadeTime);
};

Minecraft.replay = function() {
  var level = Project.getLastVisited();
  BlocklyStorage.clearProjectCache(level);

  Code.replay();
};

Minecraft.resetWorld = function() {
    backend.call('reset_world', function(rv) {
      return;
    });
};

Minecraft.showResetOption = function() {
    window.location.href = '#resetWorldDialog';
}
