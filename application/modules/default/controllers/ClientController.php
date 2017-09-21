<?php

class ClientController extends Zend_Controller_Action
{

    public function init()
    {
        $this->initView();
        $this->view->baseUrl = $this->_request->getBaseUrl();
    }

    public function indexAction()
    {
        $this->view->saludo = "hola a todos!!";

        $clien = new Application_Model_Client();
        // Obtener todos los contactos
        $resp = $clien->getAll();
        $scripts = $this->view->inlineScript();
        // incluir el script js
        $scripts->appendFile('/js/client/clients.js');
        // respuesta a la vista
        $this->view->response = $resp;

    }

    public function addAction()
    {

        $this->view->headTitle('Agregar - ');

    }

    public function editAction()
    {
    	$id = $this->_getParam('id', 0);

        $clien = new Application_Model_Client();

        $resp = $clien->get($id);

        $this->view->headTitle('Editar - ');
        $scripts = $this->view->inlineScript();
        $scripts->appendFile('/js/client/edit.js');

        $this->view->data = $resp;
    }

    public function storeAction(){

        // datos del usuario nuevo
    	$post = $this->getRequest()->getPost();


        $datap=array_filter($post, "strlen");
         
        //print_r($datap);

        // Arreglar direccion
        if (isset($datap['address'])) {
            $datap['address'] = array('address' => $datap['address'],'city' => $datap['city']);
            unset($datap['city']);
        }

        if (isset($datap['term'])) {
            $datap['term'] = array('id' => $datap['term']);
        }

        // tipo de cliente
        $type = [];
        if (isset($datap['client'])) {
            $type[] = 'client';
            unset($datap['client']);
        }
        if (isset($datap['provider'])) {
            $type[] = 'provider';
            unset($datap['provider']);
        }
        $datap['type'] = $type;

        $cliente = new Application_Model_Client();
        // Envio datos a almacenar
        $data_string = json_encode($datap);
        $resp = $cliente->add($data_string);
        // envio respuesta a la vista
        $this->view->resp = $resp;
    }

    public function updateAction(){

        //Obtengo los datos del usuario a actualizar
        
        $post = $this->getRequest()->getPost();
        $id = $post['id'];
        unset($post['id']);
        $datap=array_filter($post, "strlen");

        // Arreglar direccion
        if (isset($datap['address'])) {
            $datap['address'] = array('address' => $datap['address'],'city' => $datap['city']);
            unset($datap['city']);
        }

        // Acomodo los terminos de pago
        if (isset($datap['term'])) {
            $datap['term'] = array('id' => $datap['term']);
        }

        // tipo de cliente
        $type = [];
        if (isset($datap['client'])) {
            $type[] = 'client';
            unset($datap['client']);
        }
        if (isset($datap['provider'])) {
            $type[] = 'provider';
            unset($datap['provider']);
        }
        $datap['type'] = $type;

        $cliente = new Application_Model_Client();
        // Envio datos al model
        $data_string = json_encode($datap);
        $resp = $cliente->update($id, $data_string);
        // Envia respuesta a la vista
        $this->view->datos = $resp;
    }

    public function deleteAction()
    {
        // Obtengo el id
    	$id = $this->_getParam('id', 0);

        $cliente = new Application_Model_Client();
        // Borra el contacto con ese id
        $response = $cliente->delete($id);
        // Envio respuesta a la vista
    	$this->view->respuesta = $response;
    }
    public function showAction()
    {
        // Obtengo el id
        $id = $this->_getParam('id', 0);
        
        $clien = new Application_Model_Client();

        // Obtengo datos del contacto para el id
        $resp = $clien->get($id);
        $scripts = $this->view->inlineScript();
        $scripts->appendFile('/js/client/show.js');

        // Lo mando a la vista
        $this->view->data = $resp;
    }

    public function buscarAction()
    {
        // Obtengo la peticion a buscar
        $post = $this->getRequest()->getPost();

        $this->view->headTitle('Resultados de la busqueda - ');
        $this->view->inlineScript()->appendFile('/js/client/search.js');
        
        // obtengo los datos
        $clien = new Application_Model_Client();

        $resp = $clien->buscar($post['busca']);

        $this->view->data = $resp;
    }

    // Para mostrar los clientes
    public function clientsAction()
    {
        $this->view->headTitle('Clientes - ');
        $this->view->inlineScript()->appendFile('/js/client/search.js');
        
        $cliente = new Application_Model_Client();

        $resp = $cliente->buscar('client',"type");

        $this->view->data = $resp;
    }

    // Para mostrar los proveedores
    public function providersAction()
    {
        $this->view->headTitle('Proveedores - ');
        
        $cliente = new Application_Model_Client();

        $resp = $cliente->buscar('provider',"type");
        $scripts = $this->view->inlineScript();
        $scripts->appendFile('/js/client/search.js');
        $this->view->data = $resp;
    }
}