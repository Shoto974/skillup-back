const pino = require("pino");
const fs = require("fs");

// On crée un stream vers logs.txt (mode append)
const logStream = fs.createWriteStream("./logs.txt", { flags: "a" });

// On exporte une instance de logger configurée
const logger = pino(logStream);

module.exports = logger;
