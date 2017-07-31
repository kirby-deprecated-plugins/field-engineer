<?php
if(class_exists('Panel') && site()->user()) {
	require_once __DIR__ . DS . 'lib' . DS . 'form.php';
	require_once __DIR__ . DS . 'lib' . DS . 'field.php';
	require_once __DIR__ . DS . 'lib' . DS . 'tpl.php';
	require_once __DIR__ . DS . 'lib' . DS . 'presentation.php';
	require_once __DIR__ . DS . 'lib' . DS . 'presentation-array.php';
	require_once __DIR__ . DS . 'lib' . DS . 'outline.php';

	if(c::get('engineer.debug', true)) {

		c::set('plugin.logic.field', function($field, $page) {
			return '<p><strong>Field name:</strong> ' . $field->name() . '<br><strong>Panel page</strong>: ' . $page->title() . '</p>';
		});

		foreach(glob(__DIR__ . DS . 'tests' . DS . 'blueprints' . DS . '*') as $filename) {
			$parts = pathinfo($filename);
			$kirby->set('blueprint', $parts['filename'], $filename);
		}

		class MyPlugin {
			static function userlist($field) {
				$kirby = kirby();
				$site = $kirby->site();
				$users = $site->users();

				$result = array();

				foreach ($users as $user) {
					$result[$user->username] = $user->firstName() . ' ' . $user->lastName();
				}

				return $result;
			}
		}
	}
	
	$kirby->set('field', 'engineer', __DIR__ . DS . 'fields' . DS . 'engineer');
}