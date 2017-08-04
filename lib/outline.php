<?php
namespace Engineer;

class Outline {
	function set($field, $name, $out = array(), $level = 0) {
		if(isset($field['type']) && $field['type'] == 'engineer') {
			$out[$name] = $this->mergeFieldsets($field);

			if(isset($out[$name]['fieldsets'])) {
				foreach($out[$name]['fieldsets'] as $fieldset_name => $fieldset) {
					if(isset($fieldset['fields'])) {
						$dropdown = $this->dropdown($fieldset);
						if(!empty($dropdown)) {
							$out[$name]['fieldsets'][$fieldset_name]['_dropdown'] = $dropdown;
						}
						foreach($fieldset['fields'] as $field_name => $field) {
							$out[$name]['_level'] = $level;

							if(isset($field['label'])) {
								$out[$name]['_label'] = $field['label'];
							}
							
							$out = $this->set($field, $name . ',' . $field_name, $out, $out[$name]['_level'] + 1);
							if(isset($field['buttons'])) {
								$out[$name . ',' . $field_name]['buttons'] = $field['buttons'];
							}

							if($field['type'] == 'engineer' && isset($field['width'])) {
								$out[$name . ',' . $field_name]['width'] = $field['width'];
							}

							if(isset($field['style'])) {
								$out[$name . ',' . $field_name]['_style'] = $field['style'];
							}
						}
					}
				}
			}
		}
		return $out;
	}

	function mergeFieldsets($field) {
		if(isset($field['fields'])) {
			$out['fieldsets']['default']['fields'] = $field['fields'];
		}
		if(isset($field['fieldsets'])) {
			if(isset($field['fields'])) {
				$out['fieldsets'] += $field['fieldsets'];
			} else {
				$out['fieldsets'] = $field['fieldsets'];
			}
		}
		return $out;
	}

	function dropdown($fieldset) {
		$out = array();
		if(isset($fieldset['fields'])) {
			foreach($fieldset['fields'] as $field_name => $field) {
				if($field['type'] == 'engineer') {
					if(isset($field['label'])) {
						$out[$field_name]['label'] = $field['label'];
					}
					if(isset($field['fields'])) {
						$out[$field_name]['sets'] = array(
							'default' => 'Default'
						);
					}
					if(isset($field['fieldsets'])) {
						foreach($field['fieldsets'] as $fieldset_name => $fieldset) {
							$fieldset_label = (isset($fieldset['label'])) ? $fieldset['label'] : $fieldset_name;
							$out[$field_name]['sets'][$fieldset_name] = $fieldset_label;
						}
					}
				}
			}
			return $out;
		}
	}
}