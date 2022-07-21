module.exports = {
    entry: './main.js', // arquivo de origem. O webpack usa um grafo de dependência para decidir quais módulos precisam ser empacotados
    // ./src/index.js é o entry padrão do webpack 4.
    output: { // O output determina onde o webpack deve emitir os pacotes que cria e como os nomeia.
        path: __dirname, //busca diretório raiz
        filename: './bundle.js', //cria o arquivo de saída
    },
    // ./dist/main.js é o output default do webpack 4
    module: {
        rules: [
            {
                test: /\.js$/, //regra: cuidar arquivos js - use expressão regular
                exclude: /node_modules/, //ignore arquivos node_modules
                use: {
                    loader: 'babel-loader', //use o babel como carregamento. retira o controle do Babel e passa para o webpack
                }
            }
        ]
    }
}