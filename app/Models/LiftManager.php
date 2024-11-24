<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LiftManager extends Model
{
    protected $guarded = false;

    public function lifts()
    {
        return $this->hasMany(Lift::class);
    }
}
