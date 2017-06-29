<?php
if(class_exists('Panel') && site()->user()) {
	require_once __DIR__ . DS . 'lib' . DS . 'form.php';
	require_once __DIR__ . DS . 'lib' . DS . 'field.php';
	require_once __DIR__ . DS . 'lib' . DS . 'tpl.php';
	require_once __DIR__ . DS . 'lib' . DS . 'presentation.php';
    require_once __DIR__ . DS . 'lib' . DS . 'presentation-array.php';
	require_once __DIR__ . DS . 'lib' . DS . 'outline.php';
	
	$kirby->set('field', 'engineer', __DIR__ . DS . 'fields' . DS . 'engineer');
}