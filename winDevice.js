(function(window,undefined)
{
  function generateContact()
  {
    log("Genrating Contact");

  }

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
        error = console.error.bind(console);
      }
      if(!flag)
      {
        log = function(){};
        error = function(){};
        console.log = function(){};
        console.error = function(){};
      }
    }
    this.device = function(flag)
    {
      infoType.device = flag;
      if(flag)
      {

        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src","cordova.js");
        document.getElementsByTagName("head")[0].appendChild(fileref);
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
    this.api = {};
    this.api.contacts = function(success,failure)
    {
        log("Cordova Contact API");
        if(navigator.contacts)
        {
          success();
        }
        else
        {
          generateContact();
          failure();
        }

    }

 }
  window.winDevice = winDevice;
})(window)
