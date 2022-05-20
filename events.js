const EventEmitter = require("events");

class GlobalEvents extends EventEmitter {
  static getInstance() {
    if (!this.instance) {
      this.instance = new GlobalEvents();
    }
    return this.instance;
  }

  static emit(event, data) {
    this.getInstance().emit(event, data);
  }

  static on(event, callback) {
    this.getInstance().on(event, callback);
  }
}

GlobalEvents.on("example", (data) => {
  console.log(data);
});

GlobalEvents.emit("example", "Hello World");
