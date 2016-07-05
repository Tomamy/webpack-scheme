<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/','Index\IndexController@getIndex');
Route::controller('cates','Api\CatesController');
Route::controller('notes','Api\NotesController');
Route::controller('safe','Api\SafeController');
Route::controller('upload','Api\UploadController');
