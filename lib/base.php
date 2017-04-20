<?php
namespace Field\Engineer;
use yaml;

class Base {
	public function prefix($subfield) {
		$type_prefix = 'engineer';
		switch($subfield['type']) {
			case 'image':
			case 'select':
			case 'checkboxes':
			case 'page':
			case 'user':
			case 'radio':
			case 'tags':
				$subfield['type'] = $type_prefix . $subfield['type'];
				break;
		};
		return $subfield;
	}

	public function removeLabel($subfield) {
		$subfield['label'] = '';
		return $subfield;
	}

	public function fixTextarea($subfield) {
		if($subfield['type'] == 'textarea') {
			$subfield['buttons'] = false;
		}
		return $subfield;
	}

	public function fixBool($value) {
		if(is_bool($value)) {
			$value = $value ? 'true' : 'false';
		}
		return $value;
	}

	public function setValue($key, $rows = null, $i = null) {
		if(isset($rows) && isset($rows[$i][$key])) {
			return $rows[$i][$key];
		}
		return '';
	}

	public function setInput($name, $subfield) {
		$input = array($name => $subfield);
		return $input;
	}

	public function manipulate($form, $key) {
		$type = $form->fields->{$this->name}->type;

		$type = str_replace('engineer', '', $type);
		$html = str_replace('class="field ', 'data-type="' . $type . '" data-name="' . $key . '" class="field engineer-field ', $form);
		return $html;
	}

	public function prepareForm($field, $key, $i, $rows, $subfield) {
		$this->instance_name = $field->name();

		$this->name = $this->setName($key, $i);

		$this->value = $this->setValue($key, $rows, $i);
		$this->value = $this->fixBool($this->value);

		$subfield = $this->prefix($subfield);
		$subfield = $this->removeLabel($subfield);
		$subfield = $this->fixTextarea($subfield);

		$this->input = $this->setInput($this->name, $subfield);
	}

	public function setForm($field, $key, $i, $rows, $subfield) {
		$prepare = $this->prepareForm($field, $key, $i, $rows, $subfield);
		$form = (string)new \EngineerForm($this->input, array($this->name => $this->value));
		return $form;
	}
}