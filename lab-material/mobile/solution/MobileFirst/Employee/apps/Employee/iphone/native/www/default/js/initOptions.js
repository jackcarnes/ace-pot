
/* JavaScript content from js/initOptions.js in folder common */
// Uncomment the initialization options as required. For advanced initialization options please refer to IBM Worklight Information Center 
 
 var wlInitOptions = {
	
	// # To disable automatic hiding of the splash screen uncomment this property and use WL.App.hideSplashScreen() API
	//autoHideSplash: false,
		 
	// # The callback function to invoke in case application fails to connect to Worklight Server
	//onConnectionFailure: function (){},
	
	// # Worklight server connection timeout
	//timeout: 30000,
	
	// # How often heartbeat request will be sent to Worklight Server
	//heartBeatIntervalInSecs: 20 * 60,
	
	// # Enable FIPS 140-2 for data-in-motion (network) and data-at-rest (JSONStore) on iOS or Android.
	//   Requires the FIPS 140-2 optional feature to be enabled also.
	//enableFIPS : false,
	
	// # The options of busy indicator used during application start up
	//busyOptions: {text: "Loading..."}
	analytics : {
		enabled: true
		//url : ''
	}

};

if (window.addEventListener) {
	window.addEventListener('load', function() { WL.Client.init(wlInitOptions); }, false);
} else if (window.attachEvent) {
	window.attachEvent('onload',  function() { WL.Client.init(wlInitOptions); });
}
