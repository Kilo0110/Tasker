import inquirer from 'inquirer';

import path from 'path';

const answers = inquirer.prompt([
  {
    type: 'text',
    name: 'name',
    message: 'What is the your name? 🤔',
    default: path.basename(process.cwd()),
  },
  {
    type: 'list',
    name: 'type',
    message: 'What type of project? 📦',
    choices: ['node-express', 'static', 'react', 'vue', 'static-build'],
  },
]);
