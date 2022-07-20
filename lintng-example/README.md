# ESLint Tutorial

### Step-1: Create a web app on typescript
>npx create-react-app lintng-example --template typescript

### Step-2: add ESlint
> npx eslint --init

### Step-3: Settings .eslintrc.js file
Add this code after 'rules' in .eslintrc.js file

"settings": {
        "react":{
            "version":"detect"
        }

### Step-4: Settings package.json file
Add this code in 'scripts' in package.json file

"lint": "eslint src --ext .ts, .tsx"

### Step-5: Download ESLint plugin

### Step-6: Activation
 
This will be activated when we go to a .ts or .tsx file and from OUTPUT, select ESLint