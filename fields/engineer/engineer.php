<?php
class EngineerField extends BaseField {
	static public $assets;

	public function __construct() {
		$this->Presentation = new \Engineer\Presentation();
		$this->PresentationArray = new \Engineer\PresentationArray();
		$this->Outline = new \Engineer\Outline();
		$this->Field = new \Engineer\Field();
	}

	public function presentation() {
		return $this->Presentation;
	}

	public function presentationArray() {
		return $this->PresentationArray;
	}

	public function outline() {
		return $this->Outline;
	}

	public function setField() {
		return $this->Field();
	}

	public function input() {
		$blueprint = $this->page->blueprint()->yaml['fields'][$this->name];

		$outline = $this->outline()->set($blueprint, $this->name);
		$presentation_array = $this->presentationArray()->prepare($blueprint);

		$presentation = $this->presentation()->set($presentation_array, yaml($this->value));
		unset($presentation['label']);

		kirby()->set('option', 'egr.count', 0);

		$args['args'] = array(
			'instance' => $this,
			'outline' => array(
				'instance' => $this,
				'outline' => $outline
			),
			'presentation' => array(
				'instance' => $this,
				'presentation' => $presentation,
				'field_name' => $this->name,
				'id' => $this->name
			),
		);

		$template = egr::snippet('template', $args);
		return $template;
	}

	public function element() {
		$element = parent::element();
		$element->data('field', 'engineer');
		$element->data('name', $this->name);
		return $element;
	}
}

if(c::get('engineer.debug', false)) {
	EngineerField::$assets = array(
		'css' => array('style.css'),
		'js' => array('script.js'),
	);
} else {
	EngineerField::$assets = array(
		'css' => array('style.min.css'),
		'js' => array('script.min.js'),
	);
}