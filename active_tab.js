// Do we have any tabs or does the user have tabbed forms on?
   if(g_tabs2Sections.hasTabs()){

       //Find the tab index where work_notes resides.
       var tab = g_tabs2Sections.findTabIndex('work_notes');

       // Bring the tab with the work notes in focus
       g_tabs2Sections.setActive(tab); 
   }