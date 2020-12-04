var express = require("express");
var app = express();
var cfenv = require("cfenv");


var redirector = require('redirect-rules');
var lefMappingPage = 'https://leadingedgeforum.com/insights/filter/wardley-mapping';


var rules = [

    {
    	from: {
    		protocol: 'http',
    		hostname: 'www.wardleymaps.com'
    	},
        to: lefMappingPage,
        status: 301
    },
    {
    	from: {
    		protocol: 'https',
    		hostname: 'www.wardleymaps.com'
    	},
        to: lefMappingPage,
        status: 301
    },


    {
    	from: {
    		protocol: 'http',
    		hostname: 'atlas.wardleymaps.com'
    	},
        to: 'https://atlas2.wardleymaps.com',
        status: 301
    },
    {
    	from: {
    		protocol: 'https',
    		hostname: 'atlas.wardleymaps.com'
    	},
        to: 'https://atlas2.wardleymaps.com',
        status: 301
    },

    {
    	from: {
    		protocol: 'http',
    		hostname: 'preview.wardleymaps.com'
    	},
        to: 'https://atlas2.wardleymaps.com',
        status: 301
    },
    {
    	from: {
    		protocol: 'https',
    		hostname: 'preview.wardleymaps.com'
    	},
        to: 'https://atlas2.wardleymaps.com',
        status: 301
    },


    {
    	from: {
    		protocol: 'http',
    		hostname: 'learn.wardleymaps.com'
    	},
        to: 'https://learn.leadingedgeforum.com/p/wardley-mapping/?product_id=277424',
        status: 301
    },
    {
    	from: {
    		protocol: 'https',
    		hostname: 'learn.wardleymaps.com'
    	},
        to: 'https://learn.leadingedgeforum.com/p/wardley-mapping/?product_id=277424',
        status: 301
    },

    {
    	from: {
    		protocol: 'https',
    		hostname : "redirector.eu-gb.mybluemix.net"
    	},
    	to: 'https://leadingedgeforum.com/advisory/wardley-mapping/'
    },
    {
    	from: {
    		protocol: 'https',
    		hostname : "redirector.eu-gb.mybluemix.net"
    	},
    	to: 'https://leadingedgeforum.com/advisory/wardley-mapping/'
    },


    {
    	from: {
    		protocol: 'http',
    		hostname : "doctrine.wardleymaps.com"
    	},
    	to: 'https://doctrine.wardleymaps.com/'
    },

    {
    	from: {
    		protocol: 'http',
    		hostname: 'wardleymaps.com'
    	},
        to: lefMappingPage,
        status: 301
    },
    {
    	from: {
    		protocol: 'https',
    		hostname : "wardleymaps.com"
    	},
    	to: lefMappingPage,
      status: 301
    },

];
app.use(redirector(rules));


var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
