//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes,
//pls give credit
//© 2022 Xeon Bot Inc. Doge Bot 
//Thank you to Lord Buddha, Family and Myself
//═══════════════════════════════════════════════════════//
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const hx = require('hxz-api')
const os = require('os')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const simple = require('./lib/simple.js')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const ggs = require('google-it')
const googleImage = require('g-i-s')
const yts = require( 'yt-search')
const zee = require('api-alphabot')
const { removeBackgroundFromImageFile } = require('remove.bg')

//══════════[ Lib ]══════════//

const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting/setting.json'))
const apikey = JSON.parse(fs.readFileSync('./setting/apikey.json'))
const { lirikLagu } = require('./lib/lirik.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { pinterest } = require('./lib/pinterest')
const { uploadimg, upload } = require('./lib/uploadimg')
const { uploadImages } = require('./lib/uploadimage')
const { mediafireDl } = require('./lib/mediafire.js')

//══════════[ Leveling and Rpg ]══════════//

let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance} = require("./lib/limit");
let { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require("./lib/rpgfunction");
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");

//══════════[ Setting ]══════════//

self = setting.self
autoread = setting.autoread
autoketik = setting.autoketik
autovn = setting.autovn
owner = setting.OwnerNumber
botname = setting.BotName
ownername = setting.OwnerName
gaya1 = setting.gaya1
gaya2 = setting.gaya2
const fakeimage = fs.readFileSync ('./media/dogepic1.jpg')
const thumb = fs.readFileSync ('./media/dogetb.jpg')

//══════════[ Developer Number ]══════════//

developerNo = '4915905890216@s.whatsapp.net 
developerName= '꧁༺「✯ꌛ℮ꁣꁣꊛꈛ✯ī.am 」༻꧂⁩'

//══════════[ Apikeys ]══════════//
//----credit goes to all the respected owner---//

dhakey = apikey.dhakey
KingOfBearKey = apikey.BearKey
Leyscoders = apikey.Leyscoders
Lolhuman = apikey.Lolhuman
Lolhumanbykur = apikey.Lolhuman2
porn1 = apikey.porn1
lolkey = apikey.lolkey1

//══════════[ Sticker WM ]══════════//

//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif()

//══════════[ Data Base ]══════════//

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const _nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))

//══════════[ TIME ]══════════//

const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Good night 🌌'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Good afternoon 🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Good afternoon 🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Good afternoon 🏞'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Good morning 🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Good night 🏙'
}

//══════════[ Module Export ]══════════//
		
module.exports = DogeXeonOP = async (DogeXeonOP, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const tanggal = moment.tz('Asia/Kolkata').format('dddd') + ', ' + moment.tz('Asia/Kolkata').format('LL')
		const time = moment().tz('Asia/Kolkata').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Kolkata').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Kolkata').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const txt = mek.message.conversation
		const botNumber = DogeXeonOP.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `916909137213@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? DogeXeonOP.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await DogeXeonOP.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        m = simple.smsg(DogeXeonOP, mek)
        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
        const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const conts = mek.key.fromMe ? DogeXeonOP.user.jid : DogeXeonOP.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? DogeXeonOP.user.name : conts.notify || conts.vname || conts.name || '-'    
    
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isNsfw = isGroup ? _nsfw.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		let bio_nya = await DogeXeonOP.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
			try {
		pporang = await DogeXeonOP.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)

//══════════[ Send file from url ]══════════//

const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
DogeXeonOP.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
DogeXeonOP.sendMessage(from, hasil, type, options).catch(e => {
DogeXeonOP.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}

//══════════[ Send message from url ]══════════//

        // sticker meme
            const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, "./stik" + names + ".png", async function () {
        console.log("finished");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            DogeXeonOP.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };

//══════════[ sendWebp ]══════════//

        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('Done');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        DogeXeonOP.sendMessage(from, media, MessageType.sticker, {quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }

//══════════[ Mess Dll ]══════════//

mess = {
wait: 'In process...',
eror: 'Sorry an error occurred!!',
success: 'Done✓',
error: {
stick: 'Thats not a sticker bro !!',
Iv: 'Link invalid !!'
},
only: {
nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
group: 'This feature is only for group!!',
owner: 'This feature is only for owner!!',
admin: 'This feature is onlu for admin!!',
Badmin: 'Please give adminship to the bot first!!'
}
}

const math = (teks) => {
return Math.floor(teks)
}
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

//══════════[ BUTTON ]══════════//

const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
DogeXeonOP.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: mek
})
}
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
DogeXeonOP.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await DogeXeonOP.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
DogeXeonOP.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await DogeXeonOP.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
DogeXeonOP.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await DogeXeonOP.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
DogeXeonOP.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//══════════[ Fake ]══════════//

const listmsg = (from, title, desc, list) => {
let po = DogeXeonOP.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝗠𝗘𝗡𝗨","footerText": `${tanggal}`,"listType": "SINGLE_SELECT","sections": list}}, {})
return DogeXeonOP.relayWAMessage(po, {waitForAck: true})
}
const reply = (teks) => {
DogeXeonOP.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
DogeXeonOP.sendMessage(hehe, teks, text)
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? DogeXeonOP.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : DogeXeonOP.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
}
const costum = (pesan, tipe, target, target2) => {
DogeXeonOP.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
const ftrol = { key : { participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 5555, status: 1, surface : 1, message: `${ucapanWaktu} ${pushname}`, orderTitle: `${ucapanWaktu} ${pushname}`, thumbnail: thumb, sellerJid: '0@s.whatsapp.net' }}}
const floc = { key : { participant : '0@s.whatsapp.net' }, message: { liveLocationMessage: { caption: `${ucapanWaktu} ${pushname}`, jpegThumbnail: thumb }}}
const fvid = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": {  "title": `${ucapanWaktu} ${pushname}`, "h": `${ucapanWaktu} ${pushname}`, 'duration': '99999', 'caption': `${ucapanWaktu} ${pushname}`, 'jpegThumbnail': thumb }}}
const fvoc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99999", "ptt": "true" }}}
const fgi = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": { "title": `${ucapanWaktu} ${pushname}`, "h": `${ucapanWaktu} ${pushname}`, 'duration': '99999', 'gifPlayback': 'true', 'caption': `${ucapanWaktu} ${pushname}`, 'jpegThumbnail': thumb }}}
const textImg = (teks) => { return DogeXeonOP.sendMessage(from, teks, text, {quoted: fgi, thumbnail: fs.readFileSync('./media/dogetb.jpg')})}
const fakeitem = (teks) => { DogeXeonOP.sendMessage(from, teks, text, { quoted: { key:{ fromMe:false, participant:`0@s.whatsapp.net`, ...(from ? { remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync("./media/dogetb.jpg"),"itemCount":9999999999,"status":"INQUIRY","surface":"CATALOG","message": `${ucapanWaktu} ${pushname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}

//══════════[ Storage ]══════════//

const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
DogeXeonOP.sendMessage(to, media, type, { quoted: fgi, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
fs.unlinkSync(filename)
});
}  

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

//══════════[ Grup ]══════════//

const hideTag = async function(from, text){
let anugroupsend = await DogeXeonOP.groupMetadata(from)
let members = anugroupsend.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
DogeXeonOP.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/dogepic1.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}
const hideTagKontak = async function(from, nomor, nama){
let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
let anuvcardoke = await DogeXeonOP.groupMetadata(from)
let members = anuvcardoke.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
DogeXeonOP.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
}
const sendKontak = (from, nomor, nama) => {
const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${botname}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
DogeXeonOP.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
}

//══════════[ Automatic Reply ]══════════//

for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					DogeXeonOP.sendMessage(from, result, sticker, { quoted: mek})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					DogeXeonOP.sendMessage(from, result, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					DogeXeonOP.sendMessage(from, result, image, { quoted: mek})
					}
				  }

//══════════[ Rank Function ]══════════//

			const levelRole = getLevelingLevel(sender)
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

	//══════════[ Leveling Function ]══════════//
	
            if (isGroup) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                var getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                addLevelingLevel(sender, 1)   
                var lvlup = (`╭───「 *🥳ʟᴇᴠᴇʟ ᴜᴘ🥳* 」
│
├ 💜 𝗡𝗮𝗺𝗲 : ${pushname}
├ 📱 𝗡𝘂𝗺𝗯𝗲𝗿 : ${sender.split('@')[0]}
├ 🏅 𝗥𝗮𝗻𝗸 : ${role}
├ 🔖 𝗫𝗣 : ${getLevelingXp(sender)}
├ 💠 𝗟𝗲𝘃𝗲𝗹  : ${getLevelingLevel(sender)}
│
╰───「 *🥳ʟᴇᴠᴇʟ ᴜᴘ🥳* 」`)
		  but = [{ buttonId: `!menu`, buttonText: { displayText: 'MENU 🗃️' }, type: 1 }]
          sendButton(from, lvlup, '*Doge Bot*', but)

                }
            } catch (err) {
                console.error(err)
            }
        }        
        

//══════════[ Antilink & Antivirtex ]══════════//

if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTED 」*\nYou sent the group chat link, sorry you will be kicked from the group`)
setTimeout(() => {
DogeXeonOP.groupRemove(from, [kic]).catch((e) => { reply(`BOTS MUST BE ADMIN`) })
}, 0)
}

if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Mark as read\n'.repeat(300))
reply(`「 *VIRUS DETECTED* 」\n\nYou sent a virtex, sorry you will be kicked from the group`)
console.log(color('[KICK]', 'red'), color('Received a text virus!', 'yellow'))
DogeXeonOP.groupRemove(from, [sender])
}     

//══════════[ Dll ]══════════//

if (autoread){
DogeXeonOP.chatRead(from, "read")
} else if (autoketik) {
DogeXeonOP.updatePresence(from, Presence.composing)
} else if (autovn) {
DogeXeonOP.updatePresence(from, Presence.recording)
}

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m[ PC\x1b[1;37m ]', '[\x1b[1;32m PRIVATE \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m[ GC\x1b[1;37m ]', '[\x1b[1;32m GROUP \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	if (!mek.key.fromMe && !isOwner && self === true) return
switch (command) {

//══════════[ MENU FEATURES ]══════════//

case 'menu':
case 'help':

timestampe = speed();
latensie = speed() - timestampe
const { wa_version, os_version } = DogeXeonOP.user.phone
pemilik = `${owner}@s.whatsapp.net`
menu =
`*_${ucapanWaktu} @${senderr.split('@')[0]}_*

❏「 TIME 」
${gaya1} *Date* : ${tanggal}
${gaya1} *Time* : ${time}

