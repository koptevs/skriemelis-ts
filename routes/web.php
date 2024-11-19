<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LiftController;
use App\Http\Controllers\LiftManagerController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/test', function () {
    return Inertia::render('Test');
})->name('test');

Route::get('/pdf', function () {
    return Inertia::render('Pdf/Pdf');
})->name('pdf');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/lifts', [LiftController::class, 'index'])->name('lifts.index');
Route::get('/lifts/create', [LiftController::class, 'create'])->name('lifts.create');
Route::post('/lifts', [LiftController::class, 'store'])->name('lifts.store');
Route::get('/lifts/{lift}', [LiftController::class, 'show'])->name('lifts.show');
Route::get('/lifts/{lift}/edit', [LiftController::class, 'edit'])->name('lifts.edit');
Route::patch('/lifts/{lift}', [LiftController::class, 'update'])->name('lifts.update');
Route::delete('/lifts/{lift}', [LiftController::class, 'destroy'])->name('lifts.destroy');

Route::get('/lift-managers', [LiftManagerController::class, 'index'])->name('lift-managers.index');
Route::get('/lift-managers/create', [LiftManagerController::class, 'create'])->name('lift-managers.create');
Route::post('/lift-managers', [LiftManagerController::class, 'store'])->name('lift-managers.store');
Route::get('/lift-managers/{liftManager}', [LiftManagerController::class, 'show'])->name('lift-managers.show');
Route::get('/lift-managers/{liftManager}/edit', [LiftManagerController::class, 'edit'])->name('lift-managers.edit');
Route::patch('/lift-managers/{liftManager}', [LiftManagerController::class, 'update'])->name('lift-managers.update');
Route::delete('/lift-managers/{liftManager}', [LiftManagerController::class, 'destroy'])->name('lift-managers.destroy');


require __DIR__.'/auth.php';
