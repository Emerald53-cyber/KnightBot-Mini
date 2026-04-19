/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['8159471482]
    ownerName: ['Aurore'], 

    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUXZOiOBT9L3nVGvlS0aquGkRQ8BvFj96ahwAhRjHEEECc8r9vYU/39MPubO9bSKhzzz3n3PsT0JRkaIIq0P8JGCcFFKg+iooh0AeDPI4RB00QQQFBH+ROvvLvZ7pNVoXmWb6z2h9ME8PZwhKROw1L11MK//RqWLMX8GgClgcJCf8AuKtWlrueLKqWHhUidTadQG3crscxaovysEj1FUsas/l8vi1fwKNGhIQTii12RBfEYTJB1RIS/jX6q8VxkNCsOPjhNXhdZ3OPFqdxKu6xFniaqV4vg5Io4iro6mv0I79w8M3cFAwxuN8s024ilGmS4CjVtrsct7i/00d2O7SNN/oZwRRFToSoIKL6su7GorB1zGd8ToZzJrHcOoYabJyjud7ehjjZJ9Ba7zu+Oy6/RpxslOpq7zN7vUjmbb1NGoyuU6Vxu4y1jr3a0WNnDymS5VX6mfiSv2fl/H90N2doqPoxDXqy0prxzcjjbnY27LmlubFQpt6tWAT5XeM+/hr9NJye3HEJu/kK78KNZZonUjpk0rDy9XTvrulRquZ3RrrGJ/pQ5PxPLAduefSM/BTCrtvlx3vS7rLAsYPFKL7n0mJLnbJQPSJJ4xnBbPoqu8FtES7tpFWdpdZyf9ktj+Gg7QynhrSkE7JtnCaD1cuzozOqnAj05UcTcIRJJjgUJKX1nSK3mwBGxRqFHImnvCANvKm0xc7rfdkbDiY5XobSVTLs0JzKHU8aTdXwdXk/jLMlfgFNwHgaoixD0ZhkIuXVDGUZxCgD/b9+NAFFN/FmXF1OlZsgJjwTPs1ZksLo3dX3RxiGaU7FuqKhWR8QB33p9zUSglCc1TrmFPLwSApkHqHIQD+GSYY+OkQcRaAveI4+ptZMo1r47cRVlrvRBjTB5WkIiUAfKKqmy+2e1pU1Xelr37NvZQ0LGftGkQBNkDx/6+g9SZJ1TdYUSZX72vf6+vHBr4aLkIAkyergTXiCkT+15vfpOdNHI8PChokN8Luf92C8Ce8PX4mu6GTO2toWtWJlspkMjfheZPGwYWCMvANbGW7P2x1e/gEE9MGFI8xt3Y3V4e2aSZsbsYY5692dsWtYkuPN0oCh+/XgZprZK5g9WmjxpGPfVbk8bltM7fQiojLJXYwM5FRLxd9TSPBLXS1CBQnR52KEnWHDuS1GTrA2IKpeL5J9NhhuldP11R7tRi5qbBwNGcQq2V7qtbii5HuxMQNjVl5OhJJAeK1kOksvnf1G9bWwLMzyLbLPkUl+rSryDFPtVP0ZE/ScfApr//7buTfidcCkR/MTxq9d8m/zuDWUQzEvnBNEyN4Xao+cK1yO9W53XLaw44zPu4lvmLG/vYDH40cTsASKOOWXpzLHlCLQBDzN68A6NE7/tKGMszNYYaduPIGZMH4PwYZcUCbghYG+3O122j1FbXcffwN2T/7kOgcAAA==',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {private}
      antilink: true,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
