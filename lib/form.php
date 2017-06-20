<?php
use Kirby\Panel\Form;
use Kirby\Panel\Form\Plugins;

class EngineerForm extends Form {
	public $tag = 'div';
	public $page = null;

	public function __construct($fields = array(), $values = array(), $page) {
		kirby()->set('option', 'engineer.page', $page);
		
		$this->fields = new Collection;
		$this->plugins = new Plugins();
		$this->values($values);
		$this->fields($fields);
	}

	public function toHTML() {
		if($this->message) {
			$this->append($this->message);
		}

		$html = '';
		foreach($this->fields() as $key => $field) {
			$html .= $field;
		}

		return $html;
	}

	public function __toString() {
		return $this->toHTML();
	}

	static public function field($type, $options = array()) {
		$class = $type . 'field';

		if(!class_exists($class)) {
			throw new Exception('The ' . $type . ' field is missing. Please add it to your installed fields or remove it from your blueprint');      
		}

		$page = kirby()->get('option', 'engineer.page');

		$field = new $class;
		$field->page = $page;

		foreach($options as $key => $value) {
			$field->$key = $value;
		}

		return $field;
	}
}