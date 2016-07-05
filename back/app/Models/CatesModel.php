<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class CatesModel extends Model {
	public $table = 'cates';

	public static function getAll(){
		$data = DB::select('select * from cates');
		if(count($data) >  0){
			$ret['status']	= true;
			$ret['count'] = 0;
			$ret['data'] = $data;
		}else if(count($notes) == 0){
			$ret['status'] = false;
			$ret['count'] = 2;
			$ret['data'] = '空记录!';
		}else{
			$ret['status'] = false;
			$ret['count'] = 3;
			$ret['data'] = '操作失败!';
		}
		return $ret;
	}
}

?>