❏「 INFO BOT 」
${gaya1} *Speed* : ${latensie.toFixed(4)} Second
${gaya1} *Runtime* : ${runtime(process.uptime())}
${gaya1} *Bot Name* : ${botname}
${gaya1} *Owner Name* : ${ownername}
${gaya1} *Owner Number* : @${pemilik.split('@')[0]}
${gaya1} *Host Name :* ${os.hostname()}
${gaya1} *Platform :* ${os.platform()}
${gaya1} *Wa Version :* ${DogeXeonOP.user.phone.wa_version}
${gaya1} *Mode :* ${self ? "Self" : "Public"}
${gaya1} *Autoread* : ${autoread ? "Active" : "Off"}
${gaya1} *Autotype* : ${autoketik ? "Active" : "Off"}
${gaya1} *Autovn* : ${autovn ? "Active" : "Off"}

❏「 USER INFO 」
${gaya1} *Name* : ${pushname}
${gaya1} *Bio* : ${bio_user}
${gaya1} *Number* : @${senderr.split('@')[0]}
${gaya1} *Status* : ${isOwner ? 'Owner' : 'User'}`
teks =
`_Please Select Button Below_
_If You Are A Mod User_
_Please Type ${prefix}command_`
DogeXeonOP.sendMessage(from, { contentText: `${teks}`, footerText: `${menu}`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'MENU' }, type: 1 },{ buttonId: `${prefix}sc`,{ buttonId: `${prefix}developer`, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,pemilik]}}}, 'buttonsMessage')
break
case 'command':

listMsg = {
buttonText: 'MENU 📃',
footerText: `*${botname}*`,
description: `Hi Friend @${senderr.split('@')[0]}, Please select the menu here`,
sections: [
{
"title": `${tanggal} - ${time}`,
rows: [
{
"title": "GROUP MENU",
"description": `Display A List Of Group Features`,
"rowId": `${prefix}grupmenu`
},
{
"title": "DOWNLOAD MENU",
"description": `Display A List Of Features To Download`,
"rowId": `${prefix}downloadmenu`
},
{
"title": "MAKER MENU",
"description": `Display A List Of Features To Create Logo`,
"rowId": `${prefix}makermenu`
},
{
"title": "GAME MENU",
"description": `Display A List Of Game Features`,
"rowId": `${prefix}gamemenu`
},
{
"title": "RANDOM IMAGE MENU",
"description": `Display A List Of Random Photo Features`,
"rowId": `${prefix}randomimage`
},
{
"title": "RANDOM VIDEO",
"description": `Display A List Of Random Video Features`,
"rowId": `${prefix}randomvideo`
},
{
"title": "AESTHETIC GIRL MENU",
"description": `Display A List Of 18+ Intake Features`,
"rowId": `${prefix}asupanmenu`
},
{
"title": "RANDOM GIRL MENU",
"description": `Display A List Of Random Girl Features`,
"rowId": `${prefix}cecanmenu`
},
{
"title": "ANIME MENU",
"description": `Display A List Of Anime Features`,
"rowId": `${prefix}animemenu`
},
{
"title": "NSFW/HENTAI MENU",
"description": `Display A List Of Nsfw 18+ Features`,
"rowId": `${prefix}nsfwmenu`
},
{
"title": "STICKER MENU",
"description": `Display A List Of Sticker Features`,
"rowId": `${prefix}stickermenu`
},
{
"title": "FUN MENU",
"description": `Display A List Of Fun Features`,
"rowId": `${prefix}funmenu`
},
{
"title": "SOUND MENU",
"description": `Display A List Of Sounds`,
"rowId": `${prefix}soundmenu`
},
{
"title": "OCR MENU",
"description": `Display A List Of Ocr Features`,
"rowId": `${prefix}ocrmenu`
},
{
"title": "CONVERTER MENU",
"description": `Display A List Of Convert Features`,
"rowId": `${prefix}convertmenu`
},
{
"title": "LEVELING MENU",
"description": `Display A List Of Leveling Features`,
"rowId": `${prefix}levelingmenu`
},
{
"title": "SEARCH MENU",
"description": `Display A List Of Searching Features`,
"rowId": `${prefix}searchmenu`
},
{
"title": "APK MENU",
"description": `Display A List Of Apk Features`,
"rowId": `${prefix}apkmenu`
},
{
"title": "OTHER MENU",
"description": `Display A List Of Other Features`,
"rowId": `${prefix}othermenu`
},
{
"title": "OWNER MENU",
"description": `Display A List Of Owner Features`,
"rowId": `${prefix}ownermenu`
}
]
}],
listType: 1
}
DogeXeonOP.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [senderr]},quoted:fgi})
break
case 'allmenu':

reply(`*_Sorry Features ${prefix + command} Not Available Please Type ${prefix}command_*`)
break
case 'grupmenu':
case 'groupmenu':

menu =
`*「 GROUP MENU 」*

${gaya2} ${prefix}antilink _on / off_
${gaya2} ${prefix}antivirtex _on / off_
${gaya2} ${prefix}welcome _on / off_
${gaya2} ${prefix}nsfw _on / off_
${gaya2} ${prefix}group _open / closed_
${gaya2} ${prefix}promote _@tag / reply_
${gaya2} ${prefix}demote _@tag / reply_
${gaya2} ${prefix}add _916xx_
${gaya2} ${prefix}kick _@tag / reply_
${gaya2} ${prefix}getdesc
${gaya2} ${prefix}setpp _reply_
${gaya2} ${prefix}setdesc _text_
${gaya2} ${prefix}setname _text_
${gaya2} ${prefix}getbio _reply target_
${gaya2} ${prefix}getdp _tag_
${gaya2} ${prefix}getname _reply target_
${gaya2} ${prefix}tagall
${gaya2} ${prefix}hidetag _text_
${gaya2} ${prefix}contact _916x|Name_
${gaya2} ${prefix}contag _@tag|Name_
${gaya2} ${prefix}sticktag _Reply Sticker_
${gaya2} ${prefix}totag _Reply Image_
${gaya2} ${prefix}creategroup _Name|tag_
${gaya2} ${prefix}promoteall
${gaya2} ${prefix}demoteall
${gaya2} ${prefix}listadmin
${gaya2} ${prefix}leave
${gaya2} ${prefix}grupowner
${gaya2} ${prefix}groupinfo
${gaya2} ${prefix}grouplink
${gaya2} ${prefix}onlinelist
${gaya2} ${prefix}resetgrouplink`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'downloadmenu':

menu =
`*「 DOWNLOAD MENU 」*

${gaya2} ${prefix}mediafire _Link_
${gaya2} ${prefix}soundcloud _Link_
${gaya2} ${prefix}telegramsticker _Link_
${gaya2} ${prefix}spotify _Link_
${gaya2} ${prefix}tiktok _Link_
${gaya2} ${prefix}tiktoknowm _Link_
${gaya2} ${prefix}tiktokwm _Link_
${gaya2} ${prefix}tiktokmp3 _Link_
${gaya2} ${prefix}ytmp3 _Link_
${gaya2} ${prefix}ytmp4 _Link_
${gaya2} ${prefix}play _song name_
${gaya2} ${prefix}instagram _video link_
${gaya2} ${prefix}herodetail _hero name_
${gaya2} ${prefix}herolist
${gaya2} ${prefix}lyrics _song name_`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'makermenu':

menu =
`*「 MAKER MENU 」*

