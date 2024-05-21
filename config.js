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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_33_05_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzksXG4gICAgICAgIDgwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQzLFxuICAgICAgICA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMyxcbiAgICAgICAgODIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDY0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDg4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDk1LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICA3OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDM1LFxuICAgICAgICA0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTczLFxuICAgICAgICA1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDgyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNCt2MXV1bEMrWDZzbVFXcmJNbkJvaHNGZVBJY3RUdkI2Ylo5VnpsaUxocz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWjJqUmdnZWhUXzIwVzVtU3YxWW5iZ1wiLFxuICBcInBob25lSWRcIjogXCIzZWVjZDNjYS0wZjNiLTRhOTMtOGExOS03YWZmMWFmNmY3MmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgMjUxLFxuICAgICAgMjEyLFxuICAgICAgMjEwLFxuICAgICAgMzMsXG4gICAgICAxNTAsXG4gICAgICAxNzEsXG4gICAgICAxODQsXG4gICAgICAxODMsXG4gICAgICAyNSxcbiAgICAgIDUyLFxuICAgICAgMTcyLFxuICAgICAgMixcbiAgICAgIDIzMyxcbiAgICAgIDE4MixcbiAgICAgIDk4LFxuICAgICAgMTY2LFxuICAgICAgMjAwLFxuICAgICAgMTYsXG4gICAgICAxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjQsXG4gICAgICAxNTUsXG4gICAgICAxMDAsXG4gICAgICA4OSxcbiAgICAgIDExMyxcbiAgICAgIDYwLFxuICAgICAgMjIsXG4gICAgICAzMyxcbiAgICAgIDI1NSxcbiAgICAgIDI0OSxcbiAgICAgIDE0NCxcbiAgICAgIDM1LFxuICAgICAgMTA5LFxuICAgICAgNzMsXG4gICAgICA4MyxcbiAgICAgIDExOCxcbiAgICAgIDEzLFxuICAgICAgMTg5LFxuICAgICAgOTMsXG4gICAgICAxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUQTUxSkVOWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTExMzA3MjE0MDozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM0ODA5MDUwMzU5NzU6MzZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiR09EJ1MgQ1JFQVRJT04oV0laQklTWSlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOWFEvYjRHRUpyaHNySUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldIZkZ2ai9hMW9Icjh0MTBPVCsrR3p2d2xEMEFPYmt3a3c5Z0RUQTVORlk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic3VJSU14OU1Ob2NUYVd6THhoT1JGUmtPcmc2NHdDT1dtblVuNmQzSGhpRXJTZHgzUFYxUVlNTjZoRDFTVU5BaU45RXJEY1hlbTRINkRlOFBhQitCQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOVFadU5naUZiZGJJcFBPWVB2ZWQ1MzAycW41UEhSZHVxaDdxMzFsRHRrNWNIVkNOZm05ZU9qMnlXQ2M2TmpuQzd4TGNFVmYxcnNYQVJFaEJydFBSanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTExMzA3MjE0MDozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjMwMTk4MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtoUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2hQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUzZIcm1DT3F0N0ZmQmpYcUhQZ2prQUtyYmFPZSs4TGxqUHJqMitLRmpjbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzQyNjk0NDg1LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTYyNzEzMTYzODhcIn0iCn0="  // PUT your SESSION_ID 


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
