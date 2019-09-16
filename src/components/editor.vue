<template>
    <div id="editor">
		<textarea id="editor" ref="editor">
    </textarea>
	</div>
</template>

<script>

export default {
	name: 'editor',
	mounted: function() {
		var _this = this;
		var simplemde = new this.$SimpleMDE({
			element: this.$refs.editor,
			spellChecker: false,
			showIcons: ["code", "table", "clean-block", "quote", "strikethrough"],
			hideIcons: ["fullscreen", "side-by-side", "image"],
			indentWithTabs: true,
			singleLineBreaks: false,
			gfm: false,
			pedantic: true,
			previewRender: function() {
				// _this.$emit('PreviewPDF');
				// console.log(simplemde.isPreviewActive());
				return _this.$SimpleMDE.prototype.markdown(simplemde.value());
			},
		});

		simplemde.codemirror.on("change", function(){
			_this.$emit('MDNchange', simplemde.value());
			// console.log(_this.$SimpleMDE.prototype.markdown( simplemde.value() ));
		});


	}
}
</script>