${gaya2} ${prefix}freefire _text_
${gaya2} ${prefix}silverplaybutton _text_
${gaya2} ${prefix}goldplaybutton _text_
${gaya2} ${prefix}blackpink _text_
${gaya2} ${prefix}halloween _text_
${gaya2} ${prefix}halloween2 _text_
${gaya2} ${prefix}3dgradient _text_
${gaya2} ${prefix}naturalleaves _text_
${gaya2} ${prefix}dropwater _text_
${gaya2} ${prefix}blood _text_
${gaya2} ${prefix}blood2 _text_
${gaya2} ${prefix}snow _text_
${gaya2} ${prefix}cloud _text_
${gaya2} ${prefix}neondevil _text_
${gaya2} ${prefix}neon _text_
${gaya2} ${prefix}glowingneonlight _text_
${gaya2} ${prefix}neonlight _text_
${gaya2} ${prefix}neonlight2 _text_
${gaya2} ${prefix}neonlight3 _text_
${gaya2} ${prefix}greenneon _text_
${gaya2} ${prefix}toxic _text_
${gaya2} ${prefix}matrix _text_
${gaya2} ${prefix}thunder _text_
${gaya2} ${prefix}thunder2 _text_
${gaya2} ${prefix}bokeh _text_
${gaya2} ${prefix}carbontext _text_
${gaya2} ${prefix}christmas _text_
${gaya2} ${prefix}breakwall _text_
${gaya2} ${prefix}roadwarning _text_
${gaya2} ${prefix}engraved3d _text_
${gaya2} ${prefix}embossed _text_
${gaya2} ${prefix}3dstone _text_
${gaya2} ${prefix}futuristic _text_
${gaya2} ${prefix}sketch _text_
${gaya2} ${prefix}bluecircuit _text_
${gaya2} ${prefix}space _text_
${gaya2} ${prefix}magmahot _text_
${gaya2} ${prefix}artpapercut _text_
${gaya2} ${prefix}3dluxurygold _text_
${gaya2} ${prefix}robotr2d2 _text_
${gaya2} ${prefix}harrypotter _text_
${gaya2} ${prefix}glitch3 _text_
${gaya2} ${prefix}greenhorror _text_
${gaya2} ${prefix}horrorgift _text_
${gaya2} ${prefix}erodedmetal _text_
${gaya2} ${prefix}3dglowingmetal _text_
${gaya2} ${prefix}blackmetal _text_
${gaya2} ${prefix}bluemetal _text_
${gaya2} ${prefix}shynimetal _text_
${gaya2} ${prefix}rustymetal _text_
${gaya2} ${prefix}metalpurple _text_
${gaya2} ${prefix}metalrainbow _text_
${gaya2} ${prefix}metaldarkgold _text_
${gaya2} ${prefix}colorfullluxurymetal _text_
${gaya2} ${prefix}glossybluemetal _text_
${gaya2} ${prefix}3dglossymetal _text_
${gaya2} ${prefix}3ddeepseametal _text_
${gaya2} ${prefix}leddisplayscreen _text_
${gaya2} ${prefix}metallic _text_
${gaya2} ${prefix}glossymetallic _text_
${gaya2} ${prefix}christmastree _text_
${gaya2} ${prefix}sparklesmerrychristmas _text_
${gaya2} ${prefix}countryflag3d _text_
${gaya2} ${prefix}americanflag3d _text_
${gaya2} ${prefix}3dscfi _text_
${gaya2} ${prefix}3drainbow _text_
${gaya2} ${prefix}3dwaterpipe _text_
${gaya2} ${prefix}3dchrome _text_
${gaya2} ${prefix}bluegem _text_
${gaya2} ${prefix}purplegem _text_
${gaya2} ${prefix}pinkcandy _text_
${gaya2} ${prefix}transformer _text_
${gaya2} ${prefix}berry _text_
${gaya2} ${prefix}brokenglass _text_
${gaya2} ${prefix}3drealistic _text_
${gaya2} ${prefix}3dunderwater _text_
${gaya2} ${prefix}writeinsandsummerbeach _text_
${gaya2} ${prefix}sandwriting _text_
${gaya2} ${prefix}foilballoon _text_
${gaya2} ${prefix}3dglue _text_
${gaya2} ${prefix}1917 _text_
${gaya2} ${prefix}minion _text_
${gaya2} ${prefix}doubleexposure _text_
${gaya2} ${prefix}holographic3d _text_
${gaya2} ${prefix}deluxegold _text_
${gaya2} ${prefix}deluxesilver _text_
${gaya2} ${prefix}glossycarbon _text_
${gaya2} ${prefix}fabric _text_
${gaya2} ${prefix}xmascards3d _text_
${gaya2} ${prefix}wicker _text_
${gaya2} ${prefix}fireworksparkle _text_
${gaya2} ${prefix}skeleton _text_
${gaya2} ${prefix}ultragloss _text_
${gaya2} ${prefix}denim _text_
${gaya2} ${prefix}decorategreen _text_
${gaya2} ${prefix}peridot _text_
${gaya2} ${prefix}rock _text_
${gaya2} ${prefix}lava _text_
${gaya2} ${prefix}rainbowequalizer _text_
${gaya2} ${prefix}purpleglass _text_
${gaya2} ${prefix}decorativeglass _text_
${gaya2} ${prefix}chocolatecake _text_
${gaya2} ${prefix}strawberry _text_
${gaya2} ${prefix}koifish _text_
${gaya2} ${prefix}bread _text_
${gaya2} ${prefix}3dbox _text_
${gaya2} ${prefix}freeadvancedglow _text_
${gaya2} ${prefix}honey _text_
${gaya2} ${prefix}marble _text_
${gaya2} ${prefix}marbleslabs _text_
${gaya2} ${prefix}icecold _text_
${gaya2} ${prefix}fruitjuice _text_
${gaya2} ${prefix}abstragold _text_
${gaya2} ${prefix}biscuit _text_
${gaya2} ${prefix}bagel _text_
${gaya2} ${prefix}wood _text_
${gaya2} ${prefix}hexagolden _text_
${gaya2} ${prefix}wonderfulgraffitiart _text_
${gaya2} ${prefix}8bit _Text1&Text2_
${gaya2} ${prefix}pornhub _Text1&Text2_
${gaya2} ${prefix}glitch _Text1&Text2_
${gaya2} ${prefix}glitch2 _Text1&Text2_
${gaya2} ${prefix}layered _Text1&Text2_
${gaya2} ${prefix}3dsteel _Text1&Text2_
${gaya2} ${prefix}realistic _Text1&Text2_
${gaya2} ${prefix}lionlogo _Text1&Text2_
${gaya2} ${prefix}ninjalogo _Text1&Text2_
${gaya2} ${prefix}wolf _Text1&Text2_
${gaya2} ${prefix}wolf2 _Text1&Text2_
${gaya2} ${prefix}halloween3 _Text1&Text2_
${gaya2} ${prefix}marvel _Text1&Text2_
${gaya2} ${prefix}marvel2 _Text1&Text2_
${gaya2} ${prefix}cinematichorror _Text1&Text2_
${gaya2} ${prefix}avengers _Text1&Text2_
${gaya2} ${prefix}graffiti3 _Text1&Text2_
${gaya2} ${prefix}captainamerica _Text1&Text2_
${gaya2} ${prefix}girlneko _Text1&Text2_
${gaya2} ${prefix}sadboy _Text1&Text2_
${gaya2} ${prefix}makerkaneki _Text1&Text2_
${gaya2} ${prefix}rem _Text1&Text2_
${gaya2} ${prefix}lolimaker _Text1&Text2_
${gaya2} ${prefix}gura _Text1&Text2_`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'gamemenu':

menu =
`*「 GAME 」*

${gaya2} ${prefix}truth
${gaya2} ${prefix}dare`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'randomimage':

menu =
`*「 RANDOM IMAGE MENU 」*

${gaya2} ${prefix}ppcouple
${gaya2} ${prefix}meme
${gaya2} ${prefix}memeindo
${gaya2} ${prefix}quotesimage
${gaya2} ${prefix}katakataimage
${gaya2} ${prefix}renungan
${gaya2} ${prefix}darkjokesindo
${gaya2} ${prefix}bts
${gaya2} ${prefix}exo
${gaya2} ${prefix}aesthetic
${gaya2} ${prefix}dog
${gaya2} ${prefix}cat
${gaya2} ${prefix}panda
${gaya2} ${prefix}panda1
${gaya2} ${prefix}fox
${gaya2} ${prefix}koala
${gaya2} ${prefix}bird
${gaya2} ${prefix}doraemon
${gaya2} ${prefix}pokemon
${gaya2} ${prefix}wallpaperhacker
${gaya2} ${prefix}wallpaperhacker2
${gaya2} ${prefix}wallpaperharley
${gaya2} ${prefix}wallpaperjoker
${gaya2} ${prefix}wallpaperpubg
${gaya2} ${prefix}wallpaperhp
${gaya2} ${prefix}wallpaperhp2
${gaya2} ${prefix}wallpaperkpop
${gaya2} ${prefix}wallpaperblackpink
${gaya2} ${prefix}wallpapergame`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'randomvideo':

menu =
`*「 RANDOM VIDEO MENU 」*

${gaya2} ${prefix}beatvn
${gaya2} ${prefix}jedagjedugff
${gaya2} ${prefix}jedagjedugml
${gaya2} ${prefix}jedagjedugpubg
${gaya2} ${prefix}storywa
${gaya2} ${prefix}storygalau
${gaya2} ${prefix}storytruk
${gaya2} ${prefix}storybus
${gaya2} ${prefix}storyanime`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\nAKU ADALAH GAY' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'asupanmenu':

menu =
`*「 AESTHETIC GIRL MENU」*

${gaya2} ${prefix}asupan
${gaya2} ${prefix}asupanloli
${gaya2} ${prefix}hijaber
${gaya2} ${prefix}bocil
${gaya2} ${prefix}rikagusriani
${gaya2} ${prefix}santuy
${gaya2} ${prefix}ukhty
${gaya2} ${prefix}gheayubi
${gaya2} ${prefix}nantalia`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'cecanmenu':

menu =
`*「 RANDOM GIRL MENU  」*

${gaya2} ${prefix}cogan
${gaya2} ${prefix}cecan
${gaya2} ${prefix}cecan2
${gaya2} ${prefix}cogan2
${gaya2} ${prefix}jeni
${gaya2} ${prefix}jiso
${gaya2} ${prefix}justina
${gaya2} ${prefix}lisa
${gaya2} ${prefix}rose
${gaya2} ${prefix}ryujin
${gaya2} ${prefix}china
${gaya2} ${prefix}vietnam
${gaya2} ${prefix}thainlad
${gaya2} ${prefix}indonesia
${gaya2} ${prefix}korea
${gaya2} ${prefix}japan
${gaya2} ${prefix}malaysia`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'animemenu':

menu =
`*「 ANIME 」*

${gaya2} ${prefix}elf
${gaya2} ${prefix}shinobu
${gaya2} ${prefix}megumin
${gaya2} ${prefix}wallnime
${gaya2} ${prefix}sao
${gaya2} ${prefix}hsdxd
${gaya2} ${prefix}lovelive
${gaya2} ${prefix}naruto
${gaya2} ${prefix}loli
${gaya2} ${prefix}waifu
${gaya2} ${prefix}neko
${gaya2} ${prefix}husbu
${gaya2} ${prefix}milf
${gaya2} ${prefix}cosplay
${gaya2} ${prefix}nekonime
${gaya2} ${prefix}shota
${gaya2} ${prefix}wallml
${gaya2} ${prefix}akira
${gaya2} ${prefix}akiyama
${gaya2} ${prefix}ana
${gaya2} ${prefix}asuna
${gaya2} ${prefix}ayuzawa
${gaya2} ${prefix}boruto
${gaya2} ${prefix}chiho
${gaya2} ${prefix}chitoge
${gaya2} ${prefix}deidara
${gaya2} ${prefix}eba
${gaya2} ${prefix}elaina
${gaya2} ${prefix}emilia
${gaya2} ${prefix}erza
${gaya2} ${prefix}gremory
${gaya2} ${prefix}hestia
${gaya2} ${prefix}hinata
${gaya2} ${prefix}isuzu
${gaya2} ${prefix}itachi
${gaya2} ${prefix}itori
${gaya2} ${prefix}kagura
${gaya2} ${prefix}kakasih
${gaya2} ${prefix}kaori
${gaya2} ${prefix}kaneki
${gaya2} ${prefix}kotori
${gaya2} ${prefix}kurumi
${gaya2} ${prefix}madara
${gaya2} ${prefix}mikasa
${gaya2} ${prefix}miku
${gaya2} ${prefix}minato
${gaya2} ${prefix}nezuko
${gaya2} ${prefix}rize
${gaya2} ${prefix}sagiri
${gaya2} ${prefix}sakura
${gaya2} ${prefix}sasuke
${gaya2} ${prefix}shina
${gaya2} ${prefix}shinka
${gaya2} ${prefix}shinomiya
${gaya2} ${prefix}shizuka
${gaya2} ${prefix}tejina
${gaya2} ${prefix}toukachan
${gaya2} ${prefix}tsunade
${gaya2} ${prefix}yotsuba
${gaya2} ${prefix}yuki
${gaya2} ${prefix}yumeko
${gaya2} ${prefix}fanart
${gaya2} ${prefix}nino`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'nsfwmenu':

menu =
`*「 NSFW/HENTAI MENU 」*

