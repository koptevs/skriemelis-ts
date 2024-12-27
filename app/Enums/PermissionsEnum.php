<?php

namespace App\Enums;

enum PermissionsEnum: string
{

    case ManageUsers = 'manage_users';
    case ManageLifts = 'manage_lifts';
    case ManageLiftManagers = 'manage_lift_managers';
    case ManageInspections = 'manage_inspections';


}
