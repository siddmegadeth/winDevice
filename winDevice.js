(function(window,undefined)
{
  function winDevice(name)
  {
    var appName = name;
    var infoType  = {};
    this.log = function(flag)
    {
      infoType.log = flag;
      if(flag)
      {
        log = console.log.bind(console);
      }
      if(!flag)
      {
        log = function(){};
        console.log = function(){};
      }
    }
    this.device = function(flag)
    {
      infoType.device = flag;
      if(flag)
      {
        document.addEventListener("deviceready",function()
        {
          angular.bootstrap(document,[appName]);
          log("Device Ready");
        },false);
       }
       if(!flag)
       {
         window.onload = function()
         {
           angular.bootstrap(document,["myApp"]);
           log("Device Ready");
         }
       }
    };
    this.info = function()
    {
      if(infoType.device)
      {
        log("Emulation For Cordova : true");
      }
      else
      {
        log("Emulation For Browser : true");
      }
      log("Logging : "+infoType.log);
    }
 }
  window.winDevice = winDevice;
})(window)
