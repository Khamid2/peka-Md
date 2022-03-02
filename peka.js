/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./config')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser } = require('@adiwajshing/baileys-md')
const
	{
	    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys-tom")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { pinterest, wallpaper, wikimedia, quotesAnime } = require('./lib/scraper')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')
const { servers, yta, ytv } = require('./lib/y2mate')
let yts = require('yt-search')
let fetch = require('node-fetch')

const crypto = require('crypto')
const moment = require('moment-timezone')
const daftar = JSON.parse(fs.readFileSync('./database/user.json'))
pp_bot = fs.readFileSync('./media/image/thumbnail.jpeg')
const  { ind } = require(`./ind`)
lang = ind
typemenu = 'templateLocation'

let cmdmedia = JSON.parse(fs.readFileSync('./src/cmdmedia.json'))

let prem = JSON.parse(fs.readFileSync('./database/premium.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));

//Function RPG & LEVEL By Pebri Ori
let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance} = require("./lib/limit");
let { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require("./lib/rpgfunction");
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");

//Database RPG Mode By Pebri!! Ori No
let _RPG = JSON.parse(fs.readFileSync('./database/rpg/inventori.json'))
let _level = JSON.parse(fs.readFileSync('./database/rpg/leveluser.json'))
let _petualang = JSON.parse(fs.readFileSync('./database/rpg/inventori.json'))
let _healt = JSON.parse(fs.readFileSync('./database/rpg/healt.json'))
//let _potion = JSON.parse(fs.readFileSync('./database/rpg/potion.json'))

const getHeal = (sender) => {
        	let position = false
              Object.keys(_healt).forEach ((i) => {
              	if (_healt[position].id === m.sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return _healt[position].healt
            }
 }

const healtAdd = (sender) => {
      let position = false
     Object.keys(_healt).forEach((i) => {
            if (_healt[i].id == m.sender) {
                 position = i
            }
      })
           if (position !== false) {
                _healt[position].healt += 10
                fs.writeFileSync('./database/rpg/healt.json', JSON.stringify(_healt))
            }
 }

module.exports = peka = async (peka, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const isCreator = [peka.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == peka.user.id ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
	    const botNumber = peka.user.id ? peka.user.id.split(":")[0]+"@s.whatsapp.net" : peka.user.id
	    const { extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
	    const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
	    const from = m.key.remoteJid
	    const isGroup = from.endsWith('@g.us')
	    const sender = mek.key.fromMe // Fix Bug by Pebri
        ? peka.user.jid
        : isGroup
        ? mek.participant
        : mek.key.remoteJid;
        const senderNumber = m.sender.split("@")[0] 
	    const isDaftar = daftar.includes(m.sender)
	    const isPremium = prem.includes(m.sender) || isCreator
        const isPetualang = checkPetualangUser(m.sender)
	
	    const totalchat = await store.chats.all()
	    
        // Group
        const groupMetadata = m.isGroup ? await peka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? groupOwner.includes(m.sender) : false

        // Bot Status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })
        const reply = (teks) => {
            peka.sendText(m.chat, teks, m)
        }
        
        //Button 5
        var but = [
							{
								"urlButton": {
									"displayText": "website",
									"url": `${website}`
									}
								},
								{
									"callButton": {
                                    "displayText": "Number Phone Owner",
                                    "phoneNumber": '+62 882-9202-4190'
                                }
										},
										{
											"quickReplyButton": {
												"displayText": "Donasi",
												"id": 'donate'
												}
												},
												{
													"quickReplyButton": {
														"displayText": "Owner",
														"id": 'owner'
														}
														},
														{
															"quickReplyButton": {
																"displayText": "Back To List",
																"id": 'command'
																}
																}
																]
																
		//respon jika belum terdaftar
          
          let buttonsDaftar = [
                    {buttonId: `.daftar`, buttonText: {displayText: 'DAFTAR'}, type: 1}
                ]
                let buttonMessageDaftar = {
                    text: `Hai kak  ${pushname}\n\nJangan lupa daftar dulu yah dengan cara klik tombol daftar atau ketik .daftar makasih ^^`,
                    footer: 'please click the button here',
                    buttons: buttonsDaftar,
                    headerType: 2
                }
        //memasukan user ke database
         const JadiUser = (userid, name, sender, pada) => {
            const obj = { id: userid, nama: name, serial: sender, pada: pada}
            daftar.push(obj)
            fs.writeFileSync('./database/user.json', JSON.stringify(daftar))
        }

        //Buat serial
        const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        
        const sekarang = new Date().getTime();
			//-
			//WAKTU
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Midnight 🌚"; break;
                case 1: jamss = "Midnight 🌚"; break;
                case 2: jamss = "Waktu Dini Hari🌒"; break;
                case 3: jamss = "Waktu Dini Hari🌓"; break;
                case 4: jamss = "Subuh🌔"; break;
                case 5: jamss = "Subuh🌔"; break;
                case 6: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🌄"; break;
                case 7: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🌄"; break;
                case 8: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🌄"; break;
                case 9: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🌅"; break;
                case 10: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭  𝐏𝐚𝐠𝐢 🌅"; break;
                case 11: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🌞"; break;
                case 12: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🌞"; break;
                case 13: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🌞"; break;
                case 14: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🌞"; break;
                case 15: jamss = "Asr"; break;
                case 16: jamss = "Selamat Sore Kak🌝"; break;
                case 17: jamss = "Evening 🌄"; break;
                case 18: jamss = "Maghrib"; break;
                case 19: jamss = "Isha"; break;
                case 20: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌"; break;
                case 21: jamss = "𝐒𝐞𝐥𝐚𝐦??𝐭 𝐌𝐚𝐥𝐚𝐦 🌌"; break;
                case 22: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌"; break;
                case 23: jamss = "Midnight 🌚"; break;
            }
            var tampilUcapan = "" + jamss;
            const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
		
        // Public & Self
        if (!peka.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console
        if (m.message) {
        	peka.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
        //━━━━━━━━━━━━━━━[ Function Rpg ]━━━━━━━━━━━━━━━━━//
        
        let buttonspetualang = [
                    {buttonId: `.joinrpg`, buttonText: {displayText: 'Mulai Petualang'}, type: 1}
                ]
       let buttonpetualang = {
                    text: `Maaf kak *${pushname}*, anda bukan seorang petualang!!\nUntuk menjadi petualang silahkan ketik :\nJoinrpg`,
                    footer: 'klik tombol dibawah untuk jadi petalang',
                    buttons: buttonspetualang,
                    headerType: 2
       }
       function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
       function monospace(string) {
            return '```' + string + '```'
        }
 
 var premi = 'No Premium User'
			if (isPremium) {
				premi = 'Premiun User'
			} 
			if (isCreator) {
				premi = 'This Is Owner'
			}
	    var elit = 'Petualang Biasa'
			if (isPremium) {
				elit = 'Petualang Pro'
			} 
			if (isCreator) {
				elit = 'GM in GAME'
			}
     	
     	
     	const bayarHealt = (sender, amount) => {
        	let position = false
            Object.keys(_healt).forEach((i) => {
                if (_healt[i].id === m.sender) {
                    position = i
                }
            })
            if (position !== false) {
                _healt[position].healt -= amount
                if (_healt[position].healt >= 0) return reply('healt kmu dh penuh')
                fs.writeFileSync('./database/rpg/healt.json', JSON.stringify(_healt))
            }
        }
    

//function rank 
			const levelRole = getLevelingLevel(m.sender)
   	     var role = 'bronz'
   	     if (levelRole <= 3) {
   	         role = 'Copper'
   	     } else if (levelRole <= 5) {
   	         role = 'Iron'
   	     } else if (levelRole <= 7) {
   	         role = 'Silver'
   	     } else if (levelRole <= 10) {
   	         role = 'Gold'
   	     } else if (levelRole <= 12) {
   	         role = 'Platinum'
   	     } else if (levelRole <= 15) {
   	         role = 'Mithril'
   	     } else if (levelRole <= 18) {
   	         role = 'Orichalcum'
   	     } else if (levelRole <= 25) {
   	         role = 'Adamantite'
   	     }

	        //function leveling


var reqXp  = 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
            if (isPetualang) {
            const currentLevel = getLevelingLevel(m.sender)
            const checkId = getLevelingId(m.sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                const amountXp = Math.floor(Math.random() * 10) + 180
                const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                var getLevel = getLevelingLevel(m.sender)
                addLevelingXp(m.sender, amountXp)
                if (requiredXp <= getLevelingXp(m.sender)) {
                addLevelingLevel(m.sender, 1)   
                var lvlup = monospace(`╭───「 🎉 Level Up 🎉」
│
├ ➤ Nama : ${pushname}
├ ➤ Nomer : @${m.sender.split("@")[0]}
├ ➤ Rank : ${role}
├ ➤ Status : ${elit}
├ ➤ Xp : ${getLevelingXp(m.sender)}
├ ➤ Level : ${getLevel} --> ${getLevelingLevel(m.sender)}
│
╰───「 Pekabot 」`)
		  
          const butlvlup = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: `${lvlup}`,
           Message: { 
           jpegThumbnail: fs.readFileSync('./media/image/thumbnail.jpeg') },
           hydratedFooterText: 'Selamat anda naik level',
           hydratedButtons: [
               {
             quickReplyButton: {
               displayText: 'Profil',
               id: '.profil',
             }

           },
               {
             quickReplyButton: {
               displayText: 'menu shinobi',
               id: '.menushinobi',
             }

           },
           {
             quickReplyButton: {
               displayText: 'Mulai Misi',
               id: '.misi',
             }
           }]
         }
       }
     }), { userJid: m.chat, quoted: m })
                peka.relayMessage(m.chat, butlvlup.message, { messageId: butlvlup.key.id}, { quoted: m })
                }
            } catch (err) {
                console.error(err)
            }
        }        
        
        // Kalo Make Kasi WM Made By Febriansyah Ajg!!          

        var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
        var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎','🐺']
        var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
        //Health
       // var healt =
        
            
        const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍋 : 🍋 : 🍋 Win👑', 
        '🔔 : 🍋 : 🔔', 
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🍒 : 🍒 : 🍒 Win👑',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🔔 : 🔔 : 🔔 Win👑',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🔔 : 🔔 : 🍇',    //Mau Ambil? Add Wm Lah Tod
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔', 
        '🍊 : 🍒 : 🍐', 
        '🍒 : 🔔 : 🍊', 
        '🍇 : 🍇 : 🍇 Win👑', 
        '🍊 : 🍋 : 🔔', 
        '🔔 : 🍒 : 🍐', 
        '🔔 : 🍒 : 🍊', 
        '🍊 : 🍋 : 🔔',	
        '🍐 : 🍒 : 🍋', 
        '🍐 : 🍐 : 🍐 Win👑', 
        '🍊 : 🍒 : 🍒', 
        '🔔 : 🔔 : 🍇', 
        '🍌 : 🍒 : 🔔', 
        '🍐 : 🔔 : 🔔', 
        '🍊 : 🍋 : 🍒', 
        '🍋 : 🍋 : 🍌', 
        '🔔 : 🔔 : 🍇', 
        '🔔 : 🍐 : 🍇', 
        '🍌 : 🍌 : 🍌 Win👑']
        
        

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in cmdmedia)) {
        let hash = cmdmedia[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: peka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, peka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        peka.ev.emit('messages.upsert', msg)
        }

        switch(command) {
        	
	    //━━━━━━━━━━━━━━━[ CASE ]━━━━━━━━━━━━━━━━━//

case 'menudasar': case 'besicmenu': case 'besikmenu': {
	if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
              mfitur = `
┌──⭓ *Menu*
│
│⭔ Menudasar
│⭔ Daftar
│⭔ Menu
│
└───────⭓
`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/peka.jpg') }, { upload: peka.waUploadToServer })
              const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: mfitur,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/image/thumbnail.jpeg') },
           hydratedFooterText: 'created by khamid',
           hydratedButtons: [{
             urlButton: {
               displayText: 'website',
               url: website
             }

           },
             {
             callButton: {
               displayText: 'Nomor Owner',
               PhoneNumber: '0813-5104-7727'
             }

           },
               {
             quickReplyButton: {
               displayText: '🧒 Owner',
               id: '.owner',
             }

           },
               {
             quickReplyButton: {
               displayText: '💲 Donasi',
               id: '.donasi',
             }

           },
           {
             quickReplyButton: {
               displayText: '📍 Credits',
               id: '.tqto',
             }
           }]
         }
       }
     }), { userJid: m.chat, quoted: m })
                peka.relayMessage(m.chat, template.message, { messageId: template.key.id }, { quoted: m })
            }
            break
