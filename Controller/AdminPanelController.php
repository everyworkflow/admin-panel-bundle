<?php

/**
 * @copyright EveryWorkflow. All rights reserved.
 */

declare(strict_types=1);

namespace EveryWorkflow\AdminPanelBundle\Controller;

use EveryWorkflow\CoreBundle\Annotation\EwRoute;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class AdminPanelController extends AbstractController
{
    #[EwRoute(
        path: '/admin/{wildcard}',
        name: 'admin_panel',
        priority: -500,
        methods: 'GET',
        requirements: ['wildcard' => '.*']
    )]
    public function __invoke(): Response
    {
        return $this->render('admin-panel.html.twig', [
            'page_title' => 'Admin Panel',
        ]);
    }
}
