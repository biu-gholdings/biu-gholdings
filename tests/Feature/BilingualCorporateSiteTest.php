<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\Route;
use PHPUnit\Framework\Attributes\DataProvider;
use Tests\TestCase;

class BilingualCorporateSiteTest extends TestCase
{
    /**
     * @return array<string, array{0: string, 1: string}>
     */
    public static function publicPagesProvider(): array
    {
        return [
            'home en' => ['/', 'Home'],
            'home pt' => ['/pt', 'HomePt'],
            'about en' => ['/about', 'About'],
            'about pt' => ['/sobre', 'AboutPt'],
            'leadership en' => ['/leadership', 'Leadership'],
            'leadership pt' => ['/lideranca', 'LeadershipPt'],
            'corporate structure en' => ['/corporate-structure', 'CorporateStructure'],
            'corporate structure pt' => ['/estrutura-corporativa', 'CorporateStructurePt'],
            'subsidiaries en' => ['/subsidiaries', 'Subsidiaries'],
            'subsidiaries pt' => ['/subsidiarias', 'SubsidiariesPt'],
            'investor relations en' => ['/investor-relations', 'InvestorRelations'],
            'investor relations pt' => ['/relacoes-com-investidores', 'InvestorRelationsPt'],
            'contact en' => ['/contact', 'Contact'],
            'contact pt' => ['/contacto', 'ContactPt'],
        ];
    }

    #[DataProvider('publicPagesProvider')]
    public function test_public_bilingual_pages_render_successfully(string $uri, string $component): void
    {
        $this->get($uri)
            ->assertOk()
            ->assertInertia(fn ($page) => $page->component($component));
    }

    public function test_navigation_and_locale_toggle_route_names_are_registered(): void
    {
        $routeNames = [
            'home',
            'home.pt',
            'about',
            'about.pt',
            'leadership',
            'leadership.pt',
            'corporate.structure',
            'corporate.structure.pt',
            'subsidiaries',
            'subsidiaries.pt',
            'investor.relations',
            'investor.relations.pt',
            'contact',
            'contact.pt',
        ];

        foreach ($routeNames as $name) {
            $this->assertTrue(Route::has($name), "Missing route: {$name}");
        }

        $this->assertFalse(Route::has('ir'));
        $this->assertFalse(Route::has('ir.pt'));
    }
}
