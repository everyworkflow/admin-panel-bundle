<?php

/**
 * @copyright EveryWorkflow. All rights reserved.
 */

declare(strict_types=1);

namespace EveryWorkflow\AdminPanelBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminPanelController extends AbstractController
{
    /**
     * @Route(
     *     path="/admin/{wildcard}",
     *     name="admin_panel",
     *     priority=-500,
     *     methods="GET",
     *     requirements={"wildcard": ".*"}
     * )
     */
    public function __invoke(): Response
    {
        return $this->render('admin-panel.html.twig', [
            'page_title' => 'Admin Panel',
        ]);
    }
}
