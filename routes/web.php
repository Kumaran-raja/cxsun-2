<?php

use App\Http\Controllers\BlogController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\ServiceController;

Route::get('/', function () {
    return Inertia::render('web/welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/abouts', function () {
    return Inertia::render('web/about', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('abouts');

Route::get('/services', function () {
    return Inertia::render('web/service', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('services');

Route::get('/web-contacts', function () {
    return Inertia::render('web/web-contact', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('web-contacts');

Route::get('/accreditations', function () {
    return Inertia::render('web/accreditation', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('accreditations');

Route::get('/blogs', function () {
    return Inertia::render('web/blogs', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('blogs');

Route::get('/terms', function () {
    return Inertia::render('web/TermsAndConditions', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('terms');

Route::get('/privacy', function () {
    return Inertia::render('web/privacypolicy', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('privacy');

Route::get('/return', function () {
    return Inertia::render('web/returnpolicy', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('return');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/service/{id}', [ServiceController::class, 'show'])
    ->name('service.show');

Route::get('/blogs/{id}', [BlogController::class, 'show'])
    ->name('blogs.show');

// pvr routes

Route::get('/pvr', function () {
    return Inertia::render('web/pvr/Home', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('pvrhome');

Route::get('/pvrabouts', function () {
    return Inertia::render('web/pvr/about', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('pvrabouts');

Route::get('/pvrproducts', function () {
    return Inertia::render('web/pvr/Product', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('pvrproducts');

Route::get('/pvrweb-contacts', function () {
    return Inertia::render('web/pvr/Contact', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('pvrweb-contacts');

Route::get('/pvrmanufacture', function () {
    return Inertia::render('web/pvr/Manufacture', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('pvrmanufacture');

require __DIR__ . '/settings.php';