${gaya2} ${prefix}hentaisearch _code_
${gaya2} ${prefix}animefeets
${gaya2} ${prefix}chiisaihentai
${gaya2} ${prefix}yaoi
${gaya2} ${prefix}bj
${gaya2} ${prefix}feet
${gaya2} ${prefix}lewd
${gaya2} ${prefix}feed
${gaya2} ${prefix}trap
${gaya2} ${prefix}eron
${gaya2} ${prefix}solo
${gaya2} ${prefix}gasm
${gaya2} ${prefix}poke
${gaya2} ${prefix}anal
${gaya2} ${prefix}holo
${gaya2} ${prefix}tits
${gaya2} ${prefix}kuni
${gaya2} ${prefix}kiss
${gaya2} ${prefix}erok
${gaya2} ${prefix}smug
${gaya2} ${prefix}baka
${gaya2} ${prefix}solog
${gaya2} ${prefix}feetg
${gaya2} ${prefix}lewdk
${gaya2} ${prefix}cuddle
${gaya2} ${prefix}cum_jpg
${gaya2} ${prefix}erofeet
${gaya2} ${prefix}holoero
${gaya2} ${prefix}classic
${gaya2} ${prefix}erokemo
${gaya2} ${prefix}fox_girl
${gaya2} ${prefix}futanari
${gaya2} ${prefix}lewdkemo
${gaya2} ${prefix}wallpaper
${gaya2} ${prefix}pussy_jpg
${gaya2} ${prefix}kemonomimi
${gaya2} ${prefix}nsfw_avatar
${gaya2} ${prefix}wallpaper
${gaya2} ${prefix}eroyuri
${gaya2} ${prefix}ecchi
${gaya2} ${prefix}hololewd
${gaya2} ${prefix}sideoppai
${gaya2} ${prefix}animefeets
${gaya2} ${prefix}animebooty
${gaya2} ${prefix}animearmpits
${gaya2} ${prefix}hentaifemdom
${gaya2} ${prefix}lewdanimegirls
${gaya2} ${prefix}biganimetiddies
${gaya2} ${prefix}ass
${gaya2} ${prefix}ahegao
${gaya2} ${prefix}bdsm
${gaya2} ${prefix}blowjob
${gaya2} ${prefix}cuckold
${gaya2} ${prefix}cum
${gaya2} ${prefix}ero
${gaya2} ${prefix}femdom
${gaya2} ${prefix}foot
${gaya2} ${prefix}gangbang
${gaya2} ${prefix}glasses
${gaya2} ${prefix}hentai
${gaya2} ${prefix}jahy
${gaya2} ${prefix}masturbation
${gaya2} ${prefix}neko
${gaya2} ${prefix}orgy
${gaya2} ${prefix}panties
${gaya2} ${prefix}pussy
${gaya2} ${prefix}thighs
${gaya2} ${prefix}yuri
${gaya2} ${prefix}bokep`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'stickermenu':

menu =
`*「 STICKER MENU 」*

${gaya2} ${prefix}stickerwm _Author|Package_
${gaya2} ${prefix}take _Author|Package_
${gaya2} ${prefix}sticker _Reply_
${gaya2} ${prefix}attp _Text_
${gaya2} ${prefix}ttp _Text_
${gaya2} ${prefix}ttp2 _Text_
${gaya2} ${prefix}ttp3 _Text_
${gaya2} ${prefix}tt4 _Text_
${gaya2} ${prefix}semoji _Emoji_
${gaya2} ${prefix}stcmemepic _Up Txt|Down Txt_
${gaya2} ${prefix}stcmeme _Up Txt|Down Txt_
${gaya2} ${prefix}memegenerator _Text_`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'funmenu':

menu =
`*「 FUN MENU 」*

${gaya2} ${prefix}ship _tag/tag_
${gaya2} ${prefix}rate _reply_
${gaya2} ${prefix}can _question_
${gaya2} ${prefix}is _question_
${gaya2} ${prefix}when _question_
${gaya2} ${prefix}stupid
${gaya2} ${prefix}foolish
${gaya2} ${prefix}smart
${gaya2} ${prefix}handsome
${gaya2} ${prefix}beautiful
${gaya2} ${prefix}gay
${gaya2} ${prefix}lesbi
${gaya2} ${prefix}bastard
${gaya2} ${prefix}stubble
${gaya2} ${prefix}dog
${gaya2} ${prefix}fuck
${gaya2} ${prefix}ugly
${gaya2} ${prefix}ape
${gaya2} ${prefix}cute
${gaya2} ${prefix}noob
${gaya2} ${prefix}kind
${gaya2} ${prefix}great
${gaya2} ${prefix}horny
${gaya2} ${prefix}wibu
${gaya2} ${prefix}asshole
${gaya2} ${prefix}couple
${gaya2} ${prefix}handsomecheck [tag]
${gaya2} ${prefix}beautycheck [tag]
${gaya2} ${prefix}gaycheck [tag]
${gaya2} ${prefix}lesbiancheck [tag]
${gaya2} ${prefix}charactercheck [tag]`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'soundmenu':

menu =
`*「 SOUND MENU 」*
${gaya2} ${prefix}sound1
${gaya2} ${prefix}sound2
${gaya2} ${prefix}sound3
${gaya2} ${prefix}sound4
${gaya2} ${prefix}sound5
${gaya2} ${prefix}sound6
${gaya2} ${prefix}sound7
${gaya2} ${prefix}sound8
${gaya2} ${prefix}sound9
${gaya2} ${prefix}sound10
${gaya2} ${prefix}sound11
${gaya2} ${prefix}sound12
${gaya2} ${prefix}sound13
${gaya2} ${prefix}sound14
${gaya2} ${prefix}sound15
${gaya2} ${prefix}sound16
${gaya2} ${prefix}sound17
${gaya2} ${prefix}sound18
${gaya2} ${prefix}sound19
${gaya2} ${prefix}sound20
${gaya2} ${prefix}sound21
${gaya2} ${prefix}sound22
${gaya2} ${prefix}sound23
${gaya2} ${prefix}sound24
${gaya2} ${prefix}sound25
${gaya2} ${prefix}sound26
${gaya2} ${prefix}sound27
${gaya2} ${prefix}sound28
${gaya2} ${prefix}sound29
${gaya2} ${prefix}sound30
${gaya2} ${prefix}sound31
${gaya2} ${prefix}sound32
${gaya2} ${prefix}sound33
${gaya2} ${prefix}sound34
${gaya2} ${prefix}sound35
${gaya2} ${prefix}sound36
${gaya2} ${prefix}sound37
${gaya2} ${prefix}sound38
${gaya2} ${prefix}sound39
${gaya2} ${prefix}sound40
${gaya2} ${prefix}sound41
${gaya2} ${prefix}sound42
${gaya2} ${prefix}sound43
${gaya2} ${prefix}sound44
${gaya2} ${prefix}sound45
${gaya2} ${prefix}sound46
${gaya2} ${prefix}sound47
${gaya2} ${prefix}sound48
${gaya2} ${prefix}sound49
${gaya2} ${prefix}sound50
${gaya2} ${prefix}sound51
${gaya2} ${prefix}sound52
${gaya2} ${prefix}sound53
${gaya2} ${prefix}sound54
${gaya2} ${prefix}sound55
${gaya2} ${prefix}sound56
${gaya2} ${prefix}sound57
${gaya2} ${prefix}sound58
${gaya2} ${prefix}sound59
${gaya2} ${prefix}sound60
${gaya2} ${prefix}sound61
${gaya2} ${prefix}sound62
${gaya2} ${prefix}sound63
${gaya2} ${prefix}sound64
${gaya2} ${prefix}sound65
${gaya2} ${prefix}sound66
${gaya2} ${prefix}sound67
${gaya2} ${prefix}sound68
${gaya2} ${prefix}sound69
${gaya2} ${prefix}sound70
${gaya2} ${prefix}sound71
${gaya2} ${prefix}sound72
${gaya2} ${prefix}sound73
${gaya2} ${prefix}sound74`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'ocrmenu':

menu =
`*「 OCR MENU 」*

${gaya2} ${prefix}ninjaname _Name_
${gaya2} ${prefix}stylishcoolname
${gaya2} ${prefix}ssweb _URL_`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'convertmenu':

menu =
`*「 CONVERT MENU 」*

${gaya2} ${prefix}cutesound _reply audio/vn_
${gaya2} ${prefix}blub _reply audio/vn_
${gaya2} ${prefix}ghost _reply audio/vn_
${gaya2} ${prefix}squirrel _reply audio/vn_
${gaya2} ${prefix}slow _reply audio/vn_
${gaya2} ${prefix}fast _reply audio/vn_
${gaya2} ${prefix}vibra _reply audio/vn_
${gaya2} ${prefix}nightcore _reply audio/vn_
${gaya2} ${prefix}bass _reply audio/vn_
${gaya2} ${prefix}robot _reply audio/vn_
${gaya2} ${prefix}reverse _reply audio/vn_
${gaya2} ${prefix}fat _reply audio/vn_
${gaya2} ${prefix}vnsec _reply audio with number_
${gaya2} ${prefix}vidsec _reply video with number_
${gaya2} ${prefix}tomp3 _reply video_
${gaya2} ${prefix}toimg _reply sticker_
${gaya2} ${prefix}tourl _reply image/vid_
${gaya2} ${prefix}tts _code text_`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'levelingmenu':

menu =
`*「 LEVELING MENU 」*

${gaya2} ${prefix}profile
${gaya2} ${prefix}level`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'searchmenu':

menu =
`*「 SEARCH MENU 」*

${gaya2} ${prefix}playstore _Query_
${gaya2} ${prefix}ytsearch _Query_
${gaya2} ${prefix}pinterest _Query_
${gaya2} ${prefix}googleimg _Query_
${gaya2} ${prefix}google _Query_`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'apkmenu':

menu =
`*「 APK MENU 」*

${gaya2} ${prefix}apkdone _Apk Name_
${gaya2} ${prefix}apkgoogle _Apk Name_
${gaya2} ${prefix}hostapk _Apk Name_
${gaya2} ${prefix}revdl _Apk Name_
${gaya2} ${prefix}toraccino _Apk Name_
${gaya2} ${prefix}uapkpro _Apk Name_
${gaya2} ${prefix}apkmody _Apk Name_
${gaya2} ${prefix}apkshub _Apk Name_`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'othermenu':

menu =
`*「 OTHER MENU 」*

${gaya2} ${prefix}runtime
${gaya2} ${prefix}speed
${gaya2} ${prefix}rentbot
${gaya2} ${prefix}payment
${gaya2} ${prefix}owner
${gaya2} ${prefix}developer
${gaya2} ${prefix}script
${gaya2} ${prefix}delete _Reply to bot messages_`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'ownermenu':

menu =
`*「 OWNER MENU 」*

