<?php
require_once kirby()->roots()->plugins() . '\field-engineer\lib\form.php';
require_once kirby()->roots()->plugins() . '\field-engineer\lib\base.php';
require_once kirby()->roots()->plugins() . '\field-engineer\lib\table-row-hidden.php';
require_once kirby()->roots()->plugins() . '\field-engineer\lib\table-row.php';
	
$kirby->set('field', 'base', __DIR__ . DS . 'fields' . DS . 'base');
$kirby->set('field', 'engineer', __DIR__ . DS . 'fields' . DS . 'engineer');