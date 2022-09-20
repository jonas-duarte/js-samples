const cluster = require("cluster");

if (cluster.isMaster) {
  const c1 = cluster.fork({ name: "c1" });
  const c2 = cluster.fork({ name: "c2" });

  console.log({
    master: process.pid,
    c1: c1.process.pid,
    c2: c2.process.pid,
  });

  c1.on("message", (msg) => {
    console.log("c1", msg);
  });

  c2.on("message", (msg) => {
    console.log("c2", msg);
  });
}

if (cluster.isWorker) {
  process.send({ worker: process.pid, name: process.env.name });
}

// { master: 1768, c1: 6236, c2: 20268 }
// c1 { worker: 6236, name: 'c1' }
// c2 { worker: 20268, name: 'c2' }