const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

// 1. Създаваме малък уеб сървър, за да не заспива Replit
app.get('/', (req, res) => {
  res.send('Ботът е зареден и работи!');
});

app.listen(3000, () => {
  console.log('Уеб сървърът е онлайн на порт 3000');
});

// 2. Конфигурация на Minecraft бота
const botArgs = {
  host: 'primerno6pek.mcsh.io', // Сложи IP-то тук
  port: 30294,                  // Сложи порта тук
  username: 'DrujServeraBuden',
  version: '1.21.10'             // Сложи твоята версия
};

function createBot() {
  const bot = mineflayer.createBot(botArgs);

  bot.on('spawn', () => {
    console.log('Ботът влезе в сървъра!');
    setTimeout(() => {
      // Тук сложи твоята парола
      bot.chat('/login budensum1'); 
    }, 3000);
  });

  bot.on('end', () => {
    console.log('Ботът излезе. Рестартиране...');
    setTimeout(createBot, 10000);
  });

  bot.on('error', (err) => console.log('Грешка:', err));
}


createBot();
