<?php
class egr {
	public static function oddEven($level) {
		return ($level % 2 == 0) ? 'egr-even' : 'egr-odd';
	}

	public static function snippet($name, $data = array()) {
		$path = kirby()->roots()->plugins() . DS . 'field-engineer' . DS . 'snippets' . DS . $name . '.php';
		return tpl::load($path, $data);
	}

	public static function grid($field) {
		$grid = '';
		if(isset($field['rowWidth'])) {
			$grid = ' egr-grid-item egr-grid-item-' . str_replace('/', '-', $field['rowWidth']);
		}
		return $grid;
	}

	public static function buttons($set) {
		$buttons = array();
		if(isset($set['buttons'])) {
			$buttons = $set['buttons'];
		}
		return $buttons;
	}

	public static function count($field) {
		$count = 0;
		if(isset($field['sets'])) {
			$count = count($field['sets']);
		}
		return $count;
	}

	public static function style($set) {
		$style = '';
		if(isset($set['style'])) {
			$style = ' egr-style-' . $set['style'];
		}
		return $style;
	}
}