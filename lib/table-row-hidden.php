<?php
namespace Field\Engineer;

class TableRowHidden extends Base {
	public function setName($key, $i = null) {
		$name = 'engineer_' . $this->instance_name . '_engineersuffix_' . $key;
		return $name;
	}
	public function setForm($field, $key, $i, $rows, $subfield) {
		$prepare = $this->prepareForm($field, $key, $i, $rows, $subfield);
		$form = (string)new \EngineerForm($this->input);
		return $form;
	}
}