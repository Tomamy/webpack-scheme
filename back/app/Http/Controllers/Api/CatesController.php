<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CatesModel;

class CatesController extends Controller {
	
	public function  getList(){
		$ret = CatesModel::getAll();
		return json_encode($ret);	
	}

}

?>
