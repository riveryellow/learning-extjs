Ext.define('Ext6.demo.view.main.try.QueryForm1', {
    extend: 'Ext.form.Panel',
    alias: 'widget.queryForm1',
	layout: 'fit',
	itemId: 'queryForm1',
	reference: 'queryForm1',
    title: '查询条件',
    layout: {
		type: 'table',
		columns: 4
    },
    defaults: {
		xtype: 'textfield',
		labelWidth: 75,
		blankText: '不能为空',
		labelAlign: 'right',
		width: 250,
		margin: '1 0'
	},


	buttons: [{
        xtype:'button',
        id: 'delete',
        text:'delete',
        formBind:true,
        reference:'deleteBtn',
        iconCls:'delete',
    }]
})