<?php

namespace App\Http\Middleware;

use App\Http\Resources\AuthUserResouce;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{

    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = $request->user();
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $user ? new AuthUserResouce($user) : null
                //                'user' => $request->user(),
            ],
            //            'ziggy' => fn () => [
            //                ...(new Ziggy)->toArray(),
            //                'location' => $request->url(),
            //            ]
            // 'fathom' => [
            //     'canonical_url' => $request->getSchemeAndHttpHost().$request->route()->toSymfonyRoute()->getPath(),
            // ],
        ];
    }

}
