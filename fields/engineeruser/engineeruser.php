<?php
class EngineeruserField extends UserField {
	public function __construct() {
		parent::__construct();
		$this->page = page(kirby()->get('option', 'engineer.page.id'));
	}
}