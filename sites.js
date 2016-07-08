module.exports = {
    "https://kat.cr/usearch/album%20album%20category%3Amusic/PAGE_TO_USE": {
        pattern:{"HTML>BODY>DIV>DIV>DIV>TABLE>TBODY>TR>TD>DIV>TABLE>TBODY>TR>TD>DIV.torrentname>DIV.markeredBlock>A.cellMainLink": [
                    {
                            "scrapingMethod": "default",
                            "attribute": "innerText",
                            "as": "music[n].title",
                            "function": "return x;",
                            "offset": {
                                    "from": 0,
                                    "to": 0
                            }
                    },
                    {
                            "scrapingMethod": "default",
                            "attribute": "href",
                            "as": "music[n].url",
                            "function": "return \"https://kat.cr/torrents\" + x.replace(\".html\", \"/\");",
                            "offset": {
                                    "from": 0,
                                    "to": 0
                            }
                    }
            ]
        },
        fromZero: false
    },
    "https://ahoy.one/search/album%20album/PAGE_TO_USE/7/100/": {
        pattern: {
            "HTML>BODY>DIV>DIV>DIV>TABLE>TBODY>TR>TD>DIV.detName>A.detLink": [
                    {
                            "scrapingMethod": "default",
                            "attribute": "innerText",
                            "as": "music[n].title",
                            "function": "return x;",
                            "offset": {
                                    "from": 0,
                                    "to": 0
                            }
                    }
            ],
            "HTML>BODY>DIV>DIV>DIV>TABLE>TBODY>TR>TD>A:nth-last-child(4):nth-child(2)": [
                    {
                            "scrapingMethod": "default",
                            "attribute": "href",
                            "as": "music[n].url",
                            "function": "return x;",
                            "offset": {
                                    "from": 0,
                                    "to": 0
                            }
                    }
            ]
        },
        fromZero: true
    },
    "http://extratorrent.cc/search/?page=PAGE_TO_USE&search=album+album&s_cat=5&srt=added&pp=50&order=desc#": {
        pattern: {
            "HTML>BODY>TABLE>TBODY>TR>TD>TABLE>TBODY>TR>TD>TABLE>TBODY>TR>TD.tli>A": [
                {
                    "scrapingMethod": "default",
                    "attribute": "innerText",
                    "as": "music[n].title",
                    "function": "return x;",
                    "offset": {
                        "from": 0,
                        "to": 0
                    }
                }
            ],
            "HTML>BODY>TABLE>TBODY>TR>TD>TABLE>TBODY>TR>TD>TABLE>TBODY>TR>TD:nth-last-child(7) >A": [
                    {
                            "scrapingMethod": "default",
                            "attribute": "href",
                            "as": "music[n].url",
                            "function": "return \"http://extratorrent.cc/\" + x.substr(9);",
                            "offset": {
                                    "from": 0,
                                    "to": 0
                            }
                    }
            ]
        },
        fromZero: false
    }
}
