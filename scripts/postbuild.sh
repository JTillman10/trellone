# echo INSTALLING cli
# npm install @angular/cli
pwd
echo INSTALL DEPENDENCIES
../ng-trellone npm install
echo BUILDING FRONTEND FOR PROD
../ng-trellone ng build --aot --prod
cp -a  ./ng-trellone/dist/. ./dist/client