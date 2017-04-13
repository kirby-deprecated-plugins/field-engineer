<?php
use Kirby\Panel\Form;

class EngineerForm extends Form {
	public $tag = 'div';

	public function __construct($fields = array(), $values = array(), $parent = false) {
		$this->fields = new Collection;
		$this->values($values);
		$this->fields($fields);
	}

	public function toHTML() {
		if($this->message) {
			$this->append($this->message);
		}

		$fieldset = new Brick('div');
		foreach($this->fields() as $field) {
			$this->append($field);
		}
		$this->addClass('engineer-item');
		return $this;
	}
}