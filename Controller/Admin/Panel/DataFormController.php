<?php

/**
 * @copyright EveryWorkflow. All rights reserved.
 */

declare(strict_types=1);

namespace EveryWorkflow\AdminPanelBundle\Controller\Admin\Panel;

use EveryWorkflow\DataFormBundle\Factory\FieldOptionFactoryInterface;
use EveryWorkflow\DataFormBundle\Factory\FormFactoryInterface;
use EveryWorkflow\DataFormBundle\Factory\FormFieldFactoryInterface;
use EveryWorkflow\DataFormBundle\Field\Select\Option;
use EveryWorkflow\MediaManagerBundle\Field\MediaFileSelectorField;
use EveryWorkflow\MediaManagerBundle\Field\MediaImageGallerySelectorField;
use EveryWorkflow\MediaManagerBundle\Field\MediaImageSelectorField;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DataFormController extends AbstractController
{
    protected FormFactoryInterface $formFactory;
    protected FormFieldFactoryInterface $formFieldFactory;
    protected FieldOptionFactoryInterface $fieldOptionFactory;

    public function __construct(
        FormFactoryInterface $formFactory,
        FormFieldFactoryInterface $formFieldFactory,
        FieldOptionFactoryInterface $fieldOptionFactory
    ) {
        $this->formFactory = $formFactory;
        $this->formFieldFactory = $formFieldFactory;
        $this->fieldOptionFactory = $fieldOptionFactory;
    }

    /**
     * @Route(
     *     path="admin_api/panel/data-form",
     *     name="admin_panel_data_form",
     *     methods="GET"
     * )
     */
    public function __invoke(Request $request): JsonResponse
    {
        $formBuilder = $this->formFactory->create([
            $this->formFieldFactory->createField([
                'label' => 'Email address',
                'name' => 'email',
                'field_type' => 'text_field',
                'input_type' => 'email',
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Password',
                'name' => 'password',
                'field_type' => 'text_field',
                'input_type' => 'password',
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Description',
                'name' => 'description',
                'row_count' => 5,
                'field_type' => 'textarea_field',
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Description markdown',
                'name' => 'description_markdown',
                'field_type' => 'markdown_field',
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Primary color',
                'name' => 'primary_color',
                'field_type' => 'color_picker_field',
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Brand logo',
                'name' => 'brand_logo',
                'field_type' => 'file_field',
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Is enabled',
                'name' => 'is_enabled',
                'field_type' => 'check_field',
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Is disabled',
                'name' => 'is_disabled',
                'field_type' => 'switch_field',
                'checked_label' => 'Disabled',
                'unchecked_label' => 'Enabled',
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Gender',
                'name' => 'gender',
                'field_type' => 'radio_field',
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
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Gender selector',
                'name' => 'gender_selector',
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
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Gender selector searchable',
                'name' => 'gender_selector_searchable',
                'field_type' => 'select_field',
                'is_searchable' => true,
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
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Date of birth',
                'name' => 'dob',
                'field_type' => 'date_picker_field',
                'value' => '1997-06-02',
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Time of birth',
                'name' => 'tob',
                'field_type' => 'time_picker_field',
                'value' => '08:45:16',
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Deleted at',
                'name' => 'deleted_at',
                'field_type' => 'date_time_picker_field',
                'value' => '2019-08-12 08:45:16',
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Leave date range',
                'name' => 'leave_date_range',
                'field_type' => 'date_range_picker_field',
                'value' => ['2019-08-12', '2019-08-19'],
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Break time range',
                'name' => 'break_time_range',
                'field_type' => 'time_range_picker_field',
                'value' => ['08:15:20', '12:25:35'],
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Black friday sale date range',
                'name' => 'black_friday_sale_date_range',
                'field_type' => 'date_time_range_picker_field',
                'value' => ['2019-08-12 08:45:30', '2019-08-26 22:15:30'],
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Input group field',
                'name' => 'input_group_field',
                'field_type' => 'text_field',
                'prefix_text' => 'https://example.com/',
                'suffix_text' => '@example.com',
            ]),
            $this->formFieldFactory->create(MediaImageSelectorField::class, [
                'label' => 'Media image selector',
                'name' => 'media_image_selector',
            ]),
            $this->formFieldFactory->create(MediaImageGallerySelectorField::class, [
                'label' => 'Media image gallery selector',
                'name' => 'media_image_gallery_selector',
            ]),
            $this->formFieldFactory->create(MediaFileSelectorField::class, [
                'label' => 'Media file selector',
                'name' => 'media_file_selector',
            ]),
        ]);

        return (new JsonResponse())->setData($formBuilder->toArray());
    }
}
