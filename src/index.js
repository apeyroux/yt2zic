#!/usr/bin/env node

import * as ytdl from 'youtube-dl'
import fs from 'fs'

var yargs = require('yargs')
    .usage('Usage: $0 --source [string] --to [string] --format ["best", "aac", "vorbis", "mp3", "m4a", "opus", "wav"]')
    .demandOption(['s', 't'])
    .default('f', 'best')
    .alias('s', 'source')
    .alias('t', 'to')
    .alias('f', 'format')
    .describe('s', 'Source file (array of url)')
    .describe('t', 'Destination path')
    .describe('f', 'Export format (mp3, m4a ...)')
    .help('h'),
    argv = yargs.argv;

fs.readFile(argv.source, "utf8", function(error, urls) {
    let zics
    
    try {
	zics = JSON.parse(urls)
    } catch (e) {
	console.error("Parsing error:", e)
	process.exit(1)
    }
    
    Array.isArray(zics) ? (zics.map((zic) => {
	ytdl.exec(zic, [ '-x'
			 , '--audio-format'
			 , argv.format
			 , argv.format !== ('mp3'||'best')
			 ? '--get-thumbnail'
			 : '--embed-thumbnail'], { cwd: argv.to }, function(err, output) {
			     if (err) {
				 console.log(err)
				 process.exit(1)
			     }
			     console.log(output.join('\n'))
			 })
    })) : ((err) => {
	console.log(err)
	process.exit(1)
    })('Not js array in your sources !')
})
