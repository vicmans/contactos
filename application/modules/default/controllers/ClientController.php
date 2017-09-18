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

        $id = $this->_getParam('id', 0);
        
        $post = $this->getRequest()->getPost();

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

        $this->view->resp = $resp;
    }

    public function deleteAction()
    {
    	$id = $this->_getParam('id', 0);

    	$this->view->id = $id;
    }
    public function showAction()
    {
        $id = $this->_getParam('id', 0);

        $clien = new Application_Model_Client();

        $resp = $clien->get($id);

        $this->view->data = $resp;
    }
}