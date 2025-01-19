<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inspection extends Model
{
//    use HasFactory;

    protected $table = 'inspections';

    protected $guarded = false;

    public function lift(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Lift::class, 'lift_id', 'id');
    }
}
