<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LiftController;
use App\Http\Controllers\LiftManagerController;
use App\Http\Controllers\InspectionController;
use App\Http\Controllers\MechanicController;
use Inertia\Inertia;

//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin'       => Route::has('login'),
//        'canRegister'    => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion'     => PHP_VERSION,
//    ]);
//});
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/pdf', function () {
    return Inertia::render('Pdf/Pdf');
})->name('pdf');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

//Middleware: auth

Route::middleware('auth')->group(function () {

//    Profile

    Route::get('/profile', [ProfileController::class, 'edit'])
         ->name('profile.edit');

    Route::patch('/profile', [ProfileController::class, 'update'])
         ->name('profile.update');

    Route::delete('/profile', [ProfileController::class, 'destroy'])
         ->name('profile.destroy');

//    Lifts

    Route::get('/lifts', [LiftController::class, 'index'])
         ->name('lifts.index');

    Route::get('/lifts/create', [LiftController::class, 'create'])
         ->name('lifts.create');

    Route::post('/lifts', [LiftController::class, 'store'])
         ->name('lifts.store');

    Route::get('/lifts/{lift}', [LiftController::class, 'show'])
         ->name('lifts.show');

    Route::get('/lifts/{lift}/edit', [LiftController::class, 'edit'])
         ->name('lifts.edit');

    Route::patch('/lifts/{lift}', [LiftController::class, 'update'])
         ->name('lifts.update');

    Route::delete('/lifts/{lift}', [LiftController::class, 'destroy'])
         ->name('lifts.destroy');

    //    Lift Managers

    Route::get('/lift-managers', [LiftManagerController::class, 'index'])
         ->name('lift-managers.index');

    Route::get('/lift-managers/create',
        [LiftManagerController::class, 'create'])
         ->name('lift-managers.create');

    Route::post('/lift-managers', [LiftManagerController::class, 'store'])
         ->name('lift-managers.store');

    Route::get('/lift-managers/{liftManager}',
        [LiftManagerController::class, 'show'])
         ->name('lift-managers.show');

    Route::get('/lift-managers/{liftManager}/edit',
        [LiftManagerController::class, 'edit'])
         ->name('lift-managers.edit');

    Route::patch('/lift-managers/{liftManager}',
        [LiftManagerController::class, 'update'])
         ->name('lift-managers.update');

    Route::delete('/lift-managers/{liftManager}',
        [LiftManagerController::class, 'destroy'])
         ->name('lift-managers.destroy');

    //    Inspections

    Route::get('/inspections', [InspectionController::class, 'index'])
         ->name('inspections.index');

    Route::get('/inspections/create', [InspectionController::class, 'create'])
         ->name('inspections.create');

    Route::post('/inspections', [InspectionController::class, 'store'])
         ->name('inspections.store');

    Route::get('/inspections/{inspection}',
        [InspectionController::class, 'show'])
         ->name('inspections.show');

    Route::get('/inspections/{inspection}/edit',
        [InspectionController::class, 'edit'])
         ->name('inspections.edit');

    Route::patch('/inspections/{inspection}',
        [InspectionController::class, 'update'])
         ->name('inspections.update');

    Route::delete('/inspections/{inspection}',
        [InspectionController::class, 'destroy'])
         ->name('inspections.destroy');

    //    Mechanics

    Route::get('/mechanics', [MechanicController::class, 'index'])
         ->name('mechanics.index');

    Route::get('/mechanics/create', [MechanicController::class, 'create'])
         ->name('mechanics.create');

    Route::post('/mechanics', [MechanicController::class, 'store'])
         ->name('mechanics.store');

    Route::get('/mechanics/{mechanic}', [MechanicController::class, 'show'])
         ->name('mechanics.show');

    Route::get('/mechanics/{mechanic}/edit',
        [MechanicController::class, 'edit'])
         ->name('mechanics.edit');

    Route::patch('/mechanics/{mechanic}', [MechanicController::class, 'update'])
         ->name('mechanics.update');

    Route::delete('/mechanics/{mechanic}',
        [MechanicController::class, 'destroy'])
         ->name('mechanics.destroy');
});


require __DIR__.'/auth.php';
