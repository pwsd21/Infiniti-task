// js/components/SummaryCard.js
export default {
  template: `
      <div class="col-md-12 col-xl-4">
        <div v-for="item in summaryData" :key="item.title" class="card comp-card">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col">
                <h6 class="m-b-25">{{ item.title }}</h6>
                <h3 class="f-w-700" :class="getValueColor(item.title)">{{ item.value }}</h3>
                <p class="m-b-0">{{ item.duration }} ({{ item.year }})</p>
              </div>
              <div class="col-auto">
                <i :class="getIconClass(item.title)"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  data() {
    return {
      summaryData: [],
    };
  },
  mounted() {
    fetch("./jsons/summary.json")
      .then((response) => response.json())
      .then((data) => {
        this.summaryData = data.summary;
      });
  },
  methods: {
    getValueColor(title) {
      if (title === "Impressions") return "text-c-blue";
      else if (title === "Goal") return "text-c-green";
      else if (title === "Impact") return "text-c-yellow";
      return ""; // Default color
    },
    getIconClass(title) {
      if (title === "Impressions") return "fas fa-eye bg-c-blue";
      else if (title === "Goal") return "fas fa-bullseye bg-c-green";
      else if (title === "Impact") return "fas fa-hand-paper bg-c-yellow";
      return ""; // Default icon class
    },
  },
};
