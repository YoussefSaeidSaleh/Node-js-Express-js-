// ! Session 2
// #!/user/bin/env node

import { Command } from "commander";
import fs from "fs";
import inquirer from "inquirer";
const program = new Command();

const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter course title",
  },
  {
    type: "input",
    name: "price",
    message: "Please enter course price",
  },
];

const filePath = "./courses.json";

program
  .name("codeZone-courses")
  .description("CLI to make courses")
  .version("1.0.0");

program
  .command("add")
  .alias("a")
  .description("add courses")
  .action(() => {
    inquirer.prompt(questions).then((answers) => {
      console.log(answers);
      if (fs.existsSync(filePath)) {
        fs.readFile(filePath, "utf-8", (err, fileContent) => {
          if (err) {
            console.log("Error", err);
            process.exit();
          }
          console.log("fileContent =>", fileContent);
          const fileContentAsJson = JSON.parse(fileContent);
          fileContentAsJson.push(answers);
          fs.writeFile(
            filePath,
            JSON.stringify(fileContentAsJson),
            "utf-8",
            () => {
              console.log("Add Courses Done");
            },
          );
        });
      } else {
        fs.writeFile(filePath, JSON.stringify([answers]), "utf-8", () => {
          console.log("Add Courses Done");
        });
      }
    });
  });

program
  .command("list")
  .alias("l")
  .description("list courses")
  .action(() => {
    fs.readFile(filePath, "utf-8", (err, content) => {
      if (err) {
        console.log("Error: " + err);
        process.exit();
      }
      console.table(JSON.parse(content));
    });
  });

program.parse(process.argv);
