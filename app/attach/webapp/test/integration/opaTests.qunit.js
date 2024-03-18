sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'attach/test/integration/FirstJourney',
		'attach/test/integration/pages/parentList',
		'attach/test/integration/pages/parentObjectPage'
    ],
    function(JourneyRunner, opaJourney, parentList, parentObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('attach') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheparentList: parentList,
					onTheparentObjectPage: parentObjectPage
                }
            },
            opaJourney.run
        );
    }
);