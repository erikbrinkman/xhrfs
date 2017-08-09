Xhrfs
=====

A small wrapper around readFile* but using XHR.
This has pretty limited uses as local files can only be read from another local file with appropriate security flags set (e.g. `--allow-file-access-from-files`).

Usage
-----

```
const fs = require('xhrfs');
fs.readFile('local_file', 'utf8', (err, content) => console.log(content));
console.log(fs.readFileSync('local_file', 'utf8'));
```

Installation
------------

```
npm install xhrfs --save
```
