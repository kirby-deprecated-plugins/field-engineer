<?php
include __DIR__ . DS . 'lib' . DS . 'form.php';
include __DIR__ . DS . 'lib' . DS . 'base.php';
include __DIR__ . DS . 'lib' . DS . 'table-row-hidden.php';
include __DIR__ . DS . 'lib' . DS . 'items-row-hidden.php';
include __DIR__ . DS . 'lib' . DS . 'table-row.php';
include __DIR__ . DS . 'lib' . DS . 'items-row.php';

$prefix = 'engineer';
$fields = array(
	'',
	'image',
	'select',
	'checkboxes',
	'page',
	'user',
	'radio',
	'tags',
);

foreach($fields as $field) {
	$kirby->set('field', $prefix . $field, __DIR__ . DS . 'fields' . DS . $prefix . $field);
}