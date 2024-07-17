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
use GuzzleHttp\Middleware;
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

//middleware('auth:sanctum') je za autorizovano pristupanje ruti
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('api/pacijenti', [PacijentController::class, 'index']);
// Route::get('api/pacijenti/{id}', [PacijentController::class, 'show']);



Route::resource('pacijenti', PacijentController::class)->only(['index','show']);
Route::resource('lekari', LekarController::class);
Route::resource('sestre', SestraController::class);
Route::resource('termini', TerminController::class)->only(['index','show']);
Route::resource('kartoni', KartonController::class)->only(['index','show']);
Route::resource('pregledi', PregledController::class)->only(['index','show']);

//Route::post('/pacijenti',[PacijentController::class, 'store']);

//http://127.0.0.1:8000/api/kartoni/2/pregledi :
Route::get('kartoni/{id}/pregledi', [KartonPregledController::class, 'index'])->name('kartoni.pregledi.index');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

//samo autorizovani korisnici
Route::group(['middleware'=>['auth:sanctum']], function(){
    Route::get('/profile', function(Request $request){
        return auth()->user();
    });
    
  //?   if(auth()->user()->user_type == 'lekar'){   }
    Route::resource('pacijenti', PacijentController::class)->only(['store']);
    Route::resource('termini', TerminController::class)->only(['store']);
    Route::resource('pregledi', PregledController::class)->only(['store']);
    Route::resource('kartoni', KartonController::class)->only(['store']);
    
    //Route::post('/kartoni', [KartonController::class ,'store']);
    

    Route::post('/logout', [AuthController::class, 'logout']);
});