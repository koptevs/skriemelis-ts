<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LiftSeeder extends Seeder
{

    public $lifti_source;

    public function run(): void
    {
        $this->lifti_source = include 'sources/lifti.php';

        foreach ($this->lifti_source as $lifts) {
            // code...

            $iela_or_bulvaris         = '';
            $iela_array               = explode(' ',
                $lifts['lifts_adrese_iela']);
            $last_word_in_adrese_iela = $iela_array[count($iela_array) - 1];
            if (($last_word_in_adrese_iela !== 'bulvāris') && ($last_word_in_adrese_iela !== 'bulvaris') && ($last_word_in_adrese_iela !== 'gatve') && ($last_word_in_adrese_iela !== 'prospekts') && ($last_word_in_adrese_iela !== 'aleja') && ($last_word_in_adrese_iela !== 'līnija')) {
                $iela_or_bulvaris = ' iela';
            }


            $address = $lifts['lifts_adrese_iela'].$iela_or_bulvaris;
            // var_dump($lifts);
            $address = $address." ".$lifts['lifts_adrese_maja'] ?? null;
            $address = $lifts['lifts_adrese_kapnu_telpa'] ? $address."-".$lifts['lifts_adrese_kapnu_telpa'] : $address;
            $address = $lifts['lifts_adrese_novads'] ? $address.", ".$lifts['lifts_adrese_novads'] : $address;
            $address = $lifts['lifts_adrese_pagasts'] ? $address.", ".$lifts['lifts_adrese_pagasts'] : $address;
            //            $address = $address . ", " . $lifts['lifts_adrese_pilseta'];
            DB::table('lifts')->insert(
                [
                    'reg_number'        => $lifts['lifts_reg_nr'],
                    'bir_url'           => 'https://bir.lv/apex/f?p=103:84:8971621361413::NO::P84_EQUIPMENT_ID:132805&cs=142B1959A1C9FDD8BFA930D09ACBD041F',
                    'lift_type'         => $lifts['lifts_tips'],
                    'lift_category'     => $lifts['lifts_kategorija'],
                    'factory_number'    => $lifts['lifts_rupn_nr'],
                    'model'             => $lifts['lifts_modelis'] ?? null,
                    'speed'             => $lifts['lifts_atrums'] ?? null,
                    'load'              => intval($lifts['lifts_celtspeja']),
                    'manufacturer'      => $lifts['lifts_razotajs'] ?? null,
                    // 'manufacture_year' => $lifts['lifts_razosanas_gada'] ?? null,
                    'installer'         => $lifts['lifts_uzstaditajs'] ?? null,
                    'installation_year' => intval($lifts['lifts_uzstadisanas_gads']),
                    //                    'floors_total' => $lifts['stavu_skaits'] ?? null,
                    'floors_serviced'   => intval($lifts['lifts_stavu_skaits']) ?? null,
                    'address_city'      => $lifts['lifts_adrese_pilseta'] ?? 'Rīga',
                    'address_country'   => $lifts['lifts_adrese_valsts'] ?? 'Latvija',

                    'address' => $address,

                    'address_postal_code' => $lifts['lifts_adrese_indeks'],
                    'latitude'            => isset($lifts['lifts_latitude']) ? floatval($lifts['lifts_latitude']) : null,
                    'longitude'           => isset($lifts['lifts_longitude']) ? floatval($lifts['lifts_longitude']) : null,
                    'notes'               => $lifts['lifts_piezimes'] ?? null,
                    //                    'lift_manager_id' => comes from inspection seeder
                    'entry_code'          => $lifts['lifts_code'] ?? null,
                    'building_series'     => $lifts['lifts_adrese_majas_serija'] ?? null,


                ]
            );
        }
    }

}
