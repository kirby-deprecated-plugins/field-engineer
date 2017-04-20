<?php
namespace Field\Engineer;

class TableRow extends Base {
	public function setName($key, $i) {
		$name = 'engineer_' . $this->instance_name . '_' . $i . '_' . $key;
		return $name;
	}

	public function prepareForm($field, $key, $i, $rows, $subfield) {
		$this->instance_name = $field->name();

		$this->name = $this->setName($key, $i);

		$this->value = $this->setValue($key, $rows, $i);
		$this->value = $this->fixBool($this->value);
		
		unset($subfield['width']);

		$subfield = $this->prefix($subfield);
		$subfield = $this->removeLabel($subfield);
		$subfield = $this->fixTextarea($subfield);

		$this->input = $this->setInput($this->name, $subfield);
	}

	public function setForm($field, $key, $i, $rows, $subfield) {
		$prepare = $this->prepareForm($field, $key, $i, $rows, $subfield);
		$form = new \EngineerForm($this->input, array($this->name => $this->value));
		$html = $this->manipulate($form, $key);
		return $html;
	}
}