export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    roles: string[];
    permissions: string[];
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};

export interface Lift {
    id: number;
    lift_manager_id: string;
    reg_number: string;
    bir_url: string;
    type: string;
    category: string;
    factory_number: string;
    model: string;
    speed: string;
    load: string;
    manufacturer: string;
    installer: string;
    installation_year: string;
    floors_serviced: string;
    address_country: string;
    address_city: string;
    address: string;
    address_postal_code: string;
    google_coordinates: string;
    building_series: string;
    notes: string;
    inspection_status: string;
    entry_code: string;
    next_inspection_date: string;
    created_at: string;
    updated_at: string;
}
