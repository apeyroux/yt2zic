Presentation
============

Massive dwl mp3 from yt

Usage
=====

``` {.bash}
npm install -g yt2zic
mkdir mp3
yt2zic --source sample.js --to mp3
```

``` {.bash}
Usage: yt2zic --source [string] --to [string] --format ["best", "aac",
"vorbis", "mp3", "m4a", "opus", "wav"]

Options:
  -s, --source  Source file (array of url)                              [requis]
  -t, --to      Destination path                                        [requis]
  -f, --format  Export format (mp3, m4a ...)                    [défaut: "best"]
  -h            Show help                                       [booléen]
```

sample.js
=========

``` {.txt}
["https://www.youtube.com/watch?v=JVSVIU2sRVU"
 ,"https://www.youtube.com/watch?v=gn3lxvmTOEY"
 ,"https://www.youtube.com/watch?v=8JUEXCXk_nU"
 ,"https://www.youtube.com/watch?v=rqqWZUK5vHY"
 ,"https://www.youtube.com/watch?v=6XdNVz7KJpQ"
 ,"https://www.youtube.com/watch?v=qooy_7gn1fk"
 ,"https://www.youtube.com/watch?v=xeJTIRMR1Gw"
 ,"https://www.youtube.com/watch?v=JSAd3NpDi6Q"
 ,"https://www.youtube.com/watch?v=GRxofEmo3HA"
 ,"https://www.youtube.com/watch?v=GXFSK0ogeg4"
]
```
