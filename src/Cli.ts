import inquirer from "inquirer";

export default class Cli {
  public async askPurpose() :Promise<string> {
    const response = await inquirer.prompt({
      type: 'list',
      name: 'purpose',
      message: 'Which do you want?',
      choices: ['play', 'view score']
    });
    return response.purpose
  }

  public async askPlayerName() :Promise<string> {
    const response = await inquirer.prompt({
      type: 'input',
      name: 'playerName',
      message: 'input your name',
    });
    if (response.playerName === '') {
      throw new Error('you must input name')
    }
    return response.playerName
  }

  public async askRepository() : Promise<string> {
    const response = await inquirer.prompt({
      type: 'list',
      name: 'repository',
      message: 'Which repository do you want to use',
      choices: ['file', 'db']
    });
    if (response.repository === '') {
      throw new Error('you must select repository')
    }
    return response.repository
  }

  public async start() :Promise<void> {
    await inquirer.prompt({
      type: "input",
      name: "startTime",
      message: "Press Enter to start Game. You must STOP Game after 3.34 seconds",
    });
  }

  public async end() :Promise<void> {
    await inquirer.prompt({
      type: "input",
      name: "endTime",
      message: "Press Enter to STOP Game",
    });
  }
}
