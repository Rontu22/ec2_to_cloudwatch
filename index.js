console.log("First");
import fs from "fs";

fs.writeFile("log", "Hi there", (err) => {
  if (err) throw err;
  console.log("its saved");
});

const saveLog = (logMessage) => {
  let location = "/var/log/syslog";
  fs.appendFile(`${location}`, `${logMessage}`, (err) => {
    if (err) console.log(err);
  });
};

saveLog("Hi");
