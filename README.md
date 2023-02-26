code runner -- extension installed

npm init -y
npm install cypress
npm install typescript

initilize a new tsconfig.json file using command
npx tsc --init --types cypress --lib dom,es6    ---->> this ensure that types for cypress are accessible by typescript
these types depend on dom and es6, so we pass them as lib option to typescript

to run cypress with typescript
npx cypress open

Use Prettier to prettify your code, make sure to include the config in your project
npm install --save-dev --save-exact prettier

To run the script in UI mode
npm run cypress-headed

To run the script in headless mode
npm run cypress-headless

