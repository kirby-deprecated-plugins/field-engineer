<?php
namespace Engineer;

class PresentationArray {
	function __construct() {
		$this->Field = new \Engineer\field;
	}
	function field() {
		return $this->Field;
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