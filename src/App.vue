<template>
  <PortfolioHeader @language="switchLanguage($event)" :language="language" :languageText="data[language].header.languageText" :text="data[language].header.text" />
  <PortfolioSkills :title="data[language].skills.title" :text="data[language].skills.text" />
  <PortfolioMyStory :title="data[language].myStory.title" :text="data[language].myStory.text" />
  <PortfolioCryptoApp :title="data[language].cryptoApp.title" :text="data[language].cryptoApp.text" />
  <Portfolio3DConfig :title="data[language].configurator.title" :text="data[language].configurator.text" />
  <PortfolioGridPainter :title="data[language].gridPainter.title" :text="data[language].gridPainter.text" />
</template>

<script>
import PortfolioHeader from './components/PortfolioHeader.vue'
import PortfolioSkills from './components/PortfolioSkills.vue'
import PortfolioMyStory from './components/PortfolioMyStory.vue'
import PortfolioCryptoApp from './components/PortfolioCryptoApp.vue'
import Portfolio3DConfig from './components/Portfolio3DConfig.vue'
import PortfolioGridPainter from './components/PortfolioGridPainter.vue'

import data from "@/assets/data.json";

export default {
  name: 'App',
  components: {
    PortfolioHeader,
    PortfolioSkills,
    PortfolioMyStory,
    PortfolioCryptoApp,
    Portfolio3DConfig,
    PortfolioGridPainter
  },
  data() {
    return {
      data,
      language: "cz"
    }
  },
  methods: {
    switchLanguage(lang) {
      this.language = lang == "cz" ? "eng" : "cz";
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body{
  background: #859C60;
}
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
