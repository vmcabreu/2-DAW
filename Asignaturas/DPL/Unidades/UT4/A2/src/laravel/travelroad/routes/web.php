<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

 Route::get('/', function () {
 $wished = DB::select('select * from places where visited = false');
 $visited = DB::select('select * from places where visited = true');
 return view('travelroad', ['wished' => $wished, 'visited' => $visited]);
 });

 Route::get('/wished', function () {
 $wished = DB::select('select * from places where visited = false');

 return view('/wished/wished', ['wished' => $wished]);
 });

 Route::get('/visited', function () {
 $visited = DB::select('select * from places where visited = true');

 return view('/visited/visited', ['visited' => $visited]);
 });
