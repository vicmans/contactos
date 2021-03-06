Ext.onReady(function() {

    var forn = Ext.create('Ext.form.Panel',{
        
        title: 'Agregar Nuevo Contacto',
        iconCls: 'fa fa-plus',
        width: 800,
        bodyPadding: 8,
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Nombre*',
            name: 'name',
            allowBlank: false,
            regex:/^[ a-zA-ZñÑ' ]+$/,
            regexText:'Solo letras y espacios'
        },{
            xtype: 'textfield',
            fieldLabel: 'Identificacion',
            name: 'identification'
        },{
            xtype: 'textfield',
            fieldLabel: 'Direccion',
            name: 'address'
        },{
            xtype: 'textfield',
            fieldLabel: 'Ciudad',
            name: 'city'
        },{
            xtype: 'textfield',
            fieldLabel: 'Correo electronico',
            name: 'email',
            vtype: 'email'
        },{
            xtype: 'textfield',
            fieldLabel: 'Telefono1',
            name: 'phonePrimary'
        },{
            xtype: 'textfield',
            fieldLabel: 'Telefono2',
            name: 'phoneSecondary'
        },{
            xtype: 'textfield',
            fieldLabel: 'Fax',
            name: 'fax'
        },{
            xtype: 'textfield',
            fieldLabel: 'Celular',
            name: 'mobile'
        },{
           xtype: 'combobox',
           fieldLabel: 'Lista de precio',
           name: 'priceList',
           store: Ext.create('Ext.data.Store', {
                fields: ['name','id'],
                data: [{ 
                   'name': 'General',
                   'id': 1
                },{
                   'name': 'Ninguna',
                   'id': null
                }]
                 }),
           valueField: 'id',
           displayField: 'name'
        },{
            xtype: 'combobox',
            fieldLabel: 'Vendedor',
            name: 'seller',
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
            valueField: 'id'

        },{
            xtype: 'checkboxfield',
            fieldLabel: 'Cliente',
            inputValue: '1',
            name: 'client'
        },{
            xtype: 'checkboxfield',
            fieldLabel: 'Proveedor',
            inputValue: '1',
            name: 'provider'
        },{
            xtype: 'textarea',
            fieldLabel: 'Observaciones',
            name: 'observations'
        }/*,{
            xtype: 'checkboxfield',
            fieldLabel: 'Incluir estado de cuenta',
            inputValue: '1',
        }*/],
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
		    		url: '/client/store',
		    		
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