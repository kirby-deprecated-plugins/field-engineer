<?php
class egr {
	public static function oddEven($level) {
		return ($level % 2 == 0) ? 'egr-even' : 'egr-odd';
	}

	public static function snippet($name, $data = array()) {
		$path = kirby()->roots()->plugins() . DS . 'field-engineer' . DS . 'snippets' . DS . $name . '.php';
		return tpl::load($path, $data);
	}
}