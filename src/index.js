#!/usr/bin/env node

import * as ytdl from 'youtube-dl'
import fs from 'fs'

var argv = require('yargs')
    .usage('Usage: $0 --source [string] --to [string]')
    .demandOption(['source', 'to'])
    .argv;

fs.readFile(argv.source, "utf8", function(error, urls) {
    JSON.parse(urls).map((url) => {
	ytdl.exec(url, ['--embed-thumbnail'
			, '-x'
			, '--audio-format'
			, 'mp3'], { cwd: argv.to }, function(err, output) {
			    if (err) {
				console.log(err)
				process.exit(1)
			    }
			    console.log(output.join('\n'));
			});
    })
});
