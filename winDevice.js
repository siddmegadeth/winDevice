(function(window,undefined)
{
  function generateContact()
  {
    log("Genrating Contact");
  }
  var isAuto = false;
  var devType=false;
  function winDevice(appName,inject,force)
  {
     try{
      if(window.angular)
      {
      isAuto=true;
      if(!force)
      {
      if(document.URL.indexOf('http://') === -1&& document.URL.indexOf('https://') === -1)
      {
        console.log("Cordova App");
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src","cordova.js");
        document.getElementsByTagName("head")[0].appendChild(fileref);
        devType=true;
        document.addEventListener("deviceready",function()
        {
          console.log("Bootstrapping APP On Cordova"+appName);
          angular.bootstrap(document,[appName]);
          log("Device Ready");
        },false);
      }
      else
      {
      //  console.log("Running In A Browser");
        devType=false;
        window.onload = function()
        {
          console.log("Bootstrapping APP On Browser"+appName);
          angular.bootstrap(document,[appName]);
          log("Device Ready");
        }
      }
    }
    else
    {
      console.log("Forced");
      console.log("Cordova App");
      var fileref=document.createElement('script')
      fileref.setAttribute("type","text/javascript")
      fileref.setAttribute("src","cordova.js");
      document.getElementsByTagName("head")[0].appendChild(fileref);
      devType=true;
      document.addEventListener("deviceready",function()
      {
        console.log("Bootstrapping APP On Cordova"+appName);
        angular.bootstrap(document,[appName]);
        log("Device Ready");
      },false);
    }
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
      return this;
    }
    this.device = function()
    {
      if(window.angular)
      {
       console.log("App Init with Dependency "+appName);
       return angular.module(appName,inject);
       return this;
      }
      else
      {
        console.error("Angularjs Not Found");
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
      log("Is Auto : ")
      return this;
    }
    this.cordova = {};
    this.cordova.contacts = function(success,failure)
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
        return this;
    }
  }
  else
  {
    console.error("Angularjs Not Found");
  }
  }
  catch(e)
  {
    //Error
    return e;
  }
 }
  window.winDevice = winDevice;
})(window)
