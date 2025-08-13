const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      fullName: "",
    };
  },
  watch: {
    name(value) {
      if (value === "") {
        this.fullName = "";
      } else {
        this.fullName = value + " " + this.lastName;
      }
    },
    lastName(value) {
      if (value === "") {
        this.fullName = "";
      } else {
        this.fullName = this.name + " " + value;
      }
    },
  },
  computed: {
    // fullName() {
    //   console.log("running again!!!");
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "LASTNAME";
    // },
  },
  methods: {
    outputName() {
      console.log("running again!!!");
      if (this.name === "") {
        return "";
      }

      return this.name + " " + "LASTNAME";
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      console.log("add!!!!");
      this.counter = this.counter + num;
    },
    reduce(num) {
      console.log("reduce!!!");
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