${gaya2} ${prefix}spam _text|amount_
${gaya2} ${prefix}tospam _reply with amount_
${gaya2} ${prefix}bc _text_
${gaya2} ${prefix}bc2 _text_
${gaya2} ${prefix}bcgc _text_
${gaya2} ${prefix}setbotname _text_
${gaya2} ${prefix}setbotbio _text_
${gaya2} ${prefix}setbotpp _Reply Image_
${gaya2} ${prefix}autoread _On / Off_
${gaya2} ${prefix}autotype _On / Off_
${gaya2} ${prefix}autorecord _On / Off_
${gaya2} ${prefix}addvn _Reply audio with caption_
${gaya2} ${prefix}delvn _vn name_
${gaya2} ${prefix}listvn
${gaya2} ${prefix}addsticker _Reply sticker with caption_
${gaya2} ${prefix}delsticker _sticker name_
${gaya2} ${prefix}liststicker
${gaya2} ${prefix}addimage _Reply image with caption_
${gaya2} ${prefix}delimage_image name_
${gaya2} ${prefix}listimage
${gaya2} ${prefix}clearall
${gaya2} ${prefix}leaveall
${gaya2} ${prefix}public
${gaya2} ${prefix}self`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'abcde':

reply('damn gay, really gay, wow, no one wants to play with him bro, its unclean because he is gay 🗿')
break

//══════════[ RENT DLL ]══════════//

case 'rentbot':
menu =
`*${ucapanWaktu} @${senderr.split('@')[0]}*

\`\`\`OPEN FOR RENT :\`\`\`
➪ *1 Week :* _100INR_
➪ *1 Month :* _200INR_
➪ *Permanent :* _550INR_

\`\`\`OPEN FOR STUDENTS :\`\`\`
➪ *Ordinary student :* _500INR_
➪ *Premium student :* _1000INR_

\`\`\`OPEN FOR SC :\`\`\`
➪ *Wanna buy this script? :* _Price: ₹250 (India)_

For those who want to buy script or interested in any of the above
Can request, if interested please contact the developer`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal} - ${time}_*`, buttons: [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'PAYMENT 💸' }, type: 1 },{ buttonId: type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr]}}}, 'buttonsMessage')
break
case 'bayar':
case 'payment':

gambar = fs.readFileSync('./media/doged.jpg')
menunya = `*「 PAYMENT 」*

• Note: Talk to the owner before payment
• FamPay : _Please scan the qr above_`
but = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU 🗃️' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 }
]
sendButImage(from, menunya, `*_${tanggal} - ${time}_*`, gambar, but)
break

//══════════[ DOWNLOAD FEATURES ]══════════//
/*Help case ?
give credit too / add in at tqtq
--> Xeon*/

      case 'mediafire':
        if (args.length < 1) return reply('Where is the link? ')
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
        reply(mess.wait)
        teks = args.join(' ')
        res = await mediafireDl(teks)
        result = `Media Fire Downloader

Name : ${res[0].nama}
Size : ${res[0].size}
Link : ${res[0].link}

Please Choose Whether Document, Audio or Video Below`
        sendButMessage(from, result, `*Doge Bot*`, [
          {
            buttonId: `${prefix}fire ${teks}`,
            buttonText: {
              displayText: `🖨️ Document/Other`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}fire1 ${teks}`,
            buttonText: {
              displayText: `🖨️ Video`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}fire2 ${teks}`,
            buttonText: {
              displayText: `🖨️ Audio`,
            },
            type: 1,
          },
        ]);
        break;
              case 'fire':
        if (args.length < 1) return reply('Where is the link? ')
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
        teks = args.join(' ')
        res = await mediafireDl(teks)
        result = `In process...`
        reply(result)
        sendFileFromUrl(res[0].link, document, { mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
        break
              case 'fire1':
        if (args.length < 1) return reply('Where is the link? ')
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
        teks = args.join(' ')
        res = await mediafireDl(teks)
        result = `In process...`
        reply(result)
        sendFileFromUrl(res[0].link, video, { quoted: mek, mimetype: 'video/mp4', filename: res[0].output })
        break
              case 'fire2':
        if (args.length < 1) return reply('Where is the link? ')
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
        teks = args.join(' ')
        res = await mediafireDl(teks)
        result = `Media Fire Downloader
  Wait for the Process of Sending Media......`
        reply(result)
        sendFileFromUrl(res[0].link, audio, { quoted: mek, mimetype: 'video/mp3', filename: res[0].output })
        break
case 'spotify':{
    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
    url = args[0]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Artists : ${get_result.artists}\n`
    ini_txt += `Duration : ${get_result.duration}\n`
    ini_txt += `Popularity : ${get_result.popularity}\n`
    ini_txt += `Preview : ${get_result.preview_url}\n`
    thumbnail = await getBuffer(get_result.thumbnail)
    await DogeXeonOP.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
    get_audio = await getBuffer(get_result.link)
    await DogeXeonOP.sendMessage(from, get_audio, audio, { mimetype: 'audio/mpeg', filename: `${get_result.title}.mp3`, quoted: mek})
    }
    break
   case 'soundcloud':
                if(!q)return reply(`Example : ${prefix + command} sound cloud link`)
                if (!q.includes('m.soundcloud.com')) return reply('Thats not a SoundCloud link')
                await reply(lang.wait())
				zee.SoundCloud(`${q}`).then(async (data) => {
                    let txt = `*----「 SOUNDCLOUD DOWNLOAD 」----*\n\n`
                    txt += `*• Title :* ${data.title}\n`
                    txt += `*• Duration :* ${data.duration}\n`
					txt += `*• Quality :* ${data.medias[1].quality}\n`
					txt += `*• Ext :* ${data.medias[0].extension}\n`
                    txt += `*• Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*• Url  :* ${data.url}\n\n`
                    txt += `*Please wait a moment, in the process of delivery...*`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    DogeXeonOP.sendMessage(from , await getBuffer(data.medias[0].url), audio,{ quoted: mek, mimetype: 'audio/mp4' })
				})
			break
	case 'telesticker': case 'telegramsticker': case 'tstiker': {
			if (!q) return reply(`Example: ${prefix + command} *https://t.me/addstickers/geestickerpack*`)
			if (!q.includes('t.me')) return reply('This is not a telegram sticker link')
			var telestc = await zee.Telesticker(`${q}`)
			await reply(mess.wait)
			for (let i = 0; i < (telestc.length < 10 ? telestc.length : 10); i++) {
			DogeXeonOP.sendMessage(from, await getBuffer(telestc[i].url), sticker, {mimetype:'image/webp',quoted: mek})
			}
		}
		break
case 'tiktoknowm':
   case 'tiktok':
			if (!q) return reply('The link?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
			reply(mess.wait)
			let nowem = q
			zee.Ttdownloader(nowem)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					noweem = await getBuffer(nowm)
					DogeXeonOP.sendMessage(from,noweem , MessageType.video, {mimetype: 'video/mp4',quoted: mek})
					})
				}).catch((err) => reply(`Invalid link`))
			
             break 
case 'tiktokwm':
			if (!q) return reply('The link?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
			reply(mess.wait)
			let wem = args.join(' ')
			zee.Ttdownloader(wem)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					weem = await getBuffer(wm)
					DogeXeonOP.sendMessage(from,weem , MessageType.video, {mimetype: 'video/mp4',quoted: mek})
					})
				}).catch((err) => reply(`Invalid link`))
			
             break 
case 'tiktokmusic':
 case 'tiktokaudio':  
 case 'tiktokmp3':
			if (!q) return reply('The link?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid Link')
			reply(mess.wait)
			let audi = q
			zee.Ttdownloader(audi)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)
				.then(async (a) => {
					audnha = await getBuffer(audio)
					DogeXeonOP.sendMessage(from,audnha , MessageType.document, {mimetype: 'audio/mp4',filename: `Tiktok Music.mp3`,quoted: mek})
					})
				}).catch((err) => reply(`Invalid link`))
			
             break
case 'ig':
case 'igdl':
case 'instagram':
if (!c) return reply('The link?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
case 'lyrics':
reply(mess.wait)
if (args.length < 1) return reply('What is the name of the song?')
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'herolist':
await herolist().then((ress) => {
let listt = `*List of heroes for features ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Name* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Hero Features* : ${res.hero_feature}
*Special* : ${res.speciality}
*Recommended Lane* : ${res.laning_recommendation}
*Price* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Release* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
              case 'play':
if (args.length ==0)return reply('Whats the title of the song?')
bo = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://apikey-bear3.herokuapp.com/api/yt/playmp3?query=${bo}&apikey=KingOfBear`)
thmb = await getBuffer(ini.thumb)
ply1 =`*Title:* ${ini.title}\n*Channel:* ${ini.channel}\n*View:* ${ini.views}\n*Publish Time:* ${ini.published}`
ply2 =`Please Select Media Below`
but = [
{ buttonId: `${prefix}mp3 ${args.join(" ")}`, buttonText: { displayText: 'MUSIC 🎵' }, type: 1 },
{ buttonId: `${prefix}mp4 ${args.join(" ")}`, buttonText: { displayText: 'VIDEO 📽️' }, type: 1 }
]
sendButLocation(from, ply1, ply2, thmb, but)
break
case 'mp4':
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://apikey-bear3.herokuapp.com/api/yt/playmp4?query=${bo}&apikey=${KingOfBearKey}`)
mp4 = await getBuffer(ini.url)
DogeXeonOP.sendMessage(from, mp4, video, { quoted: mek, caption: `Here is your video✯` })
break
case 'mp3':
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://apikey-bear3.herokuapp.com/api/yt/playmp3?query=${bo}&apikey=${KingOfBearKey}`)
mp3 = await getBuffer(ini.url)
DogeXeonOP.sendMessage(from, mp3, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek})
break
case 'ytmp3':

if (args.length < 1) return reply("Where is the link?")
url = args.join(' ')
anump3 = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp3?url=${url}&apikey=${dhakey}`)
ytmp3 = await getBuffer(anump3.result.url)
reply(`_Audio is being processed, please wait a while longer_`)
DogeXeonOP.sendMessage(from, ytmp3, audio, {mimetype:"audio/mp4", quoted:mek})
break
case 'ytmp4':

if (args.length < 1) return reply("Where is the link?")
url = args.join(' ')
anump4 = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp4?url=${url}&apikey=${dhakey}`)
ytmp4 = await getBuffer(anump4.result.url)
reply(`_The video is being processed, please wait a few more moments_`)
DogeXeonOP.sendMessage(from, ytmp4, video, {caption:`Done✓`, thumbnail:Buffer.alloc(0), quoted:mek})
break

