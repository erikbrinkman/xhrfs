'use strict';
const path = require('path');
// FIXME Handle errors

function process(response, options) {
  if (options === 'utf8' || (options || {}).encoding === 'utf8') {
    return response;
  } else {
    return Buffer.from(response);
  }
}

function readFile(filePath, options, callback) {
  if (callback === undefined) {
    callback = options;
    options = undefined;
  }
  const req = new XMLHttpRequest();
  req.open('GET', 'file://' + path.resolve(filePath));
  req.addEventListener('readystatechange', () =>     {
    if(req.readyState === 4) {
      if(req.status === 200 || req.status === 0) {
        callback(null, process(req.responseText, options));
      } else {
        callback(req.statusText, null);
      }
    }
  });
  req.send();
}

function readFileSync(filePath, options) {
  const req = new XMLHttpRequest();
  req.open('GET', 'file://' + path.resolve(filePath), false);
  req.send();
  if(req.status === 200 || req.status === 0) {
    return process(req.responseText, options);
  } else {
    throw req.statusText;
  }
}

module.exports.readFile = readFile;
module.exports.readFileSync = readFileSync;
