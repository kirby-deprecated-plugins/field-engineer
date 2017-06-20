<?php
$data_add = '';
if(count($fieldset_names) == 1) {
	reset($fieldset_names);
	$data_add = ' data-add="' . key($fieldset_names) . '"';
}
echo egr::snippet('row-actions', array('data_add' => $data_add, 'fieldset_names' => $fieldset_names));
echo egr::snippet('row-empty', array('data_add' => $data_add, 'fieldset_names' => $fieldset_names));