module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest": true,
        // https://eslint.vuejs.org/user-guide/#faq
        'vue/setup-compiler-macros': true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module",
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "semi": ["warn", "never"],
    },
    overrides: [
        {
          files: ['src/pages/**/*.vue'],
          rules: {
            'vue/multi-word-component-names': 0,
          }
        }
      ]
}
