<?php

namespace App\Http\Controllers;

use App\Models\Lift;
use App\Http\Requests\StoreLiftRequest;
use App\Http\Requests\UpdateLiftRequest;
use Inertia\Inertia;

class LiftController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $lifts = Lift::all();
        // dd($lifts);
        return Inertia::render(
            'Lift/Index', ['lifts' => $lifts]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render(
            'Lift/Create'
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLiftRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Lift $lift)
    {
        return Inertia::render(
            'Lift/Show'
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lift $lift)
    {
        return Inertia::render(
            'Lift/Edit'
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLiftRequest $request, Lift $lift)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lift $lift)
    {
        //
    }
}
