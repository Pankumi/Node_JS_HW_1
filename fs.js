// file "fs.js":

const fs = require('fs').promises;

const read = async (way) => {
  // console.log("way >>", way);
  try {
    const fileData = await fs.readFile(way, 'utf-8');
    // return fileData;
    return JSON.parse( fileData );
  } catch (err) {
    console.error(err);
    return null;
  }
};

const write = async (way, content) => {
  // console.log("way >>", way);
  // console.log("fs.js content >>", content);

  contentJson = JSON.stringify(content)
  try {
    const fileData = await fs.writeFile(way, contentJson, 'utf-8');
    return content;
  } catch (err) {
    console.error(err);
    return null;
  }
};

module.exports = {
    read,
    write
}
