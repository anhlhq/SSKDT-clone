module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./App'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          "App": "./App",
          "Screens": "./App/Screens",
          "Navigation": "./App/Navigation",
          "Containers": "./App/Containers",
          "Components": "./App/Components"
        },
      },
    ],
  ],
};
