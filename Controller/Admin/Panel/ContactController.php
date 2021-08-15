<?php

/**
 * @copyright EveryWorkflow. All rights reserved.
 */

declare(strict_types=1);

namespace EveryWorkflow\AdminPanelBundle\Controller\Admin\Panel;

use EveryWorkflow\DataFormBundle\Factory\FieldOptionFactoryInterface;
use EveryWorkflow\DataFormBundle\Factory\FormFieldFactoryInterface;
use EveryWorkflow\DataFormBundle\Field\Select\Option;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Uid\Ulid;

class ContactController extends AbstractController
{
    protected FormFieldFactoryInterface $formFieldFactory;
    protected FieldOptionFactoryInterface $fieldOptionFactory;

    public function __construct(
        FormFieldFactoryInterface $formFieldFactory,
        FieldOptionFactoryInterface $fieldOptionFactory
    ) {
        $this->formFieldFactory = $formFieldFactory;
        $this->fieldOptionFactory = $fieldOptionFactory;
    }

    /**
     * @Route(
     *     path="admin_api/panel/contact",
     *     name="admin_panel_contact",
     *     methods="GET"
     * )
     */
    public function __invoke(Request $request): JsonResponse
    {
        $jsonResponse = new JsonResponse();

        return $jsonResponse->setData($this->getAllData());
    }

    protected function getAllData(): array
    {
        return [
            $this->formFieldFactory->createField([
                'label' => 'Email address',
                'name' => 'email-' . (string)new Ulid(),
                'input_type' => 'email',
            ])->toArray(),
            $this->formFieldFactory->createField([
                'label' => 'Password',
                'name' => 'password-' . (string)new Ulid(),
                'input_type' => 'password',
            ])->toArray(),
            $this->formFieldFactory->createField([
                'label' => 'Description',
                'name' => 'description-' . (string)new Ulid(),
                'field_type' => 'text_area_field',
            ])->toArray(),
            $this->formFieldFactory->createField([
                'label' => 'Description 2',
                'name' => 'description-2-' . (string)new Ulid(),
                'field_type' => 'text_area_field',
            ])->toArray(),
            $this->formFieldFactory->createField([
                'label' => 'Primary color',
                'name' => 'primary_color-' . (string)new Ulid(),
                'value' => '#ff0000',
                'field_type' => 'color_picker_field',
                'help_text' => 'This color is used in frontend.',
            ])->toArray(),
            $this->formFieldFactory->createField([
                'field_type' => 'file_field',
                'label' => 'Brand logo',
                'name' => 'brand_logo-' . (string)new Ulid(),
            ])->toArray(),
            $this->formFieldFactory->createField([
                'label' => 'Is Enabled',
                'name' => 'is_enabled-' . (string)new Ulid(),
                'field_type' => 'check_field',
                'help_text' => 'Enabled',
            ])->toArray(),
            $this->formFieldFactory->createField([
                'label' => 'Is Disabled',
                'name' => 'is_disabled-' . (string)new Ulid(),
                'field_type' => 'check_field',
                'help_text' => 'Is disabled?',
            ])->toArray(),
            $this->formFieldFactory->createField([
                'label' => 'Gender',
                'name' => 'gender-' . (string)new Ulid(),
                'field_type' => 'select_field',
                'options' => [
                    $this->fieldOptionFactory->create(Option::class, [
                        'key' => 'male',
                        'value' => 'Male',
                    ]),
                    $this->fieldOptionFactory->create(Option::class, [
                        'key' => 'female',
                        'value' => 'Female',
                    ]),
                    $this->fieldOptionFactory->create(Option::class, [
                        'key' => 'other',
                        'value' => 'Other',
                    ]),
                ],
            ])->toArray(),
            $this->formFieldFactory->createField([
                'label' => 'Slug',
                'name' => 'slug-' . (string)new Ulid(),
            ])->toArray(),
            $this->formFieldFactory->createField([
                'label' => 'Input group field',
                'name' => 'input_group_field-' . (string)new Ulid(),
                'field_type' => 'check_field',
                'prefix_text' => 'https://example.com/',
                'suffix_text' => '@example.com',
                'help_text' => 'Is disabled?',
            ])->toArray(),
        ];
    }
}
