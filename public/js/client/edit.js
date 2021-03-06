/*
* Formulario de edicion, requerida variable datos
* con los datos del usuario a editar
*/
    // Por si el usuario no existe
    if (datos.code == 404) {
      Ext.create('Ext.panel.Panel', {
        html: '<div class="jumbotron"><p class="lead">Error: '+datos.message+'</p></div>',
        bodyStyle: {
            background: '#eee'
        },
        border: false,
        renderTo: 'content'
      });
    }
// llenar los checkbox de los proovedores
for (var i = datos.type.length - 1; i >= 0; i--) {
    if(datos.type[i]=='client'){
        var client = 1;
    }
    if(datos.type[i]=='provider'){
        var provider = 1;
    }
}

Ext.onReady(function() {

    var forn = Ext.create('Ext.form.Panel',{
        title: 'Editar Contacto',
        iconCls: 'fa fa-pencil',
        width: 800,
        bodyPadding: 12,
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Nombre*',
            name: 'name',
            value: datos['name'],
            allowBlank: false,
        },{
            xtype: 'textfield',
            fieldLabel: 'Identificacion',
            name: 'identification',
            value: datos['identification']
        },{
            xtype: 'textfield',
            fieldLabel: 'Direccion',
            name: 'address',
            value: datos.address.address
        },{
            xtype: 'textfield',
            fieldLabel: 'Ciudad',
            name: 'city',
            value: datos.address.city
        },{
            xtype: 'textfield',
            fieldLabel: 'Correo electronico',
            name: 'email',
            value: datos.email,
            vtype: 'email'
        },{
            xtype: 'textfield',
            fieldLabel: 'Telefono1',
            name: 'phonePrimary',
            value: datos.phonePrimary
        },{
            xtype: 'textfield',
            fieldLabel: 'Telefono2',
            name: 'phoneSecondary',
            value: datos.phoneSecondary
        },{
            xtype: 'textfield',
            fieldLabel: 'Fax',
            name: 'fax',
            value: datos.fax
        },{
            xtype: 'textfield',
            fieldLabel: 'Celular',
            name: 'mobile',
            value: datos.mobile
        },{
           xtype: 'combobox',
           fieldLabel: 'Lista de precio',
           name: 'priceList',
           //value: datos.priceList.name,
           store: Ext.create('Ext.data.Store', {
                fields: ['name','id'],
                data: [{ 
                   'name': 'General',
                   'id': 1
                },{
                   'name': 'Ninguna',
                   'id': 0
                }]
                 }),
           valueField: 'name',
           displayField: 'name'
        },{
            xtype: 'combobox',
            fieldLabel: 'Vendedor',
            name: 'seller',
            //value: ,
            store: Ext.create('Ext.data.Store', {
                fields: ['name'],
                data: [{ 
                   'name': 'Seleccione'
                },{
                   'name': 'Ninguna'
                }]
             }),
        },{
            xtype: 'combobox',
            fieldLabel: 'Terminos de pago',
            name: 'term',
            store: Ext.create('Ext.data.Store', {
                fields: ['name','id'],
                data: [{ 
                   'name': 'Vencimiento manual',
                   'id': 0
                },{
                   'name': 'De contado',
                   'id': 1
                },{
                   'name': '8 dias',
                   'id': 2
                },{
                   'name': '15 dias',
                   'id': 3
                },{
                   'name': '30 dias',
                   'id': 4
                },{
                   'name': '60 dias',
                   'id': 5
                }]
            }),
            displayField: 'name',
            valueField: 'id',
        },{
            xtype: 'checkboxfield',
            fieldLabel: 'Cliente',
            inputValue: '1',
            name: 'client',
            checked: client
        },{
            xtype: 'checkboxfield',
            fieldLabel: 'Proveedor',
            inputValue: '1',
            name: 'provider',
            checked: provider
        },{
            xtype: 'textarea',
            fieldLabel: 'Observaciones',
            name: 'observations',
            value: datos.observations
        },{
        xtype: 'hiddenfield',
        name: 'id',
        value: datos.id
    }],
        buttons: [{
        	text: 'Limpiar',
        	handler: function(){
        		this.up('form').getForm().reset();
        	}
        },{
        	text: 'Enviar',
        	formBind: true,
        	handler: function(){
        		var form = this.up('form').getForm();
        		forn.getForm().submit({
        			method: 'POST',
        			standardSubmit:true,
		    		url: '/client/update',
		    		
		    		success: function(form, action){
						console.log("listo");
		    				Ext.Msg.alert('Listo CTM!', action.result.msg);
		    				
		    			},
		    			failure: function(form, action){
		    				console.log("fallo esta mierda"+action.result.msg);

		    				Ext.Msg.alert('csm', action.result.msg);
		    			}
        		});

        	}
        }],
        renderTo: 'content'
    });

});
