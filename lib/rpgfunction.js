const fs = require('fs')
let _RPG = JSON.parse(fs.readFileSync('./database/inventori.json'))
m  = require('../peka.js')
const send = m.sender

//== Emas Inventory   

        const addEmas = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === m.sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].emas += amount
                fs.writeFileSync('./database/inventori.json', JSON.stringify(_RPG))
            }
        }
        
        const sellEmas = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === m.sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].emas -= amount
                fs.writeFileSync('./database/inventori.json', JSON.stringify(_RPG))
            }
        }        
        
        const getEmas = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === m.sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].emas
            }
        }

//== Diamond Inventory

     const addDm = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === m.sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].diamond += amount
                fs.writeFileSync('./database/inventori.json', JSON.stringify(_RPG))
            }
        }
        
     const sellDm = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === m.sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].diamond -= amount
                fs.writeFileSync('./database/inventori.json', JSON.stringify(_RPG))
            }
        }
              
           const getDm = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === m.sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].diamond
            }
        }
           
//== Iron Inventory
        
       const addBesi = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === m.sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].besi += amount
                fs.writeFileSync('./database/inventori.json', JSON.stringify(_RPG))
            }
        }
        
       const sellBesi = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === m.sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].besi -= amount
                fs.writeFileSync('./database/inventori.json', JSON.stringify(_RPG))
            }
        }
                
       const getBesi = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === m.sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].besi
            }
        }
 
//== Fish Inventory

       const addFish = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === m.sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].ikan += amount
                fs.writeFileSync('./database/inventori.json', JSON.stringify(_RPG))
            }
        }
        
       const sellFish = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === m.sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].ikan -= amount
                fs.writeFileSync('./database/inventori.json', JSON.stringify(_RPG))
            }
        } 
               
       const getFish = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === m.sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].ikan
            }
        }
                       
/**
 * Add User Initial Inventory
 * @made by Febriansyah
 * @don't lose maker's name
 */
        const addInventori = (sender) => {
            const obj = {id: m.sender, emas: 0, diamond: 0, besi: 0, ikan: 0}
            _RPG.push(obj)
            fs.writeFileSync('./database/inventori.json', JSON.stringify(_RPG))
        }
        
/**
 * Check Adventure User
 * @made by Febriansyah
 * @don't lose maker's name
 */
        const checkPetualangUser = (sender) => {
            let status = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === m.sender) {
                    status = true
                }
            })
            return status
        }
        
        
module.exports = { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas , addFish, sellFish, getFish }