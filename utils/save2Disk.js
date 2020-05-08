const fs = require('fs');

save2Disk = (jsonData) => {
  const folderName = '/PaulsEncodedmsg';

  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
  } catch (err) {
    console.error(err);
  }
  // stringify JSON Object
  let jsonContent = JSON.stringify(jsonData);
  console.log(jsonContent);

  fs.writeFile('/PaulsEncodedmsg/output.json', jsonContent, 'utf8', function (
    err
  ) {
    if (err) {
      console.log('An error occured while writing JSON Object to File.');
      return console.log(err);
    }

    console.log('JSON file has been saved.');
  });
};
module.exports = save2Disk;