case 'daftar': case 'verify': {
	if (isDaftar) throw mess.wsdaftar
	const serialUser = bikinSerial(20)
	        let name = `${pushname}`
	        let pada = `${jam}-${calender}`
	        veri = m.sender
	        daftar.push(m.sender)
	        fs.writeFileSync('./database/user.json', JSON.stringify(daftar))
	        JadiUser(m.sender, name, serialUser, pada)
              dpter = `
*┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙*
*│*「 *PENDAFTARAN BERHASIL* 」
*│Terimakasih Telah*
*│Mendaftar*
*┕┬────────────┈ ⳹*
*┌┤Nama :* ${pushname}
*││SN :* ${serialUser}
*││Nomer :* +${m.sender.split('@')[0]}
*││Total Pengguna :* ${daftar.length} Orang
*││Status :* ☑️ Terverifikasi
*│┕────────────┈ ⳹*
*│Waktu Pendaftaran*
*│*•Tanggal : *${calender}*
*│*•Jam : *${jam}*
*┕━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙*
*「 Peka Bot 」*`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/peka.jpg') }, { upload: peka.waUploadToServer })
              const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: dpter,
           Message: { 
           jpegThumbnail: fs.readFileSync('./media/image/thumbnail.jpeg') },
           hydratedFooterText: ftext,
           hydratedButtons: [{
             urlButton: {
               displayText: 'website',
               url: website
             }

           },
               {
             quickReplyButton: {
               displayText: '🧒 Owner',
               id: '.owner',
             }

           },
               {
             quickReplyButton: {
               displayText: '📍 Credits',
               id: '.infobot',
             }

           },
           {
             quickReplyButton: {
               displayText: 'Menu',
               id: '.menu',
             }
           }]
         }
       }
     }), { userJid: m.chat, quoted: m })
                peka.relayMessage(m.chat, template.message, { messageId: template.key.id}, { quoted: m })
            }
            break

