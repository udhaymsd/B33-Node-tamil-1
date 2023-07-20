const os = require ("os");
console.log("Free memory in GB", os.freemem() / 1024 / 1024 /1024);

console.log("Total memory in GB", os.totalmem() / 1024 / 1024 /1024);

console.log("Version", os.version());

console.log("cpus", os.cpus());


// 1KB  = 1024 Bytes
// 1MB = 1024 KB
// 1GB = 1024 MB