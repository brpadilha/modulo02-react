const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"), //o arquivo de entrada da nossa aplicação
  //devemos utilizar o path para funcionar em todas os sistemas operacionais.
  // pois seria o mesmo de './src/index.js'
  output: {
    path: path.resolve(__dirname, "public"), //seria a saída do nosso projeto o bundle.js
    filename: "bundle.js",
  },
  devServer: {
    //éparecido com o nodemon, para o servidor ficar escutando as nossas mudanças
    contentBase: path.resolve(__dirname, "public"),
  },

  //regras
  module: {
    rules: [
      {
        test: /\.js$/, //nossa string deve terminar com .js
        exclude: /node_modules/, //excluir a pasta node_modules
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/, //excluir a pasta node_modules
        use: [{ loader: "style-loader" }, { loader: "css-loader" }], //css-loader-vai ler o arquivo de css e depois passar pelo webpack
        //style-loader - pega o css interpretado e injeta dentro do html
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: { loader: "file-loader" },
      },
    ],
  },
};