case 'menu': case 'listmenu': case 'help': case '?': {
	if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
              mfitur = `
┌──⭓ *Menu*
│
│⭔ Rpgmenu
│⭔ Owner Menu
│⭔ Owner
│⭔ Stiker
│⭔ Removebg
│⭔ Toimg
│⭔ Ping
│⭔ Wallpaper
│⭔ google
│⭔ ytsearch
│⭔ Walpaper
│⭔ listpc
│⭔ listgc
│
└───────⭓
┌──⭓ *Downloader Menu*
│
│⭔ ${prefix}play
│⭔ ${prefix}ytmp3
│⭔ ${prefix}ytmp4
│⭔ ${prefix}getvidio
│⭔ ${prefix}getmusik
│
└───────⭓
┌──⭓ *Owner Menu*
│
│⭔ ${prefix}chat [option]
│⭔ ${prefix}join [link]
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│⭔ ${prefix}bcgroup
│⭔ ${prefix}bcall
│⭔ ${prefix}mode
│⭔ ${prefix}bc
│⭔ ${prefix}bcgc
│⭔ ${prefix}setpp
│
└───────⭓
┌──⭓ *Anonymous Menu*
│
│⭔ ${prefix}anonymous
│⭔ ${prefix}start
│⭔ ${prefix}next
│⭔ ${prefix}keluar
│⭔ ${prefix}sendkontak
│
└───────⭓
┌──⭓ *Group Menu*
│
│⭔ ${prefix}linkgroup
│⭔ ${prefix}ephemeral [option]
│⭔ ${prefix}setpp
│⭔ ${prefix}setname [text]
│⭔ ${prefix}setdesc [text]
│⭔ ${prefix}group [option]
│⭔ ${prefix}editinfo [option]
│⭔ ${prefix}add @user
│⭔ ${prefix}kick @user
│⭔ ${prefix}hidetag [text]
│⭔ ${prefix}tagall [text]
│⭔ ${prefix}promote @user
│⭔ ${prefix}demote @user
│
└───────⭓
`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/peka.jpg') }, { upload: peka.waUploadToServer })
              const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: mfitur,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/image/thumbnail.jpeg') },
           hydratedFooterText: ftext,
           hydratedButtons: [{
             urlButton: {
               displayText: 'website',
               url: website
             }

           },
             {
             callButton: {
               displayText: 'Nomor Owner',
               PhoneNumber: '0813-5104-7727'
             }

           },
               {
             quickReplyButton: {
               displayText: '🧒 Owner',
               id: '.owner',
             }

           },
               {
             quickReplyButton: {
               displayText: '💲 Donasi',
               id: '.donasi',
             }

           },
           {
             quickReplyButton: {
               displayText: '📍 Credits',
               id: '.tqto',
             }
           }]
         }
       }
     }), { userJid: m.chat, quoted: m })
                peka.relayMessage(m.chat, template.message, { messageId: template.key.id }, { quoted: m, contextInfo: { forwardingScore: 508, isForwarded: true } })
            }
            break
            case 'sc' :
            peka.sendText(m.chat, 'Bot multi Device ini masih tahap beta', m)
            break
            case 'owner': case 'developer': case 'dev': case 'creator': {
                peka.sendMessage(m.chat, { contacts: { displayName: 'Khamid mirdad.', contacts: [{ vcard }] } }, { quoted: m, contextInfo: { forwardingScore: 508, isForwarded: true } })            
                peka.sendText(m.chat, 'Ini kak nomer owner ku😎 jangan dispam yak', m)
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
            	if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

• Nama Owner : ${ownername}
• Nama Bot : ${namaBot}
• Mode : ${publik ? 'Public' : 'Self'}
• Runtime : ${runtime(process.uptime())}
• Uptime : ${runtime(os.uptime())}
• Total Chat : ${totalchat.length} Chat
• Total Pengguna : ${daftar.length} User

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
case 'toimage': case 'toimg': {
	            if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await peka.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    peka.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
        if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await peka.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    peka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, {quoted:m})
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break

        case 'emojimix': {
        	if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await peka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
         case 'tomp4': case 'tovideo': {
         	   if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/scraper')
                let media = await peka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(medial)
                await peka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'togif': {
            	if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/scraper')
                let media = await peka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await peka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
		        if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await peka.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break

           //------------------------------[ Case Rpg ]------------------------------//
            case 'profile': case 'profil': case 'rpgmenu':
if (!isPetualang) return peka.sendMessage(m.chat, buttonpetualang, { quoted: m })
pp = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿
 • Nama : ${pushname}
 • Rank : ${role}
 • Status : ${elit}
 • Uang : $${(getBalance(m.sender, balance))}
 • Xp : ${getLevelingXp(m.sender)}/${reqXp}
 • Level : ${getLevelingLevel(m.sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :
 • Uang : $${(getBalance(m.sender, balance))}
 • Emas : ${getEmas(m.sender)}
 • Besi : ${getBesi(m.sender)}
 • Ikan : ${getFish(m.sender)}
 • Berlian : ${getDm(m.sender)}

🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚
 • joinrpg
 • quest 
 • mining
 • mancing
 • luckyday
 • adventure
 • myinventori
 • topleaderboard
 
⚔️ 𝗙𝗮𝗿𝗺𝗶𝗻𝗴 𝗥𝗣𝗚
 • killslime
 • killgoblin
 • killdevil
 • killbehemoth
 • killdemond
 • killdemondking 
 
🛒 𝗦𝗲𝗹𝗹 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆
 • sellikan
 • sellbesi
 • sellemas
 • selldiamond`)
const dafpetualang = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: `${pp}`,
           Message: { 
           jpegThumbnail: fs.readFileSync('./media/image/thumbnail.jpeg') },
           hydratedFooterText: ftext,
           hydratedButtons: [{
             urlButton: {
               displayText: 'website',
               url: website
             }

           },
               {
             quickReplyButton: {
               displayText: 'My Inventory',
               id: '.mybag',
             }

           },
               {
             quickReplyButton: {
               displayText: '📍 Credits',
               id: '.infobot',
             }

           },
           {
             quickReplyButton: {
               displayText: 'Adventure',
               id: '.adventure',
             }
           }]
         }
       }
     }), { userJid: m.chat, quoted: m })
                peka.relayMessage(m.chat, dafpetualang.message, { messageId: dafpetualang.key.id}, { quoted: m })
		break
case 'joinrpg': {
		  if (isPetualang) return reply('Kamu sudah menjadi petualang')
	   	  _petualang.push(m.sender)
		  fs.writeFileSync('./database/inventori.json', JSON.stringify(_petualang))
		  capt = `🎉Selamat ${pushname}🎊\nKamu terdaftar sebagai petualang!`
		  const dafpetualang = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: capt,
           Message: { 
           jpegThumbnail: fs.readFileSync('./media/image/thumbnail.jpeg') },
           hydratedFooterText: ftext,
           hydratedButtons: [{
             urlButton: {
               displayText: 'website',
               url: website
             }

           },
               {
             quickReplyButton: {
               displayText: 'My profil',
               id: '.profile',
             }

           },
               {
             quickReplyButton: {
               displayText: '📍 Credits',
               id: '.infobot',
             }

           },
           {
             quickReplyButton: {
               displayText: 'Adventure',
               id: '.adventure',
             }
           }]
         }
       }
     }), { userJid: m.chat, quoted: m })
                peka.relayMessage(m.chat, dafpetualang.message, { messageId: dafpetualang.key.id}, { quoted: m })
            }
            addInventori(m.sender)
	        addLevelingId(m.sender)
            break
		  case 'mybag': case 'inventori': 
case 'cekinven': case 'myinventori': {
done = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿\n • Nama : ${pushname}\n • Rank : ${role}\n • Status : ${elit}\n • Xp : ${getLevelingXp(m.sender)}/${reqXp}\n • Level : ${getLevelingLevel(m.sender)}\n🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :\n • Emas : ${getEmas(m.sender)}🪙\n • Uang : $${(getBalance(m.sender, balance))}💰\n • Besi : ${getBesi(m.sender)}⛓️\n • Berlian : ${getDm(m.sender)}💎\n • Ikan : ${getFish(m.sender)}🎣`)
let buttons = [
                    {buttonId: `.adventure`, buttonText: {displayText: 'Adventure'}, type: 1}
                ]
                let button = {
                    text: `${done}`,
                    footer: ftext,
                    buttons: buttons,
                    headerType: 2
                }
          peka.sendMessage(m.chat, button, { quoted: m })
          }
break
		  case 'mancing': {
		  if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
          if (!isPetualang) return peka.sendMessage(m.chat, buttonpetualang, { quoted: m })
          ikannya = ikan[Math.floor(Math.random() * ikan.length)]
	      xp = Math.ceil(Math.random() * 350)          
	      coin = randomNomor(50)	    
	      ditangkap = Math.ceil(Math.random() * 50)
	      cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
	      setTimeout( () => {
	      caption = `「 Memancing 」\n\n • Tangkapan : ${ikannya}\n • Total Dapat : ${ditangkap} Ikan\n • MONEY : $${coin}\n • EXP : ${xp}Xp`
           const butman = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
          templateMessage: {
          hydratedTemplate: {
           hydratedContentText: caption,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/image/thumbnail.jpeg') },
           hydratedFooterText: ftext,
           hydratedButtons: [ 
               {
             quickReplyButton: {
               displayText: 'Mancing lagi',
               id: '.mancing',
             }

           },
               {
             quickReplyButton: {
               displayText: 'Cek Inventori',
               id: '.myinventori',
             }

           },
           {
             quickReplyButton: {
               displayText: 'Myprofile',
               id: '.profil',
             }
           }]
         }
       }
     }), { userJid: m.chat, quoted: m })
                peka.relayMessage(m.chat, butman.message, { messageId: butman.key.id}, { quoted: m })       
          }, 11000)
          setTimeout( () => {
		  peka.sendText(m.chat, 'Berhasil Mendapatkan Ikan. . .') 
		  }, 10000) // 1000 = 1s,
		  setTimeout( () => {
		  peka.sendText(from, '🎣Mulai memancing. . .') 
		  }, 1500) // 1000 = 1s,
		  addFish(m.sender, ditangkap)
		  addLevelingXp(m.sender, xp)
		  addBalance(m.sender, coin, balance) 
          limitAdd(m.sender, limit)         }
	      break
case 'sellikan': case 'jualikan':
          if (!isPetualang) return peka.sendMessage(m.chat, buttonpetualang, { quoted: m })
          if (args.length < 1) return reply(`Masukan jumlah yang ingin dijual\ncontoh Jualikan 10`)      
          jmlh = body.slice(9)
          rp = 5 * jmlh
          if (getFish(m.sender) < jmlh) return reply(`Ikan Kamu Tidak Cukup`)
          sellFish(m.sender, jmlh, balance)
          addBalance(m.sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦??𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Ikan : 5\n • Status : Sukses\n • Sisa Ikan : ${getFish(m.sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
                let buttoncekinvenyory = {
                    text: `${capti}`,
                    footer: ftext,
                    buttons: but,
                    headerType: 2
                }
          peka.sendMessage(m.chat, buttoncekinvenyory, { quoted: m })         
          break
case 'adventure':
          
          if (!isPetualang) return peka.sendMessage(m.chat, buttonpetualang, { quoted: m })
	      ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
	      const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
          const dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
	      const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
	      anu = fs.readFileSync('./lib/rpg/dungeon.js');
          jsonData = JSON.parse(anu);
	      randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
	      hasm = await getBuffer(randKey.result)  
	      const adven = Math.ceil(Math.random() * 1000)          
	      const money = Math.ceil(Math.random() * 300)					      	      
	      setTimeout( () => {		
          caption = monospace(`「 DEATH 」\n\n • Tempat  ${ad}\n • MONEY : $${money}\n • EXP : ${adven}Xp`)
          but = [
          { buttonId: `!myinventori`, buttonText: { displayText: 'Inventori' }, type: 1 }]
          let buttoncekinvenyory = {
                    text: `${caption}`,
                    footer: ftext,
                    buttons: but,
                    headerType: 2
                }
          peka.sendMessage(m.chat, buttoncekinvenyory, { quoted: m })
          }, 7000)
          setTimeout( () => {
          peka.sendText(m.chat, `Awass`)
		  }, 5000) // 1000 = 1s,
	      setTimeout( () => {
		  peka.sendText(m.chat, `Tiba tiba ada ${sesuatu}`) 
		  }, 3000) // 1000 = 1s,
		  setTimeout( () => {
		  peka.sendText(m.chat, `${pushname} sedang bertualang`) 
		  }, 1500) // 1000 = 1s,
		  addLevelingXp(m.sender, adven)
		  addBalance(m.sender, money, balance) 
          limitAdd(m.sender, limit) 
        //  await healtAdd(sender)
          break
          //------------------------------[ End Case Rpg ]------------------------------//
          case 'sticker': case 'stiker': case 's': case 'stickergif': case 'sgif': {
            if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await peka.sendImageAsSticker(m.chat, media, m, { packname: global.stikname, author: global.stikauthor })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await peka.sendVideoAsSticker(m.chat, media, m, { packname: global.stikname, author: global.stikauthor })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim gambar/video dengan caption *${prefix + command}* atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`
                }
            }
            break
            case 'listpc': {
            	 if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 peka.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listgc': {
             	if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await peka.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 peka.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
             	   if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    peka.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
             case 'infochat': {
                if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                peka.sendTextWithMentions(m.chat, teks, m)
            }
            break
         //------------------------------[ Case Owner ]------------------------------//
         case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    peka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    peka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    peka.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    peka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    peka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    peka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    peka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await peka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'block': {
		         if (!isCreator) throw mess.owner
		         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		         await peka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	        }
	        break
            case 'unblock': {
		       if (!isCreator) throw mess.owner
		       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		       await peka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	        }
	        break
            case 'mode': 
            if (!isCreator) throw mess.owner
            let buttons = [
                        { buttonId: 'public', buttonText: { displayText: 'Publik' }, type: 1 },
                        { buttonId: 'self', buttonText: { displayText: 'Self' }, type: 1 }
                    ]
                    await peka.sendButtonText(m.chat, buttons, `Mode Bot`, ftext, m)
             break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                let getGroups = await peka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                cc = await peka.serializeM(text ? m : m.quoted ? await m.quoted.fakeObj : false || m)
                cck = text ? text : cc.text
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    await peka.copyNForward(i, peka.cMod(m.chat, cc, /bc|broadcast|bcgc/i.test(cck) ? cck : `「 *${peka.user.name} Broadcast* 」\n\n ${cck}`), true).catch(_ => _)
                }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                let anu = await store.chats.all().map(v => v.id)
                cc = await peka.serializeM(q ? m : m.quoted ? await m.getQuotedObj() : false || m)
                cck = q ? q : cc.text
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    await peka.copyNForward(yoi, peka.cMod(m.chat, cc, /bc|broadcast/i.test(cck) ? cck : `「 *${peka.user.name} BROADCAST* 」\n\n ${cck}`), true).catch(_ => _)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'public': case 'publik': {
                if (!isCreator) throw mess.owner
                peka.public = true
                m.reply('Sukses Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                peka.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
         //------------------------------[ End Case Owner ]------------------------------//
         //------------------------------[ Case Anonymous ]------------------------------//
         case 'anonymous': {
         	   if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                peka.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await peka.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, peka.user.name, m)
            }
			break
            case 'mulai': case 'start': {
            	if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await peka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, peka.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await peka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, peka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await peka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, peka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await peka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, peka.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await peka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await peka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await peka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, peka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await peka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, peka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await peka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, peka.user.name, m)
                }
                break
                }
                case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await peka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await peka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'sendkontak': case 'sendcontact': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await peka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                let profile = await peka.profilePictureUrl(room.b)
                let status = await peka.fetchStatus(room.b)
                let msg = await peka.sendImage(room.a, profile, `Nama : ${await peka.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                peka.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
            //------------------------------[ Case Anonymous ]------------------------------//
            //------------------------------[ Case Menu Download ]------------------------------//
            case 'play': case 'ytplay': {
            	if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                if (!text) throw `Example : ${prefix + command} judul lagu yang ingin di download`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: peka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                peka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'ytmp3': case 'ytaudio': {
            	if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                if (!text) throw `Linknya mana\n\nContoh : ${prefix + command} https://youtube.com/watch?v=PtyMh6T%2748bps`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(text)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return m.reply('File Melebihi Batas'+util.format(media))
                peka.sendImage(m.chat, thumbnail, `⭔ Title : ${title}\n⭔ File Size : ${media[0].formattedSize}\n⭔ Resolusi : ${args[1] || '128kbps'}\n\n*Tunggu sebentar lagu sedang dikirim*`, m)
                peka.sendMessage(m.chat, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
            	if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                if (!text) throw `Linknya mana \n\nContoh: ${prefix + command} https://youtube.com/watch?v=PtFpytMhcag%60p`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(text)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '360p'                
                let media = medias.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return m.reply('File Melebihi Batas'+util.format(media))
                peka.sendImage(m.chat, thumbnail, `⭔ Title : ${title}.mp4\n⭔ File Size : ${media[0].formattedSize}\n⭔ Resolusi : ${args[1] || '360p'}\n\n*Tunggu sebentar Video sedang dikirim*`, m)
                peka.sendMessage(m.chat, { video: { url: media[0].url }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: `⭔ Title : ${title}\n⭔ File Size : ${media[0].formattedSize}\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'getmusic': case 'getmusik': {
            	if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                if (!text) throw `Untuk menggunakan perintah ini, reply pesan hasil dari perintah *ytsearch* dan kemudian kirim perintah getmusik dan nomer urutan hasil yang ingin di download\n\nContoh : *getmusik 1*`
                if (!m.quoted) return m.reply('Reply pesan balasan dari perintah *ytsearch*')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Pesan yang anda reply tidak mengandung result dari *ytsearch*\n\nGunakan perintah *ytsearch* terlebih dulu, kemudian reply dari result ytsearch dengan perintah ini lagi`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(urls[text - 1])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return m.reply('File Melebihi Batas'+util.format(media))
                peka.sendImage(m.chat, thumbnail, `⭔ Title : ${title}\n⭔ File Size : ${media[0].formattedSize}\n⭔ Url : ${url}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}\n\n*Tunggu sebentar Musik sedang dikirim*`, m)
                peka.sendMessage(m.chat, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
            	if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                if (!text) throw `Untuk menggunakan perintah ini, reply pesan hasil dari perintah *ytsearch* dan kemudian kirim perintah getvideo dan nomer urutan hasil yang ingin di download\n\nContoh : *getvideo 1*`
                if (!m.quoted) return m.reply('Reply pesan balasan dari perintah *ytsearch*')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Pesan yang anda reply tidak mengandung result dari *ytsearch*\n\nGunakan perintah *ytsearch* terlebih dulu, kemudian reply dari result ytsearch dengan perintah ini lagi`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(urls[text - 1])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '360p'                
                let media = medias.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return m.reply('File Melebihi Batas'+util.format(media))
                peka.sendImage(m.chat, thumbnail, `⭔ Title : ${title}\n⭔ File Size : ${media[0].formattedSize}\n⭔ Url : ${url}\n⭔ Ext : MP4\n⭔ Resolusi : ${args[1] || '360p'}\n\n*Tunggu sebentar Video sedang dikirim*`, m)
                peka.sendMessage(m.chat, { video: { url: media[0].url }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: `⭔ Title : ${title}\n⭔ File Size : ${media[0].formattedSize}\n⭔ Url : ${url}\n⭔ Ext : MP4\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break

             case 'dlfoto': case 'gfoto': case 'gimage': {
        if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
        if (!text) throw `mau cari apa kak\n\nContoh : *${prefix + command}* Anime cowok cool`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `dlfoto ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 Get Foto 」-------*
🤠 *Query* : ${text}`,
                    footer: `Hai ${pushname} jangan disalahgunakan yaa`,
                    buttons: buttons,
                    headerType: 4
                }
                peka.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break

            case 'yts': case 'ytsearch': {
            	if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                if (!text) throw `Apa yang mau dicari\n\n Contoh : ytsearch Tentang rindu`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                peka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
            
            case 'tiktok': case 'tiktoknowm': {
            	if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                peka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
            	if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                peka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
            	if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await peka.sendMessage(m.chat, buttonMessage, { quoted: m })
                peka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
            case 'igdl': case 'ig': case 'instagram': {
            	if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/instagram2', { url: text }, 'apikey'))
                peka.sendMessage(m.chat, { video: { url: anu.data[0] }, caption: `Download From ${text}` }, { quoted: m})
            } 
            break
            case 'igdltv': case 'igreels': case 'igdl2': {
            	if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/instagram', { url: text }, 'apikey'))
                peka.sendMessage(m.chat, { video: { url: anu.result.link }, caption: `⭔ Desc : ${anu.result.caption.desc}`}, { quoted: m })
            }
            break
            case 'twitdl': case 'twitter': {
            	if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                peka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
            	if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await peka.sendMessage(m.chat, buttonMessage, { quoted: m })
                peka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
            
            //------------------------------[ End Case Menu Download ]------------------------------//
            //------------------------------[ Case Menu Group ]------------------------------//
            case 'gngrup': case 'setname': case 'setnem': case 'gngrub': case 'gngroub': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins && !isGroupOwner) throw mess.admin
                if (!text) throw `Nama grup nya apa\n\nContoh : *${prefix + command}* Pekabot`
                await peka.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdes': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins && !isGroupOwner) throw mess.admin
                if (!text) throw `Deskripsinya mana.?\n\nContoh : *${prefix + command}* Deskripsi grub`
                await peka.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setprofile': case 'setpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw 'Reply Image'
                if (/image/.test(mime)) throw `balas image dengan caption *${prefix + command}*`
                let media = await peka.downloadAndSaveMediaMessage(quoted)
                if (!m.isGroup && !isBotAdmins && !isGroupAdmins) {
                    await peka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                } else if (!isCreator) {
                    await peka.updateProfilePicture(peka.user.id, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                }
            }
            break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins && !isGroupOwner) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                peka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isGroupAdmins && !isGroupOwner) throw mess.admin
            peka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
            case 'group': case 'grup': case 'grub': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins && !isGroupOwner) throw mess.admin
                if (args[0] === 'close') {
                    await peka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open') {
                    await peka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Semua anggota' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Hanya admin' }, type: 1 }
                    ]
                    await peka.sendButtonText(m.chat, buttons, `Mode Group\n\n\nSetting siapa saja yang dapat mengirim pesan ke grub ini`, ftext, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins && !isGroupOwner) throw mess.admin
             if (args[0] === 'open'){
                await peka.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await peka.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Semua Peserta' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Hanya Admin' }, type: 1 }
                    ]
                    await peka.sendButtonText(m.chat, buttons, `Mode Edit Info\n\n\nSetting siapa yang dapat mengedit info grup`, ftext, m)

            }
            }
            break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await peka.groupInviteCode(m.chat)
                peka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins && !isGroupOwner) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await peka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await peka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins && !isGroupOwner) throw mess.admin
                if (!text) throw `Untuk kick anggota tag nomernya\n\nContoh : kick @target`
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await peka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins && !isGroupOwner) throw mess.admin
                if (!text) throw `Untuk menambahkan anggota ketik nomer yang diawali dengan 62\n\nContoh : add 6287654321`
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await peka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins && !isGroupOwner) throw mess.admin
                if (!text) throw `Untuk menambahkan admin tag target\n\nContoh : ${prefix + command} @target`
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await peka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins && !isGroupOwner) throw mess.admin
                if (!text) throw `Untuk memberhentikan dari admin tag target\n\nContoh : ${prefix + command} @target`
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await peka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
            //------------------------------[ End Case Menu Group ]------------------------------//

            case 'google': {
            	if (!isDaftar) return peka.sendMessage(m.chat, buttonMessageDaftar, { quoted: m })
                if (!text) throw `Mau cari apa kak ${pushname}\n\n : cara pakai : ${prefix + command} query yang ingin anda cari`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
            case 'wallpaper': {
                if (!text) throw `Mau cari wallpaper apa kak\n\nContoh : Wallpaper Spiderman`
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `Hai ${pushname} jangan disalahgunakan yaa`,
                    buttons: buttons,
                    headerType: 4
                }
                peka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
        
	   //━━━━━━━━━━━━━━━[ END CASE ]━━━━━━━━━━━━━━━━━//
            default:
            if (isCmd && !isGroup) {

numd = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
simi = await fetchJson(`https://api.simsimi.net/v2/?text=${body}&lc=id`)
            sami = simi.success
                        peka.sendText(m.chat, `_${sami}_`, m)
 }
 
 if (isGroup && prefix) {

let buttons = [
                    {buttonId: `.menu`, buttonText: {displayText: 'MENU'}, type: 1}
                ]
                let buttonMessage = {
                    text: `[ ! ] Hai *${pushname}* \nCommand *${prefix}${command}* tidak tersedia, Silahkan cek fitur  di Menu`,
                    footer: 'Command Tidak Ditemukan',
                    buttons: buttons,
                    headerType: 2
                }
                peka.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 
 
                if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
		    if (!(budy.toLowerCase() in msgs)) return
		    peka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}

                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        m = String(err)
                        await m.reply(m)
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
        }
        
        
        if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
