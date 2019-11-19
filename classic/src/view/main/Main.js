/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Ext6.demo.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Ext6.demo.view.main.MainController',
        'Ext6.demo.view.main.MainModel',
        'Ext6.demo.view.main.List',
        // 'Ext6.demo.view.main.try.cononent2-2-1',
        'Ext6.demo.view.main.try.panel2-2-2',
        'Ext6.demo.view.main.try.GridPanel'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist',
            reference: 'mainlist'
        }]
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, 
    {
        title: 'Try GridPanel',
        iconCls: 'fa-smile-o',
        // FIXME 如何将按钮放到grid上方
        buttons: [{
            xtype:'button',
            id: 'delete',
        	text:'delete',
        	formBind:true,
        	reference:'deleteBtn',
        	iconCls:'delete',
        }],
        items: [{
            xtype: 'gridPanel3-1',
            reference: 'gridPanel3-1',
        }]
    },
    {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
