<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class NotesModel extends Model {
	public $table = 'notes';

	public static function getAll($cate_id){
		$data = DB::select('select * from notes where cate_id = ?',[$cate_id]);
		if(count($data) > 0){
			$ret['status']	= true;
			$ret['count'] = 0;
			$ret['data'] = $data;
		}else if(count($data) == 0){
			$ret['status'] = false;
			$ret['count'] = 2;
			$ret['data'] = '空记录!';
		}else {
			$ret['status'] = false;
			$ret['count'] = 3;
			$ret['data'] = '操作失败!';
		}
		return $ret;
	}
	public static function getById($id){
		$vals = array();
		array_push($vals,$id);
		$data = DB::select('select * from notes where id = ?',$vals);
		if(count($data) > 0){
			$ret['status']	= true;
			$ret['count'] = 0;
			$ret['data'] = $data;
		}else if(count($data) == 0){
			$ret['status'] = false;
			$ret['count'] = 2;
			$ret['data'] = '空记录!';
		}else {
			$ret['status'] = false;
			$ret['count'] = 3;
			$ret['data'] = '操作失败!';
		}
		return $ret;
	}
	public static function add($data){
		$data = DB::insert('insert into notes(cate_id,html,markdown,create_timestamp,title) values(?,?,?,?,?)',$data);	
		if($data){
			$ret['status'] = true;
			$ret['count'] = 0;
			$ret['data'] = '添加成功';
		}else {
			$ret['status'] = false;
			$ret['count'] = 3;
			$ret['data'] = '操作失败';
		}
		return $ret;
	}
	public static function edit($data){
		$data = DB::insert('update notes set cate_id = ?, html = ?, markdown = ?, create_timestamp = ?, title = ? where id = ?',$data);	
		if($data){
			$ret['status'] = true;
			$ret['count'] = 0;
			$ret['data'] = '更新成功';
		}else {
			$ret['status'] = false;
			$ret['count'] = 3;
			$ret['data'] = '操作失败';
		}
		return $ret;
	}

}

?>
