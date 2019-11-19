var columns = [
    new Ext.grid.RowNumberer(),
    { header: '编号', dataIndex: 'id' },
    { header: '名称', dataIndex: 'name', flex: 1, sortable: false },
    {
        header: '性别',
        dataIndex: 'sex',
        flex: 1, sortable:
            false,
    },
    { header: '描述', dataIndex: 'descn', flex: 1, sortable: false },
    { header: '日期', dataIndex: 'date', flex: 1, renderer: Ext.util.Format.dateRenderer('Y-m-d h:i:s') },
];

var data = [
    ['3001', 'name1', 'male', 'descn1', '1980-01-15T02:58:05'],
    ['3002', 'name2', 'female', 'descn2', '1970-01-15T02:58:06'],
    ['3003', 'name3', 'male', 'descn3', '1970-01-15T02:58:07'],
    ['3004', 'name4', 'female', 'descn4', '1970-01-15T02:58:08'],
    ['3005', 'name5', 'male', 'descn5', '1970-01-15T02:58:09'],
    ['3006', 'name1', 'male', 'descn1', '1980-01-15T02:58:05'],
    ['3007', 'name2', 'female', 'descn2', '1970-01-15T02:58:06'],
    ['3008', 'name3', 'male', 'descn3', '1970-01-15T02:58:07'],
    ['3009', 'name4', 'female', 'descn4', '1970-01-15T02:58:08'],
    ['3010', 'name5', 'male', 'descn5', '1970-01-15T02:58:09'],
    ['3011', 'name1', 'male', 'descn1', '1980-01-15T02:58:05'],
    ['3012', 'name2', 'female', 'descn2', '1970-01-15T02:58:06'],
    ['3013', 'name3', 'male', 'descn3', '1970-01-15T02:58:07'],
    ['3014', 'name4', 'female', 'descn4', '1970-01-15T02:58:08'],
    ['3015', 'name5', 'male', 'descn5', '1970-01-15T02:58:09'],
    ['3016', 'name1', 'male', 'descn1', '1980-01-15T02:58:05'],
    ['3017', 'name2', 'female', 'descn2', '1970-01-15T02:58:06'],
    ['3018', 'name3', 'male', 'descn3', '1970-01-15T02:58:07'],
    ['3019', 'name4', 'female', 'descn4', '1970-01-15T02:58:08'],
    ['3020', 'name5', 'male', 'descn5', '1970-01-15T02:58:09'],
    ['3021', 'name1', 'male', 'descn1', '1980-01-15T02:58:05'],
    ['3022', 'name2', 'female', 'descn2', '1970-01-15T02:58:06'],
    ['3023', 'name3', 'male', 'descn3', '1970-01-15T02:58:07'],
    ['3024', 'name4', 'female', 'descn4', '1970-01-15T02:58:08'],
    ['3025', 'name5', 'male', 'descn5', '1970-01-15T02:58:09']
];

// var store = Ext.create(Ext.data.ArrayStore, {
//     data: data,
//     fields: [
//         { name: 'id' },
//         { name: 'name' },
//         { name: 'sex' },
//         { name: 'descn' },
//         { name: 'date' }
//     ],
// });

// read local json file
var store = new Ext.data.JsonStore({
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'totalProperty'
        },
        url: '/mock/gridpanel3-1.json'
    },
    fields: [
        'id', 'name', 'sex', 'descn', 'date'
    ],
    root: 'data',
    autoLoad: false
});

// 前端分页
// var store = Ext.create("Ext.data.Store", {
//     pageSize: 3,
//     proxy: {
//         type: 'memory',
//         reader: {
//             type: 'json',
//         },
//         url: '/mock/gridpanel3-1.json',
//         enablePaging: true
//     },
//     data: data,
//     fields: [
//         'id', 'name', 'sex', 'descn', 'date'
//     ],
//     root: 'data',
//     autoLoad: true
// });


Ext.define('Ext6.demo.view.main.try.GridPanel', {
    extend: Ext.grid.Panel,
    xtype: 'gridPanel3-1',
    title: 'gridPanel3-1',
    layout: 'fit',
    height: window.innerHeight * 0.85,
    autoScroll: true,
    region: 'center',
    // 是否允许改变列宽
    enableColumnResize: false,
    // 是否允许拖放列
    enableColumnMove: false,
    store: store,
    columns: columns,
    loadMask: true,
    selModel: {
        //键盘导航， false则键盘操作无效
        enableKeyNav: true,
        //选择模式 SINGLE, SIMPLE, 和 MULTI
        mode: 'SIMPLE',
        //点击checkbox框选中
        checkOnly: false,
        //在表头显示全选checkbox框
        showHeaderCheckbox: true,
        //复选框选择模式Ext.selection.CheckboxModel
        selType: 'checkboxmodel',
        allowDeselect: true
    },
    listeners: {
        afterRender: function () {
            Ext.get('delete').on('click', function (evt, btn) {
                store.remove(store.getAt(0));
                // 删除后更新行序号
                grid.view.refresh();
            });
        },
        itemclick: function () {
            var selected = grid.getSelectionModel().selected;
            for (var i = 0; i < selected.length; i++) {
                var record = selected.get(i);
                Ext.Msg.alert('提示', record.get("id") + "," + record.get("name") + "," + record.get("descn"));
            }
        }
    },
    
    // not working
    viewConfig: {
        columnsText: '显示的列',
        sortAscText: '升序',
        sortDescText: '降序',
        forceFit: true
    },
    // 分页
    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            store: store,
            // top/bottom/left/right
            dock: 'bottom',
            displayInfo: true,
            plugins: [{
                ptype: 'pagingtoolbarresizer',
            }
            ]
        }
    ]
});

// 前端多重排序
store.sort([
    {
        property: 'date',
        direction: 'DESC'
    },
    {
        property: 'id',
        direction: 'ASC'
    }
]);

store.load({
    params: {
        start: 2,
        limit: 10
    }
});