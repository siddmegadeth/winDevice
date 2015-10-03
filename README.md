# winDevice
winDevice is a set of API which allows to Initialize App for Development either on Cordova or Browser

#What is winDevice
winDevice allows to  select platform either as Cordova or browser while doing the development.
When creating Hybrid App its becomes a pain to  test the layout on the browser using RWD.
cordova apps does not initialize on Browser or allows teh views to be dispplayed properly unless
3rd party Emulators are  used.

winDevice allows to switch between cordova or browser type with a single line of change.

#winDevice and Angularjs
winDevice is best suited and works with Angularjs. its helps bootstrap angularjs apps in a cordova environment.
looking to view the angularjs app on the browser.. just change the param and refresh the browser.

#what winDevice Does???
winDevice sinply allows programmers to bootstrap the angularjs app withoout writing the single  initialization code
for device ready or simply angularjs initialization in a  browser. it simply helps bootstrap the App rapidly.


#API Usage
Kindly include the file 
<script src="winDevice.js"></script> 
In your Code after cordova.js script file.



In a js file where the application is initialized 


var win = new winDevice("myApp"); //Bootstrap Cordova Or Browser Based App
win.device(false);  //true for cordova else false for browser
win.log(true);  //Enable console.log or Disable console.log
win.info();  //get Info on platform initialization

app = angular.module("myApp",[]);
app.config(function($routeProvider)
{
   $routeProvider
   .when("/",
    {
     templateUrl: "templates/somehtml.html",
     controller: "someCtrlCtrl"
   })
   
   .otherwise({redirectTo :'/'});
});



var win = new winDevice("myApp"); //Bootstrap Cordova Or Browser Based App
This initialized  the winDevice.

win.device(false);  
This tells which platform to use 
true : This  initilializes the code for cordova and bootstrap the apps.
false : This  initilializes the code for browser and bootstrap the apps and can
        be viewed in a browser. change values eitehr true or false while development to see teh results.
        
win.log(true);
Enable console.log or Disable console.log. Once win.log is initialized the  there is no need to 
write console.log . simply user can refer log("some message");
If true then log is enabled in the code and can be displayed in the browser console.
when switchd to false it completly disables the console.log /log and there are no logs displayed in the console
pan application. this could be used to enable/disable log messages while seitching to deployment.
example :
log("Some Log");
error("Some Error");
 
win.info();  //get Info on platform initialization

#NOTE:
Ensure the app is not initialized from html using ng-app="myApp" and remove any reference if you are using this API
Currenntly use myApp to test this APi as youur app name
No need to add reference to cordova.js as it is added automatically based on device type. if cordova is detedted then  cordova.js is added.
