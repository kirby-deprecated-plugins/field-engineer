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
				$new['sets']['set_' . $set]['name'] = $fieldset_name;
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

	function prepare($field, $level = -1) {		
		$out = $this->cleanup($field);
		$out = $this->level($out, $level);
		$out = $this->default($out, $field);
		$out = $this->fieldsets($out, $field);
		$out = $this->loop($out);
		return $out;
	}

	function cleanup($out) {
		unset($out['fieldsets'], $out['fields']);
		return $out;
	}

	function level($out, $level) {
		if($out['type'] == 'engineer') {
			$out['_level'] = $level + 1;
		}
		return $out;
	}

	function default($out, $field) {
		if(isset($field['fields'])) {
			$out['fieldsets']['default']['fields'] = $field['fields'];
		} else {
			$out['fieldsets']['default']['fields'] = array();
		}
		return $out;
	}

	function fieldsets($out, $field) {
		if(isset($field['fieldsets'])) {
			$out['fieldsets'] += $field['fieldsets'];
		}
		return $out;
	}


	function loop($out) {
		if(isset($out['fieldsets'])) {
			foreach($out['fieldsets'] as $fieldset_name => $fieldset) {
				if(!empty($fieldset['fields'])) {
					$dropdown_label = (isset($fieldset['label'])) ? $fieldset['label'] : $fieldset_name;
					$dropdown[$fieldset_name] = $dropdown_label;
					foreach($fieldset['fields'] as $field_name => $field) {
						if($field['type'] == 'engineer') {
							$out['fieldsets'][$fieldset_name]['fields'][$field_name] = $this->prepare($field, $out['_level']);
						}
					}
				}
			}
			$out['_dropdown'] = $dropdown;
		}
		return $out;
	}
}