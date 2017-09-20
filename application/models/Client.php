<?php

class Application_Model_Client extends Zend_Rest_Client
{

	/**
     * devuelve un arreglo con los datos del contacto con id=$id
     * @param <type> $id id
     * @return <type> array asociativo
     */
    public function get($id)
    {
        $id = (int) $id;

        // Aqui uso cURL pa traerme el cliente
        $uri = "https://app.alegra.com/api/v1/contacts/$id";
	    $client   = new \Zend_Http_Client();
	    $client->setUri($uri);
	    $client->setAdapter('Zend_Http_Client_Adapter_Curl');
	    $adapter  = $client->getAdapter();
	    /** This setCurlOption is optional **/
	    //$adapter->setCurlOption(CURLOPT_HTTPHEADER, false);
	    //$adapter->setCurlOption(CURLOPT_SSL_VERIFYPEER, array('Accept: application/json','Content-type: application/json'));
	    $adapter->setCurlOption(CURLOPT_USERPWD, MAIL.":".TOKEN);

		$response = $client->request('GET');
		//echo $response->getBody();
        return $response->getBody();
    }
    /**
     *  agrega un nuevo album a la base de datos
     * @param string $cliente datos Json
     * @return string Respuesta json
     */

    public function add($cliente)
    {
        // Agregando
        $ch = curl_init("https://app.alegra.com/api/v1/contacts");
		$headers = array(
		'Accept: application/json',
		'Content-Type: application/json',
		'Authorization: Basic '.AUTHKEY,
		);
		curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $cliente);
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		//curl_setopt($ch, CURLOPT_USERPWD, MAIL.":".TOKEN);

		$response = curl_exec($ch);
		curl_close($ch);
		return $response;
    }
    /**
     * Obtener todos los contactos
     *
     * @return string Json
     */
    public function getAll(){
    	$uri = "https://app.alegra.com/api/v1/contacts/";
		$client   = new Zend_Http_Client();
		$client->setUri($uri);
		$client->setAdapter('Zend_Http_Client_Adapter_Curl');
		$adapter  = $client->getAdapter();
		$adapter->setCurlOption(CURLOPT_HTTPHEADER, array('Accept: application/json','Content-type: application/json'));
		$adapter->setCurlOption(CURLOPT_USERPWD, MAIL.":".TOKEN);
		$response = $client->request('GET');
		return $response->getBody();
    }
     /**
     *  Edita un contacto
     * @param Integer $id id cliente a editar
     * @param string $cliente datos Json
     * @return string $response
     */
    public function update($id,$cliente)
    {
        // editando
		$ch = curl_init("https://app.alegra.com/api/v1/contacts/$id");

		$headers = array(
		'Accept: application/json',
		'Content-Type: application/json',
		'Authorization: Basic '.AUTHKEY,
		);
		curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $cliente);
		
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

		$response = curl_exec($ch);
		curl_close($ch);
		return $response;
    }

    public function delete($id){

		$ch = curl_init("https://app.alegra.com/api/v1/contacts/$id");
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array(
		    'Content-Type: application/json',));
		curl_setopt($ch, CURLOPT_USERPWD, MAIL.':'.TOKEN);

		$resp = curl_exec($ch);

		curl_close($ch);

		return $resp;

    }

    public function buscar($query, $type = "query"){

    	$uri = "https://app.alegra.com/api/v1/contacts/$type/$query";
		$client   = new Zend_Http_Client();
		$client->setUri($uri);
		$client->setAdapter('Zend_Http_Client_Adapter_Curl');
		$adapter  = $client->getAdapter();

		$adapter->setCurlOption(CURLOPT_SSL_VERIFYPEER, array('Accept: application/json','Content-type: application/json'));
		$adapter->setCurlOption(CURLOPT_USERPWD, MAIL.":".TOKEN);
		$response = $client->request('GET');
		return $response->getBody();
    }

}