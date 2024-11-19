<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LiftController;
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


require __DIR__.'/auth.php';
