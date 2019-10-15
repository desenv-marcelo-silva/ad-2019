module.exports = {
  mongoURI: process.env.DB_URI || "mongodb://localhost:27017/admin",
  mainURI: process.env.MAIN_URI || "http://localhost:8080",
  mailDOMAIN: process.env.MAIL_DOMAIN || process.env.DEV_MAIL_DOMAIN,
  mailApiKEY: process.env.MAIL_API_KEY || process.env.DEV_MAIL_API_KEY
};