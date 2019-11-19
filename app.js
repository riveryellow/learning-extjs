/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Ext6.demo.Application',

    name: 'Ext6.demo',

    requires: [
        // This will automatically load all classes in the Ext6.demo namespace
        // so that application classes do not need to require each other.
        'Ext6.demo.*'
    ],

    // The name of the initial view to create.
    mainView: 'Ext6.demo.view.main.Main'
});
