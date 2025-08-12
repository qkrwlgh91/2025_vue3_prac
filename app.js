const app = Vue.createApp({
  data() {
    return {
      courseGoal: "remind vue3",
      vueLink: "https://vuejs.org/",
      counter: 0,
    };
  },
  methods: {
    add(num) {
        this.counter = this.counter + num;
    },
    reduce(num) {
        this.counter = this.counter - num;
    },
  },
});

// app.mount("#user-goal");
app.mount("#events");
// app.mount("#events");
