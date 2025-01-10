<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lifts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('lift_manager_id')->nullable();
            $table->string('reg_number', 32)->unique();
            $table->string('bir_url', 256)->default('');
            $table->enum('lift_type', ['elektriskais', 'hidrauliskais']);
            $table->enum('lift_category', ['1', '2', '3', 'CE']);
            $table->string('factory_number', 32);
            $table->string('model', 64)->nullable();
            $table->decimal('speed', 8, 2)->nullable();
            $table->smallInteger('load')->unsigned();
            $table->string('manufacturer', 128)->nullable();
            $table->string('installer', 128)->nullable();
            $table->smallInteger('installation_year')->unsigned();
            $table->tinyInteger('floors_serviced')->unsigned()->nullable();
            $table->string('address_country', 64);
            $table->string('address_city', 64);
            $table->string('address', 256);
            $table->string('address_postal_code', 8);
            $table->decimal('latitude', 10, 8)->nullable();
            $table->decimal('longitude', 11, 8)->nullable();
            $table->string('building_series', 16)->nullable();
            $table->text('notes')->nullable();
            $table->enum('inspection_status', ['X', '0', '1', '2', '3'])->default('X');
            $table->string('entry_code', 128)->nullable();
            $table->date('next_inspection_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lifts');
    }
};
