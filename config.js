const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Accra,Ghana."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Accra/Ghana";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "233201555801";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233201555801";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "online" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_36_05_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MixcbiAgICAgICAgODUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU4LFxuICAgICAgICA2OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYxLFxuICAgICAgICA4MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjksXG4gICAgICAgIDc0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzksXG4gICAgICAgIDcwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NixcbiAgICAgICAgOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDMxLFxuICAgICAgICAwLFxuICAgICAgICAyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3MixcbiAgICAgICAgNzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMixcbiAgICAgICAgMTYzLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDkwLFxuICAgICAgICAzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMyxcbiAgICAgICAgODksXG4gICAgICAgIDM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDgzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTQsXG4gICAgICAgIDIyLFxuICAgICAgICAyOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDcyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiekdYV3g1dnFnZXpVV0J5anhrOE1IRGVyZkZ5L0ExbzJyaVpMREZPRXhvbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRUw5Z1VLaDhSS3UyaTh6WS1JTHNIQVwiLFxuICBcInBob25lSWRcIjogXCJmZjVmYWUxZC0xY2VlLTQzMWMtYTc0Zi03ODUxY2I5Zjc4ODNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk4LFxuICAgICAgMjQxLFxuICAgICAgMjMxLFxuICAgICAgMjUyLFxuICAgICAgNjQsXG4gICAgICAxMzQsXG4gICAgICAzNCxcbiAgICAgIDE3MyxcbiAgICAgIDkwLFxuICAgICAgOTgsXG4gICAgICAwLFxuICAgICAgNDMsXG4gICAgICAyMzcsXG4gICAgICAyMTYsXG4gICAgICA1NCxcbiAgICAgIDE2MixcbiAgICAgIDU0LFxuICAgICAgNTQsXG4gICAgICAxNDEsXG4gICAgICAxNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTEsXG4gICAgICAyNDIsXG4gICAgICAxNDMsXG4gICAgICAxMDcsXG4gICAgICA5NixcbiAgICAgIDEyNCxcbiAgICAgIDU1LFxuICAgICAgMzgsXG4gICAgICAxOTcsXG4gICAgICAxNjgsXG4gICAgICA4LFxuICAgICAgMTEwLFxuICAgICAgMTQ0LFxuICAgICAgNTksXG4gICAgICAxMjUsXG4gICAgICAxNjMsXG4gICAgICA1OSxcbiAgICAgIDMyLFxuICAgICAgMjM3LFxuICAgICAgMTQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRSSDJDRkczXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyMDE1NTU4MDE6NjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0NzU2NjQ0NTM2NTU1OjY4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlL7wnZS48J2UufCdlLwg8J2VhPCdlYDwnZS+4oSN8J2Vi+KcqlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kyNW81OERFTERaMU1BR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYVRiWkxTemtueitQTFEwb0I5RzBWbVZoY3AyaFIvcnlrRmV5VkdWY3huMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlYm1TMkRMQWNEaVhOSkg1eG1lY3R5dEwwdEQzQk8rZXNhdTVUYkhIbnJCY0FVSVAzdkM4MlRSdUlKMCt4SFNscVRxYklpVkFJL1ZUS2hheXN6V0FEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxbzNFak0yMzB0N214UDhjZHo3a2k3b2F2QmZ5V2ZtbmxHUmt0S0doV3QwaWF3VUgrQ2hNQndXdHh6UHFxYUpxYUFESkFMUVhLemVuRlNqNytDU1dnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyMDE1NTU4MDE6NjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDYyMTgxNjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBMVpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUExWi5qc29uIjogIntcImtleURhdGFcIjpcInFpNUVISlpNNWs4QnpPZCswMlpyaGxZZ1pyMDJ2OVlDaDFoOVh3dEJqdnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODcwODk4ODI5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDYyMTgxNjcwNTdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "aguti-dev",
  packname: process.env.PACK_NAME || "aguti-dev",
  botname : process.env.BOT_NAME  || "aguti-dev",
  ownername:process.env.OWNER_NAME|| "aguti-dev",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
