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

		$html = '';
		foreach($this->fields() as $key => $field) {
			$html .= $field;
			//$html = str_replace('class="field ', 'data-type="' . $field->type . '" data-name="' . $key . '" class="field engineer-field ', $html);
		}

		return $html;
	}

	public function __toString() {
		return $this->toHTML();
	}
}