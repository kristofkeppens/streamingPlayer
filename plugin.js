CKEDITOR.plugins.add('streamingPlayer', {
    requires: ['dialog', 'fakeobjects'],
    lang: ['en'],
    init: function(editor) {
    
        CKEDITOR.tools.extend(CKEDITOR.config, {
            streamingPlayer: {
                movie: '',
                extraFlashVars: '',
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
