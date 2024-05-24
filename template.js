import ProjectProgressReport from "./js/components/ProjectProgressReport.js";
import SummaryCard from "./js/components/SummaryCard.js";
import NewProductsCard from "./js/components/NewProductsCard.js";
import WhatsnewCard from "./js/components/WhatsnewCard.js";
import LatestActivityCard from "./js/components/LatestActivityCard.js";

const app = Vue.createApp({
  components: {
    SummaryCard,
    ProjectProgressReport,
    NewProductsCard,
    WhatsnewCard,
    LatestActivityCard,
  },
});

app.mount("#app");
