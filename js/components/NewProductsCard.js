export default {
  template: `
      <div class="col-md-12">
        <div class="card table-card">
          <div class="card-header">
            <h5>New Products</h5>
          </div>
          <div class="card-block p-b-0">
            <div class="table-responsive">
              <table class="table table-hover m-b-0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Product Code</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(product, index) in products" :key="index">
                    <td>{{ product.name }}</td>
                    <td>{{ product.product_code }}</td>
                    <td>{{ product.customer }}</td>
                    <td><label :class="getStatusClass(product.status)">{{ product.status }}</label></td>
                    <td>
                      <template v-for="i in 5">
                        <i :class="['fa', 'fa-star', 'f-12', 'text-c-yellow', product.rating >= i ? '' : 'text-muted']"></i>
                      </template>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `,
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    fetch("./jsons/New_Products.json")
      .then((response) => response.json())
      .then((data) => {
        this.products = data.new_products;
      });
  },
  methods: {
    getStatusClass(status) {
      return status === "In Stock"
        ? "label label-success"
        : "label label-danger";
    },
  },
};
