<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class AlimentoController extends Controller
{
    public function index(Request $request)
    {
        // Crea una instancia del cliente Guzzle
        $client = new Client();

        // Define la URL del endpoint
        $url = 'https://trackapi.nutritionix.com/v2/search/instant';

        // Obtén la consulta de búsqueda
        $query = $request->input('query', 'hamburger'); // Usa 'hamburger' como término de búsqueda por defecto

        // Realiza la solicitud a la API
        try {
            $response = $client->request('GET', $url, [
                'headers' => [
                    'Content-Type' => 'application/json', // Cambiado a 'application/json'
                    'x-app-id' => '8771a1a4', // Reemplaza con tu App ID
                    'x-app-key' => '5b4a02d178282b0836f54d4ff285c6fb', // Reemplaza con tu App Key
                ],
                'query' => [
                    'query' => $query,
                ],
            ]);

            // Obtiene el cuerpo de la respuesta
            $data = json_decode($response->getBody(), true);

            // Retorna los datos como respuesta
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error al consultar la API: ' . $e->getMessage()], 500);
        }
    }
}
