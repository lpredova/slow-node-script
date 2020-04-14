const express = require('express')
const app = express()
const port = 3000

const util = require('util');
const exec = util.promisify(require('child_process').exec);

app.get('/', (req, res) => {
    if(req.query.action === 'run'){
        runVerySlowScript()
        return res.send('Run script! 🧨')    
    }
    return res.send('Nothing 🐥!')
})

async function runVerySlowScript() {
    try {
        await exec('./slow.sh');
    } catch(err) {
        console.error(err);
    }
}

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))