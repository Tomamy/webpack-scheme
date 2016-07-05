<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SafeController extends Controller {
	public function  getToken(){
		$_token = csrf_token();
		return $_token;	
	}
}

?>
