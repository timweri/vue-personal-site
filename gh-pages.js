const ghpages = require('gh-pages');

ghpages.publish('dist', {
    branch: 'master',
    repo: 'https://github.com/timweri/timweri.github.io.git',
    dotfiles: true,
});
