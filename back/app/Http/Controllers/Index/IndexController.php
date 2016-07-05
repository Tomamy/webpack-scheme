<?php
namespace App\Http\Controllers\Index;
use App\Http\Controllers\Controller;
use Redirect;
class IndexController extends Controller {
	public function getIndex(){
		return Redirect::to('/webpackdemo');	
	}
}

?>
