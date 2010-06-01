CKEDITOR.plugins.add('streamingPlayer', {
    requires: ['dialog', 'fakeobjects'],
    lang: ['en'],
    init: function(editor) {
    
        CKEDITOR.tools.extend(CKEDITOR.config, {
            streamingPlayer: {
                movie: 'http://video.ugent.be/flowplayer/minerva/flowplayer.commercial-3.1.5.swf',
                extraFlashVars: ',"key":"#@b899c24f6f2ece06ca1","logo":{"url":"http://video.ugent.be/flowplayer/logougent.png","fullscreenOnly":false,"bottom":40,"left":10,"opacity":0.5},"plugins":{"h264streaming":{"url":"http://video.ugent.be/flowplayer/flowplayer.pseudostreaming-3.1.3.swf"},"controls":{"url":"http://video.ugent.be/flowplayer/minerva/flowplayer.controls-3.1.5.swf"}}',
		width : 852,
		height : 480
            }
        });
        
        var cmdName = 'streamingPlayer';
        var cmd = editor.addCommand(cmdName, new CKEDITOR.dialogCommand(cmdName));
        cmd.modes = {wysiwyg: 1, source: 0};
        cmd.canUndo = false;

        editor.ui.addButton('streamingPlayer', {
            label: editor.lang.streamingPlayer.btnLabel,
            icon: this.path + 'images/btn_icon.gif',
            command: cmdName
        });
        CKEDITOR.dialog.add(cmdName, this.path + 'dialogs/streamingPlayer.js');
    }
});
