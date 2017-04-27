<?php
class EngineercheckboxesField extends CheckboxesField {
	public function __construct() {
		$this->page = page(kirby()->get('option', 'engineer.page.id'));
	}
}