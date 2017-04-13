<?php
namespace Field\Engineer;

class TableRow extends Base {
	public function setName($key, $i) {
		$name = 'engineer_' . $this->instance_name . '_' . $i . '_' . $key;
		return $name;
	}

	public function setForm($field, $key, $i, $rows, $subfield) {
		$prepare = $this->prepareForm($field, $key, $i, $rows, $subfield);
		$form = (string)new \EngineerForm($this->input, array($this->name => $this->value));
		return $form;
	}
}