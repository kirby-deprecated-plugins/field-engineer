<?php
class EngineertagsField extends TagsField {
	public function __construct() {
		parent::__construct();
		$this->page = page(kirby()->get('option', 'engineer.page.id'));
	}
}