/**
* Vista para los filtrar los contactos
*/

Ext.onReady(function() {

    if(datos.length==0){
        Ext.create('Ext.panel.Panel', {
        html: '<div class="jumbotron"><p class="lead">No se encontraron resultados.</p></div>',
        bodyStyle: {
            background: '#eee'
        },
        renderTo: 'content'
      });

    }else{
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
            flex: 5
        }, {
            header: 'Nombre',
            dataIndex: 'name',
            flex: 25,
        },{
            header: 'Identificación',
            flex: 20,
            dataIndex: 'identification'
        },{
            header: 'Celular',
            flex: 10,
            dataIndex: 'mobile'
        },{
            header: 'Email',
            flex: 20,
            dataIndex: 'email'
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
}

});