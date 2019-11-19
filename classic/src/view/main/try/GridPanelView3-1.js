Ext.define('Ext6.demo.view.main.try.GridPanelView3-1', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.gridPanelView3-1',
    itemId: 'gridPanelView3-1',
    requires: [
        'Ext6.demo.view.main.try.QueryForm1',
        'Ext6.demo.view.main.try.GridPanel'
    ],

    controller: 'main',
    dockedItems: [
        {
            xtype: 'queryForm1'
        }
    ],

    items: [
        {
            xtype: 'gridPanel3-1'
        }
    ]
})