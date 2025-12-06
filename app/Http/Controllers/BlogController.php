<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class BlogController extends Controller
{
    public function show($id)
    {
        return Inertia::render('web/singleblog', [
            'id' => $id,
        ]);
    }
}
