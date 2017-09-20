/**
* Vista para los filtrar los contactos
*/

Ext.onReady(function() {

    var grid = Ext.create('Ext.grid.Panel', {
        store: {
        	data: datos
        },
        id: 'user',
        title: titulo,
        iconCls: 'fa fa-users',
        columns: [{
            header: 'ID',
            dataIndex: 'id',
            flex: 10
        }, {
            header: 'Nombre',
            dataIndex: 'name',
            flex: 30,
        }, {
            header: 'Email',
            flex: 20,
            dataIndex: 'email'
        },{
        	header: 'identification',
            flex: 20,
        	dataIndex: 'identification'
        },{
            header: 'Observaciones',
            flex: 20,
            dataIndex: 'observations'
        }],
        dockedItems: [{
            xtype: 'toolbar',
            items: [{
                text: 'Agregar nuevo',
                iconCls: 'text-success fa fa-plus',
                handler: function(){
                    window.location = '/client/add';
                }
            }, '-', {
                itemId: 'delete',
                text: 'Delete',
                iconCls: 'text-danger fa fa-times',
                disabled: true,
                handler: function(){
                    var selection = grid.getView().getSelectionModel().getSelection()[0];
                    window.location = '/client/delete/id/'+selection.id;
                }
            }, '-', {
                itemId: 'edit',
                text: 'Editar',
                iconCls: 'fa fa-pencil',
                disabled: true,
                handler: function(){
                    var selection = grid.getView().getSelectionModel().getSelection()[0];
                    window.location = '/client/edit/id/'+selection.id;
                }
            },  {
                itemId: 'show',
                text: 'Ver detalles',
                iconCls: 'fa fa-eye',
                disabled: true,
                handler: function(){
                    var selection = grid.getView().getSelectionModel().getSelection()[0];
                    window.location = '/client/show/id/'+selection.id;
                }
            }]
        }],
        //width: 800,
        renderTo: 'content'
    });
    grid.getSelectionModel().on('selectionchange', function(selModel, selections){
        grid.down('#delete').setDisabled(selections.length === 0);
    });
    grid.getSelectionModel().on('selectionchange', function(selModel, selections){
        grid.down('#edit').setDisabled(selections.length === 0);
    });
    grid.getSelectionModel().on('selectionchange', function(selModel, selections){
        grid.down('#show').setDisabled(selections.length === 0);
    });

});