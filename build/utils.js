exports.pages = function (env, folder = '') {
  //const rootPagesFolderName = 'pages';
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const fs = require('fs');
  const path = require('path');
  const viewsFolder = path.resolve(__dirname, `../src/views/${folder}`);//${rootPagesFolderName}/

  var pages = [];

  fs.readdirSync(viewsFolder).forEach(view => {
    if (view.split('.')[1] === undefined)
      return false;

    const viewName = view.split('.')[0];
    const fileName = folder === '' ? `${viewName}/index.html` : `${folder}/${viewName}/index.html`;
    const options = {
      filename: fileName,
      template: `views/${folder}/${view}`,//${rootPagesFolderName}
      inject: true
    };

    if (env === 'development') {
      options.minify = {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      };
    }

    pages.push(new HtmlWebpackPlugin(options));
  });

  return pages;
};
