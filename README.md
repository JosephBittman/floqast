folder structure:
/init, setup of framework and globals
/meta, centralized place for data and other information (users by environment, environment urls/etc)
/page_objects, where the element selectors live
/reusables, files containing reusable test logic by functional area
    (many tests (whether cucumber steps or jasmine specs/etc) have logic used in multiple places/steps/specs/etc)
test/features, cucumber feature files representing functional areas
test/features/step_definitions, files where the feature files are implemented and which use files from all the above places


to run:
git clone https://github.com/JosephBittman/floqast.git
npm install

in one terminal window: 
    node node_modules\protractor\bin\webdriver-manager update
    node node_modules\protractor\bin\webdriver-manager start
    
in another terminal window:
node node_modules\protractor\bin\protractor protractor.conf.js