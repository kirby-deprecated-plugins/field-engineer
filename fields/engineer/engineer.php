<?php
class EngineerField extends BaseField {
	static public $assets = array(
		'js' => array(
			'script.js',
			'add.js',
			'render.js'
		),
		'css' => array(
			'style.css',
		)
	);

	public function label() {
		$html = tpl::load( __DIR__ . DS . 'label.php', $data = array(
			'field' => $this,
			'page' => $this->page
		));
		return $html;
	}

	public function input() {
		kirby()->set('option', 'engineer.page.id', $this->page->id());

		$this->base = new Field\Engineer\Base;
		$this->TableRowHidden = new Field\Engineer\TableRowHidden;
		$this->TableRow = new Field\Engineer\TableRow;

		$fields = $this->page()->blueprint()->fields($this)->toArray();
		$engineer_field = $fields[$this->name];

		$html = tpl::load( __DIR__ . DS . 'template.php', $data = array(
			'field' => $this,
			'fields' => $fields,
			'engineer_field' => $engineer_field,
			'page' => $this->page
		));
		return $html;
	}

	public function base() {
		return $this->base;
	}

	public function tableRow() {
		return $this->TableRow;
	}

	public function tableRowHidden() {
		return $this->TableRowHidden;
	}

	public function element() {
		$element = parent::element();
		$element->data('field', 'engineer');
		$element->data('name', $this->name);
		return $element;
	}
}