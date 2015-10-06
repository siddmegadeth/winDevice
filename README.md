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

```
#API Usage
Kindly include the file 
<script src="winDevice.js"></script> 
In your Code after cordova.js script file.
```


In a js file where the application is initialized 
```
// inject angularjs dependencies
var inject = ["ngAside","ngCookies","ui.bootstrap","ngRoute","ngAnimate","ngTouch","authServices"];

var win = new winDevice("newApp",inject,true); //Bootstrap Cordova Or Browser Based App ..true to enforce cordova.js on browser if required

var app = win.device();  // init App

win.log(true);  //Enable console.log or Disable console.log and Enable console.error or Disable console.error

win.info();  //get Info on platform initialization


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
```
```
var inject = ["ngAside","ngCookies","ui.bootstrap","ngRoute","ngAnimate","ngTouch","authServices"];
var win = new winDevice("newApp",inject,true);  //Bootstrap Cordova Or Browser Based App
This initialized  the winDevice.

var app = win.device();
This tells returns AngularJS Object to use 

        
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
```
#NOTE:
Ensure the app is not initialized from html using ng-app="myApp" and remove any reference if you are using this API
No need to add reference to cordova.js as it is added automatically based on device type. if cordova platform is detected then  cordova.js is added.
