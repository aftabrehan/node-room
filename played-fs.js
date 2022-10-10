const fs = require("fs");

create a new directory
fs.mkdir("./New Folder", () => console.log("New Folder created"));

create a new file
fs.writeFile("./New Folder/file.txt", "Hi, There!!", () =>
  console.log("New File created")
);

update existing file
fs.appendFile("./New Folder/file.txt", " Hi, Updated!!", () =>
  console.log("Update Text file")
);

read file without getting buffered data
fs.readFile("./New Folder/file.txt", "utf-8", function (err, data) {
  if (err) console.log(err);
  else console.log(data);
});

rename folder to bio
fs.rename("./New Folder", "bio", () => console.log("Folder Renamed!"));

rename file to new.txt
fs.rename("./new.js", "./bio/file.js", () => console.log("File Renamed!"));

delete both file
fs.unlink("./bio/file.txt", () => console.log("File Deleted!"));

delete both folder and file
fs.rmdir("./bio", { recursive: true }, () =>
  console.log("File and Folder Deleted!")
);
