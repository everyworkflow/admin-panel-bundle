<?php

/**
 * @copyright EveryWorkflow. All rights reserved.
 */

declare(strict_types=1);

namespace EveryWorkflow\AdminPanelBundle;

use EveryWorkflow\AdminPanelBundle\DependencyInjection\AdminPanelExtension;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class EveryWorkflowAdminPanelBundle extends Bundle
{
    public function getContainerExtension()
    {
        return new AdminPanelExtension();
    }
}
