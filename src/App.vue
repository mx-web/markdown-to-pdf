<template>
  <div id="app">
    <div class="container mx-auto mt-6" >
      <!-- <button class="m-2 w-1/6 bg-blue-500 py-2 rounded text-white" @click="exports" >Export</button> -->
      <div class="p-2 flex flex-row">
        <button class=" bg-white font-bold border-green-500 rounded bg-green-500 text-white py-2 px-6 inline-flex items-center focus:outline-none" @click="PDFPreview">PDF Vorschau</button>
        <button class=" bg-white font-bold border-green-500 rounded bg-indigo-500 text-white py-2 px-6 inline-flex items-center mx-3 focus:outline-none" @click="PDFDownload">PDF Exportieren</button>

      </div>
      <div class="flex flex-row">
        <editor @MDNchange="mdnChange" @PreviewPDF="PDFPreview" class="m-2" v-bind:class="{ 'w-full': !viewPDF, 'w-1/2': viewPDF }"/>
        <iframe class="m-2 rounded border w-1/2" ref="PDFPreview" v-bind:class="{ 'hidden': !viewPDF }"></iframe>
      </div>

      

      <!-- <div class="w-1/6 m-2" v-html="mdn"></div> -->

    </div>
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
      mdn: '',
      viewPDF: false
    }
  },
  methods: {
    mdnChange: function(event) {
      this.mdn = this.$SimpleMDE.prototype.markdown(event);
    },
    exports: function() {
      var exportMDN = this.htmlToPdfMake(this.mdn);
      var docDefinition = { content: [exportMDN ] };
      this.pdfMake.createPdf(docDefinition).print({}, window);
    },
    PDFPreview: function() {

      if(!this.viewPDF) {
        this.viewPDF = true;
        this.$refs.PDFPreview;

        var exportMDN = this.htmlToPdfMake(this.mdn);
        var docDefinition = { content: [exportMDN ] };
        const pdfDocGenerator = pdfMake.createPdf(docDefinition);

        pdfDocGenerator.getDataUrl((dataUrl) => {
            this.$refs.PDFPreview.src = dataUrl;
        });
      } else {

        this.viewPDF = false;

      }

    },
    PDFDownload: function() {
      var exportMDN = this.htmlToPdfMake(this.mdn);
      var docDefinition = { content: [exportMDN ] };
      const pdfDocGenerator = pdfMake.createPdf(docDefinition).download();
    }
  }
}
</script>