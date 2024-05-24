// js/components/ProjectProgressReport.js
export default {
  template: `
    <div class="col-xl-12">
      <div class="card proj-progress-card">
        <div class="card-block">
          <div class="row">
            <div v-for="(item, index) in projectData" :key="index" class="col-xl-3 col-md-6">
              <h6>{{ item.title }}</h6>
              <h5 class="m-b-30 f-w-700">{{ item.value }}<span :class="getTrendClass(item.percentage)" class="m-l-10">{{ item.percentage }}</span></h5>
              <div class="progress">
                <div :class="getProgressClass(index)" :style="{ width: getProgressWidth(index) }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      projectData: [],
    };
  },
  mounted() {
    fetch("./jsons/Project_Progress_Summary.json")
      .then((response) => response.json())
      .then((data) => {
        this.projectData = data.project_progress_summary;
      });
  },
  methods: {
    getTrendClass(percentage) {
      return percentage.startsWith("+") ? "text-c-green" : "text-c-red";
    },
    getProgressClass(index) {
      const classes = [
        "progress-bar bg-c-red",
        "progress-bar bg-c-blue",
        "progress-bar bg-c-green",
        "progress-bar bg-c-yellow",
      ];
      return classes[index % classes.length];
    },
    getProgressWidth(index) {
      const widths = ["25%", "65%", "85%", "45%"];
      return widths[index % widths.length];
    },
  },
};
