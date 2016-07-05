<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\NotesModel;

class NotesController extends Controller {

	public function  getList(){
		$cate_id = $_GET['cate_id'];
		$ret = NotesModel::getAll($cate_id);
		return json_encode($ret);	
	}
	public function getOne(){
		$id = $_GET['id'];
		$ret = NotesModel::getById($id);	
		return json_encode($ret);
	}
	public function postAdd(Request $request){
		$_token = $request -> input('_token');
		$data = array();
		array_push(
			$data,
			$request -> input('cate_id'),	
			$request -> input('html'),
			$request -> input('markdown'),
			strtotime('now'),
			$request -> input('title')
		);
		$ret = NotesModel::add($data);	
		return json_encode($ret);
	}
	public function postEdit(Request $request){
		$_token = $request -> input('_token');
		$id = $_GET['id'];
		$data = array();
		array_push(
			$data,
			$request -> input('cate_id'),	
			$request -> input('html'),
			$request -> input('markdown'),
			strtotime('now'),
			$request -> input('title'),
			$id
		);
		$ret = NotesModel::edit($data);
		return $ret;
	}
}

?>
