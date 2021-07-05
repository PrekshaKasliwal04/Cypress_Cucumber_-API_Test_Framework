# Snappet.cypress-assignment

#QA Cypress Testing Assignment done by - Preksha Kasliwal

#Introduction:

This project covers cypress cucumber based testing framework to execute online tests following hybrid design pattern. 

#Approach: 

1. I have used combination of cypress with cucumber to make it readable, meaningful for all stakeholders. 
2. In place of describe and it blocks I used Given When Then format to have clear understanding of steps and user flow.
3. I introduced page structure to make framework more reliable and maintainable.
4. Changes done to support cucumber implementation in different files such as package.json, index.js, cypress.json.
5. I placed step definitions in Support and Feature files in Integration.
6. Added pages folder to keep more used functions according to pages.
7. Covered all shared 5 test cases in three different feature files.
8. Few changes in locator values to ignore using xpath as much possible.


Alot said lets move ahead

#Installations: 

1. npm install
2. npm install cypress-cucumber-preprocessor
3. npm install cosmiconfig --save-dev
4. npm install cucumber-html-reporter --save-dev
5. npm install multiple-cucumber-html-reporter --save-dev

if required we may need to use below commands for force installtion

npm fund, npm audit fix --force

Now that we are done with our installation let's learn how to run the code:

#Steps to Run:

1. goto Command prompt run : npm run cypress:open
2. From cypress run integration tests.
3. After the execution see if any failure.

#Future Upgrades
 1. For next step I can work on managing waits more precisely.
 2. Change remaining xpath locator handling.
 3. HTML Report creation and email to stakeholdrs.
