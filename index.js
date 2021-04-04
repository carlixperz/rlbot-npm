let gifs = require('./gifs')

module.exports = {
    rlbotnpm(option) {
        let res
        Object.keys(gifs).filter(key => {
            if (key === option) res = gifs[key]
        })
        if(res) {
            return res[Math.floor(Math.random() * res.length)]
        } else {
            return 'Invalid Request'
        }
    }
}