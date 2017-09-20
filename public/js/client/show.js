/*
* Panel para ver detalles de un contacto, requerida variable datos
* con los datos del usuario mostrar
*/

Ext.require('Ext.panel.Panel');     
Ext.onReady(function() {

    Ext.onReady(function(){
    var data = datos;

    new Ext.panel.Panel({
        width: 800,
        bodyPadding: 5,
        title: datos.name,
        iconCls: 'fa fa-user',
        tpl: [
            '<p>Nombre: {name}</p>',
            '<p>Identificación: {identification}</p>',
            '<p>Direccion: {address.address} {address.city}</p>',
            '<p>Teléfono: {phonePrimary}</p>',
            '<p>Teléfono 2: {phoneSecondary}</p>',
            '<p>Celular: {mobile}</p>',
            '<p>Correo electrónico: {email}</p>',
            '<p>Observaciones: {observations}</p>',
        ],
        dockedItems: [{
            xtype: 'toolbar',
            items: [{
                itemId: 'delete',
                text: 'Borrar',
                iconCls: 'text-danger fa fa-times',
                handler: function(){
                    window.location = '/client/delete/id/'+datos.id;
                }
            }, '-', {
                itemId: 'edit',
                text: 'Editar',
                iconCls: 'fa fa-pencil',
                handler: function(){
                    window.location = '/client/edit/id/'+datos.id;
                }
            }]
        }],
        html: [
'<dl class="row">',
'  <dt class="col-sm-3">Nombre</dt>',
  '<dd class="col-sm-9">'+nullForEmpty(datos.name)+'</dd>',
  '<dt class="col-sm-3">Identificación</dt>',
  '<dd class="col-sm-9">'+nullForEmpty(datos.identification)+'</dd>',
  '<dt class="col-sm-3">Direccion</dt>',
  '<dd class="col-sm-9"><p>'+nullForEmpty(datos.address.address)+'</p><p>'+ nullForEmpty(datos.address.city)+'</p></dd>',
  '<dt class="col-sm-3">Teléfono</dt>',
 '<dd class="col-sm-9">'+nullForEmpty(datos.phonePrimary)+'</dd>',
  '<dt class="col-sm-3">Teléfono 2</dt>',
  '<dd class="col-sm-9">'+nullForEmpty(datos.phoneSecondary)+'</dd>',
  '<dt class="col-sm-3">Celular</dt>',
  '<dd class="col-sm-9">'+nullForEmpty(datos.mobile)+'</dd>',
  '<dt class="col-sm-3">Correo electrónico</dt>',
  '<dd class="col-sm-9">'+nullForEmpty(datos.email)+'</dd>',
  '<dt class="col-sm-3">Observaciones</dt>',
  '<dd class="col-sm-9">'+nullForEmpty(datos.observations)+'</dl>',
/*            '<p>Nombre: '+datos.name+'</p>',
            '<p>Identificación: '+datos.identification+'</p>',
            '<p>Direccion: '+datos.address.address+', '+ datos.address.city+'</p>',
            '<p>Teléfono: '+datos.phonePrimary+'</p>',
            '<p>Teléfono 2: '+datos.phoneSecondary+'</p>',
            '<p>Celular: '+datos.mobile+'</p>',
            '<p>Correo electrónico: '+datos.email+'</p>',
            '<p>Observaciones: '+datos.observations+'</p>',*/
        ],
        renderTo: 'content'
    });

});

});
