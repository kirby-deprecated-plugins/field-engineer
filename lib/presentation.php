<?php
namespace Engineer;
use egr;

class Presentation {
	function __construct() {
		$this->Field = new \Engineer\field;
	}
	function field() {
		return $this->Field;
	}
	function set($data, $value) {
		$new = $data;
		unset($new['fieldsets'], $new['fields']);
		if(! empty($value)) {
			foreach($value as $fieldset) {
				$set = kirby()->get('option', 'egr.set', 0);
				kirby()->set('option', 'egr.set', $set + 1);

				$fieldset_name = (isset($fieldset['_fieldset'])) ? $fieldset['_fieldset'] : 'default';
				$fieldset_data = $data['fieldsets'][$fieldset_name];
				$labels = (isset($data['fieldsets'][$fieldset_name]['labels'])) ? $data['fieldsets'][$fieldset_name]['labels'] : array();
				$new['sets']['set_' . $set]['name'] = $fieldset_name;
				$new['sets']['set_' . $set]['labels'] = $labels;
				
				if(!empty($fieldset_data['fields'])) {
					foreach($fieldset_data['fields'] as $field_name => $field) {
						$data_value = (isset($fieldset[$field_name])) ? $fieldset[$field_name] : '';
						$field_type = $field['type'];

						$id = kirby()->get('option', 'egr.id', 0);
						kirby()->set('option', 'egr.id', $id + 1);
						
						if($field_type == 'engineer') {
							$new['sets']['set_' . $set]['fields']['id_' . $id] = $this->set($field, $data_value);
							$new['sets']['set_' . $set]['fields']['id_' . $id]['name'] = $field_name;
						} else {
							$extra = array(
								'value' => $data_value,
								'name' => $field_name,
								'_fieldset' => $fieldset_name
							);
							$new['sets']['set_' . $set]['fields']['id_' . $id] = array_merge($field, $extra);
						}
					}
				}
			}
		}
		return $new;
	}

	function render($args) {
		extract($args);
		$out = '';
		if(!empty($set['fields'])) {
			foreach($set['fields'] as $field_id => $field) {
				if($field['type'] != 'engineer') {
					$out .= $this->field()->data($field['name'], $field, $instance->page, true);
				} else {
					$out .= egr::snippet('presentation', array(
						'presentation' => $field,
						'field_name' => $field['name'],
						'id' => $id . ',' . $field['name'],
						'instance' => $instance
					));
				}
			}
		}
		return $out;
	}
}