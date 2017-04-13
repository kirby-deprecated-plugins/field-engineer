<?php
namespace Field\Engineer;

class ItemsRowHidden extends Base {
	public function setName($key, $i = null) {
		$name = 'engineer_' . $this->instance_name . '_engineersuffix_' . $key;
		return $name;
	}

	public function prepareForm($field, $key, $i, $rows, $subfield) {
		$this->instance_name = $field->name();

		$this->name = $this->setName($key, $i);

		$this->value = $this->setValue($key, $rows, $i);
		$this->value = $this->fixBool($this->value);

		$subfield = $this->prefix($subfield);
		$subfield = $this->fixTextarea($subfield);

		$this->input = $this->setInput($this->name, $subfield);
	}

	public function setForm($field, $key, $i, $rows, $subfield) {
		$prepare = $this->prepareForm($field, $key, $i, $rows, $subfield);
		$form = (string)new \EngineerForm($this->input);
		return $form;
	}
}