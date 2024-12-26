<?php

namespace App\Http\Controllers;

use App\Models\Lift;
use App\Http\Requests\StoreLiftRequest;
use App\Http\Requests\UpdateLiftRequest;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class LiftController extends Controller
{

    /**
     * Display a listing of the resource.
     */

    // Job::with('employer')->get(); //Laracasts 13. Eager Дщфвштп

    public function index()
    {
        // $lifts = Lift::all();
        // $lifts = Lift::query()->paginate(3)->withQueryString();

        // $lifts = Lift::all()->map(fn($lift)=>[
        // 'name' => $lift->name
        // ])

        /*     $lifts = Lift::query()->paginate(10);
            return Inertia::render(
                'Lift/Index', ['lifts' => $lifts]
            ); */

        $lifts = Lift::query()
                     ->when(
                         Request::input('search'), function ($query, $search) {
                         //Request::input('search') == $search
                         $query->where('reg_number', 'like', "%{$search}%");
                     })
                     ->when(
                         Request::input('street'), function ($query, $search) {
                         //Request::input('search') == $search
                         $query->where('address', 'like', "%{$search}%");
                         })
                     ->paginate(100)
                     ->withQueryString();
        //        dd($lifts);
        //        ->through(fn($lift)=>[
        //            'reg_number' => $lift->reg_number
        //        ]);


        return Inertia::render(
            'Lift/Index', [
            'lifts'   => $lifts,
            'filters' => Request::only(['search', 'street']),
        ],
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
        Lift::create($request->validate([
            'username' => ['required', 'min:50'],
            'email'    => ['required', 'min:50', 'email'],
            'password' => ['required', 'min:50'],
        ]));
        // dd($request->all());
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
