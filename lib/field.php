<?php
namespace Engineer;
use c;

class Field {
	function data($key, $subfield, $page, $count = false) {
		if(!c::get('engineer.label.fallback', true)) {
			if(!isset($subfield['label'])) {
				$subfield['label'] = '';
			}
		}
		if($count) {
			$count = '_i' . kirby()->set('option', 'egr.count', kirby()->get('option', 'egr.count', 0) + 1);
		}

		$value = (isset($subfield['value'])) ? $subfield['value'] : null;
		$suffix = $count . '_egr__';
		$name = $key . $suffix;
		$subfield = $this->fixSubfield($subfield);
		$form = new \EngineerForm(
			array($name => $subfield),
			array($name => $value),
			$page
		);
		$form = $this->fixLabel($form);
		$form = $this->manipulate($form, $key, $suffix);
		return $form;
	}

	function fixLabel($form) {
		return str_replace('<label class="label" for="', '<label class="label" data-for="', $form);
	}

	function fixSubfield($subfield) {
		$subfield = $this->fixTextarea($subfield);
		$subfield = $this->fixBool($subfield);
		return $subfield;
	}

	function fixTextarea($subfield) {
		if($subfield['type'] == 'textarea') {
			$subfield['buttons'] = false;
		}
		return $subfield;
	}

	function fixBool($value) {
		if(is_bool($value)) {
			$value = $value ? 'true' : 'false';
		}
		return $value;
	}

	function manipulate($form, $key, $suffix) {
		$html = str_replace('<div class="field ', '<div data-prefix="' . $suffix . '" data-field-name="' . $key . '" class="field egr-field ', $form);
		return $html;
	}
}