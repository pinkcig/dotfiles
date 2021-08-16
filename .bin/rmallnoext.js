#! /bin/env node

const { readdir, renameSync } = require('fs');
const path = '.';

readdir(path, (_, files) => {
    for (const file of files.filter((v) => v.startsWith('unbound-v1.1.3.1'))) {
        renameSync(`${path}/${file}`, `${path}/Pokemon Unbound.${file.split('.').pop()}`)
    }
})