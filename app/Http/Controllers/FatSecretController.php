<?php

namespace App\Http\Controllers;

use App\Services\FatSecretService;
use Illuminate\Http\Request;

class FatSecretController extends Controller
{

    public function recipes(Request $request)
    {
        $search = $request->search ?? '';

        $fatSecret = new FatSecretService();

        $recipes = $fatSecret->getRecipes($search);

        foreach ($recipes['recipe'] as $recipe) {
            echo $recipe['recipe_name'] . '<br>';
        }
    }

    public function foods() {}
}
