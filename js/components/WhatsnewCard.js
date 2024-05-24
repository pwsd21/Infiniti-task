export default {
  template: `
      <div class="col-xl-4 col-md-12">
        <div class="card latest-update-card">
          <div class="card-header">
            <h5>What’s New</h5>
            <div class="card-header-right">
              <ul class="list-unstyled card-option">
                <li class="first-opt"><i class="feather icon-chevron-left open-card-option"></i></li>
                <li><i class="feather icon-maximize full-card"></i></li>
                <li><i class="feather icon-minus minimize-card"></i></li>
                <li><i class="feather icon-refresh-cw reload-card"></i></li>
                <li><i class="feather icon-trash close-card"></i></li>
                <li><i class="feather icon-chevron-left open-card-option"></i></li>
              </ul>
            </div>
          </div>
          <div class="card-block">
            <div class="scroll-widget">
              <div v-for="(item, index) in whatsNewItems" :key="index" class="row p-t-20 p-b-30">
                <div class="col-auto text-right update-meta p-r-0">
                  <i :class="'b-primary update-icon ring ' + item.icon"></i>
                </div>
                <div class="col p-l-5">
                  <a href="#!"><h6>{{ item.message }}</h6></a>
                  <p class="text-muted m-b-0">{{ item.created_by }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  data() {
    return {
      whatsNewItems: [],
    };
  },
  mounted() {
    fetch("./jsons/Whats_New.json")
      .then((response) => response.json())
      .then((data) => {
        this.whatsNewItems = data.what_new_items;
      });
  },
};
