<?php 

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Redirect;
use Input;
use Response; 

class UploadController extends Controller {
	public function postImages(Request $request){
		$file = $request -> file('imgs');
		$allowed_extensions = ["png", "jpg", "gif"];
		if ($file->getClientOriginalExtension() && !in_array($file->getClientOriginalExtension(), $allowed_extensions)) {
			$ret['status'] = false;
			$ret['count'] = 1;
			$ret['data'] = 'You may only upload png, jpg or gif.';
			return json_encode($ret);
		}
		$destinationPath = 'uploads/images/';
		$extension = $file->getClientOriginalExtension();
		$fileName = str_random(10).'.'.$extension;
		$file->move($destinationPath, $fileName);

		$ret['status'] = true;
		$ret['count'] = 0;
		$ret['data'] = '/'.$destinationPath.$fileName;
		return json_encode($ret);
	}	
}	

?>
