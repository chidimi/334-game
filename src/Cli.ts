import inquirer from "inquirer";

export default class Cli {
  public async askPlayerName() :Promise<string> {
    const response = await inquirer.prompt({
      type: 'input',
      name: 'playerName',
      message: 'input your name',
    });
    console.log(`your name is ${response.playerName}`)
    if (response.playerName === '') {
      throw new Error('you must input name')
    }
    return response.playerName
  }

  public async askRepository() : Promise<string> {
    const response = await inquirer.prompt({
      type: 'list',
      name: 'repository',
      message: 'Which repository do you want to save',
      choices: ['file', 'db']
    });
    console.log(`your score is saved to ${response.repository}`)
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
