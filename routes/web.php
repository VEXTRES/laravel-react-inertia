<?php

use App\Http\Controllers\AlimentoController;
use App\Http\Controllers\FatSecretController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Home',['name' => 'uriel']);
// });
Route::resource('posts', PostController::class);

// Route::get('/alimento/{id}', [AlimentoController::class, 'mostrarAlimento']);
Route::get('/alimentos', [AlimentoController::class, 'index']);


Route::prefix('fat-secret')->group(function () {
    Route::get('recipes', [FatSecretController::class, 'recipes']);
    Route::get('foods', [FatSecretController::class, 'foods']);
});
