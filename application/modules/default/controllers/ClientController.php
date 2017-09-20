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

        $resp = $clien->getAll();

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

        $this->view->data = $resp;
    }

    public function storeAction(){


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

        $data_string = json_encode($datap);
        $resp = $cliente->add($data_string);

        $this->view->resp = $resp;
    }

    public function updateAction(){

        //$id = $this->_getParam('id', 0);
        
        $post = $this->getRequest()->getPost();
        $id = $post['id'];
        unset($post['id']);
        $datap=array_filter($post, "strlen");

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

        $data_string = json_encode($datap);
        $resp = $cliente->update($id, $data_string);

        $this->view->datos = $resp;
    }

    public function deleteAction()
    {
    	$id = $this->_getParam('id', 0);

        $cliente = new Application_Model_Client();

        $response = $cliente->delete($id);

    	$this->view->respuesta = $response;
    }
    public function showAction()
    {
        $id = $this->_getParam('id', 0);
        
        $clien = new Application_Model_Client();

        $resp = $clien->get($id);

        $this->view->data = $resp;
    }

    public function buscarAction()
    {
        $post = $this->getRequest()->getPost();

        $this->view->headTitle('Resultados de la busqueda - ');
        $this->view->inlineScript()->appendFile('/js/client/search.js');
        
        $clien = new Application_Model_Client();

        $resp = $clien->buscar($post['busca']);

        $this->view->data = $resp;
    }

    public function clientsAction()
    {
        $this->view->headTitle('Clientes - ');
        $this->view->inlineScript()->appendFile('/js/client/search.js');
        
        $cliente = new Application_Model_Client();

        $resp = $cliente->buscar('client',"type");

        $this->view->data = $resp;
    }

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