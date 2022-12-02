<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/products', 'ProductController@index');
Route::get('/products/{product}', 'ProductController@find');
Route::post('/products','ProductsController@store');
Route::put('/products/{product}','ProductsController@update');
Route::delete('/products/{product}', 'ProductsController@delete');
Route::post('/login', 'UserController@login');
Route::post('/register', 'UserController@register');
