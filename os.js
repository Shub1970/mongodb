
const os = require('os');

const user = os.userInfo();

console.log(user);

console.log(`this is the time my computer uptime ${os.uptime}`);


const data_system =
{
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(data_system);