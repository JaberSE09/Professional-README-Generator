const fs = require('fs');

// writing files
function writeFile(data) {
  fs.writeFile('./dist/README.md', data, (err) => {
      if (err)
          throw err;
      console.log('Success! Information transferred to the README!')
  });
};

module.exports= writeFile