//══════════[ INTAKE FEATURES ]══════════//
/*Help case ?
just give credit / add in tqtq
--> Xeon*/

case 'asupan':
case 'asupanloli':
case 'bocil':
case 'rikagusriani':
case 'santuy':
case 'ukhty':
case 'gheayubi':
case 'nantalia':

reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/${command}?apikey=${dhakey}`)
Teks = `Click Next To Go To Next ${command} `
sendButVideo(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
},
]);
break
case 'hijaber':

reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/hijaber?apikey=${dhakey}`)
Teks = `Click Next To Go to Next ${command}`
sendButImage(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
},
]);
break

//══════════[ RANDOM GIRL FEATURES ]══════════//
/*Help case ?
just give credit / add in tqtq
--> Xeon*/

case 'cecan':
case 'cogan':
case 'cecan2':
case 'cogan2':
case 'jeni':
case 'jiso':
case 'justina':
case 'lisa':
case 'rose':
case 'ryujin':
case 'indonesia':
case 'vietnam':
case 'thailand':
case 'korea':
case 'china':
case 'japan':
case 'malaysia':

reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/cecan/${command}?apikey=${dhakey}`)
Teks = `Click Next To Go To Next ${command}`
sendButImage(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
},
]);
break

//══════════[ RANDOM TEXT ]══════════//
/*Help case ?
just give credit / add in tqtq
--> Xeon*/

case 'pantun2':
case 'puisi':
case 'faktaunik':
case 'katabijak':
case 'katailham':
case 'katasindiran':
case 'katabucin':
case 'katabucin2':
case 'kataml':
case 'katagalau':
case 'katagombal':
case 'quotesislami':
case 'quotesanime':
case 'quotesdilan':
case 'quotesff':
case 'quotespubg':
case 'quoteshacker':

oke = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/${command}?apikey=${dhakey}`)
dhani = (oke.result)
sendButMessage(from, dhani, `Click To Go To Next ${command}`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
},]);
break;
case 'quotes':

anuquotes = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/quotes?apikey=${dhakey}`)
dhani = (anuquotes.result.quotes)
sendButMessage(from, dhani, `Click To Go To The Next Quotes`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
},]);
break;
case 'quoteskanye':

anuq = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/quotes/kanye?apikey=${dhakey}`)
dhani = (anuq.result.text_id)
sendButMessage(from, dhani, `Click To Go To The Next Quotes`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
},]);
break;

//══════════[ RANDOM IMAGE FEATURES ]══════════//
/*Help case ?
just give credit / add in tqtq
--> Xeon*/

                case 'bts':
                case 'exo':
                reply(mess.wait)
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${Lolhumanbykur}`).then((gambar) => {
                        DogeXeonOP.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
                   case 'fox':  
                   anufox= await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anufox.link)
                   DogeXeonOP.sendMessage(from, anu1, image, {caption: `Here you go!`, quoted: mek})
                   break
                   case 'dog':  
                   anudog = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anudog.link)
                   DogeXeonOP.sendMessage(from, anu1, image, {caption: `Here you go!`, quoted: mek})
                   break
                   case 'cat':
                   anucat = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anucat.link)
                   DogeXeonOP.sendMessage(from, anu1, image, {caption: `Here you go!`, quoted: mek})
                   break
                   case 'panda':  
                   anupanda = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anupanda.link)
                   DogeXeonOP.sendMessage(from, anu1, image, {caption: `Here you go!`, quoted: mek})
                   break
                   case 'panda1':  
                   anupandao = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anupandao.link)
                   DogeXeonOP.sendMessage(from, anu1, image, {caption: `Here you go!`, quoted: mek})
                   break
                   case 'bird': 
                   anubird = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anubird.link)
                   DogeXeonOP.sendMessage(from, anu1, image, {caption: `Here you go!`, quoted: mek})
                   break
                   case 'koala':  
                   anukoala = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anukoala.link)
                   DogeXeonOP.sendMessage(from, anu1, image, {caption: `Here you go!`, quoted: mek})
                   break
case 'ppcp':
case 'ppcouple':

anucpp = await fetchJson(`https://apidhani.herokuapp.com/api/randomimage/ppcouple?apikey=${dhakey}`)
cowo = await getBuffer(anucpp.result.male)
Cowok = `_This is the boy_`
sendButImage(from, Cowok, `*_${tanggal} - ${time}_*`, cowo, [                      
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
},
]);
cewe = await getBuffer(anu.result.female)
Cewek = `_This is the girl_`
sendButImage(from, Cewek, `*_${tanggal} - ${time}_*`, cewe, [                      
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
},
]);
break
case 'meme':

reply(mess.wait)
anumeme = await fetchJson(`https://apidhani.herokuapp.com/api/randomimage/meme?apikey=${dhakey}`)
buffer = await getBuffer(anumeme.result.url)
Teks = `Click Next To Go The Next ${command}`
sendButImage(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
},
]);
break
case 'wallpaperhacker':
case 'wallpaperhacker2':
case 'wallpaperharley':
case 'wallpaperjoker':
case 'wallpaperpubg':
case 'wallpaperhp':
case 'wallpaperhp2':
case 'wallpaperkpop':
case 'wallpaperblackpink':
case 'wallpapergame':

reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=${dhakey}`)
Teks = `Click Next To Go To The Next ${command}`
sendButImage(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
},
]);
break
case 'quotesimage':
case 'katakataimage':
case 'renungan':
case 'memeindo':
case 'aesthetic':
case 'yulibocil':
case 'doraemon':
case 'pokemon':
case 'pentol':
case 'tatasurya':
case 'kartun':
case 'anjing':
case 'kucing':
case 'satanic':
case 'boneka':
case 'mobil':
case 'motor':

reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=${dhakey}`)
Teks = `Click Next To Go To Next ${command}`
sendButImage(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
},
]);
break
case 'darkjoker':
case 'darkjokes':
case 'darkjokesindo':
case 'darkjokers':

reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/darkjokes?apikey=${dhakey}`)
Teks = `Click Next To Go To Next ${command}`
sendButImage(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
},
]);
break

//----> ANIME FEATURES <----//


                case 'elf':
                case 'loli2':
                case 'neko2':
                case 'waifu2':
                case 'shota2':
                case 'husbu2':
                case 'sagiri2':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                                case 'art':
                reply(mess.wait)
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${Lolhumanbykur}`).then((gambar) => {
                        DogeXeonOP.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
case 'waifu':
case 'neko':
case 'naruto':
case 'loli':
case 'husbu':
case 'milf':
case 'cosplay':
case 'nekonime':
case 'shota':
case 'wallml':
case 'akira':
case 'akiyama':
case 'ana':
case 'asuna':
case 'ayuzawa':
case 'boruto':
case 'chiho':
case 'chitoge':
case 'deidara':
case 'eba':
case 'elaina':
case 'emilia':
case 'erza':
case 'gremory':
case 'hestia':
case 'hinata':
case 'isuzu':
case 'itachi':
case 'itori':
case 'kagura':
case 'kakasih':
case 'kaori':
case 'kaneki':
case 'kotori':
case 'kurumi':
case 'madara':
case 'mikasa':
case 'miku':
case 'minato':
case 'nezuko':
case 'rize':
case 'sagiri':
case 'sakura':
case 'sasuke':
case 'shina':
case 'shinka':
case 'shinomiya':
case 'shizuka':
case 'tejina':
case 'toukachan':
case 'tsunade':
case 'yotsuba':
case 'yuki':
case 'yumeko':
case 'fanart':
case 'nino':

buffer = await getBuffer(`https://apidhani.herokuapp.com/api/anime/${command}?apikey=${dhakey}`)
Teks = `Click Next To Go To Next ${command}`
sendButImage(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
},
]);
break
             case 'sao':
                reply(mess.wait)
				DogeXeonOP.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/swortartonline.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
                 DogeXeonOP.sendMessage(from, swordartonline, image, {quoted: mek, caption: 'swort art online\nbot'})
				 break
				case 'hsdxd':
				reply(mess.wait)
				 DogeXeonOP.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                 DogeXeonOP.sendMessage(from, highschooldxd, image, {quoted: mek, caption: 'Here u go!'})
				break
				 case 'lovelive':
				reply(mess.wait)
				 DogeXeonOP.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
                 DogeXeonOP.sendMessage(from, lovelive, image, {quoted: mek, caption: 'Here u go!'})
				break
				
//----> NSFW FEATURES <----//

case 'hentaisearch': case 'nhentai':{
	if (!isGroup) return reply('Bullshit! there is a child po*n\nIts better to just be in the group so that everyone will be sinned 😂')
if (!isNsfw) return reply(mess.only.nsfw)
    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
    henid = args[0]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolkey}`)
    get_result = get_result.result
    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
    ini_txt += `Title Native : ${get_result.title_native}\n`
    ini_txt += `Read Online : ${get_result.read}\n`
    get_info = get_result.info
    ini_txt += `Parodies : ${get_info.parodies}\n`
    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
    ini_txt += `Artist : ${get_info.artists}\n`
    ini_txt += `Group : ${get_info.groups}\n`
    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
    ini_txt += `Categories : ${get_info.categories}\n`
    ini_txt += `Pages : ${get_info.pages}\n`
    ini_txt += `Uploaded : ${get_info.uploaded}\n`
    reply(ini_txt)}
    break
case 'ass':
case 'ahegao':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'hentai':
case 'jahy':
case 'masturbation':
case 'neko':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':

if (!isGroup) return reply('Bullshit! there is a child po*n\nIts better to just be in the group so that everyone will be sinned 😂')
if (!isNsfw) return reply(mess.only.nsfw)
anu23 = await fetchJson(`https://apidhani.herokuapp.com/api/nsfw/${command}?apikey=${dhakey}`)
buffer = await getBuffer(anu23.result)
Teks = `Click Next To Go To Next ${command}`
sendButImage(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
},
]);
break
					case 'bokep':
					if (!isGroup) return reply('Bullshit! there is a child po*n\nIts better to just be in the group so that everyone will be sinned 😂')
if (!isNsfw) return reply(mess.only.nsfw)
reply(mess.wait)
get_result = await getBuffer(`${porn1}/api/bokep?apikey=RakuKeyTod`)
pll = `Here u go my friend! dont forget to masterbate, okay?😂`
sendButVideo(from, pll, `*Doge Bot*`, get_result, [      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
},
])            
break
                case 'chiisaihentai':
                case 'yaoi':
                case 'ecchi':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                if (!isGroup) return reply('Bullshit! there is a child po*n\nIts better to just be in the group so that everyone will be sinned 😂')
