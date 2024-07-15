<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\KartonController;
use App\Http\Controllers\KartonPregledController;
use App\Http\Controllers\LekarController;
use App\Http\Controllers\PacijentController;
use App\Http\Controllers\PregledController;
use App\Http\Controllers\SestraController;
use App\Http\Controllers\TerminController;
use App\Http\Resources\PacijentResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('api/pacijenti', [PacijentController::class, 'index']);
// Route::get('api/pacijenti/{id}', [PacijentController::class, 'show']);

Route::resource('pacijenti', PacijentController::class);
Route::resource('lekari', LekarController::class);
Route::resource('sestre', SestraController::class);
Route::resource('termini', TerminController::class);
Route::resource('kartoni', KartonController::class);
Route::resource('pregledi', PregledController::class);


//http://127.0.0.1:8000/api/kartoni/2/pregledi :
Route::get('kartoni/{id}/pregledi', [KartonPregledController::class, 'index'])->name('kartoni.pregledi.index');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);