const base = require(__dirname + '/tv.json');
const fs = require('fs');
let out = '';
base.groups.forEach(({ name, stations }) => {

    stations.forEach(station => {
        out += `#EXTINF:-1 tvg-id="${ station.epgId }" tvg-logo="${ station.image }" group-title="${ name }" tvg-name="${ station.epgId }",${ station.name }\n${ station.url }\n`;
    });
});
fs.writeFileSync('./out.m3u', out);
console.log(out);