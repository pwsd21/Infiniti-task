// js/components/LatestActivityCard.js
export default {
  template: `
      <div class="col-xl-4 col-md-6">
        <div class="card latest-update-card">
          <div class="card-header">
            <h5>Latest Activity</h5>
          </div>
          <div class="card-block">
            <div class="latest-update-box">
              <div v-for="(activity, index) in activities" :key="index" class="row p-t-20 p-b-30">
                <div class="col-auto text-right update-meta p-r-0">
                  <i class="b-primary update-icon ring"></i>
                </div>
                <div class="col p-l-5">
                  <a :href="activity.readmore_link"><h6>{{ activity.activity_type }}</h6></a>
                  <p class="text-muted m-b-0">{{ activity.activity }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  data() {
    return {
      activities: [],
    };
  },
  mounted() {
    fetch("./jsons/Latest_Activity.json")
      .then((response) => response.json())
      .then((data) => {
        this.activities = data.latest_activity;
      });
  },
};
