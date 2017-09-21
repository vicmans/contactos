<?php

class AboutController extends Zend_Controller_Action
{

	public function indexAction()
	{
		$this->view->headTitle('Acerca de ');
		$this->view->saludo = "hola a todos!!";
	}
}