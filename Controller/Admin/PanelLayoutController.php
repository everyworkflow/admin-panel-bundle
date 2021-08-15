<?php

/**
 * @copyright EveryWorkflow. All rights reserved.
 */

declare(strict_types=1);

namespace EveryWorkflow\AdminPanelBundle\Controller\Admin;

use EveryWorkflow\AdminPanelBundle\Component\Admin\FooterComponentInterface;
use EveryWorkflow\AdminPanelBundle\Component\Admin\HeaderComponentInterface;
use EveryWorkflow\AdminPanelBundle\Component\Admin\SidebarComponentInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class PanelLayoutController extends AbstractController
{
    /**
     * @Route(
     *     path="admin_api/panel/layout",
     *     name="admin_panel_layout",
     *     methods="GET"
     * )
     */
    public function __invoke(
        HeaderComponentInterface $headerComponent,
        SidebarComponentInterface $sidebarComponent,
        FooterComponentInterface $footerComponent
    ): JsonResponse {
        $jsonResponse = new JsonResponse();
        $data = [
            'panel_header' => $headerComponent->getData(),
            'panel_sidebar' => $sidebarComponent->getData(),
            'panel_footer' => $footerComponent->getData(),
        ];
        $jsonResponse->setData($data)->setStatusCode(JsonResponse::HTTP_OK);

        return $jsonResponse;
    }
}