if (!isNsfw) return reply(mess.only.nsfw)
                reply(mess.wait)
                    await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${Lolhuman}`).then((gambar) => {
                       DogeXeonOP.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
                case 'bj':
                case 'feet':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'cuddle':
                case 'eroyuri':
                case 'cum_jpg':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                if (!isGroup) return reply('Bullshit! there is a child po*n\nIts better to just be in the group so that everyone will be sinned 😂')
if (!isNsfw) return reply(mess.only.nsfw)
                reply(mess.wait)
                    getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${Lolhumanbykur}`).then((gambar) => {
                        DogeXeonOP.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break

//══════════[ RANDOM VIDEO ]══════════//

case 'beatvn':
case 'jedagjedugff':
case 'jedagjedugml':
case 'jedagjedugpubg':
case 'storyanime':
case 'storywa':
case 'storygalau':
case 'storytruk':
case 'storybus':

reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomvideo/${command}?apikey=${dhakey}`)
Teks = `Click Next To Go To Next ${command}`
sendButVideo(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
},
]);
break

//══════════[ MAKER FEATURES ]══════════//
/*Help case ?
just give credit / add in tqtq
--> Xeon*/

//----> 1 TEXT <----//

                case 'goldplaybutton':          
                case 'silverplaybutton':          
                case 'freefire':          
                    if (args.length == 0) return reply(`Example: ${prefix + command} Xeon`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                        DogeXeonOP.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Here you go!`, quoted : mek}) 
                    })
                    break
case 'blackpink':
case 'halloween':
case 'halloween2':
case '3dgradient':
case 'naturalleaves':
case 'dropwater':
case 'blood':
case 'blood2':
case 'snow':
case 'cloud':
case 'neondevil':
case 'neon':
case 'glowingneonlight':
case 'neonlight':
case 'neonlight2':
case 'neonlight3':
case 'greenneon':
case 'toxic':
case 'matrix':
case 'thunder':
case 'thunder2':
case 'bokeh':
case 'carbontext':
case 'christmas':
case 'breakwall':
case 'roadwarning':
case 'engraved3d':
case 'embossed':
case '3dstone':
case 'futuristic':
case 'sketch':
case 'bluecircuit':
case 'space':
case 'magmahot':
case 'artpapercut':
case '3dluxurygold':
case 'robotr2d2':
case 'harrypotter':
case 'glitch3':
case 'greenhorror':
case 'horrorgift':
case 'hotmetal':
case 'erodedmetal':
case '3dglowingmetal':
case 'blackmetal':
case 'bluemetal':
case 'shynimetal':
case 'rustymetal':
case 'metalpurple':
case 'metalrainbow':
case 'metaldarkgold':
case 'colorfullluxurymetal':
case 'glossybluemetal':
case '3dglossymetal':
case 'metallic':
case 'glossymetallic':
case 'christmastree':
case 'sparklesmerrychristmas':
case 'countryflag3d':
case 'americanflag3d':
case '3dscfi':
case '3drainbow':
case '3dwaterpipe':
case '3dchrome':
case 'bluegem':
case 'purplegem':
case 'pinkcandy':
case 'transformer':
case 'berry':
case 'brokenglass':
case '3drealistic':
case '3dunderwater':
case 'writeinsandsummerbeach':
case 'sandwriting':
case 'foilballoon':
case '3dglue':
case '1917':
case 'minion':
case 'doubleexposure':
case 'holographic3d':
case 'deluxegold':
case 'deluxesilver':
case 'glossycarbon':
case 'fabric':
case 'xmascards3d':
case 'wicker':
case 'fireworksparkle':
case 'skeleton':
case 'ultragloss':
case 'denim':
case 'decorategreen':
case 'peridot':
case 'rock':
case 'lava':
case 'rainbowequalizer':
case 'purpleglass':
case 'decorativeglass':
case 'chocolatecake':
case 'strawberry':
case 'koifish':
case 'bread':
case '3dbox':
case 'freeadvancedglow':
case 'honey':
case 'marble':
case 'marbleslabs':
case 'icecold':
case 'fruitjuice':
case 'abstragold':
case 'biscuit':
case 'bagel':
case 'wood':
case 'hexagolden':
case '3ddeepseametal':
case 'leddisplayscreen':
case 'wonderfulgraffitiart':

if (args.length < 1) return reply(`*Where is the text?*\n_Example : ${prefix + command} your name_`) 
teks = args.join(" ")
reply(mess.wait)
anuapidhani = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/${command}?apikey=${dhakey}&text=${teks}`)
oke = await getBuffer(anuapidhani.result)
DogeXeonOP.sendMessage(from, oke, image, {quoted: mek, caption: 'Here u go!😛'})
break
case 'hartatahta': 

if (args.length < 1) return reply(`*Wher is the text?*\n_Example : ${prefix + command} your name_`) 
teks = args.join(" ")
reply(mess.wait)
harta = await getBuffer(`https://apidhani.herokuapp.com/api/maker/harta-tahta?apikey=${dhakey}&text=${teks}`)
DogeXeonOP.sendMessage(from, harta, image, {quoted: mek, caption: 'Here u go!😛'})
break

//----> 2 TEXT <----//

case '8bit':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anubit = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/8bit?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anubit.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'pornhub':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anuphub = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/pornhub?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anuphub.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'glitch':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anuglitch = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anuglitch.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'glitch2':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anug2 = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anug2.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'layered':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anulayered = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/layered?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anulayered.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case '3dsteel':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu3dstl = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/3dsteel?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu3dstl.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'realistic':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anurlstc = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/realistic?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anurlstc.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'lionlogo':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anullo = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/lionlogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anullo.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'ninjalogo':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anunlogo = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/ninjalogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anunlogo.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'wolf':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anuwolf = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anuwolf.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'wolf2':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(6)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anuw2 = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anuw2.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'halloween3':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anuh3 = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/halloween3?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anuh3.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'marvel':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anumvl = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anumvl.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'marvel2':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anumvl2 = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anumvl2.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'cinematichorror':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(16)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anucmcr = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/cinematichorror?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anucmcr.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'avengers':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anuavgr = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/avengerslogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anuavgr.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'graffiti3':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anugrf3 = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/coolwallgraffiti?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anugrf3.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'captainamerica':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(15)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anucaptainca = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/captainamerica?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anucaptainca.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'girlneko':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/girlneko?apikey=${dhakey}&text=${F1}&text2=${F2}`)
DogeXeonOP.sendMessage(from, girlneko, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'sadboy':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko2 = await getBuffer(`https://apidhani.herokuapp.com/api/maker/sadboy?apikey=${dhakey}&text=${F1}&text2=${F2}`)
DogeXeonOP.sendMessage(from, girlneko2, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'makerkaneki':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(12)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko8383 = await getBuffer(`https://apidhani.herokuapp.com/api/maker/kaneki?apikey=${dhakey}&text=${F1}&text2=${F2}`)
DogeXeonOP.sendMessage(from, girlneko8383, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'rem':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(4)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko11111 = await getBuffer(`https://apidhani.herokuapp.com/api/maker/rem?apikey=${dhakey}&text=${F1}&text2=${F2}`)
DogeXeonOP.sendMessage(from, girlneko11111, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'lolimaker':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlnekojkjk = await getBuffer(`https://apidhani.herokuapp.com/api/maker/lolimaker?apikey=${dhakey}&text=${F1}&text2=${F2}`)
DogeXeonOP.sendMessage(from, girlnekojkjk, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'gura':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlnekoooo = await getBuffer(`https://apidhani.herokuapp.com/api/maker/gura?apikey=${dhakey}&text=${F1}&text2=${F2}`)
DogeXeonOP.sendMessage(from, girlnekoooo, image, {caption: `Here u go!😛`, quoted: mek})
break
                         case 'wolf3':
                         
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon*`)
                   F = body.slice(6)
                   reply(mess.wait)
                   anuwolf3 = await getBuffer(`${ApiZeks}/api/wolflogo?apikey=${zeksApikey}&text1=zeeoneofc&text2=${F}`)
                   DogeXeonOP.sendMessage(from, anuwolf3, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it?`, quoted: mek})
                   break
                          case 't3d':
                          
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon*`)
                   F = body.slice(5)
                   reply(mess.wait)
                   anut3d = await getBuffer(`${ApiZeks}/api/text3dbox?apikey=${zeksApikey}&text=${F}`)
                   DogeXeonOP.sendMessage(from, anut3d, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'logoa':
       
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon&lol*`)
                   var F = body.slice(7)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anulogoa = await getBuffer(`${ApiZeks}/api/logoaveng?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   DogeXeonOP.sendMessage(from, anulogoa, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'phlogo':  
       
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon&lol*`)
                   var F = body.slice(9)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anuphlogo = await getBuffer(`${ApiZeks}/api/phlogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   DogeXeonOP.sendMessage(from, anuphlogo, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'marvel3':
       
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon&lol*`)
                   var F = body.slice(8)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anumrvl3 = await getBuffer(`${ApiZeks}/api/marvellogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   DogeXeonOP.sendMessage(from, anumrvl3, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'leavest':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon*`)
                   F = body.slice(9)
                   reply(mess.wait)
                   anulvst = await getBuffer(`${ApiZeks}/api/leavest?text=${F}&apikey=${zeksApikey}`)
                   DogeXeonOP.sendMessage(from, anulvst, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break                   
       case 'notewrite':
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anunw = await getBuffer(`${ApiZeks}/api/nulis?text=${F}&apikey=${zeksApikey}`)
                   DogeXeonOP.sendMessage(from, anunw, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'neon2':
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anunion2 = await getBuffer(`${ApiZeks}/api/bneon?apikey=${zeksApikey}&text=${F}`)
                   DogeXeonOP.sendMessage(from, anunion2, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break 

//══════════[ OTHER FEATURES ]══════════//
case 'owner':

members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Owner Of Doge Bot ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
DogeXeonOP.sendMessage(from, {displayName: `The owner ${botname}`, vcard: vcard2}, contact, 
{ quoted: fgi, 
})
reply(`__`)
break
scpic = fs.readFileSync('./media/scpic.jpg')
sendButImage(from, scsell, `*_${tanggal} - ${time}_*`, scpic, but)
break
case 'runtime':

textImg(`Bot Active Since ${runtime(process.uptime())}`)
break
case 'ping':
case 'speed':

timestampe = speed();
latensie = speed() - timestampe
textImg(`「 *𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧* 」\nRespond in ${latensie.toFixed(4)} Sec 💬`)
break
case 'd':
case 'del':
case 'delete':

DogeXeonOP.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break

 //══════════[ SEARCH FEATURES ]══════════//

    case 'playstore':
            if(!c) return reply('what are you looking for?')
            let play = await hx.playstore(`${c}`)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY lSTORE* 」*\n
- *Name* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
case 'ytsearch':
          if (args.length < 1) return reply('Yang mau di cari apaan?')
          teks = args.join(' ')
          reply(mess.wait)
          res = await yts(`${teks}`)
          kant = ``
          for (let i of res.videos) {
          kant += (`❒「  YtSearch  」\n• Title : ${i.title}\n• Views : ${i.views}\n• Uploaded On : ${i.ago}\n• Duration : ${i.timestamp}\n• Channel : ${i.author.name}\n• Video Link : ${i.url}\n\n\n`)
          }
          var akhir = kant.trim()
          sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: akhir})
          break
case 'pinterest':
if (!c) return reply('what are you looking for?')
pinterest(`${c}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${c}`)
})
break
case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('What are you looking for??')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Title* : ${i.title}
*Link* : ${i.link}
*Description* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'gimage':
case 'googleimage':
case 'googleimg':
if (args.length < 1) return reply('What do you want to search?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Api Error Or Result Not Found_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Search Result :* ${teks}`})
}
}
break

 //══════════[ APK FEATURES ]══════════//

