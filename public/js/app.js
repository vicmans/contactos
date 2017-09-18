Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'email',
        type: 'string'
    }]
});


Ext.onReady(function() {

    var user = Ext.create('Ext.data.Store', {
        storeId: 'user',
        model: 'User',
        autoLoad: 'true',
        proxy: {
            type: 'ajax',
            url: 'example.json',
            reader: {
                type: 'json',
                root: 'blah'
            }
        }
    });

    Ext.create('Ext.grid.Panel', {
        store: user,
        id: 'user',
        title: 'Users',
        iconCls: 'fa fa-user',
        columns: [{
            header: 'ID',
            dataIndex: 'id'
        }, {
            header: 'NAME',
            dataIndex: 'name'
        }, {
            header: 'Email',
            dataIndex: 'email'
        }],
        height: 300,
        width: 400,
        renderTo: Ext.getBody()
    });

});