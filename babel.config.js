module.exports = {
  presets: [
    ["@babel/env",{
        targets: {
            edge:"17",
            firefox:"60",
            chrome:"58",
            safari:"10",
            ie: "9"
        },
        corejs: {
          version: 3,
          proposals: true
        },
        useBuiltIns:"usage"
    }],
    ["@babel/preset-react",{
         useBuiltIns:true
    }]
  ],
  plugins : [
     ["@babel/plugin-transform-react-jsx", {
       useBuiltIns:true
     }],
    //  ["react-css-modules", {
    //     autoResolveMultipleImports:true,
    //     exclude: 'node_modules'
    // }]
  ]
}
