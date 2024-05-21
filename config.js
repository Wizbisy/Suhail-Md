const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="wizbisy@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://nwokowisdom439:<wizbisy>@cluster0.a2xkhuc.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349113072140";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349113072140";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_21_05_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA4OSxcbiAgICAgICAgOCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDg2LFxuICAgICAgICAxODIsXG4gICAgICAgIDMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDMzLFxuICAgICAgICA5OSxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDc3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTQsXG4gICAgICAgIDM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMCxcbiAgICAgICAgMzksXG4gICAgICAgIDYyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MixcbiAgICAgICAgMTAsXG4gICAgICAgIDQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMixcbiAgICAgICAgNDQsXG4gICAgICAgIDc0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTksXG4gICAgICAgIDY5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTcsXG4gICAgICAgIDU5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlAvNVFaenF2K2tuRGV2UnVhVXR6THRKMS9yaU1yS2d4OER3d3NSa20xcGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJNUjd6WUNUU0FlbHdjTnZYMTdfTlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2Y1ZmVhNjMtMzVkNC00YWJhLTk2YWUtNWZkZDgyNGJjNTc2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4LFxuICAgICAgMjI5LFxuICAgICAgMTQ3LFxuICAgICAgMTIsXG4gICAgICAyMzIsXG4gICAgICAxNDgsXG4gICAgICA5MSxcbiAgICAgIDgsXG4gICAgICAxMzUsXG4gICAgICAxNjksXG4gICAgICAxNDgsXG4gICAgICAxNjcsXG4gICAgICAxNixcbiAgICAgIDE1OSxcbiAgICAgIDEyNSxcbiAgICAgIDI0MixcbiAgICAgIDIwLFxuICAgICAgODMsXG4gICAgICAyMDQsXG4gICAgICAxNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MyxcbiAgICAgIDcyLFxuICAgICAgNzAsXG4gICAgICAxMDksXG4gICAgICAxNixcbiAgICAgIDM0LFxuICAgICAgMTQwLFxuICAgICAgMTE0LFxuICAgICAgMjE5LFxuICAgICAgMjI4LFxuICAgICAgNTEsXG4gICAgICAxODAsXG4gICAgICAxMDksXG4gICAgICA1LFxuICAgICAgMjMwLFxuICAgICAgMTUzLFxuICAgICAgMTQwLFxuICAgICAgMTI2LFxuICAgICAgNjQsXG4gICAgICAyMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOWFEvYjRHRUxLNm9ySUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldIZkZ2ai9hMW9Icjh0MTBPVCsrR3p2d2xEMEFPYmt3a3c5Z0RUQTVORlk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYTl1MmY1VEZXSFRGQlEvV1RBUENoeVdmczdEQVh1NmdYM25SbHNxN2g2QkUyZFhzeXJkQ1JFSTBOT1VhWjZ0YVdUUjNpRjRMMUR6d0VaaXUzbzNDQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ2dkdDc1bStGellhWnYxR1RQMmhSWi9BMUxNaEZCS2FuSHowUzZCaGRrRTRLa0xOUFdZTytFTFlFSGw5eGVueGZqY24vblNWcy9aWkNxNFdhQmJGQ3c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTEzMDcyMTQwOjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzQ4MDkwNTAzNTk3NTozNEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJHT0QnUyBDUkVBVElPTihXSVpCSVNZKVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTExMzA3MjE0MDozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjAzNDg3MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtoT1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2hPLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVGlzQTZUMy9WYnI5SXlVVzhGS3BnYTdCQlJMNGdYSkxPMm52ZE1qSHJEOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzQyNjk0NDg1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTYwMzQ4NzYwMjhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "wizbisy",
  packname: process.env.PACK_NAME || "wizbisys",
  botname : process.env.BOT_NAME  || "WIZBISY-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x wizbisy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
