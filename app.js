const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount("#app");

const app2 = Vue.createApp({
  template: `
  <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: "pizza",
    };
  },
});

app2.mount("#app2");

const data = {
  message: "hello!",
  longMessage: "hello world!!!!!!!",
};

const handler = {
  // trap
  set(target, key, value) {
    console.log(target);
    console.log(key);
    console.log(value);
    if (key === "message") {
      target.longMessage = value + " world!!";
    }

    target[key] = value;
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "proxy message!!!";

console.log(proxy.longMessage);
