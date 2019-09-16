<template>
  <div id="app">
    <h3>{{ mdn }}</h3>
    <editor @MDNchange="mdnChange"/>
  </div>
</template>

<script>
import editor from './components/editor';

export default {
  name: 'app',
  components: {
    editor
  },
  data: function() {
    return {
      mdn: ''
    }
  },
  methods: {
    mdnChange: function(event) {
      this.mdn = event;
    }
  }
}
</script>