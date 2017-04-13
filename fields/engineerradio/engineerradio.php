<?php
class EngineerradioField extends RadioField {
	public function __construct() {
		parent::__construct();
		$this->page = page(kirby()->get('option', 'engineer.page.id'));
	}
}