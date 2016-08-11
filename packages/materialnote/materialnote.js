// Write your package code here!
ReactiveTemplates.onRendered('attribute.materialnote', function() {
    this.subscribe('materialnoteImages');
    Session.set('scorpiusMaterialnoteIsUploading', false);
    var element = this.$('.materialnote');
    var toolbar = [
        ['style', ['style', 'bold', 'italic', 'underline', 'strikethrough', 'clear']],
        ['fonts', ['fontsize', 'fontname']],
        ['color', ['color']],
        ['undo', ['undo', 'redo', 'help']],
        ['ckMedia', ['ckImageUploader', 'ckVideoEmbeeder']],
        ['misc', ['link', 'picture', 'table', 'hr', 'codeview', 'fullscreen']],
        ['para', ['ul', 'ol', 'paragraph', 'leftButton', 'centerButton', 'rightButton', 'justifyButton', 'outdentButton', 'indentButton']],
        ['height', ['lineheight']],
    ];
    element.materialnote({
        toolbar: toolbar,
        height: 300,
        onImageUpload: function(files, editor, $editable) {
            var upload = scorpius.filesystem.upload({
                fileList: files,
                name: files[0].name,
                uploader: 'materialnote'
            });
            Session.set('scorpiusMaterialnoteIsUploading', true);
            Session.set('scorpiusMaterialnoteProgress', 0);
            Tracker.autorun(function () {
                if (upload.ready()) {
                    if (upload.error) {
                        console.log(upload.error);
                        alert(upload.error.reason);
                    } else {
                        element.materialnote('insertImage', upload.url);
                    }
                    Session.set('scorpiusMaterialnoteIsUploading', false);
                }
            });
            Tracker.autorun(function () {
                Session.set('scorpiusMaterialnoteProgress', upload.progress());
            });
        }
    });
    element.code(this.data.value);
})

ReactiveTemplates.helpers('attribute.materialnote', {
    isUploading: function() {
        return Session.get('scorpiusMaterialnoteIsUploading');
    },
    progress: function() {
        return Session.get('scorpiusMaterialnoteProgress');
    }
})

ReactiveTemplates.helpers('attributePreview.materialnote', {
    preview: function () {
        var value = this.value;
        var tmp = document.createElement("DIV");
        var content = value.replace(/<(?:.|\n)*?>/gm, ' ');
        if(content.length > 50) content = content.substring(0, 47).trim() + '...';
        return content;
    }
});
