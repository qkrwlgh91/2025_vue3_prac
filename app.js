const app = Vue.createApp({
  data() {
    return {
      courseGoal: "remind vue3",
      vueLink: "https://vuejs.org/",
      counter: 0,
    };
  },
  methods: {
    add() {
        this.counter = this.counter + 10
    },
    reduce() {
        this.counter = this.counter - 5
    },
  },
});

// app.mount("#user-goal");
app.mount("#events");
// app.mount("#events");
