const { getConfig } = require("./lib/configdb");
const fs = require('fs');
const path = require('path');

// Chaje fichye .env si li egziste
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Fonksyon pou transfòme valè an bolean (vrai/faux)
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ID sesyon ou a (ap jere koneksyon WhatsApp)
    SESSION_ID: process.env.SESSION_ID || "",

    // Auto wè status moun yo
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",

    // Reponn otomatik sou status
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",

    // Reaji sou status ak emoji
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",

    // Mesaj pou voye lè li wè yon status
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Status ou te parèt, li te wè pa BillyBot 😎*",

    // Voye mesaj byenveni/leavet nan group
    WELCOME: process.env.WELCOME || "true",

    // Evènman admin (si yon moun monte/désann admin)
    ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",

    // Imaj pou meni entelijan an
    MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/2ozipw.jpg",

    // Prefix pou kòmand yo (eg: /menu)
    PREFIX: getConfig("PREFIX") || "/",

    // Non pwopriyetè bot la
    OWNER_NAME: getConfig("OWNER_NAME") || "BillyChedens",

    // Aktive ChatBot (ai bot)
    CHATBOT: getConfig("CHATBOT") || "on",

    // Non bot la (sa ap parèt sou meni)
    BOT_NAME: process.env.BOT_NAME || "BILLYCHED-BROWN V5",

    // Non Stickers bot ap mete
    STICKER_NAME: process.env.STICKER_NAME || "BILLYCHED STICKERS",

    // Emoji koutim pou reyaksyon
    CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "🔥,💯,🤖,❤️,👏",

    // Efase lyen otomatikman
    DELETE_LINKS: process.env.DELETE_LINKS || "true",

    // Nimewo ou kòm pwopriyetè bot la
    OWNER_NUMBER: process.env.OWNER_NUMBER || "50948464276",

    // Li mesaj otomatikman
    READ_MESSAGE: process.env.READ_MESSAGE || "true",

    // Reaji sou tout mesaj yo
    AUTO_REACT: process.env.AUTO_REACT || "true",

    // Anti move mo (aktif/dezaktif)
    ANTI_BAD: process.env.ANTI_BAD || "false",

    // Bloke lòt bot
    ANTI_BOT: process.env.ANTI_BOT || "true",

    // Mòd bot la (public, private, group, inbox)
    MODE: process.env.MODE || "public",

    // Mete deyò moun ki mete lyen
    ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",

    // Anti View Once
    ANTIVIEW_ONCE: process.env.ANTIVIEW_ONCE || "true",

    // Avètisman pou lyen
    ANTILINK_WARN: process.env.ANTILINK_WARN || "false",

    // Mete deyò moun ak lyen
    ANTILINK_KICK: process.env.ANTILINK_KICK || "false",

    // Anti link normal
    ANTILINK: process.env.ANTILINK || "false",

    // Toujou sou entènèt
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",

    // Bot la disponib pou tout moun
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",

    // Montre “ap ekri...”
    AUTO_TYPING: process.env.AUTO_TYPING || "true",

    // Make mesaj kòmand kòm li
    READ_CMD: process.env.READ_CMD || "true",

    // Dev nimewo (oumenm)
    DEV: process.env.DEV || "50948464276",

    // Anti View Once aktyèl
    ANTI_VV: process.env.ANTI_VV || "true",

    // Kote pou voye mesaj yo lè yon moun efase
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",

    // Anrejistreman otomatik
    AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
};
