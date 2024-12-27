<?php

namespace App\Enums;

enum RolesEnum: string
{

    // case NAMEINAPP = 'name-in-database';

    case Admin = 'admin';

    case Expert = 'expert';

    case User = 'user';

    public function labels(): array
    {
        return [
            self::Admin->value  => 'Admin',
            self::Expert->value => 'Expert',
            self::User->value   => 'User',
        ];
    }

    public function label(): string
    {
        return match ($this) {
            self::Admin => 'Admin',
            self::Expert => 'Expert',
            self::User => 'User',
        };
    }

    //    https://spatie.be/docs/laravel-permission/v6/basic-usage/enums

    //    // extra helper to allow for greater customization of displayed values, without disclosing the name/value data directly
    //    public function label(): string
    //    {
    //        return match ($this) {
    //            static::WRITER => 'Writers',
    //            static::EDITOR => 'Editors',
    //            static::USERMANAGER => 'User Managers',
    //        };
    //    }

}
