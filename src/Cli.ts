import inquirer from "inquirer";

export default class Cli {
  public async init() :Promise<string> {
    const response = await inquirer.prompt({
      type: 'input',
      name: 'playerName',
      message: 'input your name',
    });
    console.log(`your name is ${response.playerName}`)
    if (response.playerName === '') {
      throw new Error('you must input name')
    }
    return String(response)
  }

  public async start() :Promise<void> {
    inquirer.prompt({
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
