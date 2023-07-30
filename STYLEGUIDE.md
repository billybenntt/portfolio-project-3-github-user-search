# Portfolio Project 3

### Layout Map

```scss
project/
├── src/
│   ├── scss/
│   │   ├── input.scss         // Main SCSS file that imports other SCSS files
│   │   ├── _variables.scss     // SCSS variables
│   │   ├── _normalize.scss         // CSS reset or normalize
│   │   ├── _layout.scss        // main layout-related styles
│   │   ├── _typography.scss    // Typography styles
│   │   └── _design-system        // Other SCSS partials
│   └── css/
│       └── output.css          // Compiled CSS file
└── index.html
```





## Style Guide







## 1. Colors

```scss
$primary-100: #697C9A;
$primary-200: #4B6A9B;
$primary-300: #0079FF;
$accent-light-100: #FFFFFF;
$accent-light-200: #F6F8FF;
$accent-light-300: #FEFEFE;
$accent-dark-100: #1E2A47;
$accent-dark-200: #2B3442;
$accent-dark-300: #141D2F;
```

### 2. Typography

##### Font Sizes

```scss
$font-sizes: (
        "xs": 0.813rem,
        "sm": 0.938rem,
        "base": 1rem,
        "lg": 1.375rem,
        "xl": 1.625rem
);
```

##### Line Heights

```scss
$line-height: (
        "1": 1.25rem,
        "2": 1.5rem,
        "3": 1.563rem,
        "4": 2.063rem,
        "5": 2.375rem
);
```

### Font Family

### Breakpoints

```scss
$breakpoints: (
        "sm": 375px,
        "md": 768px,
        "lg": 1440px,
);
```
