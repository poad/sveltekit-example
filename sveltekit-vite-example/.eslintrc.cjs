module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json',
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  plugins: [
    'svelte3'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  // add your custom rules here
  rules: {
    "@typescript-eslint/ban-types": [
      "error",
      {
        "extendDefaults": true,
        "types": {
          "{}": false
        }
      }
    ]
  }
}
