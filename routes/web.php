<?php

use App\Http\Controllers\AlimentoController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Home',['name' => 'uriel']);
// });
Route::resource('posts',PostController::class);

// Route::get('/alimento/{id}', [AlimentoController::class, 'mostrarAlimento']);
Route::get('/alimentos', [AlimentoController::class,'index']);