case 'uapkpro':
        if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/uapkpro?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Search for applications on the steamkpro.org platform and provide the result data 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Tag : ${x.apps_tag}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      case 'toraccino':
        if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/toraccino?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Searching for Applications through the website and sending a data which is the result of the search! 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Tag : ${x.apps_tag}\n`
          ini_txt += `Upload : ${x.apps_upload}\n`
          ini_txt += `Author : ${x.apps_author}\n`
          ini_txt += `Desc : ${x.apps_desc}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      case 'revdl':
        if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/revdl?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Searching for Applications through the website and sending a data which is the result of the search! 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      case 'hostapk':
        if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/hostapk?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Search for applications on the hostapk.com website and provide data from the search results 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Released : ${x.apps_released}\n`
          ini_txt += `Author : ${x.apps_author}\n`
          ini_txt += `Desc : ${x.apps_desc}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      case 'apkshub':
        if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkshub?apps=${query}&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Search for applications on the apkshub.com platform and provide the result data 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Views :${x.apps_views}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
case 'apkmody':
        if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkmody?apps=${query}&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Search for applications on the apkmody.io platform and provide the result data 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Desc :${x.apps_desc}\n`
          ini_txt += `Link : ${x.apps_linkdl}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
case 'apkgoogle':
        if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkgoogle?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Search for applications on the apkgoogle.org platform and provide the result data 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Tag : ${x.apps_tag}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
              case 'apkdone':
        if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkdone?apps=${query}&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Search for applications on the apkdone.com website and provide data from the search results 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Version : ${x.apps_version}\n`
          ini_txt += `Rate : ${x.apps_rate}\n`
          ini_txt += `Tag : ${x.apps_tag}\n\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break

 //══════════[ SOUND FEATURES ]══════════//
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
ini_buffer = await getBuffer(`https://github.com/saipulanuar/Api-Github/raw/main/sound/${command}.mp3`)
await DogeXeonOP.sendMessage(from, ini_buffer, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek})
break
       
//══════════[ OCR FEATURES ]══════════//

case 'ninjaname':  
if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} Naruto*`)  
F = body.slice(11)
anunname = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
anu1 = `✯ *NAME* : ${anunname.your_name}\n`
anu1 += `✯ *NINJA* : ${anu.result}\n`
reply(anu1)
break
case 'stylishcoolname':
anuscn = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=${Leyscoders}`)
reply(`*✯HERE IS YOUR RANDOM STYLISH NAME✯*\n\n${anuscn.result}`)
break
case 'ssweb':
case 'ss':
if (args.length < 1) return reply('Where is the url?')
teks = q
anussweb = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
buff = await getBuffer(anussweb.screenshot)
DogeXeonOP.sendMessage(from, buff, image, {quoted: mek, caption : teks})
break

//══════════[ CONVERT FEATURES ]══════════//

      case 'squirrel':
        encmedia012 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await DogeXeonOP.downloadAndSaveMediaMessage(encmedia012)
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) return reply('Error!')
          hah = fs.readFileSync(ran)
          DogeXeonOP.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
          fs.unlinkSync(ran)
        })
        break
      case 'blub':
        if (!isQuotedAudio) return reply('Reply audio ')
        encmediakekek = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await DogeXeonOP.downloadAndSaveMediaMessage(encmediakekek)
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) return reply('Error!')
          hah = fs.readFileSync(ran)
          DogeXeonOP.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
          fs.unlinkSync(ran)
        })
        break
      case 'ghost':
        encmedia777 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await DogeXeonOP.downloadAndSaveMediaMessage(encmedia777)
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) return reply('Error!')
          hah = fs.readFileSync(ran)
          DogeXeonOP.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
          fs.unlinkSync(ran)
        })
        break
      case 'cutesound':
        encmedia100 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await DogeXeonOP.downloadAndSaveMediaMessage(encmedia100)
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) return reply('Error!')
          riu = fs.readFileSync(ran)
          DogeXeonOP.sendMessage(from, riu, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
          fs.unlinkSync(ran)
        })
        break
case 'slowmo': case 'slow':{
								try {
										encmedia22 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await DogeXeonOP.downloadAndSaveMediaMessage(encmedia22)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											uhh = fs.readFileSync(ran)
											DogeXeonOP.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply('Error!')
												}  
											}
									break
case 'fast':{
									try {
										encmedia11 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await DogeXeonOP.downloadAndSaveMediaMessage(encmedia11)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											DogeXeonOP.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply('Error!')
												}  
										}
									break
case 'vibra': case 'vibrato':{
									encmedia33 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await DogeXeonOP.downloadAndSaveMediaMessage(encmedia33)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										DogeXeonOP.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
										fs.unlinkSync(ran)
										})
										}
									break
    case 'nightcore':            
      	  if (!isQuotedAudio) return reply('Reply Audionya')
		  night = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		  core = await DogeXeonOP.downloadAndSaveMediaMessage(night)
		  ran = getRandom('.mp3')
		  reply(mess.wait)
		  exec(`ffmpeg -i ${core} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
		  fs.unlinkSync(core)
		  if (err) return reply('Error!')
		  hah = fs.readFileSync(ran)
		  DogeXeonOP.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek, ptt: true})
		  fs.unlinkSync(ran)
		  })
	      break
 case 'vnsec':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await DogeXeonOP.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						DogeXeonOP.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
				case 'vidsec':
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await DogeXeonOP.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						DogeXeonOP.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
						fs.unlinkSync(median)
				break
 case 'robot':
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await DogeXeonOP.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
DogeXeonOP.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'fat':
					encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await DogeXeonOP.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					DogeXeonOP.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
					break
case 'reverse':
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await DogeXeonOP.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
DogeXeonOP.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
	})
break
case 'bass':                 
					encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await DogeXeonOP.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						DogeXeonOP.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
				break
 case 'tomp3':
					DogeXeonOP.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply to the video')
					reply(mess.wait)
					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await DogeXeonOP.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						DogeXeonOP.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
 case 'toimg':

if (!isQuotedSticker) return reply('reply sticker')
encmediatoimg = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await DogeXeonOP.downloadAndSaveMediaMessage(encmediatoimg)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Failed, when converting sticker to image')
buffer = fs.readFileSync(ran)
DogeXeonOP.sendMessage(from, buffer, image, {quoted: mek, caption: 'Here'})
fs.unlinkSync(ran)
})
break
case 'tts':
					  try{
        if (args.length > 1) {
        const gtts = require('./lib/gtts')(args[0])
        if (args.length < 2) return DogeXeonOP.sendMessage(from, 'Where is the text bro??', text, {quoted: mek})
        ngab = budy.slice(7)
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        ngab.length > 600
        ? reply('The text is too much bro, max words 600')
        : gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply('Failed bro:(')
                DogeXeonOP.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	} else if ( args.length === 1 ){
		ngab = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
		const gtts = require('./lib/gtts')(args[0])
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply(mess.error.api)
                DogeXeonOP.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	}
} catch (e){
	reply(mess.error.api)
}
break
                    case 'tourl':
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await DogeXeonOP.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('send/reply pictures/videos')
            }
            break

//══════════[ LEVELING FEATURES ]══════════//

	case 'level':
					if (!isGroup) return reply(mess.group)
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
					const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
					resul = `◪ *ʟᴇᴠᴇʟ*\n  ├─ ► 𝗡𝗮𝗺𝗲 : ${pushname}\n  ├─ ► 𝗥𝗮𝗻𝗸 : ${role}\n  ├─ ► 𝗫𝗣 : ${userXp}/${requiredXp}\n  └─ ► 𝗟𝗲𝘃𝗲𝗹 : ${userLevel}\n`
					DogeXeonOP.sendMessage(from, resul, text, { quoted: mek})
					.catch(async (err) => {
					console.error(err)
					await reply(`Error!\n${err}`)
					})
					break
					case 'profile':
					if (!isGroup) return reply(mess.group)
				    let anuprofileoke = await DogeXeonOP.groupMetadata(from)
                    const thu = await DogeXeonOP.getStatus(anuprofileoke.participants[0], MessageType.text)
    				DogeXeonOP.updatePresence(from, Presence.composing)
    				try {
					ppimg = await DogeXeonOP.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					profile = `╭─「 *💖ʏᴏᴜʀ ᴘʀᴏꜰɪʟᴇ💖* 」\n│• 𝗡𝗮𝗺𝗲 : ${pushname}\n│• 𝗡𝘂𝗺𝗯𝗲𝗿 : ${sender.split("@")[0]}\n│• 𝗕𝗶𝗼 : ${bio_user}\n│• 𝗫𝗣 : ${getLevelingXp(sender)}\n│• 𝗟𝗲𝘃𝗲𝗹 : ${getLevelingLevel(sender)}\n│• 𝗥𝗮𝗻𝗸 : ${role}\n│• 𝗣𝗠 : wa.me/${sender.split("@")[0]}\n╰──────────────────`
					buffer = await getBuffer(ppimg)
					DogeXeonOP.sendMessage(from, buffer, image, {quoted: mek, caption: profile})
					break

//══════════[ STICKER FEATURES ]══════════//

case 'ttp4':  
				case 'ttp2':  
				case 'ttp3':  
				case 'ttp':  
				case 'attp':
            
					if (!c) return reply(`Where is the text bro?\nExample :\n${prefix}attp bot`)
					atetepe12 = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${encodeURIComponent(c)}`)
			
