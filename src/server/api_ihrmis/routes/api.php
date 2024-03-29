<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\PersonController;
use App\Http\Controllers\RemarksController;
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

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('logout', [AuthController::class, "logout"]);
});

Route::post('login', [AuthController::class, "login"]);
Route::post('register', [AuthController::class, "register"]);
Route::get('user-accounts', [AuthController::class, "getUsers"]);
Route::post('update-user', [AuthController::class, "updateUser"]);

Route::get('get-person', [PersonController::class, "getPerson"]);
Route::post('add-person', [PersonController::class, "addPerson"]);

Route::get('get-remarks', [RemarksController::class, "getRemarks"]);
Route::post('add-remarks', [RemarksController::class, "addRemarks"]);
