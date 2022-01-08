// Let's look into O/S module provided by node

const os = require('os');

console.log(os.userInfo());
console.log(`System uptime is ${os.uptime()}`);

const systemInfo = {
    type: os.type(),
    release: os.release(),
    usedMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(systemInfo);