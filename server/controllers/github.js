const request = require('request');
const cheerio = require('cheerio');

request.defaults({ jar: true });

exports.githubRepo = function(req, res) {
   getRepoHTML(req.params.repo).then(function(html) {
      res.json({ html: html });
   }, function(error) {
      res.status(500).send({ error: error});
   });
}

function getRepoHTML(repo) {
   return new Promise(function(resolve, reject) {
      request('https://github.com/budrice/' + repo, function(error, res, html) {
         if (error) {
             console.log(error);
             reject(error);
         }
         else {
            const $ = cheerio.load(html);
            let repoHTML = $('#js-repo-pjax-container').html()
            resolve(repoHTML);
         }
     });
   });
}
