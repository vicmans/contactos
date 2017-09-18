<?php

class IndexController extends Zend_Controller_Action
{

	public function indexAction()
	{
		$this->view->headTitle('Inicio - ');
		$this->view->saludo = "hola a todos!!";
	}

}