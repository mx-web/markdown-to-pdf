<template>
    <textarea id="editor" ref="editor">
    </textarea>
</template>

<script>

export default {
  name: 'editor',
  mounted: function() {

	  var _this = this;
	  
	var simplemde = new this.$SimpleMDE({
		element: this.$refs.editor,
		spellChecker: false,
		showIcons: ["code", "table"],
	});

	simplemde.codemirror.on("change", function(){
		_this.$emit('MDNchange', simplemde.value());
		console.log(_this.$SimpleMDE.prototype.markdown( simplemde.value() ));
	});

  }
}
</script>