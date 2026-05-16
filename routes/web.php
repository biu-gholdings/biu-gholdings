<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Home'))->name('home');
Route::get('/pt', fn () => Inertia::render('HomePt'))->name('home.pt');

Route::get('/about', fn () => Inertia::render('About'))->name('about');
Route::get('/sobre', fn () => Inertia::render('AboutPt'))->name('about.pt');

Route::get('/leadership', fn () => Inertia::render('Leadership'))->name('leadership');
Route::get('/lideranca', fn () => Inertia::render('LeadershipPt'))->name('leadership.pt');

Route::get('/corporate-structure', fn () => Inertia::render('CorporateStructure'))->name('corporate.structure');
Route::get('/estrutura-corporativa', fn () => Inertia::render('CorporateStructurePt'))->name('corporate.structure.pt');

Route::get('/subsidiaries', fn () => Inertia::render('Subsidiaries'))->name('subsidiaries');
Route::get('/subsidiarias', fn () => Inertia::render('SubsidiariesPt'))->name('subsidiaries.pt');

Route::get('/contact', fn () => Inertia::render('Contact'))->name('contact');
Route::get('/contacto', fn () => Inertia::render('ContactPt'))->name('contact.pt');

Route::get('/investor-relations', fn () => Inertia::render('InvestorRelations'))->name('investor.relations');
Route::get('/relacoes-com-investidores', fn () => Inertia::render('InvestorRelationsPt'))->name('investor.relations.pt');
