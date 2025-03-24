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
        Schema::create('pregleds', function (Blueprint $table) {
            $table->id();
            $table->string('simptomi');
            $table->string('dijagnoza');
            $table->string('terapija');

            $table->foreignId('termin_id');
            $table->foreignId('karton_id');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pregleds');
    }
};
