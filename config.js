/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')
prefix = require('./peka.js')
pushname = require('./peka.js')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

// Other
owner = ['6285700325917','6282322888788','62882920241909','62882920241908','6281382420312']
global.stikname = 'Created By Pekabot'
global.ftext = 'Created by @Khamidツ'
global.nomorOwner = "6282322888788"
global.nomorOwnerr = "+6282322888788"
global.stikauthor = 'Powered By Pekadigital.my.id'
global.ownername= "Khamidツ"
global.namaBot = "Pekabot"
global.website= "http://www.pekadigital.my.id/"
global.sessionName = 'peka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.healtawal = 100
global.potionawal = 1
global.publik = true
global.mess = {
	wsdaftar: '「 ❗ 」Kamu Sudah Terdaftar Di Database Peka Bot',
    success: '✓ Success',
    admin: 'Hanya admin grub yang dapat menggunakan fitur ini!',
    botAdmin: 'Fitur ini hanya dapat digunakan setelah bot menjadi admin!!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur ini hanya bisa digunakan di dalam grub!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    player: `Maaf kak, anda bukan seorang petualang!!\nUntuk menjadi petualang silahkan ketik :\nJoinrpg`,
    limithabis: `Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`
}
global.thumb = fs.readFileSync('./lib/peka.jpg')
global.thumbnail = fs.readFileSync('./media/image/thumbnail.jpeg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

global.mfitur = `
┌──⭓ *Menu*
│
│⭔ ${prefix}ytsearch [query]
│
└───────⭓
`


global.vcard = `BEGIN:VCARD\n` // metadata of the contact card
                    + `VERSION:3.0\n`
              + `FN:${ownername}\n`
              + `TEL;type=CELL;type=VOICE;waid=${nomorOwner}:+${nomorOwner}\n`
              + `EMAIL;X-Email:khamidmirdad3@gmail.com\n`
              + `ADR;HOME:;;Pekalongan;;;;\n`      
              + `ORG:Owner Busines\;Busines\n`
              + `TITLE:Digital Marketing Agency\n`           
              + `URL:pekadigital.my.id\n`
              + `PHOTO;ENCODING=BASE64;JPEG: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\n`
                    + `END:VCARD`